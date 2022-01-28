// variable revisions 
var bottleColor = "yellow";
var waterQuantity =1;
var isFull =false;


//array revision
var items =['bottol', 'mug', 'paper', 'pen'];
items.indexOf('mug');//index number 1
// jeta array er moddhe nei seyta jante chaile
items.indexOf('logens'); //-1
// array te end ey add korte push
items.push('toast');
//array te end theke remove korte chaile
items.pop();
//array te beginning ey add korte chaile
items.unshift('cake', 'apple');
//array te beginning ey remove korte chaile
items.shift();
console.log(items);