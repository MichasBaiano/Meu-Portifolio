$(document).ready(function () {

    //Inicializa o Carrossel de Skills
    const skillsCarousel = $('#skills-carousel');
    if (skillsCarousel.length) {
        skillsCarousel.owlCarousel({
            loop: true,
            margin: 16,
            nav: true,
            dots: false,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 3 }
            }
        });
    }

    // Inicializa o Carrossel da Galeria
    const galleryCarousel = $("#gallery-carousel");
    if (galleryCarousel.length) {
        galleryCarousel.owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            nav: true,
            dots: true
        });
    }

    // Script do Modal da Galeria
    const modal = document.getElementById("imageModal");
    if (modal) {
        const modalImg = document.getElementById("modalImg");
        const captionText = document.getElementById("caption");
        const closeBtn = document.querySelector(".close");

        document.querySelectorAll(".galeria-thumb").forEach(img => {
            let mouseDownX = 0;
            let mouseDownY = 0;
            let dragged = false;

            img.addEventListener("mousedown", e => {
                mouseDownX = e.clientX;
                mouseDownY = e.clientY;
                dragged = false;
            });

            img.addEventListener("mousemove", e => {
                if (Math.abs(e.clientX - mouseDownX) > 5 || Math.abs(e.clientY - mouseDownY) > 5) {
                    dragged = true;
                }
            });

            img.addEventListener("mouseup", () => {
                if (!dragged) {
                    modal.style.display = "block";
                    modalImg.src = img.dataset.full;
                    captionText.innerText = img.nextElementSibling?.innerText || img.alt;

                    modalImg.style.animation = "none";
                    void modalImg.offsetWidth;
                    modalImg.style.animation = "zoomIn 0.4s ease forwards";
                }
            });
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.style.display = "none";
        });
    }

    // 4. Script de Preview de Arquivo
    const input = document.getElementById('fileInput');
    const previews = document.getElementById('previews');

    if (input && previews) {
        input.addEventListener('change', (ev) => {
            previews.innerHTML = '';
            Array.from(ev.target.files).forEach(file => {
                if (file.type.startsWith('image/')) {
                    const fr = new FileReader();
                    fr.onload = () => {
                        const img = document.createElement('img');
                        img.src = fr.result;
                        img.className = 'thumb-preview';
                        previews.appendChild(img);
                    };
                    fr.readAsDataURL(file);
                } else {
                    const div = document.createElement('div');
                    div.textContent = file.name;
                    div.style.padding = '.5rem';
                    div.style.border = '1px solid rgba(255,255,255,0.06)';
                    div.style.borderRadius = '6px';
                    previews.appendChild(div);
                }
            });
        });
    }

});