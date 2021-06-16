
window.addEventListener('DOMContentLoaded', (event) => {

  var scrollLinks = document.getElementsByClassName("scroll");

  for(i=0;i<scrollLinks.length;i++) {
    var scrollLink = scrollLinks[i];
    scrollLink.addEventListener('click',function(e){
        document.querySelector("."+e.target.id).scrollIntoView({ 
          behavior: 'smooth' 
        });
      })
  }
});


  
  // document.querySelector('.projects').scrollIntoView({ 
  //   behavior: 'smooth' 
  // });
  
  // document.querySelector('.about').scrollIntoView({ 
  //   behavior: 'smooth' 
  // });
  
  // document.querySelector('.contact').scrollIntoView({ 
  //   behavior: 'smooth' 
  // });
  


