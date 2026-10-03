export type HouseId = "gryffindor" | "slytherin" | "ravenclaw" | "hufflepuff";

export const houseCrestSrc: Record<HouseId, string> = {
  gryffindor: "/images/crests/gryffindor.png",
  slytherin: "/images/crests/slytherin-reference.png",
  ravenclaw: "/images/crests/ravenclaw-reference.png",
  hufflepuff: "/images/crests/hufflepuff-reference.png",
};

export interface House {
  id: HouseId;
  name: string;
  symbol: string;
  founder: string;
  colors: string;
  traits: string[];
  description: string;
  history: string;
  commonRoom: string;
  notable: string[];
}

export interface Location {
  id: string;
  name: string;
  description: string;
  detail: string;
  fact: string;
  icon: "hall" | "book" | "tower" | "flask" | "leaf" | "broom" | "stairs" | "forest";
}

export interface Spell {
  name: string;
  category: "Light" | "Movement" | "Charm" | "Defense";
  purpose: string;
  effect: "lumos" | "nox" | "accio" | "alohomora" | "leviosa" | "expelliarmus" | "patronum";
}

export interface SortingAnswer { label: string; house: HouseId }
export interface SortingQuestion { prompt: string; answers: SortingAnswer[] }

export const houses: House[] = [
  { id: "gryffindor", name: "Gryffindor", symbol: "Lion", founder: "Godric Gryffindor", colors: "Crimson & gold", traits: ["Courage", "Bravery", "Determination"], description: "For those who step forward when the path is uncertain.", history: "Gryffindor prizes courage in all its forms, from a grand act of bravery to the quiet choice to speak up.", commonRoom: "A warm tower retreat with worn armchairs, a lively fire, and a view above the grounds.", notable: ["Harry Potter", "Hermione Granger", "Minerva McGonagall"] },
  { id: "slytherin", name: "Slytherin", symbol: "Serpent", founder: "Salazar Slytherin", colors: "Emerald & silver", traits: ["Ambition", "Resourcefulness", "Determination"], description: "For minds that find a way where others see a wall.", history: "Slytherin values ambition and ingenuity, encouraging its students to pursue their goals with resolve.", commonRoom: "A low, elegant room beneath the lake, where shifting green light dances across stone.", notable: ["Severus Snape", "Draco Malfoy", "Horace Slughorn"] },
  { id: "ravenclaw", name: "Ravenclaw", symbol: "Eagle", founder: "Rowena Ravenclaw", colors: "Blue & bronze", traits: ["Intelligence", "Creativity", "Wisdom"], description: "For the curious who never stop asking why.", history: "Ravenclaw welcomes original thought and the pleasure of learning for its own sake.", commonRoom: "An airy, book-lined space high in a tower, open to the stars and changing sky.", notable: ["Luna Lovegood", "Cho Chang", "Filius Flitwick"] },
  { id: "hufflepuff", name: "Hufflepuff", symbol: "Badger", founder: "Helga Hufflepuff", colors: "Yellow & charcoal", traits: ["Loyalty", "Patience", "Dedication"], description: "For steady hearts that make a place for everyone.", history: "Hufflepuff is built on fairness, hard work, and the belief that everyone deserves a chance.", commonRoom: "A round, welcoming room near the kitchens, full of copper light and growing plants.", notable: ["Cedric Diggory", "Nymphadora Tonks", "Pomona Sprout"] },
];

