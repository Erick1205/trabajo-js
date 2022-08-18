
function CallMenu() {
    let nro_ejercicio = parseInt(
        prompt("Ingrese el número de ejericios que quiere ejecutar: \r\n 1. Suma \r\n 2. Promedio de Examenes \r\n 3. Calcular el area del rectangulo \r\n 4. Calcular el area del triangulo \r\n 5. Cacular el area del circulo \r\n 6. Calcular salario semanal \r\n 7. Convertir pulgares \r\n 8. Cambiar a dolares \r\n 9. Determina tu edad \r\n 10. Persona de menor edad \r\n 11. Bono por antiguedad \r\n 12. Sueldo anual incremental  \r\n 13. Cantidad de aprobados y desaprobados \r\n 14. Cantidad de focos  \r\n 15. Votar ")
    )
    if (isNaN(nro_ejercicio)){
        alert ("por favor ingresa valores numericos");
    } else {
        MenuEjercicios(nro_ejercicio)
    }
}



function MenuEjercicios(nro_ejercicio){
    switch (nro_ejercicio){
        case 1:
            let valor1 = parseFloat(prompt("Ingresar numero 1:")); 
            let valor2 = parseFloat(prompt("Ingresar numero 2:"));
            alert (E1_sumarValores(valor1,valor2));
            break;

        case 2:
            let nota1 = parseFloat(prompt("Ingresa la nota1"));
            let nota2 = parseFloat(prompt("Ingresa la nota2"));
            let nota3 = parseFloat(prompt("Ingresa la nota3"));
            let nota4 = parseFloat(prompt("Ingresa la nota4"));
            alert (E2_definirpromedio(nota1,nota2,nota3,nota4))
            break;
        
        case 3:
            let base_rect = parseFloat (prompt ("Ingresa la base del rectangulo"));
            let altura_rect = parseFloat (prompt ("Ingresa la altura del rectangulo"));
            alert (E3_CalcularAreaRectangulo(base_rect,altura_rect))
            break;

        
        case 4:
            let base_tria = parseFloat (prompt ("Ingresa la base del triangulo"));
            let altura_tria = parseFloat (prompt ("Ingresa la altura del triangulo"));
            alert (E4_CalcularAreaTriangulo(base_tria,altura_tria))
            break;

        
        case 5:
            let radio_circu = parseFloat (prompt ("Ingresa el radio de la circunferencia"));
            alert (E5_CalcularAreaCircunferencia(radio_circu))
            break;

        case 6:
            let h_trabajo = parseFloat (prompt("Ingresar las horas de trabajo a la semana"))
            const sueldoh_trabajo = parseFloat (prompt ("Ingresar el sueldo por hora"))
            alert (E6_CalcularSueldoSemanal (h_trabajo,sueldoh_trabajo))
            break;


        case 7:
            let metros = parseFloat (prompt("Ingresar metros"))
            alert (E7_MetrosAPulgadas (metros))
            break;


        case 8:
            let soles = parseFloat (prompt("Ingresar soles"))
            alert (E8_SolesADolares (soles))
            break;

        
        case 9:
            let año_nacimiento = parseInt (prompt ("Ingresar año de nacimiento"))
            alert (E9_Nacimiento (año_nacimiento))
            break;



        case 10:
            let persona1 = prompt("Ingresa el nombre de la primera persona")
            let edad1 = parseInt(prompt("Ingresa su edad"))
            let persona2 = prompt("Ingresa el nombe de la segunda persona")
            let edad2 = parseInt(prompt("Ingresa su edad"))
            let persona3 = prompt("Ingresa el nombre de la tercera persona")
            let edad3 = parseInt (prompt("Ingresa su edad")) 
            alert(E10_PersonaMenor(persona1,edad1,persona2,edad2,persona3,edad3))
            break;


        case 11:
            let nombretrabajador = prompt ("Ingresa el nombre del trabajdor")
            let años = parseInt (prompt("Ingrese el numero de años que tiene en la tienda"))
            alert (E11_BonoTienda (nombretrabajador,años))
            break;


        case 12:
            let sueldoinicial = parseFloat (prompt("Ingrese el sueldo inicial"))
            alert (E12_sueldoincremental(sueldoinicial))
            break;


        case 13:
            let notas=[];
            let n = parseFloat(prompt("Ingrese número de alumnos: "));
            for(var i=0;i<n;i++){
                notas[i]= parseInt(prompt(`Ingrese nota del alumno ${i+1}: `));
            }
            alert(E13_notasalumno(notas));
            break;


        case 14:
            let focos=[];
            let nf = parseFloat(prompt("Ingrese cantidad de focos: "));
            for(var i=0;i<nf;i++){
                focos[i]=parseInt(prompt("Ingrese color de foco donde: \r\nVerde es 1\r\nBlanco es 2\r\nRojo es 3"));
            }
            alert(E14_cantidadfocos(focos));
            break;


        case 15:
            let edaD=parseInt(prompt("\r\nIngrese su edad: "));
            alert(E15_votar(edaD));
            break;
    }
}

