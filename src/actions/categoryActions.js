import * as categoryServices from '../services/categoryServices'

export function addCategory(data) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      categoryServices.addCategory(data)
      .then(data => {
        dispatch(categoryAddSuccess(data));
        resolve(data);
      })
      .catch(err => {
        dispatch(categoryAddError(err));
        reject(err);
      })
    });
  }
}

function categoryAddSuccess(res) {
  return {
    type: 'CATEGORY_ADD_SUCCESS',
    res
  }
}

function categoryAddError(err) {
  return {
    type: 'CATEGORY_ADD_ERROR',
    err
  }
}
