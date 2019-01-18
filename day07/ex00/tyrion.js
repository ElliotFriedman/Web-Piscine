
function Lannister(first, size) {
	//constructor
	console.log("A Lannister is born!");
	last = "Lannister";
	this.name = {
		first,
		last
	};

	this.height = size;

	this.getSize = function () {
		return "average";
	}

	this.myName = function () {
		console.log("My name is ", this.name.first , ".");
	}
};

function Tyrion() {
	Lannister.call(this, "Tyrion", "short");

	this.getSize = function () {
		return "Short";
	}
};

var n = new Tyrion("Tyrion", "Lannister");
n.myName();
console.log(n.getSize());


