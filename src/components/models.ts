export interface Todo {
  id: number;
  content: string;
  description?: string;
  completed: boolean;
}

export interface Meta {
  totalCount: number;
}
