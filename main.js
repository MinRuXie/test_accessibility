$(function(){
    let $header = $('#faq-header');

    $header.on('click keypress', function(e){
        console.log(e.type); //事件類型
        console.log(e.which); //觸發事件的按鈕代號
        
        // 如果鍵盤事件不是按enter(keycode=13)就結束
        if (e.type!=='keypress' || e.which!==13) return;

        $(this).toggleClass('show');
    });
});