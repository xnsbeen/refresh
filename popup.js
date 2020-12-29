

function refresh() {
    new Promise(function(resolve,reject){
        chrome.tabs.executeScript({ file: "content.js" }, function (href) {
            chrome.tabs.query({ 'active': true, 'currentWindow': true }, function (tabs) {
                chrome.tabs.update(tabs[0].id, { url: href.toString() }, function (tab1) {
                    var listener = function(tabId, changeInfo, tab){
                        if(tabId == tab1.id && changeInfo.status == 'complete'){
                            chrome.tabs.executeScript({ file: "next_content.js" });
                        }
                    }
                    chrome.tabs.onUpdated.addListener(listener);
                })
            })
        })
    })
    .then(funcion)
    
}

function test(){
    chrome.tabs.executeScript({file:"test_script.js"},function(href){
        alert('받은값 : ' + href);
    });
}

document.addEventListener('DOMContentLoaded',function(){
    var btn_start = document.querySelector('#btn_start');
    btn_start.addEventListener('click',refresh);
});


document.addEventListener('DOMContentLoaded',function(){
    var btn_test = document.querySelector('#btn_test');
    btn_test.addEventListener('click',test);
});

