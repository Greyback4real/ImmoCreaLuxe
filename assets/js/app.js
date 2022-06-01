$(document).ready(function () {
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
})

//compteur statistiques
let cDone = false;
$(document).scroll(function(){
   let y = window.scrollY;
if (y > 1131 && !cDone)
{
   console.log("ldf,oids,")
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

$(document).ready(function(){

   console.log('blabla')

   
   function typeWriter(el, text) {
       return new Promise((successCallback) => {
           const textArray = text.split('');
           el.innerHTML = '';
           textArray.forEach((letter, i) =>
               setTimeout(() => (el.innerHTML += letter), 200 * i)
           )
       });
       
   }
   typeWriter(twL, "LOUER");
   typeWriter(twAV, "ACHETER VENDRE");
   typeWriter(twE, "ESTIMER");
   });
   





$( document ).scroll(function() {
   console.log (window.scrollY)

   if (window.scrollY>2523){
       $('.nos').addClass("r-appear");
      
   }
   if (window.scrollY>2915){
       $('.dernieres').addClass("l-appear");
      
   }
   if (window.scrollY>3417){
       $('.ventes').addClass("r-appear");
      
   }
   if (window.scrollY>4036){
       $('.blabla').addClass("r-appear");
   }
 });


 $(document).scroll(function(){
   let y = window.scrollY;
   console.log(y)
   if (y < 600){
      $('.up_page').css("display", "none");      
   }
   else{
      $('.up_page').css("display","block");
   }
})





});



