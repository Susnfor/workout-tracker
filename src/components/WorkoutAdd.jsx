import { useState, useContext } from 'react'
import { WorkoutContext } from '../context/Context'

const WorkoutAdd = () => {
    //import fetchWorkouts function from the context
    const {fetchWorkouts} = useContext(WorkoutContext);

    //creating state variables for the form inputs
    const [title, setTitle] = useState(''); 
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');

    //creating a function to handle the submit event
    const handleSubmit = async (e) => {
        e.preventDefault(); //prevents page refresh

        //creating a try/catch block to handle errors
        try {
        const workout = { title, reps, load }; //creating a workout object from the form inputs

        //fetch request to POST(add) the workout added to the api when submit is clicked
        await fetch('https://workout-tracker-a3cw.onrender.com/api/workouts', { //passing the workout object to the api
        method: 'POST',
        body: JSON.stringify(workout), //sending the workout object as a JSON string
        headers: { "Content-Type": "application/json" }, //telling the api that the data is in JSON format
        })
        console.log("Workout added successfully");

        //clearing the form inputs after the workout is added
        setTitle('');
        setReps('');
        setLoad('');
        fetchWorkouts(); //fetching the workouts from the api again to update the list of workouts
    } 
    catch (error) {
        //logging an error message if the workout is not added
        console.log(`Workout not added, API error, message " ${error} " `)
    }
    }


  return (

    <div>
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a Workout</h3>

            <label>Workout Title:</label>
            <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />

            <label>Reps:</label>
            <input type='number' required value={reps} onChange={(e) => setReps(e.target.value)} />

            <label>Load(kg):</label>
            <input type='number' required value={load} onChange={(e) => setLoad(e.target.value)} />

            <button><span className='material-symbols-outlined'>playlist_add</span></button>
        </form>
    </div>
  )
}

export default WorkoutAdd