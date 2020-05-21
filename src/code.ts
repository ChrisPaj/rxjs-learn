import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/share'

var observable = Observable.create((observer: any) => {
  try {
    observer.next("next 1 - will show");
    observer.next("next 2 - will show");
    setInterval(() => {
      observer.next("interval");
    }, 2000);
  } catch (err) {
    observer.error(err);
  }
}).share();

var observer = observable.subscribe(
  (x: any) => addItem(x), // next
  (error: any) => addItem(error), // error
  () => addItem("Completed") // completion
); 

setTimeout(() => {
	var observer2 = observable.subscribe(
		(x: any) => addItem(x + ' observer2'), 
	  )
}, 1000);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
