let images = {
  Jennifer: 'Images/A Visit from the goon squad.jpg',
  Ahn: 'Images/The salmon who dared to leap higher.jpg',
  John: 'Images/Rabbit is rich.jpg',
  Jane: 'Images/The theory of everything.jpg',
  Anne: 'Images/Diary of anne frank.jpg',
  Stephen: 'Images/A brief history of time.jpg',
  Mustafa: 'Images/The Shell.jpg',
  Liz: 'Images/In love and war.jpg',
  Muhsin: 'Images/one thousand and one night.jpg',
  Margaret: 'Images/Gone with the wind.jpg',
};




let Objects = [
  {
    id: 'Jennifer',
    title: 'A Visit from the goon squad',

  },
  {
    id: 'Ahn',
    title: 'The salmon who dared to leap higher',
 
  },
  {
    id: 'John',
    title: 'Rabbit is rich',
  
  },
  {
    id: 'Jane',
    title: 'The theory of everything',
  
  },
  {
    id: 'Anne',
    title: 'Diary of anne frank',

  },
  {
    id: 'Stephen',
    title: 'A brief history of time',
 
  },
  {
    id: 'Mustafa',
    title: 'The Shell',

  },
  {
    id: 'Liz',
    title: 'In love and war',

  },
  {
    id: 'Muhsin',
    title: 'One thousand and one night',
 
  },
  {
    id: 'Margaret',
    title: 'Gone with the wind',

  },
];


// console.log(Objects[0]);

function createUl () {
  let booksUl = document.createElement ('ul');
  booksUl.setAttribute ('id', 'books');
  for (var index = 0; index < Objects.length; index++) {
    var idOfBook = Objects[index].id;
    
    
    let li = document.createElement ('li');
   
    let img = document.createElement ('img');

 
  

    li.setAttribute ('id', 'idOfBooks');

  

    for (let key of Object.keys (images)) {
      let valueOfKeys = images[key];
      if (idOfBook == key) {
        img.src = valueOfKeys;
        img.alt = key;
      }
    }

    booksUl.appendChild (li);
    li.appendChild (img);
 
  }
  console.log (booksUl);
  document.body.appendChild (booksUl);
}
createUl ();
