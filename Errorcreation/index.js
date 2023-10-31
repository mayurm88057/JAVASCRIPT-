function divide(a, b) {
    if (b === 0) {
        throw new Error('cannot divide by zero');
      
    }
    return a/b;

}
try{
    let result= divide(10,0);
    console.log("Result:',result")
}catch(error){
    console.log('Error',error.message);

}