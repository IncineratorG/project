import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, FlatList, StyleSheet, Button, Text} from 'react-native';
import ShoppingListItem from '../../components/shopping-list-screen/ShoppingListItem';
import {LoadShoppingList} from '../../store/actions/shoppingListActions';
import {deleteAllProducts} from '../../store/actions/shoppingListActions';

const MainShoppingListScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadShoppingList());
  }, [dispatch]);

  let shoppingList = useSelector(state => state.shoppingList.productList.data);
  shoppingList.sort((s1, s2) => {
    return s2 > s1;
  });
  // shoppingList.sort((s1, s2) => {
  //   return s1.status < s2.status;
  // });

  const deleteAllHandler = () => {
    dispatch(deleteAllProducts());
  };

  const addProductHandler = () => {
    navigation.navigate('AddProduct');
  };

  if (!shoppingList.length) {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.noProduct}> Ваш список наверное пуст</Text>
        <View style={styles.addButton}>
          <Button title={'Добавить'} onPress={addProductHandler} />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.mainContainer}>
        <FlatList
          style={styles.flatlistContainer}
          data={shoppingList}
          renderItem={({item}) => {
            return <ShoppingListItem listItem={item} navigation={navigation} />;
          }}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
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
            <Button title={'Добавить'} onPress={addProductHandler} />
          </View>
        </View>
      </View>
    );
  }
};

MainShoppingListScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'Список покупок',
});

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
  noProduct: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 350,
    fontSize: 30,
  },
  flatlistContainer: {
    marginBottom: 85,
  },
  button: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
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
