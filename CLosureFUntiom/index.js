function outer(){
    const outerVariable='i am from outer function';

    function inner(){
        console.log(outerVariable)
    }
return inner;

}
const closureFunction=outer();
closureFunction() 