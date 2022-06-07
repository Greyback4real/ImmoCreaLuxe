$(document).ready(function () {



  let galerie = {
    "Le Touquet": [
      [
        "MaisonTouquet8.jpg",
        "MaisonTouquet8.3.jpg",
        "MaisonTouquet8.2.jpg"
      ],
      [
        "MaisonTouquet1.3.jpg",
        "MaisonTouquet1.jpg",
        "MaisonTouquet1.2.jpg"
      ],
      [
        "MaisonTouquet6.3.jpg",
        "MaisonTouquet6.2.jpg",
        "MaisonTouquet6.jpg"
      ],
      [
        "MaisonTouquet7.3.jpg",
        "MaisonTouquet7.jpg",
        "MaisonTouquet7.2.jpg"
      ],
      [
        "MaisonTouquet9.3.jpg",
        "MaisonTouquet9.jpg",
        "MaisonTouquet9.2.jpg"
      ],
      [
        "MaisonTouquet5.2.jpg",
        "MaisonTouquet5.jpg",
        "MaisonTouquet5.3.jpg"
      ],
      [
        "MaisonTouquet2.2.jpg",
        "MaisonTouquet2.3.jpg",
        "MaisonTouquet2.jpg"
      ],
      [
        "MaisonTouquet10.jpg",
        "MaisonTouquet10.3.jpg",
        "MaisonTouquet10.2.jpg"
      ],
      [
        "MaisonTouquet3.2.jpg",
        "MaisonTouquet3.3.jpg",
        "MaisonTouquet3.jpg"
      ],
      [
        "MaisonTouquet4.2.jpg",
        "MaisonTouquet4.3.jpg",
        "MaisonTouquet4.jpg"
      ]
    ],
    "Arras": [
      [
        "MaisonArras5.2.jpg",
        "MaisonArras5.jpg",
        "MaisonArras5.3.jpg"
      ],
      [
        "MaisonArras2.jpg",
        "MaisonArras2.2.jpg",
        "MaisonArras2.3.jpg"
      ],
      [
        "MaisonArras3.2.jpg",
        "MaisonArras3.jpg",
        "MaisonArras3.3.jpg"
      ],
      [
        "MaisonArras4.jpg",
        "MaisonArras4.2.jpg",
        "MaisonArras4.3.jpg"
      ],
      [
        "MaisonArras10.3.jpg",
        "MaisonArras10.2.jpg",
        "MaisonArras10.jpg"
      ],
      [
        "MaisonArras1.jpg",
        "MaisonArras1.3.jpg",
        "MaisonArras1.2.jpg"
      ],
      [
        "MaisonArras6.jpg",
        "MaisonArras6.3.jpg",
        "MaisonArras6.2.jpg"
      ],
      [
        "Maison8.3.jpg",
        "MaisonArras8.2.jpg",
        "MaisonArras8.jpg"
      ],
      [
        "MaisonArras9.3.jpg",
        "MaisonArras9.jpg",
        "MaisonArras9.2.jpg"
      ],
      [
        "MaisonArras7.3.jpg",
        "MaisonArras7.jpg",
        "MaisonArras7.2.jpg"
      ]
    ],
    "Lille": [
      [
        "maisonlille10.1.jpg",
        "maisonlille10.3.jpg",
        "maisonlille10.2.jpg"
      ],
      [
        "maisonlille8.2.jpg",
        "maisonlille8.3.jpg",
        "maisonlille8.1.jpg"
      ],
      [
        "maisonlille1.1.jpg",
        "maisonlille1.2.jpg",
        "maisonlille1.3.jpg"
      ],
      [
        "maisonlille6.2.jpg",
        "maisonlille6.3.jpg",
        "maisonlille6.1.jpg"
      ],
      [
        "maisonlille7.1.jpg",
        "maisonlille7.2.jpg",
        "maisonlille7.3.jpg"
      ],
      [
        "maisonlille9.1.png",
        "maisonlille9.2.png",
        "maisonlille9.3.png"
      ],
      [
        "maisonlille5.3.jpg",
        "maisonlille5.2.jpg",
        "maisonlille5.1.jpg"
      ],
      [
        "maisonlille2.1.jpg",
        "maisonlille2.3.jpg",
        "maisonlille2.2.jpg"
      ],
      [
        "maisonlille3.3.jpg",
        "maisonlille3.2.jpg",
        "maisonlille3.1.jpg"
      ],
      [
        "maisonlille4.1.jpg",
        "maisonlille4.3.jpg",
        "maisonlille4.2.jpg"
      ]
    ]
  }

   let housesgrid = document.getElementsByClassName('housesgrid')[0];



   let city = ["Lille", "Arras", "Le Touquet"]
   let agent = ["louthen1.jpg","genardiz1.jpg","joumhy1.jpg"]

   for(let i = 0; i < city.length; ++i)
   {
      housesgrid.innerHTML += `<h1 class="city-title" id="${city[i].replace(" " , "_")}">${city[i]}</h1><div class=houses></div>`;
      let houses = document.getElementsByClassName('houses')[i];
      for (let j = 0; j < galerie[city[i]].length; ++j)
      {

        let rnd_price = String(Math.floor(Math.random() * (4000000 - 1000000 + 1)) + 1000000).slice(0, 4);
         let rnd_area = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
         houses.innerHTML += `
         <div class="house" >
            <i class="fa-regular fa-heart fa-2xl" style="color:red;"></i>
            <a href="page1.html#nosagents"><img class="a_bubble" width="50" height="50" src="./assets/img/nos_agents/${agent[i]}" alt="agent"></a>
            <div class="slide_img slideimg_${i}-${j}_1">
               <img class="house_img" width="500" height="400" src="./assets/img/maisons/${city[i]}/${galerie[city[i]][j][0]}" alt="house${i}-${j}">
            </div>
            <div class="slide_img slideimg_${i}-${j}_2" style="display:none;">
               <img class="house_img" width="500" height="400" src="./assets/img/maisons/${city[i]}/${galerie[city[i]][j][1]}" alt="house${i}-${j}">
            </div>
            <div class="slide_img slideimg_${i}-${j}_3" style="display:none;">
               <img class="house_img" width="500" height="400" src="./assets/img/maisons/${city[i]}/${galerie[city[i]][j][2]}" alt="house${i}-${j}">
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
   if (y < 600){
      $('.up_page').css("display", "none");
   }
   else{
      $('.up_page').css("display","block");
   }
})
    if(window.location.hash !== "")
    {
        window.scroll( 0, $(window.location.hash).offset().top);
    }



});
