class Hello {
    private count = 0;

    public constructor() {
        console.log("Hello World");
    }

    public tick():void {
        for (var count = 0; this.count < 10; this.count++) {
            // ++this.count;
            console.log('count', this.count);
        }
    }
}

var hello = new Hello();

function main() {
    hello.tick();
    setTimeout(main, 1000);
}

main();
