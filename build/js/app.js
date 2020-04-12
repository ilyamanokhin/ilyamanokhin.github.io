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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7XG4gIFxuICBjb25zdCBjb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeUNNNVpYR2M3Qm0wUS1nU1ZfMXRFSEVoUl9FTFZ1WWlLRVwiLFxuICAgIGF1dGhEb21haW46IFwicG9yZm9saW8tMTE1NjcuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9wb3Jmb2xpby0xMTU2Ny5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJwb3Jmb2xpby0xMTU2N1wiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwicG9yZm9saW8tMTE1NjcuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2NDYwNzMyNDcwNDJcIixcbiAgICBhcHBJZDogXCIxOjY0NjA3MzI0NzA0Mjp3ZWI6MDUwYzE4NzMwMmNiNzc5NzAxMTRkYlwiLFxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1UMU1OS1JYNVhOXCJcblxuICB9O1xuXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbiAgZmlyZWJhc2UuYW5hbHl0aWNzKCk7XG5cbiAgY29uc3QgcHJlT2JqZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29iamVjdCcpO1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcblxuICBjb25zdCBkYlJlZk9iamVjdCA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ29iamVjdCcpO1xuICBjb25zdCBkYlJlZkxpc3QgPSBkYlJlZk9iamVjdC5jaGlsZCgnaG9iYmllcycpO1xuICBjb25zdCBzdG9yYWdlUmVmID0gZmlyZWJhc2Uuc3RvcmFnZSgpLnJlZigpLmNoaWxkKCdmaXRuZXMuanBnJyk7XG4gIGNvbnN0IHN0b3JhZ2VSZWYyID0gZmlyZWJhc2Uuc3RvcmFnZSgpLnJlZigpO1xuICBsZXQgaW1hZ2U7XG5cblxuICBkYlJlZk9iamVjdC5vbigndmFsdWUnLCBzbmFwID0+IHtcbiAgICBjb25zb2xlLmxvZyhzbmFwLnZhbCgpKVxuICAgIHByZU9iamVjdC5pbm5lckhUTUwgPSBzbmFwLnZhbCgpO1xuICB9KTtcblxuICBkYlJlZkxpc3Qub24oJ2NoaWxkX2FkZGVkJywgc25hcCA9PiB7XG4gICAgY29uc29sZS5sb2coc25hcC52YWwoKSk7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmlubmVyVGV4dCA9IHNuYXAudmFsKCk7XG4gICAgbGkuaWQgPSBzbmFwLmtleTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpKVxuICB9KTtcblxuICBkYlJlZkxpc3Qub24oJ2NoaWxkX2NoYW5nZWQnLCBzbmFwID0+IHtcbiAgICBjb25zb2xlLmxvZyhzbmFwLnZhbCgpKTtcbiAgICBjb25zdCBsaUNoYW5nZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzbmFwLmtleSk7XG4gICAgbGlDaGFuZ2VkLmlubmVyVGV4dCA9IHNuYXAudmFsKCk7XG4gIH0pO1xuXG4gIGRiUmVmTGlzdC5vbignY2hpbGRfcmVtb3ZlZCcsIHNuYXAgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNuYXAudmFsKCkpO1xuICAgIGNvbnN0IGxpVG9SZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzbmFwLmtleSk7XG4gICAgbGlUb1JlbW92ZS5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgc3RvcmFnZVJlZi5nZXREb3dubG9hZFVSTCgpLnRoZW4oZnVuY3Rpb24odXJsKSB7XG4gICAgLy8gYHVybGAgaXMgdGhlIGRvd25sb2FkIFVSTCBmb3IgJ2ltYWdlcy9zdGFycy5qcGcnXG4gIFxuICAgIC8vIFRoaXMgY2FuIGJlIGRvd25sb2FkZWQgZGlyZWN0bHk6XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgYmxvYiA9IHhoci5yZXNwb25zZTtcbiAgICB9O1xuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgIHhoci5zZW5kKCk7XG4gIFxuICAgIC8vIE9yIGluc2VydGVkIGludG8gYW4gPGltZz4gZWxlbWVudDpcbiAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSB1cmw7XG4gIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9KTtcbiAgXG5cbn0oKSlcbmZ1bmN0aW9uIHVwbG9hZEZpbGUoZmlsZXMpIHtcbiAgY29uc3Qgc3RvcmFnZVJlZiA9IGZpcmViYXNlLnN0b3JhZ2UoKS5yZWYoKTtcbiAgY29uc3QgeW9nYSA9IHN0b3JhZ2VSZWYuY2hpbGQoJ3lvZ2EuanBnJyk7XG5cbiAgY29uc3QgZmlsZSA9IGZpbGVzLml0ZW0oMCk7XG5cbiAgY29uc3QgdGFzayA9IHlvZ2EucHV0KGZpbGUpO1xuXG4gIHlvZ2EuZ2V0RG93bmxvYWRVUkwoKS50aGVuKGZ1bmN0aW9uKHVybCkge1xuICAgIC8vIGB1cmxgIGlzIHRoZSBkb3dubG9hZCBVUkwgZm9yICdpbWFnZXMvc3RhcnMuanBnJ1xuICBcbiAgICAvLyBUaGlzIGNhbiBiZSBkb3dubG9hZGVkIGRpcmVjdGx5OlxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyIGJsb2IgPSB4aHIucmVzcG9uc2U7XG4gICAgfTtcbiAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICB4aHIuc2VuZCgpO1xuICBcbiAgICAvLyBPciBpbnNlcnRlZCBpbnRvIGFuIDxpbWc+IGVsZW1lbnQ6XG4gICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWcnKTtcbiAgICBpbWcuc3JjID0gdXJsO1xuICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgIC8vIEhhbmRsZSBhbnkgZXJyb3JzXG4gIH0pO1xuXG4gXG59XG5cbmZ1bmN0aW9uIGRvd25sb2FkKCl7XG4gIHN0b3JhZ2VSZWYuY2hpbGQoJ2ltYWdlcy9zdGFycy5qcGcnKS5nZXREb3dubG9hZFVSTCgpLnRoZW4oZnVuY3Rpb24odXJsKSB7XG4gICAgLy8gYHVybGAgaXMgdGhlIGRvd25sb2FkIFVSTCBmb3IgJ2ltYWdlcy9zdGFycy5qcGcnXG4gIFxuICAgIC8vIFRoaXMgY2FuIGJlIGRvd25sb2FkZWQgZGlyZWN0bHk6XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgYmxvYiA9IHhoci5yZXNwb25zZTtcbiAgICB9O1xuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgIHhoci5zZW5kKCk7XG4gIFxuICAgIC8vIE9yIGluc2VydGVkIGludG8gYW4gPGltZz4gZWxlbWVudDpcbiAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215aW1nJyk7XG4gICAgaW1nLnNyYyA9IHVybDtcbiAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAvLyBIYW5kbGUgYW55IGVycm9yc1xuICB9KTtcbn0iXSwiZmlsZSI6ImFwcC5qcyJ9
