/** @param {NS} ns */

const CITIES = ["Aevum", "Chongqing", "Ishima", "New Tokyo", "Sector-12", "Volhaven"];

export const DIVISIONS = {
    "Energy": {
        "Name": "Global Warmers Incorporated",
        "Warehouse": {
            "Real Estate": .65,
            "Hardware": 0,
            "Robots": .05,
            "AI Cores": .3
        },
        "Factors": {
            "Science": .7,
            "Advertising": .08
        },
        "Material Input": {
            "Hardware": .1,
            "Metal": .2
        },
        "Material Output": {
            "Energy": 1
        },
        "HQ Ratio": {
            "Operations": 2,
            "Engineer": 2,
            "Business": 1,
            "Management": 2,
            "Research & Development": 2
        },
        "Sat Ratio": {
            "Operations": 2,
            "Engineer": 2,
            "Business": 1,
            "Management": 2,
            "Research & Development": 2
        },
        "Launch Cost": 225e9
    },
    "Utilities": {
        "Name": "Brawndo",
        "Warehouse": {
            "Real Estate": .65,
            "Hardware": 0,
            "Robots": .4,
            "AI Cores": .4
        },
        "Factors": {
            "Science": .6,
            "Advertising": .08
        },
        "Material Input": {
            "Hardware": .1,
            "Metal": .1
        },
        "Material Output": {
            "Water": 1
        },
        "HQ Ratio": {
            "Operations": 2,
            "Engineer": 2,
            "Business": 1,
            "Management": 2,
            "Research & Development": 2
        },
        "Sat Ratio": {
            "Operations": 2,
            "Engineer": 2,
            "Business": 1,
            "Management": 2,
            "Research & Development": 2
        },
        "Launch Cost": 150e9        
    },
    "Agriculture": {
        "Name": "Soylent Jeek",
        "Warehouse": {
            "Real Estate": .72,
            "Hardware": .2,
            "Robots": .3,
            "AI Cores": .3
        },
        "Factors": {
            "Science": .5,
            "Advertising": .04
        },
        "Material Input": {
            "Water": .5,
            "Energy": .5,
        },
        "Material Output": {
            "Food": 1,
            "Plants": 1
        },
        "HQ Ratio": {
            "Operations": 2,
            "Engineer": 2,
            "Business": 1,
            "Management": 2,
            "Research & Development": 2
        },
        "Sat Ratio": {
            "Operations": 2,
            "Engineer": 2,
            "Business": 1,
            "Management": 2,
            "Research & Development": 2
        },
        "Launch Cost": 40e9
    },
    "Fishing": {
        "Name": "Smells Like Fish",
        "Warehouse": {
            "Real Estate": .15,
            "Hardware": .35,
            "Robots": .5,
            "AI Cores": .2
        },
        "Factors": {
            "Science": .35,
            "Advertising": .08
        },
        "Material Input": {
            "Energy": .5
        },
        "Material Output": {
            "Food": 1
        },
        "HQ Ratio": {
            "Operations": 2,
            "Engineer": 2,
            "Business": 1,
            "Management": 2,
            "Research & Development": 2
        },
        "Sat Ratio": {
            "Operations": 2,
            "Engineer": 2,
            "Business": 1,
            "Management": 2,
            "Research & Development": 2
        },
        "Launch Cost": 80e9
    },
    "Mining": {
        "Name": "Deep Diggers",
        "Warehouse": {
            "Real Estate": .3,
            "Hardware": .4,
            "Robots": .45,
            "AI Cores": 45
        },
        "Factors": {
            "Science": .26,
            "Advertising": .06
        },
        "Material Input": {
            "Energy": .8
        },
        "Material Output": {
            "Metal": 1
        },
        "HQ Ratio": {
            "Operations": 2,
            "Engineer": 2,
            "Business": 1,
            "Management": 2,
            "Research & Development": 2
        },
        "Sat Ratio": {
            "Operations": 2,
            "Engineer": 2,
            "Business": 1,
            "Management": 2,
            "Research & Development": 2
        },
        "Launch Cost": 300e9
    },
    "Food": {
        "Name": "Jeek Heavier Industries",
        "Products": [
            "Taco Hole",
            "Burrito Gorge",
            "Pizza Slut",
            "Chicken Jeeka Masala",
            "Gorge Buffet"
        ],
        "Warehouse": {
            "Real Estate": .05,
            "Hardware": .15,
            "Robots": .3,
            "AI Cores": .25
        },
        "Factors": {
            "Science": .12,
            "Advertising": .25
        },
        "Material Input": {
            "Food": .5,
            "Water": .5,
            "Energy": .2
        },
        "HQ Ratio": {
            "Operations": 37,
            "Engineer": 10,
            "Management": 17,
            "Research & Development": 26
        },
        "Janaszar": {
            "Engineer": 28,
            "Management": 72
        },
        "Sat Ratio": {
            "Research & Development": 1
        },
        "Launch Cost": 10e9
    },
    "Tobacco": {
        "Name": "Pole Smokers",
        "Products": [
            "Tobacco Classic",
            "New Tobacco",
            "Tobacco Zero",
            "Diet Tobacco",
            "Caffeine-Free Tobacco"
        ],
        "Warehouse": {
            "Real Estate": .15,
            "Hardware": .15,
            "Robots": .2,
            "AI Cores": .15
        },
        "Factors": {
            "Science": .75,
            "Advertising": .2
        },
        "Material Input": {
            "Plants": 1,
            "Water": .2
        },
        "HQ Ratio": {
            "Operations": 1,
            "Management": 21,
            "Research & Development": 68
        },
        "Janaszar": {
            "Engineer": 9,
            "Management": 91
        },
        "Sat Ratio": {
            "Research & Development": 1
        },
        "Launch Cost": 20e9        
    },
    "Chemical": {
        "Name": "Based Acidics",
        "Warehouse": {
            "Real Estate": .25,
            "Hardware": .2,
            "Robots": .25,
            "AI Cores": .2
        },
        "Factors": {
            "Science": .75,
            "Advertising": .07
        },
        "Material Input": {
            "Plants": 1,
            "Energy": .5,
            "Water": .5
        },
        "Material Output": {
            "Chemicals": 1
        },
        "HQ Ratio": {
            "Operations": 2,
            "Engineer": 2,
            "Business": 1,
            "Management": 2,
            "Research & Development": 2
        },
        "Sat Ratio": {
            "Operations": 2,
            "Engineer": 2,
            "Business": 1,
            "Management": 2,
            "Research & Development": 2
        },
        "Launch Cost": 70e9
    },
    "Pharmaceutical": {
        "Name": "Pill Poppers",
        "Products": [
            "Hydroxyqulora",
            "Viagra",
            "Bleach",
            "Hot Beef Injection",
            "Viagra II"
        ],
        "Warehouse": {
            "Real Estate": .05,
            "Hardware": .15,
            "Robots": .25,
            "AI Cores": .2
        },
        "Factors": {
            "Science": .8,
            "Advertising": .16
        },
        "Material Input": {
            "Chemicals": 2,
            "Energy": 1,
            "Water": .5
        },
        "Material Output": {
            "Drugs": 1
        },
        "HQ Ratio": {
            "Engineer": 31,
            "Management": 69
        },
        "Janaszar": {
            "Engineer": 31,
            "Management": 69
        },
        "Sat Ratio": {
            "Research & Development": 1
        },
        "Launch Cost": 200e9
    },
    "Computer": {
        "Name": "Jeekutron",
        "Products": [
            "A",
            "B",
            "C",
            "D",
            "E"
        ],
        "Warehouse": {
            "Real Estate": .2,
            "Hardware": 0,
            "Robots": .36,
            "AI Cores": .19
        },
        "Factors": {
            "Science": .62,
            "Advertising": .17
        },
        "Material Input": {
            "Metal": 2,
            "Energy": 1
        },
        "Material Output": {
            "Hardware": 1
        },
        "HQ Ratio": {
            "Engineer": 37,
            "Management": 63
        },
        "Janaszar": {
            "Engineer": 37,
            "Management": 63
        },
        "Sat Ratio": {
            "Research & Development": 1
        },
        "Launch Cost": 500e9
    },
    "Robotics": {
        "Name": "Asimov's Rulebreakers",
        "Products": [
            "Die",
            "Bang",
            "Boom",
            "Burn",
            "Fuck"
        ],
        "Warehouse": {
            "Real Estate": .32,
            "AI Cores": .36,
            "Hardware": .19,
            "Robots": 0
        },
        "Factors": {
            "Science": .65,
            "Advertising": .18
        },
        "Material Input": {
            "Hardware": 5,
            "Energy": 3
        },
        "Material Output": {
            "Robots": 1
        },
        "HQ Ratio": {
            "Engineer": 30,
            "Management": 70
        },
        "Janaszar": {
            "Engineer": 30,
            "Management": 70
        },
        "Sat Ratio": {
            "Research & Development": 1
        },
        "Launch Cost": 1e12
    },
    "Software": {
        "Name": "Jeekrosoft",
        "Products": [
            "Jeekrosoft Word",
            "Jeekrosoft Calc",
            "Jeekuel Server"
            "Jeekrosoft Comms",
            "Jeekrosoft Draw"
        ],
        "Warehouse": {
            "Real Estate": .15,
            "Hardware": .25,
            "AI Cores": .18,
            "Robots": .05
        },
        "Factors": {
            "Science": .62,
            "Advertising": 
        },
        "Material Input": {
            "Hardware": .5,
            "Energy": .5
        },
        "Material Output": {
            "AI Cores": 1
        },
        "HQ Ratio": {
            "Engineer": 37,
            "Management": 63
        },
        "Janaszar": {
            "Engineer": 37,
            "Management": 63
        },
        "Sat Ratio": {
            "Research & Development": 1
        },
        "Launch Cost": 25e9
    },
    "Healthcare": {
        "Name": "PILLZ",
        "Products": [
            "OnlyFans",
            "GoFundMe",
            "eBay",
            "Amazon Marketplace",
            "JustForFans"
        ],
        "Warehouse": {
            "Real Estate": .1,
            "Hardware": .1,
            "Robots": .1,
            "AI Cores": .1
        },
        "Factors": {
            "Science": .75,
            "Advertising": .11
        },
        "Material Input": {
            "Robots": 10,
            "AI Cores": 5,
            "Energy": 5,
            "Water": 5
        },
        "HQ Ratio": {
            "Engineer": 27,
            "Management": 93
        },
        "Janaszar": {
            "Engineer": 27,
            "Management": 93
        },
        "Sat Ratio": {
            "Research & Development": 1
        },
        "Launch Cost": 750e9
    },
    "Real Estate": {
        "Name": "Land Ho",
        "Products": [
            "Hole in the Wall",
            "Raising Acres",
            "Skyview",
            "Frolicking",
            "Wonderwall"
        ],
        "Warehouse": {
            "Real Estate": 0,
            "Hardware": .05,
            "AI Cores": .6,
            "Robots": .6
        },
        "Factors": {
            "Science": .05,
            "Advertising": .25
        },
        "Material Input": {
            "Metal": 5,
            "Energy": 5,
            "Water": 2,
            "Hardware": 4
        },
        "Material Output": {
            "Real Estate": 1
        },
        "HQ Ratio": {
            "Engineer": 56,
            "Management": 44
        },
        "Janaszar": {
            "Management": 1
        },
        "Sat Ratio": {
            "Research & Development": 1
        },
        "Launch Cost": 600e9
    }
}

