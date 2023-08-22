import { useContext, useEffect} from 'react'
import WorkoutAdd from '../components/WorkoutAdd'
import WorkoutDetails from '../components/WorkoutDetails'
import { WorkoutContext } from '../context/Context'

const Home = () => {
    const {apiWorkouts, fetchWorkouts} = useContext(WorkoutContext) //importing state variables to store the workouts from the api
    
    //creating a useEffect hook to run the fetchWorkouts function when the page loads
    useEffect(() => {
        fetchWorkouts();

    }, []) //empty array means it will only run once when the page loads


    return (
        <div>
            <div className="workouts-container">
                
                <div className="workouts">
                {/*mapping the workouts to the component */}
                {apiWorkouts && apiWorkouts.map(workout => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
                </div>
                
                <WorkoutAdd />
            </div>
        </div>
    )
}

export default Home