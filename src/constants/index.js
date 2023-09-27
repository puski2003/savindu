import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs2,
  git,
  python,
  energy1,
  ai1,
  webdev1,
  security1,
  brain,
  threejswp,
  reactandthreewp,
  threejs2,
  vuejs,
  firebase,

  
} from "../assets";

import ad from "../assets/projects/project-img/ad.png";
import cey from "../assets/projects/project-img/cey.png";
import filter from "../assets/projects/project-img/filter.png";
import ghost from "../assets/projects/project-img/ghost.png";
import harrypotter from "../assets/projects/project-img/harrypotter.png";
import idb from "../assets/projects/project-img/idb.png";
import idb2 from "../assets/projects/project-img/idb2.png";
import imaginary from "../assets/projects/project-img/imaginary.png";
import mechanical from "../assets/projects/project-img/mechanical.png";
import painting from "../assets/projects/project-img/paintings.png";
import pol from "../assets/projects/project-img/pol.png";
import siwsadaru from "../assets/projects/project-img/siwsadaru.png";
import thumbnail from "../assets/projects/project-img/thumbnail.png";
import wallanimation from "../assets/projects/project-img/wallanimation.png";

import amora from "../assets/projects/project-img/amora.png";
//logos
import dp from "../assets/projects/brand/dp.png";
import amoraLogo  from "../assets/projects/brand/amora-logo.jpg";
import imaginaryLogo from "../assets/projects/brand/imaginaryStudios.png";
import polLog from "../assets/projects/brand/coconutdevelopment.png";
import ceyLog from "../assets/projects/brand/ceynorlogo.png";
import idbLogo from "../assets/projects/brand/IDB.png";
import siwsadaruLogo from "../assets/projects/brand/Bhagya.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project-1",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  { id:1,
    title: "3D/2D Animator",
    icon: web,
  },
  {id:2,
    title: "Video Editor",
    icon: mobile,
  },
  {
    id:3,
    title: "Graphic Artist",
    icon: backend,
  },
  { id:4,
    title: "Content Creator",
    icon: brain,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "nodejs2",
    icon: nodejs2,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "threejs2",
    icon: threejs2,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "vuejs",
    icon: vuejs,
  },
];

