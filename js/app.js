class Persona {
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #anioNacimiento;

    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#anioNacimiento = anioNacimiento;
    }
      get nombre() {
        return this.#nombre;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }
    get edad() {
        return this.#edad;
    }
    set edad(edad) {
        this.#edad = edad;
    }
    get dni() {
        return this.#dni;
    }
    set dni(dni) {
        this.#dni = dni;
    }
    get sexo() {
        return this.#sexo;
    }
    set sexo(sexo) {
        this.#sexo = sexo;
    }
    get peso() {
        return this.#peso;
    }
    set peso(peso) {
        this.#peso = peso;
    }
    get altura() {
        return this.#altura;
    }
    set altura(altura) {
        this.#altura = altura;
    }
    get anioNacimiento() {
        return this.#anioNacimiento;
    }
    set anioNacimiento(anioNacimiento) {
        this.#anioNacimiento = anioNacimiento;
    }
    //metodos
    mostrarGeneracion() {
        let generacion = '';
        let rasgoCaracteristico = '';

        if (this.#anioNacimiento >= 1994 && this.#anioNacimiento <= 2010) {
            generacion = 'Generación Z';
            rasgoCaracteristico = 'Irreverencia';
        } else if (this.#anioNacimiento >= 1981 && this.#anioNacimiento <= 1993) {
            generacion = 'Generación Y (Millennials)';
            rasgoCaracteristico = 'Frustración';
        } else if (this.#anioNacimiento >= 1969 && this.#anioNacimiento <= 1980) {
            generacion = 'Generación X';
            rasgoCaracteristico = 'Obsesión por el éxito';
        } else if (this.#anioNacimiento >= 1949 && this.#anioNacimiento <= 1968) {
            generacion = 'Baby Boom';
            rasgoCaracteristico = 'Ambición';
        } else if (this.#anioNacimiento >= 1930 && this.#anioNacimiento <= 1948) {
            generacion = 'Silent Generation';
            rasgoCaracteristico = 'Austeridad';
        } else {
            generacion = 'Generación no identificada';
            rasgoCaracteristico = 'Desconocido';
        }

        return `Perteneces a la ${generacion} y tu rasgo característico es: ${rasgoCaracteristico}.`;
    }

    // Método para ver si la persona es mayor de edad
    esMayorDeEdad() {
        return this.#edad >= 18 ? "Eres mayor de edad." : "No eres mayor de edad.";
    }

    // Método para mostrar los datos de la persona
    mostrarDatos() {
        return `
            Nombre: ${this.#nombre}
            Edad: ${this.#edad}
            DNI: ${this.#dni}
            Sexo: ${this.#sexo}
            Peso: ${this.#peso} kg
            Altura: ${this.#altura} m
            Año de Nacimiento: ${this.#anioNacimiento}
        `;
    }
}

// codigo para la web
let persona;

document.getElementById('crearPersona').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const anioNacimiento = parseInt(document.getElementById('anioNacimiento').value);

    persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
    alert('¡Persona creada exitosamente!');
});

document.getElementById('mostrarGeneracion').addEventListener('click', function() {
    if (persona) {
        alert(persona.mostrarGeneracion());
    } else {
        alert('Primero debes crear una persona.');
    }
});

document.getElementById('esMayor').addEventListener('click', function() {
    if (persona) {
        alert(persona.esMayorDeEdad());
    } else {
        alert('Primero debes crear una persona.');
    }
});

document.getElementById('mostrarDatos').addEventListener('click', function() {
    if (persona) {
        alert(persona.mostrarDatos());
    } else {
        alert('Primero debes crear una persona.');
    }
});

