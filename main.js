var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    // Get item value (Ako zelimo da izvucemo samo iz ovog input polja uvijek koristimo id, jer da smo koristili queryset a npr. imamo vise input polja to bi povuklo vise vrijednosti)
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    //console.log(li); // Da testiramo je li ok dodat li element

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    var deleteBtn = document.createElement('button');
    // Add classes to deleteBtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);
    // Append li to list
    itemList.appendChild(li);
}

function removeItem(e){
    //console.log(1) // Testiramo da ce se na svaki klik nekog items stampati 1. Ali mi zelimo da se samo na klik na X nesto izvrsava.
    if(e.target.classList.contains('delete')){
        //console.log(1); // Testiramo da li se sada samo na klik na X stampa 1.
        if(confirm('Are you sure?')){
            var li = e.target.parentElement; // Posto klikama na dugme njemu je parent li element.
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e){
    // Convert text to lowercase
    var text = e.target.value.toLowerCase();
    //console.log(text); // Da testiramo radi li konvertovanje u mala slova.
    
    // Get li
    var items = itemList.getElementsByTagName('li');
    //console.log(items); //Testiranjem vidimo da smo dobili listu

    //Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        //console.log(itemName); // Testiramo da vidimo stampa li samo tekst od items
        
        //Provjeravamo da li ukucano ima u tekstu od items
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
            item.addEventListener('click', function(e){
                var newValue = document.getElementById('filter').value = itemName;
            })
        } else {
            item.style.display = 'none';
        }
    }) 
}


