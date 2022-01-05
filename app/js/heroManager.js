
const typingHero = () =>{
    const hero_texts = ['Diseñar', 'Decorar', 'Reciclar', 'Comodidad', 'Construir'];
    let hero_count = 0;
    let hero_index = 0;
    let hero_currentText = '';
    let hero_letter = '';
    let typing = true;
    let time = 0;

    (function write(){
    
        if (!typing){
            hero_letter = hero_currentText.slice(0, --hero_index);
            document.querySelector('.hero_dynamic-text').textContent = hero_letter;
            if (hero_letter.length === 0){
                hero_count++;
                hero_index = 0;
                typing = true;
            }
            time = 250;
        }
        else{
            if (hero_count === hero_texts.length){
                hero_count = 0;
            }
        
            hero_currentText = hero_texts[hero_count];
            hero_letter = hero_currentText.slice(0, ++hero_index);
        
            document.querySelector('.hero_dynamic-text').textContent = hero_letter;
        
            if (hero_letter.length === hero_currentText.length){
                typing = false;
            }

            time = 300;
        }
    
        setTimeout(write, time);
    }());
}

typingHero();
