export const profile = {
  name: "Ahmed Mahmoud Mohammad Lubbad",
  arabicName: "أحمد محمود محمد لبد",
  location: "Gaza, Palestine",
  email: "lubbad039@gmail.com",
  phone: "+972 599 108 541",
  title: "Project Coordinator | MEAL Specialist | Cyber Security Specialist | Community Facilitator | Software Developer",
  experienceYears: "3+",
  projectsCount: "18+",
  linkedin: "https://www.linkedin.com/in/%D8%A3%D8%AD%D9%85%D8%AF-%D9%84%D8%A8%D8%AF-247481449",
  github: "https://github.com/Ahmed18Lubbad",
  cvPath: "",
} as const;

export const experience = [{
  organization: "Our Children for the Deaf",
  organizationAr: "مؤسسة أطفالنا للصم",
  department: "Activities and Projects Department",
  departmentAr: "دائرة الأنشطة والمشاريع",
  position: "Paid Volunteer",
  positionAr: "متطوع بأجر",
  dates: "December 15, 2024 – March 15, 2025",
  datesAr: "15 ديسمبر 2024 – 15 مارس 2025",
  responsibilities: ["Preparing and documenting project reports", "Data entry and database management", "Supervising work teams", "Field coordination", "Data collection and analysis", "Supporting project activities and implementation"],
  responsibilitiesAr: ["إعداد تقارير المشاريع وتوثيقها", "إدخال البيانات وإدارة قواعد البيانات", "الإشراف على فرق العمل", "التنسيق الميداني", "جمع البيانات وتحليلها", "دعم الأنشطة وتنفيذ المشاريع"],
}];

export const education = [
  { name: "Bachelor's Degree in Information Technology", nameAr: "درجة البكالوريوس في تكنولوجيا المعلومات", detail: "Graduated February 2026", detailAr: "تاريخ التخرج: فبراير 2026" },
];

export const certifications = [
  { name: "Cyber Security Training", nameAr: "تدريب الأمن السيبراني", detail: "75 training hours", detailAr: "75 ساعة تدريبية" },
];

export const skillGroups = [
  { id: "meal", title: "MEAL & Project Management", titleAr: "MEAL وإدارة المشاريع", skills: ["Monitoring and Evaluation (M&E)", "Data Collection Tools Design", "KPI Tracking", "Project Coordination", "Beneficiary Database Management", "Report Preparation"], skillsAr: ["المتابعة والتقييم", "تصميم أدوات جمع البيانات", "متابعة مؤشرات الأداء", "تنسيق المشاريع", "إدارة قواعد بيانات المستفيدين", "إعداد التقارير"] },
  { id: "data", title: "Data Analysis & Management", titleAr: "تحليل البيانات وإدارتها", skills: ["Microsoft Power BI", "SPSS", "KoboToolbox", "SQL", "Database Management", "Data Visualization"], skillsAr: ["Microsoft Power BI", "SPSS", "KoboToolbox", "SQL", "إدارة قواعد البيانات", "تصور البيانات"] },
  { id: "cyber", title: "Cyber Security", titleAr: "الأمن السيبراني", skills: ["Data Protection", "Account Security", "Phishing Prevention", "Data Privacy", "Digital Safety Awareness"], skillsAr: ["حماية البيانات", "أمن الحسابات", "الوقاية من التصيد", "خصوصية البيانات", "التوعية بالسلامة الرقمية"] },
  { id: "community", title: "Community & Humanitarian Work", titleAr: "العمل المجتمعي والإنساني", skills: ["Community Facilitation", "Field Coordination", "Team Supervision", "Community Engagement", "Humanitarian Project Implementation"], skillsAr: ["تيسير المجتمع", "التنسيق الميداني", "الإشراف على الفرق", "المشاركة المجتمعية", "تنفيذ المشاريع الإنسانية"] },
  { id: "technology", title: "Software & Technology", titleAr: "البرمجيات والتقنية", skills: ["Information Technology", "PHP", "Java", "JavaScript", "Python", "HTML", "CSS", "SQL", "Data Management", "Digital Security"], skillsAr: ["تكنولوجيا المعلومات", "PHP", "Java", "JavaScript", "Python", "HTML", "CSS", "SQL", "إدارة البيانات", "الأمن الرقمي"] },
];

