'use strict';

import createHitory from 'history/createBrowserHistory';

export let history = createHitory();

export let renderIf = (test, success, failure) => test ? success : failure

export let classToggler = (options) => {
  let result = [];
  for(let key in options)
    if(options[key])
      result.push(key);
  return result.join(' ');
};

export let print = __DEBUG__ ? console : Object.keys(console).reduce((p, n) => {
    p[n] = () => {};
    return p;
  }, {});

export let fileToDataURL = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.addEventListener('error', reject);
    reader.addEventListener('load', () => resolve(reader.result));
    if(file)
      return reader.readAsDataURL(file);
    return reject(new Error('no file supplied'));
  });
}
