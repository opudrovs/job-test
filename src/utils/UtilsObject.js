class UtilsObject {
    static deepFreeze(obj) {
       const propNames = Object.getOwnPropertyNames(obj);

       for (const name of propNames) {
           const value = obj[name];
           obj[name] = value && typeof value === 'object' ? this.deepFreeze(value) : value;
       }

       return Object.freeze(obj);
    }
}

export default UtilsObject;
