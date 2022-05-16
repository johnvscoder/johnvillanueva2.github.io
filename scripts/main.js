let miImagen = document.querySelector('img');
miImagen.onclick = function() {
    let miSrc = miImagen.getAttribute('src');
    if(miSrc === 'images/pacman.webp') {
        miImagen.setAttribute('src', 'images/nuevayork.jpg');
    }
    else if(miSrc == 'images/nuevayork.jpg') {
        miImagen.setAttribute('src', 'images/perro.jpg');
    }
    else {
        miImagen.setAttribute('src', 'images/pacman.webp');
    }
};

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre4', miNombre);
      miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
    }
  }

if (!localStorage.getItem('nombre4')) {
    estableceNombreUsuario();
    console.log('si se hizo');
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre4');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}