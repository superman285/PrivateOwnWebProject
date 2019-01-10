let array = [1,5,2,3,4,2,3,1,3,4];
/*function unique(array){
    console.log(Array.from(new Set(array)));
}
unique(array);*/

let unique = array=>Array.from(new Set(array));

console.log(unique(array));