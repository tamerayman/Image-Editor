let Saturate = document.getElementById('Saturate');
let Contrast= document.getElementById('Contrast');
let Brightness = document.getElementById('Brightness');
let Sepia = document.getElementById('Sepia');
let Grayscale = document.getElementById('Grayscale');
let Blur = document.getElementById('Blur');
let HueRotate = document.getElementById('HueRotate');

let upload=document.getElementById('upload');

let download=document.getElementById('download');
let span=document.querySelector('span');

let img=document.getElementById('img');
let imgBox=document.querySelector('.img-box');

let canvas=document.getElementById('canvas');
let ctx=canvas.getContext('2d');



function resetValue(){//زر الحذف
         //img.style.filter='none';
     ctx.filter='none';
     Saturate.value='100';
     Contrast.value='100';
     Brightness.value='100';
     Sepia.value='0';
    Grayscale.value='0';
    Blur.value='0';
    HueRotate.value='0';
    

ctx.drawImage(img,0,0,canvas.width,canvas.height);
}

window.onload=function(){
download.style.display='none';
span.style.display='none';
imgBox.style.display='none';

}
upload.onchange=function(){
resetValue()

download.style.display='block';
span.style.display='block';
imgBox.style.display='block';

let file = new FileReader();
file.readAsDataURL(upload.files[0]);

file.onload=function(){
    img.src=file.result;
}
img.onload=function(){//download
canvas.width= img.width;
canvas.height= img.height;

    ctx.drawImage(img,0,0,canvas.width,canvas.height);
img.style.display='none';
}

}
let filters=document.querySelectorAll('ul li input');
for(let i=0;i<filters.length;i++)
{
filters[i].addEventListener('input',function(){

    // img.style.filter=`
      ctx.filter=`
    Saturate(${Saturate.value}%)
  Contrast(${Contrast.value}%)
 Brightness(${Brightness.value}%)
    Sepia(${Sepia.value}%)
      Grayscale(${Grayscale.value})
        Blur(${Blur.value}px)
        hue-rotate(${HueRotate.value}deg)


    `
        ctx.drawImage(img,0,0,canvas.width,canvas.height);

})

}

download.onclick=function(){

    download.href=canvas.toDataURL();
}