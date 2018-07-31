module scenes {
    export class Instruction extends objects.Scene {
        // member variables
        private line1: objects.Label;
        private line2: objects.Label;
        private line3: objects.Label;
        private _startButton: objects.Button;
        private _ocean: objects.Ocean;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._ocean = new objects.Ocean();
            this.line1 = new objects.Label("Don't touch the enemies", "40px", "Consolas", "#E07AA2", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT-200, true);
            this.line2 = new objects.Label("Move Your Character with Mouse", "40px", "Consolas", "#E07AA2", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT-100, true);
            this.line3 = new objects.Label("You have 5 Lives", "40px", "Consolas", "#E07AA2", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 400, true);

            this.Main();
        }

        public Update():void {
            this._ocean.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log("Instruction - INST SCENE");
            this.addChild(this._ocean);
            this.addChild(this.line1);
            this.addChild(this.line2);
            this.addChild(this.line3);
            this.addChild(this._startButton);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}