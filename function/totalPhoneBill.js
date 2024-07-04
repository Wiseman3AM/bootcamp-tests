const usage = 'call, sms, call, sms, sms';
const usage2 =  'call, sms';
const usage3 = 'sms, sms';

function totalPhoneBill(usage){
  const callCO = 2.75;
  const smsCO = 0.65;
  
  let usageAnt= usage.split(', ');
  
  let callCount = 0
  let smsCount = 0
  
  for (const comm of usageAnt) {
    if (comm.trim() === 'call'){
      callCount++;
    } else if (comm.trim() === 'sms'){
      smsCount++;
    }
  }
  const totalBill = (callCount * callCO) + (smsCO * smsCount);
  return `R${totalBill.toFixed(2)}`
  }

  console.log(totalPhoneBill(usage))
  console.log(totalPhoneBill(usage2))
  console.log(totalPhoneBill(usage3))