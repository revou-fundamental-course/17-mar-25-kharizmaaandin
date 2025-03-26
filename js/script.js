// Fungsi untuk menampilkan konten yang dipilih dan menyembunyikan lainnya
function tampilkanKonten(id) {
  document.getElementById('persegi').style.display = 'none';
  document.getElementById('persegiPanjang').style.display = 'none';
  document.getElementById(id).style.display = 'block';
}

// Menampilkan konten 'persegi' secara default saat halaman dimuat pertama kali
tampilkanKonten('persegi');

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-fitur a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Simpan halaman aktif ke localStorage agar tetap aktif setelah reload
      localStorage.setItem("activeNav", this.textContent);

      // Hapus class 'active' dari semua link, lalu tambahkan ke link yang diklik
      links.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Mengatur tampilan navigasi yang aktif setelah halaman dimuat ulang
  const activeNav = localStorage.getItem("activeNav");
  if (activeNav) {
    links.forEach((link) => {
      if (link.textContent === activeNav) {
        link.classList.add("active");
      }
    });
  }
});

// Menampilkan konten berdasarkan navigasi yang diklik dan menyimpan status ke localStorage
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-fitur a");
  const sections = ["persegi", "persegiPanjang"]; // Daftar ID konten

  function tampilkanKonten(id) {
    sections.forEach((section) => {
      document.getElementById(section).style.display = section === id ? "block" : "none";
    });

    // Simpan bagian aktif ke localStorage
    localStorage.setItem("activeSection", id);

    // Perbarui tombol aktif
    links.forEach((link) => link.classList.remove("active"));
    document.querySelector(`.btn-nav[onclick="tampilkanKonten('${id}')"]`).classList.add("active");
  }

  // Menampilkan bagian yang terakhir dikunjungi setelah reload
  const activeSection = localStorage.getItem("activeSection") || "persegi";
  tampilkanKonten(activeSection);

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      tampilkanKonten(this.getAttribute("onclick").match(/'([^']+)'/)[1]); // Ambil ID dari onclick
    });
  });
});

// Fungsi untuk validasi input (harus angka dan lebih dari 0)
function validateInput(value) {
  if (value.trim() === "" || isNaN(value)) {
    alert("Input tidak boleh kosong dan harus berupa angka!");
    return false;
  }
  if (Number(value) <= 0) {
    alert("Input harus lebih dari 0!");
    return false;
  }
  return true;
}

// Fungsi untuk menghitung luas persegi
function hitungLuas() {
  let sisi = document.getElementById("sisiLuas").value;
  if (!validateInput(sisi)) return;
  let hasil = sisi * sisi;
  document.getElementById("hasilLuas").innerHTML = `<p>L = S x S</p><p>L = ${sisi} x ${sisi}</p><p>L = ${hasil}</p>`;
}

// Fungsi untuk menghitung keliling persegi
function hitungKeliling() {
  let sisi = document.getElementById("sisiKeliling").value;
  if (!validateInput(sisi)) return;
  let keliling = 4 * sisi;
  document.getElementById("hasilKeliling").innerHTML = `<p>K = 4 x S</p><p>K = 4 x ${sisi}</p><p>K = ${keliling}</p>`;
}

// Fungsi untuk menghitung luas persegi panjang
function hitungLuasPersegiPanjang() {
  let panjang = document.getElementById("panjangLuas").value;
  let lebar = document.getElementById("lebarLuas").value;
  if (!validateInput(panjang) || !validateInput(lebar)) return;
  let hasil = panjang * lebar;
  document.getElementById("hasilLuasPersegiPanjang").innerHTML = `<p>L = p × l</p><p>L = ${panjang} × ${lebar}</p><p>L = ${hasil} cm²</p>`;
}

// Fungsi untuk menghitung keliling persegi panjang
function hitungKelilingPersegiPanjang() {
  let panjang = document.getElementById("panjangKeliling").value;
  let lebar = document.getElementById("lebarKeliling").value;
  if (!validateInput(panjang) || !validateInput(lebar)) return;
  let keliling = 2 * (Number(panjang) + Number(lebar));
  document.getElementById("hasilKelilingPersegiPanjang").innerHTML = `<p>K = 2 × (p + l)</p><p>K = 2 × (${panjang} + ${lebar})</p><p>K = ${keliling} cm</p>`;
}

// Fungsi untuk mereset input dan hasil pada luas persegi panjang
function resetFormLuasPersegiPanjang() {
  document.getElementById("panjangLuas").value = "";
  document.getElementById("lebarLuas").value = "";
  document.getElementById("hasilLuasPersegiPanjang").innerHTML = "";
}

// Fungsi untuk mereset input dan hasil pada keliling persegi panjang
function resetFormKelilingPersegiPanjang() {
  document.getElementById("panjangKeliling").value = "";
  document.getElementById("lebarKeliling").value = "";
  document.getElementById("hasilKelilingPersegiPanjang").innerHTML = "";
}

// Fungsi untuk mereset input dan hasil pada luas persegi
function resetFormLuas() {
  document.getElementById("sisiLuas").value = "";
  document.getElementById("hasilLuas").innerHTML = "";
}

// Fungsi untuk mereset input dan hasil pada keliling persegi
function resetFormKeliling() {
  document.getElementById("sisiKeliling").value = "";
  document.getElementById("hasilKeliling").innerHTML = "";
}