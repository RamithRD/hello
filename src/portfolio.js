// Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Summary And Greeting Section */
  username: "Ramith Randeniya",
  title: "Hi, I'm Ramith",
  subTitle: emoji("A passionate Software Developer specializing in Mobile Application development for Android and iOS platforms using Native technologies such as Kotlin / Java / Swift and Cross-Platform technologies such as Flutter / React Native."),
  subTitleTwo: emoji("There’s nothing I enjoy more than developing Scalable and Intuitive Mobile Experiences. It really is that simple."),
  resumeLink: "https://docs.google.com/document/d/1xyNkySSKwciD8Q2U4MTwLhANz4FjK-rq5m3AgsEDnDM/edit?usp=sharing"
};

// Social Media Links

const socialMediaLinks = {

  github: "https://github.com/RamithRD",
  linkedin: "https://www.linkedin.com/in/ramith-randeniya-14b596b9/",
  gmail: "ramithrandeniya@gmail.com",
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "MOBILE DEVELOPER CURIOUS ABOUT ALL THINGS MOBILE",
  skills: [
    { em: emoji("⚡ I love developing highly interactive mobile applications using the latest tools & technologies used in the industry."), key: "1"},
    { em: emoji("⚡ I'm good at thinking abstractly and planning the perfect architectture for applications with many moving parts."), key: "2"},
    { em: emoji("⚡ I can self-manage, work to deadlines, organise projects and present well-structured and complete deliverables."), key: "3"},
    { em: emoji("⚡ I love working together with a team, I am also a fast learner and a good communicator."), key: "4"}
  ],

//https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android",
      key: "1"
    },
    {
      skillName: "iOS",
      fontAwesomeClassname: "fab fa-apple",
      key: "2"
    },
    {
      skillName: "Kotlin / Java",
      fontAwesomeClassname: "fab fa-java",
      key: "3"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift",
      key: "4"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      key: "5"
    },
    {
      skillName: "Flutter + Dart",
      fontAwesomeClassname: "fas fa-rocket",
      key: "6"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react",
      key: "7"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node",
      key: "8"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database",
      key: "9"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire",
      key: "10"
    },
  ]
};


// top 3 work experiences

const workExperiences = {
  viewExperiences: true, 
  experience: [
    {
      key: "1",
      role: "Software Engineer",  
      company: "Ascentic",
      date: "2020 – Present",
      desc: "Ascentic is technical solutions provider to Swedish clients. I'm currently working on Native and cross-platform applications built using the latest technologies. Technologies I work with at Ascentic: ",
      descBullets: [
        "Native mobile applcations development using Kotlin and Swift",
        "Cross-platform mobile applications using React Native and Flutter",
        "Firebase, Microsoft Azure"
      ]
    },
    {
      key: "2",
      role: "Software Engineer",   
      company: "PickMe Engineering",
      date: "2017 – 2020",
      desc: "Sri Lanka's largest taxi-hailing company, I joined as a Mobile Applications Developer working on enterprise level and event-driven projects catering 100,000+ active users. Tools & Technologies I worked with at PickMe:",
      descBullets: [
        "Native Android and iOS development using Java, Kotlin, Swift",
        "MVP & MVVM Architecures, RxJava, Coroutines, MQTT",
        "Firebase, Google Maps APIs, CleverTap"
      ]
    },
    {
      key: "3",
      role: "Junior Developer",  
      company: "Persistent Systems Lanka",
      date: "2017",
      desc: "I was tasked with the development of an IoT project for Kumana National Park in Sri Lanka. My main responsibilities being involved with the development of the edge controller program developed in Java Spring Boot framework and the development of an Android app to remotely monitor and control the system. Technologies involved are: ",
      descBullets: [
        "Java Spring Boot, Android, JavaScript",
        "MQTT, Kafka, Keycloak Auth server",
        "AWS, Concert IoT"
      ]
    },
  ]
};


const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "RamithRD", 
  showGithubProfile :"true" 
}


const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: []
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or got an interesting opportunity? My Inbox is open for all.",
  number: "+94-718848677",
  email_address: "ramithrandeniya@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, workExperiences, openSource, bigProjects, contactInfo};
