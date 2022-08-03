import HookCounter from './All Hooks/1.UseState Hook/HookCounter';
import HookCounterFour from './All Hooks/1.UseState Hook/useStatewithArray/HookCounterFour';
import HookCounterThree from './All Hooks/1.UseState Hook/useStatewithObject/HookCounterThree';
import HookCounterTwo from './All Hooks/1.UseState Hook/useStatewithPrevstate/HookCounterTwo';
import EffectCounterOne from './All Hooks/2.UseEffect/EffectCounterOne';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<HookCounter/>*/}
      {/*<HookCounterTwo/>*/}
      {/*<HookCounterThree/>*/}
      {/*<HookCounterFour/>*/}
      <EffectCounterOne/>
    </div>
  );
}

export default App;
