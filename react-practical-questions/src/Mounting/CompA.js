import React, { Component } from 'react';
import CompB from './CompB';
import Style from './style.module.css'

let style = {
  color: "red",
  fontSize: "150px",
  border: "1px solid black"
}

class CompA extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Yash"
    }
    console.log("CompA : Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("CompA : getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("CompA : componentDidMount");
  }

  render() {
    console.log("CompA : render")
    return (
      <>
        <h1 style={style}>Hello</h1>
        <h1 className={Style.demo}>Hello</h1>
        <CompB />
      </>

    )
  }
}

export default CompA;


// Now we can see the flow.
/*
First compA's constructor() invoked then compA's getDerivedStateFromProps() invoked then It went inside render() and it saw the <CompB/> then it wend insed CompB and it invoked the constructor of compB then it invoked the getDerivedStateFromProps() of compB then it invoked render() of compB then it invoked the componentDidMound() of CompB and after completing all methods of compB , CompA's render() will be done and then compA's componentDidMount will be called.
*/


// Inline CSS: In inline styling basically we create objects of style. And render it inside the components in style attribute using the React technique to incorporate JavaScript variable inside the JSX (Using ‘{ }’ )



/*phases : mounting updating unmounting error handling
//mouting actual dom new element create dom 
//mouting method :-A component mount when it is created and first inserted into DOM i.e it is renderedd for the first time

//constructor() method:- is called before anything else ,when the component is initiated and it is the natural place to set up the inital state and other inital values.

//render():- React renders HTML to the web Page by using a function called render().
//The purpose of the function is to display the specified HTML code inside the specified html element

//componentdidmount() :- method  runs after the component output has been rendered to the dom that means component render (print ) hone k baad componentdidMount() call hoga.
// componentDidMount() only runs once after the first render. componentDidMount() may be called multiple times if the key prop value for the component changes.
// The React useEffect() hook can be used as the functional component alternative for the class component lifecycle method componentDidMount() .

//note :- render() method is required and will always be called ,the others are optional and will be called if you define them .

// 1)construtor first call then 2) render call then 3) componentDidMount call.*/