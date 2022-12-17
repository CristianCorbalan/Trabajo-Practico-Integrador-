async function obtenerDatos() {
    const respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados");
    const datos = await respuesta.json();
    console.log(datos);

    datos.forEach(element => {

        document.getElementById('table').innerHTML += `  <tr>
             <td>${element.nombre} ${element.apellido}</td>
             <td>${element.area}</td>
             <td>${element.domicilio}</td>
             <td><button class="ver" id="${element.id}">Ver</button></td>
             </tr>`



    });

    let btn = document.querySelectorAll(".ver");
    btn.forEach(item => {
        item.addEventListener('click', (e) => {
            mostrarUno(e.target.id);
        });
    })

}

async function mostrarUno(id) {
    const respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+id)
    const datos = await respuesta.json();
    console.log(datos);

    let empleado = document.getElementById("empleado");
    empleado.innerHTML = " ";

    let nombre = document.createElement("th");
    nombre.innerHTML = datos.nombre;

    let apellido = document.createElement("th");
    apellido.innerHTML = datos.apellido;

    let area = document.createElement("th");
    area.innerHTML = datos.area;

    let domicilio = document.createElement("th");
    domicilio.innerHTML = datos.domicilio;
    
    let imagen = document.createElement("th");
    imagen.innerHTML = `<img src="${datos.foto}"></img>`


    empleado.appendChild(nombre);
    empleado.appendChild(apellido);
    empleado.appendChild(area);
    empleado.appendChild(domicilio);
    empleado.appendChild(imagen);

}

async function modificarDatos(){
    let miInformacion={
        "nombre":"Cristian",
        "apellido":"Corbalan",
        "area":"QA",
        "domicilio":"Calle Falsa 123",
        "foto":"https://pbs.twimg.com/media/EmFgNOhXEAAXWkb?format=jpg&name=small",
        "id":"91",
        }
        console.log(miInformacion);
    const respuesta = await fetch ("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+miInformacion.id,{   
    method: "PUT",
        body: JSON.stringify(miInformacion),
        headers:{"Content-type":"application/json"}
    });
    const data = await respuesta.json();
    console.log(data);
    miInformacion.innerHTML = data;
    console.log("Los Datos Fueron Modificados");
}

obtenerDatos();