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
const Skills = document.getElementById('requiredSkills');
const partners = document.getElementById('part');
const about_btn = document.getElementById('about-button');



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
// Existing table rows
const tableCol1Row1 = document.getElementById('table-col1-row1');
const tableCol2Row1 = document.getElementById('table-col2-row1');
const tableCol3Row1 = document.getElementById('table-col3-row1');
const tableCol1Row2 = document.getElementById('table-col1-row2');
const tableCol2Row2 = document.getElementById('table-col2-row2');
const tableCol3Row2 = document.getElementById('table-col3-row2');
const tableCol1Row3 = document.getElementById('table-col1-row3');
const tableCol2Row3 = document.getElementById('table-col2-row3');
const tableCol3Row3 = document.getElementById('table-col3-row3');

// New table rows
const tableCol1Row4 = document.getElementById('table-col1-row4');
const tableCol2Row4 = document.getElementById('table-col2-row4');
const tableCol3Row4 = document.getElementById('table-col3-row4');
const tableCol1Row5 = document.getElementById('table-col1-row5');
const tableCol2Row5 = document.getElementById('table-col2-row5');
const tableCol3Row5 = document.getElementById('table-col3-row5');
const tableCol1Row6 = document.getElementById('table-col1-row6');
const tableCol2Row6 = document.getElementById('table-col2-row6');
const tableCol3Row6 = document.getElementById('table-col3-row6');


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
    navAbout.textContent = 'About Us';
    navAbout.href = 'about';
    navSeasons.textContent = 'Seasons';
    navExpo.textContent = 'E-game Expo';
    navContact.textContent = 'Contact Us';
    navContact.href = 'contact';
    navInst.textContent = 'Instructions';
    navbarInst.textContent = 'Instructions';
    navArabic.textContent = 'عربي';
    navbarAbout.textContent = 'About Us';
    navbarAbout.href = 'about';
    navbarSeasons.textContent = 'Seasons';
    navbarExpo.textContent = 'E-game Expo';
    navbarContact.textContent = 'Contact Us';
    navbarContact.href = 'contact'
    navbarArabic.textContent = 'عربي';

    // Main Title Section
    mainTitle.textContent = 'The National Cultural Game Jam';
    seasonTitle.textContent = 'Season Two';
    dates.textContent = 'from 22nd - 29th Jan 2025';

    // Slideshow Section
    gamejamDescription.textContent =
        'The National Cultural Game Jam is an intensive, creative competition where participants create a game from scratch within 72 hours based on a specific theme.';
    registerButton.textContent = 'Register';

    // Participants Section
    participantsDetails.textContent = "Participants will have the opportunity to encourage creativity and innovation by developing unique games that creatively integrate the given theme. Throughout the process, developers will enhance their technical skills, honing their programming, design, and problem-solving abilities. The collaborative nature of the program fosters teamwork, allowing participants to improve their communication and cooperation skills. Additionally, they will evaluate their games for market potential, assessing their commercial viability and opportunities for further development. Ultimately, this initiative aims to stimulate creative economic growth.";

    // Who Can Participate Section
    whoCanParticipate.textContent = 'Who Can Participate?';
    ageGroup.innerHTML = '<span><b>Age:&nbsp;</b></span> 15 years & above';
    creatorsCategory.innerHTML =
        '<span class="fw-bold me-2 text-center">Creators Category:</span> Register in this category if you are a beginner but have the passion and specific skills to help your team in creating, designing, and developing a unique game.';
    pioneersCategory.innerHTML =
        '<span class="fw-bold me-2 text-center">Pioneers Category:</span> Register in this category if you have notable expertise and exceptional knowledge in the field of game development.';
    roles.innerHTML =
        '<p><b>Video Game Developer</b> - <b>3D Graphics Designer</b> - <b>2D Graphics Designer</b> - <b>User Interface Designer</b> - <b>Sound and Game Music Creator</b> - <b>Animator</b> - <b>Content or Story Writer</b>';

    // Location Section
    locationTitle.textContent = 'Location';
    Skills.textContent = 'Required Skills'
    // Dates Section
    datesTitle.textContent = 'Schedule';

    // Table Section
// Table Headers
tableCol1Header.textContent = 'Day';
tableCol2Header.textContent = 'Time';
tableCol3Header.textContent = 'Event';
about_btn.textContent = 'Read more'
// Table Row 1
tableCol1Row1.textContent = 'Wednesday, January 22, 2025';
tableCol2Row1.textContent = '5 pm - 9 pm';
tableCol3Row1.innerHTML = `
    <ul style="direction: ltr; text-align: left; list-style-position: inside;">
        <li><b>Opening Ceremony / Speakers</b></li>
        <li>Organizers' Speech</li>
        <li>My Journey with Game Development (Khala Fatma) – Abdullah Al-Hamad – Game Developer from Saudi Arabia</li>
        <li>Team Formation</li>
    </ul>
`;

