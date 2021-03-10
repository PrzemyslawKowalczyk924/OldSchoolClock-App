const hands = document.querySelectorAll('.hand');

window.setInterval(function(){
    const date = new Date();
    const time = [
        date.getSeconds(),
        date.getMinutes(),
        date.getHours()
    ];
    
    for (const [index, hand] of hands.entries()) {
        //console.log(index);
        //console.log(hands);
        //console.log(hand);
        if (index === 2) {
            hand.style.transform = `rotate(${time[index] / 12 * 360}deg)`;
        } else {
            hand.style.transform = `rotate(${time[index] / 60 * 360}deg)`;
        }

        //console.log(date);
    }

    document.getElementById("datetime").innerHTML = date.toLocaleString();

    /* const hours = document.querySelector('.hours');
    hours.style.transform = `rotate(${date.getHours() / 12 * 360}deg)`;

    const minutes = document.querySelector('.minutes');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 180}deg)`;

    const seconds = document.querySelector('.seconds');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 90}deg)`; */
}, 1000);
