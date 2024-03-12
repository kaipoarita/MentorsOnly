// app.js

function showDropdown() {
    var dropdown = document.getElementById('profileOptions');
    dropdown.style.display = 'block';
    document.getElementById('profileFace').setAttribute('aria-expanded', 'true');
}

function hideDropdown() {
    var dropdown = document.getElementById('profileOptions');
    dropdown.style.display = 'none';
    document.getElementById('profileFace').setAttribute('aria-expanded', 'false');
}
