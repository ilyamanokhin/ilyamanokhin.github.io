(function(){
  
  const config = {
    apiKey: "AIzaSyCM5ZXGc7Bm0Q-gSV_1tEHEhR_ELVuYiKE",
    authDomain: "porfolio-11567.firebaseapp.com",
    databaseURL: "https://porfolio-11567.firebaseio.com",
    projectId: "porfolio-11567",
    storageBucket: "porfolio-11567.appspot.com",
    messagingSenderId: "646073247042",
    appId: "1:646073247042:web:050c187302cb77970114db",
    measurementId: "G-T1MNKRX5XN"

  };

  firebase.initializeApp(config);
  firebase.analytics();

  const preObject = document.getElementById('object');
  const list = document.getElementById('list');

  const dbRefObject = firebase.database().ref().child('object');
  const dbRefList = dbRefObject.child('hobbies');
  const storageRef = firebase.storage().ref().child('fitnes.jpg');
  const storageRef2 = firebase.storage().ref();
  let image;


  dbRefObject.on('value', snap => {
    console.log(snap.val())
    preObject.innerHTML = snap.val();
  });

  dbRefList.on('child_added', snap => {
    console.log(snap.val());
    const li = document.createElement('li');
    li.innerText = snap.val();
    li.id = snap.key;
    list.appendChild(li)
  });

  dbRefList.on('child_changed', snap => {
    console.log(snap.val());
    const liChanged = document.getElementById(snap.key);
    liChanged.innerText = snap.val();
  });

  dbRefList.on('child_removed', snap => {
    console.log(snap.val());
    const liToRemove = document.getElementById(snap.key);
    liToRemove.remove();
  });

  storageRef.getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  
    // Or inserted into an <img> element:
    var img = document.getElementById('img');
    img.src = url;
  }).catch(function(error) {
    console.log(error);
  });
  

}())
function uploadFile(files) {
  const storageRef = firebase.storage().ref();
  const yoga = storageRef.child('yoga.jpg');

  const file = files.item(0);

  const task = yoga.put(file);

  yoga.getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  
    // Or inserted into an <img> element:
    var img = document.getElementById('img');
    img.src = url;
  }).catch(function(error) {
    // Handle any errors
  });

 
}

function download(){
  storageRef.child('images/stars.jpg').getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  
    // Or inserted into an <img> element:
    var img = document.getElementById('myimg');
    img.src = url;
  }).catch(function(error) {
    // Handle any errors
  });
}