module objects {
    export class Island extends objects.GameObject {
        // member variables
        private _verticalSpeed:number;

        // constructors
        constructor() {
            super("island");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the bottom boundary
           // if(this.x <= (config.Screen.WIDTH + this.width)) {
                if(this.x <= ( this.width)) {
                this.Reset();
            }

        }

         // public methods
         public Start():void {
             this._verticalSpeed = 5; // the island will move down 5ppf

            this.Reset();
        }

        public Update():void {
            this.x += this._verticalSpeed;
            
            this._checkBounds();
        }

        public Reset():void {
            this.y = Math.floor(Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth;
            this.x = -this.height;
        }
    }
}