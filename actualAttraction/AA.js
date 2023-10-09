

// JavaScript code

// Sample attractions data in JSON format
const attractions = {
    "Caloris Basin": {
        description: [
            "Explore the Caloris Basin!",
            "Set your sights on the Caloris Basin, a colossal impact crater on the surface of Mercury! Here, you'll stand on the edge of a scar that tells the story of the solar system's ancient cataclysms. Feel the weight of history in the rugged terrain and marvel at the breathtaking expanse, and uncover the secrets of a world shaped by cosmic forces!",
            "Unearth Geological Wonders!",
            "Embark on a journey through time as you traverse the terrain of the Caloris Basin. With its striking geological formations, including towering mesas and deep chasms, this otherworldly crater is a treasure trove for geology enthusiasts and curious minds alike. Explore volcanic plains formed by molten lava flows eons ago, and marvel at the basin's intricate network of fractures and scarps!",
            "Awe-Inspiring Views!",
            "Prepare to be captivated by the breathtaking vistas that await you at the Caloris Basin. The proximity to the Sun, combined with Mercury's lack of an atmosphere, grants visitors a panorama like no other. Witness the Sunrises and Sunsets that blaze across the horizon in a vivid display! Gaze upon the starry expanse of space, unobstructed by the typical atmospheric interference found on Earth. Whether you're an astronomy buff, a lover of the sublime, or simply seeking an experience that transcends the ordinary, the Caloris Basin offers a glimpse into the wonders of the cosmos that will leave you forever changed!"
        ],
        planet: "Mercury",
        dist_from_earth: 200, // AU This is a temp value
    },
    "Olympus Mons": {
        description: [
            "Conquer New Heights on Olympus Mons!",
            "Scale the towering heights of Olympus Mons, the tallest volcano in the solar system, on the rust-colored plains of Mars! As you ascend, the horizon stretches before you, offering a panoramic view of the Martian landscape. It towers at a whopping 72,000 ft, is 3x the height of Mt. Everest, and is as wide as the state of Arizona! This is an undefeated challenge that is perfect for hikers and climbers alike!",
            "Unravel the Secrets of Martian Geology!",
            "Olympus Mons offers a captivating window into the geological history of Mars. The mountain's expansive slopes evoke wonder and curiosity about the planet's turbulent past. Traversing the rugged terrain, visitors will encounter ancient lava flows, dramatic cliffs, and captivating volcanic features that show the volcano's dynamic past. Marvel at the colossal rifts and trenches, each telling a story of the planet's evolution. For geology enthusiasts and curious explorers, Olympus Mons is an unrivaled destination to delve into the mysteries of geology.",
            "Panoramic Views of a Red World!",
            "Prepare to be spellbound by the panoramic views that await you atop Olympus Mons. From its lofty peak, witness the vast, rust-colored expanse of the Martian surface, stretching out as far as the eye can see. The thin Martian atmosphere provides a crystal-clear vantage point, allowing visitors to gaze upon the nearby Tharsis volcanic plateau and the distant Valles Marineris, a canyon system of enormous scale. As the sun sets over the horizon, you'll experience a sense of wonder that only Olympus Mons can deliver. For those seeking a beautiful and challenging adventure, Olympus Mons promises an unforgettable journey!"
        ],
        planet: "Mars",
        dist_from_earth: 300, // AU this is a temp value
    },

    "The Great Red Spot": {
        description: [
                    "It’s Called “Great” for a Reason!",
                    "Journey to Jupiter and behold the spectacle of the Great Red Spot, a storm that has raged for centuries. Stand on a floating platform amidst the churning clouds, witnessing the raw power of Jupiter's atmosphere, and feel the pulse of a storm larger than our entire planet! This storm is truly a testament to the incredible energy of the cosmos!",

                    "Uncover a Giant’s Fury!",
                    "Witness the swirling maelstrom of gasses, where winds reach speeds of up to 400 miles per hour! As you delve into the heart of this colossal storm, you'll have the chance to observe its intricate cloud patterns and shifting dynamics, offering a unique insight into the complex atmospheric processes of this gas giant. For those with a passion for planetary science, the Great Red Spot is a perfect destination!",

                    "Large-Scale Views!",
                    "From the vantage point of a spacecraft, you'll be treated to a perspective of Jupiter that few have ever witnessed. Gaze upon the swirling bands of clouds that envelop the planet, creating a hypnotic kaleidoscope of colors and patterns. Marvel at the sheer scale of Jupiter, a world so vast that it could contain over 1,300 Earths. As you orbit above this planet, you'll gain a newfound appreciation for the immense forces that shape our solar system. For those seeking an adventure that transcends the size of our home planet, the Great Red Spot promises an unforgettable journey!",
        ],
        planet: "Jupiter",
        dist_from_earth: 400, // AU this is a temp value
    },

    "Enceladus' Geysers": {
        description: [
            "Geysers Geysers Geysers!",
            "Has hot Earth geysers gotten boring? Embark on a mission to Saturn's moon Enceladus and witness the breathtaking geysers that erupt from its icy surface! Prepare to gaze in wonder as plumes of water ice shoot into space, and feel the pulse of a world alive with geologic activity! This is an opportunity to witness a cosmic spectacle and a display of nature's power on a scale beyond our understanding!",

            "Witness the Dynamic Forces of a Frigid Moon!",
            "Enceladus' geysers are a testament to the dynamic geological activity hidden within this icy moon. The towering jets, propelled by powerful forces beneath the surface, offer a glimpse into the moon's subsurface ocean. As you journey to the moon's southern polar region, you'll witness these spectacular eruptions, with plumes reaching heights of hundreds of kilometers! These look mesmerizing against the backdrop of Saturn’s rings!",

            "Dive Into a Hidden Ocean!",
            "Embark on an extraordinary adventure to explore the depths of Enceladus' icy crust. This newly unveiled attraction offers travelers the chance to descend into the moon's subsurface ocean, a realm of wonders hidden beneath layers of frozen beauty. Equipped with state-of-the-art submersibles, visitors will have the opportunity to witness new underwater landscapes that have never before been seen by human eyes!",

        ],
        planet: "Saturn",
        dist_from_earth: 500, //AU this is a temp value
    },

    "Saturn's Rings": {
        description: [
            "Orbit with Dazzling Ring Systems!",
            "Ascend in orbit around Saturn and witness the unparalleled beauty of its magnificent ring system. Here, you'll stand in awe of icy particles that shimmer like stardust! Imagine the privilege of witnessing a sight that has captivated stargazers for centuries. It is truly a testament to the elegance of the cosmos! ",
            "If You Like It, Put a Ring on It!",
            "Explore the myriad of ringlets and divisions that adorn Saturn, each a product of intricate gravitational interactions and cosmic collisions. Marvel at the sheer scale of these rings, spanning hundreds of thousands of kilometers across, with a thickness of mere meters! For those with a passion for detailed planetary science, or who just want a cute way to propose to their love, Saturn's rings are an extraordinary destination!",
            "Stop By Titan During Your Orbit!",
            "Don’t let the Saturn journey end! For those of you sailors, take a cruise ship tour of Titan across its vast methane oceans, with the beautiful background of Saturn’s rings to compliment! Surf the rippling waves! Stare in awe of its reflection of the starry skies and wisps of mist! Saturn’s rings are a spectacle of their own, but are not far from plenty of other great destinations for those indecisive travelers!",

        ],
        planet: "Saturn",
        dist_from_earth: 600,
    }
    
    // Add more attractions here
};

