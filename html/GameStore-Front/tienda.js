import {
  getAllProductos,
  delay,
  busqueda,
  card,
  aniJoy,
  botones,
} from "./Js/tiendaActions.js";

//MAIN DE TIENDA
window.onload = async function () {
  try {
    aniJoy();

    let spinner = document.querySelector("#spinner");
    await delay(500);
    const productos = await getAllProductos();

    productos.forEach((element) => {
      document
        .querySelector("#lista_juegos")
        .insertAdjacentHTML("beforeend", card(element));
      botones();
    });
    busqueda(productos);

    spinner.remove();
  } catch (error) {
    spinner.remove();
    document
      .querySelector("#lista_juegos")
      .insertAdjacentHTML(
        "beforeend",
        "<div class='textNormal'>Error al cargar los productos.</div>"
      );
    console.error("Error al obtener productos:", error);
  }
};

//BORRADOR
document.addEventListener("DOMContentLoaded", function () {});

// window.onload = function () {
//   fetch("https://localhost:44398/api/Juego/All")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data); // Aquí puedes hacer lo que quieras con los datos recibidos, como mostrarlos en el DOM
//       data.forEach((element) => {
//         const imagen = element.imagen;
//         const titulo = element.nombre;
//         const descripcion = element.descripcion;
//         console.log(data.imagen);
//         const htmlcard = `<div class="col textNormal">
//       <div class="card h-100">
//         <img src="${imagen}"
//           class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${titulo}</h5>
//           <div>${descripcion}</div>
//         </div>
//         <div class="container container-card">
//           <div class="row row-cols-md-3">
//             <label for="quantity" class="col-8">Cantidad:</label>
//             <input class="col input-card" type="number" id="quantity" name="quantity" min="1" max="10">
//           </div>
//           <div class="row boton-compra row-cols-md-1">
//             <button type="button" class="btn btn-primary col">Comprar</button>
//           </div>
//         </div>
//       </div>
//     </div>`;
//         document
//           .querySelector("#lista_juegos")
//           .insertAdjacentHTML("beforeend", htmlcard);

//         // const div = document.createElement('div');
//         // div.textContent = element.marca;
//         // cuerpo.appendChild(div);
//       });
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };
