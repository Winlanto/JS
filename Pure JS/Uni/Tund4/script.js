let fullName, birthYear, email, saveBtn, loadBtn, deleteBtn;

fullName = document.querySelector("#name");
birthYear = document.querySelector("#birthYear");
email = document.querySelector("#email");
saveBtn = document.querySelector("#save");
loadBtn = document.querySelector("#load");
deleteBtn = document.querySelector("#delete");

saveBtn.addEventListener("click", saveLocal);
deleteBtn.addEventListener("click", deleteLocal);
loadBtn.addEventListener("click", loadLocal);


function saveLocal(){
    localStorage.setItem("name", fullName.value);
    localStorage.setItem("birthYear", birthYear.value);
    localStorage.setItem("email", email.value);
    sessionStorage.setItem("name", fullName.value);
    sessionStorage.setItem("birthYear", birthYear.value);
    sessionStorage.setItem("email", email.value);
    document.cookie = "email="+email.value;
    let data = {
        fullName: fullName.value,
        birthYear: birthYear.value,
        email: email.value
    }
    localStorage.setItem("personData",JSON.stringify(data));
}

function deleteLocal() {
    localStorage.removeItem("name");
    localStorage.removeItem("birthYear");
    localStorage.removeItem("email");

    sessionStorage.removeItem("name");
    sessionStorage.removeItem("birthYear");
    sessionStorage.removeItem("email");
}

function loadLocal() {
    fullName.value = localStorage.getItem("name");
    birthYear.value = localStorage.getItem("birthYear");
    email.value = localStorage.getItem("email");
    console.log(sessionStorage.getItem("name"), sessionStorage.getItem("birthYear"), sessionStorage.getItem("email"));
    console.log("cookie: "+document.cookie);
    const localData = JSON.parse(localStorage.getItem("personData"));
    document.querySelector("#data").innerHTML = `<ul id='list'><li>Täisnimi: ${localData.fullName}</li><li>Sünniaasta: ${localData.birthYear}</li><li>Email: ${localData.email}</li></ul>`;
    document.querySelector("#list").style.listStyle = "none";
    document.querySelector("#list").style.padding = "0";
}

