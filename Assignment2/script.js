
const allContents = ['content1', 'content2', 'content3']; // your section divs
const allButtons = ['btn1', 'btn2', 'btn3']; // corresponding buttons
// === Section Tabs ===
function showContent(idToShow) {

  // Hide all content
  allContents.forEach(function (id) {
    document.getElementById(id).classList.add('hidden');
  });

  // Remove active class from all buttons
  allButtons.forEach(function (btnId) {
    document.getElementById(btnId).classList.remove('active');
  });

  // Show selected content and activate its button
  document.getElementById(idToShow).classList.remove('hidden');
  const btnIndex = allContents.indexOf(idToShow);
  if (btnIndex !== -1) {
    document.getElementById(allButtons[btnIndex]).classList.add('active');
  }
}

function removeWelcomeMessage() {
  const landingSection = document.getElementById('landing-section');
  // Sets it hidden with my custom hidden class (wow my hidden class is so useful)
  landingSection.classList.add('hidden');
}

// Show first tab by default
window.onload = function () {
  showContent('content1');
};

const mobileTaskbarToggle = document.getElementById('show-mobileTaskbar');
const mobileTaskbar = document.getElementById('mobile-taskbar');

mobileTaskbarToggle.addEventListener('click', function(){
  mobileTaskbar.classList.toggle('hidden');
})



// === Rolling Stock Script stuff ===

function showPanel(index) {
  const panels = document.querySelectorAll('.panel');
  const buttons = document.querySelectorAll('#RSbuttons button');

  panels.forEach(function (panel, i) {
    panel.classList.toggle('active', i === index);
  });

  buttons.forEach(function (btn, i) {
    btn.classList.toggle('active', i === index);
  });
}

function isActiveRS(panel) {
  return panel.classList.contains('active');
}

