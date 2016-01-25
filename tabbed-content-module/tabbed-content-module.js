/*
Plugin Name: tabbed-content-module
Author: Federico Rabinovich
Description: Just a simple plain Javascript plugin for using tabs both in desktop and mobile environment. No need for Jquery nor other library
Version: 1.0
Date: 01/12/15
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

TODO in next version:
1-refactor JS for supporting many tab groups
2-Support window resizing in real time??
*/
(function(){
	
	//initialize active tab and content
	var tabs = document.querySelectorAll('.tabbed-content-module nav a');
	var activeTab = document.querySelectorAll('.tabbed-content-module nav .active')[0];
	var activeContent;

	if (typeof tabs !='undefined' && typeof activeTab !='undefined'){	//some plain validation for DOM required elements
		activeContent = document.querySelector(activeTab.getAttribute("href"));
		activeContent.className += " active";
	}
	
	//some plain validation for DOM required elements
	if(typeof activeContent !='undefined'){

		for (var i = 0; i < tabs.length; i++) {
			tabs[i].addEventListener('click', function(e){		//add event listener
				
				e.preventDefault();		//don't scroll to anchor

				//new active tab handling
				activeTab.className= activeTab.className.replace(new RegExp('(\\s|^)active(\\s|$)'),"");	//remove last active tab
				activeTab = this;
				activeTab.className += " active";	//set new active tab

				//display new content
				activeContent.className= activeContent.className.replace(new RegExp('(\\s|^)active(\\s|$)'),"");	//remove last active content
				activeContent = document.querySelector(activeTab.getAttribute("href"));
				activeContent.className += " active";	//set new active content

				
			});

			//hack to change DOM elements order on mobile devices
			if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <=768) tabs[i].parentNode.appendChild(document.querySelector(tabs[i].getAttribute("href")));
		}	
	}
}());