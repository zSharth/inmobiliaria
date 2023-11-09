const propiedadesVenta = [
  {
    nombre: "Apartamento con piscina",
    src: "./assets/images/imagen_7.jpg",
    descripcion:
      "Este hermoso apartamento ofrece piscina, bar entre otros detalles",
    ubicacion: "Britsh Columbia, CA, 250",
    habitaciones: 3,
    baños: 2,
    costo: 4000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de 2 pisos",
    src: "./assets/images/imagen_8.jpg",
    descripcion: "Esta propiedad está bubicada en un sitio muy tranquilo",
    ubicacion: "Fuente del Gallo 90",
    habitaciones: 2,
    baños: 2,
    costo: 6000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casas en avenida",
    src: "./assets/images/imagen_9.jpg",
    descripcion: "Hermosas casas ubicadas centricamente",
    ubicacion: "4654 Palmer Road",
    habitaciones: 3,
    baños: 2,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de 2 pisos",
    src: "./assets/images/imagen_10.jpg",
    descripcion: "Apartamento ubicado en barrio residencial",
    ubicacion: "2564 Levy Court",
    habitaciones: 4,
    baños: 2,
    costo: 4700,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio NuevaVida",
    src: "./assets/images/imagen_11.jpg",
    descripcion: "Apartamento y casas ubicadas en condominio",
    ubicacion: "Britsh Columbia, CA, 250",
    habitaciones: 3,
    baños: 2,
    costo: 3800,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio NuevaEra",
    src: "./assets/images/imagen_12.jpg",
    descripcion: "Casas ubicadas en condominio (estacionamientos incluídos)",
    ubicacion: "2505 Duncan Avenue",
    habitaciones: 3,
    baños: 4,
    costo: 7000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa con amplio estacionamiento",
    src: "./assets/images/imagen_13.jpg",
    descripcion: "Esta casa tiene espacio para aparcar hasta 4 vehículos",
    ubicacion: "546 Reynolds Alley",
    habitaciones: 4,
    baños: 2,
    costo: 6000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casas acogedoras en el centro de la ciudad",
    src: "./assets/images/imagen_14.jpg",
    descripcion: "Casas con hasta 2 pisos para familias pequeñas",
    ubicacion: "Britsh Columbia, CA, 250",
    habitaciones: 2,
    baños: 1,
    costo: 3000,
    smoke: true,
    pets: false,
  },
];
let cardsContainer = document.getElementById("section0");
let template = "";
let smoke = "";
let pets = "";
let contadorVentas = 0;
for (let propiedad of propiedadesVenta) {
  contadorVentas++;
  if (contadorVentas <= 3) {
    if (propiedad.smoke) {
      smoke = `<img src="./assets/images/smoking_rooms_FILL1_wght400_GRAD0_opsz24.svg" alt="" class="card__icon card__icon--smooking">
               <span class="card__inportant__info__text card__inportant__info__text--smooking">Se permite fumar</span>`;
    } else {
      smoke = `<img src="./assets/images/cigarette.svg" alt="" class="card__icon card__icon--no-smooking">
               <span class="card__inportant__info__text card__inportant__info__text--no-smooking">No se permite fumar</span>`;
    }
    if (propiedad["pets"]) {
      pets = `<img src="./assets/images/pets.svg" alt="" class="card__icon">
              <span class="card__inportant__info__text card__inportant__info__text--pets">Se permiten mascotas</span>`;
    } else {
      pets = `<img src="./assets/images/block.svg" alt="" class="card__icon">
              <span class="card__inportant__info__text card__inportant__info__text--no-pets">No se permiten mascotas</span>`;
    }

    template += `
    <div class="card__body__container">
      <img src="${propiedad.src}" alt="" class="card__img">
      <div class="card__body">
          <h1 class="card__title">${propiedad.nombre}</h1>
          <p class="card__description">${propiedad.descripcion}</p>
          <div class="card__direction">
              <img src="./assets/images/location.svg" alt="" class="card__icon card__icon--location">
              <p class="card__text">${propiedad.ubicacion}</p>
          </div>
          <div class="card__info">
              <img src="./assets/images/bed.svg" alt="" class="card__icon card__icon--bed">
              <span class="card__info__text">${propiedad.habitaciones} Habitaciones</span>
              <img src="./assets/images/bath.svg" alt="" class="card__icon card__icon--bath">
              <span class="card__info__text">${propiedad.baños} Baños</span>
          </div>
          <p class="card__price">Precio: $${propiedad.costo}</p>
          <div class="card__inportant__info__container">
              <div class="card__inportant__info" id="info1">${smoke}</div>
              <div class="card__inportant__info" id="info2">${pets}</div>
          </div>
      </div>
    </div>
    `;
  }
}
cardsContainer.innerHTML = template;

