// write js function to write debounce function

const debounce = (func,delay)=>{
    let timeId;

    return function(...args){
        if(timeId){
            clearTimeout(timeId);
        }
        timeId = setTimeout(()=>{
            func.apply(this,args);
        },delay)
    }   

}

const myFun = debounce((a)=>{
    console.log("I am a function expression", a);
},1000)


myFun( 67 );
myFun( 70 );
myFun( 60 );
myFun( 62 )

