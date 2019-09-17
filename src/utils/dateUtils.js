export const getCurrentWeek = function(providedDate) {
  const date = providedDate || new Date();
  const weekCalc = new Date(date.getFullYear(), 0, 1);
  const currentWeek = Math.ceil(
    ((date - weekCalc) / 86400000 + weekCalc.getDay()) / 7
  );
  return `y${date.getFullYear()}w${currentWeek}`;
};