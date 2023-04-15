const mobilePhone = {
    company: "Redmi",
    model: "Note 10",
    color: "black",
    simSlots: {
      simOne:  "Jio",
      simTwo:  "Airtel",
    },
batteryinV: 15,
batterLevel: 25,
draining: function (decrease) {
  this.batterLevel=decrease;
}
};

const waterBottle = {
  color: "Green",
  sizeInMeter: 2,
  capacity: 3,
  company: "Flash",  
};

const webSeries = {
  cast : {
  hero: "Barry Allen",
  heroine: "Iris",
  villain: "Reverse flash",
},
  alterUniv: function (althero,altheroine,altvillain) {
    this.cast.hero=althero;
    this.cast.heroine=altheroine;
    this.cast.villain=altvillain;
  },

};
console.log ("Original timeline",webSeries.cast);
webSeries.alterUniv("Batman","Catwoman","Joker")
console.log("Flast paradox timeline",webSeries.cast);


/*console.log("Meet my new phone specifications: ", mobilePhone);
console.log("Service Provider for Sim 1 is ", mobilePhone.simSlots.simOne);
console.log("Sim Services", mobilePhone.simSlots);
console.log("Service Provider for Sim 2 is ", mobilePhone.simSlots.simTwo);
console.log("These are the features of my new Water Bottle\n1)Color:",waterBottle.color+"\n2)Size:",waterBottle.sizeInMeter+" Meters"+"\n3)Capacity:",waterBottle.capacity+" Liters"+"\n4)Company:",waterBottle.company);
*/

