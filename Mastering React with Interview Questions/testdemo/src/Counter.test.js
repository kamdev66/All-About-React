import React from "react";
import {render,screen} from '@testing-library/react' //screen method is use to get the access of virtual dom.
import Counter from "./Counter";

/*
test(' ',()=>{     //here , first parameter is message/description and second is anonymous func.
    //code
})
*/

test("Initial value of counter should be 0",()=>{
    render(<Counter/>);
    const counterEl=screen.getByText(0);
    expect(counterEl).toBeInTheDocument();    //assertion   ,   we can derive assertions using the expect() method 
})