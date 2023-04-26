export const QuesAns = [
  {
    id: "1",
    ques: " What do you understand by refs in React?",
    ans:
      "useref is used to store the reference of an elemnnt and helps in manipulating and to pass to other components.if we have to store the value of an elements thhen there comes the need of usestate.useref do not re render any of the dom elements whether we  made n numbers of changes in our useref.in use ref we use this .current  property does not cause re render.useref returns a mutable ref object whose .current property is initialized to passed arguments that is initial value . this return object will persist for the full time of the components.now if we have to know that is it a useref then we just have to see two thing that is it 1. should be an object and that object should have the .currents value.2. it never re render the dom elements no matters how many changes we havedone on the components."
  },
  {
    id: "2",
    ques: "What are atoms in recoil ?",
    ans:
      "recoil is the state managment library which have two thing atom and selectors.atoms are the basicallly the units of states. if we want to do pass data from one components to another then we can use two method the one is the props and the other is with the help of recoil . and where ever we want that data we can just import that from recoil. there are basically two thing in the recoil the one is the key and that should be unique in the operation or wholecode the next is the default value if we want then only we can give it depends on ourself."
  },
  {
    id: "3",
    ques: "Explain useRecoilValue , useSetRecoilState, useRecoilState.",
    ans:
      "userecoilvalue only read the atom and userecoilstate is used for both the work that is read and write and usesetrecoilstate is used for only reading the property of atom."
  },
  {
    id: "4",
    ques: "Why do we need a Router in React?",
    ans:
      "we need routers in react because through this we can do naviagation or routing means accessing one page to another page . when we do this we need to give the path which define that where to move or navigate and elements gives us the components that to be shown on that particular routing or paths."
  },
  {
    id: "5",
    ques: "What is client side rendering .",
    ans:
      "the client side rendering also called as CSR .first of all i will eplain with one exaple that is react.js .it is a CSR because when the user or client request the site then the corresponding site will accepts that request and then show alll the library and stucture of react .js page  as the client refresh the page then the updated data is created in the virtual dom because we all know that react basically works on the method of virtual dom . as new data is updated on the virtual dom them react dom takes that updated data on the dom and shows on the ui."
  },
  {
    id: "6",
    ques: "What is server side rendering .",
    ans:
      "the server side rendering also called as SSR .first of all i will eplain with one exaple that is next.js . in this what happens is that when the client makes request then the site shows all the structure as well as extra feature for example client side rendering , updating the ui .and if the client want to see home page then this server side rendering will not referesh the page but it will only re direct to that path as we were doing in the routing. "
  },
  {
    id: "7",
    ques: "What are the different data types present in JavaScript",
    ans:
      "there are basically eight data type in the java script and they are string, number, boolean, undefined, null , symbol, bigit, object.and these ar also knowns as primitives data types except object because all  of them provides immmutable values.null and undefined do not have any object wrapper .null is defined the absence of an object but undefined indicates the absences of a value."
  },
  {
    id: "8",
    ques: "Explain type of method in javascript . What is type of null value ?",
    ans:
      "the type of method in js is the type of null the type of null is object and now i will tell u about null .the null indicates an empty value .it is essentiallly a placeholder that get vanished as written something there. the null value give object as the type of null ."
  },
  {
    id: "9",
    ques:
      " What is the output of 10+20+30 in JavaScript ? Explain it briefly .",
    ans:
      "as 10+20+30 in js will give arthematic operation but actuall calculation will not be performed and we know that in js codes get trrigered gro left to right  so the answer will be 102030 as we cant add number to the string ."
  },
  {
    id: "10",
    ques:
      "xplain Math.random() . Write code to generate 3 digit random number .",
    ans:
      "math.random () basically return a random number . the function contains methods of performing basics numeric operation such as elementary exponential ,logorithm, squareroot, trigo.. it return value with a positive sign , greater than . less than or equal to . this method is syncronous to allow correct use by more than one thread ."
  }
];
