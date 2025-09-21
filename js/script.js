const hoveredClassName1 = 'hover_element1';
const hiddenElementClassName1 = 'hidden_element1';

const hoveredElements1 = document.querySelectorAll(`.${hoveredClassName1}`);
const hiddenElements1 = document.querySelectorAll(`.${hiddenElementClassName1}`);

hoveredElements1.forEach((hoveredElement1, index) => {

  hoveredElement1.addEventListener('mouseenter', () => {

    hiddenElements1[index].style.display = 'block';
  });

  hoveredElement1.addEventListener('mouseleave', () => {

    hiddenElements1[index].style.display = 'none';
  });
});


const hoveredClassName2 = 'hover_element2';
const hiddenElementClassName2 = 'hidden_element2';

const hoveredElements2 = document.querySelectorAll(`.${hoveredClassName2}`);
const hiddenElements2 = document.querySelectorAll(`.${hiddenElementClassName2}`);

hoveredElements2.forEach((hoveredElement2, index) => {

  hoveredElement2.addEventListener('mouseenter', () => {

    hiddenElements2[index].style.display = 'block';
  });

  hoveredElement2.addEventListener('mouseleave', () => {

    hiddenElements2[index].style.display = 'none';
  });
});

const hoveredClassName3 = 'hover_element3';
const hiddenElementClassName3 = 'hidden_element3';

const hoveredElements3 = document.querySelectorAll(`.${hoveredClassName3}`);
const hiddenElements3 = document.querySelectorAll(`.${hiddenElementClassName3}`);

hoveredElements3.forEach((hoveredElement3, index) => {

  hoveredElement3.addEventListener('mouseenter', () => {

    hiddenElements3[index].style.display = 'block';
  });

  hoveredElement3.addEventListener('mouseleave', () => {

    hiddenElements3[index].style.display = 'none';
  });
});


const hoveredClassName4 = 'hover_element4';
const hiddenElementClassName4 = 'hidden_element4';

const hoveredElements4 = document.querySelectorAll(`.${hoveredClassName4}`);
const hiddenElements4 = document.querySelectorAll(`.${hiddenElementClassName4}`);
hoveredElements4.forEach((hoveredElement4, index) => {

  hoveredElement4.addEventListener('mouseenter', () => {

    hiddenElements4[index].style.display = 'block';
  });

  hoveredElement4.addEventListener('mouseleave', () => {

    hiddenElements4[index].style.display = 'none';
  });
});


// skills code;

function progressBarAndCountNumber () {
    const progress = document.querySelectorAll('.progress');
    let count = 0;
    // You must put the maximum number in the MAX variable.
    let MAX = 100;

    let run = setInterval(() => {
        count++;
        progress.forEach(element => {
            if (count <= element.dataset.progress) {
                element.parentElement.style.background = `conic-gradient(rgb(32, 194, 14) ${count}%, #212428 0)`;
                element.firstElementChild.textContent = `${count}%`;
            };
            if (count == MAX) {
                clearInterval(run);
            };
        });
    }, 20);
}

progressBarAndCountNumber();


// adding scroll arrow 
const scrollarrow = document.querySelector('.scroll_arrow')

window.addEventListener('scroll', () => {
//   console.log(window.pageYOffset)
  if (window.pageYOffset > 224){
    scrollarrow.style.display = "block";
  }
  else{
    scrollarrow.style.display = "none";
  }
})

scrollarrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})




// data to store database on google sheet js code 
const scriptURL = 'https://script.google.com/macros/s/AKfycbwkp-DovNkt-Z4spG4oteiUgbXpzsqT0mZuZL-8p1p4pwGFB-BaHwQmP9Sr_nsEERUSNQ/exec'
const form = document.forms['google-sheet']
  
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    // .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})


// function thanx() {
//   var inputField = document.getElementById("textInput");

//   var paragraph = document.getElementById("thanx");

//   if (inputField.value.trim() === "") {
//     paragraph.textContent = "Please fill all details.";
//   } else {
//     paragraph.textContent = "Thanks for Contacting us..  ! We Will Contact You Soon...";

//     setTimeout(function() {
//       paragraph.textContent = "";
//     }, 3000);
//   }
// }




function thanx() {
  var input_name = document.getElementById("input_name");
  var input_email = document.getElementById("input_email");
  var input_number = document.getElementById("input_number");
  var input_text = document.getElementById("input_text");


  var input = document.getElementById("input_name");
  var input = document.getElementById("input_email");
  var input = document.getElementById("input_number");
  var input = document.getElementById("input_text");

  var paragraph = document.getElementById("thanx");

  if (input_name.value === "" && input_email.value === "" && input_number.value === ""  && input_text.value === "") {
    paragraph.textContent = "Please fill all details.";
    // paragraph.textContent = "Thanks for Contacting us..  ! We Will Contact You Soon...";

  }
  else if(input.value === ""){
    paragraph.textContent = "Please fill all details.";
  } 
  else {
    paragraph.textContent = "Thanks for Contacting us..  ! We Will Contact You Soon...";
    // paragraph.textContent = "Please fill all details.";

    // Clear the form after submission
    
    
    setTimeout(function() {
      paragraph.textContent = "";
      document.getElementById("clear_form").reset();
    }, 3000);
  }
}



function toggleMenu() {
  var menuList = document.getElementById('menu-list');

  // Toggle the 'active' class on menu-list
  menuList.classList.toggle('active');
  // setTimeout(function() {
  //   menuList.classList.toggle('active');
  // }, 100);
}


// const cv = () =>{
//   alert("Thank you for your interest in my CV. Currently, it is being improved for better quality.")
// }


// get year 
const yr = document.getElementById('year');
const year = new Date().getFullYear();
yr.innerHTML = year;