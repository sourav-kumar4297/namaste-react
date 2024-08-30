import React from "react";
import ReactDOM from "react-dom/client";

// Parcel Features 
//1. Created a Server
//2. HMR - Hot Module Replacement
//3. Caching while development
//4. Bundling
//5. Minify
//6. File watcher alogorithm -- using C++(Execute files when they change)
//7. Clearing the code (like console.log())
//8. Dev and Production build mode
//9. Super fast build mode
//10. Image optimization
//11. Compression
//12. Compatable with the older version of browsers
//13. HTTPS support on - Development mode also
//14. Port Number Support -[if you are using port 1234 and run another app side by side then parcel 
//    will take care of it and provide another port number to the other app as well]
//15. Consistent hashing algorithm
//16. Zero Config
//17. Tree Shaking





const reactroot = ReactDOM.createRoot(document.querySelector(".root"));
const element = React.createElement(
  "h3",
  { id: "heading", key: "0" },
  "Hello World from React"
);
const element2 = React.createElement(
  "h3",
  { id: "heading2", key: "1" },
  "Hello2 World from React"
);
const element3 = React.createElement(
  "div",
  { id: "container3", key: "2" },
  "this is a new div" 
);

reactroot.render([element, element2, element3]);
