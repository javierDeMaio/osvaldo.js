class Auto 
{
    constructor(id,marca,modelo,kilometros,precio){
        this.id = id
        this.marca= marca
        this.modelo= modelo
        this.kilometros= kilometros
        this.precio= precio
    }
    encender(Auto){console.log(`Prrrrr me encendiste y soy un ${this.marca} ${this.modelo} `);}

    consultarPrecio(Auto){console.log(`valor = $ ${this.precio}, Estas Seguro que quieres comprarme?`);}

    comprar(Auto){console.log(`Felicitaciones compraste un ${this.marca}  ${this.modelo} `);}

}
 
const Auto1 = new Auto(1,`Ford`,`Focus 2.0`, 150000, 1250000);
const Auto2 = new Auto(2,`Renault`,`Kwid zen 1.0`, 30000, 1000000);
const Auto3 = new Auto(3,`fiat`,`Argo 1.4 T`, 2000, 2050000);
const Auto4 = new Auto(4,`Peugeot`,`3008 GT line`, 9000, 7000000);
const Auto5 = new Auto(5,`Chevrolet`,`Cruze premier`, 1000, 3000000);

console.log(Auto1);
console.log(Auto2);
Auto1.encender();
Auto2.encender();
Auto1.consultarPrecio();
Auto2.consultarPrecio();
Auto1.comprar();

let autos = [Auto1, Auto2, Auto3, Auto4,Auto5]

console.log(autos.filter (Auto => Auto.precio < 3000000));
console.log(autos.filter (Auto => Auto.marca == 'Chevrolet'));
console.log(autos.filter (Auto =>Auto.kilometros < 50000));


autos.forEach(e=> {console.log(e.modelo)});

autos.forEach(e=> {console.log(e.precio < 2000000)});

autos.forEach(e=> {console.log(e.kilometros)});

let precioOrden = autos.sort(function(a,b)
{
    if (a.precio > b.precio){
        return 1;
    }
    if (a.precio < b.precio){
        return -1;
    }
    return 0;
});
console.log(precioOrden);

/*let nombre = prompt(`Ingresa tu Nombre!`);
let apellido = prompt(`ingresa tu apellido`)
let montoAFinanciar= (prompt(`Ingresa el monto que quieras financiar para la compra de tu usado!`));
let cuota = Number(montoAFinanciar/12);
let cuota1 = Number(montoAFinanciar/18);
let cuota2 = Number(montoAFinanciar/24);
let cuota3 = Number(montoAFinanciar/36);
let ingresoBruto = Number((cuota)*0.21);
let ingresoBruto1 = Number((cuota1)*0.21);
let ingresoBruto2 = Number((cuota2)*0.21);
let ingresoBruto3 = Number((cuota3)*0.21);
let conInteres = Number(cuota + (cuota*0.30));
let conInteres1 = Number(cuota1 + (cuota1*0.30));
let conInteres2 = Number(cuota2 + (cuota2*0.30));
let conInteres3 = Number(cuota3 + (cuota3*0.30));

alert(`ingresaste $ ${montoAFinanciar} pesos para financiar`);

const cuotaMensual = (conInteres,ingresoBruto) => (conInteres+ingresoBruto).toFixed(1);
const cuotaMensual1 = (conInteres1,ingresoBruto) => (conInteres1+ingresoBruto).toFixed(1);
const cuotaMensual2 = (conInteres2,ingresoBruto) => (conInteres2+ingresoBruto).toFixed(1);
const cuotaMensual3 = (conInteres3,ingresoBruto) => (conInteres3+ingresoBruto).toFixed(1);

alert(`Hola ${nombre}!! tu cuota mensual en doce meses seria de ${cuotaMensual(conInteres,ingresoBruto)}, en 18 meses ${cuotaMensual1(conInteres1,ingresoBruto1)}, en 24 meses ${cuotaMensual2(conInteres2,ingresoBruto2)}, en 36 meses ${cuotaMensual3(conInteres3,ingresoBruto3)}, contactate con nosotros para acceder a tu credito!`);
*/
localStorage.setItem("autos", JSON.stringify(autos));


$(`#btn`).click(mostrarMsJ);

function mostrarMsJ(e){
    e.preventDefault()
    const nombrar = $(`#nombre`).val();
    const monto = $(`#montoAFinanciar`).val();

    let cuota = Number(monto/12);
    let cuota1 = Number(monto/18);
    let cuota2 = Number(monto/24);
    let cuota3 = Number(monto/36);
    let ingresoBruto = Number((cuota)*0.21);
    let ingresoBruto1 = Number((cuota1)*0.21);
    let ingresoBruto2 = Number((cuota2)*0.21);
    let ingresoBruto3 = Number((cuota3)*0.21);
    let conInteres = Number(cuota + (cuota*0.30));
    let conInteres1 = Number(cuota1 + (cuota1*0.30));
    let conInteres2 = Number(cuota2 + (cuota2*0.30));
    let conInteres3 = Number(cuota3 + (cuota3*0.30));

    const cuotaMensual = (conInteres,ingresoBruto) => (conInteres+ingresoBruto).toFixed(1);
    const cuotaMensual1 = (conInteres1,ingresoBruto) => (conInteres1+ingresoBruto).toFixed(1);
    const cuotaMensual2 = (conInteres2,ingresoBruto) => (conInteres2+ingresoBruto).toFixed(1);
    const cuotaMensual3 = (conInteres3,ingresoBruto) => (conInteres3+ingresoBruto).toFixed(1);

    $(`#par`).remove();
    $(`#formu`).append(`<p id="par"> Que tal ${nombrar}, financianciando $ ${monto}, las cuotas te quedarian: 12 de ${cuotaMensual(conInteres,ingresoBruto)}, 18 de ${cuotaMensual1(conInteres1,ingresoBruto1)}, 24 de ${cuotaMensual2(conInteres2,ingresoBruto2)}, 36 de ${cuotaMensual3(conInteres3,ingresoBruto3)} </p>`
    );
}
    
    

class Financiaciones {
    constructor(nombre, monto){
        this.nombre = nombre;
        this.monto = monto;
    }
}
const ListaF = [];

  function crearFinanciacion(){
    const nombre =$(`#nombre`).val();
    const monto = Number($(`#montoAFinanciar`).val());

    const nuevaFinanciacion = new Financiaciones(nombre,monto)
    ListaF.push(nuevaFinanciacion);
    console.log(ListaF);
  }
  $(`#btn`).click(crearFinanciacion);

  function visionTabla(){
      $("#tabla").toggle(2000)
      $("#tabla").css("background-color","black")
  };

$(`#btn1`).on(`click`, visionTabla);

$(`#btn2`).click(function(e){
    e.preventDefault();
$(`html, body`).animate({scrollTop: $(`#importante`).offset().top},2000);
});


