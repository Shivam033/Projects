let member = [{
    g:'m',
    ages: 20,
    income: 180
},
{
    g:'f',
    ages: 25,
    income: 100
},
{
    g:'m',
    ages: 20,
    income: 70
},
{
    g:'f',
    ages: 30,
    income: 90
}]
// income<100 --> double their income
// income>100 --> half their income

// function salary(val){
//     if(val.income<100){
//         val.income = 2*val.income
//     }else if(val.income>=100){
//         val.income = val.income/2
//     }
//     return val
// }
function salary(elem){
    // creating a copy of array so that original array remains untouched
    // opton-->1
    let newObj = {...elem};
    // option ==>2
    // let newObj = {}
    // for(let key in elem){
    //     newObj[key] = elem[key]
    // }
    if(newObj.income<100){
        newObj.income = 2*newObj.income
    }
    return newObj;
}
let newMember = member.map(salary)
console.log(newMember);
console.log(member);
// console.log(member[0].income);