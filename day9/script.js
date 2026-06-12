const app = document.getElementById("app");

const card = document.createElement("div");
card.className = "profile-card";

const title = document.createElement("h1");
title.textContent = "Bhuvi Bagga";

const aboutSection = document.createElement("section");

const aboutHeading = document.createElement("h2");
aboutHeading.textContent = "About Me";

const aboutText = document.createElement("p");
aboutText.textContent =
"I am a second year Computer Science Engineering student at PES University. I am passionate about software development, artificial intelligence, and solving real-world problems through technology.";

aboutSection.appendChild(aboutHeading);
aboutSection.appendChild(aboutText);

const professionalSection = document.createElement("section");

const professionalHeading = document.createElement("h2");
professionalHeading.textContent = "Professional Goals";

const professionalList = document.createElement("ul");

const goal1 = document.createElement("li");
goal1.textContent = "Become a skilled software engineer.";

const goal2 = document.createElement("li");
goal2.textContent = "Build impactful real-world projects.";

const goal3 = document.createElement("li");
goal3.textContent = "Improve problem-solving skills.";

professionalList.appendChild(goal1);
professionalList.appendChild(goal2);
professionalList.appendChild(goal3);

professionalSection.appendChild(professionalHeading);
professionalSection.appendChild(professionalList);

const learningSection = document.createElement("section");

const learningHeading = document.createElement("h2");
learningHeading.textContent = "Learning Goals";

const learningList = document.createElement("ul");
const learn1 = document.createElement("li");
learn1.textContent = "Data structures.";
const learn2 = document.createElement("li");
learn2.textContent = "Algorithms.";

learningList.appendChild(learn1);
learningList.appendChild(learn2);


learningSection.appendChild(learningHeading);
learningSection.appendChild(learningList);

card.appendChild(title);
card.appendChild(aboutSection);
card.appendChild(professionalSection);
card.appendChild(learningSection);

app.appendChild(card);
