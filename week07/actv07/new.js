/*const caminata = document.getElementById('caminata');
const date = document.getElementById('date');
const comment = document.getElementById('comment');
const btn = document.getElementById('btn');
const storage = document.getElementById('storage');

btn.onclick = function() {
    const key = caminata.value;
    const value = date.value;
    const write = comment.value;

    console.log(key);
    console.log(value);
    console.log(write);

    if (key & value & write) {
        localStorage.setItem(key, value, write);
        location.reload();
    }

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const write = localStorage.getItem(key);

        storage.innerHTML = ` ${key}: ${value}: ${write}`;
    }

};*/

(function() {
    // Variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        tareaInput1 = document.getElementById("tareaInput1"),
        tareaInput2 = document.getElementById("tareaInput2"),
        btnNuevaTarea = document.getElementById("btn-agregar");
    btnNuevaTarea1 = document.getElementById("btn-agregar");
    btnNuevaTarea2 = document.getElementById("btn-agregar");

    // Funciones
    var agregarTarea = function() {
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("ul"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Add Valid");
            tareaInput.className = "error";
            return false;
        }


        // Agregamos el contenido al enlace
        enlace.appendChild(contenido);
        // Le establecemos un atributo href
        enlace.setAttribute("href", "#");
        // Agrergamos el enlace (a) a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        // Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);

        tareaInput.value = "";

        for (var i = 0; i <= lista.children.length - 1; i++) {
            lista.children[i].addEventListener("click", function() {
                this.parentNode.removeChild(this);
            });
        }

    };

    var agregarTarea1 = function() {
        var tarea1 = tareaInput1.value,
            nuevaTarea1 = document.createElement("ul"),
            enlace1 = document.createElement("a"),
            contenido1 = document.createTextNode(tarea1);

        if (tarea1 === "") {
            tareaInput1.setAttribute("placeholder", "Insert Valid Date");
            tareaInput1.className = "error";
            return false;
        }

        // Agregamos el contenido al enlace
        enlace1.appendChild(contenido1);
        // Le establecemos un atributo href
        enlace1.setAttribute("href", "#");
        // Agrergamos el enlace (a) a la nueva tarea (li)
        nuevaTarea1.appendChild(enlace1);
        // Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea1);

        tareaInput1.value = "";

        for (var i = 0; i <= lista.children.length - 1; i++) {
            lista.children[i].addEventListener("click", function() {
                this.parentNode.removeChild(this);
            });
        }

    };

    var agregarTarea2 = function() {
        var tarea2 = tareaInput2.value,
            nuevaTarea2 = document.createElement("ul"),
            enlace2 = document.createElement("a"),
            contenido2 = document.createTextNode(tarea2);

        if (tarea2 === "") {
            tareaInput2.setAttribute("placeholder", "Insert Valid Comments");
            tareaInput2.className = "error";
            return false;
        }


        // Agregamos el contenido al enlace
        enlace2.appendChild(contenido2);
        // Le establecemos un atributo href
        enlace2.setAttribute("href", "#");
        // Agrergamos el enlace (a) a la nueva tarea (li)
        nuevaTarea2.appendChild(enlace2);
        // Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea2);

        tareaInput2.value = "";

        for (var i = 0; i <= lista.children.length - 1; i++) {
            lista.children[i].addEventListener("click", function() {
                this.parentNode.removeChild(this);
            });
        }

    };

    var comprobarInput = function() {
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Insert Hike");
    };

    var comprobarInput1 = function() {
        tareaInput1.className = "";
        tareaInput1.setAttribute("placeholder", "Date");
    };

    var comprobarInput2 = function() {
        tareaInput2.className = "";
        tareaInput2.setAttribute("placeholder", "Add Your Comments");
    };

    var eleminarTarea = function() {
        this.parentNode.removeChild(this);
    };

    // Eventos

    // Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);
    btnNuevaTarea1.addEventListener("click", agregarTarea1);
    btnNuevaTarea2.addEventListener("click", agregarTarea2);

    // Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);
    tareaInput1.addEventListener("click", comprobarInput1);
    tareaInput2.addEventListener("click", comprobarInput2);

    // Borrando Elementos de la lista
    for (var i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", eleminarTarea);
    }
}());