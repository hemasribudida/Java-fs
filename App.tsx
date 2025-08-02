import React from 'react';
import { TodoProvider } from './src/hooks/useTodoContext';
import HomeScreen from './src/screens/HomeScreen';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <HomeScreen />
    </TodoProvider>
  );
};

export default App;