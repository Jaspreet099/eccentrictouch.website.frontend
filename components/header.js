
// let header = document.createElement("div");
// header.className = "header";

// let header_options = [
//   {
//     "title": "Home",
//     "path": "index.htm",
//     "type": "text"
//   },
//   {
//     "title": "Docs",
//     "path": "",
//     "type": "text"
//   },
//   {
//     "title": "GitHub",
//     "path": "https://www.github.com/DesignSystemsOSS/eccentrictouch",
//     "type": "text"
//   },
//   {
//     "title": "Download",
//     "path": "",
//     "type": "button"
//   }
// ];

// for (var __options in header_options) {
//   if (header_options[__options].type === "text") {
//     let headerOption = document.createElement("a");
//     headerOption.class = "header_option";
//     headerOption.innerHTML = header_options[__options].title;
//     headerOption.href = header_options[__options].path;
//     header.append(headerOption);
//   } else if (header_options[__options].type === "button") {
//     let __button = getSecondaryButton(header_options[__options].title, header_options[__options].path);
//     header.append(__button);
//   }
// }

// document.getElementById("header").appendChild(header);