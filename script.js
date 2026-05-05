const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#34495e',
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 0 }, debug: false }
    },
    scene: { preload: preload, create: create, update: update }
};

const game = new Phaser.Game(config);
let player;
let cursors;

function preload() {
    // Грузим твою картинку прямо из репозитория
    // 'hero' - это ключ, по которому мы будем обращаться к картинке в коде
    this.load.image('hero', 'player.png'); 
}

function create() {
    // Добавляем спрайт в центр экрана
    player = this.physics.add.sprite(400, 300, 'hero');
    
    // Чтобы спрайт не улетал за границы экрана
    player.setCollideWorldBounds(true);

    // Включаем слежку за клавиатурой (Стрелки и WASD подтянутся сами)
    cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys('W,A,S,D');
}

function update() {
    const speed = 250;
    player.setVelocity(0);

    // Логика движения по горизонтали
    if (cursors.left.isDown || this.keys.A.isDown) {
        player.setVelocityX(-speed);
        player.flipX = true; // РАЗВОРАЧИВАЕМ СПРАЙТ ВЛЕВО
    } else if (cursors.right.isDown || this.keys.D.isDown) {
        player.setVelocityX(speed);
        player.flipX = false; // РАЗВОРАЧИВАЕМ СПРАЙТ ВПРАВО
    }

    // Логика движения по вертикали
    if (cursors.up.isDown || this.keys.W.isDown) {
        player.setVelocityY(-speed);
    } else if (cursors.down.isDown || this.keys.S.isDown) {
        player.setVelocityY(speed);
    }
        }

