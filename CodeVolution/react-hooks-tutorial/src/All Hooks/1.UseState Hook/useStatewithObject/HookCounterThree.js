import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name,firstName: e.target.value })} //copy every property in the name object and then just overwrite the firstName field with different value
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name,lastName: e.target.value })}  //copy every property in the name object and then just overwrite the firstName field with different value
      />
      <h2>Your First Name is : - {name.firstName}</h2>
      <h2>Your Last Name is : - {name.lastName}</h2>
    </div>
  );
}

export default HookCounterThree;
