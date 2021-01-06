

const execute = () => {
    new Promise(function (resolve, reject) {
        var refresh = setInterval(function () {
            chrome.tabs.executeScript({ file: "content.js" }, function (href) {
                alert(href+'11');
                if(href!=''){ 
                    clearInterval(refresh);
                    resolve(href);
                }
                else{
                    alert('???');
                    chrome.tabs.executeScript({ file: "test_click.js" });
            })
        },4000)
    })
    .then(function (href){
        alert(href);
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
    })
}

function test() {
    //chrome.tabs.executeScript({ file: "test_click.js" });
    
    chrome.tabs.executeScript({ file: "test_check.js" },function(href){
        alert(href)
        if(href!=''){
            alert(href);
        }
    });
    /*
    var check = setInterval(function () {
        chrome.tabs.executeScript({ file: "test_check.js" },function(href){
            if(href!=''){
                alert(href);
                clearInterval(check);
            }
        });
    }, 500);
    */
}

document.addEventListener('DOMContentLoaded', function () {
    var btn_start = document.querySelector('#btn_start');
    btn_start.addEventListener('click', execute);
});


document.addEventListener('DOMContentLoaded', function () {
    var btn_test = document.querySelector('#btn_test');
    btn_test.addEventListener('click', test);
});

