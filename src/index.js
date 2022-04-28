import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  alert(inputText);
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);
  const li = document.createElement("li");
  li.innerText = inputText;
  console.log(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
