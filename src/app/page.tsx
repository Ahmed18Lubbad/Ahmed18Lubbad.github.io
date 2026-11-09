"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { MotionConfig, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Globe2, Menu as MenuIcon, Moon, Plus, Sun, X } from "lucide-react";
import { certifications, education, experience, profile, projectCategories, projects, skillGroups } from "@/data/profile";
import { copy } from "@/data/translations";
import { updatePortfolioPreference, usePortfolioPreferences } from "@/lib/preferences";

type Language = "en" | "ar";
const cvSelectionKeys = ["profile", ...experience.map((_, i) => `experience-${i}`), ...education.map((_, i) => `education-${i}`), ...certifications.map((_, i) => `certification-${i}`), ...skillGroups.map((group) => `skill-${group.id}`)];

function SectionTitle({ number, title, description }: { number: string; title: string; description?: string }) {
  return <div className="section-heading"><span className="section-number">{number}</span><div><h2>{title}</h2>{description && <p>{description}</p>}</div></div>;
}

export default function Home() {
  const { language: lang, dark } = usePortfolioPreferences();
  const [menu, setMenu] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [category, setCategory] = useState<string>("All");
  const [included, setIncluded] = useState<string[]>(cvSelectionKeys);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const t = copy[lang];
  const cvSelectionGroups = [
    { title: t.profileLabel, items: [{ id: "profile", label: t.profileLabel }] },
    { title: t.experienceLabel, items: experience.map((item, index) => ({ id: `experience-${index}`, label: `${lang === "en" ? item.organization : item.organizationAr} · ${lang === "en" ? item.position : item.positionAr}` })) },
    { title: t.educationLabel, items: education.map((item, index) => ({ id: `education-${index}`, label: lang === "en" ? item.name : item.nameAr })) },
    { title: t.certificationLabel, items: certifications.map((item, index) => ({ id: `certification-${index}`, label: lang === "en" ? item.name : item.nameAr })) },
    { title: t.skillsLabel, items: skillGroups.map((group) => ({ id: `skill-${group.id}`, label: lang === "en" ? group.title : group.titleAr })) },
  ];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.dataset.theme = dark ? "dark" : "light";
  }, [lang, dark]);

  const filteredProjects = useMemo(() => category === "All" ? projects : projects.filter((project) => project.category === category), [category]);

  function openPrint() {
    document.body.classList.add("printing-cv");
    window.setTimeout(() => window.print(), 100);
  }

  useEffect(() => {
    const afterPrint = () => document.body.classList.remove("printing-cv");
    window.addEventListener("afterprint", afterPrint);
    return () => window.removeEventListener("afterprint", afterPrint);
  }, []);

  useEffect(() => {
    if (!cvOpen) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setCvOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [cvOpen]);

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  const toggleIncluded = (id: string) => setIncluded((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);

  return <MotionConfig reducedMotion="user"><>
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Ahmed Lubbad home"><span className="mark">AL</span><span>AHMED <b>LUBBAD</b></span></a>
        <nav className={`main-nav ${menu ? "is-open" : ""}`} aria-label={lang === "en" ? "Main navigation" : "التنقل الرئيسي"}>
          {t.nav.map((label, i) => <a key={label} href={`#${["home", "about", "experience", "skills", "projects", "education", "contact"][i]}`} onClick={() => setMenu(false)}>{label}</a>)}
        </nav>
        <div className="toolbar">
          <button className="tool-button language-button" onClick={() => updatePortfolioPreference("language", lang === "en" ? "ar" : "en")} aria-label={t.language}><Globe2 size={14} />{lang === "en" ? "عربي" : "EN"}</button>
          <button className="tool-button theme-button" onClick={() => updatePortfolioPreference("dark", !dark)} aria-label={t.theme}>{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
          <button className="tool-button menu-button" onClick={() => setMenu(!menu)} aria-label={t.menu} aria-expanded={menu}>{menu ? <X size={17} /> : <MenuIcon size={17} />}</button>
        </div>
      </header>

      <main>
        <section className="hero container" id="home">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease: "easeOut" }}>
            <div className="eyebrow"><span className="live-dot" />{t.eyebrow}</div>
            <div className="hero-kicker">{t.roleKicker}</div>
            <h1>{lang === "en" ? <>Ahmed Mahmoud<br /><span>Mohammad Lubbad</span></> : <>{profile.arabicName}</>}</h1>
            <p className="hero-title">{lang === "en" ? "Project Coordinator · MEAL Specialist · Cyber Security Specialist · Community Facilitator · Software Developer" : "منسق مشاريع · اختصاصي MEAL · اختصاصي أمن سيبراني · ميسّر مجتمعي · مطور برمجيات"}</p>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">{t.explore}<ArrowUpRight size={15} /></a><button className="button button-secondary" onClick={() => setCvOpen(true)}>{t.cv}<Plus size={15} /></button><a className="button button-quiet" href="#contact">{t.contact}<ArrowDown size={14} /></a></div>
            <div className="availability"><span className="status-ring" />{t.availability}</div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }}>
            <Image src="/ahmed-lubbad.png" alt={lang === "en" ? "Ahmed Lubbad" : "أحمد لبد"} fill priority unoptimized sizes="(max-width: 760px) 100vw, 475px" className="portrait-image" />
            <div className="visual-grid" /><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="visual-label label-top">GAZA, PALESTINE <i>·</i> 31.5°N</div><div className="visual-label label-bottom">PEOPLE <i>×</i> DATA <i>×</i> SAFETY</div>
          </motion.div>
          <div className="hero-bottom"><span>01 / 05</span><span>SCROLL TO EXPLORE <b>↓</b></span></div>
        </section>

        <section className="intro-band container" id="about">
          <SectionTitle number="01" title={t.about} />
          <div className="intro-content"><p>{t.aboutText}</p><div className="stats">{t.stats.map((label, i) => <div className="stat" key={label}><strong>{t.statValues[i]}</strong><span>{label}</span></div>)}</div></div>
        </section>

        <section className="section container" id="experience">
          <SectionTitle number="02" title={t.experience} description={t.experienceSub} />
          <div className="timeline"><div className="timeline-rail"><span /></div>{experience.map((item) => <article className="experience-card" key={item.organization}>
            <div className="experience-date">{lang === "en" ? item.dates : item.datesAr}</div>
            <div className="experience-info"><span className="card-eyebrow">{lang === "en" ? item.department : item.departmentAr}</span><h3>{lang === "en" ? item.organization : item.organizationAr}</h3><div className="position">{lang === "en" ? item.position : item.positionAr}</div><h4>{t.responsibilities}</h4><ul>{(lang === "en" ? item.responsibilities : item.responsibilitiesAr).map((task) => <li key={task}>{task}</li>)}</ul></div>
          </article>)}</div>
        </section>

        <section className="section skills-section" id="skills"><div className="container"><SectionTitle number="03" title={t.skills} description={t.skillsSub} />
          <div className="skill-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.id}><div className="skill-card-head"><span className="skill-index">0{index + 1}</span><span className="skill-symbol">{["◫", "⌁", "◈", "◎", "⌘"][index]}</span></div><h3>{lang === "en" ? group.title : group.titleAr}</h3><div className="skill-tags">{(lang === "en" ? group.skills : group.skillsAr).map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
        </div></section>

        <section className="section container" id="projects"><SectionTitle number="04" title={t.projects} description={t.projectsSub} />
          <div className="filters" role="group" aria-label={lang === "en" ? "Filter projects" : "تصفية المشاريع"}>{projectCategories.map((value) => <button key={value} className={category === value ? "filter active" : "filter"} onClick={() => setCategory(value)}>{lang === "en" ? value : ({ "All": t.all, "Management Systems": "أنظمة الإدارة", "Web Applications": "تطبيقات الويب", "Desktop Software": "برامج سطح المكتب", "Interface Design": "تصميم الواجهات" } as Record<string, string>)[value]}</button>)}</div>
          <div className="project-grid">{filteredProjects.map((project) => <article className="project-card" key={project.id}><div className="project-art" style={project.image ? { backgroundImage: `linear-gradient(#0b102055,#0b102055),url("${project.image}")`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}><span>PROJECT / 0{projects.indexOf(project) + 1}</span><div className="project-orb" /><span className="project-category">{lang === "en" ? project.category : ({ "Management Systems": "أنظمة الإدارة", "Web Applications": "تطبيقات الويب", "Desktop Software": "برامج سطح المكتب", "Interface Design": "تصميم الواجهات" } as Record<string, string>)[project.category]}</span></div><div className="project-body"><div className="project-placeholder">{t.repoLabel}</div><h3>{lang === "en" ? project.title : project.titleAr}</h3><p>{lang === "en" ? project.description : project.descriptionAr}</p>{project.date && <time className="project-date">{project.date}</time>}<div className="skill-tags">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>{project.url && <a className="project-external" href={project.url} target="_blank" rel="noreferrer">{lang === "en" ? "View repository" : "عرض المستودع"} <ArrowUpRight size={12} /></a>}</div></article>)}</div>
        </section>

        <section className="section education-section" id="education"><div className="container"><SectionTitle number="05" title={t.education} description={t.educationSub} /><div className="education-grid">
          {education.map((item) => <article className="education-card" key={item.name}><div className="education-icon">✳</div><span className="card-eyebrow">{lang === "en" ? "EDUCATION" : "التعليم"}</span><h3>{lang === "en" ? item.name : item.nameAr}</h3><p>{lang === "en" ? item.detail : item.detailAr}</p></article>)}
          {certifications.map((item) => <article className="education-card certificate" key={item.name}><div className="education-icon">⌘</div><span className="card-eyebrow">{lang === "en" ? "PROFESSIONAL TRAINING" : "تدريب مهني"}</span><h3>{lang === "en" ? item.name : item.nameAr}</h3><p>{lang === "en" ? item.detail : item.detailAr}</p></article>)}
        </div></div></section>

        <section className="contact-section container" id="contact"><div className="contact-intro"><span className="section-number">06 / {lang === "en" ? "CONTACT" : "تواصل"}</span><h2>{t.contactTitle}</h2><p>{t.contactSub}</p><div className="contact-details"><a href={`mailto:${profile.email}`}><span>{t.email}</span><b>{profile.email}</b><i>↗</i></a><a href={`tel:${profile.phone.replaceAll(" ", "")}`}><span>{t.phone}</span><b dir="ltr">{profile.phone}</b><i>↗</i></a><div><span>{t.location}</span><b>{lang === "en" ? profile.location : "غزة، فلسطين"}</b><i>⌖</i></div></div><div className="social-placeholders">{profile.linkedin ? <a href={profile.linkedin}>LinkedIn ↗</a> : <span>LinkedIn · {t.noSocial}</span>}{profile.github ? <a href={profile.github}>GitHub ↗</a> : <span>GitHub · {t.noSocial}</span>}</div></div>
          <form className="contact-form" onSubmit={handleContact}><label htmlFor="contact-subject">{t.subject}<input id="contact-subject" name="subject" required minLength={3} value={subject} onChange={(e) => setSubject(e.target.value)} placeholder={t.subjectPlaceholder} /></label><label htmlFor="contact-message">{t.message}<textarea id="contact-message" name="message" required minLength={10} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t.messagePlaceholder} rows={5} /></label><button className="button button-primary" type="submit">{t.sendButton}<span>↗</span></button><small>{t.formNote}</small></form>
        </section>
      </main>
      <footer className="footer container"><a className="wordmark" href="#home"><span className="mark">AL</span><span>AHMED <b>LUBBAD</b></span></a><div className="footer-links"><a href="#about">{t.about}</a><a href="#experience">{t.experience}</a><a href="#contact">{t.contact}</a><a href={`mailto:${profile.email}`}>{profile.email}</a></div><span>© {new Date().getFullYear()} Ahmed Lubbad</span></footer>
    </div>

    {cvOpen && <div className="cv-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setCvOpen(false); }}><div className="cv-dialog" role="dialog" aria-modal="true" aria-labelledby="cv-heading"><div className="cv-header"><div><span className="card-eyebrow">PERSONALIZED DOCUMENT</span><h2 id="cv-heading">{t.cvTitle}</h2><p>{t.cvHelp}</p></div><button className="close-button" onClick={() => setCvOpen(false)} aria-label={t.close}>×</button></div><div className="cv-layout"><aside className="cv-controls"><h3>{t.include}</h3><button className="select-all" onClick={() => setIncluded([...cvSelectionKeys])}>{t.selectAll} ↗</button>{cvSelectionGroups.map((group) => <div className="cv-option-group" key={group.title}><h4>{group.title}</h4>{group.items.map((item) => <label className="check-row" key={item.id}><input type="checkbox" checked={included.includes(item.id)} onChange={() => toggleIncluded(item.id)} /><span>{item.label}</span></label>)}</div>)}<label className="cv-language">{t.languages}<select value={lang} onChange={(event) => updatePortfolioPreference("language", event.target.value as Language)}><option value="en">English</option><option value="ar">العربية</option></select></label><button className="button button-primary print-button" onClick={openPrint}>{t.print}<span>↓</span></button></aside>
          <div className={`cv-preview ${lang === "ar" ? "rtl" : ""}`}><div className="preview-label">{t.preview}</div><CVDocument lang={lang} included={included} /></div></div></div></div>}
    <div className="print-cv"><CVDocument lang={lang} included={included} /></div>
  </></MotionConfig>;
}

