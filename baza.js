const listOfMenu = [
    {
        nameOfMenu: "Ana Səhifə",
        linkOfMenu: "index.html",
        iconOfMenu: "bx bxs-home"
    },
    {
        nameOfMenu: "Bizdə Reklam Ver",
        linkOfMenu: "reclam.html",
        iconOfMenu: "bx bx-bar-chart-alt-2"
    },
    {
        nameOfMenu: "İşlərimiz",
        linkOfMenu: "ourworks.html",
        iconOfMenu: "bx bxs-hand-right"
    },
    {
        nameOfMenu: "Haqqımızda",
        linkOfMenu: "about.html",
        iconOfMenu: "bx bx-user-circle"
    },
    {
        nameOfMenu: "Əlaqə",
        linkOfMenu: "https://wa.me/+994552575765",
        iconOfMenu: "bx bxl-whatsapp"
    },
    {
        nameOfMenu: "artcenter.az",
        linkOfMenu: "https://artcenter.az",
        iconOfMenu: "bx bx-world"
    }
];


const listOfSosial = [
    {
        nameOfSosial: "fline.az",
        classOfIcon: "bx bxl-instagram",
        linkOfSosial: "https://www.instagram.com/fline.az"
    },
    {
        nameOfSosial: "fline.az",
        classOfIcon: "bx bxl-tiktok",
        linkOfSosial: "https://www.tiktok.com/@fline.az"
    },
    {
        nameOfSosial: "Fline Az",
        classOfIcon: "bx bxl-facebook",
        linkOfSosial: "https://www.facebook.com/profile.php?id=61555833293234"
    },
    {
        nameOfSosial: "Fline Flexible Line",
        classOfIcon: "bx bxl-youtube",
        linkOfSosial: "https://www.youtube.com/@flineflexibleline"
    }
];


// Yeni şirkətləri öndən əlavə et
const listOfCustomer = [
    {
        nameOfCustomer: "Grandmart | 28 may",
        linkOfCustomer: "https://www.grandmartsupermarket.com/",
        domainOfCustomer: "grandmartsupermarket.com",
        logoOfCustomer: "profil/grandmart-logo-28.png",
        coverOfCustomer: "profil/grandmart-cover.PNG",
        locationOfCustomer: "https://www.google.com/maps/place/Grandmart+%7C+28+May/@40.3773227,49.8545038,15z/data=!4m6!3m5!1s0x40307db496bb0dbf:0xc7eb0a581bf6520!8m2!3d40.3773227!4d49.8545038!16s%2Fg%2F11t9syl50v?sa=X&hl=en&ved=2ahUKEwj576eM_7P_AhWchP0HHZu2DXcQ_BJ6BAheEAk&entry=tts&shorturl=1",
        phoneViewOfCustomer: "+994 51 255 51 55",
        phoneOfCustomer: "+994512555155",
        photosOfCustomer: ["grandmart/gm28-1.jpg", "grandmart/gm28-2.jpg"]
    },
    {
        nameOfCustomer: "Bolmart | Təzə bazar",
        linkOfCustomer: "https://bolmart.az",
        domainOfCustomer: "bolmart.az",
        logoOfCustomer: "profil/bolmart-logo.PNG",
        coverOfCustomer: "profil/bolmart-cover.PNG",
        locationOfCustomer: "https://www.google.com/maps/place/Bolmart+%7C+T%C9%99z%C9%99+bazar/@40.3832206,49.8381315,15z/data=!4m6!3m5!1s0x40307d9e2567f3fd:0x75a787c2405f0fce!8m2!3d40.3832206!4d49.8381315!16s%2Fg%2F11bzwpnpmj?hl=en&entry=ttu",
        phoneViewOfCustomer: "+99451 255 56 56",
        phoneOfCustomer: "+994512555656",
        photosOfCustomer: ["bolmart/bm1.jpg", "bolmart/bm2.jpg", "bolmart/bm3.jpg"]
    },
    {
        nameOfCustomer: "Megastore | Günəşli",
        linkOfCustomer: "https://www.megastore.market/",
        domainOfCustomer: "megastore.market",
        logoOfCustomer: "profil/megastore-logo-Guneshli.png",
        coverOfCustomer: "profil/megastore-cover.PNG",
        locationOfCustomer: "https://www.google.com/maps/place/Megastore+%7C+G%C3%BCn%C9%99%C5%9Fli/@40.4114659,49.8659841,12z/data=!4m10!1m2!2m1!1zbWVnYXN0cm9zZSBnw7xuyZnFn2xp!3m6!1s0x40307f9d2a9020d5:0x71972527514855a7!8m2!3d40.3630406!4d49.9693594!15sChVtZWdhc3Ryb3NlIGfDvG7JmcWfbGlaFyIVbWVnYXN0cm9zZSBnw7xuyZnFn2xpkgELc3VwZXJtYXJrZXTgAQA!16s%2Fg%2F11h2kzv_7y?entry=ttu",
        phoneViewOfCustomer: "+994 55 220 08 88",
        phoneOfCustomer: "+994552200888",
        photosOfCustomer: ["megastore/ms-guneshli1.jpg", "megastore/ms-guneshli2.jpg", "megastore/ms-guneshli3.jpg"]
    },
    {
        nameOfCustomer: "Grandmart | AF Mall",
        linkOfCustomer: "https://www.grandmartsupermarket.com/",
        domainOfCustomer: "grandmartsupermarket.com",
        logoOfCustomer: "profil/grandmart-logo-AF.png",
        coverOfCustomer: "profil/grandmart-cover.PNG",
        locationOfCustomer: "https://www.google.com/maps/place/Grandmart+%7C+AF+Mall/@40.3766721,49.8416765,15z/data=!4m6!3m5!1s0x40307d4f4f58a1c1:0xacf27595475126f5!8m2!3d40.3766721!4d49.8416765!16s%2Fg%2F11tj4x4_ps?hl=en&entry=ttu",
        phoneViewOfCustomer: "+994 51 255 51 55",
        phoneOfCustomer: "+994512555155",
        photosOfCustomer: ["grandmart/gm1.jpg", "grandmart/gm2.jpg", "grandmart/gm3.jpg"]
    },
    {
        nameOfCustomer: "Sən də bizə qoşul",
        linkOfCustomer: "#",
        domainOfCustomer: "",
        logoOfCustomer: "",
        coverOfCustomer: "profil/backForCustomer.png",
        locationOfCustomer: "",
        phoneViewOfCustomer: "",
        phoneOfCustomer: "",
        photosOfCustomer: []
    }
];



