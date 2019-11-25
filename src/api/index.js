import axios from 'axios';
import * as keys from '../config.js';

function API(name, actions) {
  const resourceURL = `${keys.base_url}/${name}`;
  const methods = {
    getAll: ({ params } = {}) => axios.get(`${resourceURL}`, { params }),
    getOne: ({ id }) => axios.get(`${resourceURL}/${id}`),
    create: resource => axios.post(resourceURL, resource),
    update: resource => axios.put(`${resourceURL}/${resource._id}`, resource),
    delete: ({ _id }) => axios.delete(`${resourceURL}/${_id}`)
  };

  const enabledMethods = {};
  actions.forEach(f => {
    if (methods[f]) enabledMethods[f] = methods[f];
  });

  return enabledMethods;
}

export const BookAPI = API('books', ['getAll', 'getOne', 'create', 'update', 'delete']);
export const EventAPI = API('events', ['getAll']);
