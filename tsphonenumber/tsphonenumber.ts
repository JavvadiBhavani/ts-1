const regex: RegExp = /^\(?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{5})$/;

function phoneNoValidaton(a : string){

    if(a.match(regex)){
        return 1
    }else{
        return -1
    }
}
const answer = phoneNoValidaton("22-223-33393")
console.log(answer);