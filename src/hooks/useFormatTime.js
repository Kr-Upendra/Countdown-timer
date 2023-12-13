export const useFormatTime = (time) => {
  if (isNaN(time)) return { timeString: "00:00:00" };
  const hoursValue = Math.floor(time / 3600);
  const minutesValue = Math.floor((time % 3600) / 60);
  const secondsValue = time % 60;
  const timeString = `${String(hoursValue).padStart(2, "0")}:${String(
    minutesValue
  ).padStart(2, "0")}:${String(secondsValue).padStart(2, "0")}`;
  return { timeString };
};
