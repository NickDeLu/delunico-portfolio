
function toggleNav() {
  var navbar = document.getElementById("myTopnav");
	if (!(navbar.classList.contains("responsive"))) {
    	navbar.className += " responsive";
  } else {
    navbar.classList.remove("responsive");
  }
}


window.addEventListener('DOMContentLoaded', (event) => {
  $("#maleglow").fadeOut();
  $("#femaleglow").fadeOut();
  var plug = $("#plug").detach();
  var navbar = document.getElementById("myTopnav");
  var scrollLinks = document.getElementsByClassName("scroll");

  for(i=0;i<scrollLinks.length;i++) {
    var scrollLink = scrollLinks[i];
    if(scrollLink.classList.contains("cta")){
      $(".cta").on("click",()=>{
        $("#plug-place").after(plug);
        setTimeout( function (){ 
            document.querySelector(".show-plug").scrollIntoView({ 
            behavior: 'smooth' 
          });
        },0);
        
        setTimeout( function (){ 
          $("#male").animate({left: '+=68', bottom: '+=68', opacity:1}, 800);
          $("#female").animate({right: '+=71', top: '+=68', opacity:1}, 800,function(){
            $("#maleglow").fadeIn(300);
            $("#femaleglow").fadeIn(300);
            $("#male").animate({opacity: 0}, 1000);
            $("#female").animate({opacity: 0}, 1000);
          });
        },600);
        setTimeout( function (){ 
          document.querySelector(".contact").scrollIntoView({ 
            behavior: 'smooth' 
          });
        },2000);
        setTimeout( function (){
          $("#female").removeAttr("style");
          $("#male").removeAttr("style");
          $("#maleglow").fadeOut(300);
          $("#femaleglow").fadeOut(300)
          $("#plug").detach()
        },3000);
        
        navbar.classList.remove("responsive");
      })
    }
    $("#logo").on('click',function(){
      document.querySelector(".landing").scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
    scrollLink.addEventListener('click',function(e){
        document.querySelector("."+e.target.id).scrollIntoView({ 
          behavior: 'smooth' 
        });
        navbar.classList.remove("responsive");
      })
  }
});

$(function() {
 
})