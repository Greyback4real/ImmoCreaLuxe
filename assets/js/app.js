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


let aboutInfos = [600, 97, 30];
function changeValue(max, element, timeout)
{
   setInterval(() => {
      let elV = element.text();
      console.log(elV)
   
      if (Number(elV) < max)
      {
         elV++;
   
         element.text(elV);
      }
      
   }, timeout);
}

changeValue(aboutInfos[0]-20, $('#house'), 2);
changeValue(aboutInfos[0]-10, $('#house'), 62);
changeValue(aboutInfos[0], $('#house'), 80);


changeValue(aboutInfos[1]-20, $('#satisfied'), 15);
changeValue(aboutInfos[1]-10, $('#satisfied'), 62);
changeValue(aboutInfos[1], $('#satisfied'), 80);

changeValue(aboutInfos[2]-20, $('#for-sale'), 15);
changeValue(aboutInfos[2]-10, $('#for-sale'), 62);
changeValue(aboutInfos[2], $('#for-sale'), 80);
});



