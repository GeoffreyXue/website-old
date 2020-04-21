class NavHeader extends HTMLElement
{
    constructor()
    {
        super();
        this.home = document.createElement("a");
        this.projects = document.createElement("a");
        this.contactInfo = document.createElement("a");

        this.home.setAttribute("class", "home");
        this.projects.setAttribute("class", "projects");
        this.contactInfo.setAttribute("class", "contactInfo");

        this.home.setAttribute("href", "/website-testing/");
        this.projects.setAttribute("href", "/website-testing/projects");
        this.contactInfo.setAttribute("href", "/website-testing/contactInfo");

        this.appendChild(this.home);
        this.appendChild(this.projects);
        this.appendChild(this.contactInfo);

        let homeImage = new Image(32, 32);
        homeImage.src = "/website-testing/imgs/homeIcon.png";
        this.home.appendChild(homeImage);

        let homeText = document.createElement("div");
        this.home.appendChild(homeText);
        homeText.innerHTML = "Home";

        let projectsImage = new Image(32, 32);
        projectsImage.src = "/website-testing/imgs/projectsIcon.png";
        this.projects.appendChild(projectsImage);

        let projectsText = document.createElement("div");
        this.projects.appendChild(projectsText);
        projectsText.innerHTML = "Projects";

        let contactInfoImage = new Image(40, 32);
        contactInfoImage.src = "/website-testing/imgs/contactInfoIcon.png";
        this.contactInfo.appendChild(contactInfoImage);

        let contactInfoText = document.createElement("div");
        this.contactInfo.appendChild(contactInfoText);
        contactInfoText.innerHTML = "Contact Info";
        //test
    }
}

window.customElements.define('nav-header', NavHeader);
