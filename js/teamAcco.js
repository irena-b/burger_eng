var teamAccordion = document.getElementById("#team__content"),
teamItems = document.getElementsByClassName("team__acco-item"),
teamContents = document.getElementsByClassName("team__acco-content"),
i;
//испозуем делегирование событий
teamAccordion.addEventListener ('click', function(e) {
e.preventDefault();  
if (e.target.classList.contains("team__acco-trigger")) {
    console.log ('here is trigger')
var trigger = e.target;//где был клик

var teamContent = trigger.nextElementSibling;
var teamItem = trigger.parentNode;


if (!teamItem.classList.contains("team__acco-item--active")) { 

  for (i = 0; i < teamItems.length; i++) {
     
    teamItems[i].classList.remove("team__acco-item--active");
  }
  teamItem.classList.add("team__acco-item--active");

  for (i = 0; i < teamContents.length; i++) {
    teamContents[i].style.height = null;
  }
  teamContent.style.height = teamContent.scrollHeight + "px";
  
} else { 

  teamItem.classList.remove("team__acco-item--active");
  
  teamContent.style.height = null;
}
}
});
