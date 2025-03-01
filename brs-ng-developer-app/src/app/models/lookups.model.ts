import { TeamModel } from 'src/app/models/team.model';
import { CountryModel } from 'src/app/models/country.model';
import { HandModel } from 'src/app/models/hand.model';
import { LevelModel } from 'src/app/models/level.model';
import { PositionModel } from 'src/app/models/position.model';
import { RoleModel } from 'src/app/models/role.model';

export interface LookupsModel {
  countries: CountryModel[];
  hands: HandModel[];
  levels: LevelModel[];
  organizations: TeamModel[];
  positions: PositionModel[];
  roles: RoleModel[];
}
