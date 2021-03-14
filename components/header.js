
let header = document.createElement("div");
header.className = "header";

let header_options = [
  {
    "title": "Home",
    "path": "index.htm"
  },
  {
    "title": "Docs",
    "path": ""
  },
  {
    "title": "Download",
    "path": ""
  },
  {
    "title": "GitHub",
    "path": "https://www.github.com/DesignSystemsOSS/eccentrictouch"
  }
];

for (var __options in header_options) {
  if (header_options[__options].title != "GitHub") {
    let new_option = document.createElement("a");
    new_option.className = "header_option";
    new_option.innerHTML = header_options[__options].title;
    new_option.href = header_options[__options].path;
    header.append(new_option);
  } else if (header_options[__options].title == "GitHub") {
    let new_option = document.createElement("a");
    new_option.className = "header_option";
    new_option.innerHTML = header_options[__options].title;
    new_option.href = header_options[__options].path;
    new_option.target = "_blank";
    header.append(new_option);
  }
}

document.getElementById("header").appendChild(header);