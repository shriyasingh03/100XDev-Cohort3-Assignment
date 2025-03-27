// Use a closure to encapsulate the counter
(function(){
  let counter = 0;
  let interval = setInterval(function(){
    let counterElement = document.getElementById("counter1");

    if(counter >= 100000){
        console.log("Counter limit reached, stopping...");
        clearInterval(interval);
        return;
        
    }
    counter++;
    counterElement.textContent = counter;

   

  },1000);
})();