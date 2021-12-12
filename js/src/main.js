let d = document;

/****** MENU *****/
((d) => {
    const btnMenu = d.getElementById('hamburger');
    const toggle = d.getElementById('toggle'); 

    btnMenu.addEventListener('click', () => {
        toggle.classList.toggle('menu-toggle');
    });

    d.addEventListener('click', (e) => {
        if (!e.target.matches('.item')) return false;
        toggle.classList.toggle('menu-toggle');
    });


    /***********************/
    /*      Get Data       */
    /***********************/
    document.addEventListener('DOMContentLoaded', function() {
        fetch('../../data/projects.json')
        .then(data => data.json())
        .then(data => data.map(project => {
            console.log(project);
            setProjects(project)
        }));

        function setProjects(data) {
            const $section = document.getElementById('projects-container');
    
            const $template = `
                <div class="card">
                    <div class="card-img">
                        <img src="${data.image}">
                    </div>
                    
                    <div class="card-content">
                        <header class="card-header">${data.name}</header>
                        ${Tags(data.tags)}
    
                        <div class="card-body">
                            ${data.description}
                            
    
                            <div class="card-links">
                                ${(data.url) ? 
                                    `<a href="${data.url}" target="_blank">
                                        <img src="./assets/svg/url.svg" alt="">
                                    </a>`: ``}
                                
                                ${(data.repository ?
                                    `<a href="${data.repository}"
                                        target="_blank">
                                        <img src="./assets/svg/github.svg" alt="">
                                    </a>` : ``)}
                            </div>
                        </div>
                    </div>
                </div>
            `;
    
            $section.innerHTML += $template;
        }

        function Tags(tags) {
            let $tags = '';
            tags.map(tag => $tags += `<span class="tags tag-${tag}">${tag}</span>`);
            return $tags;
        }
    }, false);

    /***********************/
    /*     Accordion       */
    /***********************/
    var acc = document.getElementsByClassName("card-header");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function(e) {
            let card = this.parentNode.parentNode
            let panel = this.nextElementSibling;
            this.classList.toggle("active");

            if (panel.style.display === "block") {
                panel.style.display = "none";
                card.style.backgroundColor = "#2a2e37";
            } else {
                card.style.backgroundColor = "#3C4451";
                panel.style.display = "block";
            }
        });
    }

})(d);