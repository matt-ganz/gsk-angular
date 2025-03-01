import { Request, Response, NextFunction } from 'express';
import { snowflakeClient, PlayersQueryParams } from '../snowflake';

export const getPlayer = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const player = await snowflakeClient.getPlayer(+request.params.id);

    response.status(200).json(player);
  } catch (error) {
    response.status(500).send(null);
  }
};

export const getPlayers = async (
  request: Request<{}, {}, {}, PlayersQueryParams>,
  response: Response,
  next: NextFunction
) => {
  try {
    const players = await snowflakeClient.getPlayers(request.query);
    response.status(200).json(players);
  } catch (error) {
    response.status(500).send(null);
  }
};
