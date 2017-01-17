/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

//Create a construction fxn with var Band
//Define band
//Make it have 3 key value pairs that are provided with parameters
//Has 3 key value pairs that will run across all objects
//Make one of those a function
// new creates an object where "this" applies

var band = {Name: "Hideos Gnosis Symposium 1" Members:3; Instruments: "bass, keyboard, electric guitar"};

function band(name, members, instruments) {
    this.name = name;
    this.members = members;
    this.instruments = instruments;
    this.genre ="metal";
    this.playMusic = true;
    this.jamSession= function(startPhrase) {
    	alert(startPhrase + "! -->" this.lyrics);

    };
};
var nirvana = new RockBand("Kurt Cobain", "Dave Grohl" "Krist Novoselic", "Come as you are");
var coldplay = new RockBand("Chris Martin", "bass", "drummer","It was all Yellow");
var fooFighters = new RockBand("Dave Grohl", "Nate Mendel". "Pat Smear", "Times like these");

RockBand.prototype.guitarType = "Fender";
console.log(nirvana, coldplay, fooFighters);
nirvana.jamSession("1,2,3,4");
coldplay.jamSession("Rock On");
fooFighters.jamSession("Yeah! Ya;ll ready for this");

NewBand = band {Name: "Hideos Gnosis Symposium 1" Members:3; Instruments: "bass, keyboard, electric guitar"};