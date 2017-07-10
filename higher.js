function new_func (func){
    console.log('new_func');
    func();
}

function func1(){
    console.log("func1");
}
new_func(func1);
