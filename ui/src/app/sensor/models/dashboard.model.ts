import { DashConfItem } from './dashConfItem.model';

export class Dashboard {
  constructor(public userId: number, public dashItems: DashConfItem[]) {}
}
