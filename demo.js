
const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

// section1
const itemData1 = {
  "the-prestige": {
    "text": `<h2>The-Prestige</h2>Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button> `,
    "img": "images/films/drama/the-prestige/large.webp"
  },
  "fight-club": {
    "text": `<h2>Fight Club</h2>Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/drama/fight-club/large.webp"
  },
  "kings-speech": {
    "text": `<h2>Kings Speech</h2>King George VI tries to overcome his stammering problem with the help of speech therapist Lionel Logue and makes himself worthy enough to lead his country through World War II.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/drama/kings-speech/large.webp"
  },
  "the-revenant": {
    "text": `<h2>The Revenant</h2>Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion, who betrayed him.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/drama/the-revenant/large.webp"
  },
  "the-social-network": {
    "text": `<h2>The Social Network</h2>Mark Zuckerberg creates a social networking site, Facebook, with the help of his friend Eduardo Saverin. But soon, a string of lies tears their relationship apart even as Facebook connects people.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/drama/the-social-network/large.webp"
  },
  
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

const player1 = document.querySelectorAll(".player-item1 a");
const playerContainer1 = document.querySelectorAll("#player1 .player-item1");


function handleClick1(e){
  const id1 = this.getAttribute('data-href');
  const t1 = itemData1[id1]
  const {text,img} =itemData1[id1];
  document.getElementById('content-text1').innerHTML = text;
  document.getElementById('content-img1').setAttribute('src',img);
  document.getElementById('content-box1').classList.remove('d-none1');
  // for (let index = 0; index < playerContainer.length; index++) {
  //   const element = playerContainer[index];
  //   element.firstElementChild.classList.toggle('active');
  //   element.nextElementSibling.classList.toggle('d-none');
  // }
  this.classList.toggle('active');
  
  
}

player1.forEach(item => item.addEventListener('click', handleClick1));


// section2          


const itemData2 = {
  "a-quiet-place": {
    "text": `<h2>A Quiet Place</h2>The Abbott family must now face the terrors of the outside world as they fight for survival in silence. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/thriller/a-quiet-place/large.webp"
  },
  "black-swam": {
    "text": `<h2>Black Swan</h2>Nina, a ballerina, gets the chance to play the White Swan, Princess Odette. But she finds herself slipping into madness when Thomas, the artistic director, decides that Lily might fit the role better.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/thriller/black-swan/large.webp"
  },
  "joker": {
    "text": `<h2>Joker</h2>Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/thriller/joker/large.webp"
  },
  "nightcrawler": {
    "text": `<h2>Nightcrawler</h2>Louis Bloom, a petty thief, realises that he can make money by capturing photographs of criminal activities and starts resorting to extreme tactics to get them.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/thriller/nightcrawler/large.webp"
  },
  "the-silence-of-the-lambs": {
    "text": `<h2>The silence of the lambs</h2>Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/thriller/the-silence-of-the-lambs/large.webp"
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

const player2 = document.querySelectorAll(".player-item2 a");
const playerContainer2 = document.querySelectorAll("#player2 .player-item2");


function handleClick2(e){
  const id2 = this.getAttribute('data-href');
  const t2 = itemData2[id2]
  const {text,img} =itemData2[id2];
  document.getElementById('content-text2').innerHTML = text;
  document.getElementById('content-img2').setAttribute('src',img);
  document.getElementById('content-box2').classList.remove('d-none2');
  // for (let index = 0; index < playerContainer.length; index++) {
  //   const element = playerContainer[index];
  //   element.firstElementChild.classList.toggle('active');
  //   element.nextElementSibling.classList.toggle('d-none');
  // }
  this.classList.toggle('active');
  
}

player2.forEach(item => item.addEventListener('click', handleClick2));

// section3


const itemData3 = {
  "despicable-me": {
    "text": `<h2>Decpicable Me</h2>Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/children/despicable-me/large.webp"
  },
  "frozen": {
    "text": `<h2>Frozen</h2>Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/children/frozen/large.webp"
  },
  "hotel-transylvania": {
    "text": `<h2>Hotel Transylvania</h2>Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/children/hotel-transylvania/large.webp"
  },
  "spirited-away": {
    "text": `<h2>Spirited away</h2>In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/children/spirited-away/large.webp"
  },
  "up": {
    "text": `<h2>Up</h2>Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/children/up/large.webp"
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

const player3 = document.querySelectorAll(".player-item3 a");
const playerContainer3 = document.querySelectorAll("#player3 .player-item3");


function handleClick3(e){
  const id3 = this.getAttribute('data-href');
  const t3 = itemData3[id3]
  const {text,img} =itemData3[id3];
  document.getElementById('content-text3').innerHTML = text;
  document.getElementById('content-img3').setAttribute('src',img);
  document.getElementById('content-box3').classList.remove('d-none3');
  // for (let index = 0; index < playerContainer.length; index++) {
  //   const element = playerContainer[index];
  //   element.firstElementChild.classList.toggle('active');
  //   element.nextElementSibling.classList.toggle('d-none');
  // }
  this.classList.toggle('active');
  
}

player3.forEach(item => item.addEventListener('click', handleClick3));

// section4

const itemData4 = {
  "a-star-is-born": {
    "text": `<h2>a-star-is-born</h2>After falling in love with struggling artist Ally, Jackson, a musician, coaxes her to follow her dreams, while he battles with alcoholism and his personal demons.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/romance/a-star-is-born/large.webp"
  },
  "blue-valentine": {
    "text": `<h2>Blue valentine</h2>Dean and Cynthia are married with a daughter and their marriage is about to fall apart. Both come from dysfunctional families and struggle to make sense of their relationship.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/romance/blue-valentine/large.webp"
  },
  "la-la-land": {
    "text": `<h2>la la land</h2>Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/romance/la-la-land/large.webp"
  },
  "the-notebook": {
    "text": `<h2>The notebook</h2>Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from Alzheimer's, on a daily basis out of his notebook.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/romance/the-notebook/large.webp"
  },
  "titanic": {
    "text": `<h2>Titanic</h2>Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/romance/titanic/large.webp"
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

const player4 = document.querySelectorAll(".player-item4 a");
const playerContainer4 = document.querySelectorAll("#player4 .player-item4");


function handleClick4(e){
  const id4 = this.getAttribute('data-href');
  const t4 = itemData4[id4]
  const {text,img} =itemData4[id4];
  document.getElementById('content-text4').innerHTML = text;
  document.getElementById('content-img4').setAttribute('src',img);
  document.getElementById('content-box4').classList.remove('d-none4');
  // for (let index = 0; index < playerContainer.length; index++) {
  //   const element = playerContainer[index];
  //   element.firstElementChild.classList.toggle('active');
  //   element.nextElementSibling.classList.toggle('d-none');
  // }
  this.classList.toggle('active');
  
}

player4.forEach(item => item.addEventListener('click', handleClick4));

// section5

const itemData5 = {
  "zodiac": {
    "text": `<h2>Zodiac</h2>After falling in love with struggling artist Ally, Jackson, a musician, coaxes her to follow her dreams, while he battles with alcoholism and his personal demons.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/suspense/zodiac/large.webp"
  },
  "shutter-island": {
    "text": `<h2>shutter island</h2>Dean and Cynthia are married with a daughter and their marriage is about to fall apart. Both come from dysfunctional families and struggle to make sense of their relationship.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/suspense/shutter-island/large.webp"
  },
  "seven": {
    "text": `<h2>Seven</h2>Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/suspense/seven/large.webp"
  },
  "prisoners": {
    "text": `<h2>prisoners</h2>Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from Alzheimer's, on a daily basis out of his notebook.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/suspense/prisoners/large.webp"
  },
"gone-girl": {
    "text": `<h2>Gone Girl</h2>Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.<br><br><button class="btn my-2 my-sm-0 btnsignin" type="submit"> <a href="">Play</a> </button>`,
    "img": "images/films/suspense/gone-girl/large.webp"
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

const player5 = document.querySelectorAll(".player-item5 a");
const playerContainer5 = document.querySelectorAll("#player5 .player-item5");


function handleClick5(e){
  const id5 = this.getAttribute('data-href');
  const t5 = itemData5[id5]
  const {text,img} =itemData5[id5];
  document.getElementById('content-text5').innerHTML = text;
  document.getElementById('content-img5').setAttribute('src',img);
  document.getElementById('content-box5').classList.remove('d-none5');
  // for (let index = 0; index < playerContainer.length; index++) {
  //   const element = playerContainer[index];
  //   element.firstElementChild.classList.toggle('active');
  //   element.nextElementSibling.classList.toggle('d-none');
  // }
  this.classList.toggle('active');
  
}

player5.forEach(item => item.addEventListener('click', handleClick5));

$('.play-video-button').on('click',function(){
  $('.custom-modal').removeClass('no-display')
  $('#video-id').trigger('play');
})
$('.custom-modal').on('click',function(e){
  console.log(e,e.target.tagName);
  if(e.target.tagName !== "VIDEO"){
    $('.custom-modal').addClass('no-display')
    $('#video-id').trigger('stop');

  }

})











