
/// defining component methods - buttons
const getPrimaryButton = function getPrimaryButton(button_name, url='\0') {
  let primaryButton = document.createElement("a");
  if (url != '\0') {
    primaryButton.className = "primaryButton";
    primaryButton.href = url;
    primaryButton.innerHTML = button_name;
    primaryButton.style.marginRight = "0.5em";  
  } else {
    primaryButton.className = "primaryButton";
    primaryButton.innerHTML = button_name;
    primaryButton.style.marginRight = "0.5em";
  }
  // document.getElementById(append_to_id).append(primaryButton);
  return primaryButton;
}

const getSecondaryButton = function getSecondaryButton(button_name, url='\0') {
  let secondaryButton = document.createElement("a");
  if (url != '\0') {
    secondaryButton.className = "secondaryButton";
    secondaryButton.href = url;
    secondaryButton.innerHTML = button_name;
    secondaryButton.style.marginRight = "0.5em";
  } else {
    secondaryButton.className = "secondaryButton";
    secondaryButton.innerHTML = button_name;
    secondaryButton.style.marginRight = "0.5em";
  }
  // document.getElementById(append_to_id).append(secondaryButton);
  return secondaryButton;
}