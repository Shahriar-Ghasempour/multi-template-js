(function() {
    const display = document.getElementById('display');
    let current = '';
  
    document.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-value');
        const action = btn.getAttribute('data-action');
  
        if (action === 'clear') {
          current = '';
          display.value = '';
        } else if (action === 'calculate') {
          try {
            current = eval(current).toString();
            display.value = current;
          } catch {
            display.value = 'Error';
          }
        } else if (val) {
          current += val;
          display.value = current;
        }
      });
    });
  })
();