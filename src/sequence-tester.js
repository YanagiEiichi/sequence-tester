define('SequenceTester', [], function() {

  var SequenceTester = function(array) {
    this.array = array;
    this.index = 0;
    var that = this;
    this.promise = new Promise(function(resolve, reject) {
      that.resolve = resolve;
      that.reject = reject;
    });
  };

  SequenceTester.prototype.then = function(resolve, reject) {
    return this.promise.then(resolve, reject);
  };

  SequenceTester.prototype.catch = function(reject) {
    return this.promise.catch(reject);
  };

  SequenceTester.prototype.assert = function(value) {
    var item = this.array[this.index++];
    switch (true) {
      case item instanceof RegExp:
        if (!item.test(value)) this.reject(value + ' is not match ' + item);
        break;
      case item === String || item === Number || item === Boolean:
        if (!(Object(value) instanceof item)) this.reject(value + ' is not match ' + item);
        break;
      default:
        if (item !== value) this.reject(value + ' is not match ' + item);
    }
    if (this.index < this.array.length) return;
    this.resolve();
  };

  return SequenceTester;

});
