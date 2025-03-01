import { createConnection, configure, Connection, SnowflakeError } from 'snowflake-sdk';
import { config } from './config';

interface PlayersQueryParams {
  nameSearch: string;
  orgId: number;
  sortField: string;
  positionId: number;
  battingHand: string;
  sortDir: 'asc' | 'desc';
}

class SnowflakeClient {
  snowflakeConnection: Connection;

  constructor(username: string, password: string) {
    this.snowflakeConnection = createConnection({
      account: 'redsoxbbops.east-us-2.azure',
      username: username,
      password: password,
      authenticator: 'SNOWFLAKE',
      database: 'INTERVIEW',
      warehouse: 'COMPUTE_WH',
      role: 'INTERVIEW_ROLE',
      clientSessionKeepAlive: true,
    });
    configure({ ocspFailOpen: false });
  }

  testConnection() {
    this.snowflakeConnection.connect((err, conn) => {
      if (err) {
        console.error('Unable to connect to Snowflake: ' + err.message);
      } else {
        console.log(
          'Successfully connected Snowflake with ID: ' + this.snowflakeConnection.getId()
        );
      }
    });
  }

  async getPlayer(id: number) {
    return new Promise((resolve, reject) => {
      this.snowflakeConnection.execute({
        sqlText: `SELECT * FROM PLAYER WHERE PERSONID = ${id}`,
        complete: (err, stmt, rows) => {
          if (err) {
            this.handleSnowflakeError(err, reject);
            return;
          }

          resolve(rows.length ? rows[0] : null);
        },
      });
    });
  }

  async getPlayers(params: PlayersQueryParams) {
    return new Promise((resolve, reject) => {
      this.snowflakeConnection.execute({
        sqlText: this.buildPlayerSearchQuery(params),
        complete: (err, stmt, rows) => {
          if (err) {
            this.handleSnowflakeError(err, reject);
            return;
          }

          resolve(rows);
        },
      });
    });
  }

  async getPitchesByPlayer(id: number) {
    return new Promise((resolve, reject) => {
      this.snowflakeConnection.execute({
        sqlText: `SELECT * FROM PITCH WHERE PITCHERID = ${id} ORDER BY GAMEPK, PITCHID`,
        complete: (err, stmt, rows) => {
          if (err) {
            this.handleSnowflakeError(err, reject);
            return;
          }

          resolve(rows);
        },
      });
    });
  }

  async getPitchesByGame(gamePk: number) {
    return new Promise((resolve, reject) => {
      this.snowflakeConnection.execute({
        sqlText: `SELECT * FROM PITCH WHERE GAMEPK = ${gamePk} ORDER BY GAMEPK, PITCHID`,
        complete: (err, stmt, rows) => {
          if (err) {
            this.handleSnowflakeError(err, reject);
            return;
          }

          resolve(rows);
        },
      });
    });
  }

  private buildPlayerSearchQuery(params: PlayersQueryParams): string {
    const querySegments: string[] = [`SELECT * FROM PLAYER`];
    const queryConditions: string[] = [];

    if (params.orgId) {
      queryConditions.push(`ORGID = ${params.orgId}`);
    }

    // Adding query conditions to allow filtering by position
    if (params.positionId) {
      queryConditions.push(`POSITIONID = ${params.positionId}`);
    }

    // Adding query conditions to allow filtering by batting hand
    // if (params.battingHands?.length > 0) {
    //   const formattedHands = params.battingHands.map((hand) => `'${hand}'`).join(', ');
    //   queryConditions.push(`BATTINGHAND IN (${formattedHands})`);
    // }

    if (params.battingHand) {
      queryConditions.push(`BATTINGHAND = '${params.battingHand}'`);
    }

    if (params.nameSearch) {
      queryConditions.push(
        `CONCAT(FIRSTNAME, ' ', LASTNAME) ILIKE '%${params.nameSearch}%' OR CONCAT(LASTNAME, ', ', FIRSTNAME) ILIKE '%${params.nameSearch}%'`
      );
    }

    if (queryConditions.length) {
      querySegments.push(
        'WHERE',
        queryConditions.map((condition) => `(${condition})`).join(' AND ')
      );
    }

    if (params.sortField) {
      querySegments.push(`ORDER BY ${params.sortField} ${params.sortDir || 'ASC'}`);
    }

    querySegments.push('LIMIT 100');

    return querySegments.join(' ');
  }

  private handleSnowflakeError(err: SnowflakeError, reject: (reason: any) => void) {
    console.error('Failed to execute Snowflake query: ' + err.message);
    reject(new Error(err.message));
    return err.message;
  }
}

const snowflakeClient = new SnowflakeClient(config.snowflakeUser, config.snowflakePassword);
snowflakeClient.testConnection();

export { snowflakeClient, PlayersQueryParams };
