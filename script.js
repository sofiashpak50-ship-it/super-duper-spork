    (function() {
        const cariBtn = document.querySelector('.btn-primary');
        if(cariBtn) {
            cariBtn.addEventListener('click', function(e) {
                const inputLoc = document.querySelector('.location-input');
                const locationVal = inputLoc ? inputLoc.value : 'Jakarta';
                alert(`Menampilkan ruang kerja di ${locationVal} (demo interaksi)`);
            });
        }
        // membuat semua kartu memiliki efek klik ringan (opsional)
        const cards = document.querySelectorAll('.workspace-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                console.log('Kartu ruang kerja diklik');
            });
        });
    })();
