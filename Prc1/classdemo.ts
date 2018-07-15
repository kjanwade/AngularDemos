//const Class
class userinfos1{
    private FirstName : string;
    protected Lastname : string;
    constructor(fname, lname){
        this.FirstName= fname;
        this.Lastname = lname;
    }
    print(){
        console.log(this.FirstName + ' ' + this.Lastname)
    }
}

var c1 = new userinfos1 ('k', 's')
c1.print();