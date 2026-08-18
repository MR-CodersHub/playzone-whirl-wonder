/* =====================================================
   Whirl & Wonder — Form Validation
   Used by contact.html, signup.html, and other forms
   ===================================================== */

var FormValidation = (function () {
  'use strict';

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    if (!phone) return true;
    return /^[\+]?[\d\s\-\(\)]{7,15}$/.test(phone);
  }

  function showError(input, message) {
    input.classList.add('field--error');
    var existing = input.parentElement.querySelector('.field__error-msg');
    if (existing) existing.remove();
    if (message) {
      var err = document.createElement('span');
      err.className = 'field__error-msg';
      err.textContent = message;
      input.parentElement.appendChild(err);
    }
  }

  function clearError(input) {
    input.classList.remove('field--error');
    var existing = input.parentElement.querySelector('.field__error-msg');
    if (existing) existing.remove();
  }

  function showSuccessMessage(container, message) {
    var existing = container.querySelector('.form-success-msg');
    if (existing) existing.remove();
    var msg = document.createElement('div');
    msg.className = 'form-success-msg';
    msg.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>' + (message || 'Success! Your submission has been received.') + '</span>';
    container.appendChild(msg);
    msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(function () { if (msg.parentElement) msg.remove(); }, 6000);
  }

  function validateForm(form, options) {
    options = options || {};
    var isValid = true;
    var firstInvalid = null;

    var requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(function (field) {
      clearError(field);
      var val = String(field.value).trim();

      if (!val) {
        showError(field, 'This field is required');
        isValid = false;
        if (!firstInvalid) firstInvalid = field;
      } else if (field.type === 'email' && !validateEmail(val)) {
        showError(field, 'Please enter a valid email address');
        isValid = false;
        if (!firstInvalid) firstInvalid = field;
      } else if (field.name === 'phone' && !validatePhone(val)) {
        showError(field, 'Please enter a valid phone number');
        isValid = false;
        if (!firstInvalid) firstInvalid = field;
      } else if (field.name === 'password' && val.length < 6) {
        showError(field, 'Password must be at least 6 characters');
        isValid = false;
        if (!firstInvalid) firstInvalid = field;
      } else if (field.name === 'confirm-password') {
        var passField = form.querySelector('[name="password"]');
        if (passField && val !== passField.value) {
          showError(field, 'Passwords do not match');
          isValid = false;
          if (!firstInvalid) firstInvalid = field;
        }
      }
    });

    if (firstInvalid) {
      firstInvalid.focus();
    }

    return isValid;
  }

  function attachRealTimeValidation(form) {
    var fields = form.querySelectorAll('[required]');
    fields.forEach(function (field) {
      field.addEventListener('blur', function () {
        clearError(field);
        var val = String(field.value).trim();
        if (!val) {
          showError(field, 'This field is required');
        } else if (field.type === 'email' && !validateEmail(val)) {
          showError(field, 'Please enter a valid email address');
        } else if (field.name === 'phone' && !validatePhone(val)) {
          showError(field, 'Please enter a valid phone number');
        } else if (field.name === 'password' && val.length < 6) {
          showError(field, 'Password must be at least 6 characters');
        } else if (field.name === 'confirm-password') {
          var passField = form.querySelector('[name="password"]');
          if (passField && val !== passField.value) {
            showError(field, 'Passwords do not match');
          }
        }
      });
      field.addEventListener('input', function () {
        if (field.classList.contains('field--error')) {
          clearError(field);
        }
      });
    });
  }

  return {
    validateForm: validateForm,
    attachRealTimeValidation: attachRealTimeValidation,
    showSuccessMessage: showSuccessMessage,
    showError: showError,
    clearError: clearError
  };
})();
