

/*function refresh(){
   new Promise((resolve, reject) => {
       chrome.tabs.executeScript({file:"content.js"},function(href){
            chrome.tabs.query({'active':true},function(tabs){
                chrome.tabs.update(tabs[0].id,{url:href},function(){
                    
                });
       });
   })
   .then(() => {

        chrome.tabs.query({'active':true},function(tabs){
            chrome.tabs.update(tabs[0].id,;
       
   })
}
*/

function refresh(){
    
    new Promise ((resolve, reject) => {
        chrome.tabs.executeScript({file:"content.js"},function(href){
            chrome.tabs.query({'active':true},function(tabs){
                chrome.tabs.update(tabs[0].id,{url:href.toString()},function(tab){
                    resolve(tab.id);
                })
            })
        })
    })
    .then((tabId)=>{
        chrome.tabs.executeScript(tabId,{file:"next_content.js"});
    });
}


document.addEventListener('DOMContentLoaded',function(){
    var btn_start = document.querySelector('#btn_start');
    btn_start.addEventListener('click',refresh);
});


/*
return new Promise((resolve, reject) => {
    chrome.tabs.executeScript({file:'content.js'},function(){
        alert('start');
    });
    resolve();
});
*/