var logDisplayValue;

function logInput(operationInput) {
  logDisplayValue = operationInput + "=" + eval(operationInput);
}

function showLog() {
  document.getElementById("id-log-display").value = logDisplayValue;
}