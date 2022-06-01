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



});



