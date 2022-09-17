import getDatas from "../scripts/getData.js";

let gloabalArr = [];

//FETCHING DATA
var data = await getDatas("https://whispering-badlands-80400.herokuapp.com/cars");
gloabalArr = [...data];

console.log(gloabalArr,"globar")

window.addEventListener("load", function () {
displayData(data)
  });

  let display = document.getElementById("content");
const displayData = (data) => {
  display.innerHTML = "";
  data.map((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "card");

    let img = document.createElement("img");
    img.src =
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";

    let name = document.createElement("h4");
    name.setAttribute("class", "name");
    name.innerHTML = `brand : ${el.brand}`;

    let age = document.createElement("p");
    age.setAttribute("class", "age");
    age.innerHTML = `Age : ${el.year}`;

    let place = document.createElement("p");
    place.setAttribute("class", "place");
    place.innerHTML = `Place : ${el.type}`;

    let batch_name = document.createElement("p");
    batch_name.setAttribute("class", "batch");
    batch_name.innerHTML = `BatchName : ${el.kms}`;

    let profession = document.createElement("p");
    profession.setAttribute("class", "prof");
    profession.innerHTML = `Profession : ${el.Description}`;
    let Price = document.createElement("p");
   Price.setAttribute("class", "price");
   Price.innerHTML = `Price : ${el.Price}`;

    let edit = document.createElement("p");
    edit.className = "edit";
    edit.innerHTML = `<i class="fa fa-edit" style="font-size:24px"></i>`;
    edit.addEventListener("click", function () {
      editUser(el);
    });

    let delete_user = document.createElement("p");
    delete_user.className = "delete";
    delete_user.innerHTML = `<i class="fa fa-trash-o" style="font-size:24px"></i>`;
    delete_user.addEventListener("click", function () {
      deleteUser(el.id);
    });

    let div2 = document.createElement("div");
    div2.className = "ED";
    div2.append(edit, delete_user);

    div.append(img, name, age, place, batch_name, profession,Price, div2);

    display.append(div);
  });
};

displayData(data);

let filterValue = document.getElementById("filter")
let sortData;
const filterByBatch = () => {
  
  let slcFilterValue = filterValue.value;
  console.log(slcFilterValue);
  if (slcFilterValue == "asc") {
    sortData = gloabalArr.sort((a, b) => a.kms - b.kms);
  } else if (sortSalaryValue == "desc") {
    sortData = gloabalArr.sort((a, b) => b.kms - a.kms);
  }
  gloabalArr = [...sortData];
  displayData(sortData);
};
filterValue.addEventListener("change", filterByBatch);