document.getElementById('carCount').addEventListener('input', function() {
    const count = parseInt(this.value);
    const carInputsDiv = document.getElementById('carInputs');
    
    // Clear previous inputs
    carInputsDiv.innerHTML = '';

    // Create new inputs based on the count
    for (let i = 0; i < count; i++) {
        const label = document.createElement('label');
        label.textContent = `Car ${i + 1} Number Plate:`;
        
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `car${i + 1}`;
        input.required = true;

        carInputsDiv.appendChild(label);
        carInputsDiv.appendChild(input);
    }
});

document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Here you can handle the form submission, e.g., send data to a server
    alert('Account Created Successfully!');
});