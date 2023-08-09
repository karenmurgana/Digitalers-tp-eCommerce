window.addEventListener("load", () => {
  cargarYerbas();
});

let cargarYerbas = async () => {
  try {
    let resPost = await axios("productos.json");
    console.log(resPost.status);
    if (resPost.status === 200) {
      let datos = await resPost.data;
      console.log(datos);
      let yerbas = "";
      datos.yerbas.forEach((yerba) => {
        yerbas += `
          <div class="card text-center my-3 mx-lg-2 p-0" style="width: 18rem;">
            <img src="${yerba.imgIcon}" class="card-img-top border-bottom" alt="${yerba.name}">
            <div class="card-header bg-success-subtle border-bottom-0 d-flex justify-content-center">
            <h5 class="card-title d-flex align-items-center">${yerba.name}</h5>
            </div>
            <div class="card-body">
              <p class="card-text">${"&#36 "} ${yerba.precio}</p>
            </div>
          </div>
        `;        
      });
      console.log(yerbas);
      document.querySelector("#tarjetas").innerHTML = yerbas;
    } else if (resPost.status === 404) {
      console.log("error 404");
    }
  } catch (err) {
    console.log(err);
  }
};