export const projectCategories = ["All", "Management Systems", "Web Applications", "Desktop Software", "Interface Design"] as const;
export type PortfolioProject = { id: string; title: string; titleAr: string; description: string; descriptionAr: string; category: string; tools: string[]; date?: string; url?: string; image?: string };
export const projects: PortfolioProject[] = [
  { id: "institutions-management-system", title: "Institutions Management System", titleAr: "نظام إدارة المؤسسات", description: "Institutional management platform for family records, benefits, reporting, and role-based workflows.", descriptionAr: "منصة لإدارة المؤسسات والسجلات والمزايا والتقارير ومسارات العمل المعتمدة على الصلاحيات.", category: "Management Systems", tools: ["PHP", "JavaScript"], url: "https://github.com/Ahmed18Lubbad/institutions-management-system" },
  { id: "luchi-cafe", title: "Luchi Cafe", titleAr: "لوچي كافيه", description: "Café operations and customer experience application with frontend and backend source.", descriptionAr: "تطبيق لتشغيل المقهى وتحسين تجربة العملاء، مع الواجهة الأمامية والخلفية.", category: "Web Applications", tools: ["JavaScript", "Web"], url: "https://github.com/Ahmed18Lubbad/luchi-cafe" },
  { id: "smart-fx-studio", title: "Smart FX Studio", titleAr: "استوديو Smart FX", description: "Desktop photo editing studio with image filters, face effects, and a Python GUI.", descriptionAr: "برنامج لتحرير الصور على سطح المكتب، يضم مرشحات وتأثيرات للوجه وواجهة Python.", category: "Desktop Software", tools: ["Python", "Desktop GUI"], url: "https://github.com/Ahmed18Lubbad/smart-fx-studio" },
  { id: "appointment-booking-system", title: "Appointment Booking System", titleAr: "نظام حجز المواعيد", description: "Appointment booking application with source files and frontend assets.", descriptionAr: "تطبيق لحجز المواعيد مع الملفات المصدرية ومواد الواجهة الأمامية.", category: "Web Applications", tools: ["Web", "Booking"], url: "https://github.com/Ahmed18Lubbad/appointment-booking-system" },
  { id: "web-template-collection", title: "Web Template Collection", titleAr: "مجموعة قوالب الويب", description: "Reusable page layouts and interface designs for web projects.", descriptionAr: "تخطيطات صفحات وتصاميم واجهات قابلة لإعادة الاستخدام في مشاريع الويب.", category: "Interface Design", tools: ["HTML", "CSS"], url: "https://github.com/Ahmed18Lubbad/web-template-collection" },
  { id: "caade", title: "Agricultural Cooperative Website", titleAr: "موقع الجمعية التعاونية للتنمية الزراعية والبيئة", description: "Bilingual Arabic/English website for the Gaza Cooperative Society for Agricultural Development and Environment, built as a fast static site with Next.js.", descriptionAr: "موقع ثنائي اللغة (عربي/إنجليزي) للجمعية التعاونية للتنمية الزراعية والبيئة في غزة، مبني كموقع ثابت وسريع باستخدام Next.js.", category: "Web Applications", tools: ["Next.js", "React", "JavaScript"], url: "https://github.com/Ahmed18Lubbad/caade" },
  { id: "design-portfolio-final", title: "Design Portfolio", titleAr: "ملف الأعمال التصميمية", description: "Design portfolio project with interface assets and source materials.", descriptionAr: "مشروع ملف أعمال تصميمي يضم أصول الواجهات والمواد المصدرية.", category: "Interface Design", tools: ["UI Design", "Assets"], url: "https://github.com/Ahmed18Lubbad/design-portfolio-final" },
  { id: "humanitarian-aid-management-system", title: "Humanitarian Aid Management System", titleAr: "نظام إدارة المساعدات الإنسانية", description: "A humanitarian aid management system with PHP workflows, reporting, and database setup utilities.", descriptionAr: "نظام لإدارة المساعدات الإنسانية يضم مسارات عمل بلغة PHP وتقارير وأدوات إعداد قاعدة البيانات.", category: "Management Systems", tools: ["PHP", "Database"] },
  { id: "humanitarian-aid-management-platform", title: "Humanitarian Aid Management Platform", titleAr: "منصة إدارة المساعدات الإنسانية", description: "A PHP platform for coordinating humanitarian aid workflows, with role-based dashboards and reporting.", descriptionAr: "منصة بلغة PHP لتنسيق مسارات المساعدات الإنسانية، مع لوحات تحكم حسب الصلاحيات وتقارير.", category: "Management Systems", tools: ["PHP", "JavaScript"] },
  { id: "company-rental-management-system", title: "Company Rental Management System", titleAr: "نظام إدارة تأجير الشركات", description: "A PHP-based company rental management system with role-specific dashboards and administrative workflows.", descriptionAr: "نظام لإدارة تأجير الشركات بلغة PHP، مع لوحات تحكم لكل دور ومسارات إدارية.", category: "Management Systems", tools: ["PHP"] },
  { id: "employee-management-java", title: "Employee Management System (Java)", titleAr: "نظام إدارة الموظفين (Java)", description: "An object-oriented Java application for managing employees, managers, and administrators.", descriptionAr: "تطبيق Java كائني التوجه لإدارة الموظفين والمديرين والمسؤولين.", category: "Desktop Software", tools: ["Java", "OOP"] },
  { id: "web-design-project-final", title: "Web Design Project", titleAr: "مشروع تصميم مواقع", description: "A complete web design project with styling assets, frontend scripts, and database materials.", descriptionAr: "مشروع تصميم ويب متكامل يضم ملفات التنسيق والسكربتات الأمامية ومواد قاعدة البيانات.", category: "Web Applications", tools: ["PHP", "SCSS", "JavaScript"] },
  { id: "restaurant-menu-design", title: "Restaurant Menu Design", titleAr: "تصميم قائمة مطعم", description: "A modern restaurant menu design project built with a component-based web frontend.", descriptionAr: "مشروع تصميم حديث لقائمة مطعم مبني بواجهة ويب قائمة على المكونات.", category: "Web Applications", tools: ["Next.js", "React", "TypeScript"] },
  { id: "web-project-collection", title: "Web Project Collection", titleAr: "مجموعة مشاريع الويب", description: "A curated collection of web application projects and interface experiments.", descriptionAr: "مجموعة منتقاة من تطبيقات الويب وتجارب الواجهات.", category: "Web Applications", tools: ["HTML", "CSS", "JavaScript"] },
  { id: "student-project-collection", title: "Student Project Collection", titleAr: "مجموعة المشاريع الدراسية", description: "A curated collection of web and software coursework projects and interface templates.", descriptionAr: "مجموعة منتقاة من مشاريع الويب والبرمجيات الدراسية وقوالب الواجهات.", category: "Web Applications", tools: ["HTML", "CSS"] },
  { id: "portfolio-lab-project", title: "Portfolio Lab Project", titleAr: "مشروع مختبر الأعمال", description: "A web development project portfolio featuring a focused implementation and supporting assets.", descriptionAr: "ملف أعمال لمشروع تطوير ويب يضم تنفيذاً مركزاً وأصولاً داعمة.", category: "Web Applications", tools: ["Web"] },
  { id: "software-projects-collection", title: "Software Projects Collection", titleAr: "مجموعة المشاريع البرمجية", description: "A collection of independent software projects covering institutional administration, café operations, and image editing.", descriptionAr: "مجموعة مشاريع برمجية مستقلة تغطي إدارة المؤسسات وتشغيل المقاهي وتحرير الصور.", category: "Desktop Software", tools: ["Python", "PHP", "JavaScript"] },
  { id: "adld-homework", title: "ADLD Homework", titleAr: "واجب ADLD", description: "A responsive HTML and CSS homework project with custom page styling and visual assets.", descriptionAr: "مشروع واجب متجاوب بلغة HTML وCSS مع تنسيق صفحات مخصص وأصول بصرية.", category: "Interface Design", tools: ["HTML", "CSS"] },
];

