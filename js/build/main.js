"use strict";var d=document;document.addEventListener("DOMContentLoaded",(function(){fetch("./data/projects.json").then((function(n){return n.json()})).then((function(n){return n.map((function(n){console.log(n),function(n){var a,t,c=document.getElementById("projects-container"),s='\n                <div class="card">\n                    <div class="card-img">\n                        <img src="'.concat(n.image,'">\n                    </div>\n                    \n                    <div class="card-content">\n                        <header class="card-header">').concat(n.name,"</header>\n                        ").concat((a=n.tags,t="",a.map((function(n){return t+='<span class="tags tag-'.concat(n,'">').concat(n,"</span>")})),t),'\n    \n                        <div class="card-body">\n                            ').concat(n.description,'\n                            \n    \n                            <div class="card-links">\n                                ').concat(n.url?'<a href="'.concat(n.url,'" target="_blank">\n                                        <img src="./assets/svg/url.svg" alt="">\n                                    </a>'):"","\n                                \n                                ").concat(n.repository?'<a href="'.concat(n.repository,'"\n                                        target="_blank">\n                                        <img src="./assets/svg/github.svg" alt="">\n                                    </a>'):"","\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ");c.innerHTML+=s}(n)}))}))}),!1);