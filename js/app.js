let form = document.getElementById('form-product');
form.addEventListener('submit', function (e) {
    e.preventDefault();//cuando le de submit, no envie nada
    let lista = document.getElementById("list-product");
    let Descripcion = document.getElementById("Descripcion");
    let Cantidad = document.getElementById("Cantidad");
    let Precio = document.getElementById("Precio");

    let div = document.createElement('div');
    div.innerHTML = `
    
    <div class="card text-center row">
    <div class="card-body col-11">
        <b>Descripcion: </b>${Descripcion.value}                 
        <b>cantidad: </b>${Cantidad.value}
        <b>Precio: </b>${Precio.value}
    </div>
    <div class="col-md-1">
    <a href="#"
    class="btn btn danger"
    name="delete">
    delete
    </a>
</div>
</div>
    
    `;
    lista.appendChild(div);
})