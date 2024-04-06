/**
 * 
 */

let buttons = document.querySelectorAll("button");
//let closeButton = document.queySelectorAll("#close");


for (let i = 0; i<buttons.length; i++){
	buttons[i].addEventListener("click",Action.addAlert.bind(buttons[i]));
}