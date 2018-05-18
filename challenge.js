const counter = document.getElementById("counter");
const minusBtn = document.getElementById("-");
const plusBtn = document.getElementById("+");
const likeBtn = document.getElementById("<3");
const likeDisp = document.querySelector(".likes");


var count = 0;
const likes = {};

window.setInterval(function() {
  count++;
  counter.innerHTML = count.toString();
}, 1000);

minusBtn.addEventListener("click", function(event) {
  count--;
  counter.innerHTML = (parseInt(counter.innerHTML) - 1).toString();
});

plusBtn.addEventListener("click", function(event) {
  count++;
  counter.innerHTML = (parseInt(counter.innerHTML) + 1).toString();
});

likeBtn.addEventListener("click", function(event) {
  if(likes[`${count}`] === undefined) {
    likes[`${count}`] = 1;
    const listItem = document.createElement('li');
    listItem.setAttribute("id", `${count}`);
    listItem.innerText = `${count} has been liked ${likes[`${count}`]} time.`;
    likeDisp.appendChild(listItem);
  } else {
    likes[`${count}`] += 1;
    const listItem = document.getElementById(`${count}`);
    listItem.innerHTML 
  }

});
