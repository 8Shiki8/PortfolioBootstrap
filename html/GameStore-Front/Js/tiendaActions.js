import { desarrollo, produccion } from "../Js/enviroment.js";
const backendUrl = desarrollo;

let datosCompra = [];
let carritoContador = 0;

export const getAllProductos = async () => {
  try {
    let response = await fetch(backendUrl + `api/Juego/All`);
    let productos = await response.json();

    return productos;
  } catch (e) {
    console.error(e);
  }

  return null;
};

// FUNCIONES Y COMPLEMENTOS

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
//BUSQUEDA PRODUCTOS
export function busqueda(productos) {
  const formularioBusqueda = document.querySelector(".searchBar");

  formularioBusqueda.addEventListener("submit", function (event) {
    event.preventDefault();
    const lista = document.querySelector("#lista_juegos");
    lista.textContent = "";

    const valorBusqueda = document.getElementById("inputBuscar").value;

    console.log("Texto de búsqueda:", valorBusqueda);
    productos.forEach((element) => {
      if (element.nombre.toUpperCase().includes(valorBusqueda.toUpperCase())) {
        document
          .querySelector("#lista_juegos")
          .insertAdjacentHTML("beforeend", card(element));
        console.log(element);
      }
    });
    botones();
  });
}
//CARD PRODUCTO
export const card = (data) => {
  let categorias = "";
  data.categoria.forEach((elem) => {
    console.log(elem);
    categorias += `<button type="button" class="btn btn-success">${elem}</button>
`;
  });

  return `<div class="col textNormal">
        <div class="card h-100">
          <img src="${data.imagen}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title" id="nombre${data.id}">${data.nombre}</h5>

            <div class="card-contenido">${data.descripcion}</div>
           
            <button  type="button" class="btn btn-primary card-contenido" data-bs-toggle="modal" data-bs-target="#id-${
              data.id
            }">
  Mas Informacion
</button>
 <div class="row row-cols-md-1">
             <label class="card-contenido">Precio: <span class="modal-span">$</span><span class="card-precio" id="precio${
               data.id
             }"> ${data.precio.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}</span></label>
            </div>

            
          </div>
          <div class="container container-card">
            <div class="row row-cols-md-3">
              <label for="quantity" class="col-8">Cantidad:</label>
              <input class="col input-card" type="number" id="quantity${
                data.id
              }" name="quantity" min="1" max="10">
            </div>
            
              <button type="button" class="btn btn-primary col comprar-btn" id="boton${
                data.id
              }">Comprar</button>
           
          </div>
        </div>
      </div>


      <div class="modal fade" id="id-${
        data.id
      }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="modal${data.id}">${data.nombre}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
                  <img src="${data.imagen}" class="card-img-top" alt="...">
                  <label class="modal-seccion modal-label">Plataforma: <span class="modal-span">${
                    data.descripcion
                  } </span></label>
                  <BR>
                  ${categorias}
                  <BR>
                  <label class="modal-seccion modal-label">Sinopsis:</label>
                  <p class="modal-seccion textNormal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cumque, totam culpa fuga ratione, perspiciatis deserunt, corrupti fugit sunt expedita labore repudiandae tempora accusantium blanditiis itaque ad! Illum, debitis voluptatum!
            Rem consectetur illo optio maxime ducimus vero quas libero eveniet possimus tenetur, facere, modi nam! Amet id ab maiores distinctio quae cum et, excepturi sunt hic, quaerat, debitis earum! Ex.
 </p>
 <div class="modal-seccion"><label class="modal-label">Precio: <span class="modal-span"> $ ${data.precio.toLocaleString(
   "es-AR",
   {
     minimumFractionDigits: 2,
     maximumFractionDigits: 2,
   }
 )}</span></label> </div>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
`;
};
export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export function joy() {
  let numeroRandomX = getRandomInt(95);
  let numeroRandomY = getRandomInt(100);

  console.log();
  return ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" 
  class="bi bi-controller" viewBox="0 0 16 16" style="left:${numeroRandomX}%; top:${numeroRandomY}%; " >
      <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z"/>
      <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27"/>
    </svg>`;
}
export async function aniJoy() {
  for (let i = 0; i < 50; i++) {
    const header = document.querySelector(".header-container");
    await delay(1000);
    header.insertAdjacentHTML("beforeend", joy());
  }
}
// BOTONES COMPRA
export function botones() {
  let comprarBtns = document.querySelectorAll(".comprar-btn");

  comprarBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let quantity = btn.previousElementSibling.querySelector(
        "input[type='number']"
      ).value;
      console.log(quantity + "!!!!!!!!!!!!!!!!!!");
      let quantity2 = document.getElementById("quantity" + btn.id.substring(5));
      console.log(quantity2.value + "!!!!!!!!!!!!!!!!!!");

      let precio = document.getElementById("precio" + btn.id.substring(5));
      let modalBody = document.getElementById("modal-p");
      let carritoCounter = document.getElementsByClassName("carrito-counter");

      let nombre = document
        .getElementById("nombre" + btn.id.substring(5))
        .textContent.trim();

      let compra = {
        nombre: nombre,
        quantity: quantity,
        precio: precio,
      };

      if (quantity > 0) {
        carritoContador += parseInt(quantity);

        datosCompra.push(compra);
        modalBody.innerHTML = "";
        quantity2.value = "";
        window.alert(
          "Agregaste al carrito " + quantity + " unidades " + compra.nombre
        );
        let total = 0;

        datosCompra.forEach(function (element) {
          let cantidad = parseInt(element.quantity);

          let precio = element.precio.textContent.trim();
          console.log("mi precio" + precio);
          let precioLimpio = precio.replace(/\./g, "").replace(",", ".");
          let resultado = cantidad * parseFloat(precioLimpio);
          modalBody.insertAdjacentHTML(
            "beforeend",
            `${element.nombre}  x ${element.quantity} (Unidades) = $ ${resultado}<br>`
          );
          total += resultado;
          console.log(precioLimpio);
        });
        carritoCounter[0].style.display = "flex";

        carritoCounter[0].textContent = "";
        carritoCounter[0].insertAdjacentHTML(
          "beforeend",
          parseInt(carritoContador)
        );
        carritoCounter[1].style.display = "flex";

        carritoCounter[1].textContent = "";
        carritoCounter[1].insertAdjacentHTML(
          "beforeend",
          parseInt(carritoContador)
        );
        modalBody.insertAdjacentHTML("beforeend", `<br>Total = $${total}`);
      }

      console.log("Datos de la compra:", datosCompra);
    });
  });
}
