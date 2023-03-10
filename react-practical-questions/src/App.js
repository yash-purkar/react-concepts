import './App.css';
import PracticeC from './PracticeC'
import CompA from './Mounting/CompA';
import Form from './Components/Form';
import Routing from './Components/Router/Routing';
import Product from './Updating/Product';
import Posts from './Axios/Posts';
import AxiosPost from './Axios/AxiosPost';
import UseState from './Hooks/UseState';
import UseEffect from './Hooks/UseEffect';
import PrevState from './Hooks/PreviousState';
import HookWithObject from './Hooks/HookWithObject'
import WithArray from './Hooks/WithArray'
import Updating from './Updating/Updating'
import A from './contextApi/A';
import Student1 from './HOC/Student1';
import Student2 from './HOC/Student2';

function App() {
  return (
    <>
      {/* // <PracticeC isValue={false} />
    // <CompA />
    // <Form />
    // <Routing />
    // <Product />
    // <Posts />
    // <AxiosPost />
    // <UseState />
    // <UseEffect />
    // <PrevState />
    // <HookWithObject />
    // <WithArray />
    // <Updating />
    // <A /> */}
      <Student1 />
      <Student2 />
    </>
  );
}

export default App;
