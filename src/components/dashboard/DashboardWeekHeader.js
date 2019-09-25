import React from "react";

const DashboardWeekHeader = ({
  isCurrentWeek,
  hasPreviousWeek,
  toggleWeek
}) => {
  if (!hasPreviousWeek) return "Just this week";

  return (
    <button
      onClick={() => {
        toggleWeek(!isCurrentWeek);
      }}
    >
      {isCurrentWeek ? "back" : "forward"}
    </button>
  );
};

export default DashboardWeekHeader;
