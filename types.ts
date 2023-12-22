
export type Task = {
  id: string
  completed: boolean;
  task: string;
  priority: 'High' | 'Normal' | 'Low'
};

export type Wish = {
  id: string
  completed: boolean;
  wish: string;
  priority: 'High' | 'Normal' | 'Low'
};
