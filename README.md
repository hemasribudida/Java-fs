# 📱 Todo Mobile App

A beautiful, feature-rich Todo application built with React Native and TypeScript. This app demonstrates modern mobile development practices including state management, local storage, and comprehensive testing.

## ✨ Features

- ✅ **Add Todos**: Create new tasks with ease
- 🔄 **Toggle Completion**: Mark tasks as complete/incomplete
- ✏️ **Edit Todos**: Inline editing of existing tasks
- 🗑️ **Delete Todos**: Remove unwanted tasks
- 🎯 **Filter Todos**: View all, active, or completed tasks
- 📊 **Statistics**: Real-time stats showing total, completed, and pending tasks
- 💾 **Persistent Storage**: Tasks are saved locally using AsyncStorage
- 🧪 **Comprehensive Testing**: Unit tests for all major functionality
- 🎨 **Modern UI**: Clean, intuitive design with smooth animations

## 🛠️ Technologies Used

- **React Native** 0.76.5 - Cross-platform mobile framework
- **TypeScript** - Type-safe JavaScript
- **React Context + useReducer** - State management
- **AsyncStorage** - Local data persistence
- **React Testing Library** - Component testing
- **Jest** - Test runner

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── AddTodo/         # Todo input component
│   ├── TodoItem/        # Individual todo item
│   └── TodoList/        # List with filtering
├── hooks/               # Custom React hooks
│   └── useTodoContext.tsx   # Global state management
├── screens/             # App screens
│   └── HomeScreen.tsx   # Main app screen
├── types/               # TypeScript type definitions
│   └── index.ts         # App-wide types
└── utils/               # Utility functions
    ├── storage.ts       # AsyncStorage helpers
    └── helpers.ts       # General utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 18)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TodoApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

1. **Start Metro bundler**
   ```bash
   npm start
   ```

2. **Run on Android**
   ```bash
   npm run android
   ```

3. **Run on iOS** (macOS only)
   ```bash
   npm run ios
   ```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm test -- --watch
```

## 📱 App Architecture

### State Management
The app uses React Context with useReducer for global state management:
- **TodoProvider**: Wraps the entire app and provides todo state
- **useTodoContext**: Custom hook for consuming todo state
- **Reducer Pattern**: Predictable state updates with action types

### Data Persistence
- **AsyncStorage**: Local storage for todos
- **Automatic Sync**: State changes are automatically persisted
- **Error Handling**: Graceful handling of storage errors

### Component Architecture
- **Functional Components**: All components use React hooks
- **TypeScript**: Full type safety throughout the app
- **Separation of Concerns**: Clear separation between UI and business logic

## 🔧 Key Learning Concepts

### For React Native Beginners:

1. **Project Setup**: How to create and configure a React Native project
2. **Component Creation**: Building reusable UI components
3. **State Management**: Using Context API for global state
4. **Navigation**: Basic navigation concepts
5. **Storage**: Persisting data locally
6. **Testing**: Writing unit tests for mobile apps
7. **TypeScript**: Type safety in React Native apps

### Advanced Concepts Demonstrated:

1. **Custom Hooks**: Creating reusable logic with hooks
2. **Reducer Pattern**: Managing complex state with useReducer
3. **Performance**: Optimizing lists with FlatList and useMemo
4. **User Experience**: Keyboard handling, alerts, and animations
5. **Error Handling**: Graceful error management
6. **Testing Strategy**: Comprehensive test coverage

## 📋 TODO Operations

The app supports full CRUD operations:

- **Create**: Add new todos with validation
- **Read**: Display todos with filtering options
- **Update**: Edit todo text and toggle completion
- **Delete**: Remove todos with confirmation

## 🎨 UI/UX Features

- **Modern Design**: Clean, iOS-inspired interface
- **Responsive Layout**: Works on all screen sizes
- **Accessibility**: Screen reader friendly
- **Smooth Animations**: Subtle transitions and feedback
- **Keyboard Handling**: Proper keyboard dismissal
- **Empty States**: Helpful messages when no todos exist

## 🔮 Future Enhancements

- [ ] Add categories/tags for todos
- [ ] Implement due dates and reminders
- [ ] Add search functionality
- [ ] Implement cloud synchronization
- [ ] Add dark mode support
- [ ] Include priority levels
- [ ] Add subtasks support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📖 Learning Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Context API](https://reactjs.org/docs/context.html)
- [AsyncStorage Guide](https://react-native-async-storage.github.io/async-storage/)
- [React Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/)

---

**Happy coding! 🚀**