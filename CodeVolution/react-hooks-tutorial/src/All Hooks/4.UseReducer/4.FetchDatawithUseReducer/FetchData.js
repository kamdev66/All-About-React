import axios from "axios";
import React, { useReducer, useEffect } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

//reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something Went Wrong",
      };

    default:
      return state;
  }
};

function FetchData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>{
        console.log(res);
        dispatch({type:'FETCH_SUCCESS', payload: res.data})
    })
    .catch(error=>{
        dispatch({type:'FETCH_ERROR'})
    })
  },[])

  return(
    <div>
        { state.loading ? 'Loading': state.post.title }
        { state.error? state.error: null }
    </div>
  )
}

export default FetchData;
