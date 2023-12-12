
export type Task = {
  id: string
  completed: boolean;
  task: string;
  priority: 'Urgent' | 'Normal' | 'Low'
};
