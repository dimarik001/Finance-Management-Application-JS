var principalAmount = 0;
var expenses = 0;
var balance = 0;

// Make button undefault
// Add amount to correct value
// Make working balance

document.getElementById('budget-form').addEventListener('submit', function(e){
	e.preventDefault();
	principalAmount = document.getElementById('budget-input').value;
	document.getElementById('budget-amount').textContent = principalAmount;
	balance = principalAmount - expenses;
	document.getElementById('balance-amount').textContent = balance;
	principalAmount = document.getElementById('budget-input').value = "";
})

var nameOfExpensive="";
var amountOfExpensive = 0;

// Create list
const list = document.querySelector('#expense-list');
	const forms = document.forms;

	
document.getElementById('expense-form').addEventListener('submit', function(e){
	e.preventDefault();
	//Add name and amount of expense
	nameOfExpensive = document.getElementById('expense-input').value;
	amountOfExpensive = document.getElementById('amount-input').value;
	if(nameOfExpensive == "" || amountOfExpensive <= 0){
		
	}else{
		const li = document.createElement('div');
	li.innerHTML = `
		<div class="expense">
        <div class="expense-item d-flex justify-content-between align-items-baseline">
         <h6 "class="expense-title mb-0 text-uppercase list-item">`+nameOfExpensive+`</h6>
         <h5 class="expense-amount mb-0 list-item">`+amountOfExpensive+`</h5>
         <div class="expense-icons list-item">
          <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
           <i class="fas fa-edit"></i>
          </a>
          <a href="#" class="delete-icon" data-id="${expense.id}">
           <i class="fas fa-trash"></i>
          </a>
         </div>
        </div>
       </div>
	`;
	list.appendChild(li);
	
	expenses += parseInt(amountOfExpensive);
	balance -= amountOfExpensive;
	document.getElementById('expense-amount').textContent = expenses; 
	document.getElementById('balance-amount').textContent = balance;
	
	
	document.getElementById('expense-input').value = "";
	document.getElementById('amount-input').value = "";
	}
	
});

// DELETE
list.addEventListener('click', function(e){
	if(e.target.className=='fas fa-trash'){
		var toValue = e.target.parentElement.parentElement.parentElement;
		amountOfExpensive=toValue.getElementsByTagName('h5')[0].textContent;
		expenses -= amountOfExpensive;
		balance = principalAmount - expenses;
		document.getElementById('expense-amount').innerHTML = expenses;
		document.getElementById('balance-amount').innerHTML = balance;
		var deleteV = toValue.parentElement.parentElement;
		deleteV.parentNode.removeChild(deleteV);
	}
});

// EDIT
list.addEventListener('click', function(e){
	if(e.target.className=='fas fa-edit'){
		var toValue = e.target.parentElement.parentElement.parentElement;
		amountOfExpensive=toValue.getElementsByTagName('h5')[0].textContent;
		expenses -= amountOfExpensive;
		balance = principalAmount - expenses;
		document.getElementById('expense-amount').innerHTML = expenses;
		document.getElementById('balance-amount').innerHTML = balance;
		document.getElementById('amount-input').value = amountOfExpensive;
		nameOfExpensive=toValue.getElementsByTagName('h6')[0].innerHTML;
		document.getElementById('expense-input').value = nameOfExpensive;
		var deleteV = toValue.parentElement.parentElement;
		deleteV.parentNode.removeChild(deleteV);
	}
})

