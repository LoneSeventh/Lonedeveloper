


                //SLIDE NAV


function slideNav(){
  
        document.getElementById("firstNav").style.width="75%";
       document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    
}

function closeNav(){
       document.getElementById("firstNav").style.width="0";
              document.body.style.backgroundColor = "";

   
}



            //Tab Content
       
            
            
            
    function openCont(event,openCity){
        var i, hideCont, activeBot;
        
        hideCont=document.getElementsByClassName('tabCont');
        activeBot=document.getElementsByClassName('activeBot');
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
