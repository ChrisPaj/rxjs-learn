import { Observable } from "rxjs/Observable";

var observable = Observable.create((observer:any) => {
	observer.next('Hello World!');
})

observable.subscribe((x:any) => addItem(x));

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}