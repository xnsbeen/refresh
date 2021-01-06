let stop_sign = 0;

const execute = () => {
    stop_sign = 0;
    var check = setInterval(function () {
        chrome.tabs.executeScript({ file: "content.js" },function(href){
            if(stop_sign) clearInterval(check);
            else if(href!=''){
                clearInterval(check);
                zzim(href);
            }
            else{
                chrome.tabs.executeScript({ file: "click.js" });
            }
        });
    }, 4000);
}

const zzim =(href)=>{
    chrome.tabs.query({ 'active': true, 'currentWindow': true }, function (tabs) {
        chrome.tabs.update(tabs[0].id, { url: href.toString() }, function (tab1) {
            var listener = function (tabId, changeInfo, tab) {
                if (tabId == tab1.id && changeInfo.status == 'complete') {
                    chrome.tabs.executeScript({ file: "next_content.js" });
                }
            }
            chrome.tabs.onUpdated.addListener(listener);
        })
    })
}


const stop =()=>{
    stop_sign = 1;
    alert('종료');
}

document.addEventListener('DOMContentLoaded', function () {
    var btn_start = document.querySelector('#btn_start');
    var btn_stop = document.querySelector('#btn_stop');
    btn_start.addEventListener('click', execute);
    btn_stop.addEventListener('click', stop);
});





document.addEventListener('DOMContentLoaded', function () {
    var btn_test = document.querySelector('#btn_test');
    btn_test.addEventListener('click', test);
});


const test =()=> {
    var check = setInterval(function () {
        chrome.tabs.executeScript({ file: "test_check.js" },function(href){
            if(href!=''){
                clearInterval(check);
                zzim(href);
            }
            else{
                chrome.tabs.executeScript({ file: "test_click.js" });
            }
        });
    }, 4000);
}
