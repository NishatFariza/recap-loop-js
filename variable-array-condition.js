// variable revisions 
var bottleColor = "yellow";
var waterQuantity =1;
var isFull =false;


//array revision
var items =['bottol', 'mug', 'paper', 'pen'];
// items.indexOf('mug');//index number 1
// jeta array er moddhe nei seyta jante chaile
// items.indexOf('logens'); //-1
// array te end ey add korte push
// items.push('toast');
//array te end theke remove korte chaile
// items.pop();
//array te beginning ey add korte chaile
// items.unshift('cake', 'apple');
//array te beginning ey remove korte chaile
// items.shift();

//array er total length 
// console.log(items);

// conditional revision 
if (items.length>= 4){
    console.log('You have too many stuff on your desk');

}
else{
    console.log('WOW! You hane to a clean desk');
}
//jodi first condition false hoi tahole else output dibe
if (items.length < 4){
    console.log('You have too many stuff on your desk');

}
else{
    console.log('WOW! You hane to a clean desk');
}

//jodi first condition false hoi tahole else if ey jabe output dibe
if (items.length > 6){
    console.log('You have too many stuff on your desk');

} 
else if(items.length >= 4){
    console.log('It was lean few times ago');

}
else{
    console.log('WOW! You hane to a clean desk');
}