//  Ə S A S    S Ə H İ F Ə       -     Y O U T U B E

const promoterChildValue = [
    {
        embedOfPromoterChild: 'https://www.youtube.com/embed/PmkHXZmCTBA',
        nameOfPromoterChild: 'Yarmarkalar və tədbirlər',
        listOfpromoterChild: [
            "Yenilik imicini vurğulamaq",
            "Davamlı olaraq yadda qalan şəxsi qarşılıqlı əlaqə",
            "İzahat tələb edən məhsullar və proseslər üçün oynaq məlumat ötürülməsi",
            "Aparıcı nəsil"
        ]
    },
    {
        embedOfPromoterChild: 'https://www.youtube.com/embed/QybMU5GjqH0',
        nameOfPromoterChild: 'Yarmarkalar və tədbirlər',
        listOfpromoterChild: [
            "Pərakəndə satış, Festivallar, İctimai və Ia",
            "Təqdimat ,sərgi",
            "Muzey ,kinoteatr, teatr",
            "Airoport ,avtovağzal",
            "Moll və marketlər",
            "Təhsil Mərkəzləri"
        ]
    },
    {
        embedOfPromoterChild: 'https://www.youtube.com/embed/3_KrjFP3Ryc',
        nameOfPromoterChild: 'Yarmarkalar və tədbirlər',
        listOfpromoterChild: [
            "Məhsul Tanıtımları və Başlamalar",
            "Yol şouları",
            "Rəqəmsal mağazanın aktivləşdirilməsi",
            "Kateqoriya İdarəetmə",
            "Sosial Media İnteqrasiyası",
            "Müştəri seçimlərini bilmək"
        ]
    }
]


// I Ş L Ə R İ M İ Z     VƏ     R E C L A M

const listOfAbility1 = [
    "Səsli reklam",
    "Görüntülü reklam",
    "İşdə davamlılıq",
    "Yüksək keyfiyyət",
    "Ölkədə Tək"
];

const listOfAbility2 = [
    "Operativ iş rejimi",
    "İstənilən tip obyektdə fəaliyyət",
    "Sizə uyğun saatlarda iş imkanı",
    "Ən yeni texnologiya ilə təmin olunma"
];



// R E C L A M 

const listOfCasroselText = [
    "Ən Son Yenilikli Texnologiya",
    "Yüksək Keyfiyyət",
    "Çevik və Bacarıqlı komanda",
    "Daha Çox Satış Etmə İmkanı"
];