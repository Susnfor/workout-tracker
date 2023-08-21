import { useEffect, useState } from 'react'
import WorkoutAdd from '../components/WorkoutAdd'
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {
    const [apiWorkouts, setApiWorkouts] = useState(null) //creating a state variable to store the workouts from the api

    //creating a function to fetch the workouts from the api
    const fetchWorkouts = async () => {
        try {
        const res = await fetch('https://workout-tracker-a3cw.onrender.com/api/workouts')
        const data = await res.json() //passing the response to json
        console.log(data)
        setApiWorkouts(data.workouts)
        } catch (error) {
            console.log(`No Workouts, API error, message " ${error} " `)
            
        }
    }
    
    //creating a useEffect hook to run the fetchWorkouts function when the page loads
    useEffect(() => {
        fetchWorkouts();

    }, [apiWorkouts]) //empty array means it will only run once, but it will run everytime apiworkouts change



  return (
    <div>
        <div className="workouts">
            {/*mapping the workouts to the component */}
            {apiWorkouts && apiWorkouts.map(workout => (
                <WorkoutDetails key={workout._id} workout={workout} />
            ))}
            <WorkoutAdd />
        </div>
    </div>
  )
}

export default Home