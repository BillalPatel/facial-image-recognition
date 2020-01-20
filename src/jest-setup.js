import Enzyme, { mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';

Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

// Fail tests on any warning
// console.error = message => {
//     throw new Error(message);
// };

// function initStorage() {
//   Object.defineProperty(global.localStorage, 'clear', {
//     value: initStorage,
//     configurable: true
//   });
// }

function mockStorage() {
  const storage = {};
  let values = {};
  const fns = {
    getItem(key) { return key ? values[key] : null; },
    setItem(key, value) { values[key] = `${value}`; },
    removeItem(key) { delete values[key]; },
    clear() { values = {}; }
  };
  Object.keys(fns).map((name) => {
    Object.defineProperty(storage, name, {
      value: fns[name],
      writable: false,
      configurable: false,
      enumerable: false
    });
  });
  return storage;
}

global.localStorage = global.window.localStorage = mockStorage();
global.sessionStorage = global.window.sessionStorage = mockStorage();

global.google = {
  maps: {
    Map: () => undefined,
    geometry: {
      encoding: {
        decodePath() {}
      }
    },
    event: {
      clearInstanceListeners() {},
      addListener() {},
      trigger() {}
    },
    Polygon() {}
  }
};

global.Headers = function () {
  const headers = {
    Location: 'http://test-locations.com'
  };
  this.append = function (key, val) {
    headers[key] = val;
  };
  this.get = function (key) {
    return headers[key];
  };
};

if (global.console.error) {
  global.console.error = function () {};
}

global.gtmDataLayer = {
  push: () => {}
};
