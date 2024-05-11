import { daysOfWeek } from "../constants/date";

const thisDate = new Date();
const thisDays = thisDate.getDate();
const thisDay = thisDate.getDay();

const weekDaysInfo = daysOfWeek.map((day, index) => ({
  id: index,
  day,
  date:
    thisDays - thisDay + index < thisDays
      ? thisDays - thisDay + index + 7
      : thisDays - thisDay + index,
}));

export default weekDaysInfo;
