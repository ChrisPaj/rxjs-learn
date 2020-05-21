import { Observable } from "rxjs/Observable";

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
});

var observer = observable.subscribe(
  (x: any) => addItem(x), // next
  (error: any) => addItem(error), // error
  () => addItem("Completed") // completion
); 

var observer2 = observable.subscribe(
  (x: any) => addItem(x + ' observer2'), 
)

observer.add(observer2);

setTimeout(() => {
  observer.unsubscribe();
}, 7000);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
