import axios from 'axios';
import APIConstants from '../constants/APIConstants';

export function addCategory(data) {
  return new Promise(function(resolve, reject) {
    axios.post(APIConstants.CATEGORY, data)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err.response.data)));
  });
}

export function viewCategory() {
  return new Promise(function(resolve, reject) {
    axios.get(APIConstants.CATEGORY)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err.response.data)));
  });
}

export function deleteCategory(id) {
  return new Promise(function(resolve, reject) {
    axios.delete(APIConstants.CATEGORY + id)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err.response.data)));
  });
}


export function editCategory(data) {
  console.log('mmmmmmmmmmmmmm', data);
  return new Promise(function(resolve, reject) {
    axios.put(APIConstants.CATEGORY + data.id, data)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err.response.data)))
  });
}

export function getCategory(id) {
  return new Promise(function(resolve, reject) {
    axios.get(APIConstants.CATEGORY + id)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err.response.data)))
  });
}
