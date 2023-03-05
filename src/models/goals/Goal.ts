import IGoalCategory from './GoalCategory';

export default interface IGoal {
  id: string;
  name: string;
  category: IGoalCategory;
  deadline: Date | string;
  target: number;
  measurementUnit: string;
  numberOfTasks: number;
  progress: number;
}