const experiences = [
  {
    title: "3D/2D Animator",
    icon: webdev1,
    iconBg: "#383E56",
    
    points: [
      "Proficient in industry-standard animation software such as Autodesk Maya, Blender, and Adobe After Effects.",
      "Knowledge of 3D modeling and texturing to enhance animation assets and environments while bringing characters and scenes to life through character animation, rigging, and keyframe animation techniques.",
      "Collaborating with sound designers and composers to synchronize animations with audio elements for a cohesive final product.",
    ],
  },
  {
    title: "Video Editor",
    icon: ai1,
    iconBg: "#383E56",
    
    points: [
      "Proficient in video editing software such as Adobe Premiere Pro and DaVinci Resolve.",
      "Enhancing video quality through color correction, color grading, and visual effects to achieve a professional and cinematic look.",
      "Strong understanding of video editing principles, including pacing, storytelling, continuity, and visual aesthetics.",
    ],
  },
  {
    title: "Graphic Artist",
    company_name: "Express Energy",
    icon: energy1,
    iconBg: "#383E56",
   
    points: [
      "Proficiency in graphic design software such as Adobe Photoshop, Adobe Illustrator, Adobe InDesign, and other relevant tools.",
      "Designing logos, branding materials, and corporate identity elements that convey a strong and memorable visual identity.",
      "Adhering to design best practices, including color theory, composition, and visual hierarchy, to create impactful and balanced designs.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Logo RevealS",
    description:
      "Create a captivating 3D animation logo reveal for Imaginary Studios using Blender, showcasing their creative prowess. Engage viewers in seconds with a stunning visual introduction.",

    brand: [
      {
        name: "Imaginary Studios",
        image: imaginaryLogo,
        brandLink:""
      }
    ],
    image: imaginary,
    source_code_link: "https://youtu.be/YNOhE0H1uow?si=4tOuX-WO_5S4iIhd",
  },
  {
    name: "Video Wall Animation",
    description:
      " video wall animation highlighting Srilankan Coconut Development Authority's evolution, from traditional roots to cutting-edge innovations, celebrating the coconut industry's heritage and future prospects.",

    brand: [
      {
        name: "Coconut Development Authority",
        image: polLog,
        brandLink:"https://www.cda.gov.lk/"
      }
    ],
    image: pol,
    source_code_link: "https://youtu.be/hrGkn5k1etc?si=Yu0NYQ-O9ffq6A8d",
  },
  {
    name: "Aniversary Animation",
    description:
      "Develop an immersive video wall animation showcasing the Ministry of Fisheries' partnership with Cey-Nor Foundation in advancing sustainable fisheries practices for a thriving marine ecosystem. ",

    brand: [
      {
        name: "Cey-Nor Foundation",
        image:ceyLog ,
        brandLink:"https://www.ceynor.gov.lk/"
      }
    ],
    image: cey,
    source_code_link: "https://youtu.be/Ea9p0EDicxY?si=Lp9yZMDjSJmDRfQo",
  },
  
  {
    name: " Social Media Teaser",
    description:
      "Craft an engaging social media teaser highlighting the Industrial Development Board's transformative role in driving innovation and economic growth, sparking curiosity and excitement among the audience. ",
    brand: [
      {
        name: "Industrial Development Board",
        image: idbLogo ,
        brandLink:"https://idb.gov.lk/"
      },
      
    ],
    image: idb,
    source_code_link: "https://youtube.com/shorts/fNLi4hNsBmo?si=fZIKD2XUlJuaZsBV",
  },
  {
    name: " Introduction Video",
    description:
      "Produce a captivating introduction video for 'SIW SADA ROO', a Bhagya School of Dance production in Australia, spotlighting the mesmerizing beauty of Sri Lankan culture and dance. ",
    brand: [
      {
        name: "Bhagya School of Dance",
        image: siwsadaruLogo ,
        brandLink:"https://www.facebook.com/p/Bhagya-School-of-Dance-100086191037323/"
      },
      
    ],
    image: siwsadaru,
    source_code_link: "https://youtu.be/4PIE0xefQuk?si=UHFgLosxom0en6Ey",
  },
  {
    name: "Rigid Body Simulation",
    description:
      "Produce a captivating introduction video for 'SIW SADA ROO', a Bhagya School of Dance production in Australia, spotlighting the mesmerizing beauty of Sri Lankan culture and dance. ",
    brand: [
      {
        name: "Imaginary Studios",
        image: imaginaryLogo ,
        brandLink:""
      },
      
    ],
    image: harrypotter,
    source_code_link: "https://www.instagram.com/_imaginary_studios/?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
  },
  {
    name: "Thumbnail Designs for youtube",
    description:
      "DP Education which is a leading youtube channel which lets students worldwide learn coding skills for free and I have made more than 100 thumbnail designs for that channel with almost 120k subscribers.",
    brand: [
      {
        name: "DP Education",
        image: dp ,
        brandLink:"https://www.dpeducation.lk/"
      },
      
    ],
    image: thumbnail,
    source_code_link: "https://www.youtube.com/@dpeducationitcampus174/featured",
  },
  {
    name: " Product Teaser   ",
    description:
      "This is a product showcasing teaser with the paintings that are on sale on their website. This company is a startup that requested a video in order to post these amazing work on social media for further awareness.",
    brand: [
      {
        name: "Amora Artworks  ",
        image: amoraLogo ,
        brandLink:"https://www.instagram.com/_amora.lk_/"
      },
      
    ],
    image:amora,
    source_code_link: "instagram.com/reel/CvwG9i2BEI9/?igshid=MzRlODBiNWFlZA%3D%3D",
  },
  
 
  {
    name: "3D Product Commercial  ",
    description:
      "I collaborated with a forward-thinking startup based in Sri Lanka to create a groundbreaking 3D product design. This project allowed me to showcase my passion for technology and my skills in 3D modeling.",
    brand: [
      {
        name: "Confidential Startup compan  ",
        image: "" ,
        brandLink:""
      },
      
    ],
    image:filter,
    source_code_link: "https://youtu.be/C6BbAXKAXro?si=KoJQoWW_WqVRyRAY ",
  },
  
  {
    name: "Smoke Simulation Anime  ",
    description:
      " I crafted a stunning smoke simulation that perfectly synced with the rhythm and beats of the song \"Alan Walker - The Spectre\".This project not only showcases my animation skills but also demonstrates my ability to merge art and technology to create immersive experiences ",
    brand: [
      {
        name: "Imaginary Studios",
        image: imaginaryLogo ,
        brandLink:"https://instagram.com/_imaginary_studios?igshid=OGQ5ZDc2ODk2ZA"
      },
      
    ],
    image:ghost,
    source_code_link: "https://youtube.com/shorts/e9bTLiaa1PQ?si=KCBrEStCAthR5fJI",
  },
  {
    name: "KeyFrame Animation",
    description:
      " Explore a mesmerizing world of mechanical wonder as Imaginary Studios brings a robotic masterpiece to life through captivating key frame animation. Witness innovation in motion. ",
    brand: [
      {
        name: "Imaginary Studios",
        image: imaginaryLogo ,
        brandLink:"https://instagram.com/_imaginary_studios?igshid=OGQ5ZDc2ODk2ZA"
      },
      
    ],
    image:mechanical,
    source_code_link: "https://www.instagram.com/reel/CvgVHxFIkHv/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
  },
  
  
  
  
  
 
 

  
 
];
const projects2 = [
  {
    name: "Logo RevealS",
    description:
      "Create a captivating 3D animation logo reveal for Imaginary Studios using Blender, showcasing their creative prowess. Engage viewers in seconds with a stunning visual introduction.",

    brand: [
      {
        name: "Imaginary Studios",
        image: imaginaryLogo,
        brandLink:""
      }
    ],
    image: imaginary,
    source_code_link: "https://youtu.be/YNOhE0H1uow?si=4tOuX-WO_5S4iIhd",
  },
  
  {
    name: "Aniversary Animation",
    description:
      "Develop an immersive video wall animation showcasing the Ministry of Fisheries' partnership with Cey-Nor Foundation in advancing sustainable fisheries practices for a thriving marine ecosystem. ",

    brand: [
      {
        name: "Cey-Nor Foundation",
        image:filter ,
        brandLink:"https://www.ceynor.gov.lk/"
      }
    ],
    image: "",
    source_code_link: "https://youtu.be/Ea9p0EDicxY?si=Lp9yZMDjSJmDRfQo",
  },

  
  
 
 

  
 
];

export { services, technologies, experiences, testimonials, projects,projects2 };
