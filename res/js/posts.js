const posts = document.getElementById("joemama");

fetch('http://myjson.dit.upm.es/api/bins/5gy2')
.then((response) => response.json())
.then(json => {
for (let i = 0; i < json.length; i++) {

    let rida = json[i];
    posts.innerHTML += '<li><div class="profile">'+
    '<img src="res/img/'+ rida.name + rida.lastname +'.jpeg" alt="pfp">'+
    '<p>'+ rida.date + '</p></div><div class="comment">';
    if (rida.attachment)
        posts.innerHTML += '<img src="res/img/'+ rida.postID +'.jpeg" alt="My picture">';
    posts.innerHTML += '<p>'+ rida.text + '</p></div></li>';
     
    }
    }
)