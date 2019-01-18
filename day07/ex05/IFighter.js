
function createBackstabber(person) 
{

	this.recruit = function(person)
	{
		console.log("You are not allowed to recruit an IFighter");
	}

}

var a = new createBackstabber("a");
a.recruit();

