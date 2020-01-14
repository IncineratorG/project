import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const MainScreen = () => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);

  const plusButtonHandler = () => {
    if (number < 5) {
      setNumber(number + 1);
    }
  };
  const minusButtonHandler = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const changeTextHandler = textValue => {
    setText(textValue);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.naimPage}>Главный Экран</Text>
      <View style={styles.nameInputContainer}>
        <TextInput
          style={styles.nameInput}
          value={text}
          placeholder="Поле ввода"
          onChangeText={changeTextHandler}
        />
      </View>
      <Text> {number} </Text>
      <View>
        <Button title={'Плюс'} onPress={plusButtonHandler} />
      </View>
      <View>
        <Button title={'Минус'} onPress={minusButtonHandler} />
      </View>
      <Text> {number + ' ' + text} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    // backgroundColor: 'red',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  naimPage: {
    marginTop: 10,
    height: 50,
    color: 'purple',
    fontSize: 25,
  },
  nameInputContainer: {
    marginTop: 10,
    // flex: 1,
    // padding: 10,
    // backgroundColor: 'green',
    // alignSelf: 'center',
    //  justifyContent: 'center',
    // alignItems: 'center',
  },
  nameInput: {
    height: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    fontSize: 20,
  },
});

export default MainScreen;
