let submit_btn = document.querySelector('#submit_btn');
let totalMoney = 0;

submit_btn.addEventListener('click', function(){

    let text_input = document.querySelector('#text_input').value;
    let show_text = document.querySelector('#show_text');
    
    show_text.innerHTML = text_input;
    show_text.style.color = 'blue';
    totalMoney = text_input


    

    console.log(text_input);
    
});



let submit = document.querySelector('#submit');

submit.addEventListener('click', function(){

    let input_text = document.querySelector('#input_text').value;
    let text_show = document.querySelector('#text_show');

    let show_text =document.querySelector('#show_text');
    
    text_show.innerHTML = input_text;
    text_show.style.color = 'red';

    show_text.innerHTML = totalMoney-input_text;
    money_charge.innerHTML =input_text*0.005;

    let charge = parseInt(money_charge.innerHTML);
    show_text.innerHTML =(totalMoney-input_text)-(charge);


    total_cashback.innerHTML =input_text*0.02;

    let cashback = parseInt(total_cashback.innerHTML);
    show_text.innerHTML =((totalMoney-input_text)-(charge))+(cashback);









    console.log( typeof( charge));



     
    
});