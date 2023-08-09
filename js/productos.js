window.addEventListener("load", () => {
  cargarProductos();
});

let cargarProductos = async () => {
  try {
    let resPost = await axios("productos.json");
    console.log(resPost.status);
    if (resPost.status === 200) {
      let datos = await resPost.data;
      console.log(datos);
      let listaProductos = "";
      datos.productos.forEach((producto) => {
        listaProductos += `
            <div class="card text-center my-3 mx-lg-2 p-0" style="width: 18rem;">
              <img src="${
                producto.imgIcon
              }" class="card-img-top border-bottom" alt="${producto.name}">
              <div class="card-header bg-success-subtle border-bottom-0 d-flex justify-content-center">
              <h5 class="card-title d-flex align-items-center">${
                producto.name
              }</h5>
              </div>
              <div class="card-body">
                <p class="card-text">${"&#36 "} ${producto.precio}</p>
              </div>
            </div>
          `;
      });
      console.log(listaProductos);
      document.querySelector("#tarjetas").innerHTML = listaProductos;
    } else if (resPost.status === 404) {
      console.log("error 404");
    }
  } catch (err) {
    console.log(err);
  }
};
