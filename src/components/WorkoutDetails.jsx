import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {

  // Delete workout function, when the delete icon is clicked
  const handleClick = async () => {
    try {
      await fetch(`/api/workouts/${workout._id}`, {
        method: "DELETE",
      });
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
