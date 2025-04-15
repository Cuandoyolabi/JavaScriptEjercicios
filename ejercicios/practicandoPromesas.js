//Ejemplo 1 
/*
const promesaSimple = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve("Promesa resuelta exitosamente");
    }, 1000);
});

promesaSimple.then(result => {
    console.log(result);
})
*/
/*
//En JavaScript, resolve y reject son funciones que se utilizan 
//dentro de las promesas para manejar el resultado de una operación asincrónica.
/*
resolve(value): Se llama cuando la promesa se completa con éxito. 
Pasa el resultado (valor) a la función then() que maneja el valor resuelto.

reject(error): Se llama cuando la promesa falla o hay un error. 
Pasa la razón del fallo (error) a la función catch() que maneja la promesa rechazada.
*/

//Ejemplo 2
/*
const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promesa rechazada"); 
    }, 1000);
});

rejectedPromise
    .then(result => {
        console.log(result)
    })
    .cath(error => {
        console.log(error);
});
*/

//Ejemplo 3
/*
const fetchData = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
        if(success){
            resolve({data: "Datos obtenidos correctamente"});
        } else {
            reject("Error al obtener los datos");
        }
    }, 2000);
});

fetchData
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
});
*/
//Ejemplo 4
/*
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Primera promesa resuelta");
    }, 5000)
});

firstPromise
    .then(result => {
        console.log(result);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Segunda promesa resuelta");
            }, 2000);
        });
    })
    .then(result => {
         console.log(result);
});
*/
//Ejemplo 5
/*
const promise1 = new Promise(resolve => setTimeout(() => resolve("Promesa 1 resuelta"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Promesa 1 resuelta"), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve("Promesa 3 resuelta"), 3000));

Promise.all([promise1, promise2, promise3]).then(results => {
    console.log(results);
});
*/
/*
//Ejemplo 6
function solicitarDatosApi() {
    return new Promise((resolve, reject) => {
        console.log("Solicitando datos...");
    
        setTimeout(() => {
            const exito = Math.random() > 0.5;
        
            if(exito){
                resolve({data: "Datos recibidos"});
            } else {
                reject("Error en la solicitud de datos");
            }
        }, 2000);
    });
}

solicitarDatosApi()
    .then((resultado) => {
        console.log("Resultado: ", resultado);
    })
    .catch((error) => {
        console.log("Error", error);
});
*/
/*
const nuevaPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Jugando con promesas");
        reject("Jugando a errores");
    }, 1000)
});

nuevaPromesa
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
})
*/

//Ejemplo 7
/*
function primerPaso(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Primer paso completado");
            resolve(1);
        }, 1000);
    });
}

function segundoPaso(valor){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Segundo paso completado con valor: ", valor);
            resolve(valor +  1);
        }, 1000);
    });
}

function tercerPaso(valor){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tercer paso completado con valor: ", valor);
            resolve(valor + 1);
        }, 1000);
    });
}

primerPaso()
    .then(segundoPaso)
    .then(tercerPaso)
    .then((resultadoFinal) => {
        console.log("Proceso completo. Resultado final: ", resultadoFinal);
    })
    .catch((error) => {
        console.log("Ocurrio un error: ", error);
});
*/

//Ejemplo 8 
/*
function promesaRapida(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promesa rapida completada");
        }, 1000);
    });
}

function promesaLenta(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promesa lenta completada");
        }, 1000);
    });
}

function promesaQueFalla(){
    return new Promise((_, reject) =>{
        setTimeout(() => {
            reject("Promesa fallida");
        }, 2000);
    });
}

Promise.all([promesaRapida(), promesaLenta(), promesaQueFalla()])
.then((resultados) => {
    console.log("Todas las promesas completadas: ", resultados);
})
.catch((error) => {
    console.error("Una de las promesas fallo:", error);
});
*/

//Ejemplo 9
/*
function autenticarUsuario(usuario, password){
    return new Promise((resolve, reject) =>{
        console.log("Autenticando...");

        setTimeout(() => {
            if(usuario === "admin" && password === "1234"){
                resolve({usuario: "admin", rol: "Administrador"});
            } else {
                reject("Autenticacion fallida: usuario o contraseña incorrectos");
            }
        }, 1500);
    });
}

autenticarUsuario("admin", "1234")
    .then((infoUsuario) => {
        console.log("Bienvenido", infoUsuario);
    })
    .catch((error) => {
        console.log("Error de autenticacion", error);
});
*/

