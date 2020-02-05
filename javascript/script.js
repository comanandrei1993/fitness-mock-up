
// Creates array of page section elements
const returnPageSections = () => {
    const sections = ['.header', '.section-about', '.section-instructors', '.section-contact'];

    const pageSections = [];

    for(i = 0; i <= sections.length - 1; i++) {
        let selector = document.querySelector(`${sections[i]}`);
        pageSections.push(selector);
    }

    return pageSections;
}

// Creates array of nav elements
const returnNavElements = () => {
    const elements = ['#home-link', "#about-link", '#instructors-link', '#contact-link'];

    const navElements = [];

    for(i = 0; i <= elements.length - 1; i++) {
        let selector = document.querySelector(`${elements[i]}`);
        navElements.push(selector);
    }

    return navElements;
}

// Creates an array of objects that contain pair nav-elements and page-sections
const makeNavObjects = () => {
    const navElements = returnNavElements();
    const pageSections = returnPageSections();

    let navObjects = [];

    for(i = 0; i <= navElements.length - 1; i++) {
        navObjects.push({
            navElement: navElements[i],
            pageSection: pageSections[i]
        })
    }

    return navObjects;
}

// add event listeners
const navEventListener = () => {
    const navObjects = makeNavObjects();

    const navElements = returnNavElements();
    
    navObjects.forEach(el => {
        
        el.navElement.addEventListener('click', function() {
            for (i = 0; i <= navElements.length - 1; i++) {
                navElements[i].style.color = '#6c6e8f';
            }
            this.style.color = '#54BF9D';
        })
    })
}
navEventListener();
