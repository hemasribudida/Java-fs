import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Todo, TodoContextType } from '../types';
import { StorageUtils } from '../utils/storage';
import { generateId } from '../utils/helpers';

// Action types for reducer
type TodoAction =
  | { type: 'LOAD_TODOS'; payload: Todo[] }
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'UPDATE_TODO'; payload: { id: string; text: string } }
  | { type: 'CLEAR_COMPLETED' };

// Initial state
const initialState: Todo[] = [];

// Reducer function
const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case 'LOAD_TODOS':
      return action.payload;
    
    case 'ADD_TODO':
      const newTodo: Todo = {
        id: generateId(),
        text: action.payload,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      return [newTodo, ...state];
    
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
          : todo
      );
    
    case 'UPDATE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text, updatedAt: new Date() }
          : todo
      );
    
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);
    
    default:
      return state;
  }
};

// Create context
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Provider component
interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  // Load todos from storage on mount
  useEffect(() => {
    const loadTodos = async () => {
      const storedTodos = await StorageUtils.loadTodos();
      dispatch({ type: 'LOAD_TODOS', payload: storedTodos });
    };
    loadTodos();
  }, []);

  // Save todos to storage whenever todos change
  useEffect(() => {
    if (todos.length > 0 || todos.length === 0) {
      StorageUtils.saveTodos(todos);
    }
  }, [todos]);

  // Context methods
  const addTodo = (text: string) => {
    dispatch({ type: 'ADD_TODO', payload: text.trim() });
  };

  const deleteTodo = (id: string) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const toggleTodo = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const updateTodo = (id: string, text: string) => {
    dispatch({ type: 'UPDATE_TODO', payload: { id, text: text.trim() } });
  };

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  const getTodoStats = () => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  };

  const contextValue: TodoContextType = {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodo,
    clearCompleted,
    getTodoStats,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to use the todo context
export const useTodoContext = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};