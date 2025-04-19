// src/components/Projects/projectsData.js
import gmage from "../../assets/gmage.png";
import yder from "../../assets/yder.png";
import formed from "../../assets/formed.png";
import shoppingCartVideo from "../../assets/videos/shopping-cart-demo.mp4";
import gifnoirVideo from "../../assets/videos/gifnoir-demo.mp4";

export const projects = [
  {
    title: "Gmail Clone",
    description: "A fully functional Gmail clone with real-time email functionality and Firebase authentication",
    media: gmage,
    mediaType: "image",
    tech: ["React", "Firebase", "Node.js", "Redux"],
    category: "Full Stack",
    role: "Sole Developer",
    date: "Mar 2025",
    liveLink: "https://clone-457b2.web.app/",
    codeLink: "https://github.com/helloAmulya/GmailCone",
    features: [
      "Real-time email sync", 
      "Firebase authentication", 
      "Responsive design",
      "Email compose functionality"
    ]
  },
  {
    title: "Shopping Cart",
    description: "Redux-powered e-commerce cart with persistent storage and product filtering",
    media: shoppingCartVideo,
    mediaType: "video",
    tech: ["React", "Redux Toolkit", "LocalStorage API", "Tailwind CSS"],
    category: "Frontend",
    role: "Sole Developer",
    date: "Apr 2025",
    liveLink: "https://dshops.vercel.app/",
    // codeLink: "https://github.com/helloAmulya/shopping-cart",
    features: [
      "Cart persistence",
      "Product filtering",
      "Quantity adjustment",
      "Responsive layout"
    ]
  },
  {
    title: "GIFNOIR",
    description: "Advanced GIF generator with search, filtering, and download capabilities",
    media: gifnoirVideo,
    mediaType: "video",
    tech: ["React", "GIPHY API", "Axios", "Framer Motion"],
    category: "Frontend",
    role: "Sole Developer",
    date: "Apr 2025",
    liveLink: "https://gifnoir.vercel.app/",
    codeLink: "https://github.com/helloAmulya/GifNoir",
    features: [
      "GIPHY API integration",
      "Animated transitions",
      "Search and filtering",
      "Download functionality"
    ]
  },
  {
    title: "Edutech Website",
    description: "Educational platform with client management and course tracking",
    media: formed,
    mediaType: "image",
    tech: ["HTML", "TailwindCSS", "JavaScript", "Formik"],
    category: "Frontend",
    role: "Lead Developer",
    date: "Nov 2024",
    liveLink: "https://formedusite.vercel.app/",
    codeLink: "https://github.com/helloAmulya/Edutech-website",
    features: [
      "Responsive design",
      "Form validation",
      "Client dashboard",
      "Course tracking"
    ]
  },
  {
    title: "Yder",
    description: "YouTube media downloader extension with format selection and quality options",
    media: yder,
    mediaType: "image",
    tech: ["React.js", "Express", "Node.js", "YTDL-core"],
    category: "Extension",
    role: "Sole Developer",
    date: "Dec 2024",
    liveLink: "https://yder.vercel.app/",
    codeLink: "https://github.com/helloAmulya/yder",
    features: [
      "Audio/video download",
      "Format selection",
      "Quality options",
      "Chrome extension"
    ]
  }
];

export const projectCategories = ["All", "Full Stack", "Frontend", "Extension"];