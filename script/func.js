

window.addEventListener("load",function(){
    let num, btn, pRes; 
        num= document.getElementById("txtNum"); 
        btn=document.getElementById("btnSalvar");
        pRes = document.getElementById("text"); 
        let salvar=function(){
            x=parseFloat(num.value);
            if (x>0){
                pRes.innerHTML=("O número é positivo"); 
            } else{
                pRes.innerHTML=("Esse número é negativo"); 
    };};
    btn.addEventListener("click", salvar); 
}); 

window.addEventListener("load",function(){
    let num2, btn2, pRes2; 
        num2= document.getElementById("txtNum2"); 
        btn2=document.getElementById("btnSalvar2");
        pRes2 = document.getElementById("text2"); 
        let salvar=function(){
            x=parseFloat(num2.value);
            if(x%2==0){
                pRes2.innerHTML=("O número é par"); 
            }else{
                    pRes2.innerHTML=("Esse número é impar"); }};
}); 

function somatorio(){
    let num= parseInt(prompt("Digite um numero: ")); 
    let cont=1;
    let total=0;
    while (cont <= num){
        total+=cont;
        cont+=1;
    }
    alert(`Total do somatorio é: ${total}`);
}

/*</head>
<body>
    <script> 
        window.addEventListener("load",function(){
            let nome, btn; 
               nome= document.getElementById("txtNome"); 
               btn=document.getElementById("btnSalvar");
               pRes = document.getElementById("text"); 
               
               let salvar=function(){
                    pRes.innerHTML=("Seu nome é " + nome.value); 
                };
               btn.addEventListener("click", salvar); 
        }); 
    </script> 
    <form> 
         <input for="text" name="txtNome" id="txtNome"/> 
         <input type="button" id="btnSalvar" name="btnSalvar"
                        value="salvar"/> 
        </form>
    
    <div id="meunome">  
        <p id="text"> </p>
    </div>
</body>
</html>*/


    