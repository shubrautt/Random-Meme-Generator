const mainWin = document.querySelector(".main");
const img = document.querySelector(".img");
getMeme();

function getMeme() {
  fetch("https://meme-api.herokuapp.com/gimme")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((result) => {
      console.log(result.url);
      loader();
      setTimeout(() => {
        img.setAttribute("src", result.url);
      }, 1000);
    });
}
function loader() {
  var url1 = "1.gif";
  img.setAttribute("src", url1);
}
