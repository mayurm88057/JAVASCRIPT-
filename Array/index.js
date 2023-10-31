let person={
    name:'mayur',
    age:24,
    isstudent:true,

}
console.log(person.name)
console.log(person['age'])


person.age=34;
console.log(person.age)

person.city='new york';
console.log(person)

//for property of the obbject

 for(let key in person ){
     console.log(key + " : " + person[key])
     
}
