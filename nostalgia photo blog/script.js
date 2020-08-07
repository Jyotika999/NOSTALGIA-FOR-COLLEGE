/*var button = document.querySelector("button");
button.addEventListener("CLICK ME TO CHANGE BACKGROUND COLOR", changecolor);
function changecolor()
{
	body.style.color = "pink";
}*/
//alert("connnected!!");
var button = document.querySelector("button");
var ispink= false;
// if green , make it pink , and if pink then make it green
button.addEventListener("click", function(){
	if(ispink)
	{
        ispink = false;
		document.body.style.background = "lightgreen";
	}
	else
	{
	document.body.style.background = "pink";
	ispink = true;
    }
})