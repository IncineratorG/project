import {StyleSheet} from 'react-native';

export const mainShoppingListStyles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
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
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
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
  addButtonNoProduct: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'flex-end',
  },
});
