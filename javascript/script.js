//////////////////////////////////////
// Style nav links on hover /////////
////////////////////////////////////
class NavObject {
    constructor(navElement, pageSection, sectionYPosition) {
        this.pageSection = pageSection,
        this.navElement = navElement,
        this.sectionYPosition = sectionYPosition
    }
}

// Creates array of page section elements
const returnPageSections = () => {
    const sections = ['.header', '.section-about', '.section-instructors', '.section-contact'];

    const pageSections = [];

    for(let i = 0; i <= sections.length - 1; i++) {
        let element = document.querySelector(`${sections[i]}`);
        pageSections.push(element);
    }

    return pageSections;
};

// Creates array of nav elements
const returnNavElements = () => {
    const elements = ['#home-link', "#about-link", '#instructors-link', '#contact-link'];

    const navElements = [];

    for(let i = 0; i <= elements.length - 1; i++) {
        let element = document.querySelector(`${elements[i]}`);
        navElements.push(element);
    }

    return navElements;
};

// get clientHeight (y position) of section elements
const returnSectionYPositions = () => {
    let pageSections = returnPageSections();

    const sectionYPositons = [];

    pageSections.forEach(el => {
        sectionYPositons.push(el.getBoundingClientRect().top);
    });

    return sectionYPositons;
};

// Creates an array of objects that contain pair nav-elements and page-sections
const makeNavObjects = () => {
    const navElements = returnNavElements();
    const pageSections = returnPageSections();
    const sectionYPositions = returnSectionYPositions();

    let navObjects = [];

    for(let i = 0; i <= navElements.length - 1; i++) {
        let navObject = new NavObject(navElements[i], pageSections[i], sectionYPositions[i]);
        navObjects.push(navObject);
    }

    return navObjects;
};

// add navbar event listeners
// change nav element color on navlink click
const navEventListener = () => {
    const navObjects = makeNavObjects();

    const navElements = returnNavElements();
    
    navObjects.forEach(el => {
        
        el.navElement.addEventListener('click', function() {
            for (let i = 0; i <= navElements.length - 1; i++) {
                navElements[i].style.color = '#6c6e8f';
            }
            this.style.color = '#54BF9D';
        });
    });
};
navEventListener();

// mouse over section event listeners 
// change nav element color on hover over page section
const mouseOverSection = () => {
    const navObjects = makeNavObjects();

    navObjects.forEach(el => {
        
        el.pageSection.addEventListener('mouseover', function() {
            for (let i = 0; i <= navObjects.length - 1; i++) {
                navObjects[i].navElement.style.color = '#6c6e8f';
            }
            el.navElement.style.color = '#54BF9D';
        });
    });
};
mouseOverSection();

//////////////////////////////////////
// Get use data /////////////////////
////////////////////////////////////

class UserData {
    constructor(name, email, subject, text) {
        this.name = name,
        this.email = email,
        this.subject = subject,
        this.text = text
    }
}

// get form-button
const getContactFormButton = () =>{
    const contactFormButton = document.querySelector('#contact-form-submit');
    
    return contactFormButton;
}

// get form element
const getForm = () =>{
    const formElement = document.querySelector('#contact-form');
    
    return formElement;
}

// create array of values of input elements
const getInputElements = () => {
    const elements = ['#section-contact__form-name-input', '#section-contact__form-email-input', '#section-contact__form-subject-input', '#section-contact__form-message'];

    const inputElements = [];

    for(let i = 0; i <= elements.length - 1; i++) {
        let el = document.querySelector(`${elements[i]}`);
        inputElements.push(el.value);
    }

    return inputElements;
}

// form prevent reload
const formPreventReload = () => {
    const formElement = getForm();
    
    formElement.addEventListener('submit', event => {
        event.preventDefault();
    });
}
formPreventReload();

// get user data
// add event listener to form-button
const getUserData = () => {
    const inputElements = getInputElements();
    const formButton = getContactFormButton();

    formButton.addEventListener('click', () => {
        const userData = new UserData(...inputElements);
        console.log(userData);
        return userData;
    });

}
getUserData();
