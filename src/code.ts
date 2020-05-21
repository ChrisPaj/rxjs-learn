import { AsyncSubject } from "rxjs/AsyncSubject";

// only last data is shown, .complete() must be called
var subject = new AsyncSubject();

var observer1 = subject.subscribe(
	data => addItem('Observer 1: '+ data),
	err => addItem(err),
	// shown, because subject.complete() must be called
	() => addItem('Observer 1 Completed') 
)

var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
	var observer2 = subject.subscribe(
		data => addItem('Observer 2: '+ data),
		err => addItem(err),
		// shown, because subject.complete() must be called
		() => addItem('Observer 2 Completed') 
	)
	subject.complete(); // must be called
    clearInterval(int);
}, 800);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
