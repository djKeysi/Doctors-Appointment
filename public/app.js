const phone = document.getElementById("phone");
const mask = new IMask(phone, {
  mask: "+{7}-000-000-00-00",
});

const fio = document.getElementById("fio");
phone.addEventListener("input", (event) => {
  if (fio !== "" && phone !== "") {
    document.getElementById("send").disabled = false;
  }
});

document.addEventListener("click", (event) => {});
// phoneInput.addEventListener("input", (event) => {
//   console.log("11111");
// });

// document.addEventListener("click", (event) => {
//   if (event.target.dataset.type === "remove") {
//     console.log("111112222");
//   }
// });
