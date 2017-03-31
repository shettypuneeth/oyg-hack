import jsonp from 'jsonp';
import request from 'superagent';

export const objectToParameters = (obj) => {
  const queryParams = Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join('&');

  return queryParams;
};

/**
 * Utility that helps make jsonp request.
 * Returns a promise object.
 * @param url {string}
 * @param data { object }
 * e.g. data: { key: 'hello' }
 */
export function jsonpRequest(url, queryParams) {
  const inlineParams = objectToParameters(queryParams);
  const requestUrl = `${url}?${inlineParams}`;

  return new Promise((resolve, reject) => {
    jsonp(requestUrl, (err, data) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(data);
      }
    });
  });
}

export function normalRequest(url, queryParams) {
  return new Promise((resolve, reject) => {
    request
      .get(url)
      .end(function(err, res){
        // Calling the end function will send the request
        if (err) {
          reject(err);
        }
        else {
          resolve(res);
        }
      });
  });
}
