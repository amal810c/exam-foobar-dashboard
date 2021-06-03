window.addEventListener("DOMContentLoaded", init);

// let json;
let url = "https://teamellewoods.herokuapp.com/";

async function init() {
  setTimeout(refreshDashboard, 1000);
}

async function refreshDashboard() {
  const respons = await fetch(url);
  const data = await respons.json();

  //update being severd
  document.querySelector("#serving_list").innerHTML = "";
  data.serving.forEach((customer) => {
    console.log(customer.order);
    const element = getCustomerElement(customer);
    document.querySelector("#serving_list").appendChild(element);
  });

  setTimeout(refreshDashboard, 1000);
}

function getCustomerElement(customer) {
  const element = document.querySelector("template#customer").content.cloneNode(true);
  element.querySelector(".id").textContent = customer.id;
  return element;
}
