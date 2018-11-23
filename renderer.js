// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var r101=document.getElementById('r101');
var confirm=confirm('예약이 들어왔습니다');
if(confirm==true){
    alert('확인');
    r101.addEventListener('click',function() {
        if(r101.style.background=='white'){
            r101.style.background =='red';
        }else{
            r101.style.background='white';
        }
    }
}else{
    alert('취소');
}


