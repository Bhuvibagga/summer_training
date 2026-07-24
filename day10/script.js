const app = document.getElementById("app");

const page = document.createElement("div");
page.className = "profile-card";



const themeButton = document.createElement("button");
themeButton.textContent = "Toggle Dark Mode";

themeButton.addEventListener("click", () => {

    page.classList.toggle("dark-mode");

    if (page.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});

if (localStorage.getItem("theme") === "dark") {
    page.classList.add("dark-mode");
}



const title = document.createElement("h1");
title.textContent = "Bhuvi Bagga";



const about = document.createElement("section");

const aboutHeading = document.createElement("h2");
aboutHeading.textContent = "About Me";

const aboutText = document.createElement("p");
aboutText.textContent =
"I am a Computer Science Engineering student at PES University. I am passionate about software development, artificial intelligence, problem solving and building impactful projects.";

about.appendChild(aboutHeading);
about.appendChild(aboutText);


const goals = document.createElement("section");

const goalsHeading = document.createElement("h2");
goalsHeading.textContent = "Goals";

const goalsList = document.createElement("ul");

const goal1 = document.createElement("li");
goal1.textContent = "Become a skilled Software Engineer.";

const goal2 = document.createElement("li");
goal2.textContent = " Data Structures and Algorithms.";

const goal3 = document.createElement("li");
goal3.textContent = "Artificial Intelligence and Machine Learning.";

goalsList.appendChild(goal1);
goalsList.appendChild(goal2);
goalsList.appendChild(goal3);

goals.appendChild(goalsHeading);
goals.appendChild(goalsList);



const skills = document.createElement("section");

const skillsHeading = document.createElement("h2");
skillsHeading.textContent = "Skills";

const skillsList = document.createElement("ul");

const skill1 = document.createElement("li");
skill1.textContent = "Programming";

const skill2 = document.createElement("li");
skill2.textContent = "Web Development";



const skill3 = document.createElement("li");
skill3.textContent = "Data Structures";

const skill4 = document.createElement("li");
skill4.textContent = "Artificial Intelligence";

skillsList.appendChild(skill1);
skillsList.appendChild(skill2);
skillsList.appendChild(skill3);
skillsList.appendChild(skill4);

skills.appendChild(skillsHeading);
skills.appendChild(skillsList);





const education = document.createElement("section");

const educationHeading = document.createElement("h2");
educationHeading.textContent = "Education";

const educationText = document.createElement("p");

educationText.textContent =
"B.Tech in Computer Science Engineering at PES University.";

education.appendChild(educationHeading);
education.appendChild(educationText);



const contact = document.createElement("section");

const contactHeading = document.createElement("h2");
contactHeading.textContent = "Contact";

const contactText = document.createElement("p");

contactText.textContent =
"Email: bhuvibagga@gmail.com| LinkedIn: linkedin.com/in/bhuvibagga";

contact.appendChild(contactHeading);
contact.appendChild(contactText);



const timerSection = document.createElement("section");

const timerHeading = document.createElement("h2");
timerHeading.textContent = "Countdown Timer";

const timerInput = document.createElement("input");
timerInput.type = "number";
timerInput.placeholder = "Seconds";

const startButton = document.createElement("button");
startButton.textContent = "Start Timer";

const timerDisplay = document.createElement("h3");
timerDisplay.textContent = "Enter Time";

timerSection.appendChild(timerHeading);
timerSection.appendChild(timerInput);
timerSection.appendChild(startButton);
timerSection.appendChild(timerDisplay);


function startCountdown(seconds) {

    return new Promise((resolve, reject) => {

        if (seconds <= 0 || isNaN(seconds)) {
            reject("Enter a valid number");
            return;
        }

        let count = seconds;

        const interval = setInterval(() => {

            timerDisplay.textContent = count;

            count--;

            if (count < 0) {

                clearInterval(interval);

                resolve("Timer Finished");

            }

        }, 1000);

    });

}

startButton.addEventListener("click", () => {

    const seconds = parseInt(timerInput.value);

    startCountdown(seconds)

        .then(message => {
            alert(message);
        })

        .catch(error => {
            alert(error);
        });

});



const student = {
    name: "Bhuvi",
    branch: "CSE"
};

const jsonData = JSON.stringify(student);
console.log(jsonData);

const obj = JSON.parse(jsonData);
console.log(obj);



page.appendChild(themeButton);
page.appendChild(title);
page.appendChild(about);
page.appendChild(goals);
page.appendChild(skills);
page.appendChild(education);
page.appendChild(contact);
page.appendChild(timerSection);

app.appendChild(page);