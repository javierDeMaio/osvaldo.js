/*class Auto 
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
alert(`ahora podes interactuar en la consola con los autos!`)
console.log(`Hace tu consulta sonbre los datos del auto!`);

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

let nombre = prompt(`Ingresa tu Nombre!`);
let apellido = prompt(`ingresa tu apellido`)
let montoAFinanciar= (prompt(`Ingresa el monto que quieras financiar para la compra de tu usado!`));
let cuota = Number(montoAFinanciar/12);
let conInteres = Number(cuota + (cuota*0.30));
let ingresoBruto = Number((cuota)*0.21);

alert(`ingresaste $ ${montoAFinanciar} pesos para financiar`);

const cuotaMensual = (conInteres,ingresoBruto) => (conInteres+ingresoBruto).toFixed(1);
alert(`Hola ${nombre}!! tu cuota mensual seria de ${cuotaMensual(conInteres,ingresoBruto)}, contactate con nosotros para acceder a tu credito!`);

/*let division = document.getElementsByClassName(`container`);
let descripcion = document.getElementById(`1`);
descripcion.textContent = `Estimad@ ${nombre} ${apellido}`;

let parrafo = document.createElement(`div`);
parrafo.textContent = `el monto a financiar solicitado es de ${montoAFinanciar} , por lo tanto quedan 12 cuotas de ${cuotaMensual(conInteres,ingresoBruto)} . Gracias por confiar en nosotros!`;
division[0].appendChild(parrafo);*/

$(`#btn`).click(mostrarMsJ)

function mostrarMsJ(){
    const nombrar = $(`#nombre`).val();
    const numero = $(`#numerodecontacto`).val();
    const consultar = $(`#consulta`).val();
    
    $(`#para`).remove();
    $(`#formTransform`).append(`<p id="para"> Que tal ${nombrar} , estaremos llamando al ${numero} en la brevedad por la consulta: ${consultar} </p>`);
}

class Consultas {
    constructor(nombre, numero, consulta){
        this.nombre = nombre;
        this.numero = numero;
        this.consulta =consulta;
    }
}
const Lista = [];

  function crearConsulta(){
    const nombre = document.getElementById(`nombre`).value;
    const numero = document.getElementById(`numerodecontacto`).value;
    const consultar = document.getElementById(`consulta`).value;

    const nuevaConsulta = new Consultas(nombre,numero, consultar)
    Lista.push(nuevaConsulta);
    console.log(Lista);
  }

  const btnGuardar = document.getElementById("btn")
  btnGuardar.addEventListener("click",crearConsulta);

