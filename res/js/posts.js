const posts = document.getElementById("joemama");

fetch('http://myjson.dit.upm.es/api/bins/h0ua')
.then((response) => response.json())
.then(json => {
for (let i = 0; i < json.length; i++) {

    let rida = json[i];
    posts.innerHTML += '<li><div class="profile">'+
    '<img src="res/img/'+ rida.name + rida.lastname +'.jpeg" alt="pfp">'+
    '<p>'+ rida.date + '</p></div><div class="comment">'+
    '<img src="res/img/'+ rida.postID +'.jpeg" alt="My picture">'+
    '<p>'+ rida.text + '</p></div></li>';
     
    }
    }
)