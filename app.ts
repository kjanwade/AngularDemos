
function add(n1:number, n2:number) {
    return 0;
}

add(11,22);

function add_mix(n1:number|string,n2:number|string){

}
add_mix('one','two');

function add_overloading(n1:number,n2:number):number
function add_overloading(n1:string,n2:string):string
function add_overloading(n1:any, n2:any):any {
    
}

//optional para
function sum_optional(n1:number, n2?:number){

}

sum_optional(11)
sum_optional(11, 12)


//optional para
function sum_default(n1:number, n2:number=10){

}
sum_optional(11)
sum_optional(11, 12)


//optional para
function sum_annumber(n1:number, n2:number[]){

}
sum_optional(11)
sum_optional(11, 12)


//rest
function sum_annumber_rest(n1:number, ...n2:number[]){

}
sum_annumber_rest(11)
sum_annumber_rest(11, 12, 33, 44)


//generic

function insertdata<T>(data:T){

}

insertdata<number>(11);
insertdata<string>('one');
insertdata<number|string>(11);


