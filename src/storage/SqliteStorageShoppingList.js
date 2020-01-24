const DB_NAME = 'shoppingList.db';

const PRODUCT_TABLE = 'productTable';
const PRODUCT_TABLE_ID = 'id';
const PRODUCT_TABLE_NAME = 'name';
const PRODUCT_TABLE_COUNT = 'count';
const PRODUCT_TABLE_COUNT_TYPE = 'countType';
const PRODUCT_TABLE_NOTE = 'note';

const SQlite = require('react-native-sqlite-storage');
const db = SQlite.openDatabase(DB_NAME);

export class SqliteStorageShoppingList {
  static init() {
    const createValuesTable =
      'CREATE TABLE IF NOT EXISTS ' +
      PRODUCT_TABLE +
      ' ' +
      '(' +
      PRODUCT_TABLE_ID +
      ' INTEGER PRIMARY KEY NOT NULL, ' +
      PRODUCT_TABLE_NAME +
      ' TEXT NOT NULL, ' +
      PRODUCT_TABLE_COUNT +
      ' TEXT NOT NULL, ' +
      PRODUCT_TABLE_COUNT_TYPE +
      ' TEXT)';

    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          createValuesTable,
          [],
          (tx, result) => resolve(),
          (tx, error) => reject(error),
        );
      });
    });
  }

  static loadProducts() {
    const loadValuesStatement = 'SELECT * FROM ' + PRODUCT_TABLE;

    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          loadValuesStatement,
          [],
          (tx, result) => resolve(result.rows),
          (tx, error) => reject(error),
        );
      });
    });
  }
  static addProduct({productName, count, countType, note}) {
    const addProductStatement =
      'INSERT INTO ' +
      PRODUCT_TABLE +
      ' (' +
      PRODUCT_TABLE_NAME +
      ', ' +
      PRODUCT_TABLE_COUNT +
      ', ' +
      PRODUCT_TABLE_COUNT_TYPE +
      ', ' +
      PRODUCT_TABLE_NOTE +
      ') VALUES (?, ?, ?, ?)';

    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          addProductStatement,
          [productName, count, countType, note],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error),
        );
      });
    });
  }
}
