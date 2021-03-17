
/// defining component methods - buttons
const getPrimaryButton = function getPrimaryButton(button_name, url = "") {
  let primaryButton = document.createElement("a");
  primaryButton.className = "primaryButton";
  primaryButton.href = url;
  primaryButton.innerHTML = button_name;
  // document.getElementById(append_to_id).append(primaryButton);
  return primaryButton;
}

const getSecondaryButton = function getSecondaryButton(button_name, url="") {
  let secondaryButton = document.createElement("a");
  secondaryButton.className = "secondaryButton";
  secondaryButton.href = url;
  secondaryButton.innerHTML = button_name;
  // document.getElementById(append_to_id).append(secondaryButton);
  return secondaryButton;
}