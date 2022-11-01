/**This function is for the dropdown menu*/
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

const posts = document.getElementById("joemama");

fetch('http://myjson.dit.upm.es/api/bins/gm6i')
.then((response) => response.json())
.then(json => {
for (let i = 0; i < json.length; i++) {

    let rida = json[i];
    let pfp = rida.pfp;
    if (pfp == null)
        pfp = "DefaultPFP.jpg";
    if (rida.attachment != null) {
        posts.innerHTML += '<li><div class="profile">'+
        '<img src="res/img/'+ pfp +'" alt="pfp">'+
        '<p>'+ rida.date + '</p></div><div class="comment">'+
        '<img src="res/img/'+ rida.attachment +'" alt="My picture">'+
        '<p>'+ rida.text + '</p></div></li>';
    }
    else { // For some reason this does work and "if" sentence only on adding image doesn't.
        posts.innerHTML += '<li><div class="profile">'+
        '<img src="res/img/'+ pfp +'" alt="pfp">'+
        '<p>'+ rida.date + '</p></div><div class="comment">'+
        '<p>'+ rida.text + '</p></div></li>';
    }
    
    }
    }
)