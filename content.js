
frame = document.getElementById("ifrmContents").contentWindow;
subjects = frame.document.getElementsByClassName("subject");
var href = '';

for(var i = 0; i<subjects.length; i++){
    sub = subjects[i];
    content = subjects[i].innerHTML;
    if(content.includes('update')&&!content.includes('답변 중 입니다.')){
        href = "new_2018/qa_board/" + content.split('"')[1];
        href = href.split('amp;').join('');
        href = 'http://tzone.megastudy.net/' + href;
        window.open(href,'_self');
        break;
    }
}

href


//function refresh(){
//    document.querySelector('#aa4231').click();
//}
//setInterval(refresh,4000);
