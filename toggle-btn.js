const toggle = document.querySelector('.toggle');

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('on');
    });


const price1 = document.querySelector('.price1');
const price2 = document.querySelector('.price2');

toggle.addEventListener('click', () => {
	if(toggle.classList.contains('on')) {
    price2.style.display = 'block';
    price1.style.display = 'none';
  
  }

     
  
  
})
