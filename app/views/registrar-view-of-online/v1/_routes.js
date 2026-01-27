module.exports = function(router) {
  

// Name and date


// routes for registrar view of online

//Confirm form
router.post('/registrar-view-of-online/v1/confirm-registration-form', function (req, res) {

   // Log the submitted form data
  console.log('Form submission:', req.body);
  // Ensure session data exists
  req.session.data = req.session.data || {};

  // Save the selected radio button values to the session
  const selectedOption = req.body.userRegistrationSatisfactory;
  
   //console.log('Selected option:', selectedOption);
  req.session.data['userRegistrationSatisfactory'] = selectedOption;
  
  // Redirect based on the selected option
  if (selectedOption === 'yes-complete') {
    res.redirect('05-sign-page');
  } else if (selectedOption === 'no-an-issue') {
    res.redirect('05a-next-steps-contact');
  } else {
    // Handle unexpected values (optional)
    res.redirect('05-sign-page'); // Redirect back to the form if no valid option is selected
  }
});


//Status form - for on hold or in-person
router.post('/registrar-view-of-online/v1/status-registration-form', function (req, res) {

   
  // Ensure session data exists
  req.session.data = req.session.data || {};

  // Save the selected radio button values to the session
  const selectedOption = req.body.userRegistrationStatus;
  
   //console.log('Selected option:', selectedOption);
  req.session.data['userRegistrationStatus'] = selectedOption;
  
  // Redirect based on the selected option
  if (selectedOption === 'status-on-hold') {
    res.redirect('06a-confirmation-hold');
  } else if (selectedOption === 'status-in-person') {
    res.redirect('06b-confirmation-appointment');
  } else if (selectedOption === 'status-complete') {
    res.redirect('06-confirmation-page');
  } else {
    // Handle unexpected values (optional)
    res.redirect('06-confirmation-page'); // Redirect back to the form if no valid option is selected
  }
});


//need this at the end:
};