const name = prompt("Enter Your Name");

alert(
  "Welcome " +
    name +
    " to your punishment\nGood luck trying to find the right crack button\nNote that the crack button is random\nEnjoy"
);

function Crack() {
  choice = Math.floor(Math.random() * 7);
  if (choice == 6) {
    alert(
      "Congratulations you passed the test\nYou may go back to the disabled page and retake the test"
    );

    location.href = "https://m-hasan-ibrahim.github.io/Dota2WebPage";
  } else {
    alert("not smart enough, try again");
  }
}
