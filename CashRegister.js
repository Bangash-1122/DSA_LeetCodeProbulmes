// Method: Greedy Algorithm / Highest-Denomination-First
// Data Structure: Object + 2D Array
// Main methods: map(), reduce(), Math.round(), Math.floor(), Math.min(), push()
// Time Complexity: O(n)
// Space Complexity: O(n)


function checkCashRegister(price, cash, cid) {

  // Currency values in CENTS
  const currency = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  };

  // Calculate how much change we need to return
  // Convert dollars to cents to avoid decimal problems
  let changeDue = Math.round((cash - price) * 100);

  // Convert cash-in-drawer amounts to cents
  const drawer = cid.map(([name, amount]) => {
    return [name, Math.round(amount * 100)];
  });

  // Find total amount of money inside cash drawer
  const totalCash = drawer.reduce((total, item) => {
    return total + item[1];
  }, 0);

  // CASE 1:
  // Drawer does not have enough total money
  if (totalCash < changeDue) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }

  // CASE 2:
  // Total drawer money is exactly equal to change due
  if (totalCash === changeDue) {
    return {
      status: "CLOSED",
      change: cid
    };
  }

  // This will store the change we give back
  let change = [];

  // Start from highest denomination
  for (let i = drawer.length - 1; i >= 0; i--) {

    let name = drawer[i][0];
    let available = drawer[i][1];
    let value = currency[name];

    // Find how many of this denomination we need
    let neededCount = Math.floor(changeDue / value);

    // Find how many of this denomination are available
    let availableCount = Math.floor(available / value);

    // We cannot use more than what is available
    let useCount = Math.min(neededCount, availableCount);

    // Total amount used from this denomination
    let used = useCount * value;

    // If we used this denomination
    if (used > 0) {

      // Subtract it from remaining change
      changeDue -= used;

      // Add denomination to answer
      change.push([
        name,
        Number((used / 100).toFixed(2))
      ]);
    }
  }

  // CASE 3:
  // We had enough total money,
  // but could not make the EXACT change
  if (changeDue !== 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }

  // CASE 4:
  // Exact change was successfully created
  return {
    status: "OPEN",
    change: change
  };
}
console.log(
  checkCashRegister(
    19.5,
    20,
    [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ]
  )
);
