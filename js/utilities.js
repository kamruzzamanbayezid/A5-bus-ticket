function getElementTextValueById(elementId) {
      const element = document.getElementById(elementId);
      const value = parseInt(element.innerText);
      return value;
}

function updateElementTextById(elementId, value) {
      const element = document.getElementById(elementId);
      element.innerText = value;
}

function getElementTextById(elementId) {
      const element = document.getElementById(elementId);
      return element.innerText;
}

function addElementClass(elementId, className) {
      const element = document.getElementById(elementId);
      element.classList.add(className);
}