//Ejemplo 10
/*
function verificarInventario(producto){
    return new Promise((resolve, reject) => {
        console.log("Verificando inventario para", producto);

        setTimeout(() => {
            const disponible = Math.random() > 0.3;
            if(disponible){
                resolve("Producto disponble");
            } else {
                reject("Producto no disponible");
            }
        }, 1000);
    });
}

function procesarPago(monto){
    return new Promise((resolve, reject) =>{
        console.log("Procesando pago de", monto);

        setTimeout(() => {
            const exitoPago = Math.random() > 0.2;

            if(exitoPago){
                resolve("Pago completado");
            } else {
                reject("Error al procesar el pago");
            }
        }, 2000);
    });
}

function confirmarEnvio(){
    return new Promise((resolve, reject)=> {
        console.log("Confirmando envio...");

        setTimeout(() => {
            resolve("Envio confirmado");
        }, 1500);
    });
}

verificarInventario("Laptop")
    .then((mensajeInventario) => {
        console.log(mensajeInventario);
        return procesarPago(1000);
    })
    .then((mensajePago) => {
        console.log(mensajePago);
        return confirmarEnvio();
    })
    .then((mensajeEnvio) => {
        console.log(mensajeEnvio);
        console.log("Compra completada con exito");
    })
    .catch((error) => {
        console.error("Error en el proceso de compra: ", error);
});
*/
/*
function verificarInventario(producto) {
    return new Promise((resolve, reject) => {
      console.log("Verificando inventario para", producto);
  
      setTimeout(() => {
        const disponible = Math.random() > 0.3; // 70% de probabilidad de estar disponible
  
        if (disponible) {
          resolve("Producto disponible");
        } else {
          reject("Producto no disponible");
        }
      }, 1000);
    });
  }
  
  function procesarPago(monto) {
    return new Promise((resolve, reject) => {
      console.log("Procesando pago de", monto);
  
      setTimeout(() => {
        const exitoPago = Math.random() > 0.2; // 80% de probabilidad de éxito
  
        if (exitoPago) {
          resolve("Pago completado");
        } else {
          reject("Error al procesar el pago");
        }
      }, 2000);
    });
  }
  
  function confirmarEnvio() {
    return new Promise((resolve) => {
      console.log("Confirmando envío...");
  
      setTimeout(() => {
        resolve("Envío confirmado");
      }, 1500);
    });
  }
  
  // Simulación del proceso de compra
  verificarInventario("Laptop")
    .then((mensajeInventario) => {
      console.log(mensajeInventario);
      return procesarPago(1000);
    })
    .then((mensajePago) => {
      console.log(mensajePago);
      return confirmarEnvio();
    })
    .then((mensajeEnvio) => {
      console.log(mensajeEnvio);
      console.log("Compra completada con éxito");
    })
    .catch((error) => {
      console.error("Error en el proceso de compra:", error);
    });
*/
/*   PROBLEMA SENCILLO NUMERO 1
function descargarArchivo(){

    return promesa = new Promise((resolve, reject) => {
    console.log("Iniciando descarga...");

        setTimeout(() => {
            const exito = false;
            if(exito){
                resolve("El archivo se descargo por completo :)");
            } else {
                reject("El archivo no se pudo descargar :(");
            }
        }, 3000);
    });
}

descargarArchivo()
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));
*/
/*
function procesarDatos() {
  return resultado = new Promise((resolve) => {
    resolve("datos procesados...");
  }, 1000);
}

procesarDatos().then((data) => console.log(data)); // Error
*/
/*
function procesarPedido(idPedido, tiempo){
    return promise = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(tiempo < 4000){
                resolve(`Pedido ${idPedido} completado en [${tiempo} segundos`);
            } else {
                reject(`Pedido ${idPedido} fallido por exceder el tiempo de espera`)
            }
        }, tiempo * 1000);
    });
}
*/
//
/*
const promesaSimple = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Proceso completo");
    }, 2000);
});

promesaSimple
    .then((mensaje)=> {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
});

const paso1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Paso 1 completo");
            resolve("Datos del paso 1");
        }, 1000);
    });
};

const paso2 = (datosPrevios) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Paso 2 completado con: ", datosPrevios);
            resolve("Datos del paso 2");
        }, 1000);
    });
};

const promesaRsuelta = new Promise((resolve) => {
    resolve("Exito");
});

promesaRsuelta.then(result => console.log(result));

*/
/*
function autenticarUsuario(usuario, contraseña){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usuario === "admin" && contraseña === "1234"){
                resolve({id: 1, nombre: "Admin"});
            } else {
                reject("Usuario o contraseña incorretos");
            }
        }, 1500);
    });
}

function cargarPerfil(idUsuario){
    return new Promise((resolve) => {
        console.log("Cargando perfil del usuario");
        setTimeout(() => {
            resolve({edad: 30, correo: "adaminzunza3@gmail.com"});
        }, 1000);
    });
}

autenticarUsuario("admin", "1234")
    .then((usuario) => {
        console.log("Usuario autenticado", usuario);
    })
    .then((perfil) => {
        console.log("Perfil del usuario: ", perfil);
    })
    .catch((error) => {
        console.error(error);
    });
*/
/*
function verificarStock(producto){
    return new Promise((resolve, reject) => {
        console.log("Verificando stock");
        setTimeout(() => {
            const enStock = ["camisa", "zapatos"];
            enStock.includes(producto)
            ? resolve(producto)
            : reject("Producto agotado");
        }, 1000);
    });
}

function procesarPago(producto){
    return new Promise((resolve) => {
        console.log("procesando pago por producto: ", producto);
        setTimeout(() => {
            resolve("Pago exitoso");
        }, 1000);
        });
}

function generarFactura(producto){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fatura generada para {producto}");
        }, 1000);
    });
}

verificarStock("camisa")
    .then(procesarPago)
    .then(() => generarFactura("camisa"))
    .then(console.log)
    .catch(console.error);
*/
/*
function buscarVuelo(destino){
    return new Promise((resolve, reject) => {
        console.log("Buscando Vuelos a :", destino);
        setTimeout(() => {
            if(destino === "Tokio"){
                resolve({vuelo: "Tk123", precio: 850});
            } else {
                reject("No hay vuelos disponibles");
            }
        }, 2000);
    });
}

function pagarVuelo(vuelo){
    return new Promise((resolve) => {
        console.log("Pagando vuelo:", vuelo.vuelo);
        setTimeout(() => {
            resolve("Pago realizado con exito");
        }, 2000);
    });
}

function confirmarReserva(){
    return new Promise((resolve) => {
        console.log("Enviando onfirmacion de reserva....");
        setTimeout(() => {
            resolve("Correo de confirmacion enviado");
        }, 1000);
    });
}

buscarVuelo("Tokio")
    .then(pagarVuelo)
    .then(confirmarReserva)
    .then(console.log)
    .catch(console.error)
    */
