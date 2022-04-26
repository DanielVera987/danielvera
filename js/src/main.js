let d = document;

/****** MENU *****/
((d) => {
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
})(d);