import {
  SAVE_VALUES,
  SHOW_VALUES,
  DELETE_RECORD,
} from '../types/projectActionTypes';
import {SqliteStorage} from '../../storage/SqliteStorage';

export const saveValues = ({numberVal, stringVal}) => {
  return async dispatch => {
    const identId = await SqliteStorage.addValues({
      numberValue: numberVal,
      stringValue: stringVal,
    });

    const action = {type: SAVE_VALUES, payload: identId};
    dispatch(action);
  };
};

export const showValues = () => {
  return async dispatch => {
    const bdData = await SqliteStorage.getValues();

    const action = {type: SHOW_VALUES, payload: bdData};
    dispatch(action);
  };
};

export const deleteRecord = id => {
  return async dispatch => {
    const removedItemsCount = await SqliteStorage.deleteItem(id);
    let action;
    if (removedItemsCount > 0) {
      action = {type: DELETE_RECORD, payload: id};
    } else {
      action = {type: DELETE_RECORD, payload: -1};
    }
    dispatch(action);
  };
};

// export const showValues = ({numbVal, strVal, idVal}) => {
//   return async dispatch => {
//     const identShow = await SqliteStorage.getValues({
//       numbVal: numbVal,
//       strVal: strVal,
//       idVal: idVal,
//     });
//
//     dispatch({
//       type: SHOW_VALUES,
//       payload: identShow,
//     });
//   };
// };
