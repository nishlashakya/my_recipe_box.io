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

export function viewCategory() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      categoryServices.viewCategory()
      .then(data => {
        dispatch(categoryViewSuccess(data));
        resolve(data);
      })
      .catch(err => {
        dispatch(categoryViewError(err));
        reject(err);
      })
    });
  }
}

function categoryViewSuccess(res) {
  return {
    type: 'CATEGORY_VIEW_SUCCESS',
    res
  }
}

function categoryViewError(err) {
  return {
    type: 'CATEGORY_VIEW_ERROR',
    err
  }

}

export function deleteCategory(data) {
  return dispatch => {
    return new Promise(function(resolve, reject) {
      categoryServices.deleteCategory(data)
      .then((data) => {
        dispatch(deleteCategorySuccess(data));
        resolve(data);
      })
      .catch((err) => {
        dispatch(deleteCategoryError(err));
        reject(err);
      })
    });
  }
}

function deleteCategorySuccess(res) {
  return {
    type: 'CATEGORY_DELETE_SUCCESS',
    res
  }
}

function deleteCategoryError(err) {
  return {
    type: 'CATEGORY_DELETE_ERROR',
    err
  }
}

export function editCategory(data) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      categoryServices.editCategory(data)
      .then((res) => {
        dispatch(editCategorySuccess(res));
        resolve(res);
      })
      .catch((err) => {
        dispatch(editCategoryError(err));
        reject(err);
      })
    });
  }
}

function editCategorySuccess(res) {
  return {
    type: 'CATEGORY_UPDATE_SUCCESS',
    res
  }
}

function editCategoryError(err) {
  return {
    type: 'CATEGORY_UPDATE_ERROR',
    err
  }
}

export function getCategory(id) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      categoryServices.getCategory(id)
      .then((res) => {
        dispatch(getCategorySuccess(res));
        resolve(res);
      })
      .catch((err) => {
        dispatch(getCategoryError(err));
        reject(err);
      })
    });
  }
}

function getCategorySuccess(res) {
  return {
    type: 'CATEGORY_GET_SUCCESS',
    res
  }
}

function getCategoryError(err) {
  return {
    type: 'CATEGORY_GET_ERROR',
    err
  }

}
