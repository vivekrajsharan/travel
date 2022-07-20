console.log("project 4");

const userName = document.getElementById("userName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validUserName = false;
let validEmail = false;
let validPhone = false;

// $("#failure").hide();
// $("#success").hide();
// `${"#failure"}.hide()`;
// `${"#failure"}.hide()`;
// console.log(name, email, phone);

userName.addEventListener("blur", () => {
  console.log("name is working");
  // alert using regex
  // let regex = new RegExp("^[a-zA-Z0-9]{3,10}$","g");
  let regex = /^([a-zA-Z])([a-zA-Z0-9]){2,10}$/;
  let str = userName.value;
  console.log(str);

  //   let result = regex.exec(str);
  //   console.log(result);
  if (regex.test(str)) {
    console.log("name is valid");
    userName.classList.remove("is-invalid");
    validUserName = true;
  } else {
    console.log("name is invalid");
    userName.classList.add("is-invalid");
    validUserName = false;
  }
});

email.addEventListener("blur", () => {
  console.log("email is working");

  //let regex = /^([a-zA-Z0-9])([a-zA-Z0-9\@\.]){2,20}$/;
  let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(str);
  if (regex.test(str)) {
    console.log("email is valid");
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    console.log("email is invalid");
    email.classList.add("is-invalid");
    validEmail = false;
  }
});

phone.addEventListener("blur", () => {
  console.log("phone is working");

  let regex = /^([0-9]){10}$/;
  let str = phone.value;
  console.log(str);
  if (regex.test(str)) {
    console.log("phone is valid");
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    console.log("phone is invalid");
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});

let submit = document.getElementById("submit");

// submit.addEventListener("click", () => {
//   console.log("submit button clicked");

//   let success = document.getElementById("success");
//   success.classList.add("show");
// });

submit.addEventListener("click", (e) => {
  console.log("submit button clicked");
  e.preventDefault();

  if (validUserName && validEmail && validPhone) {
    let success = document.getElementById("success");
    let failure = document.getElementById("failure");
    success.classList.add("show");

    failure.classList.remove("show");
    // var alert = bootstrap.Alert.getInstance(failure);
    // alert.close();
    // $("#failure").hide();
    // $("#success").show();
  } else {
    let failure = document.getElementById("failure");
    let success = document.getElementById("success");
    failure.classList.add("show");

    success.classList.remove("show");
    // var alert = bootstrap.Alert.getInstance(success);
    // alert.close();
    // $("#success").hide();
    // $("#failure").show();
  }
});
// $(...).hide() and $(...).show()

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("userName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("otherMsz").value = "";
});
