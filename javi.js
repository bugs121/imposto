/*$(document).redy(function(){
    $('#icon').click(function(){
        $('ul').toggleClass('show')
    });
});*/
var tudo = [];

function calculo() {
    let nome = document.getElementById("inputnome").value;
    let hora = document.getElementById("inputtempo");
    let valor = document.getElementById("inputvalor");

    let salBruto = 0;
    let salLiquido = 0;
    let imposto = 0;
    
    //alert(salBruto);
    if(nome.length==0 || hora.value.length==0 || valor.value.length==0){
        alert("Algum campo vazio");
    }else{
        parseFloat(salBruto = hora.value*valor.value);
        if(salBruto<=22847.76) {
        
            imposto = 0;
        }
        if(salBruto>22847.76 && salBruto<=33919.81){
            
            imposto = 1713.58;
        }
        if(salBruto>33919.81 && salBruto<=45012.61){
            
            imposto = 4257.57;
        }   
        if(salBruto>45012.61 && salBruto<=55976.16){
            
            imposto = 7633.51;
        } 
        if(salBruto>55976.16){
            
            imposto = 10432.31;
        }   
        parseFloat(salLiquido = salBruto - imposto);
        alert("Nome: "+nome+"\nSalário bruto: "+salBruto+"\nSalário líquido: "+salLiquido+"\nImposto a ser pago: "+imposto);
        tudo[0] = nome;
        tudo[1] = salBruto;
        tudo[2] = salLiquido;
        tudo[3] = imposto;
    }
}

function historico() {
    alert(tudo);
}
