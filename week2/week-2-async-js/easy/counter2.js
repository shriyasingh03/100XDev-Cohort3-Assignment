let count =0;

function counter(){
  document.getElementById("counter").textContent = count;
    count++;

    setTimeout(counter,1000);
}
counter();