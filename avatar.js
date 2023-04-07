// get references to the HTML elements
const avatarContainer = document.getElementById("avatar-container");
const speciesImg = document.getElementById("species-img");
const hairstyleImg = document.getElementById("hairstyle-img");
const accessoryImg = document.getElementById("accessory-img");

// set the default values for the avatar
let species = "human";
let hairstyle = "hairstyle1";
let accessory = "accessory1";

// change the species image
function changeSpecies(newSpecies) {
  species = newSpecies;
  speciesImg.src = `images/${species}.png`;
  updateAvatar();
}

// change the hairstyle image
function changeHairstyle(newHairstyle) {
  hairstyle = newHairstyle;
  hairstyleImg.src = `images/${hairstyle}.png`;
  updateAvatar();
}

// change the accessory image
function changeAccessory(newAccessory) {
  accessory = newAccessory;
  accessoryImg.src = `images/${accessory}.png`;
  updateAvatar();
}

// update the avatar image
function updateAvatar() {
  // create a new image element
  const avatarImg = document.createElement("img");

  // set the attributes of the new image element
  avatarImg.src = "images/avatar.png";
  avatarImg.alt = "Avatar";
  avatarImg.style.position = "relative";

  // create a new image element for each selected item
  const speciesOverlayImg = document.createElement("img");
  speciesOverlayImg.src = `images/${species}-overlay.png`;
  speciesOverlayImg.style.position = "absolute";
  speciesOverlayImg.style.top = "0";
  speciesOverlayImg.style.left = "0";

  const hairstyleOverlayImg = document.createElement("img");
  hairstyleOverlayImg.src = `images/${hairstyle}-overlay.png`;
  hairstyleOverlayImg.style.position = "absolute";
  hairstyleOverlayImg.style.top = "0";
  hairstyleOverlayImg.style.left = "0";

  const accessoryOverlayImg = document.createElement("img");
  accessoryOverlayImg.src = `images/${accessory}-overlay.png`;
  accessoryOverlayImg.style.position = "absolute";
  accessoryOverlayImg.style.top = "0";
  accessoryOverlayImg.style.left = "0";

  // add the item images to the avatar image
  avatarImg.appendChild(speciesOverlayImg);
  avatarImg.appendChild(hairstyleOverlayImg);
  avatarImg.appendChild(accessoryOverlayImg);

  // replace the old avatar image with the new one
  avatarContainer.replaceChild(avatarImg, avatarContainer.firstChild);
}
