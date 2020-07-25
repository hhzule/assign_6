  
// 1. Consider you have following code snippet:




var div = document.getElementById("main-content");
var children = div.childNodes;
var elements = [];
for (var i=0; i<div.childNodes.length; i++) {
  var child = div.childNodes[i];
  if (child.nodeType == 1) {
    elements.push(child)      
  }
}
console.log(children);





