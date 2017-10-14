import axios from 'axios';
import APIConstants from '../constants/APIConstants';

export function addRecipe(data) {
  return new Promise((resolve, reject) => {
    axios.post(APIConstants.ADDRECIPE, data)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err.response.data)));
    })
}
