function payTypeChanged() {
    let payType = document.forms[0].payType.value;
    if (!payType)
        return;
    loadPayPalForm(payType);
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
        hostedButtonId: hostedButtonId
    }).render(`#${formId}`);
}

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("payTypeContainer").addEventListener("click", payTypeChanged);

    var search = new URLSearchParams(location.search);
    if (search.get("registration")) {
        document.getElementById("payTypeRegistration").checked = true;
        payTypeChanged();
    } else if (search.get("balance")) {
        document.getElementById("payTypeBalance").checked = true;
        payTypeChanged();
    }
});