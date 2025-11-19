document.addEventListener('DOMContentLoaded', () => { 
     const tabButtons = document.querySelectorAll('.tab-btn');
     const tabPanels = document.querySelectorAll('.tab-pane');
      
     tabButtons[0].addEventListener('click', function() {
          tabButtons[0].classList.remove('active');
          tabButtons[1].classList.remove('active');
          tabButtons[2].classList.remove('active');

          tabPanels[0].classList.remove('active');
          tabPanels[1].classList.remove('active');
          tabPanels[2].classList.remove('active');

          //document.getElementById('about').classList.remove('active');
          //document.getElementById('works').classList.remove('active');
          //document.getElementById('contact').classList.remove('active');

          this.classList.add('active'); 
          document.getElementById('about').classList.add('active');
        });

     tabButtons[1].addEventListener('click', function() {
          tabButtons[0].classList.remove('active');
          tabButtons[1].classList.remove('active');
          tabButtons[2].classList.remove('active');

          tabPanels[0].classList.remove('active');
          tabPanels[1].classList.remove('active');
          tabPanels[2].classList.remove('active');

          /*document.getElementById('about').classList.remove('active');
          document.getElementById('works').classList.remove('active');
          document.getElementById('contact').classList.remove('active');*/

          this.classList.add('active');
          document.getElementById('works').classList.add('active');
       });

     tabButtons[2].addEventListener('click', function() {
          tabButtons[0].classList.remove('active');
          tabButtons[1].classList.remove('active');
          tabButtons[2].classList.remove('active');

          tabPanels[0].classList.remove('active');
          tabPanels[1].classList.remove('active');
          tabPanels[2].classList.remove('active');

          /*document.getElementById('about').classList.remove('active');
          document.getElementById('works').classList.remove('active');
          document.getElementById('contact').classList.remove('active');*/

          this.classList.add('active');
          document.getElementById('contact').classList.add('active');
       });   


});