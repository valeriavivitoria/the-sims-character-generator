/* =========================================
   SIMFORGE
   CHARACTER GENERATOR
========================================= */


/* =========================================
   CHARACTER DATA
========================================= */

const character = {

    name: "Alex Morgan",

    skin: "#f7d4b7",

    body: "classic",

    eyes: "#405d70",

    hair: "short",

    hairColor: "#3c2924",

    trait: {
        name: "Criativo",
        description:
            "Adora imaginar, inventar e criar coisas novas."
    }

};


/* =========================================
   DOM
========================================= */

const head =
    document.querySelector("#head");

const neck =
    document.querySelector("#neck");

const leftArm =
    document.querySelector("#leftArm");

const rightArm =
    document.querySelector("#rightArm");

const leftHand =
    document.querySelector("#leftHand");

const rightHand =
    document.querySelector("#rightHand");

const body =
    document.querySelector("#body");

const hair =
    document.querySelector("#hair");

const eyes =
    document.querySelectorAll(".eye");

const stageName =
    document.querySelector("#stageName");

const currentName =
    document.querySelector("#currentName");

const miniName =
    document.querySelector("#miniName");

const traitName =
    document.querySelector("#traitName");

const traitDescription =
    document.querySelector("#traitDescription");


/* =========================================
   DATA
========================================= */

const names = [

    "Alex Morgan",
    "Luna Carter",
    "Noah Bennett",
    "Maya Brooks",
    "Theo Parker",
    "Sofia Hayes",
    "Leo Mitchell",
    "Emma Cooper",
    "Nina Foster",
    "Ethan Reed",
    "Clara Wilson",
    "Ryan Collins"

];


const traits = [

    {
        name: "Criativo",
        description:
            "Adora imaginar, inventar e criar coisas novas."
    },

    {
        name: "Extrovertido",
        description:
            "Ganha energia quando está perto de outras pessoas."
    },

    {
        name: "Geek",
        description:
            "Ama tecnologia, jogos e tudo que envolve conhecimento."
    },

    {
        name: "Romântico",
        description:
            "Acredita que sempre existe espaço para uma boa história de amor."
    },

    {
        name: "Ambicioso",
        description:
            "Quer crescer, conquistar objetivos e chegar ao topo."
    },

    {
        name: "Gênio",
        description:
            "Adora aprender e resolver problemas difíceis."
    },

    {
        name: "Aventureiro",
        description:
            "Não consegue ficar muito tempo longe de uma nova experiência."
    },

    {
        name: "Amante da natureza",
        description:
            "Prefere uma tarde tranquila cercado pela natureza."
    }

];


const skinColors = [
    "#f7d4b7",
    "#edbd96",
    "#d99a70",
    "#bd7652",
    "#a05c43",
    "#81462f",
    "#603628",
    "#3d251f"
];


const eyeColors = [
    "#405d70",
    "#654a32",
    "#4d704b",
    "#202c35"
];


const hairColors = [
    "#3c2924",
    "#171717",
    "#7b4d2d",
    "#b77945",
    "#c7b07a",
    "#8c3340",
    "#473b78",
    "#d75f89"
];


const hairStyles = [
    "short",
    "long",
    "curly",
    "modern"
];


const bodyTypes = [
    "classic",
    "athletic",
    "slim",
    "strong"
];


/* =========================================
   COLOR HELPER
========================================= */

function darkenColor(hex, amount = 25) {

    const clean =
        hex.replace("#", "");

    const r =
        Math.max(
            0,
            parseInt(clean.substring(0, 2), 16) - amount
        );

    const g =
        Math.max(
            0,
            parseInt(clean.substring(2, 4), 16) - amount
        );

    const b =
        Math.max(
            0,
            parseInt(clean.substring(4, 6), 16) - amount
        );

    return `rgb(${r}, ${g}, ${b})`;
}


/* =========================================
   UPDATE SKIN
========================================= */

function updateSkin() {

    const dark =
        darkenColor(character.skin);


    const skinGradient = `
        linear-gradient(
            145deg,
            ${character.skin},
            ${dark}
        )
    `;


    if (head) {
        head.style.background =
            skinGradient;
    }


    if (neck) {
        neck.style.background =
            character.skin;
    }


    if (leftArm) {
        leftArm.style.background =
            skinGradient;
    }


    if (rightArm) {
        rightArm.style.background =
            skinGradient;
    }


    if (leftHand) {
        leftHand.style.background =
            character.skin;
    }


    if (rightHand) {
        rightHand.style.background =
            character.skin;
    }


    /*
        Atualiza a miniatura
    */

    const miniFace =
        document.querySelector(".mini-face");

    if (miniFace) {
        miniFace.style.background =
            character.skin;
    }

}


/* =========================================
   UPDATE BODY
========================================= */

function updateBody() {

    if (!body) return;

    body.className =
        `body ${character.body}`;
}


/* =========================================
   UPDATE HAIR
========================================= */

function updateHair() {

    if (!hair) return;

    hair.className =
        `hair ${character.hair}`;

    hair.style.background =
        character.hairColor;
}


/* =========================================
   UPDATE EYES
========================================= */

function updateEyes() {

    eyes.forEach((eye) => {

        eye.style.background =
            character.eyes;

    });

}


/* =========================================
   UPDATE TEXT
========================================= */

