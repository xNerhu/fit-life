import { getLastDayOfMonth, getFirstDayOfMonth, getDaysInMonth } from '.';

export const getCalendarDays = (month: number, year: number) => {
  const firstDayOfCurrent = getFirstDayOfMonth(month, year);
  const lastDayOfCurrent = getLastDayOfMonth(month, year);
  const daysInCurrent = getDaysInMonth(month, year);

  const rowsCount = Math.ceil(
    (firstDayOfCurrent + 6 - lastDayOfCurrent + daysInCurrent) / 7,
  );

  const rows = [];

  for (let i = 0; i < rowsCount; i++) {
    const row = [];

    for (let j = 0; j < 7; j++) {
      if (i === 0) {
        if (j >= firstDayOfCurrent) {
          row.push(j - firstDayOfCurrent + 1);
        } else {
          row.push(null);
        }
      } else {
        const day: number = rows[0][6] + j + 1 + 7 * (i - 1);

        if (day <= daysInCurrent) {
          row.push(day);
        } else {
          row.push(null);
        }
      }
    }

    rows.push(row);
  }

  return rows;
};
