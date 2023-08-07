export const convertTimestamp = (timestamp) => {
  const d = new Date(timestamp * 1000); // Convert the passed timestamp to milliseconds
  const yyyy = d.getFullYear();
  const mm = ('0' + (d.getMonth() + 1)).slice(-2); // Months are zero based. Add leading 0.
  const dd = ('0' + d.getDate()).slice(-2); // Add leading 0.
  const hh = d.getHours();
  let h = hh;
  const min = ('0' + d.getMinutes()).slice(-2); // Add leading 0.
  let ampm = 'AM';

  if (hh > 12) {
    h = hh - 12;
    ampm = 'PM';
  } else if (hh === 12) {
    h = 12;
    ampm = 'PM';
  } else if (hh == 0) {
    h = 12;
  }

  // ie: 09/09/2022, 3:00 PM
  const time = dd + '/' + mm + '/' + yyyy + ', ' + h + ':' + min + ' ' + ampm;
  return time;
};
