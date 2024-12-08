// Header Section
const pageTitle = document.getElementById('page-title');
const navAbout = document.getElementById('nav-about');
const navSeasons = document.getElementById('nav-seasons');
const navExpo = document.getElementById('nav-expo');
const navContact = document.getElementById('nav-contact');
const navArabic = document.getElementById('nav-arabic');
const navbarAbout = document.getElementById('navbar-about');
const navbarSeasons = document.getElementById('navbar-seasons');
const navbarExpo = document.getElementById('navbar-expo');
const navbarInst = document.getElementById('navbar-inst');
const navInst = document.getElementById('nav-inst');
const navbarContact = document.getElementById('navbar-contact');
const navbarArabic = document.getElementById('navbar-arabic');

// Main Title Section
const mainTitle = document.getElementById('main-title');
const seasonTitle = document.getElementById('season-title');
const dates = document.getElementById('dates');

// Slideshow Section
const gamejamDescription = document.getElementById('gamejam-description');
const registerButton = document.getElementById('register-button');

// Participants Section
const participantsDetails = document.getElementById('participants-details');

// Who Can Participate Section
const whoCanParticipate = document.getElementById('who-can-participate');
const ageGroup = document.getElementById('age-group');
const creatorsCategory = document.getElementById('creators-category');
const pioneersCategory = document.getElementById('pioneers-category');
const roles = document.getElementById('roles');

// Location Section
const locationTitle = document.getElementById('location-title');

// Dates Section
const datesTitle = document.getElementById('dates-title');

// Table Section
const tableCol1Header = document.getElementById('table-col1-header');
const tableCol2Header = document.getElementById('table-col2-header');
const tableCol3Header = document.getElementById('table-col3-header');
const tableCol1Row1 = document.getElementById('table-col1-row1');
const tableCol2Row1 = document.getElementById('table-col2-row1');
const tableCol3Row1 = document.getElementById('table-col3-row1');
const tableCol1Row2 = document.getElementById('table-col1-row2');
const tableCol2Row2 = document.getElementById('table-col2-row2');
const tableCol3Row2 = document.getElementById('table-col3-row2');
const tableCol1Row3 = document.getElementById('table-col1-row3');
const tableCol2Row3 = document.getElementById('table-col2-row3');
const tableCol3Row3 = document.getElementById('table-col3-row3');

// Footer Section
const quickLinksTitle = document.getElementById('quick-links-title');
const quickHome = document.getElementById('quick-home');
const quickProjects = document.getElementById('quick-projects');
const quickContact = document.getElementById('quick-contact');
const contactTitle = document.getElementById('contact-title');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const linkedinLink = document.getElementById('linkedin-link');
const githubLink = document.getElementById('github-link');
const footerText = document.getElementById('footer-text');

// Test Logging (Optional)
console.log(pageTitle.textContent); // Logs "Home Page"
console.log(mainTitle.textContent); // Logs "The National Cultural Game Jam"
console.log(quickLinksTitle.textContent); // Logs "Quick Links"
console.log(roles.textContent); // Logs all roles

