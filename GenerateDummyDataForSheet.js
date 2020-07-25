function GenerateDummyDataForSheet() {
  var spreadsheetId = 'YOUR SHEET ID HERE';
  var rangeName = 'Class Data!A1';

  var ROW_TO_GENERATE = 5000;
  var COLUMN_TO_GENERATE = 11;

  var valueToInsert = new Array(ROW_TO_GENERATE);

  for (var i = 0; i < valueToInsert.length; i++) {
      valueToInsert[i] = new Array(COLUMN_TO_GENERATE);

      valueToInsert[i][0] = GenerateDate();
      valueToInsert[i][1] = GenerateItem();
      valueToInsert[i][2] = GenerateFlavor();
      valueToInsert[i][3] = GenerateProductNumber();
      valueToInsert[i][4] = GenerateSerialNumber();
      valueToInsert[i][5] = GenerateUnitPrice();
      valueToInsert[i][6] = GenerateProfitMargin();
      valueToInsert[i][7] = GenerateRevenue();
      valueToInsert[i][8] = GenerateProfit();
      valueToInsert[i][9] = GenerateCustomer();
      valueToInsert[i][10] = GenerateSalesRep();
  }

  var ValueRange = {
        values: valueToInsert,
        majorDimension : "ROWS"  
  }

  var valueOption = {
      valueInputOption : "USER_ENTERED"
  }

  Sheets.Spreadsheets.Values.append(ValueRange, spreadsheetId, rangeName, valueOption);
}

function GenerateDate()
{
  var start = new Date(2012, 0, 1);
  var end = new Date();
  
  var generatedDate = formatDate(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())));

  Logger.log(generatedDate);
  return generatedDate;
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

function GenerateItem()
{
    var myItem = ['Croissant', 'Cookie', 'Cake', 'Muffin', 'Danish', 'Donut'];
    var generatedItem = myItem[Math.floor(Math.random() * myItem.length)];

    Logger.log(generatedItem);
    return generatedItem;
}

function GenerateFlavor()
{
    var myItem = ['Strawberry', 'Blueberry', 'Chocolate', 'Vanilla', 'Hazelnut'];
    var generatedFlavor = myItem[Math.floor(Math.random() * myItem.length)];

    Logger.log(generatedFlavor);
    return generatedFlavor;
}

function GenerateProductNumber()
{
    var PnFirstpart = 'F16-';
    var PnSecondpart = Math.floor(1000 + Math.random() * 9000);
    var generatedProductNumber = PnFirstpart + PnSecondpart.toString();

    Logger.log(generatedProductNumber);
    return generatedProductNumber;
}

function GenerateSerialNumber()
{
    var generatedSerialNumber = 10000000 + Math.floor(Math.random() * 90000000);

    Logger.log(generatedSerialNumber);
    return generatedSerialNumber;
}

function GenerateUnitPrice()
{
    var generatedUnitPrice = Math.floor(0 + Math.random() * 1000);

    Logger.log(generatedUnitPrice);
    return generatedUnitPrice;
}

function GenerateProfitMargin()
{
    var generatedProfitMargin = Math.random().toFixed(2);

    Logger.log(generatedProfitMargin);
    return generatedProfitMargin;
}

function GenerateQuantity()
{
  var generatedQuantity = 1 + Math.floor(Math.random() * 100);

    Logger.log(generatedQuantity);
    return generatedQuantity;
}

function GenerateRevenue()
{
  var generatedRevenue = 1 + Math.floor(Math.random() * 500);

  Logger.log(generatedRevenue);
  return generatedRevenue;
}


function GenerateProfit()
{
  var generatedProfit = 1 + Math.floor(Math.random() * 200);

  Logger.log(generatedProfit);
  return generatedProfit;
}

function GenerateCustomer()
{
    var myItem = ['acme.co', 'deta.co', 'beta.co', 'gamma.co', 'theta.co', 'zeta.co'];
    var generatedCustomer = myItem[Math.floor(Math.random() * myItem.length)];

    Logger.log(generatedCustomer);
    return generatedCustomer;
}

function GenerateSalesRep()
{
    var myItem = ['Mary Tyler Moore', 'Harry Potter', 'Pippy Longstockings', 'Benjimin Button', 'Encyclopedia Brown'];
    var generatedSalesRep = myItem[Math.floor(Math.random() * myItem.length)];

    Logger.log(generatedSalesRep);
    return generatedSalesRep;
}

