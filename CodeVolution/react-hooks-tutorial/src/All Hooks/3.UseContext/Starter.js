import React from "react";
import CompoA from "./CompoA";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function Starter() {
  return (
    <div>
      <UserContext.Provider value="Kamdev Kumar">
        <ChannelContext.Provider value="DSA n DEV">
          <CompoA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default Starter;
