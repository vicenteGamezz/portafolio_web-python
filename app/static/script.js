window.sr = ScrollReveal();

    sr.reveal('.navbar', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px'
    })
    
    sr.reveal('.scroll-baner', {
        duration: 3000,
        origin: 'left',
        distance: '-100px'
    }) 

    sr.reveal('.scroll-img', {
        duration: 3000,
        origin: 'left',
        distance: '-100px'
    }) 

    

const container = document.querySelector(".container");
const projects = document.querySelectorAll('.project');
const projectHideBtn = document.querySelector(".project-hide-btn"); 

projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.firstElementChild.style.top = `-${project.firstElementChild.offsetHeight - project.offsetHeight + 20
        }px`;
    });

    project.addEventListener('mouseleave', () => {
        project.firstElementChild.style.top = "2rem";
    });

    project.addEventListener('click', () => {
        const bigImgWrapper = document.createElement("div");
        bigImgWrapper.className = "project-img-wrapper"; 
        container.appendChild(bigImgWrapper);  

        const bigImg = document.createElement('img');
        bigImg.className = "project-img";
        const imgPath = project.firstElementChild.getAttribute("src").split(".")[4];
        bigImg.setAttribute("src", `${imgPath}-big.jpg`)
        bigImgWrapper.appendChild(bigImg);
        document.body.style.overflowY = "hidden";
        
        projectHideBtn.classList.add('change');

        projectHideBtn.onclick = () => {
            projectHideBtn.classList.remove("change");
            bigImgWrapper.remove();
            document.body.style.overflowY = "scroll";
        }
    });
});