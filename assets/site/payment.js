function payTypeChanged() {
    let payType = document.forms[0].payType.value;
    if (!payType)
        return;

    document.body.classList.remove("formRegistration", "formBalance");
    document.body.classList.add(payType);
    loadPayPalForm(payType);
}

function programButtonClicked(e) {
    var slugOfSelectedProgram = e.target.dataset.slug;
    document.getElementById("registrationFees").className = `standard-block ${slugOfSelectedProgram}`;
}

function loadPayPalForm(payType) {
    let paypalContainer = document.getElementById("paypalFormContainer");
    paypalContainer.replaceChildren();

    let formContainer = document.createElement("div");
    const hostedButtonId = payType == "formRegistration" ? "5PEGZF49YR5G2" : "LCQMKDH2KKVC6";
    const formId = `paypalForm-${hostedButtonId}`;
    formContainer.setAttribute("id", formId);
    paypalContainer.append(formContainer);

    paypal.HostedButtons({
        hostedButtonId: hostedButtonId,
        onInit: (data, actions) => {
            alert('hie');
        }
    }).render(`#${formId}`);
}

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("payTypeContainer").addEventListener("click", payTypeChanged);
    document.getElementById("programContainer").addEventListener("click", programButtonClicked);

    var search = new URLSearchParams(location.search);
    if (search.get("registration")) {
        document.getElementById("payTypeRegistration").checked = true;
        document.getElementById(`program-${search.get("registration")}`).checked = true;
        payTypeChanged();
        programButtonClicked();
    } else if (search.get("balance")) {
        document.getElementById("payTypeBalance").checked = true;
        payTypeChanged();
    }
});