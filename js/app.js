/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// Creating hotspot locations

var data = window.APP_DATA;

var sceneHotspots = data.scenes[0].infoHotspots;

sceneHotspots.forEach((sceneHotspot) => {
	scene
		.hotspotContainer()
		.createHotspot(document.querySelector('#HS' + sceneHotspot.title), {
			yaw: sceneHotspot.yaw,
			pitch: sceneHotspot.pitch,
		});
});

//OPEN MODALS
//Click on a hotspot to show modal corresponding to that number

// MODALS

window.addEventListener('click', (e) => {
	if (e.target.id.slice(0, 2) == 'HS') {
		let IdTag = e.target.id;
		let HSNumber = IdTag.slice(2);
		let modal = document.getElementById('Board' + HSNumber);
		modal.style.display = 'block';
	}
});

//CLOSING MODALS

window.addEventListener('click', (e) => {
	let classList = e.target.classList;
	let classArray = Object.values(classList);
	if (e.target.tagName === 'DIV' && classArray.includes('modalShow')) {
		document.getElementById(e.target.id).style.display = 'none';
	} else if (e.target.tagName === 'IMG') {
		e.target.parentElement.parentElement.style.display = 'none';
	}
});

window.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.style.display = 'none';
	}
});
