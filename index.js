let func=function(){
    var x=document.getElementById("age").value;
    document.getElementById("out").innerHTML=x;
}
let y = () => alert('از انجام بازنشانی تنظیمات اطمینان دارید؟');

function fun() {
    if(document.getElementById('fname').value==null && document.getElementById('lname').value==null && document.getElementById('fathername').value==null && document.getElementById('nationID').value==null && document.getElementById('email').value==null){
        alert('تمام فیلدهای قسمت اطلاعات شخص راپرکنید.')
    }
}