// Dynamically change the image of the currently visible panel
function changeImage(imgPath, trainIndex) {

  const panelsArray = Array.from(document.querySelectorAll('.panel'));
  const visiblePanel = panelsArray.find(isActiveRS);

  //If no visiblePanels found (aka, null or undefined), stop this function from running the code
  if (!visiblePanel) return;

  const panelId = visiblePanel.id; // e.g. "panel-0"
  const panelIndex = parseInt(panelId.split('-')[1], 10);

  const img = visiblePanel.querySelector('img');
  const captionEl = visiblePanel.querySelector('p');
  const specContainer = visiblePanel.querySelector('.specs-container');
  const descContainer = visiblePanel.querySelector('.desc-container');

  // Set image
  if (img) {
    img.src = imgPath;
    img.style.display = 'block';
  }

  // Variables to hold the content
  let caption = "";
  let specsHTML = "";
  let descHTML = "";


  if (panelIndex === 0) {
    if (trainIndex === 0) {
      caption = "C151";
      specsHTML = `
        <ul>
          <li>Built: 1987-1993</li>
          <li>Manufacturer: Kawasaki Heavy Industries (And other various Japanese manufacturers)</li>
          <li>Numbers Built: 396 cars (66 sets)</li>
          <li>Service speed: 80 km/h</li>
          <li>Max speed: 90 km/h</li>
        </ul>`;
      descHTML = `<p>The C151 trains were the first generation MRT trains in Singapore, and has been in service since the opening of the MRT system in 1987.
      As of time of writing, they are decommissioning for replacement.</p>`;
    } else if (trainIndex === 1) {
      caption = "C651";
      specsHTML = `
        <ul>
          <li>Built: 1994-1995</li>
          <li>Manufacturer: Siemens Mobility</li>
          <li>Numbers Built: 114 cars (19 sets)</li>
          <li>Service speed: 80 km/h</li>
          <li>Max speed: 90 km/h</li>
        </ul>`;
      descHTML = `<p>The C651 trains were the second generation of trains on the North South and East West Lines. Initially ordered for the Woodlands extension.
      These trains are known for their melodic and loud motor sounds. These trains fully retired on 27 Nov 2024.</p>
      <p class="fun-fact">Fun Fact: The C651 trains has never been refurbished, which means, they still retain most of their original features and design. Its a time capsule of the MRT in the 90's</p>`;
    } else if (trainIndex === 2) {
      caption = "C751B";
      specsHTML = `
        <ul>
          <li>Built: 1999-2001</li>
          <li>Manufacturer: Kawasaki Heavy Industry and Nippon Sharyo</li>
          <li>Numbers Built: 126 cars (21 sets)</li>
          <li>Service speed: 80 km/h</li>
          <li>Max speed: 90 km/h</li>
        </ul>`;
      descHTML = `<p>The C751B trains were the third generation of trains on the North South and East West Lines. Initally ordered for the Changi Airport Branch Line. Known for its new look from the C151 and C651 type trains.
      These trains fully retired on 7 Dec 2024</p>
      <p class="fun-fact">Fun Fact: If you ever noticed, there are empty standing spaces beside the doors of the C751B train. These used to be luggage racks when the Airport Branch Line used to operate to Boon Lay.</p>`;
    }
    else if (trainIndex === 3) {
      caption = "C151A";
      specsHTML = `
        <ul>
          <li>Built: 2011 (Batch 1), 2013-2014 (Batch 2)</li>
          <li>Manufacturer: Kawasaki Heavy Industries and CSR Qingdao SiFang (now CRRC)</li>
          <li>Numbers Built: 210 cars (35 sets)</li>
          <li>Service speed: 80 km/h</li>
          <li>Max speed: 90 km/h</li>
        </ul>`;
      descHTML = `<p>The C151A trains were the fourth generation of trains on the North South and East West Lines.</p>`;
    }
    else if (trainIndex === 4) {
      caption = "C151B";
      specsHTML = `
        <ul>
          <li>Built: 2016-2017</li>
          <li>Manufacturer: Kawasaki Heavy Industries and CRRC Qingdao Sifang</li>
          <li>Numbers Built: 270 cars (45 sets)</li>
          <li>Service speed: 80 km/h</li>
          <li>Max speed: 90 km/h</li>
        </ul>`;
      descHTML = `<p>The C151B trains are the fifth generation of trains on the North South and East West Lines. These trains are the most common type in the fleet.</p>
      <p class="fun-fact">Fun Fact: The C151B trains introduced the newer version of the route map above the doors. Now instead of lighting up dots to show next stop, it's a TV screen!</p>`;
    }
    else if (trainIndex === 5) {
      caption = "C151C";
      specsHTML = `
        <ul>
          <li>Built: 2017-2018</li>
          <li>Manufacturer: Kawasaki Heavy Industries and CRRC Qingdao Sifang</li>
          <li>Numbers Built: 72 cars (12 sets)</li>
          <li>Service speed: 80 km/h</li>
          <li>Max speed: 90 km/h</li>
        </ul>`;
      descHTML = `<p>The C151C trains are the sixth generation of trains on the North South and East West Lines.</p>
      <p class="fun-fact">Fun Fact: The C151C trains are equipped with fold-up seats to create more space during peak hours. However this feature is never used.</p>`;
    }
    else if (trainIndex === 6) {
      caption = "R151";
      specsHTML = `
        <ul>
          <li>Built: 2020 - (and ongoing as of time of writing)</li>
          <li>Manufacturer: Alstom and CRRC Changchun</li>
          <li>Numbers Built: 636 cars (106 sets)</li>
          <li>Service speed: 80 km/h</li>
          <li>Max speed: 90 km/h</li>
        </ul>`;
      descHTML = `<p>The R151 trains are the seventh generation of trains on the North South and East West Lines. Ordered to replace the aging C151, C651 and C751B trains</p>
      <p class="fun-fact">Fun Fact: The R151 trains was originally to be built by Bombardier, but Bombardier was bought by Alstom.</p>`;
    }
  }
  else if (panelIndex === 1) {
    if (trainIndex === 0) {
      caption = "C751A";
      specsHTML = `
        <ul>
          <li>Built: 2000-2003</li>
          <li>Manufacturer: Alstom</li>
          <li>Family Name: Metropolis</li>
          <li>Numbers Built: 150 cars (25 sets)</li>
          <li>Service speed: 80 km/h</li>
          <li>Max speed: 90 km/h</li>
        </ul>`;
      descHTML = `<p>C751A trains are the first generation of trains on the North East Line. These trains are the first fully automatic train.</p>`;
    }
    if (trainIndex === 1) {
      caption = "C751C";
      specsHTML = `
        <ul>
          <li>Built: 2014-2016</li>
          <li>Manufacturer: Alstom</li>
          <li>Family Name: Metropolis</li>
          <li>Numbers Built: 108 cars (18 sets)</li>
          <li>Service speed: 80 km/h</li>
          <li>Max speed: 90 km/h</li>
        </ul>`;
      descHTML = `<p>C751C trains are the second generation of trains on the North East Line. These trains remain largely similar to the C751A with a few key differences.</p>`;
    }
    if (trainIndex === 2) {
      caption = "C851E";
      specsHTML = `
        <ul>
          <li>Built: 2020-2023</li>
          <li>Manufacturer: Alstom</li>
          <li>Family Name: Metropolis</li>
          <li>Numbers Built: 36 cars (6 sets)</li>
          <li>Service speed: 80 km/h</li>
          <li>Max speed: 90 km/h</li>
        </ul>`;
      descHTML = `<p>C851E trains are the third generation of trains on the North East Line. These trains are the same as the C751C, with a updated livery.</p>`;
    }
  }
  else if (panelIndex === 2) {
    if (trainIndex === 0) {
      caption = "C830";
      specsHTML = `
        <ul>
          <li>Built: 2014-2015</li>
          <li>Manufacturer: Alstom</li>
          <li>Family Name: Metropolis</li>
          <li>Numbers Built: 120 cars (40 sets)</li>
          <li>Service speed: 80 km/h</li>
          <li>Max speed: 90 km/h</li>
        </ul>`;
      descHTML = `<p>C830 trains are the first generation of trains on the Circle Line. Instead of 6 cars per set, they have 3 cars per set!
        These trains are very similar to the C751A trains on the NEL</p>`;
    }
    else if (trainIndex === 1) {
      caption = "C830C";
      specsHTML = `
        <ul>
          <li>Built: 2006-2008</li>
          <li>Manufacturer: Alstom</li>
          <li>Family Name: Metropolis</li>
          <li>Numbers Built: 72 cars (24 sets)</li>
          <li>Service speed: 80 km/h</li>
          <li>Max speed: 90 km/h</li>
        </ul>`;
      descHTML = `<p>C830C trains are the second generation of trains on the Circle Line.</p>
      <p class="fun-fact">Fun Fact: The C830C trains are the only type of trains to have a bluish-grey finish for the inner layer of the doors!</p>`;
    }
  }
  //Not needed, hard coded in HTML instead
  else if (panelIndex === 3) {
    caption = "";
    specsHTML = ``;
    descHTML = ``;
  }
  else if (panelIndex === 4) {
    caption = "";
    specsHTML = ``;
    descHTML = ``;
  }
  //Back to needed
  else if (panelIndex === 5) {
    if (trainIndex === 0) {
      caption = "C801";
      specsHTML = `
        <ul>
          <li>Built: 1997-1999</li>
          <li>Manufacturer: Adtranz (Later Bombardier, now Alstom)</li>
          <li>Family Name: Innovia APM 100</li>
          <li>Numbers Built: 19 cars</li>
        </ul>`;
      descHTML = `<p>C801 trains are the first generation of trains on the Bukit Panjang LRT Line. This model fully retired and was replaced by the C801B.</p>
      <p class="fun-fact">Fun Fact: The C801 trains is actually the Bombardier Innovia APM 100, a model which can be found all over the world!</p>`;
    }
    if (trainIndex === 1) {
      caption = "C801A";
      specsHTML = `
        <ul>
          <li>Built: 2014-2015</li>
          <li>Manufacturer: Bombardier (now Alstom)</li>
          <li>Family Name: Innovia APM 100</li>
          <li>Numbers Built: 13 cars</li>
        </ul>`;
      descHTML = `<p>C801A trains are the second generation of trains on the Bukit Panjang LRT Line. It features a new livery and a sleeker exterior.</p>
      <p class="fun-fact">Fun Fact: The C801A trains is actually the Bombardier Innovia APM 100, a model which can be found all over the world!</p>`;
    }
    if (trainIndex === 2) {
      caption = "C801B";
      specsHTML = `
        <ul>
          <li>Built: 2014-2015</li>
          <li>Manufacturer: Alstom</li>
          <li>Family Name: Innovia APM 300R</li>
          <li>Numbers Built: 19 cars</li>
        </ul>`;
      descHTML = `<p>C801B trains are the third generation of trains on the Bukit Panjang LRT Line. It features a new livery and a sleeker exterior.</p>`;
    }
  }
  else if (panelIndex === 6) {
    if (trainIndex === 0) {
      caption = "C810/C810A";
      specsHTML = `
        <ul>
          <li>Built: 2000-2003 (C810), 2012-2016 (C810A)</li>
          <li>Manufacturer: Mitsubishi Heavy Industries</li>
          <li>Family Name: Crystal Mover</li>
          <li>Numbers Built: 41 cars (C810), 16 cars (C810A)</li>
        </ul>`;
      descHTML = `<p>C810/C810A trains are the first and second generation of trains on the Punggol and Sengkang LRT Lines.</p>
      <p class="fun-fact">Fun Fact: Other than all the rolling stocks on the BPLRT, these trains are the only ones to use rubber tyres instead of traditional rail!</p>`;
    }
    if (trainIndex === 1) {
      caption = "C810D";
      specsHTML = `
        <ul>
          <li>Built: 2016-2017</li>
          <li>Manufacturer: Mitsubishi Heavy Industries</li>
          <li>Family Name: Crystal Mover</li>
          <li>Numbers Built: 8 cars (4 sets)</li>
        </ul>`;
      descHTML = `<p>C810D trains are the third generation of trains on the Punggol and Sengkang LRT Lines. It features a fixed 2-car formation.</p>`;
    }
  }

  // === Set HTML elements ===
  if (captionEl) {
    captionEl.textContent = caption;
    captionEl.classList.remove('hidden');
  }
  if (specContainer) {
    specContainer.innerHTML = specsHTML;
  }
  if (descContainer) {
    descContainer.innerHTML = descHTML;
  }
}

