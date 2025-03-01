document.addEventListener('DOMContentLoaded', function () {
  // Real-time validation for Title field
  const title = document.getElementById('title');
  title.addEventListener('keyup', function () {
    const titleError = document.createElement('p');
    titleError.style.color = 'red';
    const titleSuccess = document.createElement('p');
    titleSuccess.style.color = 'green';

    if (title.value.length < 3) {
      titleError.textContent = 'Le titre doit contenir au moins 3 caractères.';
      title.parentElement.appendChild(titleError);
      titleSuccess.remove();
    } else {
      titleError.remove();
      titleSuccess.textContent = 'Correct';
      title.parentElement.appendChild(titleSuccess);
    }
  });

  // Real-time validation for Destination field
  const destination = document.getElementById('Destination');
  destination.addEventListener('keyup', function () {
    const destinationError = document.createElement('p');
    destinationError.style.color = 'red';
    const destinationSuccess = document.createElement('p');
    destinationSuccess.style.color = 'green';
    const destinationPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if (destination.value.length < 3 || !destinationPattern.test(destination.value)) {
      destinationError.textContent = 'La destination doit contenir au moins 3 caractères et uniquement des lettres et des espaces.';
      destination.parentElement.appendChild(destinationError);
      destinationSuccess.remove();
    } else {
      destinationError.remove();
      destinationSuccess.textContent = 'Correct';
      destination.parentElement.appendChild(destinationSuccess);
    }
  });

  // Submit validation
  const form = document.getElementById('offerForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for testing

    let isValid = true;

    // Title validation
    if (title.value.length < 3) {
      isValid = false;
      alert('Le titre doit contenir au moins 3 caractères.');
    }

    // Destination validation
    const destinationPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (destination.value.length < 3 || !destinationPattern.test(destination.value)) {
      isValid = false;
      alert('La destination doit contenir au moins 3 caractères et uniquement des lettres et des espaces.');
    }

    // If valid, you can submit form (for now, logging to console)
    if (isValid) {
      console.log('Form is valid, submitting...');
      // You can submit the form here using AJAX or standard submission
    }
  });
});
