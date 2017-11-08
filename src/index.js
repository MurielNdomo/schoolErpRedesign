function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = ['Hello', 'sonia welcoment to school erp redesign'].join();

  return element;
}

document.body.appendChild(component());
