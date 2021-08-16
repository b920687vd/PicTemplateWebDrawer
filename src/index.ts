import './index.css';

export class Main {
    public outputBox:HTMLElement;
    public ctrlBox:HTMLElement;
    public init(){
        this.outputBox = document.getElementById("box");
        this.ctrlBox = document.getElementById("ctrl");

        this.outputBox.innerHTML = "output";
        this.ctrlBox.innerHTML = "ctrl";
    }
    //...
    public IndexPage(): string {
        return "Hello World";
    }
}

new Main().init();