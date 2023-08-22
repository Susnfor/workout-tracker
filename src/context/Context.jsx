import { createContext, useState } from "react";

export const WorkoutContext = createContext(); //creating a context object

 //creating a provider component to wrap the app in
export const WorkoutProvider = ({children}) => { 
    //anything inside the provider component will be accessible to all components

    
    const [apiWorkouts, setApiWorkouts] = useState(null) //creating a state variable to store the workouts from the api

      //creating a function to fetch the workouts from the api
      const fetchWorkouts = async () => {
        try {
        const res = await fetch('https://workout-tracker-a3cw.onrender.com/api/workouts', {
        method: 'GET',
        headers: { "Content-Type": "application/json" }})
        const data = await res.json() //passing the response to json
        // console.log(data)
        setApiWorkouts(data.workouts)
        // console.log("Workouts fetched successfully")
        } 
        catch (error) {
            console.log(`No Workouts, API error, message " ${error} " `)
            
        }
    }

    
    return (
        <WorkoutContext.Provider value={{apiWorkouts, fetchWorkouts}}>
            {children}
        </WorkoutContext.Provider>
    )
}