let usuario={
    user:'PepeGlobos',
    password: 'SuperSafe123',
    email: 'pepe@gmail.com'
}

const textUser=document.querySelector('#textUser');
const textAbout=document.querySelector('#textAbout');
const inputUser=document.querySelector('#inputUser');
const inputPassword=document.querySelector('#inputPassword');

// function add(){
//     localStorage.setItem('user', JSON.stringify(usuario));
// }

// function obtenerDatos(){
//     let obj=localStorage.getItem('user');
// }

function actualizarContenido(){
    let obj=JSON.parse(localStorage.getItem('user'));

    // console.log(inputUser.value);
    // console.log(inputPassword.value);

    if(obj.user==inputUser.value && obj.password==inputPassword.value){
        textUser.textContent=`Bienvenido ${obj.user}`;
        textAbout.textContent=`Tu correo es ${obj.email} con contraseña: ${obj.password}`;    
    }else{
        textUser.textContent=``;
        textAbout.textContent=`Error: correo o contraseña incorrectos.`;    
    }
    
}

// add();