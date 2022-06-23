//variables

const formBusqueda=document.querySelector('#form-busqueda');
const inputName=document.querySelector('#inputName');
const inputBrand=document.querySelector('#inputBrand');
const boxProducts=document.querySelector('#box-products');

const datosBusqueda={
    name:'',
    price:'',
    brand:''
}

//Mostrar informacion en pantalla
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarHTML()
});

//Funcion mostrar contenido

function mostrarHTML(products){
    limpiarHTML();
    products.forEach(product =>{
        const {name,price,brand,image}=product;
        const cardProduct=document.createElement('div');
        cardProduct.classList.add('col, mb-3');
        cardProduct.innerHTML=`
        <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="Products">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${price}</p>
            </div>
        </div>
        `
        boxProducts.appendChild(cardProduct);
    });
}

//Enviar y filtrar
formBusqueda.addEventListener('submit', (e) =>{
    e.preventDefault();

    datosBusqueda.name=inputName.value.toLocaleLowerCase();
    datosBusqueda.brand=inputBrand.value;

    filtrarProducts();
    formBusqueda.reset();
});

//Filtro de peliculas
function filtrarProducts(){
    const resultado=products.filter(filtrarName).filter(filtrarBrand);

    if(resultado.length){
        mostrarHTML(resultado);
    }else{
        sinResultado();
    }

    const hayContenido=Object.values(datosBusqueda).filter(e=>e);
    
    if(hayContenido.length){
        mostrarHTML();
    }else{
        sinResultado();
    }

}

//Generar funciones que recibe filter

function filtrarName(product){
    const {name}=datosBusqueda;

    if(name){
        return product.name==name;
    }

    return products;
}

function filtrarBrand(product){
    const {brand}=datosBusqueda;

    if(brand){
        return product.brand==brand;
    }

    return products;
}

//Limpiar Cards
function sinResultado(){
    limpiarHTML();

    const sinResultado=document.createElement('div');
    sinResultado.classList.add('bg-danger','text-white','border','p-4','text-center');
    sinResultado.textContent = 'No hay resultados de busqueda';

    if(boxProducts.parentElement.children.length < 2){
        boxProducts.parentElement.appendChild(sinResultado);
    }
}