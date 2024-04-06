/**
 * @author gasalinas@unah.hn
 */

class Action {
	static addAlert(){
		let stackContainer = this.parentNode;
		let newAlert = document.createElement("div");
		let closeButton = document.createElement("button");
		Action.defineCloseButton(closeButton);
		
		
		newAlert.classList.add("alert","alert-primary","alert-dismissible","fade","show");
		newAlert.setAttribute("role","alert");
		let alertNumber = 0;
		if (window.localStorage.getItem(stackContainer.dataset.column) == null){
			window.localStorage.setItem(stackContainer.dataset.column,0);
		}else{
			alertNumber = window.localStorage.getItem(stackContainer.dataset.column);
		}
		alertNumber++;
		newAlert.innerText = `Elemento # ${alertNumber}`;
		window.localStorage.setItem(stackContainer.dataset.column,alertNumber);
		
		//newAlert.style.backgroundColor = "#f3e8ff";
		newAlert.appendChild(closeButton);
		stackContainer.insertBefore(newAlert,this);
		
	}
	
	static removeAlert(){
		//revisar si la columna esta vacía, si lo está, poner el contador de 
		//alertas en 0 en el LocalStorage
		
	}
	
	static defineCloseButton(closeButton){
		closeButton.setAttribute("type","button");
		closeButton.classList.add("btn-close");
		closeButton.setAttribute("data-bs-dismiss","alert");
		closeButton.setAttribute("aria-label","Close");
		
	}
}