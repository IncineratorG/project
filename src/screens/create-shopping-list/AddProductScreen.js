import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import {LoadShoppingList} from '../../store/actions/shoppingListActions';
import {addProduct} from '../../store/actions/shoppingListActions';

const AddProductScreen = () => {
  const dispatch = useDispatch();
  const [productName, setproductName] = useState('');
  const [count, setCount] = useState('');
  const [countType, setCountType] = useState('');
  const [note, setNote] = useState('');

  // let shoppingLists = useSelector(state => state.shoppingList.allShoppingLists);

  const ProductNameChangeHandler = textValue => {
    setproductName(textValue);
  };

  const CountChangeHandler = textValue => {
    setCount(textValue);
  };

  const CountTypeChangeHandler = textValue => {
    setCountType(textValue);
  };

  const NoteChangeHandler = textValue => {
    setNote(textValue);
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <View style={styles.nameInputContainer}>
        <TextInput
          style={styles.nameInput}
          value={productName}
          placeholder="Название продукта"
          onChangeText={ProductNameChangeHandler}
        />
        <TextInput
          style={styles.quantityInput}
          value={count}
          placeholder="Колличество"
          onChangeText={CountChangeHandler}
        />
        <TextInput
          style={styles.unitInput}
          value={countType}
          placeholder="Единица"
          onChangeText={CountTypeChangeHandler}
        />
        <TextInput
          style={styles.noteInput}
          value={note}
          placeholder="Примечание"
          onChangeText={NoteChangeHandler}
        />
      </View>
      <View style={styles.button}>
        <Button title={'Сохранить'} color={'#20B2AA'} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    flex: 1,
  },
  nameInputContainer: {
    flex: 1,
  },
  nameInput: {
    height: 70,
    fontSize: 20,
    // backgroundColor: 'purple',
  },
  quantityInput: {
    height: 70,
    fontSize: 20,
  },
  unitInput: {
    height: 70,
    fontSize: 20,
  },
  noteInput: {
    height: 70,
    fontSize: 20,
  },
  button: {
    justifyContent: 'flex-end',
    // flex: 1,
    // backgroundColor: 'grey',
  },
});

export default AddProductScreen;
