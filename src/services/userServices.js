import axios from 'axios';
import APIConstants from '../constants/APIConstants';

export function register(data) {
  return new Promise((resolve, reject) => {
    axios.post(APIConstants.REGISTER, data)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err.response.data)));
    })
}

export function login(data) {
  return new Promise((resolve, reject) => {
    axios.post(APIConstants.LOGIN, data)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err.response.data)));
  })
}

export function getUser(id) {
  return new Promise((resolve, reject) => {
    axios.get(APIConstants.USER + id)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err.response.data)));
  });
}
