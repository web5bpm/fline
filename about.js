const aboutMain = document.getElementsByTagName('main')[0];
const aboutMainFirstHead = document.createElement('h1');
aboutMainFirstHead.textContent = "Biz kimik?";
const aboutMainFirstParagraf = document.createElement('p');
aboutMainFirstParagraf.innerHTML = `Biz <a href="https://fline.az">fline.az</a> olaraq Azərbaycanda fəaliyyət göstərən 
işlətmələrin daha geniş satış, yüksək gəlir əldə etmələri üçün texnoloji fürsətlərdən yaranmalarını təmin edirik. <br><br>
Qabaqcıl xidmətlərdən biri olan virtual promouter bizim əsas ideamızdır. Bir neçə şirkətlə çıxdığımız bu yolda, şirkətlərin
satışda uğur qazanmaları, bizim ümid dolu gələcəyimizin göstəricisidir. <br><br>
Virtual promouter müştərilərin visual diqqətlərini çəkməklə yetinmir, həmçinin müştərilərin operativ, dəqiq məlumat
almalarını təmin edir. <br><br> Dünyanın inkişaf etmiş əksər ölkələrində uğurlu marketingin yolu, texnologiya ilə ayaqlaşmanın
üzərindədir. Əgər bir şirkət mühim mövqeyə çatmaq istəyirsə, bu əsrin mövcud imkanlarına yatırım etməyə məcburdur. 
Biz də bu ideanı əsas götürərərk, satışda mühim irəliləyiş yaradan virtual promouter texnologiyasını sizlər üçün daha
əlçatan etməyə çalışırıq. Bizə qoşulun ki, <br><span>Birgə İnkişaf Edək!</span>`;


const aboutMainSecondHead = document.createElement('h1');
aboutMainSecondHead.textContent = "Niyə biz?";

const aboutMainSecondList = document.createElement('ul');
listOfAbility2.forEach((e) => {
    const aboutMainSecondListLi = document.createElement("li");
    aboutMainSecondListLi.textContent = e;
    aboutMainSecondList.append(aboutMainSecondListLi);
});

const boxForMap = document.createElement('div');
boxForMap.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.059434911722!2d50.098364483383534!3d40.518177375791765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030f5f35c062d91%3A0xd75eff2e9fa69b91!2zTcmZZMmZbml5ecmZdCB2yZkgU8mZbsmZdGthcmzEsXEgw7x6csmZIEJha8SxIETDtnZsyZl0IFBlxZ_JmSBUyZloc2lsIE3JmXJryZl6aQ!5e0!3m2!1str!2saz!4v1706365675786!5m2!1str!2saz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

aboutMain.append(aboutMainFirstHead, aboutMainFirstParagraf, aboutMainSecondHead, aboutMainSecondList, boxForMap);