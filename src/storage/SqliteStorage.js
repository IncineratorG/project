const DB_NAME = 'project.db';

const VALUES_TABLE = 'valuesTable';
const VALUES_TABLE_ID = 'id';
const VALUES_TABLE_NUMBER = 'numberValue';
const VALUES_TABLE_STRING = 'stringValue';

const SQlite = require('react-native-sqlite-storage');
const db = SQlite.openDatabase(DB_NAME);

export class SqliteStorage {
  static init() {
    const createValuesTable =
      'CREATE TABLE IF NOT EXISTS ' +
      VALUES_TABLE +
      ' ' +
      '(' +
      VALUES_TABLE_ID +
      ' INTEGER PRIMARY KEY NOT NULL, ' +
      VALUES_TABLE_NUMBER +
      ' INTEGER NOT NULL, ' +
      VALUES_TABLE_STRING +
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

  static addValues({numberValue, stringValue}) {
    const addValuesStatement =
      'INSERT INTO ' +
      VALUES_TABLE +
      ' (' +
      VALUES_TABLE_NUMBER +
      ', ' +
      VALUES_TABLE_STRING +
      ') VALUES (?, ?)';

    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          addValuesStatement,
          [numberValue, stringValue],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error),
        );
      });
    });
  }
  static getValues() {
    const getValuesStatement = 'SELECT * FROM ' + VALUES_TABLE;

    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          getValuesStatement,
          [],
          (tx, result) => resolve(result.rows),
          (tx, error) => reject(error),
        );
      });
    });
  }

  static deleteItem(id) {
    const deleteItemStatement =
      'DELETE FROM ' + VALUES_TABLE + ' WHERE ' + VALUES_TABLE_ID + ' = ?';
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          deleteItemStatement,
          [id],
          (_, result) => resolve(result.rowsAffected),
          (_, error) => reject(error),
        );
      });
    });
  }
}
