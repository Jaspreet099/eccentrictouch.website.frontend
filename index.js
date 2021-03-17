
let homepage = document.createElement("div");

let header = document.createElement("div");
header.className = "header";

let header_options = [
  {
    "title": "Home",
    "path": "index.htm",
    "type": "text"
  },
  {
    "title": "Docs",
    "path": "",
    "type": "text"
  },
  {
    "title": "GitHub",
    "path": "https://www.github.com/DesignSystemsOSS/eccentrictouch",
    "type": "text"
  },
  {
    "title": "Download",
    "path": "",
    "type": "button"
  }
];

for (var __options in header_options) {
  if (header_options[__options].type === "text") {
    let headerOption = document.createElement("a");
    headerOption.class = "header_option";
    headerOption.innerHTML = header_options[__options].title;
    headerOption.href = header_options[__options].path;
    header.append(headerOption);
  } else if (header_options[__options].type === "button") {
    let __button = getSecondaryButton(header_options[__options].title, header_options[__options].path);
    header.append(__button);
  }
}

document.getElementById("header").appendChild(header);

let landing_section = document.createElement("div");
landing_section.className = "section";
landing_section.id = "landing-section";

let tagline = document.createElement("h1");
tagline.className = "tagline";
tagline.innerHTML = `The <u>Last</u> Design Touch to your Websites.`;
tagline.style.fontFamily = "Ubuntu";
tagline.style.width = "38%";
tagline.style.fontSize = "52px";

let emailInput = document.createElement("div");
emailInput.className = "flex";
emailInput.id = "email-input";

let email_input_textbox = document.createElement("input");
email_input_textbox.type = "email";
email_input_textbox.placeholder = "Enter your Email Address";
email_input_textbox.className = "input";


emailInput.append(email_input_textbox);
emailInput.append(getPrimaryButton("Get In Touch", ""));


homepage.append(tagline);
homepage.append(emailInput);



/// appending entire homepage as a DOM Object
document.getElementById("root").appendChild(homepage);