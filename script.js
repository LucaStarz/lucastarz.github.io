const cadres = [];
const titres = [];
const images_multiple = [];

function set_and_get_frames_positions() {
    const cadre_1 = document.getElementById("cadre_1");
    cadre_1.style.left = "-100%";
    cadres.push(cadre_1);

    const cadre_2 = document.getElementById("cadre_2");
    cadre_2.style.right = "-200%";
    cadres.push(cadre_2);

    const cadre_3 = document.getElementById("cadre_3");
    cadre_3.style.left = "-100%";
    cadres.push(cadre_3);

    const cadre_4 = document.getElementById("cadre_4");
    cadre_4.style.right = "-200%";
    cadres.push(cadre_4);

    const cadre_5 = document.getElementById("cadre_5");
    cadre_5.style.left = "-100%";
    cadres.push(cadre_5);

    const cadre_6 = document.getElementById("cadre_6");
    cadre_6.style.right = "-200%";
    cadres.push(cadre_6);

    const cadre_7 = document.getElementById("cadre_7");
    cadre_7.style.left = "-100%";
    cadres.push(cadre_7);

    const cadre_8 = document.getElementById("cadre_8");
    cadre_8.style.right = "-200%";
    cadres.push(cadre_8);

    const cadre_9 = document.getElementById("cadre_9");
    cadre_9.style.left = "-100%";
    cadres.push(cadre_9);

    const cadre_10 = document.getElementById("cadre_10");
    cadre_10.style.right = "-200%";
    cadres.push(cadre_10);

    const cadre_11 = document.getElementById("cadre_11");
    cadre_11.style.left = "-100%";
    cadres.push(cadre_11);

    const cadre_12 = document.getElementById("cadre_12");
    cadre_12.style.right = "-200%";
    cadres.push(cadre_12);

    const cadre_13 = document.getElementById("cadre_13");
    cadre_13.style.left = "-100%";
    cadres.push(cadre_13);

    const cadre_14 = document.getElementById("cadre_14");
    cadre_14.style.right = "-200%";
    cadres.push(cadre_14);

    const cadre_15 = document.getElementById("cadre_15");
    cadre_15.style.left = "-100%";
    cadres.push(cadre_15);

    const cadre_16 = document.getElementById("cadre_16");
    cadre_16.style.right = "-200%";
    cadres.push(cadre_16);

    const cadre_17 = document.getElementById("cadre_17");
    cadre_17.style.left = "-100%";
    cadres.push(cadre_17);

    const cadre_18 = document.getElementById("cadre_18");
    cadre_18.style.right = "-200%";
    cadres.push(cadre_18);

    const cadre_19 = document.getElementById("cadre_19");
    cadre_19.style.left = "-100%";
    cadres.push(cadre_19);

    const cadre_20 = document.getElementById("cadre_20");
    cadre_20.style.right = "-200%";
    cadres.push(cadre_20);
}

function get_titles() {
    const titre_a_propos = document.getElementById("titre_a_propos");
    titre_a_propos.style.opacity = "0";
    titres.push(titre_a_propos);

    const titre_competences = document.getElementById("titre_competences");
    titre_competences.style.opacity = "0";
    titres.push(titre_competences);

    const titre_projets_personnels = document.getElementById("titre_projets_personnels");
    titre_projets_personnels.style.opacity = "0";
    titres.push(titre_projets_personnels);
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
        if (window.innerHeight > rect.top + rect.height / 1.5) {
            cadres[i].style.animation = "cadre_" + direction + "_apparition 2s ease-in-out forwards";
        } else if ((direction === "gauche" && rect.left > 0) || (direction === "droite" && rect.right > 0)) {
            cadres[i].style.animation = "cadre_" + direction + "_disparition 2s ease-in-out forwards";
        }
    }

    // Animation des titres
    for (const titre of titres) {
        const rect = titre.getBoundingClientRect();
        if (window.innerHeight > rect.top + rect.height / 1.5) {
            titre.style.animation = "titre_apparition 2s ease-in-out forwards";
        } else if (titre.style.animation !== "titre_disparition 2s ease-in-out forwards") {
            titre.style.animation = "titre_disparition 2s ease-in-out forwards";
        }
    }
}

function clicked_image(index) {
    const image = images_multiple[index];
    image.current = (image.current + 1) % image.count;
    image.image.src = image.path + image.current + ".png";
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