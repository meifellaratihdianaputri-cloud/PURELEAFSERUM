// LOGIN
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user && pass) {
        sessionStorage.setItem("isLogin", "true");
        window.location.href = "main.html";
    } else {
        alert("Username dan password wajib diisi.");
    }
}

// CEK LOGIN (PROTEKSI HALAMAN)
function checkLogin() {
    const isLogin = sessionStorage.getItem("isLogin");

    if (isLogin !== "true") {
        alert("Silakan login terlebih dahulu.");
        window.location.href = "index.html";
    }
}

// LOGOUT
function logout() {
    sessionStorage.removeItem("isLogin");
    window.location.href = "index.html";
}

// GANTI GAMBAR PRODUK
function changeImage(event) {
    const img = document.getElementById("productImg");
    img.src = URL.createObjectURL(event.target.files[0]);
}
