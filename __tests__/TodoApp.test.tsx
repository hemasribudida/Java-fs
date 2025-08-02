import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { TodoProvider } from '../src/hooks/useTodoContext';
import HomeScreen from '../src/screens/HomeScreen';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

const TestApp = () => (
  <TodoProvider>
    <HomeScreen />
  </TodoProvider>
);

describe('TodoApp', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the main screen with header', () => {
    const { getByText } = render(<TestApp />);
    
    expect(getByText('My Todo App')).toBeTruthy();
    expect(getByText('Stay organized and productive')).toBeTruthy();
    expect(getByText('Add a new todo...')).toBeTruthy();
  });

  it('shows empty state when no todos exist', () => {
    const { getByText } = render(<TestApp />);
    
    expect(getByText('No todos yet. Add one above!')).toBeTruthy();
    expect(getByText('Tap the input above to create your first todo')).toBeTruthy();
  });

  it('can add a new todo', async () => {
    const { getByText, getByPlaceholderText } = render(<TestApp />);
    
    const input = getByPlaceholderText('Add a new todo...');
    const addButton = getByText('Add');
    
    fireEvent.changeText(input, 'Test todo item');
    fireEvent.press(addButton);
    
    await waitFor(() => {
      expect(getByText('Test todo item')).toBeTruthy();
    });
  });

  it('validates todo text input', () => {
    const { getByText, getByPlaceholderText } = render(<TestApp />);
    
    const input = getByPlaceholderText('Add a new todo...');
    const addButton = getByText('Add');
    
    // Try to add empty todo
    fireEvent.changeText(input, '');
    fireEvent.press(addButton);
    
    // Should show validation alert
    expect(getByText('Invalid Todo')).toBeTruthy();
  });
});

describe('Todo Operations', () => {
  it('can toggle todo completion', async () => {
    const { getByText, getByPlaceholderText } = render(<TestApp />);
    
    // Add a todo first
    const input = getByPlaceholderText('Add a new todo...');
    fireEvent.changeText(input, 'Test todo');
    fireEvent.press(getByText('Add'));
    
    await waitFor(() => {
      const todoItem = getByText('Test todo');
      expect(todoItem).toBeTruthy();
      
      // Find and press the checkbox
      const checkbox = todoItem.parent?.parent?.children[0];
      fireEvent.press(checkbox);
    });
  });
});