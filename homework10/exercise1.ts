class university{
     name:string;
     dep : string;
    Constructor( name: string, dep:string){
        this.name=name;
        this.dep=dep;
    }
    graduation(year:number){
        console.log('Graduating ${this.dep} ${this.year} student');
    }
}
let mum = new university();
mum.graduation(2019);