const propiedadesAlquier = [
  {
    nombre: "Casa pequeña en bosque",
    src: "./assets/images/imagen_15.jpg",
    descripcion: "Casa ubicada en un bosque al sur de la ciudad",
    ubicacion: "2869 Williams Mine Road",
    habitaciones: 1,
    baños: 1,
    costo: 1000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa a orillas del mar",
    src: "./assets/images/imagen_16.jpg",
    descripcion: "Esta propiedad es perfecta para vacaciones en familia",
    ubicacion: "3896 Mulberry Lane",
    habitaciones: 4,
    baños: 2,
    costo: 5500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Departamentos en el centro de la ciudad",
    src: "./assets/images/imagen_17.jpg",
    descripcion: "Amplios departamentos full equipados",
    ubicacion: "1394 Weekley Street",
    habitaciones: 2,
    baños: 1,
    costo: 3500,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa de 2 pisos",
    src: "./assets/images/imagen_18.jpg",
    descripcion: "Casa ubicada cerca de centros comerciales",
    ubicacion: "2177 Spring Haven Trail",
    habitaciones: 4,
    baños: 2,
    costo: 5600,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa en barrio residencial",
    src: "./assets/images/imagen_19.jpg",
    descripcion: "Casa ubicada en tranquilo barrio a orillas de la ciudad",
    ubicacion: "418 Court Street",
    habitaciones: 4,
    baños: 2,
    costo: 4100,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa para vacaciones en pareja",
    src: "./assets/images/imagen_20.jpg",
    descripcion: "Casa full euipada para parejas jovenes",
    ubicacion: "225 Raver Croft Drive",
    habitaciones: 2,
    baños: 1,
    costo: 3000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Tranquila casa para toda una temporada",
    src: "./assets/images/imagen_21.jpg",
    descripcion: "Esta casa está disponible por todo el verano",
    ubicacion: "1910 Terry Lane",
    habitaciones: 4,
    baños: 2,
    costo: 4000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Amplia casa con piscina y bar",
    src: "./assets/images/imagen_22.jpg",
    descripcion: "Casa equipada para grandes familias",
    ubicacion: "996 Hall Valley Drive",
    habitaciones: 4,
    baños: 2,
    costo: 3000,
    smoke: true,
    pets: false,
  },
];

let cardsContainer1 = document.getElementById("section0.5");
let smoke1 = "";
let pets1 = "";
template = "";
let contadorAlquiler = 0;
for (let propiedad of propiedadesAlquier) {
  contadorAlquiler++;
  if (contadorAlquiler <= 3) {
    if (propiedad.smoke) {
      smoke1 = `<img src="./assets/images/smoking_rooms_FILL1_wght400_GRAD0_opsz24.svg" alt="" class="card__icon card__icon--smooking">
                         <span class="card__inportant__info__text card__inportant__info__text--smooking">Se permite fumar</span>`;
    } else {
      smoke1 = `<img src="./assets/images/cigarette.svg" alt="" class="card__icon card__icon--no-smooking">
                         <span class="card__inportant__info__text card__inportant__info__text--no-smooking">No se permite fumar</span>`;
    }
    if (propiedad.pets) {
      pets1 = `<img src="./assets/images/pets.svg" alt="" class="card__icon">
                        <span class="card__inportant__info__text card__inportant__info__text--pets">Se permiten mascotas</span>`;
    } else {
      pets1 = `<img src="./assets/images/block.svg" alt="" class="card__icon">
                        <span class="card__inportant__info__text card__inportant__info__text--no-pets">No se permiten mascotas</span>`;
    }

    template += `
              <div class="card__body__container">
                <img src="${propiedad.src}" alt="" class="card__img">
                <div class="card__body">
                    <h1 class="card__title">${propiedad.nombre}</h1>
                    <p class="card__description">${propiedad.descripcion}</p>
                    <div class="card__direction">
                        <img src="./assets/images/location.svg" alt="" class="card__icon card__icon--location">
                        <p class="card__text">${propiedad.ubicacion}</p>
                    </div>
                    <div class="card__info">
                        <img src="./assets/images/bed.svg" alt="" class="card__icon card__icon--bed">
                        <span class="card__info__text">${propiedad.habitaciones} Habitaciones</span>
                        <img src="./assets/images/bath.svg" alt="" class="card__icon card__icon--bath">
                        <span class="card__info__text">${propiedad.baños} Baños</span>
                    </div>
                    <p class="card__price">Precio: $${propiedad.costo}</p>
                    <div class="card__inportant__info__container">
                        <div class="card__inportant__info" id="info1">${smoke1}</div>
                        <div class="card__inportant__info" id="info2">${pets1}</div>
                    </div>
                </div>
              </div>
              `;
  }
}
cardsContainer1.innerHTML = template;
