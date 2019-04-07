export class Meditation {
  id: number;
  name: string;
  goal: boolean;
  timeSpent: number;
  recommendedTime: number;
  feelingRate: number;

  constructor(
    id?: number,
    name?: string,
    goal?: boolean,
    timeSpent?: number,
    recommendedTime?: number,
    feelingRate?: number, ) {
      this.id = id;
      this.name = name;
      this.goal = goal;
      this.timeSpent = timeSpent;
      this.recommendedTime = recommendedTime;
      this.feelingRate = feelingRate;

  }
}
