function myFunction() {
  // Create an "li" node:
  const node = document.createElement('li');

  // Create a text node:
  const textnode = document.createTextNode('Water');

  // Append the text node to the "li" node:
  node.appendChild(textnode);

  // Append the "li" node to the list:
  document.getElementById('myList').appendChild(node);
}
