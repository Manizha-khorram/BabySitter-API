const Babysitter = require("../models/Babysitter");
const Family = require("../models/Family");

const timeDifferent = (startT, endT) => {
  const start = new Date();
  start.setUTCHours(startT[0], startT[1], startT[2]);
  const end = new Date();
  end.setUTCHours(endT[0], endT[1], endT[2]);

  let timeDiff = end.getHours() - start.getHours();

  if (timeDiff < 24) {
    timeDiff += 24;
  }
  return timeDiff;
};

// console.log(timeDifferent([23, 0, 0], [4, 0, 0]));

const totalPay = async (req, res) => {
  const { startT, endT, rates } = req.body;

  const timeDiff = timeDifferent(startT, endT);

  let totalPayment = 0;

  for (const rate of rates) {
    const startHour = rate.start;
    const endHour = rate.end;
    const hoursRate = rate.rate;

    const startTTime = startT[0];
    // startTTime.setUTCHours(startT[0], startT[1], startT[2]);

    const endTTime = endT[0];
    // endTTime.setUTCHours(endT[0], endT[1], endT[2]);

    if (startTTime >= startHour && endTTime <= endHour) {
      const pay = hoursRate * timeDiff;
      totalPayment += pay;
      console.log("totalPayment", totalPayment);
    }
  }

  //will round to two decimal places => toFix(num) = Math.round
  const formatTotalPayment = `$${totalPayment.toFixed(2)}`;
  res.status(200).json({ totalPayment: formatTotalPayment });
};

module.exports = { totalPay };
