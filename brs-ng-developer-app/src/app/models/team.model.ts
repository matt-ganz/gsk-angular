export interface TeamModel {
  teamId: string;
  name: string;
  nickname: string;
  abbrev: string;
  levelId: number;
  level: string;
  isPro: number;

  stateId?: number;
  state?: string;
  mlbId?: number;
}
