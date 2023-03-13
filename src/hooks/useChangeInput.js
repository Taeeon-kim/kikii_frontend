import { hourCheck, minuteCheck, numkeyCheck } from '../utils/common';

const useInputChange = (props) => {
  const handleInputChange = (event) => {
    event.target.value = numkeyCheck(event.target.value);
    if (event.target.value.length === 2) {
      if (props === 'hour') {
        event.target.value = hourCheck(event.target.value);
      } else if (props === 'minute') {
        event.target.value = minuteCheck(event.target.value);
      }
    }
  };

  return { onChange: handleInputChange };
};

export default useInputChange;
