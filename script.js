// Tambahkan JavaScript untuk interaksi jika diperlukan
document.addEventListener('DOMContentLoaded', function() {
    console.log('GACHA Website loaded successfully!');
    
    // Contoh: Smooth scroll untuk tombol "Get Started"
    const getStartedBtn = document.querySelector('.btn[onclick*="#contact"]');
    if (getStartedBtn) {
        getStartedBtn.onclick = function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        };
    }
});