// Table Row 2
tableCol1Row2.innerHTML = 'Thursday, Friday, Saturday<br>January 23, 24, 25';
tableCol2Row2.textContent = '5 pm - 9 pm';
tableCol3Row2.innerHTML = `
    <ul style="direction: ltr; text-align: left; list-style-position: inside;">
        <li><b>Intensive Training Camps in Game Engines  (Godot, Unity)</b> 15 training hours / three days</li>
        <li><b>Intensive Camp for Writing Content / Game Stories</b> 15 training hours / three days</li>
    </ul>
`;

// Table Row 3
tableCol1Row3.textContent = 'Saturday, January 25, 2025';
tableCol2Row3.textContent = '9 am - 9 pm';
tableCol3Row3.innerHTML = `
    <ul style="direction: ltr; text-align: left; list-style-position: inside;">
        <li><b>Challenge Topic Announcement</b></li>
        <li>Challenge Launch</li>
    </ul>
`;

// New Row 4
tableCol1Row4.textContent = 'Sunday, Monday January 26, 27';
tableCol2Row4.textContent = '9 pm - 9 am';
tableCol3Row4.innerHTML = `
    <ul style="direction: ltr; text-align: left; list-style-position: inside;">
        <li>Remaining Challenge Days</li>
    </ul>
`;

// New Row 5
tableCol1Row5.textContent = 'Tuesday, January 28, 2025';
tableCol2Row5.textContent = '9 am';
tableCol3Row5.innerHTML = `
    <ul style="direction: ltr; text-align: left; list-style-position: inside;">
        <li><b>Final Game Submission</b></li>
        <li>Judging (All Day)</li>
    </ul>
`;

