
function Lannister(first) {
	//constructor
	this.name = first;

	this.sleepWith = function (person) {
		if (this.name == "Jamie")
		{
			if (person.name == "Cersei")
			{
				console.log("With pleasure, but only in a tower in Winterfell, then.");
			}
			if (person.name == "Tyrion")
			{
				console.log("Not even if I'm drunk !");
			}
			if (person.name == "Sansa")
			{
				console.log("Let's do this");
			}

		}
		if (this.name == "Tyrion")
		{
			if (person.name == "Jamie")
			{
				console.log("Not even if I'm drunk !");
			}
			if (person.name == "Cersei")
			{
				console.log("Not even if I'm drunk !");
			}
			if (person.name == "Sansa")
			{
				console.log("Let's do this");
			}
		}
	}
};

function Tyrion() {
	Lannister.call(this, "Tyrion");
};


function Jamie() {
	Lannister.call(this, "Jamie");
};

function Cersei() {
	Lannister.call(this, "Cersei");
};

function Sansa() {
	Lannister.call(this, "Sansa");
};

var t = new Tyrion();
var j = new Jamie();
var s = new Sansa();
var c = new Cersei();

j.sleepWith(t);
j.sleepWith(s);
j.sleepWith(c);


t.sleepWith(j);
t.sleepWith(s);
t.sleepWith(c);


