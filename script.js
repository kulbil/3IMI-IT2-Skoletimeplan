let classArray = [];
let createNewClassButtonEl = document.getElementById("createNewClassButton");

createNewClassButtonEl.addEventListener("click", createNewClassFunc);


function createNewClassFunc() {

    let createNewClassBackroundDim = $('<div></div>');
    createNewClassBackroundDim.attr("id", "createNewClassBackroundDim");
    $("#rightSideScreen").append(createNewClassBackroundDim);

    let createNewClassDiv = $('<div></div>');
    createNewClassDiv.attr("id", "createNewClassDiv");
    $("#rightSideScreen").append(createNewClassDiv);

    let createNewClassDivDagSelect = $('<select></select>');
    createNewClassDivDagSelect.attr("id", "createNewClassDivDagSelect")
    createNewClassDivDagSelect.attr("class", "createNewClassDivSelect");
    $("#createNewClassDiv").append(createNewClassDivDagSelect);


    let createNewClassDivTimeSelect = $('<select></select>');
    createNewClassDivTimeSelect.attr("id", "createNewClassDivTimeSelect")
    createNewClassDivTimeSelect.attr("class", "createNewClassDivSelect");
    $("#createNewClassDiv").append(createNewClassDivTimeSelect);

    let createNewClassDivFagSelect = $('<select></select>');
    createNewClassDivFagSelect.attr("id", "createNewClassDivTimeSelect")
    createNewClassDivFagSelect.attr("class", "createNewClassDivSelect");
    $("#createNewClassDiv").append(createNewClassDivFagSelect);

    let createNewClassDivKlasseInput = $('<input></input>');
    createNewClassDivKlasseInput.attr("id", "createNewClassDivKlasseInput")
    createNewClassDivKlasseInput.attr("class", "createNewClassDivSelect");
    $("#createNewClassDiv").append(createNewClassDivKlasseInput);

    let createNewClassDivRomSelect = $('<select></select>');
    createNewClassDivRomSelect.attr("id", "createNewClassDivRomSelect")
    createNewClassDivRomSelect.attr("class", "createNewClassDivSelect");
    $("#createNewClassDiv").append(createNewClassDivRomSelect);

    let selectList = [
        {
            selectType: "dag",
            selectOptionPlaceholder: "Velg en dag",
            selectOption1: "Mandag",
            selectOption2: "Tirsdag",
            selectOption3: "Onsdag",
            selectOption4: "Torsdag",
            selectOption5: "Fredag"
        },
        {
            selectType: "time",
            selectOptionPlaceholder: "Velg en time",
            selectOption1: "08:00 - 10:00",
            selectOption2: "10:00 - 12:00",
            selectOption3: "13:00 - 14:30",
            selectOption4: "14:30 - 16:00"
        },
        {
            selectType: "fag",
            selectOptionPlaceholder: "Velg et fag",
            selectOption1: "Norsk",
            selectOption2: "Matte",
            selectOption3: "Engelsk",
            selectOption4: "Idrett",
            selectOption5: "Biologi",
            selectOption6: "Fysikk"
        },
        {
            selectType: "rom",
            selectOptionPlaceholder: "Velg et rom",
            selectOption1: "201",
            selectOption2: "202",
            selectOption3: "203",
            selectOption4: "Gymsal",
            selectOption5: "Biologi",
            selectOption6: "Fysikk"
        }
    ]

    for (i = 0; i < selectList.length; i++) {
        let selectListOptions = selectList[i];
        for(k = 0; k < selectListOptions.length; k++) {
            console.log(selectListOptions[k]);
        }
    }
}

$("#rightSideScreen").on('click', '#createNewClassBackroundDim', function() {
    console.log("hei")
    $("#createNewClassBackroundDim").remove();
    $("#createNewClassDiv").remove();
});


