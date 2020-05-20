import { Observable } from "rxjs/Observable";

var observable = Observable.create((observer:any) => {
	observer.next('next 1 - will show');
	observer.next('next 2 - will show');
	observer.complete();
	observer.next('next 3 - will NOT show');
})

observable.subscribe(
	(x:any) => addItem(x),			// next
	(error:any) => addItem(error),	// error
	() => addItem('Completed'));	// completion

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}