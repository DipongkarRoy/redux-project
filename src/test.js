const array =['ranam', 'raj', 'raju', 'raju', 'raju', 'raki']

const newArray =array.filter(item => item.length > 3);
const newArray1 = array.filter(item =>item!== 'raju')

console.log(newArray1,'newArray1 removed in data'); 

console.log(newArray ,'newArray');

const number = [1, 2, 3, 4, 5, 6, 7]
const newNumber = number.reduce((a, b) => a + b)
console.log(newNumber);

// the below code fragment can be found in:Function Currying


function curry(fn) {
    return function curried(...args) {
        return args.length ? fn(...args, curried) : fn(...args);
    };
}

const add = curry((a, b) => a + b);
console.log(add(1, 2));


const newAdd =(a)=>{
    return (b)=>{
        return (c)=>{
            return a *(b+c);
        }
    }
}

const level = newAdd(4);
console.log(level(2)(3));
console.log(level(22)(33));
console.log(level(23)(345));
console.log(level(2435)(356));
