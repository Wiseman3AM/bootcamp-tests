const salesData = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},
];

/* Section 1
---------------------------------------------------------------------------------------------*/
function mostProfitableDepartment(salesData) {
// Create an empty map 
  const salesMap = {};
// Create a for loop
  for (i in salesData){
    const deptProfit = salesData[i];
//console.log(deptProfit)
// Add the department names to the salesMap and set counter to 0
	salesMap[deptProfit.department] = 0 
    
     }
/* Section 2
---------------------------------------------------------------------------------------------*/
	for (i in salesData){
    	const deptProfit = salesData[i];
//Create new var to represent the current sale
   		var currentSalesProf = salesMap[deptProfit.department];
// Create a sum so the loop can count all sales
   		currentSalesProf += deptProfit.sales;
// Assigm the sales to their respective department
   		salesMap[deptProfit.department] = currentSalesProf;      
}

/* Section 3
---------------------------------------------------------------------------------------------*/
//Create empty variables to store data
	var currentMaxSales = 0;
	var currentSalesDepartment = "";
// Create a for loop to loop over the salesMap with the total sales
	for (const profit in salesMap){
    	/* console.log(profit)
      console.log(salesMap[profit]) */  
// Assign current department sale the sales total for each department
    	 currentDepSale =  salesMap[profit];
// Create a if statement to get the highest sales department and number 
    	if (currentDepSale > currentMaxSales){
          currentMaxSales = currentDepSale;
          currentSalesDepartment = profit;
          
        	}
     /* console.log(currentSalesDepartment)
      console.log(currentMaxSales) */
      }
 return currentSalesDepartment
} 

/* 2nd FUNCTION
-----------------------------------------------------------------------------------------------------------------------------------------*/
function mostProfitableDay(salesData) {
  const salesMap = {};
  
  for (let i in salesData) {
    const sale = salesData[i];
    salesMap[sale.day] = 0;
  }

/* Section 2 */
  for (let i in salesData) {
    const sale = salesData[i];
    let currentSales = salesMap[sale.day];
    currentSales += sale.sales;
    salesMap[sale.day] = currentSales;
  }

/* Section 3 */
  let maxSales = 0;
  let profitableDay = "";

  for (const day in salesMap) {
    const totalSales = salesMap[day];
    if (totalSales > maxSales) {
      maxSales = totalSales;
      profitableDay = day;
    }
  }

  return profitableDay;
}

console.log(mostProfitableDepartment(salesData))
console.log(mostProfitableDay(salesData));