
function calcul(){
    let nb=0;
    
    d=document.getElementById("r1").checked;
  
    d1=document.getElementById("r2").checked;
     
    d2=document.getElementById("r3").checked;
    
    if (d==false  && d1==false && d2==false){
        alert("choisi opligatoir de la qestion n 1 stp ")
    }
   
    
    d3=document.getElementById("r4").checked;
     d4=document.getElementById("r5").checked;
     d5=document.getElementById("r6").checked;
    if (d3==false  && d4==false && d5==false){
        alert("choisi opligatoir de la qestion n 2 stp ")
    }

     d6=document.getElementById("r7").checked;
     d7=document.getElementById("r8").checked;
     d8=document.getElementById("r9").checked
     if (d6==false  && d7==false && d8==false){
        alert("choisi opligatoir de la qestion n 3 stp ")
    }
    d9=document.getElementById("r10").checked;
    d10=document.getElementById("r11").checked;
    d11=document.getElementById("r12").checked
    if (d9==false  && d10==false && d11==false){
       alert("choisi opligatoir de la qestion n 4 stp ")
   }
   if (d==true){
    nb+=2
   }
   if (d5==true){
    nb+=2
   }
   if (d8==true){
    nb+=2
   }
   if (d10==true){
    nb+=2
   }
   document.getElementById("a").innerHTML=nb+"/8";

    

    




}
