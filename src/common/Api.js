/* globals fetch FormData */
import { BASE_URL } from '../constants';
const qs = require('qs');

export default class Api {
  login (email, password) {
    return _POST('/auth', { email, password });
  }
  me () {
    return _GET('/auth');
  }
  signup (name, email, password, confirm) {
    return _POST('/auth/users', {name, email, password, confirm});
  }
  logout () {
    return _GET('/auth/logout');
  }
  calculateBMI (query) {
    return _POST('/api/bmi', query);
  }
}

function _GET (route, query) { return _fetch(route, 'GET', query, true); }
function _POST (route, body) { return _fetch(route, 'POST', body); }
// function _PUT (route, body) { return _fetch(route, 'PUT', body); }
// function _DELETE (route, query) { return _fetch(route, 'DELETE', query, true); }

function _fullRoute (url) {
  return `${BASE_URL}${url}`;
}

function _fetch (route, method, body, isQuery = false) {
  if (!route) throw new Error('Route is undefined');
  var fullRoute = _fullRoute(route);
  if (isQuery && body) {
    const query = qs.stringify(body);
    fullRoute = `${fullRoute}?${query}`;
    body = undefined;
  }
  let opts = {
    method,
    credentials: 'same-origin'
  };
  const isForm = body instanceof FormData;
  if (!isForm) {
    opts.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }
  if (body) {
    opts.body = isForm ? body : JSON.stringify(body);
  }

  let status = 500;
  return fetch(fullRoute, opts)
    .then(response => {
      status = response.status;
      return response.json();
    })
    .then(response => {
      if (status >= 400) {
        return Promise.reject(response);
      }
      return response;
    });
}
