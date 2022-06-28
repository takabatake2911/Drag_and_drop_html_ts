const WHITE = "#FFFFFF";
const RED = "#FF0000";
const BLUE = "#0000FF";
const $root = document.getElementById("root");
class App {
    boxList = [];
    main() {
        window.addEventListener("keydown", (event) => {
            if (event.key === "d") {
                this.appendBox();
            }
        });
    }
    appendBox() {
        const color = Math.random() < 0.5 ? RED : BLUE;
        const box = new Box(100, 100, color);
        box.moveTo(window.innerWidth / 2, window.innerHeight / 2);
        this.boxList.push(box);
    }
}
class Box {
    isClicked = false;
    element;
    width;
    height;
    color;
    constructor(width = 100, height = 100, color = BLUE) {
        this.width = width;
        this.height = height;
        this.element = document.createElement("div");
        this.element.classList.add("box");
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.backgroundColor = color;
        this.element.addEventListener("mousedown", () => {
            this.isClicked = true;
        });
        this.element.addEventListener("mouseup", () => {
            this.isClicked = false;
        });
        window.addEventListener("mousemove", (event) => {
            if (!this.isClicked) {
                return;
            }
            this.moveTo(event.x, event.y);
        });
        $root.appendChild(this.element);
    }
    moveTo(x, y) {
        this.element.style.left = `${x - this.width / 2}px`;
        this.element.style.top = `${y - this.height / 2}px`;
    }
}
const app = new App();
app.main();
//# sourceMappingURL=index.js.map