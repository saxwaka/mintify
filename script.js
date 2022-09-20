var items = [
  {
    image: "1",
    title: "The Holy Grail1",
    descript: "Fixed price1",
    price: "0.001ETH",
  },
  {
    image: "2",
    title: "The Holy Grail2",
    descript: "Fixed price2",
    price: "0.002ETH",
  },
  {
    image: "3",
    title: "The Holy Grail3",
    descript: "Fixed price3",
    price: "0.003ETH",
  },
  {
    image: "4",
    title: "The Holy Grail4",
    descript: "Fixed price4",
    price: "0.004ETH",
  },
  {
    image: "5",
    title: "The Holy Grail5",
    descript: "Fixed price5",
    price: "0.005ETH",
  },
  {
    image: "6",
    title: "The Holy Grail6",
    descript: "Fixed price6",
    price: "0.006ETH",
  },
  {
    image: "7",
    title: "The Holy Grail7",
    descript: "Fixed price7",
    price: "0.007ETH",
  },
  {
    image: "8",
    title: "The Holy Grail8",
    descript: "Fixed price8",
    price: "0.008ETH",
  },
  {
    image: "9",
    title: "The Holy Grail9",
    descript: "Fixed price9",
    price: "0.009ETH",
  },
  {
    image: "10",
    title: "The Holy Grail10",
    descript: "Fixed price10",
    price: "0.0010ETH",
  },
  {
    image: "11",
    title: "The Holy Grail11",
    descript: "Fixed price11",
    price: "0.0011ETH",
  },
  {
    image: "12",
    title: "The Holy Grail12",
    descript: "Fixed price12",
    price: "0.0012ETH",
  },
  {
    image: "13",
    title: "The Holy Grail13",
    descript: "Fixed price13",
    price: "0.0013ETH",
  },
  {
    image: "14",
    title: "The Holy Grail14",
    descript: "Fixed price14",
    price: "0.0014ETH",
  },
  {
    image: "15",
    title: "The Holy Grail15",
    descript: "Fixed price15",
    price: "0.0015ETH",
  },
  {
    image: "16",
    title: "The Holy Grail16",
    descript: "Fixed price16",
    price: "0.0016ETH",
  },
  {
    image: "1",
    title: "The Holy Grail1",
    descript: "Fixed price1",
    price: "0.001ETH",
  },
  {
    image: "2",
    title: "The Holy Grail2",
    descript: "Fixed price2",
    price: "0.002ETH",
  },
  {
    image: "3",
    title: "The Holy Grail3",
    descript: "Fixed price3",
    price: "0.003ETH",
  },
  {
    image: "4",
    title: "The Holy Grail4",
    descript: "Fixed price4",
    price: "0.004ETH",
  },
  {
    image: "5",
    title: "The Holy Grail5",
    descript: "Fixed price5",
    price: "0.005ETH",
  },
  {
    image: "6",
    title: "The Holy Grail6",
    descript: "Fixed price6",
    price: "0.006ETH",
  },
  {
    image: "7",
    title: "The Holy Grail7",
    descript: "Fixed price7",
    price: "0.007ETH",
  },
  {
    image: "8",
    title: "The Holy Grail8",
    descript: "Fixed price8",
    price: "0.008ETH",
  },
  {
    image: "9",
    title: "The Holy Grail9",
    descript: "Fixed price9",
    price: "0.009ETH",
  },
  {
    image: "10",
    title: "The Holy Grail10",
    descript: "Fixed price10",
    price: "0.0010ETH",
  },
  {
    image: "11",
    title: "The Holy Grail11",
    descript: "Fixed price11",
    price: "0.0011ETH",
  },
  {
    image: "12",
    title: "The Holy Grail12",
    descript: "Fixed price12",
    price: "0.0012ETH",
  },
  {
    image: "13",
    title: "The Holy Grail13",
    descript: "Fixed price13",
    price: "0.0013ETH",
  },
  {
    image: "14",
    title: "The Holy Grail14",
    descript: "Fixed price14",
    price: "0.0014ETH",
  },
  {
    image: "15",
    title: "The Holy Grail15",
    descript: "Fixed price15",
    price: "0.0015ETH",
  },
  {
    image: "16",
    title: "The Holy Grail16",
    descript: "Fixed price16",
    price: "0.0016ETH",
  },
];
var txt = "";
function loadpage(x) {
    document.getElementsByClassName("page_active")[0].classList.remove("page_active");
    document.getElementsByClassName("page")[x-1].classList.add("page_active");
  xx = x * 8 - 8;
  txt = "";
  for (let index = 0; index < 8; index++) {
    txt += '<div class="item">';
    txt += '<img src="/image/' + items[index + xx]["image"] + '.png" alt="">';
    txt += "<h2>" + items[index + xx]["title"] + "</h2>";
    txt += "<p>Pixart Motion</p>";
    txt += '<div class="item__bot">';
    txt += "<h5>" + items[index + xx]["descript"] + "</h5>";
    txt += '<div class="price">' + items[index + xx]["price"] + "</div>";
    txt += "</div>";
    txt += "</div>";
  }
  document.getElementById("items").innerHTML = txt;
}
window.onload = loadpage(1);