var menuAccordion = document.getElementById("accordion");
var i;
    
menuAccordion.addEventListener("click", function(e) {
    e.preventDefault();
  var menuItems = menuAccordion.getElementsByClassName("menu__acco-item"),
    menuContents = menuAccordion.getElementsByClassName("menu__acco-description");
  
  if (e.target.classList.contains("menu__acco-trigger") || e.target.classList.contains("menu__acco-trigger-text")) { 
  
    var trigger;
    
    if (e.target.classList.contains("menu__acco-trigger")) { 
      trigger = e.target;
    } else { 
      trigger = e.target.parentNode;
    }
    
    var menuContent = trigger.nextElementSibling;
    var menuItem = trigger.parentNode;
       

    if (!menuItem.classList.contains("menu__acco-item_active")) { 
      for (i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("menu__acco-item_active");
      }

      menuItem.classList.add("menu__acco-item_active");
      console.log('i am active')

      for (i = 0; i < menuContents.length; i++) {
        menuContents[i].style.width = null;
      }

      //menuContent.style.width = "400px"; //размер задан в css при открытии контента
      
    } else { 

      menuItem.classList.remove("menu__acco-item_active");
      
      menuContent.style.width = null;
    }
  }
});