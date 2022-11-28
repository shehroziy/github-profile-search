const API_URL = "https://api.github.com/users/";

const result = document.querySelector(".result"),
  form = document.querySelector("#form"),
  search = document.querySelector("#search");

const getUser = async (user) => {
  const res = await fetch(API_URL + user);
  const data = await res.json();
}
