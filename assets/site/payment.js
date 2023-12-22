function payTypeChanged() {
    document.getElementById("formContainer").className = document.forms[0].payType.value;
    document.getElementById("formSelectionContainer").className = document.forms[0].payType.value;
}

function programChanged() {
    var slugOfSelectedProgram = document.querySelector('#programContainer input[name="os0"]:checked');
    slugOfSelectedProgram = slugOfSelectedProgram.dataset.slug;
    document.getElementById("formRegistration").className = `standard-block ${slugOfSelectedProgram}`;
}

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("payTypeContainer").addEventListener("click", payTypeChanged);
    document.getElementById("programContainer").addEventListener("click", programChanged);

    var search = new URLSearchParams(location.search);
    if (search.get("registration")) {
        document.getElementById("payTypeRegistration").checked = true;
        document.getElementById(`program-${search.get("registration")}`).checked = true;
        payTypeChanged();
        programChanged();
    } else if (search.get("balance")) {
        document.getElementById("payTypeBalance").checked = true;
        payTypeChanged();
    }
});