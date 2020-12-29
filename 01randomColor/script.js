        let button = document.querySelector('#buttonId');
        let body = document.querySelector('body');

        let colors = ['aqua', 'violet', 'lightGreen', 'pink', 'DarkOrange','silver'];

        button.style.backgroundColor = 'violet';
        button.addEventListener('click', changeBackground);

        function changeBackground() {
                let colorIndex = Math.ceil(Math.random() * colors.length);
                
                button.style.backgroundColor= colors[colorIndex];
        }