const cadres = [];
const titres = [];
const images_multiple = [];

function set_and_get_frames_positions() {
    const cadres_basiques = document.getElementsByClassName("cadre");
    for (const c of cadres_basiques) {
        if (c.classList.contains("cadre_gauche")) { c.style.left = "-100%"; }
        else { c.style.right = "-200%"; }
        cadres.push(c);
    }

    const cadres_avec_titres = document.getElementsByClassName("cadre_avec_titre");
    for (const c of cadres_avec_titres) {
        if (c.classList.contains("cadre_gauche")) { c.style.left = "-100%"; }
        else { c.style.right = "-200%"; }
        cadres.push(c);
    }
}

function get_titles() {
    const h1 = document.getElementsByTagName("h1");
    for (const h of h1) {
        h.style.opacity = "0";
        titres.push(h);
    }
}

function get_images_multiple() {
    const image_1 = document.getElementById("image_1");
    images_multiple.push({ image: image_1, count: 4, current: 0, path: "./assets/web_" });

    const image_2 = document.getElementById("image_2");
    images_multiple.push({ image: image_2, count: 3, current: 0, path: "./assets/poo_" });

    const image_3 = document.getElementById("image_3");
    images_multiple.push({ image: image_3, count: 4, current: 0, path: "./assets/fonc_" });

    const image_4 = document.getElementById("image_4");
    images_multiple.push({ image: image_4, count: 3, current: 0, path: "./assets/bd_" });

    const image_5 = document.getElementById("image_5");
    images_multiple.push({ image: image_5, count: 3, current: 0, path: "./assets/reseaux_" });

    const image_6 = document.getElementById("image_6");
    images_multiple.push({ image: image_6, count: 4, current: 0, path: "./assets/stats_" });

    const image_7 = document.getElementById("image_7");
    images_multiple.push({ image: image_7, count: 5, current: 0, path: "./assets/jeu_vid_" });
}

function scroll_function() {
    // Changement de couleur du background du header
    const total_header = document.getElementById("total_header");
    const image_moi_rect = document.getElementById("photo_moi").getBoundingClientRect();
    if (window.scrollY > (image_moi_rect.height / 2)) { total_header.style.background = "rgba(15, 15, 15, 1)"; }
    else { total_header.style.background = "rgba(15, 15, 15, 0.5)"; }

    // Animation des cadres
    for (let i=0; i<cadres.length; i++) {
        const direction = (i%2 == 0) ? "gauche" : "droite";
        const rect = cadres[i].getBoundingClientRect();
        if (window.innerHeight > rect.top + rect.height / 3) {
            cadres[i].style.animation = "cadre_" + direction + "_apparition 2s ease-in-out forwards";
        } else {
            cadres[i].style.animation = "cadre_" + direction + "_disparition 2s ease-in-out forwards";
        }
    }

    // Animation des titres
    for (const titre of titres) {
        const rect = titre.getBoundingClientRect();
        if (window.innerHeight > rect.top + rect.height / 2) {
            titre.style.animation = "titre_apparition 2s ease-in-out forwards";
        } else {
            titre.style.animation = "titre_disparition 2s ease-in-out forwards";
        }
    }
}

function clicked_image(index) {
    const image = images_multiple[index];
    image.current = (image.current + 1) % image.count;
    image.image.src = image.path + image.current + ".png";
}

const diaporama_img = document.getElementById("photo_moi");
let diaporama_interval = 0;
let diaporama_count = 0;
function diaporama() {
    clearInterval(diaporama_interval);

    diaporama_count = (diaporama_count + 1) % 5;
    diaporama_img.src = "./assets/moi_" + diaporama_count + ".jpg";

    diaporama_interval = setInterval(() => {
        diaporama();
    }, 3000);
}


set_and_get_frames_positions();
get_titles();
get_images_multiple();
scroll_function();
document.onscroll = () => {
    scroll_function();
}

setInterval(() => {
    for (let i=0; i<images_multiple.length; i++) {
        clicked_image(i);
    }
}, 3000);

diaporama_interval = setInterval(() => {
    diaporama();
}, 3000);