let homepage = document.createElement('div');
homepage.className = 'container';

let header = document.createElement('div');
header.className = 'header';

let header_options = [
  {
    title: 'Home',
    path: 'index.htm',
    type: 'text',
  },
  {
    title: 'Docs',
    path: '',
    type: 'text',
  },
  {
    title: 'GitHub',
    path: 'https://www.github.com/DesignSystemsOSS/eccentrictouch',
    type: 'text',
  },
  {
    title: 'Download',
    path: '',
    type: 'button',
  },
];

let right_header = document.createElement('div');
right_header.className = 'right-section';
right_header.style.float = 'right';

let left_header = document.createElement('div');
left_header.className = 'left-section';
left_header.style.float = 'left';

let logo = document.createElement('img');
logo.classList = 'logo';
logo.src = 'logo.svg';
logo.style.width = '240px';

left_header.append(logo);

for (var __options in header_options) {
  if (header_options[__options].type === 'text') {
    let headerOption = document.createElement('a');
    headerOption.classList = 'header_option option';
    headerOption.innerHTML = header_options[__options].title;
    headerOption.href = header_options[__options].path;
    right_header.append(headerOption);
  } else if (header_options[__options].type === 'button') {
    let __button = getSecondaryButton(
      header_options[__options].title,
      header_options[__options].path
    );
    __button.classList.add = 'header_option';
    right_header.append(__button);
  }
}


let GetPreReleaseVersionButton = getPrimaryButton("Get v.0.1 (Pre-Release)", url="");
right_header.append(GetPreReleaseVersionButton);

right_header.style.marginTop = "14px";


header.append(left_header);
header.append(right_header);

document.getElementById('header').appendChild(header);

let landing_section = document.createElement('div');
landing_section.className = 'section';
landing_section.id = 'landing-section';

// let preReleaseTag = document.createElement("a");
// preReleaseTag.className = "tag bg-purple";
// preReleaseTag.innerText = "Pre-Release";

// let latestVersionTag = document.createElement("a");
// latestVersionTag.className = "tag bg-dark";
// latestVersionTag.innerText = "Latest Version (v.0.1)";


let comingSoonTag = document.createElement("a");
comingSoonTag.className = "tag bg-red";
comingSoonTag.innerText = "Coming Soon";

let tagline = document.createElement("p");
tagline.className = "tagline";
tagline.innerHTML = `Suffering from Frontend crises? Here's something that might interest you.`;
tagline.style.fontFamily = "Ubuntu";
tagline.style.fontSize = "52px";



let GetPreReleaseVersionButton = getSecondaryButton(
  'Get v.0.1 for Beta Testing (Pre-Release)',
  (url = '')
);

let emailInput = document.createElement('div');
emailInput.className = 'flex';
emailInput.id = 'email-input';

let email_input_textbox = document.createElement('input');
email_input_textbox.type = 'email';
email_input_textbox.placeholder = 'Enter your Email Address';
email_input_textbox.className = 'input';

emailInput.append(email_input_textbox);

let _button_GetInTouch = document.createElement('div');
_button_GetInTouch = getPrimaryButton('Get In Touch', '');
_button_GetInTouch.classList.add = 'emailButton';

emailInput.append(_button_GetInTouch);
emailInput.style.marginTop = '4em';


// tagline.style.marginBottom = "1em";
// tagline.style.marginTop = "0.4em";



landing_section.append(comingSoonTag);
landing_section.append(tagline);


landing_section.append(emailInput);

// homepage.append(comingSoonTag);
// homepage.append(tagline);
// homepage.append(emailInput);

landing_section.style.marginTop = '3em';

homepage.append(landing_section);

/// appending entire homepage as a DOM Object
document.getElementById('root').appendChild(homepage);
