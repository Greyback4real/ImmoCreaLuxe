$(document).ready(function () {
   let s = ['blablabla 1', 'Text plus long 2', 'Text encore un peu plus long 3', 'text moins long 4'];
   let count = 0;
   setInterval(() => {
      $("#intro").toggleClass("addBlur").delay(800).queue(function () {
         $(this).text(s[count]);
         $(this).toggleClass("addBlur").dequeue();
      });
      count++;
      count = count === s.length ? 0 : count;
   }, 2000);




});



