

function outer(){
    outerVariable='outer';
    

    function inner(){
        const innerVariable = 'inner';

         console.log(innerVariable + '  ' + outerVariable);

    }
    inner()
}
outer()
