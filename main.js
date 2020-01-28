'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('mousedown',()=>{
        btn.classList.add('pressed')
    });

    btn.addEventListener('mouseup',()=>{
        btn.classList.remove('pressed')
    });

    btn.addEventListener('click',()=>{
        const n = Math.random();

        if (n < 0.1){
            document.getElementById('gacha-result').src = './1.png';
        }else if (n < 0.4){
            document.getElementById('gacha-result').src = './2.png';
        }else{
            document.getElementById('gacha-result').src = './3.png';
        };
    });
}