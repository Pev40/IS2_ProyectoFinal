export const getEndDay = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getNextEndDay = (year, month) => {
  return new Date(year, month + 2, 0).getDate();
};

export const getDateEndDayNextMonth = (currentYear, currentMonth) => {
  const nextEndDay = getNextEndDay(currentYear, currentMonth);
  return new Date(currentYear, currentMonth + 1, nextEndDay);
};

export const getDateSameDayNextMonth = (
  currentYear,
  currentMonth,
  currentDay,
  day
) => {
  const nextEndDay = getNextEndDay(currentYear, currentMonth);

  if (currentDay > nextEndDay)
    return new Date(currentYear, currentMonth + 1, nextEndDay);

  return new Date(currentYear, currentMonth + 1, day);
};

export const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const years = () => {
  let initialYear = new Date().getFullYear() - 5;
  const years = new Array(10);

  for (let i = 0; i < years.length; i++) {
    years[i] = initialYear;
    initialYear += 1;
  }
  return years;
};
