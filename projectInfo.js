const projects = [
  //= == Card 1===//
  {
    image: './resource/muvi-webapp.png',
    title: 'Movie Web App With TMBD API',
    technologies: ['Webpack', 'Sass', 'JavaScript', 'Jest'],
    description:
      'This project is a web app about Movies, we fetched all data from TMBD API, Users can like movies, search movies and also leave a comment. All data are recorded in the involvement API and also displayed on the screen in real time.',
    liveVersion: 'https://killy10o10.github.io/Muvi-WebApp/',
    sourceLink: 'https://github.com/killy10o10/Muvi-WebApp',
    buttonID: 'button-1',
  },
  {
    image: './resource/610music.png',
    title: '610Music',
    technologies: ['React', 'Gatsby', 'JavaScript', 'Sass'],
    description:
      'This is the official website of 610Music. A record label based in California. This website makes use of the Spotify API and user can stream songs of Artists on the 610Music label. It was built with Gatsby.JS',
    liveVersion: 'https://www.610music.com/artists',
    sourceLink: 'https://github.com/killy10o10/610Music',
    buttonID: 'button-4',
  },
  //= == Card 2===//
  {
    image: './resource/joyful-learning.png',
    title: 'Joyful Learning International',
    technologies: ['CSS', 'Sass', 'HTML', 'JavaScript'],
    description:
      'This is a website for kids school. It has different pages for various sections and a responsive layout.',
    liveVersion: 'https://killydev.me/joyful-learning/',
    sourceLink: 'https://github.com/killy10o10/joyful-learning',
    buttonID: 'button-2',
  },
  //= == Card 3===//
  {
    image: './resource/task-list.png',
    title: 'Task List App',
    technologies: ['Sass', 'HTML', 'JavaScript', 'webpack'],
    description:
      'This is a simple HTML /CSS and JavaScript project on list of To Do tasks. This simple web page is built using webpack and served by a webpack dev server',
    liveVersion: 'https://killy10o10.github.io/task-list/',
    sourceLink: 'https://github.com/killy10o10/task-list',
    buttonID: 'button-3',
  },
  //= == Card 4===//
  //= == Card 5===//
  {
    image: './resource/vanlife.png',
    title: 'VanLife',
    technologies: ['Firebase', 'React', 'Framer Motion', 'Sass'],
    description:
      'This is a rental site for renting out decked camper vans.',
    liveVersion: 'https://killy-vanlife.netlify.app/',
    sourceLink: 'https://github.com/killy10o10/vanLife',
    buttonID: 'button-5',
  },
  //= == Card 6===//
  {
    image: './resource/react-country-gecko.png',
    title: 'React Country Gecko',
    technologies: ['React', 'Redux', 'JavaScript', 'API'],
    description: `This is a mobile web app which uses actual live data from restCountries API and populates the homepage with a list of countries, their names, flag, population and capital city. It has a search feature where users can search for any country from the API and then get more details of the country on a new page when selected.`,
    liveVersion: 'https://react-country-gecko.netlify.app/',
    sourceLink: 'https://github.com/killy10o10/react-country-gecko',
    buttonID: 'button-6',
  },
];

//= ==Generating cards in projects section dynamically===//
const projectSection = document.querySelector('#projects');
const projectCards = projects
  .map(
    (project) => `<div class="works">
<div class="thumbnail">
  <img src="${project.image}" alt="">
</div>
<div class="work-info">
  <h4 class="heading-2">${project.title}</h4>
  <ul class="flex-list">
  ${project.technologies.map((technology) => `<li>${technology}</li>`).join('')}
  </ul>
  <button type="button" class="button modal-button" id="${
    project.buttonID
  }">See Project</button>
</div>
</div>`
  )
  .join('');
projectSection.innerHTML += projectCards;
//= ==Generating cards in projects section dynamically End===//

//= == Modal Template String===//
const cardModal = projects.map(
  (card) => ` <div class="project-card-bg">
    <div class="project-card">
      <button type="button" class="close-project"><i class="fa-solid fa-xmark"></i></button>
      <div class="project-thumbnail">
        <img src="${card.image}" alt="">
      </div>
      <div class="project-info">
        <div class="heading-tools">
          <h4 class="project-card-heading">${card.title}</h4>
          <ul class="flex-list">
           ${card.technologies
             .map((technology) => `<li>${technology}</li>`)
             .join('')}
          </ul>
        </div>
        <div class="project-buttons">
          <a  class="button project-button" href="${card.liveVersion}" target="_blank">See Live
            <img src="./resource/see-live-icon.svg" alt="">
          </a>
          <a class="button project-button" href="${card.sourceLink}" target="_blank">See Source
            <img src="./resource/github_icon.svg" alt="">
          </a>
      </div>
      </div>
      <p class="project-description">${card.description}</p>
    </div>
  </div>`
);

const buttons = Array.from(document.querySelectorAll('.modal-button'));
const modalDiv = document.querySelector('.modal-div');

// === Function to close Modal (Pop-Up) ===//
function closeProject() {
  const closeBtn = document.querySelector('.close-project');
  const modalContainer = document.querySelector('.project-card-bg');
  closeBtn.addEventListener('click', () => {
    modalContainer.remove();
  });
}
// ===check for Each button and show its relative Modal===//
for (let i = 0; i < buttons.length; i += 1) {
  if (i % 2 === 0) {
    buttons[i].addEventListener('click', () => {
      modalDiv.innerHTML += cardModal[i];
      closeProject();
    });
  } else {
    buttons[i].addEventListener('click', () => {
      modalDiv.innerHTML += cardModal[i];
      closeProject();
    });
  }
}

// ===Form Validation ===//
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const userName = document.querySelector('#name');
const message = document.querySelector('#text');
const errorMessage = document.querySelector('#errorMessage');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.classList.toggle('turn-on');
  }
});
// ===Local Storage ===
function localStorageData() {
  form.addEventListener('input', () => {
    const userData = {
      user_name: userName.value,
      user_email: email.value,
      user_message: message.value,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  });
}

localStorageData();

function getLocalStorage() {
  const getData = JSON.parse(localStorage.getItem('userData'));
  userName.value = getData.user_name;
  email.value = getData.user_email;
  message.value = getData.user_message;
}

getLocalStorage();
