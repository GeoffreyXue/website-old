class NavHeader extends HTMLElement
{
    constructor()
    {
        super();
        this.home = document.createElement("div");
        this.projects = document.createElement("div");
        this.contactInfo = document.createElement("div");

        this.home.setAttribute("class", "home");
        this.projects.setAttribute("class", "projects");
        this.contactInfo.setAttribute("class", "contactInfo");

        this.appendChild(this.home);
        this.appendChild(this.projects);
        this.appendChild(this.contactInfo);

        let homeImage = new Image(32, 32);
        homeImage.src = "imgs/homeIcon.png";
        this.home.appendChild(homeImage);

        let homeText = document.createElement("div");
        this.home.appendChild(homeText);
        homeText.innerHTML = "Home";

        let projectsImage = new Image(32, 32);
        projectsImage.src = "imgs/projectsIcon.png";
        this.projects.appendChild(projectsImage);

        let projectsText = document.createElement("div");
        this.projects.appendChild(projectsText);
        projectsText.innerHTML = "Projects";

        let contactInfoImage = new Image(40, 32);
        contactInfoImage.src = "imgs/contactInfoIcon.png";
        this.contactInfo.appendChild(contactInfoImage);

        let contactInfoText = document.createElement("div");
        this.contactInfo.appendChild(contactInfoText);
        contactInfoText.innerHTML = "Contact Info";
        /*
        // mouse enter and mouse leave events
        let navHeader = document.querySelector("nav-header");
        //console.log(navHeader);
        let navTabs = navHeader.querySelectorAll("nav-header > div");
        //console.log(navTabs);
        for (let i = 0; i < navTabs.length; i++)
        {
            let tab = navTabs[i];
            //console.log(navTabs[i]);
            //console.log(tab);
            tab.addEventListener("mouseenter", function()
            {
                let image = tab.querySelector("img");
                image.setAttribute(opacity, 1);
                console.log(image);
                let info = tab.querySelector("div");
                info.setAttribute(display, "block");
                console.log(info);
            });
            tab.addEventListener("mouseenter", function()
            {
                let image = tab.querySelector("img");
                image.setAttribute(opacity, 1);
                console.log(image);
                let info = tab.querySelector("div");
                info.setAttribute(display, "block");
                console.log(info);
            });
        }
        */
    }
}

window.customElements.define('nav-header', NavHeader);
