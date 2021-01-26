function resetFunction() {
  location.reload();
}

function submitMeter() {
  var meter = 39.37;

  var x, y, name, a, b, answer;

  x = document.getElementById("formbox");
  y = x.elements["name"].value;
  var div = document.createElement('div');

  for (var i = 0; i < 1; i++) {
    var inputElement = document.createElement('input');
    inputElement.setAttribute('readonly', 'readonly');
    inputElement.setAttribute('id', 'id' + i);
    inputElement.style.border = '3px solid black';
    inputElement.style.textAlign = 'center';
    inputElement.style.marginBottom = '15px';
    inputElement.style.backgroundColor = '#797676';
    inputElement.style.fontFamily = "Times New Roman";
    inputElement.style.height = "50px";
    inputElement.style.width = "250px";
    inputElement.value = y / meter;
    div.appendChild(inputElement);
  }
  document.getElementById("container").appendChild(div);
  var inputElements = document.querySelectorAll('input');
  for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].className = i;
  }
}


function submitCentimeter() {
  var centimeter = 2.54

  var x, y, name, a, b, answer;

  x = document.getElementById("formbox");
  y = x.elements["name"].value;
  var div = document.createElement('div');

  for (var i = 0; i < 1; i++) {
    var inputElement = document.createElement('input');
    inputElement.setAttribute('readonly', 'readonly');
    inputElement.setAttribute('id', 'id' + i);
    inputElement.style.border = '3px solid black';
    inputElement.style.textAlign = 'center';
    inputElement.style.marginBottom = '15px';
    inputElement.style.backgroundColor = '#797676';
    inputElement.style.fontFamily = "Times New Roman";
    inputElement.style.height = "50px";
    inputElement.style.width = "250px";
    inputElement.value = y * centimeter;
    div.appendChild(inputElement);
  }
  document.getElementById("container").appendChild(div);
  var inputElements = document.querySelectorAll('input');
  for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].className = i;
  }
}


function submitMillimeter() {
  var millimeter = 25.4;

  var x, y, name, a, b, answer;

  x = document.getElementById("formbox");
  y = x.elements["name"].value;
  var div = document.createElement('div');

  for (var i = 0; i < 1; i++) {
    var inputElement = document.createElement('input');
    inputElement.setAttribute('readonly', 'readonly');
    inputElement.setAttribute('id', 'id' + i);
    inputElement.style.border = '3px solid black';
    inputElement.style.textAlign = 'center';
    inputElement.style.marginBottom = '15px';
    inputElement.style.backgroundColor = '#797676';
    inputElement.style.fontFamily = "Times New Roman";
    inputElement.style.height = "50px";
    inputElement.style.width = "250px";
    inputElement.value = y * millimeter;
    div.appendChild(inputElement);
  }
  document.getElementById("container").appendChild(div);
  var inputElements = document.querySelectorAll('input');
  for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].className = i;
  }
}


function submitMicrometer() {
  var micrometer = 25400; 

  var x, y, name, a, b, answer;

  x = document.getElementById("formbox");
  y = x.elements["name"].value;
  var div = document.createElement('div');

  for (var i = 0; i < 1; i++) {
    var inputElement = document.createElement('input');
    inputElement.setAttribute('readonly', 'readonly');
    inputElement.setAttribute('id', 'id' + i);
    inputElement.style.border = '3px solid black';
    inputElement.style.textAlign = 'center';
    inputElement.style.marginBottom = '15px';
    inputElement.style.backgroundColor = '#797676';
    inputElement.style.fontFamily = "Times New Roman";
    inputElement.style.height = "50px";
    inputElement.style.width = "250px";
    inputElement.value = y * micrometer;
    div.appendChild(inputElement);
  }
  document.getElementById("container").appendChild(div);
  var inputElements = document.querySelectorAll('input');
  for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].className = i;
  }
}


function submitYard() {
  var yard = 36;

  var x, y, name, a, b, answer;

  x = document.getElementById("formbox");
  y = x.elements["name"].value;
  var div = document.createElement('div');

  for (var i = 0; i < 1; i++) {
    var inputElement = document.createElement('input');
    inputElement.setAttribute('readonly', 'readonly');
    inputElement.setAttribute('id', 'id' + i);
    inputElement.style.border = '3px solid black';
    inputElement.style.textAlign = 'center';
    inputElement.style.marginBottom = '15px';
    inputElement.style.backgroundColor = '#797676';
    inputElement.style.fontFamily = "Times New Roman";
    inputElement.style.height = "50px";
    inputElement.style.width = "250px";
    inputElement.value = y / yard;
    div.appendChild(inputElement);
  }
  document.getElementById("container").appendChild(div);
  var inputElements = document.querySelectorAll('input');
  for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].className = i;
  }
}


function submitFoot() {
  var foot = 12;

  var x, y, name, a, b, answer;

  x = document.getElementById("formbox");
  y = x.elements["name"].value;
  var div = document.createElement('div');

  for (var i = 0; i < 1; i++) {
    var inputElement = document.createElement('input');
    inputElement.setAttribute('readonly', 'readonly');
    inputElement.setAttribute('id', 'id' + i);
    inputElement.style.border = '3px solid black';
    inputElement.style.textAlign = 'center';
    inputElement.style.marginBottom = '15px';
    inputElement.style.backgroundColor = '#797676';
    inputElement.style.fontFamily = "Times New Roman";
    inputElement.style.height = "50px";
    inputElement.style.width = "250px";
    inputElement.value = y / foot;
    div.appendChild(inputElement);
  }
  document.getElementById("container").appendChild(div);
  var inputElements = document.querySelectorAll('input');
  for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].className = i;
  }
}