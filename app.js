function mostrar(){
    document.getElementById('ty').style.display = 'flex';
    document.getElementById('card_rate').style.display = 'none';
}



const nro= document.querySelectorAll(".card_btn");
nro.forEach(b => {
  
    b.addEventListener('click', getRating)

    function getRating(event) {
      
      const x=b.value;
      // console.log(x);
      document.getElementById('q').textContent=x;
      nro.forEach(b => {
      if (b.classList.contains('active')) {
        b.classList.remove('active');
      }
      });
      b.classList.add('active');
      // event.target.style.backgroundColor = 'var(--Medium-Grey)';
      // event.target.style.color='var(--White)';
     }
});

