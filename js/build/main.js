"use strict";var d=document;!function(n){var t=n.getElementById("hamburger"),e=n.getElementById("toggle");t.addEventListener("click",(function(){e.classList.toggle("menu-toggle")})),n.addEventListener("click",(function(n){if(!n.target.matches(".item"))return!1;e.classList.toggle("menu-toggle")})),document.addEventListener("DOMContentLoaded",(function(){fetch("../../data/projects.json").then((function(n){return n.json()})).then((function(n){return n.map((function(n){console.log(n),function(n){var t=document.getElementById("projects-container"),e='\n                <div class="card">\n                    <div class="card-img">\n                        <img src="'.concat(n.image,'">\n                    </div>\n                    \n                    <div class="card-content">\n                        <header class="card-header">').concat(n.name,"</header>\n                        ").concat((a=n.tags,c="",a.map((function(n){return c+='<span class="tags tag-'.concat(n,'">').concat(n,"</span>")})),c),'\n    \n                        <div class="card-body">\n                            ').concat(n.description,'\n                            \n    \n                            <div class="card-links">\n                                ').concat(n.url?'<a href="'.concat(n.url,'" target="_blank">\n                                        <img src="./assets/svg/url.svg" alt="">\n                                    </a>'):"","\n                                \n                                ").concat(n.repository?'<a href="'.concat(n.repository,'"\n                                        target="_blank">\n                                        <img src="./assets/svg/github.svg" alt="">\n                                    </a>'):"","\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ");var a,c;t.innerHTML+=e}(n)}))}))}),!1);for(var a=document.getElementsByClassName("card-header"),c=0;c<a.length;c++)a[c].addEventListener("click",(function(n){var t=this.parentNode.parentNode,e=this.nextElementSibling;this.classList.toggle("active"),"block"===e.style.display?(e.style.display="none",t.style.backgroundColor="#2a2e37"):(t.style.backgroundColor="#3C4451",e.style.display="block")}))}(d);