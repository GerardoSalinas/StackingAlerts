/**
 * @author gasalinas@unah.hn
 */

class Action {
	/** 
	 * Calcula el índice de la nueva alerta, la crea y finalmente la incrusta
	 * antes del botón su columna.
	 */
	static addAlert(){
		let stackContainer = this.parentNode;
				
		let alertNumber = 0;
		if (window.localStorage.getItem(stackContainer.dataset.column) == null){
			window.localStorage.setItem(stackContainer.dataset.column,0);
		}else{
			alertNumber = window.localStorage.getItem(stackContainer.dataset.column)
		}
		alertNumber++;

		window.localStorage.setItem(stackContainer.dataset.column,alertNumber);
		
		let newAlert = document.createElement("div");
		Action.defineAlert(newAlert,alertNumber);
		
		let closeButton = document.createElement("button");
		Action.defineCloseButton(closeButton);

		newAlert.appendChild(closeButton);
		stackContainer.insertBefore(newAlert,this);
		
	}

	/** 
	 * Agrega las clases de Bootstrap al botón para cerrar la alerta
	 */
	static defineCloseButton(closeButton){
		closeButton.setAttribute("type","button");
		closeButton.classList.add("btn-close");
		closeButton.setAttribute("data-bs-dismiss","alert");
		closeButton.setAttribute("aria-label","Close");
		
	}
	
	/** 
	 * Agrega las clases de Bootstrap y el índice a la alerta
	 */
	static defineAlert(newAlert,alertNumber){
		newAlert.classList.add("alert","alert-dismissible","fade","show");
		newAlert.setAttribute("role","alert");
		newAlert.style.backgroundColor = "#d8b4fe";
		newAlert.innerText = `Elemento # ${alertNumber}`;
	}
}