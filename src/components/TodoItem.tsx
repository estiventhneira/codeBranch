/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const TodoItem = ({title, deleteMethod}) => {
  const [done, setDone] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 7,
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '70%',
        }}
        onPress={() => {
          setDone(!done);
        }}>
        <Text>{title}</Text>
        {done ? <Text>done</Text> : null}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          deleteMethod(title);
        }}>
        <Text style={{marginLeft: 20}}>Borrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
