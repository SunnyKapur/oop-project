class MobileShop {
  constructor() {
    this.mobiles = [];
  }

  addMobile(mobile) {
    this.mobiles.push(mobile);
  }
}

class Mobile {
  constructor(brand, model, price, color) {
    this.id = Math.floor(Math.random() * 10000);
    this.model = model;
    this.price = price;
    this.color = color;
    this.brand = brand;
    this.sims = [];
  }

  getMobileInfo() {
    console.log(
      `${this.brand} - ${this.model} - ${this.price} - ${this.color} - ${this.sims[0]?.brand + " " + this.sims[1]?.brand}`,
    );
    
  }

  insertSim(sim) {
    if (this.sims.length === 2) {
      console.log("sorry you already have 2 sims installed.");
      return;
    }
    this.sims.push(sim);
  }
}

class Sim {
  constructor(brand, balance) {
    this.brand = brand;
    this.balance = balance;
  }

  addBalance(balance) {
    if (balance < 0) {
      console.log("add balance give amount greater than 0");
      return;
    }
    this.balance += balance;
  }

  listAllMobiles = () => {
    this.mobiles.forEach((mb, index) => {
      console.log(
        `${index + 1} ${mb.brand} - ${mb.model} - ${mb.color} - ${mb.price}`,
      );
    });
  };
}

let myMobileShop = new MobileShop();

let samsung = new Mobile("Samsung", "Galaxy s25 ultra", 100000, "blue");

let jio = new Sim("jio", 185);

samsung.insertSim(jio);
myMobileShop.addMobile(samsung);
