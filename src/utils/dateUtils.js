export const getCurrentWeek = function(providedDate) {
  const date = providedDate || new Date();
  date.setHours(0, 0, 0, 0);
  const weekCalc = new Date(date.getFullYear(), 0, 1);
  const currentWeek = Math.ceil(
    ((date - weekCalc) / 86400000 + weekCalc.getDay()) / 7
  );
  return `y${date.getFullYear()}w${currentWeek}`;
};

export const getTodayIndex = function() {
  const now = new Date();
  return now.getDay() === 0 ? 6 : now.getDay() - 1;
};
