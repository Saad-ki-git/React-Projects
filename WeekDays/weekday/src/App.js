// The starter code for this app contains code that will display the day of the week within an h1 heading, for example: "Today is: Monday". 
// There is also a button under this heading, that reads "Get next day".

// When a user clicks on this button, the h1 heading updates so that the message shows the next day in the sequence.

// Your task is to complete the custom hook named usePrevious so that the h1 heading shows both the current day and the previous current day before the update.



import { useState, useEffect, useRef } from "react";
export default function App() {
  
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}
function usePrevious(val) {
  const formInputRef = useRef();
  useEffect(() => {
    val=formInputRef.current 
  },[val])
  return formInputRef.current

}
