(function(){
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equals = document.querySelector(".btn-equal");

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    equals.addEventListener('click', function(e) {

        let input = screen.value;
        
        if (input === "") {
            screen.value = "";
        } else {
            let answer;

            console.log("Input:", input);
            
            try {
                answer = eval(input);
                screen.value = answer;
            } catch (error) {
                // Handle any errors that may occur during evaluation
                console.log("Error:", error);
                screen.value = "Invalid input";
            }
        }
    });

    // equals.addEventListener('click', function(e) {
    //     screen.value = "1";
    // });
    
    clear.addEventListener('click', function(e){
        screen.value=" ";
    })        
})();