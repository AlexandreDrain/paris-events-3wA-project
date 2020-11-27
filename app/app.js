let app = {
    // ----------------------------------------------------------------------------------------------------------------
    // MANIPULATION DU DOM DE L'APPLICATION
    // ----------------------------------------------------------------------------------------------------------------
    dom: {
        render: (html) => {    
            // Écrire le contenu de ce fichier dans main.container (innerHTML)
            document.querySelector("main.container").innerHTML = html;
        },
        listener: (selector, eventName, callback) => {
            document.querySelector(selector).addEventListener(eventName, callback);
        }
    },


    // ----------------------------------------------------------------------------------------------------------------
    // ARCHITECTURE MVC DE L'APPLICATION
    // ----------------------------------------------------------------------------------------------------------------
    mvc: {
        router : null,
        dispatchRoute: (controller) => {
            if(typeof controller.view == 'undefined') {
                throw new Error('Aucune vue de déclarée !');
            }

            // Objectif charger le fichier "vue" en utilisant fetch
            fetch(controller.view)
                .then(response => response.text())
                .then(html => {
                    app.dom.render(html);
                    if( typeof controller.executeHttpRequest !== "undefined" && typeof controller.executeHttpRequest !== "function" ) {
                        throw new Error('Ceci n\'est pas pas une fonction !');
                    } else if(typeof controller.executeHttpRequest !== "undefined") {
                        controller.executeHttpRequest();
                    } 
                });
        }
    }
};


// L'application est exportée afin d'être accessible par d'autres modules.
export default app;