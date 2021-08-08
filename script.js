
// Opdracht: Callbacks.
function huiswerkMaken(vak, callback) {
    setTimeout(() => {
        console.log(`${"Ok, ok, ik ga mijn " + `${vak}` + " huiswerk maken."}`);
        callback && callback();
    }, 3000);
};

function klaarMetHuiswerk() {
    console.log(`${"Kijk Paps / Mams, ik ben klaar met mijn huiswerk!"}`)
}

huiswerkMaken("wiskunde", klaarMetHuiswerk());

