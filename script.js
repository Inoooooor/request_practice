
const hackButton = document.getElementById('hacking_button');
hackButton.addEventListener('click', () => {
  console.log(randObj);
});


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => {
    let randObj = Math.floor(Math.random() * json.length);
    console.log(randObj);
    for (let key in json[0]) {
      if (key == "address") {
        for (let addressKey in json[0].address) {
          if (addressKey != "geo") {
            console.log(addressKey + " = " + json[0].address[addressKey]);
            const pElement = document.createElement('p');
            pElement.classList = "hack_text";
            pElement.innerHTML = addressKey + " = " + json[0].address[addressKey];
            hackInfoDiv.append(pElement);        
          }
        }
        continue;
      } else if (key == "company" || key == "id") {
        continue;
      }
    console.log(key + " = " + json[0][key]);
    const pElement = document.createElement('p');
    pElement.classList = "hack_text";
    pElement.innerHTML = key + " = " + json[0][key];
    hackInfoDiv.append(pElement);
  }
});



// Put hacker picture 

const imgDiv = document.getElementById('img_div');
const hackerImg = document.createElement('img');
hackerImg.classList = "hacker_img";
hackerImg.src = 'src/hacker.png';
imgDiv.append(hackerImg);


const hackInfoDiv = document.getElementById('hacked_info');
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(json => console.log(json[0]));
