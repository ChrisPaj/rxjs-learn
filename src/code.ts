import { from } from 'rxjs';
import { merge } from 'rxjs/observable/merge';

const array = ['Hey guys!'];
const array2 = ['How is it going?'];

const myObs = from(array);
const myObs2 = from(array2);

const myObsMerged = merge(myObs, myObs2) // merge Observables

myObsMerged.subscribe((x:any) => addItem(x));

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
