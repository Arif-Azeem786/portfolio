// Project video hover logic
document.querySelectorAll('.project-vidbox').forEach(vidbox => {
    const video = vidbox.querySelector('video');
    const hoverSign = vidbox.querySelector('.hover-sign');
    if (video && hoverSign) {
        video.addEventListener("mouseover", function(){
            video.play();
            hoverSign.classList.add("active");
        });
        video.addEventListener("mouseout", function(){
            video.pause();
            hoverSign.classList.remove("active");
        });
    }
});

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')

menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})

// Translations object
const translations = {
    en: {
        'about': 'About',
        'skills': 'Skills',
        'projects': 'Projects',
        'experience': 'Experience',
        'home': 'Home',
        'portfolio_title': 'Full Stack Developer Portfolio',
        'hero_title': 'Providing the best Project Experience',
        'hero_description': 'Demonstrate expertise in React, Node.js, Express.js, and MongoDB, including experience in building and deploying MERN-based applications.',
        'contact_button': 'Contact Me',
        'hello_there': 'Hello,There👋',
        'hi_there': 'Hi there, I\'m Arif',
        'about_description': 'With more than 1 year of experience, I have honed my skills in both frontend and backend dev, creating dynamic and responsive websites.',
        'tech_stack': 'Tech Stack',
        'tech_description': 'I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.',
        'flexible': 'I\'m very flexible with time zone communications & locations',
        'location': 'I\'m based in India and open to remote work worldwide.',
        'passion': 'My Passion for Coding',
        'passion_description': 'I love solving problems and building things through code. Programming isn\'t just my profession—it\'s my passion. I enjoy exploring new technologies, and enhancing my skills.',
        'my_projects': 'My Projects 👨‍💻',
        'my_skills': 'My Skills 💪',
        'designer': 'Designer',
        'designer_description': 'I have expertise in HTML, CSS, JavaScript, and design tools like Figma and Adobe XD. My strength lies in blending aesthetics with functionality to create seamless user experiences.',
        'coder': 'Coder',
        'coder_description': 'I\'m skilled in HTML, CSS, JavaScript, and frameworks like React and Node.js. I also have experience with database management using MongoDB and MySQL.',
        'current_experience': 'Current Experience 💼',
        'testimonials': 'Testimonials 💬',
        'certifications': 'Certifications 🏆',
        'education': 'Education Journey 📚',
        'enhanced_skills': 'Enhanced Skills 🌟',
        'lets_talk': 'Let\'s talk😊'
    },
    hi: {
        'about': 'परिचय',
        'skills': 'कौशल',
        'projects': 'प्रोजेक्ट्स',
        'experience': 'अनुभव',
        'home': 'होम',
        'portfolio_title': 'फुल स्टैक डेवलपर पोर्टफोलियो',
        'hero_title': 'सर्वश्रेष्ठ प्रोजेक्ट अनुभव प्रदान करना',
        'hero_description': 'React, Node.js, Express.js, और MongoDB में विशेषज्ञता, MERN-आधारित एप्लिकेशन बनाने और डिप्लॉय करने का अनुभव।',
        'contact_button': 'संपर्क करें',
        'hello_there': 'नमस्ते👋',
        'hi_there': 'नमस्ते, मैं अरिफ हूं',
        'about_description': '1 वर्ष से अधिक के अनुभव के साथ, मैंने फ्रंटएंड और बैकएंड डेवलपमेंट में अपने कौशल को निखारा है।',
        'tech_stack': 'टेक स्टैक',
        'tech_description': 'मैं विभिन्न भाषाओं, फ्रेमवर्क और टूल्स में विशेषज्ञता रखता हूं।',
        'flexible': 'मैं समय क्षेत्र और स्थान के साथ बहुत लचीला हूं',
        'location': 'मैं भारत में रहता हूं और दुनिया भर में रिमोट काम के लिए तैयार हूं।',
        'passion': 'कोडिंग के प्रति मेरा जुनून',
        'passion_description': 'मुझे समस्याओं को हल करना और कोड के माध्यम से चीजें बनाना पसंद है।',
        'my_projects': 'मेरे प्रोजेक्ट्स 👨‍💻',
        'my_skills': 'मेरे कौशल 💪',
        'designer': 'डिज़ाइनर',
        'designer_description': 'मुझे HTML, CSS, JavaScript और Figma जैसे डिज़ाइन टूल्स में विशेषज्ञता है।',
        'coder': 'कोडर',
        'coder_description': 'मैं HTML, CSS, JavaScript और React, Node.js जैसे फ्रेमवर्क में कुशल हूं।',
        'current_experience': 'वर्तमान अनुभव 💼',
        'testimonials': 'प्रशंसापत्र 💬',
        'certifications': 'प्रमाणपत्र 🏆',
        'education': 'शिक्षा यात्रा 📚',
        'enhanced_skills': 'उन्नत कौशल 🌟',
        'lets_talk': 'बात करते हैं😊'
    },
    te: {
        'about': 'గురించి',
        'skills': 'సామర్థ్యాలు',
        'projects': 'ప్రాజెక్టులు',
        'experience': 'అనుభవం',
        'home': 'హోమ్',
        'portfolio_title': 'ఫుల్ స్టాక్ డెవలపర్ పోర్ట్‌ఫోలియో',
        'hero_title': 'ఉత్తమ ప్రాజెక్ట్ అనుభవాన్ని అందిస్తున్నాము',
        'hero_description': 'React, Node.js, Express.js, మరియు MongoDB లో నైపుణ్యం, MERN-ఆధారిత అప్లికేషన్లను నిర్మించడం మరియు డిప్లాయ్ చేయడం.',
        'contact_button': 'నన్ను సంప్రదించండి',
        'hello_there': 'హలో👋',
        'hi_there': 'హలో, నేను అరిఫ్',
        'about_description': '1 సంవత్సరం పైగా అనుభవంతో, ఫ్రంట్‌ఎండ్ మరియు బ్యాక్‌ఎండ్ డెవలప్‌మెంట్‌లో నా నైపుణ్యాలను పెంపొందించాను.',
        'tech_stack': 'టెక్ స్టాక్',
        'tech_description': 'నేను వివిధ భాషలు, ఫ్రేమ్‌వర్క్‌లు మరియు టూల్‌లలో నైపుణ్యం కలిగి ఉన్నాను.',
        'flexible': 'నేను టైమ్ జోన్ మరియు లొకేషన్‌లతో చాలా సరళంగా ఉంటాను',
        'location': 'నేను భారతదేశంలో ఉన్నాను మరియు ప్రపంచవ్యాప్తంగా రిమోట్ పనికి తెరవండి.',
        'passion': 'కోడింగ్ పట్ల నా ఉత్సాహం',
        'passion_description': 'నేను సమస్యలను పరిష్కరించడం మరియు కోడ్ ద్వారా వస్తువులను నిర్మించడం ఇష్టం.',
        'my_projects': 'నా ప్రాజెక్టులు 👨‍💻',
        'my_skills': 'నా సామర్థ్యాలు 💪',
        'designer': 'డిజైనర్',
        'designer_description': 'నాకు HTML, CSS, JavaScript మరియు Figma వంటి డిజైన్ టూల్‌లలో నైపుణ్యం ఉంది.',
        'coder': 'కోడర్',
        'coder_description': 'నేను HTML, CSS, JavaScript మరియు React, Node.js వంటి ఫ్రేమ్‌వర్క్‌లలో నైపుణ్యం కలిగి ఉన్నాను.',
        'current_experience': 'ప్రస్తుత అనుభవం 💼',
        'testimonials': 'సాక్ష్యాలు 💬',
        'certifications': 'ధృవీకరణలు 🏆',
        'education': 'విద్యా ప్రయాణం 📚',
        'enhanced_skills': 'మెరుగైన సామర్థ్యాలు 🌟',
        'lets_talk': 'మాట్లాడుదాం😊'
    },
    ur: {
        'about': 'تعارف',
        'skills': 'مہارتیں',
        'projects': 'پروجیکٹس',
        'experience': 'تجربہ',
        'home': 'ہوم',
        'portfolio_title': 'فل سٹیک ڈویلپر پورٹ فولیو',
        'hero_title': 'بہترین پروجیکٹ تجربہ فراہم کرنا',
        'hero_description': 'React، Node.js، Express.js، اور MongoDB میں مہارت، MERN-بیسڈ ایپلیکیشنز بنانے اور ڈپلائے کرنے کا تجربہ۔',
        'contact_button': 'مجھ سے رابطہ کریں',
        'hello_there': 'ہیلو👋',
        'hi_there': 'ہیلو، میں عارف ہوں',
        'about_description': '1 سال سے زیادہ کے تجربے کے ساتھ، میں نے فرنٹ اینڈ اور بیک اینڈ ڈویلپمنٹ میں اپنی مہارتوں کو نکھارا ہے۔',
        'tech_stack': 'ٹیک اسٹیک',
        'tech_description': 'میں مختلف زبانوں، فریم ورکس اور ٹولز میں مہارت رکھتا ہوں۔',
        'flexible': 'میں ٹائم زون اور لوکیشن کے ساتھ بہت لچکدار ہوں',
        'location': 'میں بھارت میں رہتا ہوں اور دنیا بھر میں ریموٹ کام کے لیے تیار ہوں۔',
        'passion': 'کوڈنگ کے لیے میرا جنون',
        'passion_description': 'مجھے مسائل حل کرنا اور کوڈ کے ذریعے چیزیں بنانا پسند ہے۔',
        'my_projects': 'میرے پروجیکٹس 👨‍💻',
        'my_skills': 'میری مہارتیں 💪',
        'designer': 'ڈیزائنر',
        'designer_description': 'مجھے HTML، CSS، JavaScript اور Figma جیسے ڈیزائن ٹولز میں مہارت ہے۔',
        'coder': 'کوڈر',
        'coder_description': 'میں HTML، CSS، JavaScript اور React، Node.js جیسے فریم ورکس میں ماہر ہوں۔',
        'current_experience': 'موجودہ تجربہ 💼',
        'testimonials': 'گواہیاں 💬',
        'certifications': 'سرٹیفیکیشنز 🏆',
        'education': 'تعلیمی سفر 📚',
        'enhanced_skills': 'بہتر مہارتیں 🌟',
        'lets_talk': 'بات کرتے ہیں😊'
    }
};

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    console.log('Initializing theme:', savedTheme);
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    console.log('Updating theme icon:', theme);
    if (icon) {
        icon.className = theme === 'light' ? 'bx bx-moon' : 'bx bx-sun';
    }
}

if (themeToggle) {
    console.log('Theme toggle button found');
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        console.log('Switching theme from', currentTheme, 'to', newTheme);
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
} else {
    console.log('Theme toggle button not found');
}

// Language Switching Functionality
const languageSelect = document.getElementById('languageSelect');

function initializeLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    console.log('Initializing language:', savedLanguage);
    if (languageSelect) {
        languageSelect.value = savedLanguage;
        updateLanguage(savedLanguage);
    } else {
        console.log('Language select element not found');
    }
}

function updateLanguage(lang) {
    console.log('Updating language to:', lang);
    const elements = document.querySelectorAll('[data-translate]');
    console.log('Found elements to translate:', elements.length);
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
            console.log('Translated:', key, 'to:', translations[lang][key]);
        } else {
            console.log('No translation found for:', key, 'in language:', lang);
        }
    });
}

if (languageSelect) {
    console.log('Language select element found');
    languageSelect.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        console.log('Language changed to:', selectedLanguage);
        updateLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
    });
} else {
    console.log('Language select element not found');
}

// Initialize theme and language on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeLanguage();
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
}