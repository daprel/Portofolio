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