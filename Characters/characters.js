const strength_heroes = [
  "Abaddon",
  "Alchemist",
  "Axe",
  "Beastmaster",
  "Brewmaster",
  "Bristleback",
  "Centaur Warrunner",
  "Chaos Knight",
  "Clockwerk",
  "Dawnbreaker",
  "Doom",
  "Dragon Knight",
  "Earth Spirit",
  "Earthshaker",
  "Elder Titan",
  "Huskar",
  "Io",
  "Kunkka",
  "Legion Commander",
  "Lifestealer",
  "Lycan",
  "Magnus",
  "Marci",
  "Mars",
  "Night Stalker",
  "Omniknight",
  "Phoenix",
  "Primal Beast",
  "Pudge",
  "Sand King",
  "Slardar",
  "Snapfire",
  "Spirit Breaker",
  "Sven",
  "Tidehunter",
  "Timbersaw",
  "Tiny",
  "Treant Protector",
  "Tusk",
  "Underlord",
  "Undying",
  "Wraith King",
];

const agility_heroes = [
  "Anti-Mage",
  "Arc Warden",
  "Bloodseeker",
  "Bounty Hunter",
  "Broodmother",
  "Clinkz",
  "Drow Ranger",
  "Ember Spirit",
  "Faceless Void",
  "Gyrocopter",
  "Hoodwink",
  "Juggernaut",
  "Lone Druid",
  "Luna",
  "Medusa",
  "Meepo",
  "Mirana",
  "Monkey King",
  "Morphling",
  "Naga Siren",
  "Nyx Assassin",
  "Pangolier",
  "Phantom Assassin",
  "Phantom Lancer",
  "Razor",
  "Riki",
  "Shadow Fiend",
  "Slark",
  "Sniper",
  "Spectre",
  "Templar Assassin",
  "Terrorblade",
  "Troll Warlord",
  "Ursa",
  "Vengeful Spirit",
  "Venomancer",
  "Viper",
  "Weaver",
];

const intelligence_heroes = [
  "Ancient Apparition",
  "Bane",
  "Batrider",
  "Chen",
  "Crystal Maiden",
  "Dark Seer",
  "Dark Willow",
  "Dazzle",
  "Death Prophet",
  "Disruptor",
  "Enchantress",
  "Enigma",
  "Grimstroke",
  "Invoker",
  "Jakiro",
  "Keeper of the Light",
  "Leshrac",
  "Lich",
  "Lina",
  "Lion",
  "Muerta",
  "Nature's Prophet",
  "Necrophos",
  "Ogre Magi",
  "Oracle",
  "Outworld Devourer",
  "Puck",
  "Pugna",
  "Queen of Pain",
  "Rubick",
  "Shadow Demon",
  "Shadow Shaman",
  "Silencer",
  "Skywrath Mage",
  "Storm Spirit",
  "Techies",
  "Tinker",
  "Visage",
  "Void Spirit",
  "Warlock",
  "Windranger",
  "Winter Wyvern",
  "Witch Doctor",
  "Zeus",
];

let i = 0;
for (i = 0; i < strength_heroes.length; i++) {
  const markup = `
  <a href="https://dota2.fandom.com/wiki/${strength_heroes[i]}" target="_blank" class="hero-card">
  <img src="heroIcons/${strength_heroes[i]}.webp" alt="${strength_heroes[i]} icon" class="character-image" />
  <span>${strength_heroes[i]}</span>
  </a>
  `;
  document.querySelector(".strength").insertAdjacentHTML("beforeend", markup);
}

for (i = 0; i < agility_heroes.length; i++) {
  const markup = `
  <a href="https://dota2.fandom.com/wiki/${agility_heroes[i]}" target="_blank" class="hero-card">
  <img src="heroIcons/${agility_heroes[i]}.webp" alt="${agility_heroes[i]} icon" class="character-image" />
  <span>${agility_heroes[i]}</span>
  </a>
  `;
  document.querySelector(".agility").insertAdjacentHTML("beforeend", markup);
}

for (i = 0; i < intelligence_heroes.length; i++) {
  const markup = `
  <a href="https://dota2.fandom.com/wiki/${intelligence_heroes[i]}" target="_blank" class="hero-card">
  <img src="heroIcons/${intelligence_heroes[i]}.webp" alt="${intelligence_heroes[i]} icon" class="character-image" />
  <span>${intelligence_heroes[i]}</span>
  </a>
  `;
  document
    .querySelector(".intelligence")
    .insertAdjacentHTML("beforeend", markup);
}

var modal = document.getElementById("myModal");

var img = document.getElementById("jsImgHeader");
var modalImg = document.getElementById("popImg");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
