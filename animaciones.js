function lanzarAnimacion() {
  const tipoConfigurado = CONFIG.animacion || "confeti";
  const tipoIcono = obtenerTipoIcono(tipoConfigurado);
  const icono = ICONOS[tipoIcono];

  if (!icono) {
    console.warn(`Animación no encontrada: ${tipoConfigurado}`);
    return;
  }

  const totalElementos = obtenerCantidad(tipoConfigurado);

  for (let i = 0; i < totalElementos; i++) {
    crearElementoAnimado(tipoConfigurado, icono);
  }
}

function obtenerTipoIcono(tipo) {
  const equivalencias = {
    flores: "flor",
    mariposas: "mariposa",
    corazones: "corazon",
    anillos: "anillos",
    palomas: "paloma",
    birretes: "birrete",
    estrellas: "estrella",
    hojas: "hoja",
    globos: "globo",
    confeti: "confeti",
    ositos: "osito",
    copos: "copo",
    arbolitos: "arbolito"
  };

  return equivalencias[tipo] || tipo;
}

function obtenerCantidad(tipo) {
  const cantidades = {
    confeti: 35,
    flores: 22,
    mariposas: 18,
    corazones: 22,
    anillos: 16,
    palomas: 5,
    birretes: 18,
    estrellas: 24,
    hojas: 22,
    globos: 15,
    ositos: 14,
    copos: 28,
    arbolitos: 16
  };

  return cantidades[tipo] || 20;
}

function crearElementoAnimado(tipo, icono) {
  const elemento = document.createElement("div");

  elemento.classList.add(
    "animacion-elemento",
    obtenerClaseMovimiento(tipo),
    obtenerClaseTamano()
  );

  elemento.innerHTML = icono;
  elemento.style.animationDelay = `${Math.random() * 1.2}s`;
  elemento.style.animationDuration = `${3.5 + Math.random() * 2}s`;

  if (tipo === "palomas") {
    elemento.style.left = "-80px";
    elemento.style.top = `${10 + Math.random() * 55}%`;
  } else {
    elemento.style.left = `${Math.random() * 95}%`;
  }

  if (debeCambiarColor(tipo)) {
    elemento.style.color = CONFIG.colorPrincipal;
  }

  document.body.appendChild(elemento);

  setTimeout(() => {
    elemento.remove();
  }, 7500);
}

function obtenerClaseMovimiento(tipo) {
  if (tipo === "mariposas") {
    return "animacion-mariposa";
  }

  if (tipo === "globos") {
    return "animacion-globo";
  }

  if (tipo === "palomas") {
    return "animacion-paloma";
  }

  return "animacion-caer";
}

function obtenerClaseTamano() {
  const opciones = [
    "animacion-pequena",
    "animacion-mediana",
    "animacion-grande"
  ];

  return opciones[Math.floor(Math.random() * opciones.length)];
}

function debeCambiarColor(tipo) {
  const animacionesConColor = [
    "flores",
    "mariposas",
    "corazones",
    "estrellas",
    "globos",
    "confeti"
  ];

  return animacionesConColor.includes(tipo);
}
