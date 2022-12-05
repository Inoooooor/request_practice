fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    console.log(Object.keys(json[0])[0])
  });



// Put hacker picture 

const imgDiv = document.getElementById('img_div');
const hackerImg = document.createElement('img');
hackerImg.classList = "hacker_img";
hackerImg.src = 'src/hacker.png';
imgDiv.append(hackerImg);


const hackInfoDiv = document.getElementById('hacked_info');
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => {hackInfoDiv.innerHTML = (Object.keys(json[0])[0]) + " = "});

