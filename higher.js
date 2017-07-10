// function new_func (func){
//     console.log('new_func');
//     func();
// }

// function func1(){
//     console.log("func1");
// }
// new_func(func1);

function arrayWalk(data, f){
    for(var key in data){
        f(data[key], key);
    }
}

function showElement(value, key){
    console.log(key + ':' + value);
}
var ary = [1, 2, 4, 8, 16];
// arrayWalk(ary, showElement);
ary.forEach(showElement);