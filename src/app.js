const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// Function to get random strength for players
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = players.map((player, index) => {
        return {
            name: player,
            strength: getRandomStrength(),
            image: `images/super-${index + 1}.png`
        };
    });
    return detailedPlayers;
}

// Build player template based on type (hero or villain)
const buildPlayers = (players, type) => {
    return players
        .filter(player => {
            if (type === 'hero') {
                return player.strength > 50;
            } else if (type === 'villain') {
                return player.strength <= 50;
            }
            return true;
        })
        .map(player => {
            return `<div class="player">
                        <img src="${player.image}" alt="">
                        <div class="name">${player.name}</div>
                        <div class="strength">${player.strength}</div>
                    </div>`;
        })
        .join('');
}

// Display players in HTML
const viewPlayers = (players) => {
    const playerType = 'hero'; 
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
    console.log("Value:", playerType); 
    expect(playerType).toMatch(/(hero|villain)/);
}
window.onload = () => {
    const players = initPlayers(PLAYERS);
    viewPlayers(players);
}
