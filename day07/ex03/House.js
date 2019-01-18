
function House (houseName, houseMotto, houseSeat)
{
	this.houseName = houseName;
	this.houseMotto = houseMotto;
	this.houseSeat = houseSeat;

	this.getHouseName = function() {
		return this.houseName;
	}

	this.getHouseMotto = function() {
		return this.houseMotto;
	}

	this.getHouseSeat = function() {
		return this.houseSeat;
	}

	this.introduce = function () {
		console.log("House " + this.getHouseName() + " of " + this.getHouseSeat() + " : " + this.getHouseMotto());
	}

}

function HouseStark () 
{
	House.call(this, "Stark", "Winter is coming", "Winterfell");
}

function HouseMartell () 
{
	House.call(this, "Martell", "Unbowed, Unbent, Unbroken", "Sunspear");
}


var a = new HouseStark()

a.introduce();

var b = new HouseMartell()

b.introduce();

