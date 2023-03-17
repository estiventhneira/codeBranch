import {SafeAreaView, FlatList, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';
import TodoItem from './components/TodoItem';

const App = () => {
  const [todos, setTodos] = useState([{title: 'Hola'}, {title: 'Adios'}]);
  const TextInputRef = useRef();

  const deleteMethod = (title: string) => {
    const newTodos = todos.filter(todo => todo.title !== title);
    setTodos(newTodos);
  };

  return (
    <SafeAreaView>
      <TextInput
        ref={TextInputRef}
        placeholder="Add new todos "
        onSubmitEditing={e => {
          setTodos([...todos, {title: e.nativeEvent.text}]);
          TextInputRef.current.clear();
        }}
      />
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <TodoItem title={item.title} deleteMethod={deleteMethod} />
        )}
      />
    </SafeAreaView>
  );
};

export default App;
