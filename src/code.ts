import { ReplaySubject } from "rxjs/ReplaySubject";

var subject = new ReplaySubject(5);

var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
	// last 5 values are shown
	subject.subscribe(
		data => addItem('Observer 1: '+ data),
		err => addItem(err),
		() => addItem('Observer 1 Completed')
	)
    clearInterval(int);
}, 800);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