// New Row 6
tableCol1Row6.textContent = 'Wednesday, January 29, 2025';
tableCol2Row6.textContent = '9 am - 9 pm';
tableCol3Row6.innerHTML = `
    <ul style="direction: ltr; text-align: left; list-style-position: inside;">
        <li><b>Electronic Games Exhibition</b></li>
        <li>Closing Ceremony</li>
        <li>Winners Announcement</li>
        <li>Awards Ceremony</li>
    </ul>
`;

    partners.textContent = 'In Collaboration With'
    // Footer Section
    quickLinksTitle.textContent = 'Quick Links';
    contactTitle.textContent = 'Contact Us';
    footerText.textContent = '© 2024 NCCAL. All rights reserved.';
}
function switchToArabic() {
    // Header Section
    pageTitle.textContent = 'الصفحة الرئيسية';
    navAbout.textContent = 'اتصل بنا';
    navAbout.href = 'contact';
    navSeasons.textContent = 'المواسم';
    navExpo.textContent = 'اكسبو الألعاب';
    navContact.textContent = 'عن التحدي';
    navContact.href = 'about'
    navInst.textContent = 'ارشادات';
    navbarInst.textContent = 'ارشادات';
    navArabic.textContent = 'English';
    navbarAbout.textContent = 'اتصل بنا';
    navbarAbout.href = 'contact'
    navbarSeasons.textContent = 'المواسم';
    navbarExpo.textContent = 'اكسبو الألعاب';
    navbarContact.textContent = 'عن التحدي';
    navbarContact.href = 'about';
    navbarArabic.textContent = 'English';

    // Main Title Section
    mainTitle.textContent = 'التحدي الوطني الثقافي للألعاب الإلكترونية';
    seasonTitle.textContent = 'الموسم الثاني';
    dates.textContent = 'من 22 إلى 29 يناير 2025';

    // Slideshow Section
    gamejamDescription.textContent =
        'التحدي الوطني الثقافي للألعاب هو مسابقة مكثفة وإبداعية حيث يقوم المشاركون بإنشاء لعبة من الصفر خلال 72 ساعة بناءً على موضوع محدد';
    registerButton.textContent = 'سجل الآن';

    // Participants Section
    participantsDetails.textContent = "مرحبًا بك في بطولة التحدي الوطني الثقافي للألعاب الإلكترونية، حيث ستتاح لك الفرصة لخوض تجربة فريدة ومميزة في عالم تطوير الألعاب. هذه البطولة ليست مجرد مسابقة، بل هي منصة تجمع بين الموهوبين والمبدعين من صناع الألعاب الإلكترونية، الذين يتشاركون شغفًا واحدًا لتطوير لعبة إلكترونية من الصفر خلال 72 ساعة. ستنضم إلى فريق تختاره مكون من أفضل المبدعين، وتحت إشراف متخصصين ومرشدين في مجال تطوير وصناعة الألعاب، مما سيمكنك من الاستفادة من خبراتهم وإرشادهم.  علاوة على ذلك، ستتاح لك الفرصة للانضمام إلى معسكر تدريبي متخصص في برمجة الألعاب الإلكترونية قبل بدء التحدي، مما سيمكنك من صقل مهاراتك وزيادة معرفتك في هذا المجال المتطور. انضم إلينا لمقابلة مطورين عالميين، والتعرف على مجتمع المطورين، واكتشاف أحدث الوسائل التقنية التي ستساعدك في تطوير لعبتك الإلكترونية.  كما ستكون لديك الفرصة لعرض مشروعك على المستثمرين، مما قد يفتح أمامك آفاقًا جديدة في مسيرتك المهنية. لا تفوت هذه الفرصة الرائعة، وكن جزءًا من هذه التجربة الاستثنائية";
    about_btn.textContent = 'إقرأ المزيد'
    // Who Can Participate Section
    whoCanParticipate.textContent = 'من يمكنه المشاركة؟';
    ageGroup.innerHTML = 'سنة فما فوق<b>&nbsp;15&nbsp;:العمر</b>';
    creatorsCategory.innerHTML =
        '<span class="fw-bold me-2 text-center">فئة المبدعين:</span> سجل في هذه الفئة إذا كنت مبتدئًا ولكن لديك الشغف والمهارات اللازمة لمساعدة فريقك في إنشاء وتصميم وتطوير لعبة فريدة';
    pioneersCategory.innerHTML =
        '<span class="fw-bold me-2 text-center">فئة الرواد:</span> سجل في هذه الفئة إذا كانت لديك خبرة ومعرفة مميزة في مجال تطوير الألعاب';
    roles.innerHTML =
        '<b>,مطوّر ألعاب فيديو</b> <b>,مصمم جرافيك ثلاثي الأبعاد</b> <b>,مصمم جرافيك ثنائي الأبعاد</b> <b>,مصمم واجهة المستخدم</b> <b>,منشئ الصوت وموسيقى الألعاب</b> <b>,منشئ الرسوم المتحركة</b> <b>,كاتب محتوى أو قصة</b>';

    // Location Section
    locationTitle.textContent = 'الموقع';

    // Dates Section
    datesTitle.textContent = 'جدول الأنشطة';
    Skills.textContent = 'المهارات المطلوبة'
    // Table Section
// Table Headers
// Table Headers
// Table Headers
tableCol1Header.textContent = 'اليوم';
tableCol2Header.textContent = 'الوقت';
tableCol3Header.textContent = 'الفعالية';

// Table Row 1
tableCol1Row1.textContent = 'الأربعاء 22 يناير 2025';
tableCol2Row1.textContent = '9 pm - 5 pm';
tableCol3Row1.innerHTML = `
    <ul style="direction: rtl; text-align: right; list-style-position: inside;">
        <li><b>حفل الافتتاح</b></li>
        <li>كلمة المنظمين</li>
        <li>رحلتي مع تطوير لعبة (خالة فاطمة) – عبدالله الحمد – مطور ألعاب - المملكة العربية السعودية</li>
        <li>تشكيل الفرق</li>
    </ul>
`;
partners.textContent = 'بالتعاون مع'
// Table Row 2
tableCol1Row2.innerHTML = 'الخميس، الجمعة، السبت<br>23، 24، 25 يناير';
tableCol2Row2.textContent = '9 pm - 5 pm';
tableCol3Row2.innerHTML = `
    <ul style="direction: rtl; text-align: right; list-style-position: inside;">
        <li><b> معسكرات تدريبية مكثفة في محركات برمجة الألعاب (Godot, Unity)</b> 15 ساعة تدريبية / ثلاث أيام </li>
        <li><b>معسكر تدريبي مكثف في كتابة محتوى / قصة الألعاب الإلكترونية</b> 15 ساعة تدريبية / ثلاث أيام </li>
    </ul>
`;

// Table Row 3
tableCol1Row3.textContent = 'السبت 25 يناير 2025';
tableCol2Row3.textContent = '9 pm - 9 am';
tableCol3Row3.innerHTML = `
    <ul style="direction: rtl; text-align: right; list-style-position: inside;">
        <li><b>إعلان موضوع التحدي</b></li>
        <li>انطلاقة التحدي</li>
    </ul>
`;

// New Row 4
tableCol1Row4.textContent = 'الأحد، الاثنين\n26، 27 يناير';
tableCol2Row4.textContent = '9 pm - 9 am';
tableCol3Row4.innerHTML = `
    <ul style="direction: rtl; text-align: right; list-style-position: inside;">
        <li>باقي أيام التحدي</li>
    </ul>
`;

// New Row 5
tableCol1Row5.textContent = 'الثلاثاء 28 يناير 2025';
tableCol2Row5.textContent = '9 am';
tableCol3Row5.innerHTML = `
    <ul style="direction: rtl; text-align: right; list-style-position: inside;">
        <li><b>التسليم النهائي للألعاب</b></li>
        <li>التحكيم (طوال اليوم)</li>
    </ul>
`;

// New Row 6
tableCol1Row6.textContent = 'الأربعاء 29 يناير 2025';
tableCol2Row6.textContent = '9 pm - 9 am';
tableCol3Row6.innerHTML = `
    <ul style="direction: rtl; text-align: right; list-style-position: inside;">
        <li><b>معرض الألعاب الإلكترونية</b></li>
        <li>الحفل الختامي</li>
        <li>إعلان الفائزين</li>
        <li>التكريم</li>
    </ul>
`;



    // Footer Section
    quickLinksTitle.textContent = 'روابط سريعة';
    contactTitle.textContent = 'تواصل معنا';
    footerText.textContent = '© 2024 المجلس الوطني للثقافة والفنون والآداب. جميع الحقوق محفوظة';
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