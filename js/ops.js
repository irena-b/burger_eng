// сохраним в переменную  секции
const sections = $('.section');
const display = $('.maincontent');
let inScroll = false; //флаг
// из библиотеки mobile detect 
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();
//fixed menu
const setActiveMenuItem = itemEq => {
    $('.fixed-menu__item').eq(itemEq).addClass('active')
      .siblings().removeClass('active')
  } 



//заводим функцию которая будет задавать анимацию
const performTransition = sectionEq => {
    const position = `${sectionEq * -100}%`;


    if (!inScroll) {
        console.log('event');
        inScroll = true;

        sections
        .eq(sectionEq)
        .addClass('active')
        .siblings()
        .removeClass('active');
        
        
        display.css({
            transform: `translate(0, ${position})`,
            "-webkit-transform": `translate(0, ${position})`
              });
           

        setTimeout(() => {
            inScroll= false;
            setActiveMenuItem(sectionEq);
        }, 1300);     //продолжительность +300 мс потому что закончится инерция

        }

    }

//функция которая занимается скролом
const scrollToSection = direction => {
    //из всех секций мы находим активную и слудующую

 const activeSection = sections.filter ('.active');
 const nextSection = activeSection.next();
 const prevSection = activeSection.prev();
 
 
    if (direction === 'up' && prevSection.length) {
        performTransition(prevSection.index())
 }

 if (direction === 'down' && nextSection.length) {
    performTransition(nextSection.index())
     
 }

}



$(document).on({
    wheel: e => {
      const deltaY = e.originalEvent.deltaY;
      const direction = deltaY > 0 ? "down" : "up";
  
      scrollToSection(direction);
    },
    keydown: e => {
      switch (e.keyCode) {
          //с помощью кикод находим код для клавиши вниз это 40 вверх это 38
        case 40:
          scrollToSection("down");
          break;
  
        case 38:
          scrollToSection("up");
          break;
      }
    },
    touchmove: e => e.preventDefault()
  
    // touchstart touchend touchmove 
  });
//data scroll (nav)
$('[data-scroll-to]').on('click', e => {
    e.preventDefault();
  
    const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
  
  
    performTransition(target);
  
  })



  if (isMobile) {
    $(document).swipe({
      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
       //переназначаем вверх вниз так как плагин возвращает фактическое значение 
        const scrollDirection = direction === 'down' ? 'up' : 'down';
        
        scrollToSection(scrollDirection);
      }
    });
  }



//$(document).on({
//wheel: e => {
   // const deltaY=e.originalEvent.deltaY;

//if (deltaY > 0) {
//листаем вниз
//performTransition(3);
//scrollToSection('down');

//};


//if(deltaY < 0) {
//листаем вверх
//scrollToSection('up');
//}
//}
//keydown: 
//})