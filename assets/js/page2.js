$(document).ready(function () {
   


   let galerie = ['.//maisonlille/maisonlille1/maisonlille1.1.jpg', './/maisonlille/maisonlille1/maisonlille1.2.jpg', './/maisonlille/maisonlille1/maisonlille1.3.jpg', './/maisonlille/maisonlille10/maisonlille10.1.jpg', './/maisonlille/maisonlille10/maisonlille10.2.jpg', './/maisonlille/maisonlille10/maisonlille10.3.jpg', './/maisonlille/maisonlille2/maisonlille2.1.jpg', './/maisonlille/maisonlille2/maisonlille2.2.jpg', './/maisonlille/maisonlille2/maisonlille2.3.jpg', './/maisonlille/maisonlille3/maisonlille3.1.jpg', './/maisonlille/maisonlille3/maisonlille3.2.jpg', './/maisonlille/maisonlille3/maisonlille3.3.jpg', './/maisonlille/maisonlille4/maisonlille4.1.jpg', './/maisonlille/maisonlille4/maisonlille4.2.jpg', './/maisonlille/maisonlille4/maisonlille4.3.jpg', './/maisonlille/maisonlille5/maisonlille5.1.jpg', './/maisonlille/maisonlille5/maisonlille5.2.jpg', './/maisonlille/maisonlille5/maisonlille5.3.jpg', './/maisonlille/maisonlille6/maisonlille6.1.jpg', './/maisonlille/maisonlille6/maisonlille6.2.jpg', './/maisonlille/maisonlille6/maisonlille6.3.jpg', './/maisonlille/maisonlille7/maisonlille7.1.jpg', './/maisonlille/maisonlille7/maisonlille7.2.jpg', './/maisonlille/maisonlille7/maisonlille7.3.jpg', './/maisonlille/maisonlille8/maisonlille8.1.jpg', './/maisonlille/maisonlille8/maisonlille8.2.jpg', './/maisonlille/maisonlille8/maisonlille8.3.jpg', './/maisonlille/maisonlille9/maisonlille9.1.png', './/maisonlille/maisonlille9/maisonlille9.2.png', './/maisonlille/maisonlille9/maisonlille9.3.png', './/Maison_Arras/MaisonArras/Maison Arras 1/MaisonArras1.2.jpg', './/Maison_Arras/MaisonArras/Maison Arras 1/MaisonArras1.3.jpg', './/Maison_Arras/MaisonArras/Maison Arras 1/MaisonArras1.jpg', './/Maison_Arras/MaisonArras/Maison Arras 10/MaisonArras10.2.jpg', './/Maison_Arras/MaisonArras/Maison Arras 10/MaisonArras10.3.jpg', './/Maison_Arras/MaisonArras/Maison Arras 10/MaisonArras10.jpg', './/Maison_Arras/MaisonArras/Maison Arras 2/MaisonArras2.2.jpg', './/Maison_Arras/MaisonArras/Maison Arras 2/MaisonArras2.3.jpg', './/Maison_Arras/MaisonArras/Maison Arras 2/MaisonArras2.jpg', './/Maison_Arras/MaisonArras/Maison Arras 3/MaisonArras3.2.jpg', './/Maison_Arras/MaisonArras/Maison Arras 3/MaisonArras3.3.jpg', './/Maison_Arras/MaisonArras/Maison Arras 3/MaisonArras3.jpg', './/Maison_Arras/MaisonArras/Maison Arras 4/MaisonArras4.2.jpg', './/Maison_Arras/MaisonArras/Maison Arras 4/MaisonArras4.3.jpg', './/Maison_Arras/MaisonArras/Maison Arras 4/MaisonArras4.jpg', './/Maison_Arras/MaisonArras/Maison Arras 5/MaisonArras5.2.jpg', './/Maison_Arras/MaisonArras/Maison Arras 5/MaisonArras5.3.jpg', './/Maison_Arras/MaisonArras/Maison Arras 5/MaisonArras5.jpg', './/Maison_Arras/MaisonArras/Maison Arras 6/MaisonArras6.2.jpg', './/Maison_Arras/MaisonArras/Maison Arras 6/MaisonArras6.3.jpg', './/Maison_Arras/MaisonArras/Maison Arras 6/MaisonArras6.jpg', './/Maison_Arras/MaisonArras/Maison Arras 7/MaisonArras7.2.jpg', './/Maison_Arras/MaisonArras/Maison Arras 7/MaisonArras7.3.jpg', './/Maison_Arras/MaisonArras/Maison Arras 7/MaisonArras7.jpg', './/Maison_Arras/MaisonArras/Maison Arras 8/Maison8.3.jpg', './/Maison_Arras/MaisonArras/Maison Arras 8/MaisonArras8.2.jpg', './/Maison_Arras/MaisonArras/Maison Arras 8/MaisonArras8.jpg', './/Maison_Arras/MaisonArras/Maison Arras 9/MaisonArras9.2.jpg', './/Maison_Arras/MaisonArras/Maison Arras 9/MaisonArras9.3.jpg', './/Maison_Arras/MaisonArras/Maison Arras 9/MaisonArras9.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet1/MaisonTouquet1.2.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet1/MaisonTouquet1.3.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet1/MaisonTouquet1.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet10/MaisonTouquet10.2.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet10/MaisonTouquet10.3.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet10/MaisonTouquet10.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet2/MaisonTouquet2.2.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet2/MaisonTouquet2.3.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet2/MaisonTouquet2.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet3/MaisonTouquet3.2.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet3/MaisonTouquet3.3.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet3/MaisonTouquet3.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet4/MaisonTouquet4.2.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet4/MaisonTouquet4.3.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet4/MaisonTouquet4.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet5/MaisonTouquet5.2.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet5/MaisonTouquet5.3.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet5/MaisonTouquet5.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet6/MaisonTouquet6.2.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet6/MaisonTouquet6.3.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet6/MaisonTouquet6.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet7/MaisonTouquet7.2.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet7/MaisonTouquet7.3.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet7/MaisonTouquet7.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet8/MaisonTouquet8.2.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet8/MaisonTouquet8.3.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet8/MaisonTouquet8.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet9/MaisonTouquet9.2.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet9/MaisonTouquet9.3.jpg', './/Maison_Touquet/Maison_Touquet/MaisonTouquet9/MaisonTouquet9.jpg']



   let housesgrid = document.getElementsByClassName('housesgrid')[0];



   let temp = [[], [], []]
   for(let i = 0; i < 3; ++i)
   {
      for (let j = 0; j < 10; ++j)
      {
         temp[i].push(galerie[j + (i*10)])
      }
   }
   let city = ["Lille", "Arras", "Le Touquet"]
   let agent = ["louthen1.jpg","genardiz1.jpg","joumhy1.jpg"]

   for(let i = 0; i < temp.length; ++i)
   {
      housesgrid.innerHTML += `<h1 class="city-title" id="${city[i]}">${city[i]}</h1><div class=houses></div>`;
      let houses = document.getElementsByClassName('houses')[i];  
      for (let j = 0; j < temp[i].length; ++j)
      {
         let rnd_price = String(Math.floor(Math.random() * (4000000 - 1000000 + 1)) + 1000000).slice(0, 4);
         let rnd_area = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
         houses.innerHTML += `
         <div class="house" >
            <i class="fa-regular fa-heart fa-2xl" style="color:red;"></i>
            <a href="index.html#"><img class="a_bubble" width="50" height="50" src="./assets/img/nos_agents/${agent[i]}" alt="agent"></a>
            <div class="slide_img slideimg_${i}-${j}_1">
               <img class="house_img" width="500" height="400" src="./assets/img/maisons/${temp[i][j+1]}" alt="house${i}-${j}">
            </div>
            <div class="slide_img slideimg_${i}-${j}_2" style="display:none;">
               <img class="house_img" width="500" height="400" src="./assets/img/maisons/${temp[i][j]}" alt="house${i}-${j}">
            </div>
            <div class="slide_img slideimg_${i}-${j}_3" style="display:none;">
               <img class="house_img" width="500" height="400" src="./assets/img/maisons/${temp[i][j-2]}" alt="house${i}-${j}">
            </div>
            <div class="arrow_container a_left aleft_${i}-${j}"><i class="fa-solid fa-chevron-left fa-3x slide_arrow" style="color: white;"></i></div>
            <div class="arrow_container a_right aright_${i}-${j}"><i class="fa-solid fa-chevron-right fa-3x slide_arrow" style="color: white;"></i></div>
            <div class="houseinfo">
               <p class="price"> Prix: ${rnd_price}000€</p>
               <p class="town"> Ville: ${city[i]}</p>                        
               <p class="area"> Surface: ${rnd_area}m²</p>
            </div>
         </div>
         `

         
      }
   }
   if(window.innerWidth > 700)
   {
      $('.house').hover(function() {
         $(this).find(".houseinfo").css("bottom", "0");
      }, function() {
         $(this).find(".houseinfo").css("bottom", "-100px");
   
      });

   }
   

   $('.fa-heart').hover(function() {
      $(this).toggleClass("fa-regular");
      $(this).toggleClass("fa-solid");
   }, 
   function() {
      $(this).toggleClass("fa-regular");
      $(this).toggleClass("fa-solid");
   });

   $(".fa-heart").click(function() {
      $(this).toggleClass("fa-bounce").delay(1000).queue(function() {
         $(this).toggleClass("fa-bounce").dequeue();
      });
      $(this).toggleClass("fa-regular");
      $(this).toggleClass("fa-solid");
   });
   
   let current = 1;
   let max =3;
   $(".arrow_container").click(function() {
      let a = $(this).attr('class').split(" ")[2].split("_");
      let c = a[1];
      let a_type = a[0].slice(1, a[0].length);
      $(".slideimg_" + c + "_" + current).css("display", 'none');
      if (a_type == "right")
      {
         if (current == max)
         {
            current = 1
         }
         else
         {
            ++current;
         }
      }
      else
      {
         if (current == 1)
         {
            current = max;
         }
         else
         {
            --current;
         }
      }
      $(".slideimg_" + c + "_" + current).css("display", 'block');
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



