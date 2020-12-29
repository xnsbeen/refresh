href = '1';

function ddd(){
    var func = setInterval(function(){
        i= i+1;
        alert(i);
        if(i==5){
            clearInterval(func);
        }
    },1000)   
}

async function test(){
    i =0;
    await ddd();
    alert('마지막에 와야 합니다.');s
}

test();


href