const startQuizBtn = document.getElementById("startQuiz");
const funFactsContainer = document.getElementById("fun-facts");
const startQuizContainer = document.getElementById("quiz-start-para");
const quizContainer = document.getElementById("ffQuiz");

startQuizBtn.addEventListener('click', startQuiz);

function startQuiz() {
  funFactsContainer.classList.add('hidden');
  startQuizContainer.classList.add('hidden');
  quizContainer.classList.remove('hidden');
}

const btnSubmit = document.querySelector("#btnSubmit");
const scorebox = document.querySelector("#scorebox");
let ffQuizScore = 0;
let MAX_QUESTIONS = 3;
function CheckAns() {
  score = 0; //reset score to 0, check ans and give score if correct 
  for (let i = 0; i < MAX_QUESTIONS; i++) {
    CheckOneQn(i + 1, "Correct");
  }
  if (ffQuizScore > 3){
    console.log("Seems like you've stumbled upon one of my several easter eggs");
  }
  scorebox.innerHTML = "Score:" + ffQuizScore;
  
  ffQuizScore = 0;

}
btnSubmit.addEventListener("click", CheckAns);

function CheckOneQn(qnNo, CorrAns) {
  let qTemp;
  qTemp = document.querySelector("input[name='q" + qnNo + "']:checked").value;
  if (qTemp == CorrAns && ffQuizScore <= 3) ffQuizScore++;

  console.log(qTemp); //check q1 value retrieved
}

