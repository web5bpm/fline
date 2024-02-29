const mainOfSite = document.getElementsByTagName('main')[0];
const boxOfCustomerView = document.createElement('div');
document.getElementsByClassName('mother-of-carosel')[0].style.display = "none";

for (let i = 0; i < 5; i++) {
    const boxOfCustomer = document.createElement('div');
    boxOfCustomer.className = "box-of-customer"
    const boxOfCustomerCover = document.createElement('img');
    boxOfCustomerCover.setAttribute('src', listOfCustomer[i].coverOfCustomer);
    const boxOfCustomerElement = document.createElement('div');
    const boxOfCustomerElementName = document.createElement('span');
    boxOfCustomerElementName.textContent = listOfCustomer[i].nameOfCustomer;
    const boxOfCustomerElementLink = document.createElement('div');
    const boxOfCustomerElementLink1 = document.createElement('a');
    boxOfCustomerElementLink1.textContent = "Sayta Get";
    boxOfCustomerElementLink1.setAttribute('href', listOfCustomer[i].linkOfCustomer);
    boxOfCustomerElementLink1.setAttribute('target', "_blank");
    const boxOfCustomerElementLink2 = document.createElement('a');
    boxOfCustomerElementLink2.textContent = "Ətraflı Bax";
    boxOfCustomerElementLink2.setAttribute('href', "ourworks.html#ourProject");
    boxOfCustomerElementLink.append(boxOfCustomerElementLink1, boxOfCustomerElementLink2)
    boxOfCustomerElement.append(boxOfCustomerElementName, boxOfCustomerElementLink);
    boxOfCustomer.append(boxOfCustomerCover, boxOfCustomerElement);
    boxOfCustomerView.append(boxOfCustomer);

    boxOfCustomerElement.addEventListener('mouseover', () => {
        boxOfCustomerCover.style.scale = "1.1";
    });
    boxOfCustomerElement.addEventListener('mouseout', () => {
        boxOfCustomerCover.style.scale = "1";
    })

    function customerView() {
        if (innerWidth > 490) {
            if (i == 2) {
                boxOfCustomer.style.scale = "1.5";
                boxOfCustomer.style.zIndex = "3";
            }
            else if (i == 1 || i == 3) {
                boxOfCustomer.style.scale = "1.2";
                boxOfCustomer.style.zIndex = "2";
            }
            else {
                boxOfCustomer.style.scale = ".9";
                boxOfCustomer.style.zIndex = "1";

                if (window.innerWidth <= 755) {
                    boxOfCustomer.style.display = "none";
                }
            }
        }
    }

    function customerViewForOver() {
        boxOfCustomer.style.scale = "1";
        boxOfCustomer.style.zIndex = "1";
        boxOfCustomer.style.opacity = "0.3";
    }

    customerView();

    boxOfCustomer.addEventListener('mouseover', () => {
        customerViewForOver();
        boxOfCustomer.style.scale = "1.6";
        boxOfCustomer.style.zIndex = "4";
        boxOfCustomer.style.opacity = "1";
    });
    boxOfCustomer.addEventListener('mouseout', () => {
        customerView();
    });

    if (window.innerWidth <= 490) {
        boxOfCustomer.style.display = "none";
    }
}

if (window.innerWidth <= 490) {
    boxOfCustomerView.style.display = "none";

    document.getElementsByClassName('mother-of-carosel')[0].style.display = "block";
    document.getElementsByClassName('mother-of-carosel')[0].style.overflow = "hidden"

    const carouselSlide = document.getElementsByClassName('carousel slide')[0];

    const carouselIndicators = document.createElement('div');
    carouselIndicators.className = "carousel-indicators";

    const carouselInner = document.createElement('div');
    carouselInner.className = "carousel-inner";


    for (let i = 0; i < 4; i++) {
        const indicatorsButtons = document.createElement('button');
        indicatorsButtons.setAttribute("aria-label", "Slide " + (i + 1));
        indicatorsButtons.setAttribute("type", "button");
        indicatorsButtons.setAttribute("data-bs-target", "#carouselExampleCaptions");
        indicatorsButtons.setAttribute("data-bs-slide-to", i);

        const carouselItem = document.createElement('div');
        carouselItem.setAttribute("class", "carousel-item");

        const carouselItemImage = document.createElement("img");
        carouselItemImage.setAttribute("src", listOfCustomer[i].coverOfCustomer);
        carouselItemImage.setAttribute("class", "d-block w-100");
        carouselItemImage.setAttribute("alt", "no photo");

        const boxOfCustomerElement = document.createElement('div');
        boxOfCustomerElement.className = 'box-element'
        const boxOfCustomerElementName = document.createElement('span');
        boxOfCustomerElementName.textContent = listOfCustomer[i].nameOfCustomer;
        const boxOfCustomerElementLink = document.createElement('div');
        const boxOfCustomerElementLink1 = document.createElement('a');
        boxOfCustomerElementLink1.textContent = "Sayta Get";
        boxOfCustomerElementLink1.setAttribute('href', listOfCustomer[i].linkOfCustomer);
        boxOfCustomerElementLink1.setAttribute('target', "_blank");
        const boxOfCustomerElementLink2 = document.createElement('a');
        boxOfCustomerElementLink2.textContent = "Ətraflı Bax";
        boxOfCustomerElementLink2.setAttribute('href', "ourworks.html#ourProject");
        boxOfCustomerElementLink.append(boxOfCustomerElementLink1, boxOfCustomerElementLink2)
        boxOfCustomerElement.append(boxOfCustomerElementName, boxOfCustomerElementLink);

        if (i === 0) {
            indicatorsButtons.setAttribute("aria-current", "true");
            indicatorsButtons.setAttribute("class", "active");

            carouselItem.classList = "carousel-item active";
        }

        carouselIndicators.append(indicatorsButtons);

        carouselItem.append(carouselItemImage, boxOfCustomerElement);
        carouselInner.append(carouselItem)
    }

    carouselSlide.append(carouselIndicators, carouselInner);
}




