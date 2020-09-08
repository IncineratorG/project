import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Button,
  Text,
  SectionList,
  Alert,
} from 'react-native';
import ShoppingListItem from '../../../components/shopping-list-screen/ShoppingListItem';

export const MainShoppingListView = ({styles, model, controller}) => {
  const {
    shoppingListLoading,
    shoppingList,
    completedShoppingList,
    notCompletedShoppingList,
  } = model.data;

  const {
    deleteAllHandler,
    addProductHandler,
    changeStatusHandler,
    editingHandler,
    deleteHandler,
  } = controller;

  const completedSectionTitle = 'Куплено';
  const notCompletedSectionTitle = 'Нужно купить';

  const renderSectionHeader = ({section}) => {
    if (section.title === completedSectionTitle) {
      if (completedShoppingList.length <= 0) {
        return null;
      } else {
        return <Text>{section.title}</Text>;
      }
    } else if (section.title === notCompletedSectionTitle) {
      if (notCompletedShoppingList.length <= 0) {
        return null;
      } else {
        return <Text>{section.title}</Text>;
      }
    }
    return <Text>{section.title}</Text>;
  };

  const loadingComponent = (
    <View style={styles.mainContainer}>
      <Text>Загрузка... </Text>
    </View>
  );

  const emptyShoppingListComponent = (
    <View style={styles.mainContainer}>
      <Text style={styles.noProduct}> Ваш список пуст</Text>
      <View style={styles.addButtonNoProduct}>
        <Button title={'Добавить'} onPress={addProductHandler} />
      </View>
    </View>
  );

  const shoppingListComponent = (
    <View style={styles.mainContainer}>
      <SectionList
        style={styles.flatlistContainer}
        sections={[
          {title: notCompletedSectionTitle, data: notCompletedShoppingList},
          {title: completedSectionTitle, data: completedShoppingList},
        ]}
        renderSectionHeader={renderSectionHeader}
        renderItem={({item}) => {
          return (
            <ShoppingListItem
              listItem={item}
              onChangeStatus={changeStatusHandler}
              onDeleteItem={deleteHandler}
              onEditItem={editingHandler}
            />
          );
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

  let displayingComponent = null;
  if (shoppingListLoading === true) {
    displayingComponent = loadingComponent;
  } else if (shoppingListLoading === false && shoppingList.length > 0) {
    displayingComponent = shoppingListComponent;
  } else if (shoppingListLoading === false && shoppingList.length === 0) {
    displayingComponent = emptyShoppingListComponent;
  }

  return displayingComponent;
};
