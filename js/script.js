// Ini Javascript External
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-fitur a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah reload

            // Hapus kelas 'active' dari semua link
            links.forEach(l => l.classList.remove("active"));

            // Tambahkan kelas 'active' ke link yang diklik
            this.classList.add("active");
        });
    });
});

function hitungLuas() {
    let sisi = document.getElementById("sisiLuas").value;
    let hasil = sisi * sisi;
    document.getElementById("hasilLuas").innerHTML = 
        `<p>L = S x S</p>
         <p>L = ${sisi} x ${sisi}</p>
         <p>L = ${hasil}</p>`;
}
function hitungKeliling() {
    let sisi = document.getElementById("sisiKeliling").value;
    let keliling = 4 * sisi;
    document.getElementById("hasilKeliling").innerHTML = 
        `<p>K = 4 x S</p>
         <p>K = 4 x ${sisi}</p>
         <p>K = ${keliling}</p>`;
}

function resetFormLuas() {
    document.getElementById("sisiLuas").value = "";
    document.getElementById("hasilLuas").innerHTML = "";
}

function resetFormKeliling() {
    document.getElementById("sisiKeliling").value = "";
    document.getElementById("hasilKeliling").innerHTML = "";
}
