import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import ShoppingListItem from '../../components/shopping-list-screen/ShoppingListItem';
import {getLastValue} from '../../store/actions/projectActions';
import {LoadShoppingList} from '../../store/actions/shoppingListActions';
import {shoppingListReduser} from '../../store/reducers/shoppingListReducer';
import {addProduct} from '../../store/actions/shoppingListActions';

const DATA = useSelector;

const MainShoppingListScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadShoppingList());
  });

  let shoppingList = useSelector(
    state => state.shoppingListReduser.allShoppingLists,
  );

  const deleteAllHandler = () => {
    dispatch(LoadShoppingList());
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <FlatList
        data={shoppingList}
        renderItem={({item}) => {
          return <ShoppingListItem item={item} />;
        }}
      />
      <View style={styles.button}>
        <View style={styles.deleteButton}>
          <Button
            style={styles.deleteButtonStyle}
            title={'Удалить Все'}
            color={'#FF7F50'}
            onPress={deleteAllHandler}
          />
        </View>
        <View style={styles.addButton}>
          <Button
            title={'Добавить'}
            onPress={() => {
              navigation.navigate('Редактирование');
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    justifyContent: 'flex-end',
    flex: 1,
    // backgroundColor: 'grey',
  },
  deleteButton: {
    justifyContent: 'flex-end',
    elevation: 8,
  },
  deleteButtonStyle: {
    borderRadius: 15,
    color: '#660066',
  },
  addButton: {
    marginTop: 10,
    justifyContent: 'flex-end',
    elevation: 8,
    borderRadius: 30,
  },
});

export default MainShoppingListScreen;
