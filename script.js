let clicked = false;

// const likeBtn = document.getElementsByClassName("like-btn")[0]; // redundant
let likeIcon = document.getElementsByClassName("love"); //array of icons[size of 3]
let num = document.getElementsByClassName("num"); //array of icons[size of 3]


function changeIconColor(index) {
  // index is the key of each icon
  if (clicked == false) {
    num[index].textContent++;
    likeIcon[index].style.color = "red";
    clicked = true;
  } else {
    num[index].textContent--;
    likeIcon[index].style.color = "black";
    clicked = false;
  }
}
