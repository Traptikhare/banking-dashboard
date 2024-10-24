// Initialize balance
let balance = 0;

// Get the necessary DOM elements
const balanceDisplay = document.getElementById('balance');
const depositAmountInput = document.getElementById('depositAmount');
const withdrawAmountInput = document.getElementById('withdrawAmount');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const transactionHistory = document.getElementById('transactionHistory');

// Function to update the balance display
function updateBalance() {
  balanceDisplay.innerText = balance.toFixed(2);
}

// Function to add transaction to history
function addTransaction(type, amount) {
  const li = document.createElement('li');
  li.textContent = `${type}: $${amount.toFixed(2)}`;
  transactionHistory.appendChild(li);
}

// Event listener for deposit button
depositBtn.addEventListener('click', () => {
  const amount = parseFloat(depositAmountInput.value);
  
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid deposit amount.');
    return;
  }

  // Add to balance
  balance += amount;

  // Update the displayed balance
  updateBalance();

  // Add deposit transaction to history
  addTransaction('Deposited', amount);

  // Clear the input field
  depositAmountInput.value = '';
});

// Event listener for withdraw button
withdrawBtn.addEventListener('click', () => {
  const amount = parseFloat(withdrawAmountInput.value);
  
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid withdraw amount.');
    return;
  }

  // Check if balance is sufficient
  if (amount > balance) {
    alert('Insufficient balance for this withdrawal.');
    return;
  }

  // Subtract from balance
  balance -= amount;

  // Update the displayed balance
  updateBalance();

  // Add withdraw transaction to history
  addTransaction('Withdrew', amount);

  // Clear the input field
  withdrawAmountInput.value = '';
});
