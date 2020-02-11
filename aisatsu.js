function sayhello(){
    alert('Hello,' +
    document.getElementById('who').value + '!');
}

function ThreeSecChange(){
    setInterval("imgchange12()",3000);
}

function imgchange12(){
    document.getElementById('logo2').src ='./image/house.png';
}