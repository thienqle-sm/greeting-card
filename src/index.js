import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import importedImage0 from './assets/A0000.jpg'
import importedImage1 from './assets/A0001.jpg'
import importedImage2 from './assets/A0002.jpg'
import importedImage3 from './assets/A0003.jpg'
import importedImage4 from './assets/A0004.jpg'
import musicBackGround from './assets/Beautiful_Memories_David_Fesliyan.mp3'
// import importedImage5 from './assets/A0005.jpg'
// import importedImage6 from './assets/A0006.jpg'

import cakeImg from './assets/cake.jpg';

const WIDTH = 1024;
const HEIGHT= 768;

var importedImages = [importedImage0,importedImage1,importedImage2,
                        importedImage3,importedImage4]

class MyGame extends Phaser.Scene
{
    
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('cake', cakeImg);
        for(let i=0;i<=4;i++){
            this.load.image(`img${i}`, importedImages[i]);
        }
        this.load.audio('backgroundMusic',musicBackGround)
        
    }
      
    create ()
    {

        this.duration = 2000;


        let cake = this.add.image(500,500, `cake`)
        cake.alpha = 0
        cake.setScale(0.2)

        const images = [];

        


        let img = this.add.image(200,100, `img${0}`)
        img.alpha = 0
        img.setScale(0.2)
        images.push(img)

        img = this.add.image(500,180, `img${1}`)
        img.alpha = 0
        img.setScale(0.2)
        images.push(img)

        img = this.add.image(800,100, `img${2}`)
        img.alpha = 0
        img.setScale(0.2)
        images.push(img)

        img = this.add.image(200,300, `img${3}`)
        img.alpha = 0
        img.setScale(0.2)
        images.push(img)

        img = this.add.image(800,300, `img${4}`)
        img.alpha = 0
        img.setScale(0.2)
        images.push(img)

        const shader = this.add.shader('HSL', 400, 300, 512, 512);
               
        // for(let i=0;i<=4;i++){
        //     this.tweens.add({
        //         targets: images,
        //         alpha: 1,
        //         duration: 5000,
        //         ease: "Power2",
        //         yoyo: true,
        //         loop: -1
        //     });
        // }

        let leftStr = `
    Happy birthday Miguel! 
    You're getting old 
    but I'm thankful to God 
    that I still remain young :D
    Sending you all the cakes, 
    hugs and happiness. 
    Enjoy your day Miguel!

    Remya
        `
        let leftText =  this.add.text(10, 100, leftStr, { fontSize: '16px', fill: '#FFA500' });
        leftText.alpha = 0;
        let rightStr = `
                      Happy birthday sir!
                 This is the time you can
                   forget about your past, 
                     you cannot change it.
        You can forget about your present.
          I didn't buy you one this time.    
                    Wish you all the best.

                                     Thien
        `
        let rightText =  this.add.text(600, 100, rightStr, { fontSize: '16px', fill: '#ff66ff' });
        rightText.alpha = 0;

        let timeline = this.tweens.createTimeline();
        timeline.add({
                    targets: images[0],
                    alpha: 1, duration: this.duration, ease: "Power2", yoyo: true,reverse:false,
                    onStart: function() {
                                    
                        this.sound.play(`backgroundMusic`);
                    }.bind(this)
                });
        timeline.add({
                    targets: images[2],
                    alpha: 1, duration: this.duration, ease: "Power2", yoyo: true,reverse:false
                });
        timeline.add({
            targets: images[3],
            alpha: 1, duration: this.duration, ease: "Power2", yoyo: true,reverse:false
        });
        timeline.add({
            targets: images[4],
            alpha: 1, duration: this.duration, ease: "Power2", yoyo: true,reverse:false
        });

        timeline.add({
                    targets: images[1],
                    alpha: 1, duration: this.duration, ease: "Power2", yoyo: true,
                    reverse: false,
                    onComplete: function () {
                        images[1].alpha=1;
                    },
                });
        timeline.add({
            targets: cake,
            alpha: 1, duration: this.duration, ease: "Power2", yoyo: true,
            reverse: false,
            onComplete: function () {
                cake.alpha=1;
            }
        });
        timeline.add({
            targets: leftText,
            alpha: 1, duration: this.duration, ease: "Power2", yoyo: true,
            reverse: false,
            onComplete: function () {
                leftText.alpha=1;
            }
        });
        timeline.add({
            targets: rightText,
            alpha: 1, duration: this.duration, ease: "Power2", yoyo: true,
            reverse: false,
            onComplete: function () {
                rightText.alpha=1;
            }
        });

        let centerText =  this.add.text(WIDTH/2-150,HEIGHT/2, "Click me", { fontSize: '64px', fill: '#FFA500' });
        this.input.on('pointerdown', function(pointer){
            timeline.play()
            centerText.alpha = 0;
        });
        
       

    }
}



const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: WIDTH,
    height: HEIGHT,
    scene: MyGame,
    // duration: 1000
};

const game = new Phaser.Game(config);
