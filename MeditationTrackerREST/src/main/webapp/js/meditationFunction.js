window.addEventListener('load', function(e){
	console.log('document loaded');
	init();
});

function init(){
	document.meditationForm.lookup.addEventListener('click', function(event){
		event.preventDefault();
		var meditationId = document.meditationForm.meditationId.value;
		if(!isNaN(meditationId) && meditationId > 0){
			getMeditation(meditationId);
		}
	})
	document.getElementById('addMeditation').addEventListener('click', function(evt){
		event.preventDefault();
		addMeditation();
	})
}

function getMeditation(meditationId){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/meditation/' + meditationId);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				console.log('found meditation ' + meditationId);
				let meditation = JSON.parse(xhr.responseText);
				displayMeditation(meditation);
			}else{
				document.getElementById('meditationData').textContent = 'Meditation not found';
			}
		}
	};
	xhr.send(null);
}

function displayMeditation(meditation){
	let dataDiv = document.getElementById('meditationData');
	dataDiv.textContent = '';
	let h1 = document.createElement("h1");
	h1.textContent = meditation.name;
	dataDiv.appendChild(h1);
	let ul = document.createElement("ul");
	let li = document.createElement("li");
	li.textContent = meditation.goal;
	ul.appendChild(li);
	dataDiv.appendChild(ul);
	li = document.createElement("li");
	li.textContent = meditation.timeSpent + " minutes";
	ul.appendChild(li);
	li = document.createElement("li");
	li.textContent = meditation.recommendedTime + " minutes";
	ul.appendChild(li);
	li = document.createElement("li");
	li.textContent = meditation.feelingRate;
	ul.appendChild(li);
	dataDiv.appendChild(ul);
	getAndDisplayMeditations(meditation.id) + " out of 10";
}
	
function getAndDisplayMeditations(meditationId){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/meditation/' + meditationId);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.readyState === 200){
				console.log('found this Meditation ' + meditationId);
				let meditations = JSON.parse(xhr.responseText);
				displayMeditation(meditations);
			}
		}
	};
	xhr.send(null);
}

function addMeditation(){
	console.log('addMeditation() called.');
	let m = document.addMeditationForm;
	let meditation = {};
	meditation.name = m.name.value;
	meditation.goal = m.goal.value;
	meditation.timeSpent = m.timeSpent.value;
	meditation.recommendedTime = m.recommendedTime.value;
	meditation.feelingRate = m.feelingRate.value;
	
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/meditations');
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 201){
				let addedMeditation = JSON.parse(xhr.responseText);
				console.log(addedMeditation);
				displayMeditation(addedMeditation);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(meditation));
}

function deleteAndupdate(){
	document.getElementById('DeleteTableRow0').addEventListener('click', function(event){
		event.preventDefault();
		alert('ads');
		onLoad();
	});
	document.getElementById('DeleteTableRow1').addEventListener('click', function(event){
		event.preventDefault();
		alert('ads');
		onLoad();
	});
	document.getElementById('DeleteTableRow2').addEventListener('click', function(event){
		event.preventDefault();
		alert('ads');
		let f = document.deleteMeditationFor;
		onLoad();
	});
	document.getElementById('DeleteTableRow3').addEventListener('click', function(event){
		event.preventDefault();
		alert('ads');
		onLoad();
	});
	document.getElementById('DeleteTableRow4').addEventListener('click', function(event){
		event.preventDefault();
		alert('ads');
		onLoad();
	});
	document.getElementById('DeleteTableRow5').addEventListener('click', function(event){
		event.preventDefault();
		alert('ads');
		onLoad();
	});
	document.getElementById('updateTableRow0').addEventListener('click', function(event){
		event.preventDefault();
		alert('Hello');
		onLoad();
	});
	document.getElementById('updateTableRow1').addEventListener('click', function(event){
		event.preventDefault();
		alert('Hello');
		onLoad();
	});
	document.getElementById('updateTableRow2').addEventListener('click', function(event){
		event.preventDefault();
		alert('Hello');
		onLoad();
	});
	document.getElementById('updateTableRow3').addEventListener('click', function(event){
		event.preventDefault();
		alert('Hello');
		onLoad();
	});
	document.getElementById('updateTableRow4').addEventListener('click', function(event){
		event.preventDefault();
		alert('Hello');
		onLoad();
	});
	document.getElementById('updateTableRow5').addEventListener('click', function(event){
		event.preventDefault();
		alert('Hello');
		onLoad();
	});
	
}

