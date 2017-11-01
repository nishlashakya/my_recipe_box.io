import axios from 'axios';
import APIConstants from '../constants/APIConstants';

export function addCategory(data) {
  return new Promise(function(resolve, reject) {
    axios.post(APIConstants.ADD_CATEGORY, data)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err.response.data)));
  });
}
