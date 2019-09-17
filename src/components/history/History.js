import React from "react";
import HabitTable from "../habits/HabitTable";

const History = ({ weeks }) => {
  const getHabit = (habits, weekNumber) => (
    <HabitTable
      key={`history-habit-table-${weekNumber}`}
      habits={habits}
      isReadOnly={true}
      toggleDayHabit={() => {}}
    ></HabitTable>
  );

  const getWeeks = () => {
    return weeks.map(({ week, habits }) => {
      const [yearNumber, weekNumber] = week.substr(1).split("w");

      return (
        <div className="mb-3" key={`history-habit-${weekNumber}`}>
          <h5 key={week}>{`Week ${weekNumber} of ${yearNumber}`}</h5>
          {getHabit(habits, weekNumber)}
        </div>
      );
    });
  };

  return (
    <div className="large-size-container">
      <h2 className="mb-3">Here is your progress so far:</h2>

      {getWeeks()}

      <div className="mb-3"></div>
    </div>
  );
};

export default History;
