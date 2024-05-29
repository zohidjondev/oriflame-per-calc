document.querySelectorAll('.percentage-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('custom-percentage').value = this.getAttribute('data-percentage');
    });
});

document.getElementById('amount').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value) {
        value = Number(value).toLocaleString();
    }
    e.target.value = value;
});

document.getElementById('percentage-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let amountStr = document.getElementById('amount').value.replace(/,/g, '');
    const amount = parseFloat(amountStr);
    const percentage = parseFloat(document.getElementById('custom-percentage').value);

    if (isNaN(amount) || isNaN(percentage) || percentage < 1 || percentage > 100) {
        alert('Please enter valid numbers.');
        return;
    }

    const result = (amount * percentage) / 100;
    document.getElementById('result-value').textContent = result.toLocaleString();
});
