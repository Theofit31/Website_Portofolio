import { useState } from "react";
import "./App.css";
const projects = [
  {
    projectId: 1,
    title: "NeuroNote",

    en: {
      type: "AI-Powered Learning Assistant",

      description:
        "An AI-powered learning platform that helps students process learning materials by generating concise summaries and interactive quizzes from uploaded files.",

      problem:
        "Students often need to review large amounts of learning material before exams. Manually reading, summarizing, and preparing practice questions can be time-consuming and make it harder to focus on the most important concepts.",

      solution:
        "NeuroNote provides an AI-assisted learning workflow where users can upload their study materials, generate summaries, and create quizzes to reinforce their understanding of the content.",

      role: "Frontend Developer & Frontend–Backend Integration — Group Project",

      contributions: [
        "Developed the application interface based on designs created in Figma.",
        "Integrated the frontend with backend APIs to connect the user interface with application services.",
        "Integrated file upload and learning material processing services into the application.",
        "Collaborated with team members throughout the development process.",
      ],
    },

    id: {
      type: "Asisten Pembelajaran Berbasis AI",

      description:
        "Platform pembelajaran berbasis AI yang membantu mahasiswa belajar lebih efektif dengan menghasilkan rangkuman dan kuis interaktif dari file yang diunggah.",

      problem:
        "Mahasiswa seringkali perlu mempelajari banyak materi sebelum ujian. Membaca, merangkum, dan mencari soal latihan secara manual dapat memakan waktu sehingga mahasiswa menjadi kurang fokus pada konsep-konsep penting.",

      solution:
        "NeuroNote menyediakan alur pembelajaran berbasis AI yang memungkinkan pengguna mengunggah materi, membuat rangkuman, dan menghasilkan kuis untuk membantu memperkuat pemahaman terhadap materi.",

      role: "Frontend Developer & Integrasi Frontend–Backend — Proyek Kelompok",

      contributions: [
        "Mengembangkan antarmuka aplikasi berdasarkan desain yang dibuat menggunakan Figma.",
        "Mengintegrasikan frontend dengan API backend untuk menghubungkan antarmuka dengan layanan aplikasi.",
        "Mengintegrasikan fitur upload file dan layanan pemrosesan materi pembelajaran ke dalam aplikasi.",
        "Berkolaborasi dengan anggota tim selama proses pengembangan.",
      ],
    },

    technologies: ["Laravel", "Bootstrap", "CSS", "Python"],

    github: "https://github.com/Theofit31/neuronote",

    cover: "/images/projects/neuronote/neuronote.png",

    images: [
      "/images/projects/neuronote/home.png",
      "/images/projects/neuronote/summary.png",
      "/images/projects/neuronote/history.png",
      "/images/projects/neuronote/quiz.png",
      "/images/projects/neuronote/quiz2.png",
    ],
  },

  {
    projectId: 2,
    title: "Car Dealership Finder",

    en: {
      type: "Full-Stack Web Application with AI Sentiment Analysis",

      description:
        "A full-stack web application that helps users find car dealerships by location and evaluate customer reviews using IBM AI Sentiment Analysis.",

      problem:
        "Car buyers need to consider both dealership location and previous customer experiences when deciding where to shop. However, manually reviewing and comparing a large number of customer reviews can be time-consuming.",

      solution:
        "Car Dealership Finder allows users to search for dealerships by location, view dealership information, and submit reviews. IBM AI Sentiment Analysis automatically classifies reviews as positive, neutral, or negative to help users better understand customer feedback.",

      role: "Full-Stack Developer — Individual Project",

      contributions: [
        "Designed and developed the application independently.",
        "Built dealership search and customer review features.",
        "Integrated IBM AI Sentiment Analysis to automatically classify customer reviews.",
        "Implemented frontend and backend functionality using JavaScript, Node.js, Python, HTML, and CSS.",
      ],
    },

    id: {
      type: "Aplikasi Web Full-Stack dengan Analisis Sentimen AI",

      description:
        "Aplikasi web full-stack yang membantu pengguna menemukan dealer mobil berdasarkan lokasi dan memahami ulasan pelanggan menggunakan IBM AI Sentiment Analysis.",

      problem:
        "Pembeli mobil perlu mempertimbangkan lokasi dealer serta pengalaman pelanggan sebelumnya sebelum menentukan tempat untuk membeli mobil. Namun, membaca dan membandingkan banyak ulasan pelanggan secara manual dapat memakan waktu.",

      solution:
        "Car Dealership Finder memungkinkan pengguna mencari dealer berdasarkan lokasi, melihat informasi dealer, dan memberikan ulasan. IBM AI Sentiment Analysis secara otomatis mengklasifikasikan ulasan menjadi sentimen positif, netral, atau negatif sehingga pengguna dapat lebih mudah memahami pengalaman pelanggan sebelumnya.",

      role: "Full-Stack Developer — Proyek Individu",

      contributions: [
        "Merancang dan mengembangkan aplikasi secara mandiri.",
        "Membangun fitur pencarian dealer dan ulasan pelanggan.",
        "Mengintegrasikan IBM AI Sentiment Analysis untuk mengklasifikasikan ulasan pelanggan secara otomatis.",
        "Mengembangkan fungsi frontend dan backend menggunakan JavaScript, Node.js, Python, HTML, dan CSS.",
      ],
    },

    technologies: ["JavaScript", "HTML", "Python (Node.js)", "CSS"],

    github: "https://github.com/Theofit31/car-dealership-finder",

    cover: "/images/projects/car-dealership/car-dealership.png",

    images: [
      "/images/projects/car-dealership/home.png",
      "/images/projects/car-dealership/dealer.png",
      "/images/projects/car-dealership/review.png",
      "/images/projects/car-dealership/write-review.png",
    ],
  },

  {
    projectId: 3,
    title: "Calcurify",

    en: {
      type: "AI/NLP-Based Nutrition Analysis",

      description:
        "A web application that helps users track their calorie needs and analyze food nutrition using natural language, with user authentication and BMR calculation features.",

      problem:
        "Tracking daily calorie needs and food nutrition can be difficult when users have to calculate nutritional information manually. Entering food information in a simple and natural way can make the process more convenient.",

      solution:
        "Calcurify allows users to calculate their daily calorie needs and analyze the nutritional content of food. Users can describe what they ate in natural language, such as 'I ate 200 grams of fried rice', and the system identifies the food and estimates its calories, protein, fat, and carbohydrate content.",

      role: "Frontend Developer & Backend Developer (Authentication and BMR) — Group Project",

      contributions: [
        "Developed the application interface using React and TypeScript.",
        "Implemented user authentication flows, including login and registration.",
        "Developed backend APIs for authentication using Flask and Firebase Authentication.",
        "Implemented BMR calculation based on gender, weight, height, age, and activity level.",
        "Integrated BMR functionality with user data storage using Firebase Firestore.",
        "Connected the frontend with backend APIs to display calculation results and user data.",
        "Collaborated with team members throughout the development process.",
      ],
    },

    id: {
      type: "Analisis Nutrisi Berbasis AI/NLP",

      description:
        "Aplikasi web yang membantu pengguna menghitung kebutuhan kalori dan menganalisis kandungan nutrisi makanan menggunakan bahasa sehari-hari, serta menyediakan fitur autentikasi dan perhitungan BMR.",

      problem:
        "Memantau kebutuhan kalori harian dan kandungan nutrisi makanan dapat menjadi sulit ketika pengguna harus melakukan perhitungan secara manual. Proses pencatatan juga dapat menjadi lebih praktis jika informasi makanan dapat dimasukkan menggunakan bahasa sehari-hari.",

      solution:
        "Calcurify memungkinkan pengguna menghitung kebutuhan kalori harian dan menganalisis kandungan nutrisi makanan. Pengguna dapat mendeskripsikan makanan menggunakan bahasa sehari-hari, seperti 'Saya makan 200 gram nasi goreng', kemudian sistem mengenali makanan tersebut dan memperkirakan jumlah kalori, protein, lemak, serta karbohidrat.",

      role: "Frontend Developer & Backend Developer (Autentikasi dan BMR) — Proyek Kelompok",

      contributions: [
        "Mengembangkan antarmuka aplikasi menggunakan React dan TypeScript.",
        "Mengimplementasikan alur autentikasi pengguna, termasuk login dan registrasi.",
        "Mengembangkan API backend untuk autentikasi menggunakan Flask dan Firebase Authentication.",
        "Mengimplementasikan perhitungan BMR berdasarkan jenis kelamin, berat badan, tinggi badan, usia, dan tingkat aktivitas.",
        "Mengintegrasikan fitur BMR dengan penyimpanan data pengguna menggunakan Firebase Firestore.",
        "Menghubungkan frontend dengan API backend untuk menampilkan hasil perhitungan dan data pengguna.",
        "Berkolaborasi dengan anggota tim selama proses pengembangan.",
      ],
    },

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Flask",
      "Python",
      "Firebase Authentication",
      "Firebase Firestore",
      "NLP",
    ],

    github: "https://github.com/Theofit31/Calcurify",

    cover: "/images/projects/calcurify/calcurify.png",

    images: [
      "/images/projects/calcurify/home.png",
      "/images/projects/calcurify/bmr.png",
      "/images/projects/calcurify/nutrition.png",
      "/images/projects/calcurify/result.png",
    ],
  },

  {
    projectId: 4,
    title: "Bus Travel Time Prediction",

    en: {
      type: "Data Engineering & Machine Learning",

      description:
        "A data engineering and machine learning project that combines GTFS Realtime transportation data with weather data to predict bus travel times across different routes.",

      problem:
        "Bus travel times can vary depending on factors such as route conditions and weather. These variations make it challenging to estimate travel times consistently and accurately.",

      solution:
        "This project develops a data processing pipeline and machine learning model to predict bus travel times. GTFS Realtime transportation data is combined with weather data, processed through ETL and feature engineering, and then used to train a linear regression model.",

      role: "Data Engineer & Machine Learning Developer — Individual Project",

      contributions: [
        "Developed the project independently, covering the workflow from data collection and preprocessing to model evaluation.",
        "Built an ETL pipeline using PySpark to process and transform bus travel data.",
        "Integrated transportation and weather data to provide additional features for the prediction model.",
        "Performed feature engineering and route-based data aggregation to prepare the dataset for modeling.",
        "Trained and evaluated a linear regression model using MAE, RMSE, and R² metrics.",
      ],
    },

    id: {
      type: "Data Engineering & Machine Learning",

      description:
        "Proyek data engineering dan machine learning yang menggabungkan data transportasi GTFS Realtime dengan data cuaca untuk memprediksi waktu tempuh bus pada berbagai rute.",

      problem:
        "Waktu tempuh bus dapat berubah berdasarkan berbagai faktor, seperti kondisi rute dan cuaca. Variasi tersebut membuat waktu tempuh sulit diperkirakan secara konsisten dan akurat.",

      solution:
        "Proyek ini mengembangkan pipeline pemrosesan data dan model machine learning untuk memprediksi waktu tempuh bus. Data transportasi dari GTFS Realtime digabungkan dengan data cuaca, kemudian diproses melalui tahap ETL dan feature engineering sebelum digunakan untuk melatih model linear regression.",

      role: "Data Engineer & Machine Learning Developer — Proyek Individu",

      contributions: [
        "Mengembangkan proyek secara mandiri, mulai dari pengumpulan dan preprocessing data hingga evaluasi model.",
        "Membangun pipeline ETL menggunakan PySpark untuk memproses dan mentransformasi data perjalanan bus.",
        "Mengintegrasikan data transportasi dan data cuaca sebagai fitur tambahan untuk model prediksi.",
        "Melakukan feature engineering dan agregasi data berdasarkan rute untuk mempersiapkan dataset sebelum proses pemodelan.",
        "Melatih dan mengevaluasi model linear regression menggunakan metrik MAE, RMSE, dan R².",
      ],
    },

    technologies: ["Python", "PySpark", "Spark SQL", "Spark MLlib"],

    github: "https://github.com/Theofit31/bus-travel-time-prediction",

    cover: "/images/projects/bus-travel-time/bus-travel.png",

    images: ["/images/projects/bus-travel-time/result.png"],
  },

  {
    projectId: 5,
    title: "Bridge Concrete Damage Detection",

    en: {
      type: "Deep Learning — Multi-Label Classification",

      description:
        "A deep learning project that automatically identifies multiple types of concrete damage in bridge images using multi-label classification, Xception transfer learning, and a Vanilla CNN.",

      problem:
        "Inspecting bridge damage manually can require considerable time and effort. Image-based inspection can also be affected by factors such as camera angle, lighting conditions, and variations in surface texture.",

      solution:
        "This project develops a Convolutional Neural Network (CNN)-based system to automatically classify different types of concrete damage in bridge images. A multi-label classification approach allows a single image to be associated with multiple damage types.",

      role: "Machine Learning / Deep Learning Developer — Individual Project",

      contributions: [
        "Preprocessed the image dataset and prepared it for model training.",
        "Built a multi-label classification pipeline using multi-hot encoding.",
        "Implemented Xception pretrained on ImageNet using transfer learning.",
        "Built a Vanilla CNN and performed hyperparameter tuning using Keras Tuner.",
        "Evaluated model performance using AUC, Precision, Recall, F1-score, ROC curves, and Precision-Recall curves.",
        "Performed threshold optimization to improve classification performance.",
      ],
    },

    id: {
      type: "Deep Learning — Klasifikasi Multi-Label",

      description:
        "Proyek deep learning yang secara otomatis mengidentifikasi berbagai jenis kerusakan beton pada gambar jembatan menggunakan multi-label classification, transfer learning Xception, dan Vanilla CNN.",

      problem:
        "Pemeriksaan kerusakan jembatan secara manual dapat membutuhkan waktu dan usaha yang cukup besar. Pemeriksaan berbasis gambar juga dapat dipengaruhi oleh faktor seperti sudut kamera, kondisi pencahayaan, dan variasi tekstur permukaan.",

      solution:
        "Proyek ini mengembangkan sistem berbasis Convolutional Neural Network (CNN) untuk mengklasifikasikan berbagai jenis kerusakan beton pada gambar jembatan secara otomatis. Pendekatan multi-label classification memungkinkan satu gambar memiliki lebih dari satu jenis kerusakan.",

      role: "Machine Learning / Deep Learning Developer — Proyek Individu",

      contributions: [
        "Melakukan preprocessing pada dataset gambar dan mempersiapkannya untuk proses training model.",
        "Membangun pipeline multi-label classification menggunakan multi-hot encoding.",
        "Mengimplementasikan Xception pretrained pada ImageNet menggunakan transfer learning.",
        "Membangun Vanilla CNN dan melakukan hyperparameter tuning menggunakan Keras Tuner.",
        "Mengevaluasi performa model menggunakan AUC, Precision, Recall, F1-score, ROC curve, dan Precision-Recall curve.",
        "Melakukan threshold optimization untuk meningkatkan performa klasifikasi.",
      ],
    },

    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "Keras Tuner",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Xception",
    ],

    github:
      "https://github.com/Theofit31/Bridge-concrete-damage-detection-using-deep-learning",

    cover: "/images/projects/bridge-damage/bridge-damage.png",

    images: [
      "/images/projects/bridge-damage/dataset.png",
      "/images/projects/bridge-damage/precision-recall-xception.png",
      "/images/projects/bridge-damage/precision-recall-cnn.png",
      "/images/projects/bridge-damage/roc-curve-xception.png",
    ],
  },
];
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },

    hero: {
      greeting: "Hello",
      name: "I'm Theo",
      title: "Full-Stack Developer",
      description:
        "Computer Science and Mathematics student with a strong interest in building web applications, AI-powered systems, and data-driven solutions.",
      projects: "View My Projects",
      resume: "View My Resume",
      portfolio: "View Portfolio PDF",
    },

    about: {
      label: "ABOUT ME",
      title: "Building",
      titleHighlight: "digital solutions",
      titleEnd: "with code.",
      description:
        "I am a Computer Science and Mathematics student at BINUS University with hands-on experience in full-stack web development, backend integration, AI/ML, and data engineering.",

      who: "WHO I AM",
      student: "Computer Science and Mathematics Student",

      paragraph1:
        "I enjoy building web applications and turning ideas into practical digital solutions. My experience includes developing frontend and backend systems, integrating APIs, working with databases, and exploring AI and machine learning projects.",

      paragraph2:
        "I am particularly interested in software development, full-stack development, and using technology to solve real-world problems.",

      technologies: "TECHNOLOGIES",
      techStack: "Tech Stack",
    },

    projects: {
      title: "Projects",
      github: "View on GitHub",
      view: "View Project",
      problem: "Problem",
      solution: "Solution",
      role: "My Role",
      contributions: "Contributions",
      technologies: "Technologies",
      preview: "Project Preview",
    },

    experience: {
      label: "EXPERIENCE",
      title: "Professional Experience",

      position: "Associate Member Programmer",
      company: "Bina Nusantara IT Division",
      date: "Mar 2026 – Mar 2027",

      description:
        "Developed and maintained campus websites by identifying and fixing bugs, maintaining existing systems, and developing new features based on requirements.",

      leadership: "LEADERSHIP & ACTIVITIES",
      organization: "Organization Experience",

      mentor: "Mentor",
      mentorOrg: "BINUS Student Learning Community",
      mentorDate: "2024 – 2025",
      mentorDesc:
        "Provided academic mentoring and helped students better understand challenging course materials through discussions and consultations.",

      secretary: "Secretary & Treasurer",
      secretaryOrg: "Himpunan Mahasiswa Matematika BINUS",
      secretaryDate: "2025",
      secretaryDesc:
        "Managed meeting documentation, financial records, and administrative tasks for the organization's anniversary event.",

      activist: "Activist",
      activistOrg: "BINUS English Club",
      activistDate: "2023 – 2024",
      activistDesc:
        "The storytelling competition staff for the Asian English Olympics, responsible for coordinating and ensuring the smooth execution of the competition.",
    },

    contact: {
      label: "CONTACT",
      title: "Have a project in mind?",
      title2: "Let's talk!",
      description:
        "Have a project, collaboration opportunity, or simply want to connect? Feel free to reach out through the contact form or any of my social platforms.",

      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
    },

    footer: {
      student: "Computer Science and Mathematics Student",
      copyright: "© 2026 Theo Filus Iglesias Triadi. All Rights Reserved.",
      back: "Back to Top",
    },
  },

  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
    },

    hero: {
      greeting: "Halo",
      name: "Saya Theo",
      title: "Full-Stack Developer",
      description:
        "Mahasiswa Computer Science and Mathematics yang memiliki ketertarikan dalam membangun aplikasi web, sistem berbasis AI, dan solusi berbasis data.",
      projects: "Lihat Proyek Saya",
      resume: "Lihat CV Saya",
      portfolio: "Lihat Portfolio PDF",
    },

    about: {
      label: "TENTANG SAYA",
      title: "Membangun",
      titleHighlight: "solusi digital",
      titleEnd: "dengan kode.",
      description:
        "Saya adalah mahasiswa Computer Science and Mathematics di BINUS University dengan pengalaman langsung dalam pengembangan web full-stack, integrasi backend, AI/ML, dan data engineering.",

      who: "SIAPA SAYA",
      student: "Mahasiswa Computer Science and Mathematics",

      paragraph1:
        "Saya senang membangun aplikasi web dan mengubah ide menjadi solusi digital yang praktis. Pengalaman saya mencakup pengembangan sistem frontend dan backend, integrasi API, penggunaan database, serta pengembangan berbagai proyek AI dan machine learning.",

      paragraph2:
        "Saya memiliki ketertarikan khusus pada software development, full-stack development, serta pemanfaatan teknologi untuk menyelesaikan berbagai permasalahan nyata.",

      technologies: "TEKNOLOGI",
      techStack: "Tech Stack",
    },

    projects: {
      title: "Proyek",
      github: "Lihat di GitHub",
      view: "Lihat Proyek",
      problem: "Masalah",
      solution: "Solusi",
      role: "Peran Saya",
      contributions: "Kontribusi",
      technologies: "Teknologi",
      preview: "Pratinjau Proyek",
    },

    experience: {
      label: "PENGALAMAN",
      title: "Pengalaman Profesional",

      position: "Associate Member Programmer",
      company: "Bina Nusantara IT Division",
      date: "Mar 2026 – Mar 2027",

      description:
        "Mengembangkan dan memelihara website kampus dengan mengidentifikasi dan memperbaiki bug, memelihara sistem yang sudah ada, serta mengembangkan fitur baru berdasarkan kebutuhan.",

      leadership: "KEPEMIMPINAN & AKTIVITAS",
      organization: "Pengalaman Organisasi",

      mentor: "Mentor",
      mentorOrg: "BINUS Student Learning Community",
      mentorDate: "2024 – 2025",
      mentorDesc:
        "Memberikan mentoring akademik dan membantu mahasiswa memahami materi perkuliahan yang sulit melalui diskusi dan konsultasi.",

      secretary: "Sekretaris & Bendahara",
      secretaryOrg: "Himpunan Mahasiswa Matematika BINUS",
      secretaryDate: "2025",
      secretaryDesc:
        "Mengelola dokumentasi rapat, pencatatan keuangan, dan tugas administratif untuk acara ulang tahun organisasi.",

      activist: "Aktivis",
      activistOrg: "BINUS English Club",
      activistDate: "2023 – 2024",
      activistDesc:
        "Staf lomba storytelling dalam Asian English Olympic yang bertugas untuk berkoordinasi dan memastikan pelaksanaan lomba berjalan dengan lancar.",
    },

    contact: {
      label: "KONTAK",
      title: "Punya proyek?",
      title2: "Mari berdiskusi!",
      description:
        "Punya proyek, peluang kolaborasi, atau sekadar ingin terhubung? Jangan ragu untuk menghubungi saya melalui form kontak atau salah satu platform sosial saya.",

      name: "Nama",
      email: "Email",
      message: "Pesan",
      submit: "Kirim Pesan",
    },

    footer: {
      student: "Mahasiswa Computer Science and Mathematics",
      copyright: "© 2026 Theo Filus Iglesias Triadi. Hak Cipta Dilindungi.",
      back: "Kembali ke Atas",
    },
  },
};
function App() {
  const [language, setLanguage] = useState<"id" | "en">("id");

  const t = translations[language];

  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);
  const selectedProjectText = selectedProject
    ? selectedProject[language]
    : null;
  const [currentImage, setCurrentImage] = useState(0);

  const openProject = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
    setCurrentImage(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImage(0);
  };

  const previousImage = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1,
    );
  };

  const nextImage = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1,
    );
  };
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="logo">
            THEO FILUS IGLESIAS TRIADI
          </a>

          <div className="nav-links">
            <a href="#home">{t.nav.home}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#experience">{t.nav.experience}</a>
            <a href="#contact">{t.nav.contact}</a>

            <div className="language-switcher">
              <button
                type="button"
                className={language === "id" ? "active" : ""}
                onClick={() => setLanguage("id")}
              >
                ID
              </button>

              <span>/</span>

              <button
                type="button"
                className={language === "en" ? "active" : ""}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-container">
          {/* LEFT SIDE */}
          <div className="hero-content">
            <p className="hero-greeting">
              {t.hero.greeting}
              <span>.</span>
            </p>

            <h1>{t.hero.name}</h1>

            <h2>{t.hero.title}</h2>

            <p className="hero-description">{t.hero.description}</p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                {t.hero.projects}
              </a>

              <a
                href="https://binusianorg-my.sharepoint.com/personal/theo_triadi_binus_ac_id/_layouts/15/guestaccess.aspx?share=IQCR64NjrvFPTJqGdnrnmQQEAbxArlA0xvjMaAKPiC9EtlA&e=3VXu6I"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {t.hero.resume}
              </a>
              <a
                href="https://binusianorg-my.sharepoint.com/personal/theo_triadi_binus_ac_id/_layouts/15/guestaccess.aspx?share=IQAqRzKKMkgJQb_jpeUOPtGYASd0tp2QTO59HwMQiN-irJ8&e=SIDcQ9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {t.hero.portfolio}
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hero-profile">
            {/* ICON < DI ATAS KIRI FOTO */}
            <div className="profile-code-icon profile-code-left"></div>

            <div className="profile-glow"></div>

            <div className="profile-circle">
              <img src="/images/Foto.png" alt="Theo Filus Iglesias Triadi" />
            </div>

            {/* ICON > DI BAWAH KANAN FOTO */}
            <div className="profile-code-icon profile-code-right"></div>
          </div>
        </div>
      </section>

      {/* TECH STACK BAR */}
      <section className="tech-stack">
        <div className="tech-track">
          <div className="tech-container">
            <span>C#</span>
            <span>ASP.NET Core</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Node.js</span>
            <span>PHP</span>
            <span>Laravel</span>
            <span>SQL</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>Git</span>
            <span>Azure DevOps</span>
          </div>

          {/* Duplicate untuk infinite scrolling */}
          <div className="tech-container" aria-hidden="true">
            <span>C#</span>
            <span>ASP.NET Core</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Node.js</span>
            <span>PHP</span>
            <span>Laravel</span>
            <span>SQL</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>Git</span>
            <span>Azure DevOps</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="section-header">
          <p className="section-label">{t.about.label}</p>

          <h2>
            {t.about.title} <span>{t.about.titleHighlight}</span>{" "}
            {t.about.titleEnd}
          </h2>

          <p className="section-description">{t.about.description}</p>
        </div>

        {/* ABOUT CONTENT */}
        <div className="about-content">
          {/* INTRODUCTION */}
          <div className="about-card about-introduction">
            <p className="about-label">{t.about.who}</p>

            <h3>{t.about.student}</h3>

            <p>{t.about.paragraph1}</p>

            <p>{t.about.paragraph2}</p>
          </div>

          {/* TECH STACK */}
          <div className="about-card">
            <p className="about-label">{t.about.technologies}</p>

            <h3>{t.about.techStack}</h3>

            <div className="tech-grid">
              <div className="tech-item">
                <img src="images/tech/csharp.svg" alt="C#" />
                <span>C#</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/dotnetcore.svg" alt=".NET" />
                <span>ASP.NET</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/python.svg" alt="Python" />
                <span>Python</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/laravel.svg" alt="Laravel" />
                <span>Laravel</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/nodejs.svg" alt="Node.js" />
                <span>Node.js</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/typescript.svg" alt="TypeScript" />
                <span>TypeScript</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/javascript.svg" alt="JavaScript" />
                <span>JavaScript</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/react.svg" alt="React" />
                <span>React</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/html5.svg" alt="HTML" />
                <span>HTML</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/css3.svg" alt="CSS" />
                <span>CSS</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/mysql.svg" alt="SQL" />
                <span>SQL</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/mongodb.svg" alt="NoSQL" />
                <span>NoSQL</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/apachespark.svg" alt="Apache Spark" />
                <span>PySpark</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/scala.svg" alt="Scala" />
                <span>Scala</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/git.svg" alt="Git" />
                <span>Git</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/azure.svg" alt="Azure" />
                <span>Azure</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/docker.svg" alt="docker" />
                <span>Docker</span>
              </div>

              <div className="tech-item">
                <img src="images/tech/kubernetes.svg" alt="kubernetes" />
                <span>Kubernetes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <div className="projects-header">
          <h2>{t.projects.title}</h2>

          <div className="projects-decoration">
            <span></span>
            <i></i>
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => {
            const projectText = project[language];

            return (
              <article
                key={project.projectId}
                className={`project-row ${
                  index % 2 === 1 ? "project-row-reverse" : ""
                }`}
              >
                {/* PROJECT CONTENT */}
                <div className="project-info">
                  <p className="project-number">
                    {String(project.projectId).padStart(2, "0")}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="project-type">{projectText.type}</p>

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <p className="project-description">
                    {projectText.description}
                  </p>

                  <div className="project-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github"
                    >
                      {t.projects.github}
                    </a>

                    <button
                      type="button"
                      className="project-view"
                      onClick={() => openProject(project)}
                    >
                      {t.projects.view}
                      <span>↗</span>
                    </button>
                  </div>
                </div>

                {/* PROJECT IMAGE */}
                <button
                  type="button"
                  className="project-preview"
                  onClick={() => openProject(project)}
                  aria-label={`View ${project.title} screenshots`}
                >
                  <div className="project-image-frame">
                    <img
                      src={project.cover || project.images[0]}
                      alt={`${project.title} preview`}
                    />
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </section>
      {/* EXPERIENCE */}
      <section id="experience" className="experience-section">
        <div className="experience-heading">
          <p className="about-label">{t.experience.label}</p>

          <h3>{t.experience.title}</h3>
        </div>

        <div className="experience-card">
          <div className="experience-top">
            <div>
              <h4>{t.experience.position}</h4>

              <p className="experience-company">{t.experience.company}</p>
            </div>

            <span>{t.experience.date}</span>
          </div>

          <p className="experience-description">{t.experience.description}</p>

          <div className="experience-tags">
            <span>C#</span>
            <span>ASP.NET</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS</span>
            <span>SQL</span>
            <span>NoSQL</span>
          </div>
        </div>

        {/* ORGANIZATION */}
        <div className="experience-heading organization-heading">
          <p className="about-label">{t.experience.leadership}</p>

          <h3>{t.experience.organization}</h3>
        </div>

        <div className="organization-grid">
          <div className="organization-card">
            <div>
              <h4>{t.experience.mentor}</h4>

              <p>{t.experience.mentorOrg}</p>
            </div>

            <span>{t.experience.mentorDate}</span>

            <p>{t.experience.mentorDesc}</p>
          </div>

          <div className="organization-card">
            <div>
              <h4>{t.experience.secretary}</h4>

              <p>{t.experience.secretaryOrg}</p>
            </div>

            <span>{t.experience.secretaryDate}</span>

            <p>{t.experience.secretaryDesc}</p>
          </div>

          <div className="organization-card">
            <div>
              <h4>{t.experience.activist}</h4>

              <p>{t.experience.activistOrg}</p>
            </div>

            <span>{t.experience.activistDate}</span>

            <p>{t.experience.activistDesc}</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* LEFT */}
          <div className="contact-intro">
            <div className="contact-heading">
              <span></span>
              <p>{t.contact.label}</p>
            </div>

            <h2>
              {t.contact.title}
              <br />
              <strong>{t.contact.title2}</strong>
            </h2>

            <p className="contact-description">{t.contact.description}</p>
          </div>

          {/* RIGHT */}
          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();

              const form = event.currentTarget;
              const name = (form.elements.namedItem("name") as HTMLInputElement)
                .value;

              const email = (
                form.elements.namedItem("email") as HTMLInputElement
              ).value;

              const message = (
                form.elements.namedItem("message") as HTMLTextAreaElement
              ).value;

              const subject = encodeURIComponent(`Portfolio Contact - ${name}`);

              const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\n${message}`,
              );

              window.location.href = `mailto:theo.triadi@binus.ac.id?subject=${subject}&body=${body}`;
            }}
          >
            <div className="contact-field">
              <label htmlFor="name">{t.contact.name}</label>

              <input type="text" id="name" name="name" required />
            </div>

            <div className="contact-field">
              <label htmlFor="email">{t.contact.email}</label>

              <input type="email" id="email" name="email" required />
            </div>

            <div className="contact-field contact-message">
              <label htmlFor="message">{t.contact.message}</label>

              <textarea id="message" name="message" rows={4} required />
            </div>

            <button type="submit" className="contact-submit">
              {t.contact.submit}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <h3>THEO</h3>

          <p>{t.footer.student}</p>

          <div className="footer-socials">
            {/* GitHub */}
            <a
              href="https://github.com/Theofit31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49
            0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.38-3.37-1.38-.45-1.2-1.11-1.52-1.11-1.52
            -.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85
            .09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75
            -.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.13 9.13 0 0 1 12 6.8c.85 0
            1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72
            1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9
            0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26
            C22 6.58 17.52 2 12 2Z"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/theo-filus-iglesias-triadi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1
            2.05 2.05 0 0 0 4.75 3ZM21 13.86c0-3.76-2-5.51-4.67-5.51
            -2.15 0-3.11 1.18-3.65 2.01V8.5H9.18V21h3.5v-6.19c0-1.63.31-3.2
            2.33-3.2 1.99 0 2.02 1.86 2.02 3.31V21H21v-7.14Z"
                />
              </svg>
            </a>

            {/* Email */}
            <a href="mailto:theo.triadi@binus.ac.id" aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3
            a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.5l9 5.5
            9-5.5V7l-9 5.5L3 7Zm18 10V9.84l-8.48 5.18a1 1 0 0 1-1.04 0L3 9.84V17h18Z"
                />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6281255964267"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12.04 2A9.93 9.93 0 0 0 3.2 16.45L2 22l5.69-1.18
            A9.95 9.95 0 1 0 12.04 2Zm0 18.15a8.16 8.16 0 0 1-4.16-1.14
            l-.3-.18-3.38.7.72-3.29-.2-.34a8.15 8.15 0 1 1 7.32 4.25Zm4.47-6.1
            c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94
            -.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65
            -.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3
            -.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.43h-.46c-.16 0-.42.06-.64.3
            -.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25
            1.01.4 1.35.51.57.18 1.09.15 1.5.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14
            -.06-.1-.22-.16-.46-.28Z"
                />
              </svg>
            </a>
          </div>

          <div className="footer-bottom">
            <span>{t.footer.copyright}</span>

            <div className="footer-links">
              <a href="#home"> {t.footer.back}</a>
            </div>
          </div>
        </div>
      </footer>
      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="project-modal" onClick={closeProject}>
          <div
            className="project-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              type="button"
              className="modal-close"
              onClick={closeProject}
              aria-label="Close project gallery"
            >
              ×
            </button>

            {/* TITLE */}
            <div className="modal-header">
              <p className="modal-number">
                {String(selectedProject.projectId).padStart(2, "0")}
              </p>

              <h3>{selectedProject.title}</h3>

              <p>{selectedProjectText?.type}</p>
            </div>

            <div className="modal-details">
              {/* PROBLEM */}
              <div className="modal-detail-section">
                <h4>{t.projects.problem}</h4>
                <p>{selectedProjectText?.problem}</p>
              </div>

              {/* SOLUTION */}
              <div className="modal-detail-section">
                <h4>{t.projects.solution}</h4>
                <p>{selectedProjectText?.solution}</p>
              </div>

              {/* ROLE */}
              <div className="modal-detail-section">
                <h4>{t.projects.role}</h4>
                <p>{selectedProjectText?.role}</p>
              </div>

              {/* CONTRIBUTIONS */}
              <div className="modal-detail-section">
                <h4>{t.projects.contributions}</h4>

                <ul>
                  {selectedProjectText?.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              </div>

              {/* TECHNOLOGIES */}
              <div className="modal-detail-section">
                <h4>{t.projects.technologies}</h4>

                <div className="modal-tags">
                  {selectedProject.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="modal-gallery">
              <h4>{t.projects.preview}</h4>

              <div className="modal-image-container">
                <button
                  type="button"
                  className="gallery-arrow gallery-arrow-left"
                  onClick={previousImage}
                >
                  ←
                </button>

                <img
                  src={selectedProject.images[currentImage]}
                  alt={`${selectedProject.title} screenshot`}
                  className="modal-image"
                />

                <button
                  type="button"
                  className="gallery-arrow gallery-arrow-right"
                  onClick={nextImage}
                >
                  →
                </button>
              </div>

              <div className="gallery-counter">
                {currentImage + 1} / {selectedProject.images.length}
              </div>

              <div className="gallery-thumbnails">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    className={`gallery-thumbnail ${
                      index === currentImage ? "gallery-thumbnail-active" : ""
                    }`}
                    onClick={() => setCurrentImage(index)}
                  >
                    <img src={image} alt={`Screenshot ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
