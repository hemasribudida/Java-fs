import React, { useState, useMemo } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useTodoContext } from '../../hooks/useTodoContext';
import { FilterType } from '../../types';
import TodoItem from '../TodoItem/TodoItem';

const TodoList: React.FC = () => {
  const { todos, clearCompleted, getTodoStats } = useTodoContext();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const stats = getTodoStats();

  const handleClearCompleted = () => {
    if (stats.completed === 0) {
      Alert.alert('No Completed Todos', 'There are no completed todos to clear.');
      return;
    }

    Alert.alert(
      'Clear Completed Todos',
      `Are you sure you want to clear ${stats.completed} completed todo${stats.completed === 1 ? '' : 's'}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Clear', style: 'destructive', onPress: clearCompleted },
      ]
    );
  };

  const renderTodoItem = ({ item }: { item: any }) => (
    <TodoItem todo={item} />
  );

  const renderHeader = () => (
    <View style={styles.header}>
      {/* Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>
          {stats.total} todo{stats.total === 1 ? '' : 's'}, {stats.completed} completed
        </Text>
        {stats.completed > 0 && (
          <TouchableOpacity style={styles.clearButton} onPress={handleClearCompleted}>
            <Text style={styles.clearButtonText}>Clear Completed</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Filters */}
      <View style={styles.filterContainer}>
        {(['all', 'active', 'completed'] as FilterType[]).map((filterType) => (
          <TouchableOpacity
            key={filterType}
            style={[
              styles.filterButton,
              filter === filterType && styles.filterButtonActive,
            ]}
            onPress={() => setFilter(filterType)}
          >
            <Text
              style={[
                styles.filterButtonText,
                filter === filterType && styles.filterButtonTextActive,
              ]}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              {filterType === 'all' && ` (${stats.total})`}
              {filterType === 'active' && ` (${stats.pending})`}
              {filterType === 'completed' && ` (${stats.completed})`}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        {filter === 'all' && 'No todos yet. Add one above!'}
        {filter === 'active' && 'No active todos!'}
        {filter === 'completed' && 'No completed todos!'}
      </Text>
      {filter === 'all' && (
        <Text style={styles.emptySubtext}>
          Tap the input above to create your first todo
        </Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTodos}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={todos.length > 0 ? renderHeader : null}
        ListEmptyComponent={renderEmptyComponent}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.listContent,
          filteredTodos.length === 0 && styles.listContentEmpty,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    paddingVertical: 8,
  },
  listContentEmpty: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#fff',
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statsText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  clearButton: {
    backgroundColor: '#ff4444',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  filterContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 4,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#007AFF',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  filterButtonTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
  },
});

export default TodoList;