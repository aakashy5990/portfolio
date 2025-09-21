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

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');
    const submitButton = document.querySelector('button[type="submit"]');
    
    if (form && submitButton) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Set button to loading state
            setButtonState('loading', 'Submitting...');
            
            // Show loading message
            showMessage('Sending message...', 'info');
            
            // Get form data
            const formData = new FormData(form);
            
            // Submit to Web3Forms
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Set button to success state
                    setButtonState('success', 'Submitted!');
                    showMessage('Thank you! Your message has been sent successfully.', 'success');
                    form.reset(); // Clear the form
                    
                    // Reset button to normal state after 3 seconds
                    setTimeout(() => {
                        setButtonState('normal', 'Submit Form');
                    }, 3000);
                } else {
                    setButtonState('normal', 'Submit Form');
                    showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setButtonState('normal', 'Submit Form');
                showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
            });
        });
    }
    
    function setButtonState(state, text) {
        // Remove all state classes
        submitButton.classList.remove('loading', 'success');
        
        // Add the appropriate state class
        if (state !== 'normal') {
            submitButton.classList.add(state);
        }
        
        // Update button text
        submitButton.textContent = text;
        
        // Disable/enable button based on state
        if (state === 'loading') {
            submitButton.disabled = true;
        } else {
            submitButton.disabled = false;
        }
    }
    
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.style.display = 'block';
        
        // Remove existing classes
        messageDiv.className = '';
        
        // Add appropriate styling based on type
        if (type === 'success') {
            messageDiv.style.backgroundColor = '#d4edda';
            messageDiv.style.color = '#155724';
            messageDiv.style.border = '1px solid #c3e6cb';
        } else if (type === 'error') {
            messageDiv.style.backgroundColor = '#f8d7da';
            messageDiv.style.color = '#721c24';
            messageDiv.style.border = '1px solid #f5c6cb';
        } else if (type === 'info') {
            messageDiv.style.backgroundColor = '#d1ecf1';
            messageDiv.style.color = '#0c5460';
            messageDiv.style.border = '1px solid #bee5eb';
        }
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
});