let Objects = [{
        id: "Jennifer",
        title: "A Visit from the goon squad",
        Language: "English",
        Auther: "Jennifer Egan"
    },
    {
        id: "Ahn",
        title: "The salmon who dared to leap higher",
        Language: "English",
        Auther: "Ahn Do-hyun"
    },
    {
        id: "John",
        title: "Rabbit is rich",
        Language: "English",
        Auther: "John Updike"
    },
    {
        id: "Jane",
        title: "The theory of everything",
        Language: "English",
        Auther: "Stephen Hawking"
    },
    {
        id: "Anne",
        title: "Diary of anne frank",
        Language: "English",
        Auther: "Anne frank"
    },
    {
        id: "Stephen",
        title: "A brief history of time",
        Language: "English",
        Auther: "Stephen Hawking"
    },
    {
        id: "Mustafa",
        title: "The Shell",
        Language: "English & Arabic",
        Auther: "Mustafa Khalifa"
    },
    {
        id: "Liz",
        title: "In love and war",
        Language: "English",
        Auther: "Liz Trenow"
    },
    {
        id: "Muhsin",
        title: "One thousand and one night",
        Language: "English",
        Auther: "Muhsin Mahdi"
    },
    {
        id: "Margaret",
        title: "Gone with the wind",
        Language: "English",
        Auther: "Margaret Mitchell"
    }
];
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
    Margaret: 'Images/Gone with the wind.jpg'
};

// console.log(Objects[0]);

function createUl() {
    let booksUl = document.createElement('ul');
    booksUl.setAttribute('id', 'books');
    for (var index = 0; index < Objects.length; index++) {

        var idOfBook = Objects[index].id;
        let titleOfBook = Objects[index].title;
        let languageOfBook = Objects[index].Language;
        let autherOfBook = Objects[index].Auther;
        let li = document.createElement('li');
        let h1 = document.createElement('h1');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');

        h1.innerHTML = 'Title : ' + titleOfBook;
        h2.innerHTML = 'Language : ' + languageOfBook;
        h3.innerHTML = 'by : ' + autherOfBook;

        li.setAttribute('id', 'idOfBooks');

        li.appendChild(h1);

        for (let key of Object.keys(images)) {
            let valueOfKeys = images[key];
            if (idOfBook == key) {
                img.src = valueOfKeys;
                img.alt = key;
            }

        }

        booksUl.appendChild(li);
        li.appendChild(img);
        li.appendChild(h1);
        li.appendChild(h2);
        li.appendChild(h3);

    }
    console.log(booksUl);
    document.body.appendChild(booksUl);
}
createUl();