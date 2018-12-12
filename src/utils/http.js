import config from '../app-config';

const defaultHeaders = {
  'Content-Type': 'json',
};

function formatUri(uri, query) {
  const url = uri.replace(new RegExp('/+$/g'), '');
  let queryStr = `?api_key=${config.MOVIE_DB_API_KEY}`;

  Object.keys(query).forEach(function(key) {
    if (query[key] !== undefined) {
      queryStr += `&${key}=${query[key]}`;
    }
  });

  if (new RegExp('^http|https').test(url)) {
    return `${uri}`;
  }
  return `${config.MOVIE_DB_API_ROOT}${url}${queryStr}`;
}

// https://github.com/douglascrockford/JSON-js/blob/master/json2.js
const rxOne = /^[\],:{}\s]*$/;
const rxTwo = /\\(?:["\\/bfnrt]|u[0-9a-fA-F]{4})/g;
const rxThree = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g;
const rxFour = /(?:^|:|,)(?:\s*\[)+/g;
const isJSON = input =>
  input.length &&
  rxOne.test(
    input
      .replace(rxTwo, '@')
      .replace(rxThree, ']')
      .replace(rxFour, '')
  );

const fetching = (uriInput = '', method = 'GET', body = {}, query = {}) => {
  const uri = formatUri(uriInput, query);
  console.log('Fetch uri : ', method, uri);
  // const jwtToken = authStore.getJwtToken();
  const jsonBody = JSON.stringify(body);
  const customHeaders = {};
  const headers = Object.assign(defaultHeaders, customHeaders);
  const data = {
    method,
    headers,
    body: jsonBody,
  };
  if (method === 'GET') {
    delete data.body;
  }
  console.log('Fetch header : ', headers);
  console.log('Fetch body : ', body, jsonBody);
  const fetchAPI = fetch(uri, data)
    .then(resp => {
      if (!resp.ok) {
        return resp.text().then(text => {
          const json = isJSON(text) ? JSON.parse(text) : {};
          return Promise.reject({
            statusCode: resp.status,
            message: json.message,
          });
        });
      }
      return resp.text().then(text => {
        const json = isJSON(text) ? JSON.parse(text) : {};
        console.log('JSON response: ', json);
        return Promise.resolve(json);
      });
    })
    .catch(err => {
      console.warn(`API Error ${err.statusCode} ${err.message}`);
      return Promise.reject(err);
    });
  return Promise.race([
    fetchAPI,
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('timeout');
      }, 30000);
    }),
  ]);
};

const GET = (uri, query, body) => fetching(uri, 'GET', body, query);
const POST = (uri, body) => fetching(uri, 'POST', body);
const PATCH = (uri, body) => fetching(uri, 'PATCH', body);
const PUT = (uri, body) => fetching(uri, 'PUT', body);
const DELETE = (uri, body) => fetching(uri, 'DELETE', body);

export default {
  GET,
  POST,
  PATCH,
  PUT,
  DELETE,
};
