import "./App.css";
import ParentComp from "./component/1.Pure Components/ParentComp";
import PostList from "./component/10.HTTP GET/PostList";
import ParentinMemo from "./component/2.Memo/ParentinMemo";
import RefsDemo from "./component/3.Refs/RefsDemo";
import ForwardRefParentInput from "./component/4.Forwarding Refs/ForwardRefParentInput";
import PortalDemo from "./component/5.Portals/PortalDemo";
import ErrCompParent from "./component/6.ErrorBoundary/ErrCompParent";
import ClickCounter from "./component/7.HOC/ClickCounter";
import HoverCounter from "./component/7.HOC/HoverCounter";
import Starting from "./component/9.Context/Starting";

function App() {
  return (
    <div className="App">
      {/*<ParentComp/>*/}
      {/*<ParentinMemo/>*/}
      {/*<RefsDemo/>*/}
      {/*<ForwardRefParentInput/> */}
      {/*<PortalDemo/>*/}
      {/*<ErrCompParent/>*/}
      {/*<ClickCounter/>
       <HoverCounter/> */}
      {/*<Starting />*/}
      <PostList/>
    </div>
  );
}

export default App;