const resetQuizButton = document.getElementById("reset-ffQuiz");
resetQuizButton.addEventListener('click', toggleFunFacts);

function toggleFunFacts() {
  funFactsContainer.classList.remove('hidden');
  startQuizContainer.classList.remove('hidden');
  quizContainer.classList.add('hidden');

  ffQuizScore = 0;
}

// Game script for a simple click game
let score = 0;
const target = document.getElementById('target-box');
const scoreDisplay = document.getElementById('score-display');
const gameArea = document.getElementById('game-container');
const resetButton = document.getElementById('reset-button');
const clickTrain = new Audio('sounds/bone-crack.mp3')

function moveTarget() {
  const maxX = gameArea.clientWidth - target.clientWidth;
  const maxY = gameArea.clientHeight - target.clientHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  console.log(maxX, maxY, newX, newY);

  target.style.left = `${newX}px`;
  target.style.top = `${newY}px`;
}
resetButton.addEventListener('click', function () {
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  moveTarget();
});

target.addEventListener('click', function () {
  clickTrain.currentTime=0;
  clickTrain.play();
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
  moveTarget();
});

target.addEventListener('mouseover', function () {
  moveTarget();// Make it annoying to play
});

// Move the target every 1.5 seconds to keep it fun
setInterval(moveTarget, 1500);

// Lets the validator to stop nagging
if (false){
  removeWelcomeMessage();
  showPanel();
  changeImage("images/blankimagetostopthevalidatorfromyellingatme.png", 0);
}