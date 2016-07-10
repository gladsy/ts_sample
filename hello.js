var Hello = (function () {
    function Hello() {
        this.count = 0;
        console.log("Hello World");
    }
    Hello.prototype.tick = function () {
        for (var count = 0; this.count < 10; this.count++) {
            // ++this.count;
            console.log('count', this.count);
        }
    };
    return Hello;
}());
var hello = new Hello();
function main() {
    hello.tick();
    setTimeout(main, 1000);
}
main();
//# sourceMappingURL=hello.js.map