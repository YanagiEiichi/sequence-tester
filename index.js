class SequenceTester {
  constructor(array) {
    this.array = array;
    this.index = 0;
    this.promise = new Promise((resolve, reject) => {
      Object.assign(this, { resolve, reject });
    });
  }
  then(...args) { return this.promise.then(...args); }
  catch(...args) { return this.promise.catch(...args); }
  assert(value) {
    let item = this.array[this.index++];
    let result = false;
    switch (true) {
      case item instanceof RegExp:
        if (!item.test(value)) this.reject(`${value} is not match ${item}`);
        break;
      case item === String || item === Number || item === Boolean:
        if (!(Object(value) instanceof item)) this.reject();
        break;
      default:
        if (item !== value) this.reject(`${value} is not match ${item}`);
    }
    if (this.index < this.array.length) return;
    this.resolve();
  }         
}
