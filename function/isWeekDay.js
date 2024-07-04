function isWeekday(day){
    if (day.startsWith('S')){
        return false;
    }else {return true;
        }
  }

  console.log(isWeekday(Monday))
  console.log(isWeekday(Sunday))