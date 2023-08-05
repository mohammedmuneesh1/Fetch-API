// import React, { useCallback, useEffect, useState } from 'react'

// export default function FetchApi() {
//     const [store,setStore]=useState([]);
//     useEffect(()=>{
//         fetch("https://dummyjson.com/quotes")
//         .then(response=>{
//             if(!response.ok){ throw new Error("network response not ok ")}
//             return response.json();})
//         .then(data=>setStore(data.quotes))
//         .catch(error=>console.log("error found".error))}
//         ,[]);
//   return (
//     <>
//     { store.map((value,index) => {
//         <h1 key={index}>{value}</h1>})

//     }
//     </>
//   )
// }



///code 2

// import React, { useEffect, useState } from "react";

// export default function FetchApi() {
//   const [store, setStore] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/quotes")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setStore(data.quotes);
//       })
//       .catch((error) => console.log("Error found:", error));
//   }, []);

//   console.log(store);
//   let value= store.map((value, index) => (
//     <h1 key={index}>{value}</h1>
//   ))

//   return <>
//   <h1>hello world</h1>
//   {value}
//   </>;
// }



//code-3

// import React, { useEffect, useState } from "react";

// export default function FetchApi() {
//   const [store, setStore] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/quotes")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setStore(data.quotes);
//       })
//       .catch((error) => console.log("Error found:", error));
//   }, []);

//   console.log(store);

//   return (
//     <>
//       <h1>hello world</h1>
//       {/* {store.map((value) => (
//         <h1>{value}</h1>
//       ))} */}
//         <h1>First 10 Quotes</h1>
//       {quotes.map((quote, index) => (
//         <h1 key={index}>{quote}</h1>
//       ))}
//     </>
//   );
// }

import React, { useEffect, useState } from "react";

function FetchApi() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.quotes);
        setQuotes(data.quotes); // Store the first 10 quotes in the state
      })
      .catch((error) => console.log("Error found:", error));
  }, []);

  return (
    <div>
      <h1>First 10 Quotes</h1>
      {quotes.quote.map((quote, index) => (
        <h1 key={index}>{quote}</h1>
      ))}
    </div>
  );
}

export default FetchApi;
