var university = /** @class */ (function () {
    function university() {
    }
    university.prototype.Constructor = function (name, dep) {
        this.name = name;
        this.dep = dep;
    };
    university.prototype.graduation = function (year) {
        console.log('Graduating ${this.dep} ${this.year} student');
    };
    return university;
}());
var mum = new university();
mum.graduation(2019);
