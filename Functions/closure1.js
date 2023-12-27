// function init() {
//     let name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();
let newvar="hello"
  function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name+" "+newvar);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();