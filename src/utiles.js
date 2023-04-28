


const today = new Date();
const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
export const lastMonthDate = lastMonth.toISOString().slice(0, 10);


const lastYear = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
export const lastYearDate = lastYear.toISOString().slice(0, 10);


