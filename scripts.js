let inputElement = document.getElementsByClassName("inp")[0];

function calc(inp) {
  if (inp === "rst") {
    inputElement.value = 0;
    return;
  }

  const validInputs = "0123456789.+-*/";

  if (validInputs.includes(inp)) {
    inputElement.value =
      inputElement.value == 0 ? inp : inputElement.value + inp;
  } else if (inp === "eql") {
    let ans = eval(inputElement.value);
    
    const numStr = ans.toString();
    const decimalPointIndex = numStr.indexOf(".");
    if (decimalPointIndex != -1) {
      decimalDigits = numStr.length - decimalPointIndex - 1;
      if(decimalDigits>1)
      inputElement.value = ans.toFixed(3);
      else
      inputElement.value = ans.toFixed(1);
    }
    else
    inputElement.value = ans;

  } else if (inp === "del") {
    inputElement.value = inputElement.value.slice(0, -1) || 0;
  }
}
