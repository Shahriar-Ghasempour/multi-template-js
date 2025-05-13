document.addEventListener('DOMContentLoaded', () => {
    const form     = document.getElementById('userForm');
    const alertBox = document.getElementById('alertBox');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alertBox.classList.add('d-none');
      alertBox.innerText = '';
  
      let firstEmptyField = null;
  
      form.querySelectorAll('.is-invalid').forEach(el => {
        el.classList.remove('is-invalid');
      });
  
      Array.from(form.elements).forEach(el => {
        if (
          (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') &&
          el.type !== 'submit'
        ) {
          if (!el.value.trim()) {
            el.classList.add('is-invalid');
            if (!firstEmptyField) firstEmptyField = el;
          }
        }
      });
  
      if (firstEmptyField) {
        const label = form.querySelector(`label[for="${firstEmptyField.id}"]`).innerText;
        alertBox.innerText = `Please fill out the ${label} field.`;
        alertBox.classList.remove('d-none');
        firstEmptyField.focus();
      } else {
        window.location.href = 'success.html';
      }
    });
  });
  