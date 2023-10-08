
//odd load also does it, it doesn't run this until the entire page can be ran, can also be done in the html body section.
document.addEventListener("DOMContentLoaded", function() {
    // Define an array of planet data in JSON format
const planets = [
    {
        name: "Venus",
        description: "Prepare to be transported to a world of contrasts and extremes! Take a mesmerizing journey to the cloud-kissed highlands of Aphrodite Terra, where rocky outcrops pierce through swirling mists, and witness the mesmerizing beauty of Venus’s skies with hues never seen on Earth!",
        type: "Terrestrial planet with a solid surface.",
        weather: "Venus’s weather is harsh, as it is the hottest planet in our solar system with an average temperature of 847 degrees (F)! It also has sulfuric acid rain, and lightning storms! For those of you who love rain but hate the cold, you’ll love visiting Venus!",
        geologicalActivity: "Venus experiences wide-spread volcanism and periodic resurfacing due to lava floods. If you visit more than once in the span of 150 million years, maybe you’ll get to see an entirely new Venus!",
        atmosphere: "96% carbon dioxide, 3.5% hydrogen. There are also trace amounts of carbon monoxide, sulfur dioxide, water vapor, argon, and helium.",
        moons: "N/A",
        funFacts: [
            "Unlike the other planets in our solar system (except Uranus who spins on its side), Venus spins clockwise on its axis! Scientists still can’t determine why this is; there are theories out there but nothing conclusive!",
            "Venus is super bright, due to the reflective nature of its clouds! If you decide to stop by, make sure to keep some sunglasses on you!"
        ]
    },
    {
        name: "Mars",
        description: "Mars calls out to those with a spirit of exploration. Picture yourself standing on the summit of Olympus Mons, with a horizon stretching as far as the eye can see! Traverse ancient riverbeds, where the echoes of Mars' watery past still linger. Here, you'll walk in the footsteps of rovers, forging a connection with the trailblazers who paved the way for human presence on this world!",
        type: "Terrestrial planet with a solid surface.",
        weather: "Mars has seasons, strong winds, and clouds. Its temperatures typically vary from -14 degrees (F) to -120 degrees (F).",
        geologicalActivity: "Mars is prone to earthquakes and has volcanic activity. It even has the largest mountain/volcano in the solar system, Olympus Mons! Olympus Mons is 3x as tall as Mt. Everest, and about the width of the state of Arizona!",
        atmosphere: "95% carbon dioxide, 3% nitrogen, 1.6% argon. It includes trace amounts of oxygen, carbon monoxide, water, and methane.",
        moons: "Mars’ moons are among the smallest in the solar system. There are 2 and both are irregular in shape.",
        funFacts: [
            "It is believed that Mars is the closest possibly-habitable planet in our solar system.",
            "Several rovers have been sent to Mars, including Curiosity, who was programmed to sing itself happy birthday! If you stay at Mars for a while, maybe you can find the old rovers, or even meet the newest, Perseverance!"
        ]
    },
    {
        name: "Jupiter",
        description: "Prepare to be humbled by the sheer scale of Jupiter, who puts the giant in gas giant! Behold the Great Red Spot, a swirling storm larger than our entire planet, and marvel at the beauty of its cloud bands. Immerse yourself in the vibrant and chaotic atmosphere, where gravity feels like a distant concept. Or, witness the dance of Jupiter's many moons, each a world unto itself!",
        type: "A Jovian gas giant with no solid surface.",
        weather: "The average temperature is -234 degrees (F). The weather of Jupiter is extreme! It consists of windstorms, lightning, and auroras in some areas. This weather can even be seen from space, in the form of colorful bands of clouds and circular storms! For example, the Great Red Spot is a giant red-colored storm on Jupiter that spans about 10,159 miles (bigger than Earth)!",
        geologicalActivity: "N/A",
        atmosphere: "90% hydrogen, 10% helium. A very small fraction of the atmosphere is made up of compounds such as ammonia, sulfur, methane, and water vapor.",
        moons: "Jupiter has 95 moons and the four largest are all unique! We suggest stopping by them all during your trip to Jupiter!",
        funFacts: [
            "Jupiter is the biggest planet in our solar system!",
            "Jupiter is named after a Roman God, and we once sent a spacecraft named Juno to it, which was considered Jupiter’s wife in Roman mythology. And, many of Jupiter’s moons were named after the affairs of Jupiter, delivering a large punchline with Jupiter’s wife visiting him and his affairs!"
        ]
    },

    {
        name: "Saturn",
        description: "Saturn, the ringed wonder of the cosmos, invites you to witness one of the most breathtaking sights our solar system has to offer. Stand high above the iconic rings, and witness their icy particles sparkling! Here, you'll experience the magic of a planet where its beauty is guaranteed to leave a mark on all who venture here!",
        type: "A Jovian gas giant with no solid surface.",
        weather: "Similar to Jupiter, Saturn has a stormy climate. It has an average temperature of -288 degrees (F).",
        geologicalActivity: "N/A",
        atmosphere: "75% hydrogen, 25% helium. It contains trace amounts of methane and water ice.",
        moons: "Saturn has the most moons in the solar system, with 146!",
        funFacts: [
            "Saturn is less dense than water, so if we could build a bathtub big enough, it would float! Maybe we can create the biggest rubber ducky?",
            "While all Jovian planets have rings, Saturn’s are definitely the most prominent! The rings consist of ice, rocks, and dust (as small as a grain of sand to as big as a skyscraper) orbiting Saturn in layers. Although, it is said that Saturn is slowly losing its rings, so you better visit while you can still view them! These rings make Saturn a particularly popular travel destination."
        ]
    },
    {
        name: "Uranus",
        description: "Venture to the outskirts of our planetary neighborhood and discover the beauty of Uranus. Experience the surreal glow of its aquamarine atmosphere, and embark on a journey to Ariel, one of Uranus' moons, where towering ice cliffs offer a breathtaking backdrop to the distant glow of the planet. Uranus beckons with its quiet and faraway majesty, inviting you to explore the depths of our solar system!",
        type: "A Jovian gas giant with no solid surface.",
        weather: "Uranus is the coldest planet in our solar system. The average temperature is -370 degrees (F)... that’s really cold! It also is the planet with the most extreme seasons, because seasons are determined by axis tilt and Uranus is completely tilted on its side!",
        geologicalActivity: "N/A",
        atmosphere: "83% hydrogen, 15% helium, 2% methane.",
        moons: "Uranus has 27 moons, but 5 major moons: Miranda, Ariel, Umbriel, Titania, and Oberon. The moons are sometimes referred to as 'literary moons' because they are named after Shakespearean characters, along with a couple being named after characters from the works of Alexander Pope. A great planet destination for you literary geeks!",
        funFacts: [
            "One of its moons, Miranda, has the tallest cliff in the solar system!",
            "Similar to Neptune, it rains diamonds on Uranus! These are the perfect destinations for your marriage proposals!"
        ]
    },
    {
        name: "Neptune",
        description: "Neptune offers a voyage into a realm of vibrant mystery. Dive into the heart of its turbulent atmosphere, a canvas of swirling storms and ethereal blues! This is an expedition into a world where beauty and chaos dance in perfect harmony.",
        type: "A Jovian gas giant with no solid surface.",
        weather: "Neptune has extreme weather with huge storms and the most violent winds in the solar system. Don’t take an umbrella if you decide to visit, but a perfect place for wind gliding! Its average temperature is -353 degrees (F).",
        geologicalActivity: "N/A",
        atmosphere: "80% hydrogen, 19% helium, 2% methane.",
        moons: "Neptune has 14 moons. Psamathe and Neso are the outer two small moons of Neptune. They have the largest orbits of any moons discovered in the solar system to date!",
        funFacts: [
            "Neptune is the last planet in our solar system, so if you need a long getaway - look no further!"
        ]
    },
    {
        name: "Pluto",
        description: "Journey to the distant edges of our solar system and stand on the heart-shaped plains of the largest dwarf planet in the system, Pluto! Here, the landscape tells a story of ancient forces and cosmic evolution. This is a pilgrimage to a world that embodies the very essence of our solar system's boundless wonder.",
        type: "Dwarf planet with a solid surface.",
        weather: "The average temperature of Pluto is -387 degrees (F).",
        geologicalActivity: "N/A",
        atmosphere: "90% nitrogen, 10% methane. Contains trace amounts of carbon monoxide.",
        moons: "Despite this dwarf planet being smaller than our own moon, it has 5 moons of its own!",
        funFacts: [
            "Pluto was reclassified from a planet to a dwarf planet in 2006.",
            "Pluto lies within the Kuiper belt, where many comets come from!",
            "Due to its elliptical orbit, sometimes Pluto is actually closer to the Sun than Neptune!",
            "Pluto is the largest dwarf planet in our solar system! If you’re looking for something small, but more interesting than a moon, this is the perfect destination for you!"
        ]
    
    
    },
    {
        name: "Sun",
        description: "Prepare for the ultimate celestial adventure as you journey closer to the heart of our solar system than ever before - the Sun itself. Witness the mesmerizing dance of solar flares, painting the solar system with fiery splendor. Feel the raw power of the Sun's energy, a force to not be reckoned with! This is an odyssey to the very source of light and life as we know it, and an experience that will truly be unforgettable.",
        type: "Star.",
        atmosphere: "The Sun has 3 layers within its atmosphere - the Photosphere, the Chromosphere, and the Corona. The Sun is composed of 70% hydrogen, and 28% helium.",
        funFacts: [
            "The Sun defies physics - its Corona is millions of Kelvin hotter than the Photosphere which thermodynamics says does not make sense because the Photosphere is closer to the heat source (core) of the Sun than the Corona. One theory as to why this is is that nanoflares heat up the corona, although scientists don’t have a conclusive reason!",
            "The Sun has eruptions of gas known as solar flares which mess with satellites and disrupt signals. So, if you swing by the Sun or visit planets without good magnetic fields, your cellphone may not work well!"
        ]
    }
    // Add more planets as needed
];

// Function to generate HTML content for a planet
/*function generatePlanetHTML(planet) {
    const planetHTML = `
        <h2>${planet.name}</h2>
        <p class="planet-description">${planet.description}</p>
        <p><span class="planet-info">Type:</span> ${planet.type}</p>
        <p><span class="planet-info">Weather:</span> ${planet.weather || 'N/A'}</p>
        <p><span class="planet-info">Geological activity:</span> ${planet.geologicalActivity || 'N/A'}</p>
        <p><span class="planet-info">Atmosphere:</span> ${planet.atmosphere || 'N/A'}</p>
        <p><span class="planet-info">Moons:</span> ${planet.moons || 'N/A'}</p>
        <p><span class="planet-info">Fun Facts:</span></p>
        <ul class="fun-facts">
            ${planet.funFacts.map(fact => `<li>${fact}</li>`).join('')}
        </ul>
    `;
    return planetHTML;
}

*/

function generatePlanetHTML(planet) {
    const planetHTML = `
        <h2 id="${planet.name.toLowerCase().replace(/ /g, '-')}-anchor">${planet.name}</h2>
        <p class="planet-description">${planet.description}</p>
        <p><span class="planet-info">Type:</span> ${planet.type}</p>
        <p><span class="planet-info">Weather:</span> ${planet.weather || 'N/A'}</p>
        <p><span class="planet-info">Geological activity:</span> ${planet.geologicalActivity || 'N/A'}</p>
        <p><span class="planet-info">Atmosphere:</span> ${planet.atmosphere || 'N/A'}</p>
        <p><span class="planet-info">Moons:</span> ${planet.moons || 'N/A'}</p>
        <p><span class="planet-info">Fun Facts:</span></p>
        <ul class="fun-facts">
            ${planet.funFacts.map(fact => `<li>${fact}</li>`).join('')}
        </ul>
    `;
    return planetHTML;
}


// Get the container element to display planet information
const planetInfoContainer = document.getElementById("planet-info-container");

// Loop through the planets and generate HTML content for each one
planets.forEach(planet => {
    const planetHTML = generatePlanetHTML(planet);
    planetInfoContainer.innerHTML += planetHTML;
});

});

