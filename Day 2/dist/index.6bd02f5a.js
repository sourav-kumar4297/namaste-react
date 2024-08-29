const reactroot = ReactDOM.createRoot(document.querySelector(".reactroot"));
const element = React.createElement("h3", {
    id: "heading",
    key: "0"
}, "Hello World from React");
const element2 = React.createElement("h3", {
    id: "heading2",
    key: "1"
}, "Hello2 World from React");
const element3 = React.createElement("div", {
    id: "container3",
    key: "2"
}, "this is a new div");
reactroot.render([
    element,
    element2,
    element3
]);

//# sourceMappingURL=index.6bd02f5a.js.map
