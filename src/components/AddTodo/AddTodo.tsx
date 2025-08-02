import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  Keyboard,
} from 'react-native';
import { useTodoContext } from '../../hooks/useTodoContext';
import { validateTodoText } from '../../utils/helpers';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodoContext();

  const handleAddTodo = () => {
    if (!validateTodoText(text)) {
      Alert.alert(
        'Invalid Todo',
        'Please enter a valid todo text (1-200 characters).',
        [{ text: 'OK' }]
      );
      return;
    }

    addTodo(text);
    setText('');
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    if (text.trim()) {
      handleAddTodo();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo..."
          placeholderTextColor="#999"
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleSubmit}
          returnKeyType="done"
          maxLength={200}
          multiline={false}
        />
        <TouchableOpacity
          style={[
            styles.addButton,
            !text.trim() && styles.addButtonDisabled
          ]}
          onPress={handleAddTodo}
          disabled={!text.trim()}
        >
          <Text style={[
            styles.addButtonText,
            !text.trim() && styles.addButtonTextDisabled
          ]}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.charCount}>
        {text.length}/200
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
    marginRight: 12,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    minWidth: 60,
    alignItems: 'center',
  },
  addButtonDisabled: {
    backgroundColor: '#ccc',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  addButtonTextDisabled: {
    color: '#999',
  },
  charCount: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
});

export default AddTodo;