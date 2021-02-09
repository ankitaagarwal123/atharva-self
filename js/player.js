class Player {
    constructor() {
        this.index = null;
        this.xPosition = random(100, 700);
        this.yPosition = random(100, 800);
        this.name = null;
        this.life = 3;
        this.bullet = 6;
      

    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            xPosition: this.xPosition,
            yPosition: this.yPosition,
            life: this.life,
            bullets: this.bullet,
          
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }


  
}
