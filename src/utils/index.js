/*addZero函数，如果传入的数字小于10，在前面补零，主要用于计算时间*/
export const addZero = str => {
    str = +str;
    if (Number.isNaN(str)) {
      // 参数不能转成可用的数字，返回空
      return '';
    }
  
    if (str < 10) {
      return '0' + str;
    }
    return str
  };
  
  /*stringifyObj把传入的对象格式化成查询字符串的格式*/
  export const stringifyObj = obj => {
    if (obj.toString() === '[object Object]') {
      const objectKeys = Reflect.ownKeys(obj);
      const tmpArr = objectKeys.map(item => `${item}=${encodeURIComponent(obj[item])}`);
      return tmpArr.join('&');
    }
    // 如果传入的参数不是对象类型，返回空字符
    return '';
  };
  
  /* 表格分页的公用方法 */
  export const pagination = (data, callback) => {
    const { page, pageSize, total } = data;
    return {
      onChange: current => {
        callback(current);
      },
      current: page,
      pageSize: pageSize,
      total: total,
      showTotal: () => {
        return `共${total}条`
      },
      // showQuickJumper:true
    }
  };
  
  export const formateDate = time => {
    if (!time) return '';
    let date = new Date(time);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  };
  
  export const updateSelectedItem = function(selectedRowKeys, selectedRows, selectedIds) {
    if (selectedIds) {
      this.setState({
        selectedRowKeys,
        selectedIds: selectedIds,
        selectedItem: selectedRows
      })
    } else {
      this.setState({
        selectedRowKeys,
        selectedItem: selectedRows
      })
    }
  };
  
  // 封装本地存储的四种方法, 静态类，不要实例化
  export class Storage {
    static getKey(key) {
      /*本方法获取本地存储值*/
      let result = window.localStorage.getItem(key);
      try {
        return JSON.parse(result);
      } catch (error) {
        return result;
      }
    }
  
    static setKey(key, value) {
      /*本方法设置本地存储值*/
      value = typeof value === 'string' ? value : JSON.stringify(value);
      window.localStorage.setItem(key, value);
    }
  
    static removeKey(key) {
      /*本方法移除指定的本地存储值*/
      window.localStorage.removeItem(key)
    }
  
    static clear() {
      /*本方法清除所有的本地存储值*/
      window.localStorage.clear();
    }
  }
  
  // 封装会话存储的四种方法，静态类，不要实例化（各方法含义同上）
  export class Session {
    static getKey(key) {
      let result = window.sessionStorage.getItem(key);
      try {
        return JSON.parse(result);
      } catch (error) {
        return result;
      }
    }
  
    static setKey(key, value) {
      value = typeof value === 'string' ? value : JSON.stringify(value);
      window.sessionStorage.setItem(key, value);
    }
  
    static removeKey(key) {
      window.sessionStorage.removeItem(key);
    }
  
    static clear() {
      window.sessionStorage.clear();
    }
  }
  
  // 判断对象是否为空
  export const isEmptyObj = (obj) => Object.keys(obj).length === 0;