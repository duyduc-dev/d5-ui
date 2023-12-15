import { Cookies } from 'react-cookie';

class Storage {
  cookies;
  cookieOption;

  constructor() {
    this.cookies = new Cookies();
    this.cookieOption = {
      path: '/',
    };
  }

  setCookie(name, value, options = {}) {
    this.cookies.set(name, value, {
      ...this.cookieOption,
      ...options,
    });
  }

  getCookie(name, options) {
    return this.cookies.get(name, options);
  }

  removeCookie(name, options) {
    this.cookies.remove(name, { ...this.cookieOption, ...options });
  }

  setStorage(key, value) {
    if (!window.localStorage) {
      return;
    }
    try {
      const lsValue = JSON.stringify(value);
      window.localStorage.setItem(key, lsValue);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`${key} LOCAL STORAGE SAVE ERROR`, error);
    }
  }

  getStorage(key, defaultValue) {
    if (typeof window !== 'undefined') {
      if (!window.localStorage) {
        return defaultValue;
      }
      const lsValue = window.localStorage.getItem(key);
      if (!lsValue) {
        return defaultValue;
      }
      try {
        const store = JSON.parse(lsValue);
        if (!store) {
          return defaultValue;
        }
        return store;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`${key} LOCAL STORAGE PARSE ERROR`, error);
      }
    }

    return defaultValue;
  }

  removeStorage(...keys) {
    if (typeof window !== 'undefined') {
      keys.forEach((key) => window.localStorage.removeItem(key));
    }
  }
}

const storageHelper = new Storage();

export default storageHelper;
