function payTypeChanged() {
    let payType = document.forms[0].payType.value;
    if (!payType)
        return;

    document.getElementById("formContainer").className = payType;
    document.getElementById("formSelectionContainer").className = payType;

    loadPayPalForm(payType);
}

function programChanged(e) {
    var slugOfSelectedProgram = document.querySelector('#programContainer input[name="os0"]:checked');
    if (!slugOfSelectedProgram)
        return;
    slugOfSelectedProgram = slugOfSelectedProgram.dataset.slug;
    document.getElementById("formRegistration").className = `standard-block form ${slugOfSelectedProgram}`;
    inputChanged(e);
}

function loadPayPalForm(payType) {
    let paypalForm = document.querySelector(`#${payType} .paypalForm`);
    if (paypalForm.hostedButtonFormLoaded)
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

    let validity = e.target.validity;
    if (validity.valueMissing) {
        input.setCustomValidity("Please fill out this field");
        input.reportValidity();
        parentNode.querySelector(".paypalForm").classList.add("disabled");
        return;
    } else if (validity.patternMismatch) {
        input.setCustomValidity("Please enter a valid balance amount in USD");
        input.reportValidity();
        parentNode.querySelector(".paypalForm").classList.add("disabled");
        return;
    }

    input.setCustomValidity("");

    let name = parentNode.querySelector("#memo");
    let amalfiInput = parentNode.querySelector(".amalfi-input.name");
    name.value = amalfiInput.value;

    let amount = parentNode.querySelector("#amount");
    amalfiInput = parentNode.querySelector(".amalfi-input.cost");
    if (amalfiInput)
        amount.value = +amalfiInput.value;
    else {
        let slugOfSelectedProgram = document.querySelector('#programContainer input[name="os0"]:checked');
        if (slugOfSelectedProgram) {
            slugOfSelectedProgram = slugOfSelectedProgram.dataset.slug;
            amalfiInput = document.getElementById(`invoice-${slugOfSelectedProgram}`);
            amount.value = +amalfiInput.dataset.total;
        } else {
            amount.value = 0;
        }
    }

    if (name.value && amount.value > 0)
        parentNode.querySelector(".paypalForm").classList.remove("disabled");
    else
        parentNode.querySelector(".paypalForm").classList.add("disabled");
}

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("payTypeContainer").addEventListener("click", payTypeChanged);
    document.getElementById("programContainer").addEventListener("click", programChanged);

    let inputs = document.querySelectorAll(".amalfi-input");
    inputs.forEach(input => input.addEventListener("input", inputChanged));

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