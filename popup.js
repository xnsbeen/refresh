
function refresh(){
    chrome.tabs.executeScript(null,{file:'content.js'});
}

document.addEventListener('DOMContentLoaded',function(){
    var btn_start = document.querySelector('#btn_start');
    btn_start.addEventListener('click',refresh);
});