const cadres = [];
const titres = [];

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


set_and_get_frames_positions();
get_titles();
scroll_function();
document.onscroll = () => {
    scroll_function();
}