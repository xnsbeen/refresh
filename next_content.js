var btns = document.getElementsByTagName('a');

for(var i = 0; i<btns.length;i++){
    var text = btns[i].innerHTML;
    if(text.includes('찜하기')){
        btns[i].click();
    }
}