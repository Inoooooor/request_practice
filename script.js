const hackInfoDiv = document.getElementById('hacked_info');
const hackButton = document.getElementById('hacking_button');
const baitForm = document.getElementById('bait_form');
const baitFormCover = document.getElementById('bait_form_cover');
hackButton.addEventListener('click', () => {
  hackInfoDiv.innerHTML = "";   /*Clearing space between every clicking*/
  baitWindow();   /* Bait window with 25% chance to appear */
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
      let randObjNum = Math.floor(Math.random() * json.length);     /*Added random to shuffle objects every clicking*/
      for (let key in json[randObjNum]) {       /*Cycle for running across all the object's props*/
        if (key == "address") {
          for (let addressKey in json[randObjNum].address) {    /* Cycle for getting info of inner object */
            if (addressKey != "geo") {
              const pElement = document.createElement('p');     /*Adding catched info to the tree*/
              pElement.classList = "hack_text";
              pElement.innerHTML = addressKey + " = " + json[randObjNum].address[addressKey];
              hackInfoDiv.append(pElement);        
            }
          }
          continue;
        } else if (key == "company" || key == "id") {   /* Escaped putting this keys to tree */
          continue;
        }
      const pElement = document.createElement('p');     /*Adding catched info to the tree*/
      pElement.classList = "hack_text";
      pElement.innerHTML = key + " = " + json[randObjNum][key];
      hackInfoDiv.append(pElement);
    }
  });
});

// Put hacker picture 

const imgDiv = document.getElementById('img_div');
const hackerImg = document.createElement('img');
hackerImg.classList = "hacker_img";
hackerImg.src = 'src/hacker.png';
imgDiv.append(hackerImg);

// Below function that makes selling pic and form appear by certain chance

function baitWindow() {
  const baitImgDiv = document.getElementById('bait_img_div');
  const baitImg = document.createElement('img');
  baitImgDiv.innerHTML = "";
  let baitChance = Math.floor(Math.random() * 4);
  baitImg.classList = "bait_words";
  baitImg.src = 'src/nudes_bait.png';
  if (baitChance == 1) {
    baitImgDiv.append(baitImg);
    baitFormCover.style.backgroundColor = "transparent";
  } else {
    baitFormCover.style.backgroundColor = "white";
  }
}
