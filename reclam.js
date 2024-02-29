const mainPage = document.getElementsByTagName('main')[0];
const asCarosel = document.createElement('div');
asCarosel.className = 'as-carosel';
const asCaroselMainText = document.createElement('h1');
asCaroselMainText.textContent = "Niyə Bizdə Reklam Verməli?";

const asCaroselMainBox = document.createElement('div');
const asCaroselMainBoxText = document.createElement('span');
asCaroselMainBoxText.textContent = listOfCasroselText[listOfCasroselText.length - 1];

setTimeout(time2, 6200);
function time2() {
    asCaroselMainBoxText.style.left = "-150%";
}
setInterval(time1, 7000);
let changeCount = 0;
function time1() {
    asCaroselMainBoxText.textContent = listOfCasroselText[changeCount];
    asCaroselMainBoxText.style.left = "5%";
    changeCount++;
    if (changeCount == listOfCasroselText.length) {
        changeCount = 0;
    }
    setTimeout(time2, 6200);
    function time2() {
        asCaroselMainBoxText.style.left = "-150%";
    }
}

asCaroselMainBox.append(asCaroselMainBoxText);
asCarosel.append(asCaroselMainText, asCaroselMainBox);

const abilityOfUs = document.createElement('div');
abilityOfUs.className = "ability";

const abilityOfUsHead = document.createElement('h1');
abilityOfUsHead.textContent = "Üstünlüklərimiz";

const abilityOfUsChild = document.createElement('div');

const abilityOfUsChild1 = document.createElement('ul');
listOfAbility1.forEach((e) => {
    const abilityOfUsChild1Li = document.createElement("li");
    abilityOfUsChild1Li.textContent = e;
    abilityOfUsChild1.append(abilityOfUsChild1Li);
});

const abilityOfUsChild2 = document.createElement('ul');
listOfAbility2.forEach((e) => {
    const abilityOfUsChild2Li = document.createElement("li");
    abilityOfUsChild2Li.textContent = e;
    abilityOfUsChild2.append(abilityOfUsChild2Li);
});

abilityOfUsChild.append(abilityOfUsChild1, abilityOfUsChild2);

abilityOfUs.append(abilityOfUsHead, abilityOfUsChild);

const ourCustomers = document.createElement('div');
ourCustomers.className = "our-customers";
const ourCustomersHead = document.createElement('h1');
ourCustomersHead.textContent = "Əməkdaşlarımız";

const ourCustomersBoxes = document.createElement('div');
listOfCustomer.forEach((e) => {
    if (e.logoOfCustomer !== "") {
        const ourCustomersBoxesChild = document.createElement('a');
        const ourCustomersBoxesChildImage = document.createElement('img');
        ourCustomersBoxesChildImage.setAttribute('src', e.logoOfCustomer);
        ourCustomersBoxesChild.append(ourCustomersBoxesChildImage);
        ourCustomersBoxesChild.setAttribute('href', e.linkOfCustomer);
        ourCustomersBoxesChild.setAttribute('target', '_blank');

        ourCustomersBoxes.append(ourCustomersBoxesChild);
    }
});

ourCustomers.append(ourCustomersHead, ourCustomersBoxes);
mainPage.append(asCarosel, abilityOfUs, ourCustomers);