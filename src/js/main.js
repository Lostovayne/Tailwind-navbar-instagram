const menu = document.querySelector('#menu');
const abrirMenu = document.querySelector('#abrir-menu');

const cerrarMenu = document.querySelector('.cerrar-menu');
const modal = document.querySelector('#modal');
const abrirModal = document.querySelector('#abrir-modal');

const buscar = document.querySelector('#buscar');
const contenedorBuscar = document.querySelector('#contenedor-buscar');
const menuBuscar = document.querySelector('#menu-buscar');
const botonCerrar = document.querySelector('#boton-cerrar');

const cambiarApariencia = document.querySelector('#cambiar-apariencia')



cambiarApariencia.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});



buscar.addEventListener('click', () => {
    contenedorBuscar.classList.toggle('-left-[500px]');
    contenedorBuscar.classList.toggle('left-0');
    
});


botonCerrar.addEventListener('click', () => {
    contenedorBuscar.classList.toggle('-left-[500px]');
    contenedorBuscar.classList.toggle('left-0'); 
    
    
})


abrirMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});

abrirModal.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
});

cerrarMenu.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.toggle('flex');
});