export const locations: Location[] = [
  { id: "great-hall", name: "The Great Hall", description: "A room made for beginnings.", detail: "Long tables gather the school beneath a ceiling that seems to hold the night sky. Here, everyday meals and extraordinary moments share the same space.", fact: "The enchanted ceiling reflects the sky outside.", icon: "hall" },
  { id: "library", name: "The Library", description: "A thousand questions between the shelves.", detail: "Lamplight finds its way along endless shelves and quiet reading tables. Every volume feels like an invitation to look a little closer.", fact: "Some shelves are best explored with permission.", icon: "book" },
  { id: "astronomy", name: "Astronomy Tower", description: "The castle's closest point to the stars.", detail: "Above the rooftops, the grounds fall away and the sky takes over. The tower is a place for charts, telescopes, and long views.", fact: "The tower is particularly striking after dusk.", icon: "tower" },
  { id: "potions", name: "Potions Classroom", description: "Where patience becomes a kind of magic.", detail: "Stone walls, copper instruments, and careful measurements make this one of the castle's most exacting rooms.", fact: "A small change in timing can change everything.", icon: "flask" },
  { id: "greenhouses", name: "The Greenhouses", description: "Something new is always growing.", detail: "Glass roofs catch the pale morning light while unusual plants fill every table. There is always more to discover here than meets the eye.", fact: "The grounds hold several greenhouses.", icon: "leaf" },
  { id: "grounds", name: "The Flying Grounds", description: "Open air, open possibility.", detail: "Beyond the old stone walls, the grounds give students space to practice, compete, and look back at the castle from afar.", fact: "The castle looks different from every corner of the grounds.", icon: "broom" },
  { id: "staircases", name: "Moving Staircases", description: "A familiar route can become a new one.", detail: "Landings and corridors seem to have a rhythm of their own. Keep your eyes open and your destination in mind.", fact: "The best explorers leave time for a detour.", icon: "stairs" },
  { id: "forest", name: "The Forbidden Forest", description: "The edge of the known world.", detail: "An ancient stretch of woodland borders the grounds. Its deep shade and changing paths are best admired from a respectful distance.", fact: "The forest is out of bounds to students.", icon: "forest" },
];

export const spells: Spell[] = [
  { name: "Lumos", category: "Light", purpose: "Illuminates the tip of a wand.", effect: "lumos" },
  { name: "Nox", category: "Light", purpose: "Extinguishes wandlight.", effect: "nox" },
  { name: "Accio", category: "Movement", purpose: "Summons an object toward the caster.", effect: "accio" },
  { name: "Alohomora", category: "Charm", purpose: "Opens a locked door or object.", effect: "alohomora" },
  { name: "Wingardium Leviosa", category: "Movement", purpose: "Lifts and moves a light object.", effect: "leviosa" },
  { name: "Expelliarmus", category: "Defense", purpose: "Disarms an opponent.", effect: "expelliarmus" },
  { name: "Expecto Patronum", category: "Defense", purpose: "Conjures a protective Patronus.", effect: "patronum" },
];

export const sortingQuestions: SortingQuestion[] = [
  { prompt: "An unfamiliar path appears. What draws you onward?", answers: [{ label: "The chance to be first", house: "gryffindor" }, { label: "A goal waiting beyond it", house: "slytherin" }, { label: "The mystery of where it leads", house: "ravenclaw" }, { label: "The people walking beside me", house: "hufflepuff" }] },
  { prompt: "Which quality do you most admire in a friend?", answers: [{ label: "They stand up for others", house: "gryffindor" }, { label: "They know what they want", house: "slytherin" }, { label: "They see the world differently", house: "ravenclaw" }, { label: "They always show up", house: "hufflepuff" }] },
  { prompt: "A difficult task lands on your desk. You begin by…", answers: [{ label: "Taking the first bold step", house: "gryffindor" }, { label: "Finding the smartest shortcut", house: "slytherin" }, { label: "Researching every angle", house: "ravenclaw" }, { label: "Making a steady plan", house: "hufflepuff" }] },
  { prompt: "Where would you spend a free afternoon?", answers: [{ label: "On the open grounds", house: "gryffindor" }, { label: "In a quiet hidden room", house: "slytherin" }, { label: "Among the library shelves", house: "ravenclaw" }, { label: "In the gardens with friends", house: "hufflepuff" }] },
  { prompt: "When plans change suddenly, what helps most?", answers: [{ label: "Trusting my instincts", house: "gryffindor" }, { label: "Seeing the new opportunity", house: "slytherin" }, { label: "Understanding what changed", house: "ravenclaw" }, { label: "Keeping everyone together", house: "hufflepuff" }] },
];
