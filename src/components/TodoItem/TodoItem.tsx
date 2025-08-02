import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
  Animated,
} from 'react-native';
import { Todo } from '../../types';
import { useTodoContext } from '../../hooks/useTodoContext';
import { formatDate, validateTodoText } from '../../utils/helpers';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const { toggleTodo, deleteTodo, updateTodo } = useTodoContext();

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Todo',
      'Are you sure you want to delete this todo?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => deleteTodo(todo.id) },
      ]
    );
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSave = () => {
    if (!validateTodoText(editText)) {
      Alert.alert(
        'Invalid Todo',
        'Please enter a valid todo text (1-200 characters).',
        [{ text: 'OK' }]
      );
      return;
    }

    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <View style={[styles.container, todo.completed && styles.completedContainer]}>
      {/* Checkbox */}
      <TouchableOpacity
        style={[styles.checkbox, todo.completed && styles.checkboxCompleted]}
        onPress={handleToggle}
      >
        {todo.completed && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.content}>
        {isEditing ? (
          <View style={styles.editContainer}>
            <TextInput
              style={styles.editInput}
              value={editText}
              onChangeText={setEditText}
              onSubmitEditing={handleSave}
              autoFocus
              multiline
              maxLength={200}
            />
            <View style={styles.editButtons}>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.todoText,
                todo.completed && styles.todoTextCompleted,
              ]}
              numberOfLines={3}
            >
              {todo.text}
            </Text>
            <Text style={styles.dateText}>
              {formatDate(todo.updatedAt)}
            </Text>
          </View>
        )}
      </View>

      {/* Actions */}
      {!isEditing && (
        <View style={styles.actions}>
          <TouchableOpacity style={styles.editActionButton} onPress={handleEdit}>
            <Text style={styles.actionButtonText}>✏️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteActionButton} onPress={handleDelete}>
            <Text style={styles.actionButtonText}>🗑️</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  completedContainer: {
    backgroundColor: '#f8f9fa',
    opacity: 0.8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  checkboxCompleted: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  todoText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 4,
  },
  todoTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  dateText: {
    fontSize: 12,
    color: '#999',
  },
  editContainer: {
    flex: 1,
  },
  editInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
    minHeight: 44,
  },
  editButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
    marginLeft: 8,
  },
  editActionButton: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#f0f0f0',
  },
  deleteActionButton: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#ffe6e6',
  },
  actionButtonText: {
    fontSize: 16,
  },
});

export default TodoItem;