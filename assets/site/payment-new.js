function payTypeChanged() {
    let payType = document.forms[0].payType.value;
    if (!payType)
        return;

    document.getElementById("formContainer").className = payType;
    document.getElementById("formSelectionContainer").className = document.forms[0].payType.value;
    loadPayPalForm(payType);
}

function programChanged(e) {
    var slugOfSelectedProgram = document.querySelector('#programContainer input[name="os0"]:checked');
    slugOfSelectedProgram = slugOfSelectedProgram.dataset.slug;
    document.getElementById("formRegistration").className = `standard-block ${slugOfSelectedProgram}`;
}

function loadPayPalForm(payType) {
    let paypalForm = document.querySelector(`#${payType} .paypalForm`);
    if (!paypalForm || paypalForm.hostedButtonFormLoaded)
        return;
    let hostedButtonId = paypalForm.dataset.hostedButtonId;
    paypal.HostedButtons({
        hostedButtonId: hostedButtonId
    }).render(`#paypal-container-${hostedButtonId}`);
    paypalForm.hostedButtonFormLoaded = true;
}

function inputChanged(e) {
    let input = e.target;
    let parentNode = input.closest(".form");
    if (!parentNode)
        return;

    let name = parentNode.querySelector("#memo");
    let amount = parentNode.querySelector("#amount");

    if (name.value && amount.value > 0)
        parentNode.querySelector(".paypalForm").classList.remove("disabled");
    else
        parentNode.querySelector(".paypalForm").classList.add("disabled");
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