$(document).ready(function () {

   const elInView = (el, percent = 100) =>
   {
      const elTop = el[0].getBoundingClientRect().top;
      return (
         elTop <= ((window.innerHeight || document.documentElement.clientHeight) *  (percent/100))
         );
   }

   let s = ['Toujours à votre écoute pour', 'Des projets immobilier d\'ambition', 'Des rêves créatifs', 'Des envies de luxe'];
   let count = 0;
   setInterval(() => {
      $("#intro").toggleClass("addBlur").delay(800).queue(function () {
         $(this).text(s[count]);
         $(this).toggleClass("addBlur").dequeue();
      });
      count++;
      count = count === s.length ? 0 : count;
   }, 2000);

   //navbar scroll

let last = 0;
$(document).scroll(function(){
   let y = window.scrollY;

   if (y > window.innerHeight){
      $('.navbar').css("background-color","rgba(208,224,224,0.75)");
      if (y > window.innerHeight+100)
      {
         if (y > last)
         {
            $('.navbar').css("top","-60px");
         }
         else
         {
            $('.navbar').css("top","0");

         }
         last = y;
      }
   }
   else{

      $('.navbar').css("background-color","rgba(0, 0, 0, 0)");
   }
});

//compteur statistiques
let cDone = false;
$(document).scroll(function(){
   let y = window.scrollY;
if (elInView($(".TEXT")) && !cDone)
{   
   let aboutInfos = [258, 97, 30];
   function changeValue(max, element, timeout)
   {
      setInterval(() => {
         let elV = element.text();
      
         if (Number(elV) < max)
         {
            elV++;
            element.text(elV);
         }
      }, timeout);
   }
   changeValue(aboutInfos[0]-20, $('#house'), 1);
   changeValue(aboutInfos[0]-10, $('#house'), 62);
   changeValue(aboutInfos[0], $('#house'), 80);
   
   
   changeValue(aboutInfos[1]-20, $('#satisfied'), 15);
   changeValue(aboutInfos[1]-10, $('#satisfied'), 62);
   changeValue(aboutInfos[1], $('#satisfied'), 80);
   
   changeValue(aboutInfos[2]-20, $('#for-sale'), 15);
   changeValue(aboutInfos[2]-10, $('#for-sale'), 62);
   changeValue(aboutInfos[2], $('#for-sale'), 80);
   cDone = true;
}


})


   
function typeWriter(el, text)
{
    const textArray = text.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 200 * i)
    );
}



let twLDone = false;
let twAVDone = false;
let twEDone = false;
$(document).scroll(function(){
      if (elInView($("#twL")))
      {
         if (!twLDone)
         {
            typeWriter(twL, "LOUER");
            twLDone = true;
         }

      }

      if (elInView($("#twAV")))
      {
         if (!twAVDone)
         {
            typeWriter(twAV, "ACHETER");
            twAVDone = true;
         }

      }
      if (elInView($("#twE")))
      {
         if (!twEDone)
         {
            typeWriter(twE, "ESTIMER");
            twEDone = true;
         }

      }


        if (elInView($(".nos")))
        {
            $('.nos').addClass("r-appear");
        }
        if (elInView($(".dernieres")))
        {
            $('.dernieres').addClass("l-appear");
        }
        if (elInView($(".ventes")))
        {
            $('.ventes').addClass("r-appear");

        }
        if (elInView($(".liste")))
        {
            $('.infos').addClass('blabla-appear');
        }

    let y = window.scrollY;
       if (y < 600){
          $('.up_page').css("display", "none");
       }
       else{
          $('.up_page').css("display","block");
       }
});

let b_text;
$(".s-card").hover(function() {
  $(this).css("transform", "scale(1.1)");
  $(this).find(".s-overlay").css("background-color", 'rgba(0, 0, 0, 0.5)');
  $(this).find('.s-banner').css("right", "0");
  b_text = $(this).find('.s-banner').text();
  $(this).find('.s-banner').text("Voir nos maisons");
}, function() {
  $(this).css("transform", "scale(1)");
  $(this).find(".s-overlay").css("background-color", 'rgba(0, 0, 0, 0)');
  $(this).find('.s-banner').css("right", "60%");
  $(this).find('.s-banner').text(b_text);
});



});



