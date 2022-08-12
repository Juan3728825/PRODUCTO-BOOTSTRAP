let form = document.getElementById('form-product');
form.addEventListener('submit', function (e) {
    e.preventDefault();//cuando le de submit, no envie nada

    let lista = document.getElementById("list-product");
    let Descripcion = document.getElementById("Descripcion");
    let Cantidad = document.getElementById("Cantidad");
    let Precio = document.getElementById("Precio");

    let div = document.createElement('div');
    div.classList.add('row')
    div.classList.add('mb-1')
    div.innerHTML = `
    <div class="card text-center col-11">
    <div class="card-body">
    <b>Descripcion:</b>${Descripcion.value}
    <b>Cantidad:</b>${Cantidad.value}
    <b>Precio:</b>${Precio.value}
    </div>
    </div>
    <button
    class="btn btn-danger text-center col-1"
    name="delete">
    <i class="fa-solid fa-trash-can"></i>
    </button>
`;
if(Descripcion.value!="" && Precio.value!="" && Cantidad.value!=""){
lista.appendChild(div);
mensaje('el producto ha sido agregado', 'success')}
  form.reset();
})
let borrar = document.querySelector("#list-product")
borrar.addEventListener("click", function(e){
if (e.target.name === "delete"){
    e.target.parentElement.remove();
    mensaje('el producto ha sido eliminado', 'danger')

};
})

const mensaje = function(msj, color){
    container = document.querySelector(".container");
    app = document.querySelector("#app");

    div = document.createElement("div");
    
    div.innerHTML = `
    <div class="alert alert-${color} mt-5">${msj}</div>
    `
    container.insertBefore(div,app);

    setTimeout(() =>{
        div.remove();
    }, 300);

    

}

