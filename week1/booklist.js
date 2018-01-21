let Objects = [
  {
    id: 'book1',
    title: 'Learning Web Design',
    Language: 'English',
    Auther: ' Jennifer Niederst Robbins',
  },
  {
    id: 'book2',
    title: "Don't Make Me Think!",
    Language: 'English',
    Auther: 'Steve Krug',
  },
  {
    id: 'book3',
    title: 'HTML and CSS: Design and Build Websites',
    Language: 'English',
    Auther: 'Jon Duckett',
  },
  {
    id: 'book4',
    title: 'JavaScript & Jquery',
    Language: 'English',
    Auther: 'Jon Duckett',
  },
  {
    id: 'book5',
    title: 'The Principles of Beautiful Web Design 3e',
    Language: 'English',
    Auther: 'Jason Beaird',
  },
  {
    id: 'book6',
    title: 'Content Strategy for the Web',
    Language: 'English',
    Auther: 'Kristina Halvorson',
  },
  {
    id: 'book7',
    title: 'Design for Hackers',
    Language: 'English ',
    Auther: 'David Kadavy',
  },
  {
    id: 'book8',
    title: 'Bulletproof Web Design',
    Language: 'English',
    Auther: 'Dan Cederholm',
  },
  {
    id: 'book9',
    title: 'A Practical Guide to Designing for the Web',
    Language: 'English',
    Auther: ' Mark Boulton',
  },
  {
    id: 'book10',
    title: 'Web Standards Solutions',
    Language: 'English',
    Auther: 'Dan Cederholm',
  },
];
let images = {
  book1: 'http://imgs.abduzeedo.com/files/books/book-learningweb.jpg',
  book2: 'https://images.gr-assets.com/books/1384736553l/18197267.jpg',
  book3: 'https://images-na.ssl-images-amazon.com/images/I/41R9Qctt%2BbL._SX396_BO1,204,203,200_.jpg',

  book4: 'http://01eba9f59936628a9c10-a672e330d72d3d2e689cb64015c1f8c5.r97.cf2.rackcdn.com/javascript-and-jquery-book-cover.png',

  book5: 'https://images-na.ssl-images-amazon.com/images/I/51dB3Tal6NL._SX401_BO1,204,203,200_.jpg',
  book6: 'https://images-na.ssl-images-amazon.com/images/I/41jQ0rWRLjL._SX258_BO1,204,203,200_.jpg',
  book7: 'https://images-na.ssl-images-amazon.com/images/I/51TUDt%2B86gL._SX394_BO1,204,203,200_.jpg ',
  book8: 'https://images-na.ssl-images-amazon.com/images/I/5193Mf0kSjL._SX415_BO1,204,203,200_.jpg',
  book9: 'https://responsivedesign.is/wp-content/uploads/2017/01/designingfortheweb-cover.jpg',
  book10: 'https://images.gr-assets.com/books/1386923832l/19430292.jpg',
};

// console.log(Objects[0]);

function createUl () {
  let booksUl = document.createElement ('ul');
  booksUl.setAttribute ('id', 'books');
  for (var index = 0; index < Objects.length; index++) {
    var idOfBook = Objects[index].id;
    let titleOfBook = Objects[index].title;
    let languageOfBook = Objects[index].Language;
    let autherOfBook = Objects[index].Auther;
    let li = document.createElement ('li');
    let h2 = document.createElement ('h2');
    let h3 = document.createElement ('h3');
    let h4 = document.createElement ('h4');
    let img = document.createElement ('img');

    h2.innerHTML = 'Title : ' + titleOfBook;
    h3.innerHTML = 'Language : ' + languageOfBook;
    h4.innerHTML = 'by : ' + autherOfBook;

    li.setAttribute ('id', 'idOfBooks');

    li.appendChild (h2);

    for (let key of Object.keys (images)) {
      let valueOfKeys = images[key];
      if (idOfBook == key) {
        img.src = valueOfKeys;
        img.alt = key;
      }
    }
    //for (let i=0;)

    booksUl.appendChild (li);
    li.appendChild (img);
    li.appendChild (h2);
    li.appendChild (h3);
    li.appendChild (h4);
  }
  console.log (booksUl);
  document.body.appendChild (booksUl);
}
createUl ();
