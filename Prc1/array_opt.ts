

//create arra
var productlistarray:any[] = [];

//inset array
productlistarray.push('added_new');

//update valu
updateproduct[0]='new value'

//delete
//deleteproduct.splice(1,1);

 
function getAll(){
    return productlistarray
}

function productlistarrayAdd(arrayValue:any):any {
    arrayValue.push('arrayValue');
    console.log(arrayValue);
}

function updateproduct(arrayIndex:any, arrayValue:any):any {
    arrayIndex[0]=arrayValue;
}

function deleteproduct(arrayIndex:any):any {
    arrayIndex.splice(arrayIndex);
 }


