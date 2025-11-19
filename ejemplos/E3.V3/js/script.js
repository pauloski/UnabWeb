
        // Esperamos a que el DOM esté completamente cargado.
        document.addEventListener('DOMContentLoaded', () => {
            // Seleccionamos todos los botones de las pestañas
            const tabButtons = document.querySelectorAll('.tab-btn');
            
            // Botón "Acerca de"
            tabButtons[0].addEventListener('click', function() {
                // Quitar 'active' de todos los botones y paneles
                tabButtons[0].classList.remove('active');
                tabButtons[1].classList.remove('active');
                tabButtons[2].classList.remove('active');

                document.getElementById('about').classList.remove('active');
                document.getElementById('works').classList.remove('active');
                document.getElementById('contact').classList.remove('active');

                this.classList.add('active'); 
                document.getElementById('about').classList.add('active');
            });

            // Botón "Obras"
            tabButtons[1].addEventListener('click', function() {
                tabButtons[0].classList.remove('active');
                tabButtons[1].classList.remove('active');
                tabButtons[2].classList.remove('active');

                document.getElementById('about').classList.remove('active');
                document.getElementById('works').classList.remove('active');
                document.getElementById('contact').classList.remove('active');

                this.classList.add('active');
                document.getElementById('works').classList.add('active');
            });

            // Botón "Contacto"
            tabButtons[2].addEventListener('click', function() {
                tabButtons[0].classList.remove('active');
                tabButtons[1].classList.remove('active');
                tabButtons[2].classList.remove('active');

                document.getElementById('about').classList.remove('active');
                document.getElementById('works').classList.remove('active');
                document.getElementById('contact').classList.remove('active');

                this.classList.add('active');
                document.getElementById('contact').classList.add('active');
            });

          
        });