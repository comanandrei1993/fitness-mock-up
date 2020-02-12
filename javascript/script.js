
// Creates array of page section elements
const returnPageSections = () => {
    const sections = ['.header', '.section-about', '.section-instructors', '.section-contact'];

    const pageSections = [];

    for(let i = 0; i <= sections.length - 1; i++) {
        let selector = document.querySelector(`${sections[i]}`);
        pageSections.push(selector);
    }

    return pageSections;
}

// Creates array of nav elements
const returnNavElements = () => {
    const elements = ['#home-link', "#about-link", '#instructors-link', '#contact-link'];

    const navElements = [];

    for(let i = 0; i <= elements.length - 1; i++) {
        let selector = document.querySelector(`${elements[i]}`);
        navElements.push(selector);
    }

    return navElements;
}

// Creates an array of objects that contain pair nav-elements and page-sections
const makeNavObjects = () => {
    const navElements = returnNavElements();
    const pageSections = returnPageSections();
    const sectionYPositons = returnSectionYPositions();

    let navObjects = [];

    for(let i = 0; i <= navElements.length - 1; i++) {
        navObjects.push({
            navElement: navElements[i],
            pageSection: pageSections[i],
            pageSectionYPosition: sectionYPositons[i]
        })
    }

    return navObjects;
}

// get clientHeight (y position) of section elements
const returnSectionYPositions = () => {
    let pageSections = returnPageSections();

    const sectionYPositons = [];

    pageSections.forEach(el => {
        sectionYPositons.push(el.getBoundingClientRect().top);
    });

    return sectionYPositons;
}

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
        })
    })
}
navEventListener();

// mouse over section event listeners 
// change nav element color on hover over page section
const mouseOverSection = () => {
    const navObjects = makeNavObjects();

    navObjects.forEach(el => {
        console.log(el.pageSection);
        el.pageSection.addEventListener('mouseover', function() {
            console.log(el.pageSection);
            for (let i = 0; i <= navObjects.length - 1; i++) {
                navObjects[i].navElement.style.color = '#6c6e8f';
            }
            el.navElement.style.color = '#54BF9D';
        })
    })
}
mouseOverSection();
