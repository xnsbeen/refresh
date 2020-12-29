
var href = '';
var threshold_index = 2218936; // 질문 번호 기준 설정


function getIndex(subject) {
    begin = subject.indexOf('idx') + 4;
    result = Number(subject.slice(begin, begin + 7));
    return result;
}



frame = document.getElementById("ifrmContents").contentWindow;
subjects = frame.document.getElementsByClassName("subject");
href = '';

for (var i = 0; i < subjects.length; i++) {

    subject = subjects[i].innerHTML;

    if (subject.includes('update') && !subject.includes('답변 중 입니다.')) {

        index_subject = getIndex(subject);
        if (index_subject <= threshold_index) break;

        href = "new_2018/qa_board/" + subject.split('"')[1];
        href = href.split('amp;').join('');
        href = 'http://tzone.megastudy.net/' + href;
        break;

    }
}


href