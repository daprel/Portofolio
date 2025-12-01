welcomeMessage();

function welcomeMessage() {
    //let userName = prompt("Please enter your name:");
    let userName = "Guest";

    if (userName == '' || userName == null) {
        userName = "Guest";
    }
    document.getElementById("welcome-speech").innerText = "Welcome, " + userName + "!";
    console.log("Welcome," + userName + "!");
}

function validateForm(e) {
    e.preventDefault(); // cegah reload

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === '' || email === '' || message === '') {
    alert('Nama, email, dan pesan wajib diisi.');
    return;
  }

    document.getElementById("output").innerText = "Halo! " + name + " dengan email " + email + "\n Pesan Anda: " + message + " (pesan kamu baru nyampe sini karena webnya belum jadi <3)";
    console.log("Halo!" + name + "dengan email " + email + " Pesan Anda: " + message);
}

<<<<<<< HEAD
// js/script.js (Tambahkan fungsi baru ini di atas atau di bawah fungsi fetchAndRenderCards)

// Fungsi untuk memuat dan menyisipkan komponen HTML
async function loadComponent(componentId, filePath) {
    try {
        const response = await fetch(filePath);
        
        if (!response.ok) {
            throw new Error(`Gagal memuat komponen: ${filePath}`);
        }
        
        const html = await response.text();
        document.getElementById(componentId).innerHTML = html;
        
    } catch (error) {
        console.error("Kesalahan saat memuat komponen:", error);
        document.getElementById(componentId).innerHTML = 
            `<p class="text-red-500 p-4">Error: Gagal memuat ${filePath}.</p>`;
    }
}

// Panggil fungsi pemuatan navbar bersamaan dengan fungsi render cards
document.addEventListener('DOMContentLoaded', () => {
    // Memuat Navbar
    loadComponent('navbar-placeholder', 'components/navbar.html');
    
    // Memuat Portofolio Cards (Fungsi yang sudah ada sebelumnya)
    fetchAndRenderCards(); 
});

// Pastikan fungsi fetchAndRenderCards() dan semua kode JS lainnya masih ada di file ini.
// ... (Sisa kode fetchAndRenderCards() Anda) ...
=======
// js/script.js

// URL ke file JSON eksternal
const JSON_URL = 'data/cardPorto.json';

// Fungsi untuk mengambil data dan merender kartu
async function fetchAndRenderCards() {
    try {
        const response = await fetch(JSON_URL);

        if (!response.ok) {
            // Tampilkan error 404/lainnya
            throw new Error(`Gagal memuat file JSON: ${response.status} ${response.statusText}`);
        }

        const dataKartu = await response.json();
        
        const container = document.getElementById('card-container');
        let htmlContent = '';

        // Iterasi dan membuat string HTML
        dataKartu.forEach(card => {
            htmlContent += `
                <div class="flex-shrink-0 w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
                    <a href="${card.link}">
                        <img class="rounded-t-lg h-40 w-full object-cover" src="${card.image}" alt="${card.title}" />
                    </a>
                    <div class="p-5">
                        <a href="${card.link}">
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">${card.title}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700">${card.description}</p>
                        <a href="${card.link}"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Lihat Proyek
                            <svg class="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            `;
        });

        // Masukkan HTML ke container
        container.innerHTML = htmlContent;

    } catch (error) {
        console.error("Terjadi kesalahan saat memuat atau merender data:", error);
        document.getElementById('card-container').innerHTML = '<p class="text-red-500">Gagal memuat data portofolio. Silakan cek path file JSON.</p>';
    }
}

// Panggil fungsi setelah DOM dimuat
document.addEventListener('DOMContentLoaded', fetchAndRenderCards);
>>>>>>> Tambah-halaman-card
