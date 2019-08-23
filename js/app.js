document.getElementById('generate-names').addEventListener('submit', loadNames);

function loadNames(e) {
  e.preventDefault();

  const result = document.getElementById('result');
  const country = document.getElementById('country').value;
  const gender = document.getElementById('gender').value;
  const amount = document.getElementById('quantity').value;

  let urlApi = 'https://uinames.com/api/';

  if (country !== '') {
    urlApi += `?region=${country}&`;
  } 
  if (gender !== '') {
    urlApi += `gender=${gender}&`;
  } 
  if (amount !== '') {
    urlApi += `amount=${amount}`;
  }

  console.log(urlApi);
  fetch(urlApi)
  .then(response => response.json())
  .then(data => {
    createList(result, data);
  });
}

function createList(father, arrOfChildren) {
  const namesTitle = document.createElement('h2');
  namesTitle.textContent = 'Generated names';
  namesTitle.style.textAlign = 'center';
  const list = document.createElement('ul');
  list.classList.add('list');

  arrOfChildren.forEach(elem => {
    const listItem = document.createElement('li');
    listItem.textContent = elem.name;
    list.append(listItem);
  });

  father.append(namesTitle);
  father.append(list);
}
