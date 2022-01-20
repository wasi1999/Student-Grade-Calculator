function myFunction() {
    
    document.getElementsByTagName('input').value='';
    var  a=parseInt(document.getElementById('myText').value);
    var  b=parseInt(document.getElementById('myText1').value);
    var  c=parseInt(document.getElementById('myText2').value);
    var  d=parseInt(document.getElementById('myText3').value);
    var  e=parseInt(document.getElementById('myText4').value);
    var total=a+b+c+d+e;  
    var per=((a+b+c+d+e)/500)*100;
    if(per>60){
        document.getElementById('final').innerHTML='You have scored ' +total+" marks out of 500" +" and You are Qualified ";
        
    }
    else{
        document.getElementById('final').innerHTML='You have scored ' +total+" marks out of 500" +" and You are not Qualified ";


    }
}

