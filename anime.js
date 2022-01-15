anime({
  targets: "div.box.red",
  translateX: [{ value: 250, duration: 1000 }],
});

anime({
  targets: "div.box.blue",
  translateX: 250,
  scale: 1.5,
  rotate: "1turn",
  delay: 1000,
  duration: 3000,
});

anime({
  targets: "div.dom-node",
  translateX: [{ value: 250, duration: 2000 }],
});

var objPropLogEl = document.querySelector("#obj-log");

var myObj = {
  prop1: 0,
  prop2: "0%",
};

anime({
  targets: myObj,
  prop1: 50,
  prop2: "100%",
  easing: "linear",
  round: 1,
  update: function () {
    objPropLogEl.innerHTML = JSON.stringify(myObj);
  },
});

anime({
  targets: ["#array1", "#array2"],
  translateX: [{ value: 250, duration: 1000 }],
});

anime({
  targets: "div.box.green",
  left: "240px",
  translateX: 250,
  backgroundColor: "#FFF",
  borderRadius: ["0%", "50%"],
  easing: "easeInOutQuad",
});

anime({
  targets: "input.dom-attr ",
  value: [0, 1000],
  round: 1,
  easing: "easeInOutExpo",
});
