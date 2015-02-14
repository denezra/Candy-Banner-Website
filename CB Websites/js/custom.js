
// 0 = NOTHING CLICKED
// 1 = BRANDS HAS BEEN CLICKED
// 2 = AGENCIES HAS BEEN CLICKED

$(document).ready(function() {
	
  //hides brands
  $(".brands").hide();
		
		buttonToggle = 0;

  	  $(".btn-brands").click(function(){

		  if(buttonToggle == 0) {
			  buttonToggle = 1;
		      $(".brands").slideToggle("slow");
		      // alert("the value is " + buttonToggle);
		      $(".agencies").hide();
		      return false;
	      } else if(buttonToggle == 1) {
	      	 return false;
	      }
			else if(buttonToggle == 2) {
		      $(".agencies").hide();
		      $(".brands").fadeIn(700); 
		      // $(".brands-initial").fadeIn(700); 
		      return false;
	      }


  	   });
});


$(document).ready(function() {
  //hides agencies
  // $(".agencies").hide();

  	  $(".btn-agencies").click(function(){

		  if(buttonToggle == 0) {
			  buttonToggle = 2;
			  // $(".brands-initial").hide();
		      $(".agencies").fadeIn(700); 
		      return false;
	      }
	      else if(buttonToggle == 1) {
		      buttonToggle = 2;
		      $(".brands").hide();
		      // $(".brands-initial").hide();
		      $(".agencies").fadeIn(700); 
		      return false;
	      }
	      else if(buttonToggle == 2) {
		      $(".brands").hide();
		      // $(".brands-initial").hide();
		      $(".agencies").fadeIn(700); 
		      return false;
	      }


  	   });
});
