var websiteName = document.getElementById("name")
var websiteLink = document.getElementById("link")

var cartona = []//array
// STORAGE
if (localStorage.getItem("websites") !== null) {
    cartona = JSON.parse(localStorage.getItem("websites", JSON.stringify(cartona)))
    displayData()
}
//! &&&&&& Functions $$$$$$
function addWebsite() {
    if (validName() && validSite()) {
        var website = {
            Name: websiteName.value,
            Link: websiteLink.value,
        }

        //  IF
        cartona.push(website);
        localStorage.setItem("websites", JSON.stringify(cartona))
        displayData()
        Delete()
    }
}
// ----------------
function Delete() {
    websiteName.value = null
    websiteLink.value = null
}
function Deleteitem(index) {
    cartona.splice(index, 1)
    localStorage.setItem("websites", JSON.stringify(cartona))
    displayData()
}

// ------------------
function displayData() {
    var container = ''
    for (var i = 0; i < cartona.length; i++) {
        container += `
        <tr>

        <td>${i + 1}</td>
        <td>${cartona[i].Name}</td>
        <td>
        <a href="${cartona[i].Link}"><button id="btn" class="btn-1">
                <i class="fa-solid fa-eye pe-2"></i>
                Visit</button></a>
    </td>
        <td><button onclick="Deleteitem(${i})" class="btn-2">
                <i class="fa-solid fa-trash-can pe-2"></i>
                Delete</button></td>
    </tr>
        `
    }
    document.getElementById("data").innerHTML = container

}
// -------------------

function validName() {
    var validSite = websiteName.value
    var regex = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/
    var alert = document.getElementById("alertName")
    if (regex.test(validSite)) {
        websiteName.classList.add("is-valid")
        websiteName.classList.remove("is-invalid")
        alert.classList.add("d-none")
        return true
    }
    else {
        websiteName.classList.add("is-invalid")
        websiteName.classList.remove("is-valid")
        alert.classList.remove("d-none")
        return false
    }
}
function validSite() {
    var validUrl = websiteLink.value
    var regex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/
    var alert = document.getElementById("alertUrl")
    if (regex.test(validUrl)) {
        websiteLink.classList.add("is-valid")
        websiteLink.classList.remove("is-invalid")
        alert.classList.add("d-none")
        return true
    }
    else {
        websiteLink.classList.add("is-invalid")
        websiteLink.classList.remove("is-valid")
        alert.classList.remove("d-none")
        return false
    }

}
// ======================================