function switchToEnglish() {
    // Header Section
    pageTitle.textContent = 'Main Page';
    navAbout.textContent = 'About';
    navSeasons.textContent = 'Seasons';
    navExpo.textContent = 'E-game Expo';
    navContact.textContent = 'Contact Us';
    navInst.textContent = 'Instructions';
    navbarInst.textContent = 'Instructions';
    navArabic.textContent = 'عربي';
    navbarAbout.textContent = 'About';
    navbarSeasons.textContent = 'Seasons';
    navbarExpo.textContent = 'E-game Expo';
    navbarContact.textContent = 'Contact Us';
    navbarArabic.textContent = 'عربي';

    // Main Title Section
    mainTitle.textContent = 'The National Cultural Game Jam';
    seasonTitle.textContent = 'Season Two';
    dates.textContent = 'from 22nd - 29th Jan 2025';

    // Slideshow Section
    gamejamDescription.textContent =
        'The National Cultural Game Jam is an intensive, creative competition where participants create a game from scratch within 48 hours based on a specific theme.';
    registerButton.textContent = 'Register';

    // Participants Section
    participantsDetails.textContent = "Participants will have the opportunity to encourage creativity and innovation by developing unique games that creatively integrate the given theme. Throughout the process, developers will enhance their technical skills, honing their programming, design, and problem-solving abilities. The collaborative nature of the program fosters teamwork, allowing participants to improve their communication and cooperation skills. Additionally, they will evaluate their games for market potential, assessing their commercial viability and opportunities for further development. Ultimately, this initiative aims to stimulate creative economic growth.";

    // Who Can Participate Section
    whoCanParticipate.textContent = 'Who Can Participate?';
    ageGroup.innerHTML = '<span><b>Age:&nbsp;</b></span> 15 years & above';
    creatorsCategory.innerHTML =
        '<span class="fw-bold me-2">Creators Category:</span> Register in this category if you are a beginner but have the passion and specific skills to help your team in creating, designing, and developing a unique game.';
    pioneersCategory.innerHTML =
        '<span class="fw-bold me-2">Pioneers Category:</span> Register in this category if you have notable expertise and exceptional knowledge in the field of game development.';
    roles.innerHTML =
        '<b>Video Game Developer</b>, <b>3D Graphics Designer</b>, <b>2D Graphics Designer</b>, <b>User Interface Designer</b>, <b>Sound and Game Music Creator</b>, <b>Animator</b>, <b>Content or Story Writer</b>';

    // Location Section
    locationTitle.textContent = 'Location';

    // Dates Section
    datesTitle.textContent = 'Dates';

    // Table Section
    tableCol1Header.textContent = 'العمود 1';
    tableCol2Header.textContent = 'العمود 2';
    tableCol3Header.textContent = 'العمود 3';
    tableCol1Row1.textContent = 'العمود 1';
    tableCol2Row1.textContent = 'العمود 2';
    tableCol3Row1.textContent = 'العمود 3';
    tableCol1Row2.textContent = 'العمود 1';
    tableCol2Row2.textContent = 'العمود 2';
    tableCol3Row2.textContent = 'العمود 3';
    tableCol1Row3.textContent = 'العمود 1';
    tableCol2Row3.textContent = 'العمود 2';
    tableCol3Row3.textContent = 'العمود 3';

    // Footer Section
    quickLinksTitle.textContent = 'Quick Links';
    quickHome.textContent = 'Home';
    quickProjects.textContent = 'Seasons';
    quickContact.textContent = 'E-game Expo';
    contactTitle.textContent = 'Contact Us';
    email.innerHTML = 'Email: <a href="mailto:khmes.alajme2@gmail.com" class="text-black text-decoration-none">khmes.alajme2@gmail.com</a>';
    phone.textContent = 'Phone: +965-12345678';
    footerText.textContent = '© 2024 NCCAL. All rights reserved.';
}
function switchToArabic() {
    // Header Section
    pageTitle.textContent = 'الصفحة الرئيسية';
    navAbout.textContent = 'عنا';
    navSeasons.textContent = 'المواسم';
    navExpo.textContent = 'اكسبو الألعاب';
    navContact.textContent = 'اتصل بنا';
    navInst.textContent = 'ارشادات';
    navbarInst.textContent = 'ارشادات';
    navArabic.textContent = 'English';
    navbarAbout.textContent = 'عنا';
    navbarSeasons.textContent = 'المواسم';
    navbarExpo.textContent = 'اكسبو الألعاب';
    navbarContact.textContent = 'اتصل بنا';
    navbarArabic.textContent = 'English';

    // Main Title Section
    mainTitle.textContent = 'التحدي الوطني الثقافي للألعاب الإلكترونية';
    seasonTitle.textContent = 'الموسم الثاني';
    dates.textContent = 'من 22 إلى 29 يناير 2025';

    // Slideshow Section
    gamejamDescription.textContent =
        'التحدي الوطني الثقافي للألعاب هو مسابقة مكثفة وإبداعية حيث يقوم المشاركون بإنشاء لعبة من الصفر خلال 48 ساعة بناءً على موضوع محدد.';
    registerButton.textContent = 'سجل الآن';

    // Participants Section
    participantsDetails.textContent = "مرحبًا بك في بطولة التحدي الوطني الثقافي للألعاب الإلكترونية، حيث ستتاح لك الفرصة لخوض تجربة فريدة ومميزة في عالم تطوير الألعاب. هذه البطولة ليست مجرد مسابقة، بل هي منصة تجمع بين الموهوبين والمبدعين من صناع الألعاب الإلكترونية، الذين يتشاركون شغفًا واحدًا لتطوير لعبة إلكترونية من الصفر خلال 48 ساعة. ستنضم إلى فريق تختاره مكون من أفضل المبدعين، وتحت إشراف متخصصين ومرشدين في مجال تطوير وصناعة الألعاب، مما سيمكنك من الاستفادة من خبراتهم وإرشادهم.  علاوة على ذلك، ستتاح لك الفرصة للانضمام إلى معسكر تدريبي متخصص في برمجة الألعاب الإلكترونية قبل بدء التحدي، مما سيمكنك من صقل مهاراتك وزيادة معرفتك في هذا المجال المتطور. انضم إلينا لمقابلة مطورين عالميين، والتعرف على مجتمع المطورين، واكتشاف أحدث الوسائل التقنية التي ستساعدك في تطوير لعبتك الإلكترونية.  كما ستكون لديك الفرصة لعرض مشروعك على المستثمرين، مما قد يفتح أمامك آفاقًا جديدة في مسيرتك المهنية. لا تفوت هذه الفرصة الرائعة، وكن جزءًا من هذه التجربة الاستثنائية.";

    // Who Can Participate Section
    whoCanParticipate.textContent = 'من يمكنه المشاركة؟';
    ageGroup.innerHTML = 'سنة فما فوق<b>&nbsp;15&nbsp;:العمر</b>';
    creatorsCategory.innerHTML =
        '<span class="fw-bold me-2">فئة المبدعين:</span> سجل في هذه الفئة إذا كنت مبتدئًا ولكن لديك الشغف والمهارات اللازمة لمساعدة فريقك في إنشاء وتصميم وتطوير لعبة فريدة.';
    pioneersCategory.innerHTML =
        '<span class="fw-bold me-2">فئة الرواد:</span> سجل في هذه الفئة إذا كانت لديك خبرة ومعرفة مميزة في مجال تطوير الألعاب.';
    roles.innerHTML =
        '<b>,مطوّر ألعاب فيديو</b> <b>,مصمم جرافيك ثلاثي الأبعاد</b> <b>,مصمم جرافيك ثنائي الأبعاد</b> ' +
        '<b>,مصمم واجهة المستخدم</b> <b>,منشئ الصوت وموسيقى الألعاب</b> ' +
        '<b>,منشئ الرسوم المتحركة</b> <b>,كاتب محتوى أو قصة</b>';

    // Location Section
    locationTitle.textContent = 'الموقع';

    // Dates Section
    datesTitle.textContent = 'التواريخ';

    // Table Section
    tableCol1Header.textContent = 'العمود 1';
    tableCol2Header.textContent = 'العمود 2';
    tableCol3Header.textContent = 'العمود 3';
    tableCol1Row1.textContent = 'العمود 1';
    tableCol2Row1.textContent = 'العمود 2';
    tableCol3Row1.textContent = 'العمود 3';
    tableCol1Row2.textContent = 'العمود 1';
    tableCol2Row2.textContent = 'العمود 2';
    tableCol3Row2.textContent = 'العمود 3';
    tableCol1Row3.textContent = 'العمود 1';
    tableCol2Row3.textContent = 'العمود 2';
    tableCol3Row3.textContent = 'العمود 3';

    // Footer Section
    quickLinksTitle.textContent = 'روابط سريعة';
    quickHome.textContent = 'الرئيسية';
    quickProjects.textContent = 'المشاريع';
    quickContact.textContent = 'اتصل بي';
    contactTitle.textContent = 'تواصل معنا';
    email.innerHTML = 'البريد الإلكتروني: <a href="mailto:khmes.alajme2@gmail.com" class="text-black text-decoration-none">khmes.alajme2@gmail.com</a>';
    phone.textContent = 'رقم الهاتف: +965-51253951';
    linkedinLink.innerHTML = '<i class="bi bi-linkedin"></i> لينكد إن';
    githubLink.innerHTML = '<i class="bi bi-github"></i> جيت هب';
    footerText.textContent = '© 2024 خميس العجمي. جميع الحقوق محفوظة.';
}

// Add a listener to switch to Arabic when clicking the Arabic button
navArabic.addEventListener('click', () => {
    if (navArabic.textContent == "English"){
        switchToEnglish();
    }else {
        switchToArabic();
    }

});
navbarArabic.addEventListener('click', () => {
    if (navbarArabic.textContent == "English"){
        switchToEnglish();
    }else {
        switchToArabic();
    }

});

document.addEventListener('DOMContentLoaded', () => {
    switchToArabic();
})