const boxOfCustomerMore = document.createElement('a');
boxOfCustomerMore.textContent = "Daha Ətraflı Bax";
boxOfCustomerMore.setAttribute('href', "ourworks.html#ourProject");


const promoter = document.createElement('section');
promoter.className = "promouter"
const promoterHead = document.createElement('h3');
promoterHead.textContent = "Virtual Promouter nədir və onunla nələr əldə edərik?";
const promoterParagraf = document.createElement('p');
const promoterParagrafText = `Bəzən inkişaf edən mühitdə texnologiya ilə ayaqlaşmaq çətin olur, lakin bunu etməklə
siz biznesinizin inkişafını artırmağa və getdikcə daha çox sadiq müştərilər qazanmağa davam edəcəyinizə əmin
olursunuz. Bu kontekstdə pərakəndə satış sənayesi ən rəqabətli və dinamik iş sahələrindən birinə çevrilib. Brendlər 
istehlakçıların şüurunda ən yüksək dayanacaqlar üçün ədəbi mübarizə aparır.
</br></br>
Bu texnologiyadan istifadənin mahiyyəti brendlərə müştərilərin onları pərakəndə satış mühitində necə hiss etdiklərini
daha dərindən başa düşməkdən ibarətdir ki, bu da öz növbəsində onların biznes intellektini artırır və onlara xərclərə 
qənaət və satışların artırılması üçün strateji dəyişikliklər etməyə imkan verir. Bu, əməkdaşlarımıza öz fəaliyyətlərini
biznes qərarlarını formalaşdıran məlumatlara çevirməyə imkan verir. Təqdim olunan kampaniyaların müxtəlifliyini və hər 
biri üçün məqsədləri nəzərə alaraq, bütün əməkdaşlar fərdi brendin ehtiyaclarına uyğunlaşdırılmış sifarişli ölçülər 
və hesabat verə bilər. Son məqsəd performansı optimallaşdırmaqdır. Kampaniyaları çatdırmaq üçün müxtəlif platformalar 
və alətlər istifadə olunur; aşağıda biz bu texnologiyanın bəzi nəticələrini və üstünlüklərini təsvir edirik`;

promoterParagraf.innerHTML = promoterParagrafText;
const forParagrafButton = document.createElement('button');
forParagrafButton.textContent = "Ətraflı Oxu";
forParagrafButton.style = "margin: 10px 0; padding: 10px 0; width: 100%; background-color: var(--color1); color: white; outline: none; border: none; border-radius: 5px; cursor: pointer;";
if (window.innerWidth <= 455) {
    promoterParagraf.innerHTML = `Bəzən inkişaf edən mühitdə texnologiya ilə ayaqlaşmaq çətin olur, lakin bunu etməklə
    siz biznesinizin inkişafını artırmağa və getdikcə daha çox sadiq müştərilər qazanmağa davam edəcəyinizə əmin
    olursunuz. Bu kontekstdə pərakəndə satış sənayesi ən rəqabətli və dinamik iş sahələrindən birinə çevrilib. Brendlər 
    istehlakçıların şüurunda ən yüksək dayanacaqlar üçün ədəbi mübarizə aparır
    </br></br>
    Bu texnologiyadan istifadənin mahiyyəti brendlərə müştərilərin onları pərakəndə satış mühitində necə hiss etdiklərini
    daha dərindən başa düşməkdən ibarətdir ki,`;

    promoterParagraf.append(forParagrafButton);
}

const forParagrafBox = document.createElement('p'), closeParagraf = document.createElement('i');
closeParagraf.className = "bx bx-x close-paragraf";
forParagrafButton.addEventListener('click', () => {
    forParagrafBox.style.display = "block";
    forParagrafBox.innerHTML = promoterParagrafText;
    forParagrafBox.append(closeParagraf)
    mainOfSite.append(forParagrafBox);
});

closeParagraf.addEventListener('click', () => {
    forParagrafBox.style.display = "none";
});


const promoterChild = document.createElement('div');
promoterChildValue.forEach((e) => {
    const promoterChildElement = document.createElement('div');
    const promoterChildValueName = document.createElement('h5');
    promoterChildValueName.textContent = e.nameOfPromoterChild;
    const promoterChildValueEmbed = document.createElement('iframe');
    promoterChildValueEmbed.setAttribute('src', e.embedOfPromoterChild);
    const promoterChildValueUl = document.createElement('ul');
    e.listOfpromoterChild.forEach((f) => {
        const promoterChildValueUlChild = document.createElement('li');
        promoterChildValueUlChild.textContent = f;
        promoterChildValueUl.append(promoterChildValueUlChild);
    });

    const promoterChildValueMore = document.createElement('a');
    promoterChildValueMore.textContent = "Ətraflı";
    promoterChildValueMore.setAttribute('href', "#");
    promoterChildElement.append(promoterChildValueName, promoterChildValueEmbed, promoterChildValueUl, promoterChildValueMore);
    promoterChild.append(promoterChildElement);
});

promoter.append(promoterHead, promoterParagraf, promoterChild);

mainOfSite.append(boxOfCustomerView, boxOfCustomerMore, promoter);
