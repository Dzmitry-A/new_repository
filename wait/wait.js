let wait = function () {

function Error(message) {
		this.message = message;
		this.name = "Исключение, определенное пользователем";
}; 
this.waitForElementPresent = async function(intervalRequest, timeOut, elementObject) {
			
			let result = false;
			let step = timeOut / intervalRequest;	
			
			for (let i = 0; i < step; i++) {
				
			if (await elementObject.isPresent()) {
				result = true;
				break;
			}
			browser.sleep(intervalRequest);
			}
			console.log(result);	
			try {
			if (!result)  {
			throw new Error ('Ошибка: Элемент не найден');
			}				
			}
			catch {
				console.log('ERROR');
			}
		
		};
};
module.exports = new wait ();
