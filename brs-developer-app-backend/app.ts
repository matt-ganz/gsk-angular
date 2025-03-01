import express from 'express';
import cors from 'cors';
import { getPlayer, getPlayers } from './controllers/players.controller';
import { getPitchesByGame, getPitchesByPlayer } from './controllers/pitchers.controller';

const app = express();
const port = 3001;

app.use(cors());

app.listen(port, () => {
  console.log(`Red Sox systems exercise api running on port ${port}.`);
});

app.get('/players', getPlayers);
app.get('/players/:id', getPlayer);
app.get('/players/:id/pitches', getPitchesByPlayer);
app.get('/games/:gamePk/pitches', getPitchesByGame);
