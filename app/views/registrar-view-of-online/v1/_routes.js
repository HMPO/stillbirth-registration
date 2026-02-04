module.exports = function(router) {
  

 // Load records data (relative to this file)
  const records = require('../../../data/submission-details')



router.use((req, res, next) => {
  if (!req.session.data.records) {
    req.session.data.records = records
  }
  next()
})



// routes for registrar view of online

//Confirm form - need to add 'accept coding here
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

// cycling through records



  // Use a scoped key so we don't clash with other journeys
  const indexKey = 'registrarCurrentIndex'

  // Helper: get a clean numeric index from the session
  function getCurrentIndex(req) {
    // Ensure session data exists
    req.session.data = req.session.data || {}

    const raw = req.session.data[indexKey]

    if (raw === undefined || raw === null || raw === '') {
      // Initialise if missing
      req.session.data[indexKey] = 0
      return 0
    }

    const num = Number(raw)

    if (Number.isNaN(num) || num < 0) {
      // If something odd got stored, reset to 0
      req.session.data[indexKey] = 0
      return 0
    }

    return num
  }

  // 1) RECORD PAGE – show the current record
  router.get('/registrar-view-of-online/v1/04-check-answers-page', function (req, res) {
    const currentIndex = getCurrentIndex(req)

    if (currentIndex >= records.length) {
      // If index somehow went past the end, show the "no more records" state
      return res.redirect('/registrar-view-of-online/v1/06-confirmation-page')
    }

    const record = records[currentIndex]

    res.render('registrar-view-of-online/v1/04-check-answers-page', {
      record,
      currentIndex,
      totalRecords: records.length
    })
  })


router.get('/registrar-view-of-online/v1/02-pending-list', function (req, res) {
  res.render('/registrar-view-of-online/v1/02-pending-list')
})

router.get('/registrar-view-of-online/v1/03-register-page', function (req, res) {
const id = parseInt(req.query.id, 10)
  const recordList = req.session.data.records || []

  const record = recordList.find(r => r.id === id)

  res.render('/registrar-view-of-online/v1/03-register-page', { record })
})


router.post('/registrar-view-of-online/v1/03-register-page', function (req, res) {
  const id = parseInt(req.body.id, 10)

  // Store the checkbox value in session if you want to use it later
  req.session.data['register-confirm-' + id] = req.body.registerConfirm

  // Redirect to the check answers page for this record
  res.redirect('/registrar-view-of-online/v1/04-check-answers-page?id=' + id)
})

  // RECORD PAGE (POST) – user clicks "Accept"
  //router.post('/registrar-view-of-online/v1/record', function (req, res) {
    // For now we just go to the sign page – no need to change index yet
   // res.redirect('/registrar-view-of-online/v1/05-sign-page')
 // })

  // 2) SIGN PAGE – second confirmation step
  router.get('/registrar-view-of-online/v1/05-sign-page', function (req, res) {
    const currentIndex = getCurrentIndex(req)

    // if (currentIndex >= records.length) {
    //   return res.redirect('/registrar-view-of-online/v1/06-confirmation-page')
    // }

    const record = records[currentIndex]

    res.render('registrar-view-of-online/v1/05-sign-page', {
      record,
      currentIndex,
      totalRecords: records.length
    })
  })

  // SIGN PAGE (POST) – user confirms they want to accept
  router.post('/registrar-view-of-online/v1/sign', function (req, res) {
    // After sign step, always go to confirmation page
    res.redirect('/registrar-view-of-online/v1/06-confirmation-page')
  })

  // 3) RECORD CONFIRMATION PAGE – always the same page
  router.get('/registrar-view-of-online/v1/06-confirmation-page', function (req, res) {
    const currentIndex = getCurrentIndex(req)

    // If index is somehow beyond the end, clamp to the last record
    const safeIndex = Math.min(currentIndex, records.length - 1)

    const record = records[safeIndex]

    // Is there another record after this one?
    const hasMoreRecords = safeIndex + 1 < records.length

    res.render('registrar-view-of-online/v1/06-confirmation-page', {
      record,
      currentIndex: safeIndex,
      totalRecords: records.length,
      hasMoreRecords
    })
  })

  // RECORD CONFIRMATION PAGE (POST) – "Next record" button
  router.post('/registrar-view-of-online/v1/06-confirmation-page', function (req, res) {
    let currentIndex = getCurrentIndex(req)

    // Only increment if there IS another record
    if (currentIndex + 1 < records.length) {
      currentIndex = currentIndex + 1
      req.session.data[indexKey] = currentIndex
    }

    // Always return to the same confirmation page,
    // which will either show "Next record" (if more)
    // or "There are no more records." (if not).
    res.redirect('/registrar-view-of-online/v1/04-check-answers-page')
  })



//need this at the end:
};