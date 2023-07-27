class Calculator {
  constructor() {
    //initial values
    this.first = "";
    this.second = "";
    this.operator = "";
    this.result = 0;
  }
  // when the user press the AC or clear btn
  clear() {
    this.first = "";
    this.second = "";
    this.operator = "";
    this.result = "";
  }
  //calculate
  calculate() {
    if (this.operator === "+") return (this.result = this.first + this.second);
    if (this.operator === "-") return (this.result = this.first - this.second);
    if (this.operator === "X") return (this.result = this.first * this.second);
    if (this.operator === "/") return (this.result = this.first / this.second);
  }
  //get the result
  getResult() {
    return this.result;
  }
  //append the number to the screen
  appendNumber(number) {
    if (this.operator === "") {
      //if there is no selected operator, show the number to h3 as result
      const h2 = $("#screen h2");
      const h3 = $("#screen h3");
      this.first += number;
      h2.text($.trim(this.first));
      h3.text("=" + $.trim(this.first));
    }
    //if there is a selected operator, second number will be concatenated to the passed argument
    else this.second += number;
  }
  //set the operator
  setOperator(operator) {
    this.operator = operator;
  }
  //display the result
  displayResult() {
    const h2 = $("#screen h2");
    h2.text(this.first + this.operator + this.second);
  }
}

const calculator = new Calculator();

$(document).ready(function () {
  $(".btn").click(function () {
    // console.log($(this).text());
    const btnValue = $(this).text();
    //if the input is a number
    if (parseInt(btnValue) >= 0 && parseInt(btnValue) <= 9) {
      calculator.appendNumber(btnValue);
    }
  });
});
