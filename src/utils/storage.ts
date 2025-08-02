import AsyncStorage from '@react-native-async-storage/async-storage';
import { Todo } from '../types';

const TODOS_STORAGE_KEY = '@TodoApp:todos';

export const StorageUtils = {
  async saveTodos(todos: Todo[]): Promise<void> {
    try {
      const jsonTodos = JSON.stringify(todos.map(todo => ({
        ...todo,
        createdAt: todo.createdAt.toISOString(),
        updatedAt: todo.updatedAt.toISOString(),
      })));
      await AsyncStorage.setItem(TODOS_STORAGE_KEY, jsonTodos);
    } catch (error) {
      console.error('Error saving todos:', error);
    }
  },

  async loadTodos(): Promise<Todo[]> {
    try {
      const jsonTodos = await AsyncStorage.getItem(TODOS_STORAGE_KEY);
      if (jsonTodos === null) {
        return [];
      }
      
      const parsedTodos = JSON.parse(jsonTodos);
      return parsedTodos.map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
        updatedAt: new Date(todo.updatedAt),
      }));
    } catch (error) {
      console.error('Error loading todos:', error);
      return [];
    }
  },

  async clearTodos(): Promise<void> {
    try {
      await AsyncStorage.removeItem(TODOS_STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing todos:', error);
    }
  },
};