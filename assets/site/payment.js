function payTypeChanged() {
    let payType = document.forms[0].payType.value;
    if (!payType)
        return;
    loadPayPalForm(payType);
}

function loadPayPalForm(payType) {
    let paypalContainer = document.getElementById("paypalFormContainer");
    let formContainer = document.createElement("div");
    const hostedButtonIds = {
        payTypeRegistration: "5PEGZF49YR5G2",
        payTypeInstallment: "XLANCSL4CNFLU",
        payTypeBalance: "LCQMKDH2KKVC6",
    }

    const formId = `paypalForm-${hostedButtonIds[payType]}`;
    formContainer.setAttribute("id", formId);
    paypalContainer.replaceChildren(formContainer);

    paypal.HostedButtons({
        hostedButtonId: hostedButtonIds[payType]
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