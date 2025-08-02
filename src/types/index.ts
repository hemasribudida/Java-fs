export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  clearCompleted: () => void;
  getTodoStats: () => {
    total: number;
    completed: number;
    pending: number;
  };
}

export type FilterType = 'all' | 'active' | 'completed';

export interface NavigationProps {
  navigation: any;
  route: any;
}