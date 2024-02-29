const mainForWorks = document.getElementsByTagName('main')[0];

const coverOfPage = document.createElement('div');
coverOfPage.className = "cover-of-page";

const coverOfPageImg = document.createElement('img');
coverOfPageImg.setAttribute('src', 'profil/cover-of-work.jpg');

const coverOfPageHead = document.createElement('h1');
coverOfPageHead.textContent = "İnkişafı bizimlə tapın";

coverOfPage.append(coverOfPageImg, coverOfPageHead);

const forReclam = document.createElement('div');
forReclam.className = "for-reclam";
const forReclamChild1 = document.createElement('div');
const forReclamChild1Head = document.createElement('h3');
forReclamChild1Head.textContent = "Yeni əməkdaşlıqlar üçün";

const forReclamChild1Box = document.createElement('div');
const forReclamChild1BoxPhone = document.createElement('a');
const forReclamChild1BoxPhoneIcon = document.createElement('i');
forReclamChild1BoxPhoneIcon.className = "bx bxl-whatsapp";

forReclamChild1BoxPhone.append(forReclamChild1BoxPhoneIcon, "+994 55 257 57 65");
forReclamChild1BoxPhone.setAttribute('href', 'https://wa.me/+994552575765');

const forReclamChild1BoxMail = document.createElement('a');
const forReclamChild1BoxMailIcon = document.createElement('i');
forReclamChild1BoxMailIcon.className = "bx bx-envelope";

forReclamChild1BoxMail.append(forReclamChild1BoxMailIcon, "flineazerbaijan@gmail.com");
forReclamChild1BoxMail.setAttribute('href', 'mailto:flineazerbaijan@gmail.com');

forReclamChild1Box.append(forReclamChild1BoxPhone, forReclamChild1BoxMail);
forReclamChild1.append(forReclamChild1Head, forReclamChild1Box);

const forReclamChild2 = document.createElement('div');
const forReclamChild2Head = document.createElement('h3');
forReclamChild2Head.textContent = "İşlərimiz";

const forReclamChild2Box = document.createElement('div');
const forReclamChild2BoxDown = document.createElement('a');
const forReclamChild2BoxDownIcon = document.createElement('i');
forReclamChild2BoxDownIcon.className = "bx bxs-hand-down";

forReclamChild2BoxDown.append(forReclamChild2BoxDownIcon);
forReclamChild2BoxDown.setAttribute('href', '#ourProject');

forReclamChild2Box.append(forReclamChild2BoxDown);

forReclamChild2.append(forReclamChild2Head, forReclamChild2Box);

forReclam.append(forReclamChild1, forReclamChild2);

const whyUs = document.createElement('div');
whyUs.className = "why-us";
const whyUsHead = document.createElement('h2');
whyUsHead.textContent = "Niyə Biz!";


const whyUsList = document.createElement('ol');
listOfAbility1.forEach((e) => {
    const whyUsListLi = document.createElement("li");
    const whyUsListLiIcon = document.createElement("i");
    whyUsListLiIcon.className = "bx bx-chevron-down-square";
    whyUsListLi.append(whyUsListLiIcon, e);
    whyUsList.append(whyUsListLi);
});

whyUs.append(whyUsHead, whyUsList);


const ourWork = document.createElement('div');
ourWork.className = "our-work";
ourWork.setAttribute('id', 'ourProject');
const ourWorkHead = document.createElement('h1');
ourWorkHead.textContent = "İşlərimiz";

const ourWorkBox = document.createElement('div');

listOfCustomer.forEach((e) => {
    if (e.logoOfCustomer !== "") {
        const ourWorkBoxChild = document.createElement('div');
        const ourWorkBoxChildHead = document.createElement('span');
        ourWorkBoxChildHead.textContent = e.nameOfCustomer;
        const ourWorkBoxChildCover = document.createElement('div');
        ourWorkBoxChildCover.className = "box-child-cover";
        const ourWorkBoxChildCoverImg = document.createElement('img');
        ourWorkBoxChildCoverImg.setAttribute('src', e.coverOfCustomer);

        const ourWorkBoxChildCoverInform = document.createElement('div');
        const ourWorkBoxChildCoverInformPhone = document.createElement('a');
        const ourWorkBoxChildCoverInformPhoneIcon = document.createElement('i');
        ourWorkBoxChildCoverInformPhoneIcon.className = "bx bx-phone";
        ourWorkBoxChildCoverInformPhone.append(ourWorkBoxChildCoverInformPhoneIcon, e.phoneViewOfCustomer);
        ourWorkBoxChildCoverInformPhone.setAttribute('href', `tel:${e.phoneOfCustomer}`);
        const ourWorkBoxChildCoverInformLink = document.createElement('a');
        const ourWorkBoxChildCoverInformLinkIcon = document.createElement('i');
        ourWorkBoxChildCoverInformLinkIcon.className = "bx bx-world";
        ourWorkBoxChildCoverInformLink.append(ourWorkBoxChildCoverInformLinkIcon, e.domainOfCustomer);
        ourWorkBoxChildCoverInformLink.setAttribute('href', e.linkOfCustomer);
        ourWorkBoxChildCoverInformLink.setAttribute('target', '_blank');
        const ourWorkBoxChildCoverInformLocation = document.createElement('a');
        const ourWorkBoxChildCoverInformLocationIcon = document.createElement('i');
        ourWorkBoxChildCoverInformLocationIcon.className = "bx bxs-location-plus"
        ourWorkBoxChildCoverInformLocation.append(ourWorkBoxChildCoverInformLocationIcon, "ünvan");
        ourWorkBoxChildCoverInformLocation.setAttribute('href', e.locationOfCustomer);
        ourWorkBoxChildCoverInformLocation.setAttribute('target', '_blank');

        ourWorkBoxChildCoverInform.append(ourWorkBoxChildCoverInformPhone, ourWorkBoxChildCoverInformLocation, ourWorkBoxChildCoverInformLink);
        ourWorkBoxChildCover.append(ourWorkBoxChildCoverImg, ourWorkBoxChildCoverInform);

        const ourWorkBoxChildPhotos = document.createElement('div');
        ourWorkBoxChildPhotos.className = "box-child-photos";
        e.photosOfCustomer.forEach((f) => {
            const ourWorkBoxChildPhotosBox = document.createElement('a');
            ourWorkBoxChildPhotosBox.setAttribute('href', f);
            const ourWorkBoxChildPhotosBoxImage = document.createElement('img');
            ourWorkBoxChildPhotosBoxImage.setAttribute('src', f);
            ourWorkBoxChildPhotosBox.append(ourWorkBoxChildPhotosBoxImage);
            ourWorkBoxChildPhotos.append(ourWorkBoxChildPhotosBox);
        })
        ourWorkBoxChild.append(ourWorkBoxChildHead, ourWorkBoxChildCover, ourWorkBoxChildPhotos);
        ourWorkBox.append(ourWorkBoxChild)
    }
})

ourWork.append(ourWorkHead, ourWorkBox);

mainForWorks.append(coverOfPage, forReclam, whyUs, ourWork);