//function deleteMeditation(meditation){
//	console.log("delete function");
//	var xhr = new XMLHttpRequest();
//	xhr.open('delete', 'api/meditations/' + meditation.id, true);
//	xhr.setRequestHeader("Content-type", "application/json");
//	xhr.onreadystatechange = function(){
//		if(xhr.readyState === 4 && xhr.status < 400){
//			console.log(xhr.responseText);
//			getMeditation();
//		}
//		if(xhr.readyState === 4 && xhr.status >= 400){
//			console.error(xhr.status + ': ' + xhr.responseText);
//			var display = document.getElementById('display');
//			display.textContent = "meditation Not Found";
//		}
//	};
//	xhr.send(null);
//}

//function editMeditation(e){//check mapping on monday 
//	e.preventDefault();
//	let id = e.currentTarget.id;
//	console.log(id);
//	let xhr = new XMLHttpRequest();
//	
//	xhr.open('GET', 'api/meditations/' + meditationId, true);
//	
//	xhr.onreadystatechange = function(){
//		console.log('xhr.readystate: ' + xhr.readyState);
//		console.log('xhr.status: ' + xhr.readyState);
//		console.log('xhr.responseText: ' + xhr.responseText);
//		console.log('--------------');
//		if(xhr.readyState === 4 && xhr.status < 400){
//			console.log('typeof xhr.responseText: ' + typeof xhr.responseText);
//			var meditations = JSON.parse(xhr.responseText;)
//			console.log('typeof meditations: ' + typeof meditations);
//			editView(meditations);
//			console.log(meditations);
//		}
//		if(xhr.readyState === 4 && xhr.status >= 400){
//			console.error(xhr.status +': ' + xhr.responseText);
//			document.results textContent = "Meditation was not found."
//		}
//		xhr.send(null);
//	}
//}
function showAll(e){
	e.preventDefault();
	xhr.open('GET', 'api/meditations/' + meditationId, true);
	xhr.onreadystatechange = function(){
		console.log('xhr.readystate: ' + xhr.readyState);
		console.log('xhr.status: ' + xhr.readyState);
		console.log('xhr.responseText: ' + xhr.responseText);
		if(xhr.readyState === 4 && xhr.status < 400){
			console.log('typeof xhr.responseText: ' + typeof xhr.responseText);
			var meditation = JSON.parse(xhr.responseText);
			console.log(meditation);
			console.log('typeof meditation: ' + typeof meditation);
//			displayMeditation(meditation);
			console.log(meditation);
		}
		if(xhr.readyState === 4 && xhr.status >= 400){
			console.error(xhr.status + ': ' + xhr.responseText);
			document.results.textContent = "meditation was not found."
		}
	};
	xhr.send(null);
	console.log(meditation);
	return meditation;
}

function deleteMeditation(){
	console.log('deleteMeditation() called.');
	let m = document.deleteMeditationForm;
	let meditate = {};
	meditate.id = m.id.value;
	let id = m.id.value;
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', '/api/meditations/' + id);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				let deletedMeditation = JSON.parse(xhr.responseText);
				console.log(deletedMeditation);
			}
		}
	}
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(meditate));
	lovation.reload();
}

function editMeditation(){
	console.log('updateMeditation() called.');
	let m = document.updateMeditationForm;
	let meditate = {};
	meditate.id = m.id.value;
	let id = m.id.value;
	meditate.name = m.name.value;
	meditate.goal = m.goal.value;
	meditate.timeSpent = m.timeSpent.value;
	meditate.recommendedTime = m.recommendedTime.value;
	meditate.feelingRate = m.feelingRate.value;
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', '/api/meditation/' + meditationId);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				let addedMeditation = JSON.parse(xhr.responseText);
				console.log(addedMeditation);
			}
		}
	}
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(books));
	location.reload();
}









	







