import { useContext } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { WorkoutContext } from '../context/Context'

const WorkoutDetails = ({ workout }) => {
  const {fetchWorkouts} = useContext(WorkoutContext);
  

  // Delete workout function, when the delete icon is clicked
  const handleClick = async () => {
    try {
      await fetch(`https://workout-tracker-a3cw.onrender.com/api/workouts/${workout._id}`, {
        method: "DELETE",
      });
      fetchWorkouts(); //fetching the workouts from the api again to update the list of workouts
    } catch (error) {
      console.log(`Workout not deleted, API error, message " ${error} " `);
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>
        <strong>Load(kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Created: </strong>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })} 
        {/* //formatting the date to show how long ago the workout was created */}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete_forever
      </span>
    </div>
  );
};

export default WorkoutDetails;
