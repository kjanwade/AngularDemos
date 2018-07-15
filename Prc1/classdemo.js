//const Class
var userinfos1 = /** @class */ (function () {
    function userinfos1(fname, lname) {
        this.FirstName = fname;
        this.Lastname = lname;
    }
    userinfos1.prototype.print = function () {
        console.log(this.FirstName + ' ' + this.Lastname);
    };
    return userinfos1;
}());
var c1 = new userinfos1('k', 's');
c1.print();