function E1_sumarValores(a,b){
    if(isNaN(a) || isNaN(b)){
        return "Por favor ingrese valores";
    } else{
        return (a+b);
    }
}

function E2_definirpromedio(nota1,nota2,nota3,nota4){
    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        return "por favor ingresa valores"
    } else {            
        return (nota1 + nota2 + nota3 + nota4) /4 ; 
    }
}

function E3_CalcularAreaRectangulo(a,b) {
    if (isNaN(a) || isNaN(b)){ 
        return "por favor ingresar valores"
    } else { 
        return (a * b);
    }
}

function E4_CalcularAreaTriangulo(a,b) {
    if (isNaN(a) || isNaN(b)){ 
        return "por favor ingresar valores"
    } else { 
        return (a * b)/2 ;
    }
}

function E5_CalcularAreaCircunferencia(r) {
    if (isNaN(r)){ 
        return "por favor ingresar valor"
    } else { 
        return (r*r)*3.1416;
    }
}

function E6_CalcularSueldoSemanal(h_trabajo,sueldoh_trabajo) {
    if (isNaN(h_trabajo) || isNaN (sueldoh_trabajo)) {
        return "por favor ingresar valores"
    } else {
        return (h_trabajo*sueldoh_trabajo)
    }
}

function E7_MetrosAPulgadas (metros) {
    if (isNaN(metros)){ 
    return "por favor ingresar valor"
    } else { 
    return (metros*0.0254);
    } 
}

function E8_SolesADolares (soles) {
    if (isNaN(soles)){
    return "por favor ingresar valor"
    } else {
    return (soles*3.92);
    }
}

function E9_Nacimiento (año_nacimiento) {
    if (isNaN (año_nacimiento)){
        return "por favor ingresar año de nacimiento"
    } else {
        return (2022 - año_nacimiento);
    }
}

function E10_PersonaMenor(persona1,edad1,persona2,edad2,persona3,edad3) {
    if (persona1 ===null || isNaN (edad1) || persona2 ===null || isNaN (edad2) || persona3 ===null || isNaN (edad3)){ 
        return "por favor ingresar la edad" 
    } else {
        if ((edad2>edad1) && (edad3>edad1)){
            return persona1;
        } else if  ((edad1>edad2) && (edad3>edad2)){
            return persona2;
        } else if ((edad1>edad3) && (edad2>edad3)) { 
            return persona3;
        }
    }
}

function E11_BonoTienda (nombretrabajador,años) {
    if (nombretrabajador ===null || isNaN (años)) {
        return "por favor ingresar los años que tiene en la tienda" 
    } else {
        if ( 1 > años) {
            return "no se ha alcanzado el tiempo suficiente para acceder al bono";
        } else if (años ===1) { 
            return "tu bono será " + "usd"+ 100;
        } else if (años === 2) {
            return "tu bono será " + "usd"+ 200;
        } else if (años === 3) {
            return "tu bono será " + "usd"+ 300;
        } else if (años === 4) {
            return "tu bono será " + "usd"+ 400;
        } else if (años === 5) {
            return "tu bono será " + "usd"+ 500; 
        } else if (años > 5) {
            return "tu bono será " + "usd"+ 1000;
        } 
    }
}

function E12_sueldoincremental (a) {
    if(isNaN(a)){
        return " Por favor ingrese valores";
    } else {
        return `El sueldo el primer año es ${a*(1.1**1)} \r\n El segundo año es ${a*(1.1**2)} \r\n El tercer año es ${a*(1.1**3)} \r\n El cuarto año es ${a*(1.1**4)} \r\n El quinto año es ${a*(1.1**5)} \r\n El sexto año es ${a*(1.1**6)} `;
    }
}

function E13_notasalumno (notas) {
    let aprobado=0;
    let desaprobado=0;
    let respuesta = `Se ingresaron las siguientes notas: `;
    for(var i=0;i<notas.length;i++){
        if(notas[i]>10){
            aprobado++;
        }
        else{
            desaprobado++;
        }
        respuesta=respuesta+`\r\nNota ${i+1}: ${notas[i]}`;
    }
    respuesta=respuesta+`\r\nSe determina aprobado si la nota es mayor a 11 \r\nCantidad de aprobados es ${aprobado} \r\nCantidad de desaprobados es ${desaprobado}`;
    return respuesta;
}

function E14_cantidadfocos (focos) {
    let rojo=0;
    let blanco=0;
    let verde=0;
    let respuesta="";
    respuesta=respuesta+`Se ingresaron ${focos.length} focos`;
    for(var i=0;i<focos.length;i++){
        if(focos[i]===1){
            verde++;
        }
        else if(focos[i]===2){
            blanco++;
        }
        else{
            rojo++;
        }
    }
    respuesta=respuesta+`\r\nSe tiene los siguiente focos \r\nCantidad de focos Verde:  ${verde} \r\nCantidad de focos Blancos:  ${blanco}\r\nCantidad de focos Rojos:  ${rojo}`;
    return respuesta;
}

function E15_votar (edaD){
    if(edaD>=18){
        return "Ud puede votar en las elecciones";
    }
    else{
        return "Ud. no puede votar en las elecciones";
    }
}

