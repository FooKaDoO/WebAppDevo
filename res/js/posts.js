const posts = document.getElementById("joemama");

fetch('http://myjson.dit.upm.es/api/bins/5gy2')
.then((response) => response.json())
.then(json => {
for (let i = 0; i < json.length; i++) {

    let rida = json[i];
    if (rida.attachment) {
        posts.innerHTML += '<li><div class="profile">'+
        '<img src="res/img/'+ rida.name + rida.lastname +'.jpeg" alt="pfp">'+
        '<p>'+ rida.date + '</p></div><div class="comment">'+
        '<img src="res/img/'+ rida.postID +'.jpeg" alt="My picture">'+
        '<p>'+ rida.text + '</p></div></li>';
    }
    else { // For some reason this does work and "if" sentence only on adding image doesn't.
        posts.innerHTML += '<li><div class="profile">'+
        '<img src="res/img/'+ rida.name + rida.lastname +'.jpeg" alt="pfp">'+
        '<p>'+ rida.date + '</p></div><div class="comment">'+
        '<p>'+ rida.text + '</p></div></li>';
    }
    
    }
    }
)