function CVDocument({ lang, included }: { lang: Language; included: string[] }) {
  const ar = lang === "ar";
  const selectedExperience = experience.filter((_, index) => included.includes(`experience-${index}`));
  const selectedEducation = education.filter((_, index) => included.includes(`education-${index}`));
  const selectedCertifications = certifications.filter((_, index) => included.includes(`certification-${index}`));
  const selectedSkillGroups = skillGroups.filter((group) => included.includes(`skill-${group.id}`));
  return <article className="cv-document" dir={ar ? "rtl" : "ltr"}>
    <header className="cv-doc-head"><h1>{ar ? profile.arabicName : profile.name}</h1><p>{ar ? "منسق مشاريع | اختصاصي MEAL | اختصاصي أمن سيبراني | ميسّر مجتمعي | مطور برمجيات" : profile.title}</p><div>{profile.email} · {profile.phone} · {ar ? "غزة، فلسطين" : profile.location}</div></header>
    {included.includes("profile") && <section><h2>{ar ? "الملف المهني" : "Professional Profile"}</h2><p>{ar ? copy.ar.aboutText : copy.en.aboutText}</p></section>}
    {selectedExperience.length > 0 && <section><h2>{ar ? "الخبرة" : "Experience"}</h2>{selectedExperience.map((item) => <div className="cv-entry" key={item.organization}><strong>{ar ? item.organizationAr : item.organization}</strong><span>{ar ? item.positionAr : item.position} · {ar ? item.datesAr : item.dates}</span><p>{ar ? item.departmentAr : item.department}</p><ul>{(ar ? item.responsibilitiesAr : item.responsibilities).map((task) => <li key={task}>{task}</li>)}</ul></div>)}</section>}
    {selectedEducation.length > 0 && <section><h2>{ar ? "التعليم" : "Education"}</h2>{selectedEducation.map((item) => <div className="cv-entry" key={item.name}><strong>{ar ? item.nameAr : item.name}</strong><p>{ar ? item.detailAr : item.detail}</p></div>)}</section>}
    {selectedCertifications.length > 0 && <section><h2>{ar ? "التدريب والشهادات" : "Training & Certification"}</h2>{selectedCertifications.map((item) => <div className="cv-entry" key={item.name}><strong>{ar ? item.nameAr : item.name}</strong><p>{ar ? item.detailAr : item.detail}</p></div>)}</section>}
    {selectedSkillGroups.length > 0 && <section><h2>{ar ? "المهارات" : "Skills"}</h2>{selectedSkillGroups.map((group) => <p className="cv-skill" key={group.id}><strong>{ar ? group.titleAr : group.title}: </strong>{(ar ? group.skillsAr : group.skills).join(" · ")}</p>)}</section>}
  </article>;
}
