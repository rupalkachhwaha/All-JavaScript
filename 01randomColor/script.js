
        // Hex Change Background Color 
        const button = document.querySelector('#buttonId')
        const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        
        button.style.backgroundColor = '#c1c1c1';
        button.addEventListener('click', () => {
            let hex = '#'
    
            for (let i = 0; i < 6; i++){
                const index = Math.floor(Math.random()*hexValues.length)
                
                hex = hex + hexValues[index]
                
            }
            
            button.style.backgroundColor = hex

        } )
    
        
     
        //Change Background Color Project

        // let button = document.querySelector('#buttonId');
        // button.style.backgroundColor = 'red';
        // let colors = ['aqua', 'violet', 'lightGreen', 'pink', 'DarkOrange','silver'];

        // button.addEventListener('click' , () => {
        //         colorIndex= Math.floor(Math.random() * colors.length);
        //         button.style.backgroundColor = colors[colorIndex];
        // })