// IMPLEMENT BIG HARRY
// Big Harry: I go 1/1/1/1 +11, 2/1/3/2 + 22, then 6/3/8/6 + 22, then all into r&d after

const PRODUCTRATINGS = {
  "Food": {
    "Quality": 0.7,
    "Durability": 0.1,
    "Aesthetics": 0.2,
  },
  "Tobacco": {
    "Quality": 0.4,
    "Durability": 0.2,
    "Reliability": 0.2,
    "Aesthetics": 0.2
  },
  "Pharmaceutical": {
    "Quality": 0.2,
    "Performance": 0.2,
    "Durability": 0.1,
    "Reliability": 0.3,
    "Features": 0.2
  },
  "Computer": {
    "Quality": 0.15,
    "Performance": 0.25,
    "Durability": 0.25,
    "Reliability": 0.2,
    "Aesthetics": 0.05,
    "Features": 0.1
  },
  "Robotics": {
    "Quality": 0.1,
    "Performance": 0.2,
    "Durability": 0.2,
    "Reliability": 0.2,
    "Aesthetics": 0.1,
    "Features": 0.2
  },
  "Software": {
    "Quality": 0.2,
    "Performance": 0.2,
    "Reliability": 0.2,
    "Durability": 0.2,
    "Features": 0.2
  },
  "Healthcare": {
    "Quality": 0.4,
    "Performance": 0.1,
    "Durability": 0.1,
    "Reliability": 0.3,
    "Features": 0.1
  },
  "RealEstate": {
    "Quality": 0.2,
    "Durability": 0.25,
    "Reliability": 0.1,
    "Aesthetics": 0.35,
    "Features": 0.1
  }
}

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

class Division {
    #ns;
    constructor (ns, industry="Agriculture") {
        this.#ns = ns;
        this.industry = industry;
        this.rawdata = ns.corporation.getDivision(industry);
    }
    peeps() {
        for (let city of this.#ns.corporation.rawdata) {
            
        }
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