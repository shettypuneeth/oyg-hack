import jsonp from 'jsonp';

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
    jsonp(requestUrl, { param: 'jsonp'}, (err, data) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(data);
      }
    });
  });
}