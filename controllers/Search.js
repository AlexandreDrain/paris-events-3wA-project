import ParisEvents from '../models/ParisEvents.js';
import app from '../app/app.js';

export default class Search
{
    constructor() {
        this.view = "views/search.html";
    }

    executeHttpRequest() {
        app.dom.listener("form#myForm", "submit", (e) => {
            document.querySelector(".content").innerHTML = "";
            document.querySelector(".table").style.display = "block";
            e.preventDefault();
            let myDatas = [];
            myDatas[1] = document.querySelector("input#title").value;
            myDatas[2] = document.querySelector("select#date").value;
            myDatas[3] = document.querySelector("select#type").value;
            let pe = new ParisEvents();
            // fonctionne pour faire uniquement un console.log, syntaxe simplifié.
            // pe.searchContent(myDatas[1], myDatas[2], myDatas[3]).then(console.log);
            pe.searchContent(myDatas[1], myDatas[2], myDatas[3]).then((data) => {
                if ("content" in document.createElement("template")) {
                    // On prépare une ligne pour le tableau 
                    const template = document.querySelector("#productrow");
                    for(let datas of data.records)
                    {
                        // On clone la ligne et on l'insère dans le tableau
                        var tbody = document.querySelector(".content");
                        var clone = document.importNode(template.content, true);
                        clone.querySelector("td.title").textContent = `${datas.fields.title}`;
                        clone.querySelector("img.img").src = `${datas.fields.cover_url}`;

                        tbody.appendChild(clone);
                    }
                }
            });
        });
    }
}