// Function to generate attractions checkboxes
function generateAttractionCheckboxes(attractions) {
    const attractionList = document.getElementById("attraction-list");

    for (const attractionName in attractions) {
        if (attractions.hasOwnProperty(attractionName)) {
            const attraction = attractions[attractionName];

            const label = document.createElement("label");
            
            // Create a <strong> element for the attraction title (bold)
            const attractionTitle = document.createElement("h3");
            attractionTitle.textContent = attractionName;
            


            // Create <p> elements for planet and distance from Earth
            /*const planetText = document.createElement("p");
            planetText.innerHTML = "Planet: " + attraction.planet;
            const dfeText = document.createElement("p"); // Distance from Earth
            dfeText.innerHTML = "Distance from Earth: " + attraction.dist_from_earth + " AU";
            */

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "attraction";
            checkbox.value = attractionName;

            // Append the elements to the label
            label.appendChild(attractionTitle);
            //label.appendChild(document.createElement("br")); // Add a line break
            //label.appendChild(planetText);
            //label.appendChild(document.createElement("br")); // Add a line break
            //label.appendChild(dfeText);
            //label.appendChild(document.createElement("br")); // Add a line break
            

            // Append the label to the attraction list
            attractionList.appendChild(label);


            // Loop through the description array and create <p> elements
            for (const descriptionText of attraction.description) {
                const descriptionParagraph = document.createElement("p");
                descriptionParagraph.textContent = descriptionText;
                label.appendChild(descriptionParagraph);
            }

            
            //var checkDiv = document.createElement("div");
            //checkDiv.style = "vertical-align: baseline";

            var checkboxText = document.createElement("p");
            checkboxText.innerHTML = "Add to Cart - ";
            checkboxText.style = "display: inline-block";
            label.appendChild(checkboxText);

            
            label.appendChild(checkbox);

            label.appendChild(document.createElement("br")); // Add a line break
        }
    }
}

// Call the function to generate attraction checkboxes
generateAttractionCheckboxes(attractions);




/*
// Function to generate attractions checkboxes
function generateAttractionCheckboxes(attractions) {
    const attractionList = document.getElementById("attraction-list");

    for (const attractionName in attractions) {
        if (attractions.hasOwnProperty(attractionName)) {
            const attraction = attractions[attractionName];
            
            const label = document.createElement("label");
            label.textContent = attractionName;

            const planet_text = document.createElement("p");
            planet_text.innerHTML = attractions[attractionName].planet;

            const dfe_text = document.createElement("p"); //Distance from Earth
            dfe_text.innerHTML = attractions[attractionName].dist_from_earth;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "attraction";
            checkbox.value = attractionName;

            label.appendChild(checkbox);
            attractionList.appendChild(label);

            attractionList.appendChild(planet_text);
            attractionList.appendChild(dfe_text);

            // Add a line break for better spacing
            attractionList.appendChild(document.createElement("br"));
        }
    }
}

*/



// Function to add selected attractions to the queue
function addToQueue() {
    const selectedAttractions = [];

    const checkboxes = document.querySelectorAll("input[name='attraction']");

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const attractionName = checkbox.value;
            selectedAttractions.push(attractionName);
//checkbox.checked = false; // Uncheck the checkbox after adding to the queue
        }
    });

    const queueList = document.getElementById("queue-list");
    queueList.innerHTML = ""; // Clear the existing queue

    selectedAttractions.forEach((attractionName) => {
        const listItem = document.createElement("li");
        listItem.textContent = attractionName;
        queueList.appendChild(listItem);
    });
}

//generateAttractionsCheckboxes(attractions) was already called above - this call is a duplicate
// Call the function to generate attraction checkboxes
//generateAttractionCheckboxes(attractions);

// Add an event listener to the "Add Selected Attractions to Queue" button
const addToQueueButton = document.getElementById("add-to-queue");
addToQueueButton.addEventListener("click", addToQueue);
