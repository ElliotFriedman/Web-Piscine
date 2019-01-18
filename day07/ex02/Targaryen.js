
function Targaryen (name) 
{
	this.name = name;

	this.getBurned = function (){
		console.log(this.name, this.resistsFire ? "emerges naked but unharmed" : "burns alive");
	}
}

function Viserys ()
{
	this.resistsFire = false;
	Targaryen.call(this, "Viserys");
}

function Daenerys ()
{
	this.resistsFire = true;
	Targaryen.call(this, "Daenerys");
}

var a = new Daenerys();
a.getBurned();

var b = new Viserys();
b.getBurned();

