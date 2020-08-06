class Personel {

    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    save() {
        console.log("saving... " + this.name);
        //second way
        console.log(`saving... ${this.name}`);
    }

}

const personel = new Personel("java", "script");

personel.save();

personel.name="ali"
console.log(personel.name );