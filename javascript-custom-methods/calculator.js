/* exported calculator */
var calculator = {
  add: function(x, y) {
    return x + y;
  },
  subtract: function(x, y) {
    return x - y;
  },
  multiply: function(x, y) {
    return x * y;
  },
  divide: function(x, y) {
    return x / y;
  },
  square: function(x) {
    return x**2
  },
  sumAll: function(numbers) {
    var answer = 0;
    for (var counter = 0; numbers.length > counter; counter++) {
      answer += numbers[counter];
    }
    return answer;
  },
  getAverage: function(numbers) {
    var answer = 0;
    for (var counter = 0; numbers.length > counter; counter++) {
      answer += numbers[counter];
    }
    return answer / numbers.length;
  }
}
