import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/skipUntil";

var observable1 = Observable.create((data:any) => {
    var i = 1
    setInterval(() => {
        data.next(i++)
    }, 1000)
})

var observable2 = new Subject();

setTimeout(() => {
    observable2.next('Hey!')
}, 5000)


// Returns an Observable that skips items emitted by the 
// source Observable until a second Observable emits an item.
var newObs = observable1.skipUntil(observable2)

newObs.subscribe((x:any) => addItem(x));

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
