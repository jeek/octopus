/** @param {NS} ns */

const CITIES = ["Aevum", "Chongqing", "Ishima", "New Tokyo", "Sector-12", "Volhaven"];

class Employee {
    constructor(ns, division, city, name) {
        this.division = division;
        this.city = city;
        this.rawdata = ns.corporation.getEmployee(division, city, name);
    }
    update(ns) {
        this.rawdata = ns.corporation.getEmployee(this.division, this.city, this.name);
    }
    get cha() {
        return this.rawdata.cha;
    }
    get cre() {
        return this.rawdata.cre;
    }
    get eff() {
        return this.rawdata.eff;
    }
    get ene() {
        return this.rawdata.ene;
    }
    get exp() {
        return this.rawdata.exp;
    }
    get hap() {
        return this.rawdata.hap;
    }
    get int() {
        return this.rawdata.int;
    }
    get loc() {
        return this.rawdata.loc;
    }
    get mor() {
        return this.rawdata.mor;
    }
    get name() {
        return this.rawdata.name;
    }
    get pos() {
        return this.rawdata.pos;
    }
    get sal() {
        return this.rawdata.sal;
    }
    optimal() {
        this.rawdata.ene=100;
        this.rawdata.exp=100;
        this.rawdata.hap=100;
    }
}

class Corp {
    #ns;
    /** @param {NS} ns */
    constructor(ns, name="JeekCo", plan=[["Agriculture"],["Agriculture"],["Tobacco"],["Tobacco"],["Tobacco"]]) {
        this.#ns = ns;
        this.name = name;
        this.plan = plan;
        if (!(ns.getPlayer().hasCorporation)) {
            ns.corporation.createCorporation(name, this.#ns.getPlayer().bitNodeN != 3);
        }
    }
    loop() {
        if (!(this.#ns.getPlayer().hasCorporation)) {
            if (!this.#ns.corporation.createCorporation(this.name, this.#ns.getPlayer().bitNodeN != 3)) {
                this.#ns.tprint("Unable to start Corporation.");
                return false;
            }
        }
    }
    get round() {
        this.#ns.tprint(this.#ns);
        if (!((this.#ns).getPlayer().hasCorporation)) {
            return 0;
        }
        if (this.#ns.corporation.getCorporation().public) {
            return 5;
        }
        return this.#ns.corporation.getInvestmentOffer().round;
    }
    peeps() {
        for (let division of this.#ns.corporation.getCorporation().divisions) {
            for (let city of division.cities) {
                for (let emp of this.#ns.corporation.getOffice(division.name, city).employees) {
                    this.#ns.tprint(new Employee(this.#ns, division.name, city, emp));
                }
            }
        }
    }
}

/** @param {NS} ns */
export async function main(ns) {
    let corp = new Corp(ns);
    ns.tprint(corp.round);
    while (true) {
        corp.loop();
        corp.peeps();
        await ns.sleep(1000);
    }
}