/*
function sumarConPromesa(a, b){
    return new Promise((resolve, reject) => {
        if(typeof(a) === "number" && typeof(b) === "number"){
            resolve(a + b);
        } else {
            reject("Hay un dato que no es un numero y no se puede ejecutar");
        }
    });
}

sumarConPromesa(4, 5)
    .then(resultado => console.log("Resultado: ", resultado))
    .catch(error => console.error("Error", error));
 
*/

/*
function pasarOk(ok){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ok == "ok"){
                resolve("Se pasa con exito");
            } else {
                reject("No pasa");
            }
        }, 1000);
    });
}

pasarOk("ok")
    .then((respuesta) => console.log(respuesta))
    .catch((respuesta) => console.log(respuesta))
*/


/*  Generando un error por un retraso de informacion
let estudiantes = [{
    name: "Adam",
    edad: 22
    },
    {
    nombre: "Ricardo",
    edad: 38
    }
];

function datos(){
    setTimeout(() => {
        return estudiantes;
    }, 1000);
}

console.log(datos());
*/

let estudiantes = [{
    name: "Adam",
    edad: 22
    },
    {
    nombre: "Ricardo",
    edad: 38
    }
];

function retornandoDatos(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(estudiantes);
        }, 1000);
    });
}

retornandoDatos()
    .then((respuesta) => console.log(respuesta))
//  .catch((respuesta) => console.log(respuesta));

