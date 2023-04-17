import './style.css';
import { STAR_WARS_CHARACTERS } from './mock-data';

const container = document.querySelector('#app');
const searchInput = document.querySelector('#searchInput');
const jediBtn = document.querySelector('#jediBtn');
const rebelBtn = document.querySelector('#rebelBtn');
const empireBtn = document.querySelector('#empireBtn');
const republicBtn = document.querySelector('#republicBtn');
const allBtn = document.querySelector('#allBtn');
const themeBtn = document.querySelector('#themeBtn');
const womenBtn = document.querySelector('#women');
const shortPeopleBtn = document.querySelector('#shortPeople');
const mediumPeopleBtn = document.querySelector('#mediumPeople');
const tallPeopleBtn = document.querySelector('#tallPeople');
const checkDroids = document.querySelector('#check');

//_____ Imprime las cartas___________________________________________
const printCharacters = (list) => {
  container.innerHTML = '';

  list.forEach((item) => {
    const figure = document.createElement('figure');
    figure.innerHTML = `
        <img src=${item.image} alt='${item.name}' />
        <div class="content-image">
            <h2><span class="color-name" id="${item.name
              .replace(' ', '-')
              .toLowerCase()}">${item.name}</span></h2>
            <h3><span class="text-color">Raza:</span> <span class="${item.race.toLowerCase()}">${
      item.race
    }</span></h3>
            <h4><span class="text-color">Origen:</span> ${item.origin}</h4>
            <h4><span class="text-color">Afiliación:</span> ${
              item.affiliation
            }</h4>
            <h4><span class="text-color">Género:</span> ${item.gender}</h4>
            <h4><span class="text-color">Color de pelo:</span> ${item.hair}</h4>
            <h4><span class="text-color">Altura:</span> ${item.height} cm</h4>
        </div>
    `;
    figure.classList.add(item.affiliation.replace(' ', '-').toLowerCase());

    container.appendChild(figure);
  });
};

//-------------------------------------------------------------//

//_____ Filtra y limpia los datos y los manda a imprimir_______________
const filterCharacters = (list, keyword) => {
  const filteredCharacters = list.filter((item) => {
    return item.name
      .trim()
      .toLowerCase()
      .includes(keyword.trim().toLowerCase());
  });
  printCharacters(filteredCharacters);
};

//_____ Recoge los datos del input y los de la base de datos y los
//      envía a ser filtrados y limpiados por el filtro__________________
searchInput.addEventListener('input', (event) => {
  const searchEvent = event.target.value;
  filterCharacters(STAR_WARS_CHARACTERS, searchEvent);
});

//---------------------------------------------------------------//

//_____ Filtra los personajes por afiliación mediante botones____________
const filterAffiliation = (list, keyword) => {
  const filteredAffiliation = list.filter((item) => {
    return item.affiliation === keyword;
  });
  if (!keyword) {
    printCharacters(STAR_WARS_CHARACTERS);
  } else {
    printCharacters(filteredAffiliation);
  }
};

jediBtn.addEventListener('click', () => {
  filterAffiliation(STAR_WARS_CHARACTERS, 'Jedi Order');
});

rebelBtn.addEventListener('click', () =>
  filterAffiliation(STAR_WARS_CHARACTERS, 'Rebel Alliance')
);

empireBtn.addEventListener('click', () =>
  filterAffiliation(STAR_WARS_CHARACTERS, 'Galactic Empire')
);

republicBtn.addEventListener('click', () =>
  filterAffiliation(STAR_WARS_CHARACTERS, 'Galactic Republic')
);

allBtn.addEventListener('click', () => filterAffiliation(STAR_WARS_CHARACTERS));

//----------------------------------------------------------------//

//_____Filtra solo a las mujeres___________________________________
const filterWomen = (list) => {
  const filteredWomen = list.filter((item) => {
    return item.gender === 'Female';
  });
  console.log('Mujeres:', filteredWomen);
  printCharacters(filteredWomen);
};

womenBtn.addEventListener('click', () => {
  filterWomen(STAR_WARS_CHARACTERS);
});

//_____Filtra solo a las droides___________________________________
const filterDroids = (list) => {
  const filteredDroids = list.filter((droid) => droid.race === 'Droid');
  printCharacters(filteredDroids);
};

checkDroids.addEventListener('click', () => {
  filterDroids(STAR_WARS_CHARACTERS);
});

//----------------------------------------------------------------//

//_____ Filtra a los personajes menores de 100 cm___________________
const getShortPeople = (list) => {
  const filteredShortPeople = list.filter((item) => {
    return item.height < 100;
  });
  printCharacters(filteredShortPeople);
};

shortPeopleBtn.addEventListener('click', () => {
  getShortPeople(STAR_WARS_CHARACTERS);
});

//_____ Filtra a los personajes entre 100 y 180 cm___________________
const getMediumPeople = (list) => {
  const filteredMediumPeople = list.filter((item) => {
    return item.height >= 100 && item.height <= 180;
  });
  printCharacters(filteredMediumPeople);
};

mediumPeopleBtn.addEventListener('click', () => {
  getMediumPeople(STAR_WARS_CHARACTERS);
});

//_____ Filtra a los personajes mayores de 180 cm___________________
const getTallPeople = (list) => {
  const filteredTallPeople = list.filter((item) => item.height > 180);

  printCharacters(filteredTallPeople);
};

tallPeopleBtn.addEventListener('click', () =>
  getTallPeople(STAR_WARS_CHARACTERS)
);

//-----------------------------------------------------------------//

//_____ Tema claro__________________________________________________
// ---- Usando imágenes ----------//
// themeBtn.addEventListener('click', () => {
//   document.body.classList.toggle('light');
//   if (
//     themeBtn.innerHTML ===
//     '<img src="./public/src/images/tik-tok-black.svg" width="40px" height="40px" alt="tiktok">'
//   ) {
//     themeBtn.innerHTML =
//       '<img src="./public/src/images/tik-tok-white.svg" width="40px" height="40px" alt="tiktok">';
//   } else {
//     themeBtn.innerHTML =
//       '<img src="./public/src/images/tik-tok-black.svg" width="40px" height="40px" alt="tiktok">';
//   }
// });

// ---- Usando texto ----------//

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  if (themeBtn.textContent === '☀️') {
    themeBtn.textContent = '🌚';
  } else {
    themeBtn.textContent = '☀️';
  }
});

//-----------------------------------------------------------------//

//_____ Añadimos un footer al DOM mediante JavaScritp_______________
const footer = document.createElement('footer');
const h2 = document.createElement('h2');
h2.textContent = 'Created with love 💕by MAYO';
document.body.appendChild(footer);
footer.append(h2);

printCharacters(STAR_WARS_CHARACTERS);
