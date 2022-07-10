


                        const minnum   =   document.querySelector('.minnumber'),
                        maxnum   =   document.querySelector('.maxnumber'),
                        getinput =   document.querySelector('#guessnumber'),
                        getbtn   =   document.querySelector('#btn'),
                        message1 =   document.querySelector('.message1'),
                        message2 =   document.querySelector('.message2');
                        getgame =    document.querySelector('#game');



                        let min = 1,
                                max = 10,
                                gameLeft = 3,
                                winningnum = randomnum(min,max);

                        minnum.textContent = min;
                        maxnum.innerText = max;


                        getbtn.addEventListener('click', function(){
                        // console.log("working");
                        // console.log(getinput.value);
                        // console.log(typeof getinput.value);


                        // let guess = Number(getinput.value);
                        // let guess = +getinput.value;
                        let guess = parseInt(getinput.value);

                        // console.log(guess);
                        // console.log(typeof guess);

                        if(guess < min || guess > max || isNaN()){
                        // console.log(`Please enter a number between ${min} to ${max}`);
                        // message2.textContent = `Please enter a number between ${min} to ${max}`;

                        setmessage2(`Please enter a number between ${min} to ${max}`,"red");
                        }


                        if(guess === winningnum) {
                        // game WON

                        // disable getinput
                        // getinput.disabled = true;

                        // getinput border color to green
                        // getinput.style.borderColor = "green";

                        // message1
                        // message1.textContent = `${winningnum} is correct!!!, You Won`;
                        // message1.style.color = "green";

                        // setmessage1(`${winningnum} is correct!!!, You Won`,"green");

                        // play again ?
                        // getbtn.value = 'Play Again';

                        gameover(true,`${winningnum} is correct!!!, You Won`);
                        }else{

                        // Wrong number

                        // gameLeft--;
                        gameLeft -= 1;

                        // console.log(gameLeft);

                        if(gameLeft === 0) {
                                // game over LOSE

                                // disabled getinput
                                // getinput.disabled = true;

                                // getinput border to red
                                // getinput.style.borderColor = "red";

                                // message1
                                // message1.textContent = `Game Over, You Lost, The corrct number is ${winningnum}`;
                                // message1.style.color = "red";

                                // setmessage1(`Game Over, You Lost, The corrct number is ${winningnum}`,"red");

                                // play again ?
                                // getbtn.value = "Play Again";

                                gameover(false,`Game Over, You Lost, The corrct number is ${winningnum}`);


                        }else{
                                // continue Game

                                // getinput border color to red
                                getinput.style.borderColor = "red";


                                // clear getinput old value
                                getinput.value = "";

                                // message1
                                // message1.innerText = `${guess} is not correct , ${gameLeft} guess left`;
                                // message1.style.color = "blue";

                                setmessage1(`${guess} is not correct , ${gameLeft} guess left`, "blue");



                        }
                        }
                        });


                        //Message

                        function setmessage1(msg,color){
                        message1.textContent = msg;
                        message1.style.color = color;
                        }


                        function setmessage2(msg,color){
                        message2.textContent = msg;
                        message2.style = color;

                        setTimeout(function(){
                        message2.innerText = "";
                        },2000);



                        }



                        // Game over

                        function gameover(won,msg){

                        let color;

                        won === true ? color = "green" : color = "red";

                        //getinput disabled
                        getinput.disabled = true;

                        // getinput border color to green or red
                        getinput.style.borderColor = color;

                        // message1
                        setmessage1(msg,color);

                        // play again ?
                        getbtn.value = 'Play Again';

                        // add class name
                        // getbtn.className = "btn playagain";
                        getbtn.classList.add('playagain');


                        }


                        getgame.addEventListener('mouseup',function(e){
                        console.log(e.target);

                        if(e.target.className === "btn playagain"){
                        // console.log("working");

                        window.location.reload();
                        }
                        });


                        // For Winning Number
                        function randomnum(min,max){
                                                                                                // 10-1 + 1
                        let getrdm = Math.floor(Math.random()*(max-min)+1);
                        return getrdm;
                        }