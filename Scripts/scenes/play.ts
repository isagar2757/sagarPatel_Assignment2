module scenes {
    export class Play extends objects.Scene {
        
        // member variables
        private _plane:objects.Plane;
        private _ocean:objects.Ocean;
        private _island:objects.Island;
       
        private _cloudNum:number;
        private _clouds:objects.Cloud[];
       
        private _bullets:objects.Bullet[];
       
      

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _buildClouds():void {
            for (let count = 0; count < this._cloudNum; count++) {
                this._clouds.push(new objects.Cloud());
                //this._clouds[count] = new objects.Cloud();
                
            }
        }

        private _buildBullets():void {
            for (let count = 0; count < this._cloudNum; count++) {
                this._bullets.push(new objects.Bullet());
                //this._clouds[count] = new objects.Cloud();
                
            }
        }


      
        // public methods
        public Start():void {

            this._plane = new objects.Plane();
            this._ocean = new objects.Ocean();
            this._island = new objects.Island();
           
            this._cloudNum = 5;
            // create an empty Array List-like object of clouds
            this._clouds = new Array<objects.Cloud>();
            this._bullets = new Array<objects.Bullet>();
            this._buildClouds();
            this._buildBullets();
           
            this.Main();
        }

        public Update():void {
            this._plane.Update();
            this._ocean.Update();
          //  this._island.Update();
           
            managers.Collision.check(this._plane, this._island);

            this._clouds.forEach(cloud => {
                cloud.Update();
                managers.Collision.check(this._plane, cloud);
            });

            // this._bullets.forEach(bullet => {
            //     this._clouds.forEach(cloud => {
                    
            //         managers.Collision.check(cloud,bullet);
                    
            //         // if(bullet.isColliding){
                        
            //         //     this.removeChild(cloud);
            //         //     this._clouds.push(new objects.Cloud());
            //         //     this.removeChild(bullet);
            //         // }
                    
            //     });
            //     this.addChild(bullet);
            //     bullet.Update();
               
                
            // });

            this._bullets.forEach(bullet => {
                
                bullet.Update();
                managers.Collision.check(this._island, bullet);
                if(bullet.isColliding){
                        
                                //this.removeChild(this._island);
                               this._island.x = 0;
                                this.removeChild(bullet);
                            }
                            this._island.Update();
                            //this.addChild(this._island);
                            this.addChild(bullet);
            });

            

           
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log("Started - PLAY SCENE");
           
            // add the Ocean object to the scene
            this.addChild(this._ocean);

            // add the Island object to the scene
            this.addChild(this._island);

            // add the Plane object to the scene
            this.addChild(this._plane);

            // add the Cloud(s) to the scene
            for (const cloud of this._clouds) {
                this.addChild(cloud);
            }

            for (const bullet of this._bullets) {
                this.addChild(bullet);
            }
            this.addChild(managers.Game.scoreBoard.LivesLabel);
            this.addChild(managers.Game.scoreBoard.ScoreLabel);
           
        }

        

    }
}