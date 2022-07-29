import './App.css';
import ClassComponent from './topics/component/ClassComponent';
import ComponentInsideComponent from './topics/component/ComponentInsideComponent';
import UseOfControlledComp from './topics/component/ControlledComponent/UseOfControlledComp';
import FunctionalComponent from './topics/component/FunctionalComponent';
import HOC from './topics/component/HOC/HOC';
import PureComp from './topics/component/pure component/PureComponents';
import UseOfUncontrolledComp from './topics/component/UncontrolledComponent/UseOfUncontrolledComp';
import ConditionalRendering from './topics/ConditionalRendering';
import ClickEvent from './topics/Event/ClickEvent';
import BasicForm from './topics/Event/Form/BasicForm';
import FormValidation from './topics/Event/Form/FormValidation';
import GetInputBoxData from './topics/Event/GetInputBoxData';
import HideShow from './topics/Event/HideShow';
import Toggle from './topics/Event/Toggle';
import UseEffect from './topics/hooks/useEffect/UseEffect';
import UseEffectwithCondition from './topics/hooks/useEffect/UseEffectwithCondition';
import UseOfUseMemo from './topics/hooks/useMemo/UseOfUseMemo';
import ParentForwardRef from './topics/hooks/useRef/ForwardRef/ParentForwardRef';
import UseOfUseRef from './topics/hooks/useRef/UseOfUseRef';
import Contructor from './topics/lifecycle methods/Contructor';
import ParentPassFunc from './topics/Props/passFunctionAsProps/ParentPassFunc';
import PassFunctionAsProps from './topics/Props/passFunctionAsProps/PassFunctionAsProps';
import PropsWithClassComponent from './topics/Props/PropsWithClassComponent';
import PropsWithFunctionalComponent from './topics/Props/PropsWithFunctionalComponent';
import ParentComponent from './topics/State/Lifting State up/ParentComponent';
import StateInClassComponent from './topics/State/StateInClassComponent';
import StateInFunctionalComponent from './topics/State/StateInFunctionalComponent';

function App() {
  return (
    <div className="App">
     {/* <FunctionalComponent/> */}
     {/*<ClassComponent/> */}
     {/*<ComponentInsideComponent/>  */}
     {/*<ClickEvent/> */}
     {/* <StateInFunctionalComponent/> */}
     {/*<StateInClassComponent/> */}
    {/* <PropsWithFunctionalComponent name="Kamdev"/> */}
    {/* <PropsWithClassComponent name={"Kamdev"} college="LPU" city="Patna"/> */}
    {/* <GetInputBoxData/> */}
    {/* <HideShow/> */}
    {/* <Toggle/> */}
      {/* <BasicForm/> */}  
      {/* <ConditionalRendering/> */}
      {/* <FormValidation/> */}
      {/* <ParentPassFunc/> */}
      {/* <Contructor/> */}
      {/* <UseEffect/> */}
      {/* <UseEffectwithCondition/> */}
       {/* <ParentComponent/> */}
       {/* <PureComp/>  */}
       {/* <UseOfUseMemo/> */}
        {/*  <UseOfUseRef/> */}
        {/* <ParentForwardRef/> */}
        {/* <UseOfControlledComp/> */}
        {/* <UseOfUncontrolledComp/> */}
        <HOC/>
    </div>
  );
}

export default App;
