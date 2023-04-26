// your code here

		const nameField = document.getElementById("name");
		const yearField = document.getElementById("year");
		const button = document.getElementById("button");
		const urlField = document.getElementById("url");
		
		button.addEventListener("click", function() {
			let nameValue = encodeURIComponent(nameField.value);
			let yearValue = encodeURIComponent(yearField.value);
			let queryString = `?name=${nameValue}&year=${yearValue}`;
			urlField.textContent = `https://localhost:8080/${queryString}`;
		});