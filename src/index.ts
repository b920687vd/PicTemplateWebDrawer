import FileSaver = require("file-saver");
import * as _html2canvas from "html2canvas";
const html2canvas:any = _html2canvas;
import './index.css';

export class Main {
    public outputBox:HTMLElement;
    public ctrlBox:HTMLElement;

    public modelBoxBlock:HTMLElement;
    public init(){
        this.outputBox = document.getElementById("outputBox");
        this.ctrlBox = document.getElementById("ctrl");
        this.modelBoxBlock = document.getElementById("model-questionBlock");
        (window as any).addBlock = ()=>{
            this.addBlock();
        }
        (window as any).saveFile = ()=>{
            this.saveFile();
        }
    }
    public getInputData():{title:string,height:string}{
        return {
            title:(document.getElementById("ctrl-title-input") as HTMLInputElement).value,
            height:(document.getElementById("ctrl-height-select") as HTMLSelectElement).value,
        }
    }
    //...
    public IndexPage(): string {
        return "Hello World";
    }
    public addBlock(){
        let newBlock = this.modelBoxBlock.cloneNode(true) as HTMLElement;
        newBlock.className = "questionBlock "+this.getInputData().height;
        newBlock.querySelector(".questionBlock-title").innerHTML = this.getInputData().title;
        this.outputBox.appendChild(newBlock);
    }

    public saveFile(){
        (html2canvas(document.querySelector("#outputBox")) as Promise<HTMLCanvasElement>).then(canvas => {
            canvas.toBlob(function(blob) {
                FileSaver.saveAs(blob, "pretty image.png");
            });
        });
    }
}

new Main().init();