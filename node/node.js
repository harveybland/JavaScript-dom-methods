// Node
// Any element on a page including text & whitespaces of a DOM structure is known as “NODE.” Nodes can be between XHTML Tags.

// Nodes available in DOM:

// node.childNodes
// node.firstChild
// node.lastChild
// node.parentNode
// node.nextSibling
// node.previousSibling

let numb = document.getElementById('myDIV').childNodes.length;
document.getElementById('demo').innerHTML = numb;
