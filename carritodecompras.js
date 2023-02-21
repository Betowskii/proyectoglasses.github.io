window.onload = function () {
 
  let baseDeDatos = [
    {
      id: 1,
      nombre: "Resident Evil3",
      precio: 1299,
      imagen: "imagenes/RE3.jpg",
    },
    {
      id: 2,
      nombre: "Ghost Recon",
      precio: 599,
      imagen: "imagenes/GRB.jpg",
    },
    {
      id: 3,
      nombre: "Titanfall2",
      precio: 310,
      imagen: "imagenes/TF2PS4.jpg",
    },
    {
      id: 4,
      nombre: "Doom",
      precio: 1299,
      imagen: "imagenes/DE.jpg",
    },
    {
      id: 5,
      nombre: "The last of us ",
      precio: 499,
      imagen: "imagenes/TLOUII.jpeg",
    },

    {
      id: 6,
      nombre: "Assassins Creed ",
      precio: 699,
      imagen: "imagenes/ASCO.jpg",
    },

    {
      id: 7,
      nombre: "Control playstaion blanco",
      precio: 1845,
      imagen: "imagenes/CONTROLPS4BLANCO.jpg",
    },
    {
      id: 8,
      nombre: "Control playstation negro",
      precio: 1699,
      imagen: "imagenes/CONTROLPS4NEGRO.jpg",
    },
    {
      id: 9,
      nombre: "Control playstation dorado",
      precio: 1999,
      imagen: "imagenes/CONTROLPS4DORADO.jpg",
    },
    {
      id: 10,
      nombre: "Control playstation rojo",
      precio: 1499,
      imagen: "imagenes/CONTROLPS4MAGMA.jpg",
    },
    {
      id: 11,
      nombre: "Gears5",
      precio: 490,
      imagen: "imagenes/G5.jpg",
    },
    {
      id: 12,
      nombre: "Titanfall",
      precio: 310,
      imagen: "imagenes/TF2.jpg",
    },
    {
      id: 13,
      nombre: "Farcry5",
      precio: 859,
      imagen: "imagenes/FC5.jpg",
    },
    {
      id: 14,
      nombre: "Halo5",
      precio: 499,
      imagen: "imagenes/HALO5.jpg",
    },
    {
      id: 15,
      nombre: "Far cry new dawn",
      precio: 1728,
      imagen: "imagenes/FND.jpg",
    },
    {
      id: 16,
      nombre: "Call of duty 3",
      precio: 945,
      imagen: "imagenes/CODBP3.jpg",
    },
    {
      id: 17,
      nombre: "Control xbox blanco",
      precio: 1299,
      imagen: "imagenes/CONTROLXBOXONEARTIC.jpg",
    },
    {
      id: 18,
      nombre: "Control xbox azul",
      precio: 1731,
      imagen: "imagenes/CONTROLXBOXONEAZUL.jpg",
    },
    {
      id: 19,
      nombre: "Control xbox rojo",
      precio: 1699,
      imagen: "imagenes/CONTROLXBOXONEROJO.jpg",
    },
    {
      id: 20,
      nombre: "Control xbox negro",
      precio: 1359,
      imagen: "imagenes/CONTROLXBOXONEGRISAZUL.jpg",
    },
  ];
  let $items = document.querySelector("#items");
  let carrito = [];
  let total = 0;
  let $carrito = document.querySelector("#carrito");
  let $total = document.querySelector("#total");
  let $botonVaciar = document.querySelector("#boton-vaciar");

  
  function renderItems() {
    for (let info of baseDeDatos) {
    
      let miNodo = document.createElement("div");
      miNodo.classList.add("card", "col-sm-4");
     
      let miNodoCardBody = document.createElement("div");
      miNodoCardBody.classList.add("card-body");
     
      let miNodoTitle = document.createElement("h5");
      miNodoTitle.classList.add("card-title");
      miNodoTitle.textContent = info["nombre"];
    
      let miNodoImagen = document.createElement("img");
      miNodoImagen.classList.add("img-fluid");
      miNodoImagen.setAttribute("src", info["imagen"]);
   
      let miNodoPrecio = document.createElement("p");
      miNodoPrecio.classList.add("card-text");
      miNodoPrecio.textContent = info["precio"] + "$";
     
      let miNodoBoton = document.createElement("button");
      miNodoBoton.classList.add("btn", "btn-primary");
      miNodoBoton.textContent = "+";
      miNodoBoton.setAttribute("marcador", info["id"]);
      miNodoBoton.addEventListener("click", anyadirCarrito);
     
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      $items.appendChild(miNodo);
    }
  }

  function anyadirCarrito() {

    carrito.push(this.getAttribute("marcador"));
   
    calcularTotal();
   
    renderizarCarrito();
  }

  function renderizarCarrito() {
    
    $carrito.textContent = "";
   
    let carritoSinDuplicados = [...new Set(carrito)];
 
    carritoSinDuplicados.forEach(function (item, indice) {
      
      let miItem = baseDeDatos.filter(function (itemBaseDatos) {
        return itemBaseDatos["id"] == item;
      });
      
      let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
        return itemId === item ? (total += 1) : total;
      }, 0);
     
      let miNodo = document.createElement("li");
      miNodo.classList.add("list-group-item", "text-right", "mx-2");
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]["nombre"]} - ${miItem[0]["precio"]}$`;
      
      let miBoton = document.createElement("button");
      miBoton.classList.add("btn", "btn-danger", "mx-5");
      miBoton.textContent = "X";
      miBoton.style.marginLeft = "1rem";
      miBoton.setAttribute("item", item);
      miBoton.addEventListener("click", borrarItemCarrito);
    
      miNodo.appendChild(miBoton);
      $carrito.appendChild(miNodo);
    });
  }

  function borrarItemCarrito() {
 
  
    let id = this.getAttribute("item");
  
    carrito = carrito.filter(function (carritoId) {
      return carritoId !== id;
    });
  
    renderizarCarrito();
   
    calcularTotal();
  }

  function calcularTotal() {
  
    total = 0;
   
    for (let item of carrito) {
     
      let miItem = baseDeDatos.filter(function (itemBaseDatos) {
        return itemBaseDatos["id"] == item;
      });
      total = total + miItem[0]["precio"];
    }
   
    let totalDosDecimales = total.toFixed(2);
  
    $total.textContent = totalDosDecimales;
  }

  function vaciarCarrito() {
   
    carrito = [];
 
  
    dataCarrito();

  }

  function dataCarrito(){

    console.log("ASFDADFS",  $carrito.childNodes)
    console.log("ASFDADFS",  $carrito.childNodes.length)

    for(let i=0; i<$carrito.childNodes.length; i++){
        const text =   $carrito.childNodes[i].innerText;
        const description = text.substring(0, text.indexOf('-'))
        const price = text.substring(text.indexOf('-'), text.legth)
    
        const quantity = description.substring(0, 1).trim();
    
        const product = description.substring(text.indexOf('x') + 1, description.length).trim();
        const priceClean = price.substring(1, price.length -2).trim();

        console.groupCollapsed();
        console.log("A", description)
        console.log("B", price)
    
        console.log("CANTIDAD", quantity)
    
        console.log("PRODUCTO", product)
        console.log("PRECIO", priceClean)
        console.groupEnd();
    
        writeCompra(product, priceClean, quantity)

    }
    

  }

 
  $botonVaciar.addEventListener("click", vaciarCarrito);

 
  renderItems();
};
