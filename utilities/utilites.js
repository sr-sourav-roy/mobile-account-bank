// create value functions:
function getInputValueByID(id) {
  const value = document.getElementById(id).value;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

// function create by InnerText:
function getInnerTextById(id) {
  const innerText = document.getElementById(id).innerText;
  const convertInnerText = parseFloat(innerText);
  return convertInnerText;
}

// set element by ID and value just create a functions: value set korar karon hocche amra je konw man gula add korar jonnw!
function setInnerTextIDandValue(id, value) {
  document.getElementById(id).innerText = value;
}
