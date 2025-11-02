const navLinks = [
  {
    id: 1,
    name: "Work",
    link: "#work",
  },
  {
    id: 2,
    name: "Experience",
    link: "#experience",
  },
  {
    id: 3,
    name: "Skills",
    link: "#skills",
  },
  {
    id: 4,
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { id: 1, text: "Ideas", imgPath: "/images/ideas.svg" },
  { id: 2, text: "Concepts", imgPath: "/images/concepts.svg" },
  { id: 3, text: "Designs", imgPath: "/images/designs.svg" },
  { id: 4, text: "Code", imgPath: "/images/code.svg" },
  { id: 5, text: "Ideas", imgPath: "/images/ideas.svg" },
  { id: 6, text: "Concepts", imgPath: "/images/concepts.svg" },
  { id: 7, text: "Designs", imgPath: "/images/designs.svg" },
  { id: 8, text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 1, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "C++ Developer",
    modelPath: "/models/c-plus-plus2.glb",
    scale: 0.048,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Started my front-end journey in 2025, learning React from scratch and quickly growing into crafting interactive, creative web experiences that reflect my passion, curiosity, and constant drive to improve.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/react.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Built interactive UI components for projects like VozMedia using React, managing state, props, and dynamic data effectively.",
      "Added engaging features such as animations, dynamic forms, and user interactions, enhancing overall application usability.",
      "Implemented responsive layouts with modern CSS, Flexbox, and grid, ensuring cross-device compatibility and polished visuals.",
    ],
  },
  {
    review:
      "Started my back-end journey in 2025, diving into Node.js, Express, and databases. In months, I’ve built secure, scalable APIs, learned server-side logic, and integrated real-world data, shaping a strong foundation for full-stack development.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/node.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Designed and developed the backend architecture for VozMedia, implementing scalable APIs, efficient data exchange with proper backend.",
      "Integrated frontend and backend seamlessly, ensuring smooth user interactions and real-time updates across the platform.",
      "Collaborated on future-proof design, enabling easy feature expansion and maintenance for evolving social media requirements.",
    ],
  },
  {
    review:
      "Started learning C++ in 2024, exploring core programming concepts, developing a 2D game with SFML, and strengthening problem-solving skills by practicing data structures and algorithms on platforms like LeetCode.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/cplusplus.png",
    title: "C++ Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Developed a 2D game using C++ and SFML, implementing interactive gameplay mechanics and graphics.",
      "Practicing data structures and algorithms on LeetCode to improve problem-solving and coding efficiency.",
      "Exploring advanced C++ concepts, including memory management, OOP, and performance optimization.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/react.png",
  },
  {
    name: "logo2",
    imgPath: "/images/node.png",
  },
  {
    name: "logo3",
    imgPath: "/images/cplusplus.png",
  },
];
const testimonials = [
  {
    name: "Franz Kafka",
    mentions: "@franzkafka",
    review:
      "You do not need to leave your room. Remain sitting at your table and listen. Do not even listen, simply wait, be quiet, and solitary. The world will freely offer itself to you.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Mahatma Gandhi",
    mentions: "@mahatmagandhi",
    review:
      "Be the change that you wish to see in the world.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Gautam Buddha",
    mentions: "@gautambuddha",
    review:
      "The mind is everything. What you think you become.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Leonardo da Vinci",
    mentions: "@leonardodavinci",
    review:
      "Learning never exhausts the mind. Imagination is the source of progress.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Charles Babbage",
    mentions: "@charlesbabbage",
    review:
      "Errors using inadequate data are much less than those using no data at all. Success comes from thoughtful persistence.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Albert Einstein",
    mentions: "@alberteinstein",
    review:
      "Strive not to be a success, but rather to be of value. Curiosity and passion drive every great achievement.",
    imgPath: "/images/client6.png",
  },
  {
    name: "Steve Jobs",
    mentions: "@stevejobs",
    review:
      "Innovation distinguishes between a leader and a follower. Keep learning, building, and pushing the boundaries of your craft.",
    imgPath: "/images/client7.png",
  },
  {
    name: "Nelson Mandela",
    mentions: "@nelsonmandela",
    review:
      "It always seems impossible until it’s done. Stay persistent, and every obstacle becomes a stepping stone.",
    imgPath: "/images/client8.png",
  },
  {
    name: "Walt Disney",
    mentions: "@waltdisney",
    review:
      "All our dreams can come true, if we have the courage to pursue them. Keep experimenting, keep creating.",
    imgPath: "/images/client9.png",
  },
  {
    name: "Confucius",
    mentions: "@confucius",
    review:
      "It does not matter how slowly you go as long as you do not stop. Consistency is key to mastery.",
    imgPath: "/images/client10.png",
  },
];
const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
