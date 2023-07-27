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
    this.result = 0;
    this.first = "";
    this.second = "";
    this.operator = "";
  }
  //set result as the first number
  setFirstNum() {
    this.first = this.result;
    this.second = "";
    this.operator = "";
    this.result = 0;
    // console.log(this.first, this.second, this.operator, this.result);
  }
  //calculate
  calculate() {
    if (this.operator === "+") return (this.result = parseInt(this.first) + parseInt(this.second));
    if (this.operator === "-") return (this.result = parseInt(this.first) - parseInt(this.second));
    if (this.operator === "X") return (this.result = parseInt(this.first) * parseInt(this.second));
    if (this.operator === "/") return (this.result = parseInt(this.first) / parseInt(this.second));
  }

  //display the result when = sign is pressed
  displayResult(result) {
    const h2 = $("#screen h2");
    h2.text(result).addClass("grow");
    $("#screen h3").text(result).fadeOut();
  }
  //append the number to the screen
  appendNumber(number) {
    if (this.operator === "") {
      //if there is no selected operator, show the number to h3 as result
      const h2 = $("#screen h2");
      const h3 = $("#screen h3");
      this.first += number;
      h2.text(this.first);
      h3.text("=" + this.first).fadeIn();
    }
    //if there is a selected operator, second number will be concatenated to the passed argument
    else {
      this.second += number;
      const h2 = $("#screen h2");
      const h3 = $("#screen h3");
      this.calculate();
      h2.text(this.first + this.operator + $.trim(this.second)).removeClass("grow");
      h3.text("=" + this.result)
        .fadeIn()
        .addClass("grow");
    }
  }
  //append operator to the screen
  appendOperator(operator) {
    this.setOperator(operator);
    const h2 = $("#screen h2");
    const h3 = $("#screen h3");
    h2.text(this.first + this.operator + this.second).removeClass("grow");
    h3.text("=" + this.first).fadeIn();
  }
  //set the operator
  setOperator(operator) {
    if (this.first !== "" && this.second === "") {
      this.operator = operator;
    }
  }
}

const calculator = new Calculator();
const isOperator = (btnText) => {
  const operators = ["+", "-", "/", "X"];
  return operators.includes(btnText);
};

$(document).ready(function () {
  $(".btn").click(function () {
    const btnValue = $(this).text();
    //if the input is a number
    if (parseInt(btnValue) >= 0 && parseInt(btnValue) <= 9) {
      calculator.appendNumber(btnValue);
    }
    //if the input is operator
    else if (isOperator(btnValue)) {
      calculator.setOperator(btnValue);
      calculator.appendOperator(btnValue);
    }
    //if equals sign
    else if (btnValue === "=") {
      calculator.displayResult(calculator.result);
      calculator.setFirstNum();
      //if AC button pressed
    } else if (btnValue === "AC") {
      calculator.clear();
      calculator.displayResult(calculator.result);
    }
  });
});
