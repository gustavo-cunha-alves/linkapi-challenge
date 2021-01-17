export interface IDeal {
  id: number;
  title: string;
  value: number;
  status: string;
  won_time: Date;
  org_name: string;
}

export interface IDealProvider {
  getWonDeals(): Promise<IDeal[]>;
}