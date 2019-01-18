
function createFighter(person) 
{
	this.fighter = [];

	this.recruit = function(person)
	{
		this.fighter.push(person);

	}

}

var a = new createFighter("a");
a.recruit();

