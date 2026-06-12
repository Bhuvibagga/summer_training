const app = document.getElementById("app");

const page = document.createElement("div");
page.className = "profile-card";

const title = document.createElement("h1");
title.textContent = "Bhuvi Bagga";

const nav = document.createElement("nav");

const aboutLink = document.createElement("a");
aboutLink.href = "#";
aboutLink.textContent = "About";

const goalsLink = document.createElement("a");
goalsLink.href = "#";
goalsLink.textContent = "Goals";

const skillsLink = document.createElement("a");
skillsLink.href = "#";
skillsLink.textContent = "Skills";

const contactLink = document.createElement("a");
contactLink.href = "#";
contactLink.textContent = "Contact";

nav.appendChild(aboutLink);
nav.appendChild(goalsLink);
nav.appendChild(skillsLink);
nav.appendChild(contactLink);

const aboutSection = document.createElement("section");

const aboutHeading = document.createElement("h2");
aboutHeading.textContent = "About Me";

const aboutText = document.createElement("p");
aboutText.textContent =
"I am a Computer Science Engineering student at PES University. I enjoy software development, artificial intelligence, and building impactful projects.";

aboutSection.appendChild(aboutHeading);
aboutSection.appendChild(aboutText);

const goalSection = document.createElement("section");

const goalHeading = document.createElement("h2");
goalHeading.textContent = "Professional & Learning Goals";

const goalList = document.createElement("ul");

const goal1 = document.createElement("li");
goal1.textContent = "Become a skilled Software Engineer.";

const goal2 = document.createElement("li");
goal2.textContent = "Learn Full Stack Web Development.";

const goal3 = document.createElement("li");
goal3.textContent = "Explore AI and Machine Learning.";

goalList.appendChild(goal1);
goalList.appendChild(goal2);
goalList.appendChild(goal3);

goalSection.appendChild(goalHeading);
goalSection.appendChild(goalList);

const skillSection = document.createElement("section");

const skillHeading = document.createElement("h2");
skillHeading.textContent = "Skills & Interests";

const skillList = document.createElement("ul");

const skill1 = document.createElement("li");
skill1.textContent = "Programming";

const skill2 = document.createElement("li");
skill2.textContent = "Web Development";

const skill3 = document.createElement("li");
skill3.textContent = "Artificial Intelligence";

skillList.appendChild(skill1);
skillList.appendChild(skill2);
skillList.appendChild(skill3);

skillSection.appendChild(skillHeading);
skillSection.appendChild(skillList);

const contactSection = document.createElement("section");

const contactHeading = document.createElement("h2");
contactHeading.textContent = "Contact Us";

const nameInput = document.createElement("input");
nameInput.placeholder = "Full Name";

const emailInput = document.createElement("input");
emailInput.placeholder = "Email Address";

const messageBox = document.createElement("textarea");
messageBox.placeholder = "Enter your message";

const submitButton = document.createElement("button");
submitButton.textContent = "Submit";

contactSection.appendChild(contactHeading);
contactSection.appendChild(nameInput);
contactSection.appendChild(emailInput);
contactSection.appendChild(messageBox);
contactSection.appendChild(submitButton);

page.appendChild(title);
page.appendChild(nav);
page.appendChild(aboutSection);
page.appendChild(goalSection);
page.appendChild(skillSection);
page.appendChild(contactSection);

app.appendChild(page);