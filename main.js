// get elements 
var input = document.getElementById('input');
var generateBtn = document.getElementById('generateBtn');
var copyBtn = document.getElementById('copyBtn');
var msg = document.getElementById('msg');


// characters
var chars = '0123456789()[]<>/!?+=%@#£&_-"$€¥¢©~¿^¡;÷¦¬×§¶°|asdfghjklzxcvbnmqwertyuiopASDFGHJKLZXCVBNMQWERTYUIOP'

// generate password
generateBtn.addEventListener('click', function() {
   var password = "";
   for (i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
      input.value = password;

      msg.innerHTML = 'Password : Generated';
   }
});

// copy to clipboard 
copyBtn.addEventListener('click', function() {
   if (input.value == '') {
      alert("Generate a password first!");
   } else {
      input.select();
      input.setSelectionRange(0, 99999);
      document.execCommand('copy');

      msg.innerHTML = 'Password : Copied';
   }
});


var save = document.getElementById('save');
var ul = document.getElementById('ul');

save.addEventListener('click', function() {
   if (input.value == '') {
      alert("Generate a password first!");

   } else {
      var saveItem = JSON.parse(localStorage.getItem('saveList'));

      if (saveItem === null) {
         saved = [];
      } else {
         saved = saveItem;
      }

      saved.push(input.value);

      localStorage.setItem('saveList', JSON.stringify(saved));

      msg.innerHTML = 'Password : Saved';

      showItem();
      // console.log(saved);
   }
});

function showItem() {
   var saveItem = JSON.parse(localStorage.getItem('saveList'));
   if (saveItem === null) {
      saved = [];
   } else {
      saved = saveItem;
   }

   let item = '';
   saved.forEach((data, index) => {
      item += `
         <div class="saved">
            <li>${data}</li>
            <button onclick="deleteItem(${index})">
                  Delete
            </button>
         </div>
      `
      // create new element
   });
   ul.innerHTML = item;
}

showItem();

function deleteItem(index) {
   let localItem = JSON.parse(localStorage.getItem('saveList'))

   saved.splice(index, 1)
   localStorage.setItem('saveList', JSON.stringify(saved));

   msg.innerHTML = 'Password : Deleted';
   showItem()
}