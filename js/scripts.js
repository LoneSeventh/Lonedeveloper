


                //SLIDE NAV


function slideNav(){
  
        document.getElementById("firstNav").style.width="75%";
       document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    
}
function slideSm(){
  
        document.getElementById("firstNav").style.width="75%";
       document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    
}

function slideMd(){
  
        document.getElementById("firstNav").style.width="40%";
       document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    
}


function slideLs(){
  
        document.getElementById("firstNav").style.width="50%";
       document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    
}
function slideLg(){
  
        document.getElementById("firstNav").style.width="26%";
       document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    
}





function slideXl(){
  
        document.getElementById("firstNav").style.width="20%";
       document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    
}
function closeNav(){
       document.getElementById("firstNav").style.width="0";
              document.body.style.backgroundColor = "";

   
}



            //Tab Content
       
           
            
    function openCont(event,openCity){
        var i, hideCont, activeBot;
        
        hideCont= document.getElementsByClassName('tabCont');
        
        
        for(i=0; i< hideCont.length; i++){
            hideCont[i].style.display="none";
        }
        
        document.getElementById(openCity).style.display="block";
        document.getElementsByClassName("contHome").style.display="none";
         }
    function homeCont(){
        var i, homeCont;
        homeCont=document.getElementById("contHome");
    }     
            
            
    
            
/*
function openDiv(event,openCity){
    var i, content;
    content = document.getElementsByClassName('hideCont');
    for(i=0;i<content.length; i++){
        content[i].style.display="none";
    }
    document.getElementById(openCity).style.display="block";
}
*/
