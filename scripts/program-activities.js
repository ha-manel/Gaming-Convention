const programDiv = document.querySelector('#activities-div');

const conventionActivities = [
  {
    img: '../images/lecture.png',
    title: 'Lecture',
    description: 'Listen to speakers from various countries and from different backgrounds talk about their latest experiences and creations.',
  },
  {
    img: '../images/stage.png',
    title: 'GC Exhibition',
    description: 'Appreciate various creations inluding new releases of games of various types.',
  },
  {
    img: '../images/forum.png',
    title: 'Forum',
    description: 'Have the time to share your thoughts and opinions with experts for each topic',
  },
  {
    img: '../images/workshop.png',
    title: 'Workshop',
    description: 'Get a chance to test new games and experience game designing in our workshops',
  },
  {
    img: '../images/ignite.png',
    title: 'GC Ignite',
    description: 'Get opportunities to network with the experts of the industry and to meet fellow gamers from all around the world',
  },
];

conventionActivities.forEach((activity) => {
  const activityDiv = document.createElement('div');
  activityDiv.id = 'activity';
  activityDiv.innerHTML = `<img src="${activity.img}" alt=" "><h3>${activity.title}</h3><p>${activity.description}</p>`;

  programDiv.appendChild(activityDiv);
});