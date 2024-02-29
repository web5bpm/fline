const header = document.getElementsByTagName('header')[0];
const logo = document.createElement('img');
logo.setAttribute('src', 'profil/logo.png');
logo.addEventListener('click', () => {
    window.location = "index.html";
});

const sosial = document.createElement('ul');
listOfSosial.forEach((e) => {
    const sosialChild = document.createElement('li');
    const sosialChildIcon = document.createElement('i');
    const sosialChildIconLink = document.createElement('a');
    sosialChildIconLink.setAttribute('href', e.linkOfSosial);
    sosialChildIconLink.setAttribute('target', '_blank');
    sosialChildIcon.className = e.classOfIcon;
    sosialChildIcon.append(sosialChildIconLink);
    sosialChild.append(sosialChildIcon);
    sosial.append(sosialChild);
})

header.append(logo, sosial);

const nav = document.getElementsByTagName('nav')[0];
const navUl = document.createElement('ul');
listOfMenu.forEach((e) => {
    const navUlChild = document.createElement('li');

    const navUlChildLink = document.createElement('a');
    navUlChildLink.setAttribute('href', e.linkOfMenu);
    navUlChildLink.textContent = e.nameOfMenu;

    const navUlChildIcon = document.createElement('i');
    navUlChildIcon.className = e.iconOfMenu;
    navUlChild.append(navUlChildIcon, navUlChildLink);
    navUl.append(navUlChild);

    if (document.getElementsByTagName('title')[0].textContent.includes(e.nameOfMenu)) {
        navUlChildLink.style.color = "var(--color1)";
        navUlChildIcon.style.background = "var(--color1)";
        navUlChildIcon.style.color = "white";
    }
});
nav.append(navUl);

if (window.innerWidth <= 1000) {
    const menuForSite = document.createElement('i');
    menuForSite.className = "bx bx-menu";
    header.append(menuForSite);
    menuForSite.addEventListener('click', () => {
        nav.classList.toggle("nav-view");
    });
}

const footer = document.getElementsByTagName('footer')[0];
const logoMother = document.createElement('div');
const nameOfSite = document.createElement('span');
nameOfSite.textContent = "fline.az";
// const logo1 = document.createElement('img');
// logo1.setAttribute('src', 'profil/logo.png');
logoMother.append(nameOfSite);
logoMother.addEventListener('click', () => {
    window.location = "index.html";
});

const listAreaOfFooter = document.createElement('div');

const listArea1 = document.createElement('ul');
const listArea1Head = document.createElement('span');
listArea1Head.textContent = "Bizi burada izləyin";
listArea1.append(listArea1Head);
listOfSosial.forEach((e) => {
    const listArea1li = document.createElement('li');
    const listArea1Child = document.createElement('a');
    const listArea1ChildIcon = document.createElement('i');
    listArea1ChildIcon.className = e.classOfIcon;
    listArea1Child.textContent = e.nameOfSosial;
    listArea1Child.append(listArea1ChildIcon);
    listArea1Child.setAttribute('href', e.linkOfSosial);
    listArea1Child.setAttribute('target', '_blank');
    listArea1li.append(listArea1Child);
    listArea1.append(listArea1li);
});

const listArea2 = document.createElement('ul');
const listArea2Head = document.createElement('span');
listArea2Head.textContent = "Əlaqələrimiz";
listArea2.append(listArea2Head);
const listArea2li = document.createElement('li');
const listArea2Child = document.createElement('a');
const listArea2ChildIcon = document.createElement('i');
listArea2ChildIcon.className = "bx bx-envelope";
listArea2Child.textContent = "flineazerbaijan@gmail.com";
listArea2Child.append(listArea2ChildIcon);
listArea2Child.setAttribute('href', "mailto:flineazerbaijan@gmail.com");
listArea2li.append(listArea2Child);

const listArea2liT = document.createElement('li');
const listArea2ChildT = document.createElement('a');
const listArea2ChildIconT = document.createElement('i');
listArea2ChildIconT.className = "bx bx-phone";
listArea2ChildT.textContent = "+994 55 257 57 65";
listArea2ChildT.append(listArea2ChildIconT);
listArea2ChildT.setAttribute('href', "tel:+994552575765");
listArea2liT.append(listArea2ChildT);
listArea2.append(listArea2li, listArea2liT);

const listArea3 = document.createElement('ul');
const listArea3Head = document.createElement('span');
listArea3Head.textContent = "Əməkdaşlarımız";
listArea3.append(listArea3Head);
listOfCustomer.forEach((e) => {
    if (e.logoOfCustomer !== "") {
        const listArea3li = document.createElement('li');
        const listArea3Child = document.createElement('a');
        const listArea3ChildCover = document.createElement('img');
        listArea3ChildCover.setAttribute('src', e.logoOfCustomer);
        listArea3Child.append(listArea3ChildCover);
        listArea3Child.setAttribute('href', e.linkOfCustomer);
        listArea3Child.setAttribute('target', '_blank');
        listArea3li.append(listArea3Child);
        listArea3.append(listArea3li);
    }
});

listAreaOfFooter.append(listArea1, listArea2, listArea3);

const copyRight = document.createElement('div');
copyRight.setAttribute("class", "copyright");
const copyRightSpan = document.createElement('span');
const copyRightLink = document.createElement('a');
copyRightLink.setAttribute("href", "https://vidadi-ali.com");
copyRightLink.setAttribute("target", "_blank");
copyRightLink.setAttribute("style", "color: white;");
copyRightLink.textContent = "Vidadi Ali";
copyRightSpan.innerHTML = "Copyright &copy; 2024 Bütün hüquqlar qorunur  |  Developed by";
copyRight.append(copyRightSpan, copyRightLink);

footer.append(logoMother, listAreaOfFooter, copyRight);


