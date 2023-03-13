export const changeToStringDate = (dateObj) => {
  const weekList = ['일', '월', '화', '수', '목', '금', '토'];
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth()).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const dayOfWeek = weekList[dateObj.getDay()];
  const formattedDate = `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;
  return formattedDate;
};

export const changeTOStringForAPI = (dateObj) => {
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth()).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export const changePlusOneDate = (dateObj) => {
  const newPlusDateObj = new Date(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    dateObj.getDate() + 1
  );
  return newPlusDateObj;
};

export const changeMinusOneDate = (dateObj) => {
  console.log(dateObj);
  const newPlusDateObj = new Date(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    dateObj.getDate() - 1
  );
  return newPlusDateObj;
};

export function numkeyCheck(num) {
  return num.replace(/[^0-9]/g, '');
}
export function hourCheck(num) {
  const reg = /^([01][0-9]|2[0-3])/g;
  if (reg.test(num)) {
    return num;
  } else return '';
}

export function minuteCheck(num) {
  const reg = /^([0-5][0-9])/g;
  if (reg.test(num)) {
    return num;
  } else return '';
}
