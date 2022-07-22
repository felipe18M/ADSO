//calculadora
function sumar () {//funcion de sumar
  var a1 = parseInt(document.form1.numero1.value);
  var a2 = parseInt(document.form1.numero2.value);
  document.form1.resultado.value=a1+a2;

}
function restar () {//funcion de restar
  var a1 = parseInt(document.form1.numero1.value);
  var a2 = parseInt(document.form1.numero2.value);
  document.form1.resultado.value=a1-a2;
}
function multiplicar () {//funcion de multiplicar
  var a1 = parseInt(document.form1.numero1.value);
  var a2 = parseInt(document.form1.numero2.value);
  document.form1.resultado.value=a1*a2;
} 
function dividir () {//funcion de dividir
  var a1 = parseInt(document.form1.numero1.value);
  var a2 = parseInt(document.form1.numero2.value);
  document.form1.resultado.value=a1/a2;
} 



//-----------------------------------------------------------------------------

//funciones de mayor intermedio y menor

function  mim(){//functiones de mayor y menor e intermedio
  var n1=parseInt (document.form.n1.value);//variables
  var n2=parseInt (document.form.n2.value);
  var n3=parseInt (document.form.n3.value);
    
    if (n1==n2 && n2==n3){//si todos son iguales los valores 
        alert("todos son iguales:"+n1+"");//valores escrito por teclado n1,n2 y n3		
    } 
    else if (n1==n2){//condicion si el primer y segundo numero son iguales                          
        alert("es igual el primer y segundo numero: "+n2+"");	//resultado 
        
     if(n1<n3){//condicion si no hay intermedio
    alert("numero menor:"+n1+"<br> intermedio no hay.<br> numero mayor :"+n3+"");}
    
     else if(n1>n3){
    alert("numero mayor:"+n1+" <br>intermedio no hay.<br> numero menor :"+n3+"");}            
    }

    else if(n1==n3)
    {                          
    alert("es igual el primer y tercer numero: "+n1+"");	//resultado 
        
    if(n1<n2){
    alert("el numero menor:"+n1+"<br>intermedio no hay.<br> numero mayor:"+n2+"");}
    
    else if(n1>n2){
    alert("el numero mayor:"+n1+"<br>intermedio no hay<br> numero menor:"+n2+"");}       
    }

    else if(n2==n1)
    {                          
    alert("es igual el segundo y tercer: "+n2+"");	//resultado
         
    if(n2<n3){
    alert("el numero menor:"+n2+"<br>intermedio no hay.<br> numero mayor:"+n3+"");}
    
    else if (n2>n3){
    alert("el numero mayor:"+n2+"<br>intermedio no hay.<br> numero menor:"+n3+"");}				
    }

    else if (n2==n3 )
    {                          
    alert("es igual el segundo y tercer numero: "+n3+"");	//resultado 	
    
    if(n2<n1){
    alert("el numero menor:"+n2+"<br>intermedio no hay.<br> numero mayor:"+n1+"");}
    
    if(n2>n1){
    alert(" el numero mayor:"+n2+"<br>intermedio no hay.<br> numero menor:"+n1+"");	
     } 
   }
   if(n1<n2 && n2<n3){
     alert("el menor es:"+n1+"");//da el resultado escrito por teclado/
     alert("el intermedio es:"+n2+"");
     alert("el mayor es:"+n3+"");}
     
    else if(n2<n1 && n1<n3)
    { //da el resultado escrito por teclado/
     alert("el menor es:"+n2+""); 
     alert("el intermedio es:"+n1+""); 
     alert("el mayor es:"+n3+"");}
   
    else if(n3<n1 && n1<n2)
    { //da el resultado escrito por teclado/
     alert("el menor es:"+n3+""); 
     alert("el intermedio es:"+n1+""); 
     alert("el mayor es:"+n2+"");}

    else if(n2<n3 && n3<n1)
    { //da el resultado escrito por teclado/
     alert("el menor es:"+n2+""); 
     alert("el intermedio es:"+n3+""); 
     alert("el mayor es:"+n1+"");}

    else if(n3<n2 && n2<n1)
    { //da el resultado escrito por teclado/
     alert("el menor es:"+n3+""); 
     alert("el intermedio es:"+n2+""); 
     alert("el mayor es:"+n1+"");}

    else if(n1<n3 && n3<n2)
    { //da el resultado escrito por teclado/
     alert("el menor es:"+n1+""); 
     alert("el intermedio es:"+n3+""); 
     alert(" el mayor es:"+n2+"");}
    }

    //-----------------------------------------------------------------------------
    //TABLAS

    function tabla(){
    var n2=parseInt(document.tablas.n2.value)
    var r="";
    for(var i=1; i<=10; i++){
      r=r+n2+"X"+i+"="+(n2*i)+"<br>";
    }
    var result=document.getElementById("resultado");
    result.innerHTML= r;}


 function MM (){ 
      var n1 = document.getElementById ('num1').value;
      var n2 = document.getElementById ('num2').value;
  
  if(n1==n2){
      
      alert("los numeros son iguales");
  }
  else if(n1>n2){
  alert("El mayor es:"+n1+"\nel menor es:"+n2);
  }
  else{
  alert("el mayor es:"+n2+"\nel menor es:"+n1);
  }
  }