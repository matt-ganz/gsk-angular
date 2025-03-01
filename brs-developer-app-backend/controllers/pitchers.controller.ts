import { Request, Response, NextFunction } from 'express';
import { snowflakeClient, PlayersQueryParams } from '../snowflake';

export const getPitchesByPlayer = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const pitches = await snowflakeClient.getPitchesByPlayer(+request.params.id);
    response.status(200).json(pitches);
  } catch (error) {
    response.status(500).send(null);
  }
};

export const getPitchesByGame = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const pitches = await snowflakeClient.getPitchesByGame(+request.params.gamePk);
    response.status(200).json(pitches);
  } catch (error) {
    response.status(500).send(null);
  }
};