function updateText() {

    stageName.textContent =
        character.name;

    currentName.textContent =
        character.name;

    miniName.textContent =
        character.name;

    traitName.textContent =
        character.trait.name;

    traitDescription.textContent =
        character.trait.description;

}


/* =========================================
   UPDATE EVERYTHING
========================================= */

function updateCharacter() {

    updateSkin();

    updateBody();

    updateHair();

    updateEyes();

    updateText();

}


/* =========================================
   SELECTION HELPER
========================================= */

function setSelected(selector, element) {

    document
        .querySelectorAll(selector)
        .forEach((item) => {

            item.classList.remove(
                "selected"
            );

        });


    if (element) {

        element.classList.add(
            "selected"
        );

    }

}


/* =========================================
   SKIN EVENTS
========================================= */

document
    .querySelectorAll(".skin")
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                character.skin =
                    button.dataset.skin;

                setSelected(
                    ".skin",
                    button
                );

                updateSkin();

            }
        );

    });


/* =========================================
   BODY EVENTS
========================================= */

document
    .querySelectorAll("[data-body]")
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                character.body =
                    button.dataset.body;

                setSelected(
                    "[data-body]",
                    button
                );

                updateBody();

            }
        );

    });


/* =========================================
   EYE EVENTS
========================================= */

document
    .querySelectorAll("[data-eyes]")
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                character.eyes =
                    button.dataset.eyes;

                setSelected(
                    "[data-eyes]",
                    button
                );

                updateEyes();

            }
        );

    });


/* =========================================
   HAIR STYLE EVENTS
========================================= */

document
    .querySelectorAll("[data-hair]")
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                character.hair =
                    button.dataset.hair;

                setSelected(
                    "[data-hair]",
                    button
                );

                updateHair();

            }
        );

    });


/* =========================================
   HAIR COLOR EVENTS
========================================= */

document
    .querySelectorAll("[data-hair-color]")
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                character.hairColor =
                    button.dataset.hairColor;

                setSelected(
                    "[data-hair-color]",
                    button
                );

                updateHair();

            }
        );

    });


/* =========================================
   MENU NAVIGATION
========================================= */

const menuItems =
    document.querySelectorAll(
        ".menu-item"
    );

const panels =
    document.querySelectorAll(
        ".panel"
    );

const editorTitle =
    document.querySelector(
        "#editorTitle"
    );


const sectionTitles = {

    body: "Corpo",

    face: "Rosto",

    hair: "Cabelo",

    personality: "Personalidade"

};


menuItems.forEach((item) => {

    item.addEventListener(
        "click",
        () => {

            const section =
                item.dataset.section;


            /*
                Menu
            */

            menuItems.forEach(
                (button) => {

                    button.classList.remove(
                        "active"
                    );

                }
            );


            item.classList.add(
                "active"
            );


            /*
                Panels
            */

            panels.forEach(
                (panel) => {

                    panel.classList.remove(
                        "active-panel"
                    );

                }
            );


            const selectedPanel =
                document.querySelector(
                    `[data-panel="${section}"]`
                );


            if (selectedPanel) {

                selectedPanel.classList.add(
                    "active-panel"
                );

            }


            /*
                Title
            */

            editorTitle.textContent =
                sectionTitles[section];

        }
    );

});


/* =========================================
   RANDOM ITEM
========================================= */

function randomItem(array) {

    return array[
        Math.floor(
            Math.random() *
            array.length
        )
    ];

}


/* =========================================
   RANDOMIZE CHARACTER
========================================= */

function randomizeCharacter() {

    character.name =
        randomItem(names);

    character.skin =
        randomItem(skinColors);

    character.body =
        randomItem(bodyTypes);

    character.eyes =
        randomItem(eyeColors);

    character.hair =
        randomItem(hairStyles);

    character.hairColor =
        randomItem(hairColors);

    character.trait =
        randomItem(traits);


    updateCharacter();


    /*
        Atualiza seleção visual
    */

    document
        .querySelectorAll(".skin")
        .forEach((button) => {

            button.classList.toggle(
                "selected",
                button.dataset.skin ===
                character.skin
            );

        });


    document
        .querySelectorAll("[data-body]")
        .forEach((button) => {

            button.classList.toggle(
                "selected",
                button.dataset.body ===
                character.body
            );

        });


    document
        .querySelectorAll("[data-eyes]")
        .forEach((button) => {

            button.classList.toggle(
                "selected",
                button.dataset.eyes ===
                character.eyes
            );

        });


    document
        .querySelectorAll("[data-hair]")
        .forEach((button) => {

            button.classList.toggle(
                "selected",
                button.dataset.hair ===
                character.hair
            );

        });


    document
        .querySelectorAll("[data-hair-color]")
        .forEach((button) => {

            button.classList.toggle(
                "selected",
                button.dataset.hairColor ===
                character.hairColor
            );

        });

}


/* =========================================
   RANDOM BUTTONS
========================================= */

document
    .querySelector("#randomButton")
    .addEventListener(
        "click",
        randomizeCharacter
    );


document
    .querySelector("#generateButton")
    .addEventListener(
        "click",
        randomizeCharacter
    );


document
    .querySelector("#generateBottom")
    .addEventListener(
        "click",
        randomizeCharacter
    );


/* =========================================
   PERSONALITY
========================================= */

document
    .querySelector("#traitButton")
    .addEventListener(
        "click",
        () => {

            character.trait =
                randomItem(traits);

            updateText();

        }
    );


/* =========================================
   INITIALIZE
========================================= */

updateCharacter();