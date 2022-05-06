/////////////////////////////////////////////////////////////////////////////////// I S P I T I V A NJ E   D O K U M E N T   O B J E K T A //


//console.dir(document); //Prikazuje sva svojstva (properties) i metode koji se nalaze u HTML dokumentu

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all); //Daje niz ili HTML kolekciju svega sto je u DOM
//console.log(document.all[10]); //Stampa element niza sa indexom 10
//document.all[10].textContent = 'Hello'; //Ne koristiti ovaj nacin mijenjanja, jer ako dodajemo rucno u HTML tada se moze promijeniti index ovog elementa (npr. ako prije njaga dodamo neki element onda ce ovaj element imati veci index i sl.)
//console.log(document.forms); //Stampa forme koje postoje (niz sa formama, u primjeru je samo jedna sa indexom nula)
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// S E L E K T O R I //

//SELEKTUJ ELEMENT PO OSNOU NJEGOVOG ID-a
//console.log(document.getElementById('header-title'));

//Ako stavljamo u okviru varijable:
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);

//Da promijenimo sadrzaj naslova:
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello</h3>'; //Ovim se ne brise h1 u okviru kojeg je bio naslov, vec se brise sve u njemu, a u okviru h1 dodaje se h3 element sa naslovom.

//PROMJENA STILA - STILIZOVANJE ELEMENTA
//var header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px #000'

//SELEKTUJ ELEMENT PO OSNOU NAZIVA KLASE KOJU SADRZI U SEBI
//var items = document.getElementsByClassName('list-group-item');
//console.log(items) //Stampa se niz elemenata

//Da pristupimo individualnom elementu niza
//console.log(items[1]);
//items[1].textContent = 'Hello 2';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';

//Javlja gresku
//items.style.backgroundColor = '#f4f4f4f4'; //Ovo nece raditi jer moramo proci kroz niz da bi primijenili elemente (treba koristiti petlju)

//for(var i=0; i < items.length; i++){
//    items[i].style.backgroundColor = '#f4f4f4f4';
//}

//SELEKTUJ ELEMENT PO OSNOU NAZIVA TAGA - RADI SLICNO KAO I PO NAZIVU KLASE KAD SELEKTUJEMO
//var li = document.getElementsByTagName('li');
//console.log(li) //Stampa se niz elemenata
//Da pristupimo individualnom elementu niza
//console.log(li[1]);
//li[1].textContent = 'Hello 2';
//li[1].style.fontWeight = 'bold';
//li[1].style.backgroundColor = 'yellow';

//Javlja gresku
//items.style.backgroundColor = '#f4f4f4f4'; //Ovo nece raditi jer moramo proci kroz niz da bi primijenili elemente (treba koristiti petlju)

//for(var i=0; i < li.length; i++){
//    li[i].style.backgroundColor = '#f4f4f4f4';
//}

//SELEKTUJ ELEMENT NA OSNOVU QUERYSELECTOR-a (radi poput JQUERY ali se koristi samo za 1 item, ako zelimo vise klasa sa istim nazivom da selektujemo ovim metodom tada ce se selektovati samo prva klasa, ne i ostale!)
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px #ccc';

//var input = document.querySelector('input'); //Iako imamo 2 input polja na stranici, selektovace se samo prvi!
//input.value = 'Hello World';

//var submit = document.querySelector('input[type="submit"]');
//submit.value = 'SEND';

//var item = document.querySelector('.list-group-item');
//item.style.color = 'red';

//var lastitem = document.querySelector('.list-group-item:last-child');
//lastitem.style.color = 'blue';

//var seconditem = document.querySelector('.list-group-item:nth-child(2)');
//seconditem.style.color = 'coral';

//SELEKTUJ ELEMENTE NA OSNOVU QUERYSELECTORALL (radi slicno kao kad selektujemo po nazivu klase ili taga, samo sto sada selektujemo vise elemenata)
//var titles = document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent = 'Hello';

//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');

//for (var i = 0; i < odd.length; i++){
//    odd[i].style.background = '#f4f4f4f4';
//    even[i].style.background = '#ccc';
//}


// PARENTS, CHILDREN AND SIBLINGS //

//var itemList = document.querySelector('#items');

//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4f4'

//console.log(itemList.parentNode.parentNode); //Stampa parent parenta za items
//console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#f4f4f4f4'
//console.log(itemList.parentElement.parentElement); //Stampa parent parenta za items
//console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes); //Stampa i razmak kao text. Ne preporucuje se da se koristi, bolje je koristiti Children umjesto Childs.

//childrenNodes
//console.log(itemList.children); //Stampa samo elemente, bez razmaka
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
//console.log(itemList.firstChild); //Stampa samo prazni space kao tekst. Ne koristiti!

//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello 1';

//lastChild
//console.log(itemList.lastChild); //Stampa samo prazni space kao tekst. Ne koristiti!

//firstElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);
//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = "green";


// KREIRANJE ELEMENATA //

//Create a div
// var newDiv = document.createElement('div');
// newDiv.className = 'Hello'; //Dodajemo klasu elementu div
// newDiv.id = 'hello1'; //Dodajemo id elementu div
// newDiv.setAttribute('title', 'Hello Div'); //Dodajemo atribut elementu div
// var newDivText = document.createTextNode('Hello World'); //Kreira se TextNode
// newDiv.appendChild(newDivText); //Dodajemo TekstNode elementu DIV

//SMJESTANJE KREIRANOG ELEMENTA U DOM
// var container = document.querySelector('header .container .row .col-md-6');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  E V E N T S  //

// var button = document.getElementById('button');
// button.addEventListener('click', buttonClick);

// function buttonClick(e){
    //console.log('Button clicked');
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    //console.log(e);
    // console.log(e.target); // Full element with tags, all classes, id and text
    // console.log(e.target.id); // Element id
    // console.log(e.target.className); // String of all classes
    // console.log(e.target.classList); // Array of all classes
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>' +e.target.id+ '</h3>';

    // console.log(e.type);
    //console.log(e.clientX); // U odnosu na prozor
    //console.log(e.clientY); // U odnosu na prozor
    //console.log(e.offsetX); // U odnosu na sami element
    //console.log(e.offsetY); // U odnosu na sami element

    // console.log(e.altKey); // Mozemo sa if da pitamo je li pritisnuto alt, ako jeste da zadamo neku funkciju i sl.
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
//}

// DUGMAD NA MISU

//var button = document.getElementById('button')
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

// POMJERANJE MISA

//var box = document.getElementById('box');
//box.addEventListener('mouseenter', runEvent); //Samo kad udjemo u element
//box.addEventListener('mouseleave', runEvent); //Samo kad izadjemo iz elementa
//box.addEventListener('mouseover', runEvent); //Dok se krecemo preko elementa prikazuje se svaki put kad udjemo
//box.addEventListener('mouseout', runEvent); //Dok se krecemo preko elementa prikazuje se svaki put kad izadjemo
// box.addEventListener('mousemove', runEvent); // Stalno dok se mis pomjera

// DUGMAD NA TASTATURI

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent); // Kad kliknemo izvan fokusa

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
//itemInput.addEventListener('input', runEvent);

// var select = document.querySelector('select');

// // select.addEventListener('change', runEvent);
// // select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e){
//     e.preventDefault();
//     console.log('EVENT TYPE: ' + e.type);
    //document.body.style.display = 'none';
    //console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>' +e.target.value+ '</h3>';

    // output.innerHTML = '<h3>Mouse X: ' + e.offsetX+ '</h3> <h3>MouseY: ' +e.offsetY+ '</h3>';
    // document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
//}



