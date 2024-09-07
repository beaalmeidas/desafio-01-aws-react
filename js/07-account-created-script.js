// Function to show account info on the card
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        fullName: params.get('full-name'),
        email: params.get('email-address')
    };
}

const accountInfo = getQueryParams();

document.querySelector('#name-info').innerHTML = `<span class="label">Name:</span> ${accountInfo.fullName}`;
document.querySelector('#email-info').innerHTML = `<span class="label">Email:</span> ${accountInfo.email}`;