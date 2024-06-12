let d = document;

/****** MENU *****/
((d) => {
    /***********************/
    /*      Get Data       */
    /***********************/
    document.addEventListener('DOMContentLoaded', function() {
        fetch('./data/projects.json')
        .then(data => data.json())
        .then(data => data.map(project => {
            console.log(project);
            setProjects(project)
        }));

        function setProjects(data) {
            const $section = document.getElementById('projects-container');
    
            const $template = `
                <div class="row project">
                    <div class="col-md-6">
                        <img src="${data.image}" class="project-img">
                    </div>
                    
                    <div class="col-md-6">
                        <div class="project-title mt-4 mt-md-0">${data.name}</div>
                        ${Tags(data.tags)}
    
                        <div class="project-body">
                            <div class="mt-4 mt-md-3">
                                ${data.description}
                            </div>
                            
    
                            <div class="mt-3">
                                ${
                                    data.url
                                        ? `<a href="${data.url}" target="_blank" class="btn-custom">
                                        <img src="./assets/svg/url.svg" alt="Daniel Vera" title="${data.name}">
                                        Ver más
                                    </a>`
                                        : ``
                                }
                                
                                ${
                                    data.repository
                                        ? `<a href="${data.repository}"
                                        target="_blank" class="btn-custom">
                                        <img src="./assets/svg/github.svg" alt="Daniel Vera" title="${data.name}">
                                        Code
                                    </a>`
                                        : ``
                                }
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
})(d);