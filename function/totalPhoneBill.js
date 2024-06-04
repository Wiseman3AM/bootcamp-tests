const usage = 'call, sms, call, sms, sms'

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