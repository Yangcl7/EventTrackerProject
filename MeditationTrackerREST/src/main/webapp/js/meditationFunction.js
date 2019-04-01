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
	var dataDiv = document.getElementById('meditationData');
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

function deleteMeditation(meditation){
	console.log("delete function");
	var xhr = new XMLHttpRequest();
	xhr.open('delete', 'api/meditations/' + meditation.id, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status < 400){
			console.log(xhr.responseText);
			getMeditation();
		}
		if(xhr.readyState === 4 && xhr.status >= 400){
			console.error(xhr.status + ': ' + xhr.responseText);
			var display = document.getElementById('display');
			display.textContent = "meditation Not Found";
		}
	};
	xhr.send(null);
}

function editForm(meditation){
	document.createMeditation.name.value - meditation.name;
	document.createMeditation.goal.value - meditation.goal;
	document.createMeditation.timeSpent.value - meditation.timeSpent;
	document.createMeditation.recommendedTime.value - meditation.recommendedTime;
	document.createMeditation.feelingRate.value - meditation.feelingRate;
	let children = document.createActivity.select.children;
	for(let i = 0; i < children.length; i++){
		for(let j = 0; j < activity.categories.length; j++){
			if(activity.categories[j].name === children[i].textContent){
				children[i].setAttribute('selected', null)
			}
		}
	}
	document.createMeditation.createMeditation.name="editMeditation";
	document.createMeditation.editMeditation.value="Meditation";
	document.createMeditation.editMeditation.addEventListener("click", editMeditation );

	
}
	







