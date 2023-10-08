const COURSES = [
  {
    id: 1,
    name: "Basic quran tajweed",
    price: "50",
    image: "/images/courses-images/1.jpg",
    description: "",
    timing: "30 Minutes",
    classType: "One to one class",
    test: "Conduct test after 30 days",
  },
  {
    id: 2,
    name: "Basic nazara with tajweed",
    price: "50",
    image: "/images/courses-images/2.jpg",
    description:
      "The Basic Nazara Course with Tajweed is an excellent starting point for those who are new to reading the Quran and want to learn how to read it with proper Tajweed rules. It covers a comprehensive syllabus that includes important Islamic practices and teachings such as MadniQaida/Noorani Qaida/Asan Qaida /Ahsan_ul_Quran with Tajweed, Nazra Quran with Tajweed, 6 Kalmas, Namaz and Tareeqa Namaz, Duas, Ayat_ul_Kursi, Dua_e_Qanoot, Iman_e_Mufassal, Iman_e_Mujmal, Namaz Janaza, Asma-ul-Husna, Wazu ka Tareeqa, Chusal ka Treeqa, Para 30 full Hifz and (Surat-e-Kahaf, Surat-e-Yaseen, Surat-e- Rehman, Surat-e-Mulk Full Hifz). Basic Islamic Book for children. and more, making it an ideal course for beginners.",
    timing: "30 Minutes",
    classType: "One to one class",
    test: "Conduct test after 30 days",
  },
  {
    id: 3,
    name: "Quran memorization",
    price: "85",
    image: "/images/courses-images/3.jpg",

    description:
      "The Quran Memorization course offered by AQ Online Quran Academy is designed for students who are dedicated to memorizing the Quran and provides them with effective techniques and strategies to help them memorize the Quran. The course also focuses on memorizing selected Surahs to strengthen the student's Quranic knowledge and help them build a strong connection with the Quran",
    timing: "45 Minutes",
    classType: "One to one class",
    test: "Conduct test after 30 days",
  },
  {
    id: 4,
    name: "Quran translation with tafseer",
    price: "65",
    image: "/images/courses-images/4.jpg",

    description:
      "The Quran Translation with Tafseer course offered by AQ Online Quran Academy is an excellent opportunity for students who wish to deepen their understanding of the Quran's meaning. The course combines the study of Quranic Arabic with translation and Tafseer in Urdu language. making it accessible to students who are proficient in Urdu. With experienced teachers and a comprehensive syllabus, this course provides a holistic approach to Quranic learning, emphasizing both linguistic aspects of the Quran.",
    timing: "45 Minutes",
    classType: "One to one class",
    test: "Conduct test after 30 days",
  },
  {
    id: 5,
    name: "Basic fiqah course",
    price: "65",
    image: "/images/courses-images/5.jpg",

    description:
      "AQ online Quran Academy is affording Islamic fiqah Course. The Islamic fiqah course covers detailed rulings on the pillars of Islam, such as Salat (Namaz), Zakat, Fast (Roza), and Hajj. Students will also learn practical solutions for daily domestic issues, such as the Sunnah of Nikkah, Halal and Haram meat, Umrah, and Warasat. The course offers an opportunity to gain a deep understanding of Islamic law and apply it in everyday life. Understanding Islamic jurisprudence can help you connect with like-minded individuals and deepen your faith. The course can also lead to career opportunities in fields such as Islamic law, education, and social work.",
    timing: "60 Minutes",
    classType: "One to one class",
    test: "Conduct test after 30 days",
  },
  {
    id: 6,
    name: "Basic islamic history",
    price: "65",
    image: "/images/courses-images/6.jpg",

    description:
      "We offers a Tareekh_e_Islam course, providing students with a comprehensive understanding of the history of Islam and the Prophets (PBUH). The courses cover a range of topics, including the life and teachings of the Prophets (PBUH), the development of Islamic civilization, and the contributions of Muslim scholars throughout history.",
    timing: "45 Minutes",
    classType: "One to one class",
    test: "Conduct test after 30 days",
  },
  {
    id: 7,
    name: "Basic arabic language",
    price: "65",
    image: "/images/courses-images/7.jpg",

    description:
      "We offer Arabic Language course for students who are interested in learning or improving their proficiency in the Arabic language. Arabic is a critical language for Muslims, as it is the language of the Quran and many Islamic texts. The Arabic Language Course may cover topics such as vocabulary, grammar, pronunciation, and writing. The course may be tailored to meet the needs of students of all levels, from beginners to advanced learners.",
    timing: "45 Minutes",
    classType: "One to one class",
    test: "Conduct test after 30 days",
  },
  {
    id: 8,
    name: "Darse nazami",
    price: "65",
    image: "/images/courses-images/8.jpg",

    description:
      "We offer the traditional Islamic curriculum and includes subjects such as Arabic language, Quran, Hadith, Figah, and Islamic history. The short course is four years, while the full course is eight years.",
    timing: "60 Minutes",
    classType: "One to one class",
    test: "Conduct test after 30 days",
  },
  {
    id: 9,
    name: "Seerat-e-mustafa",
    price: "65",
    image: "/images/courses-images/9.jpg",

    description:
      "Seerat-e-Mustafa is a course(Qadam Baa Qadam) that delves into the life and teachings of the Prophet Muhammad, peace be upon him. The course covers a range of topics related to the Prophet's biography, his teachings, and his character. The study of Seerat-e-Mustafa is essential for every Muslim, as it helps to deepen their understanding and appreciation of the Prophet Muhammad's life and legacy. Through this course, students can gain a better understanding of the Prophet's early life, his prophethood, and his struggles in spreading Islam.Overall, Seerat-e-Mustafa is a course that is both informative and inspirational. It helps Muslims to understand the Prophet's life and teachings more deeply and to apply them in their daily lives.",
    timing: "30 Minutes",
    classType: "One to one class",
    test: "Conduct test after 30 days",
  },
  {
    id: 10,
    name: "Basic hadith",
    price: "65",
    image: "/images/courses-images/10.jpg",

    description:
      "we offer a hadith course, which provides students with a comprehensive understanding of the sayings and teachings of prophet muhammad (pbuh) as recorded in hadith literature.",
    timing: "30 Minutes",
    classType: "One to one class",
    test: "Conduct test after 30 days",
  },
  {
    id: 11,
    name: "Qasas-ul-quran",
    price: "65",
    image: "/images/courses-images/11.jpg",

    description:
      "this course focuses on the stories and lessons found in the quran.",
    timing: "45 Minutes",
    classType: "One to one class",
    test: "Conduct test after 30 days",
  },
  {
    id: 12,
    name: "Qasas-ul-anbiya",
    price: "65",
    image: "/images/courses-images/12.jpg",

    description:
      "this course focuses on the stories of the prophets as mentioned in the quran and other islamic sources.",
    timing: "45 Minutes",
    classType: "One to one class",
    test: "Conduct test after 30 days",
  },
];

const CHOOSEUS = [
  {
    name: "EXPERT QURAN TUTOR",
    description:
      "All the Classes of online teaching are cunducted by well qualified Islamic Scholars and Expert Quran Tutors who will teach you the recitation of Quran as per Arabic Phonetics.",
  },
  {
    name: "WE VALUE OUR STUDENTS",
    description:
      "We value each and every student and that is why every student is being taught by a teacher individually so that student can learn everything in an efficient manner.",
  },
  {
    name: "MALE FEMALE TEACHERS",
    description:
      "We have many well qualified and expert male and female Quran Tutors and as per the nings of Sharia we offer seprate teachers for male and female students accordingly.",
  },
  {
    name: "FLEXIBLE TIMINGS",
    description:
      "We are online 24/7 So, Muslims from all around the world can select online Quran Classes timings as per their conformity and availablity.",
  },
  {
    name: "7 DAYS FREE TRIAL",
    description:
      "We have many years of experience in online Quran Teaching, We value our clients and thats why we offer a free trial of 1 Week so you can evaluate our teaching skills.",
  },
  {
    name: "Certificate",
    description:
      "We provide certificate o our students who successfully complete their online Quran Courses",
  },
];

export { COURSES };
