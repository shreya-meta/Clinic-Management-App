import moment from "moment";
export const getAge = (value: string) => {
  var years = moment().diff(value, "years");
  var months = moment().diff(value, "month");
  var days = moment().diff(value, "days");
  return months === 0
    ? `${days} days`
    : years === 0
    ? `${months} mth`
    : `${years} Yrs`;
};
