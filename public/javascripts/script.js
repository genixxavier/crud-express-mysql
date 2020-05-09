window.addEventListener("load", function(){
    const API_URL = 'http://localhost:3000/api/users/'
    
    var divs = document.getElementsByClassName("delete");
    
    //Recorres la lista de elementos seleccionados
    for (var i=0; i< divs.length; i++) {
        //Añades un evento a cada elemento
        divs[i].addEventListener("click",function() {
           //Aquí la función que se ejecutará cuando se dispare el evento
           let idUser = this.getAttribute("data-id")
           //enviamos a eliminar
           axios.delete(`${API_URL}id/${idUser}`)
                .then(response => {
                    if(response.data == 1){
                        alert("Usuario Eliminado")
                        location.reload();
                    }{
                        console.error('No se pudo eliminar al usuario')
                    }
                    
                })
                .catch(e => {
                    console.error(e.message)
                })
        });
    }

    //Update
    var update = document.getElementById("update")
    if(update){
        update.addEventListener("click",function() {
            let nombre = document.getElementById('nombre').value
            let apellidos = document.getElementById('apellidos').value
            let sexo = document.getElementById('sexo').value
            let celular = document.getElementById('celular').value
            let sueldo = document.getElementById('sueldo').value
            let afp = document.getElementById('afp').value
            let onp = document.getElementById('onp').value
            let id = document.getElementById('iduser').value

            let alerta = document.getElementById('alerta')
    
            let datos = {
                nombre: nombre,
                apellidos: apellidos,
                sexo: sexo,
                celular: celular,
                sueldo: sueldo,
                afp: afp,
                onp: onp
            }
            console.log(datos)
            
            axios.put(`${API_URL}id/${id}`,datos)
                    .then(response => {
                        if(response.data == 1){
                            alerta.classList.add('is-primary')
                            alerta.innerHTML= 'Datos actualizados correctamente'
                            setTimeout(()=>{
                                location.reload();
                            },1500)
                        }else{
                            alerta.classList.add('is-danger')
                            alerta.innerHTML= 'Los datos no se pudieron actualizar'
                            console.error('No se pudo eliminar al usuario')
                        }
                        
                    })
                    .catch(e => {
                        console.error('Error servidor')
                    })
        })
    }

    //create
    var create = document.getElementById("create")
    if(create){
        create.addEventListener("click",function() {
            let nombre = document.getElementById('nombre').value
            let apellidos = document.getElementById('apellidos').value
            let sexo = document.getElementById('sexo').value
            let celular = document.getElementById('celular').value
            let sueldo = document.getElementById('sueldo').value
            let afp = document.getElementById('afp').value
            let onp = document.getElementById('onp').value

            let alerta = document.getElementById('alerta')
    
            let datos = {
                nombre: nombre,
                apellidos: apellidos,
                sexo: sexo,
                celular: celular,
                sueldo: sueldo,
                afp: afp,
                onp: onp
            }
            console.log(datos)
            
            axios.post(`${API_URL}create`,datos)
                    .then(response => {
                        if(response.data != 0){
                            alerta.classList.add('is-primary')
                            alerta.innerHTML= 'Usuario creado correctamente'
                            setTimeout(()=>{
                                location.reload();
                            },1500)
                        }else{
                            alerta.classList.add('is-danger')
                            alerta.innerHTML= 'Usuario creado correctamente'
                            console.error('No se pudo crear el usuario')
                        }
                        
                    })
                    .catch(e => {
                        console.error('Error servidor')
                    })
        })
    }

})