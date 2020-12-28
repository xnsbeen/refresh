
var href = '';
var threshold_index = 2217866; // 질문 번호 기준 설정


function getIndex(subject){
    begin = subject.indexof('idx') + 4;
    result = Number(subject.slice(begin, begin + 7));
    alert(result);
    return result;
}

var refresh = setInterval(function(){

    frame = document.getElementById("ifrmContents").contentWindow;
    subjects = frame.document.getElementsByClassName("subject");
    href = '';
    

    for(var i = 0; i<subjects.length; i++){
        sub = subjects[i];
        content = subjects[i].innerHTML;
        index_subject = getIndex(content);
        
        //기준이 되는 질문 번호보다 작으면 최신문제가 아니다.
        if(index_subject <= threshold_index ) break;

        if(content.includes('update')&&!content.includes('답변 중 입니다.')){
            href = "new_2018/qa_board/" + content.split('"')[1];
            href = href.split('amp;').join('');
            href = 'http://tzone.megastudy.net/' + href;
            clearInterval(refresh);
            break;
        }
    }

    document.querySelector('#aa4231').click();
},4000);

href