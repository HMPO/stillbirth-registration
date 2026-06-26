
module.exports = function (router) {

  // 1. Load records data (relative to this file)
  const fileRecords = require('../../../data/declaration-details')

  // 2. Seed session data once
  router.use((req, res, next) => {
    if (!req.session.data.records) {
      req.session.data.records = fileRecords
    }
    next()
  })

  // 3. Helpers
  function getRecords(req) {
    return req.session.data.records || []
  }

  function getRecordById(req, id) {
    const records = getRecords(req)
    return records.find(r => r.id === id)
  }

  function getIndexById(req, id) {
    const records = getRecords(req)
    return records.findIndex(r => r.id === id)
  }

  function getNextRecordId(req, id) {
    const records = getRecords(req)
    const currentIndex = getIndexById(req, id)

    if (currentIndex === -1) return null
    const nextIndex = currentIndex + 1
    if (nextIndex >= records.length) return null

    return records[nextIndex].id
  }

   // ---------------------------
  // 02 – Pending list (GET)
  // ---------------------------
 // router.get('/declaration/v1-register-declaration/02-pending-list', function (req, res) {

    //res.render('declaration/v1-register-declaration/02-pending-list', { data: req.query });
//res.render('declaration/v1-register-declaration/02-pending-list')
 // })


router.get('/declaration/v1-register-declaration/02-pending-list', function (req, res) {

  // 1. Load your records (however you store them)
  // If you load them from session, change this accordingly
  const records = req.session.data.records || [];

  // 2. Any OTHER data you want to pass to the page
  const existingData = {
    records: records,
    // add any other variables you normally send
  };

  // 3. Merge query params (e.g., ?sort=on-hold)
  const data = {
    ...existingData,
    ...req.query
  };

  // 4. Render the page
  res.render('declaration/v1-register-declaration/02-pending-list', { data });
});


  // ---------------------------
  // 03 – Register page (GET + POST)
  // ---------------------------

  // GET 03-register-page (first confirmation step)
  router.get('/declaration/v1-register-declaration/03-register-page', function (req, res) {
    const id = parseInt(req.query.id, 10)
    const record = getRecordById(req, id)

    if (!record) {
      return res.status(404).render('declaration/v1-register-declaration/record-not-found')
    }

    res.render('declaration/v1-register-declaration/03-register-page', { record })
  })

  // POST 03-register-page
  router.post('/declaration/v1-register-declaration/03-register-page', function (req, res) {
    const id = parseInt(req.body.id, 10)

    // Save checkbox state in session if needed
    req.session.data['register-confirm-' + id] = req.body.registerConfirm

    // Go to 04 for this record
    res.redirect('/declaration/v1-register-declaration/04-check-answers-page?id=' + id)
  })

  // ---------------------------
  // 04 – Check answers (GET + POST)
  // ---------------------------

  // GET 04-check-answers-page
  router.get('/declaration/v1-register-declaration/04-check-answers-page', function (req, res) {
    const id = parseInt(req.query.id, 10)
    const records = getRecords(req)

    const record = records.find(r => r.id === id)
    if (!record) {
      return res.status(404).render('declaration/v1-register-declaration/record-not-found')
    }

    const currentIndex = records.findIndex(r => r.id === id)
    const totalRecords = records.length

     const nextId =
      currentIndex + 1 < totalRecords
        ? records[currentIndex + 1].id
        : null

    res.render('declaration/v1-register-declaration/04-check-answers-page', {
      record,
      currentIndex,
      totalRecords,
      nextId
    })
  })

  // POST 04-check-answers-page – radio branching
  router.post('/declaration/v1-register-declaration/04-check-answers-page', function (req, res) {
    const id = parseInt(req.body.id, 10)

    req.session.data = req.session.data || {}

    const selectedOption = req.body.userRegistrationSatisfactory
    req.session.data['userRegistrationSatisfactory'] = selectedOption

    if (selectedOption === 'yes-complete') {
      res.redirect('/declaration/v1-register-declaration/05-sign-page?id=' + id)
    } else if (selectedOption === 'no-an-issue') {
      res.redirect('/declaration/v1-register-declaration/05a-next-steps-contact?id=' + id)
     } else if (selectedOption === 'no-another-district') {
      res.redirect('/declaration/v1-register-declaration/05c-next-steps-district?id=' + id)  
    } else {
      // Fallback – treat as yes
      res.redirect('/declaration/v1-register-declaration/05-sign-page?id=' + id)
    }
  })

  // ---------------------------
  // 04a notification (GET + POST)
  // ---------------------------

  // GET 04a 
  router.get('/declaration/v1-register-declaration/04a-notification-detail', function (req, res) {
    const id = parseInt(req.query.id, 10)
    const record = getRecordById(req, id)

    if (!record) {
      return res.status(404).render('declaration/v1-register-declaration/record-not-found')
    }

    res.render('declaration/v1-register-declaration/04a-notification-detail', { record, id })
  })

  // POST 04a 
router.post('/declaration/v1-register-declaration/04a-notification-detail', function (req, res) {
    const id = parseInt(req.body.id, 10)

    // store any 'signed' flag here if you need to

    // Go to 06 confirmation for this record
   // res.redirect('/declaration/v1-register-declaration/06c-confirmation-district-routing?id=' + id)
  })

  // ---------------------------
  // 05 – Sign page (GET + POST)
  // ---------------------------

  // GET 05-sign-page – second confirmation step
  router.get('/declaration/v1-register-declaration/05-sign-page', function (req, res) {
    const id = parseInt(req.query.id, 10)
    const record = getRecordById(req, id)

    if (!record) {
      return res.status(404).render('declaration/v1-register-declaration/record-not-found')
    }

    res.render('declaration/v1-register-declaration/05-sign-page', { record, id })
  })

  // POST 05-sign-page – user confirms they want to accept
  router.post('/declaration/v1-register-declaration/05-sign-page', function (req, res) {
    
    const id = parseInt(req.body.id, 10)

    // store any 'signed' flag here if you need to

    // change the status
    
    const records = req.session.data.records || []

    // Find the record with this id
    const record = records.find(r => String(r.id) === String(id))

    if (record) {
      // Change the status so it moves list
      record.recordStatus = 'print'
    }
    //end changing status

    // Go to 06 confirmation for this record
    res.redirect('/declaration/v1-register-declaration/06-confirmation-page?id=' + id)
  })

  // ---------------------------
  // 05a - Next step - contact (GET + POST)
  // ---------------------------

  // GET 05a NEXT step
  router.get('/declaration/v1-register-declaration/05a-next-steps-contact', function (req, res) {
    const id = parseInt(req.query.id, 10)
    const record = getRecordById(req, id)

    if (!record) {
      return res.status(404).render('declaration/v1-register-declaration/record-not-found')
    }

    res.render('declaration/v1-register-declaration/05a-next-steps-contact', { record, id })
  })

  // POST 05a Next steps Status form - for when there is an issue on hold or in-person 
router.post('/declaration/v1-register-declaration/05a-next-steps-contact', function (req, res) {

  // Ensure session data exists
  req.session.data = req.session.data || {};
  const id = parseInt(req.body.id, 10)

  // Save the selected radio button values to the session
  const selectedOption = req.body.userRegistrationStatus;
  
   //console.log('Selected option:', selectedOption);
  req.session.data['userRegistrationStatus'] = selectedOption;
  
  // Redirect based on the selected option
  if (selectedOption === 'status-on-hold') {
    res.redirect('06a-confirmation-hold?id=' + id);
  } else if (selectedOption === 'status-in-person') {
    res.redirect('05b-confirm-appt-req?id=' + id);
  } else if (selectedOption === 'status-complete') {
    //res.redirect('06-confirmation-page');
     // Go to 06 confirmation for this record


    res.redirect('06-confirmation-page?id=' + id)
  } else {
    // Handle unexpected values (optional)
    //res.redirect('06-confirmation-page'); // Redirect back to the form if no valid option is selected
    res.redirect('06-confirmation-page?id=' + id)
  }
}); 

// ---------------------------
  // 05b – Confirm appt page (GET + POST)
  // ---------------------------

  // GET 05b-confirm-appt-req – second confirmation step for appt
  router.get('/declaration/v1-register-declaration/05b-confirm-appt-req', function (req, res) {
    const id = parseInt(req.query.id, 10)
    const record = getRecordById(req, id)

    if (!record) {
      return res.status(404).render('declaration/v1-register-declaration/record-not-found')
    }

    res.render('declaration/v1-register-declaration/05b-confirm-appt-req', { record, id })
  })

  // POST 05a confirm appt – user confirms they want to accept
  router.post('/declaration/v1-register-declaration/05b-confirm-appt-req', function (req, res) {
    const id = parseInt(req.body.id, 10)

    // store any 'signed' flag here if you need to

    // change status so it moves to the appointment list

const records = req.session.data.records || []

    // Find the record with this id
    const record = records.find(r => String(r.id) === String(id))

    if (record) {
      // Change the status so it moves list
      record.recordStatus = 'inperson'
    }
// end change status

    // Go to 06 confirmation for this record
    res.redirect('/declaration/v1-register-declaration/06b-confirmation-appointment?id=' + id)
  })

// ---------------------------
  // 05c - Next step - district change (GET + POST)
  // ---------------------------

  // GET 05c NEXT step
  router.get('/declaration/v1-register-declaration/05c-next-steps-district', function (req, res) {
    const id = parseInt(req.query.id, 10)
    const record = getRecordById(req, id)

    if (!record) {
      return res.status(404).render('declaration/v1-register-declaration/record-not-found')
    }

    res.render('declaration/v1-register-declaration/05c-next-steps-district', { record, id })
  })

  // POST 05c Next steps Status form - for when there is an issue on hold or in-person 
router.post('/declaration/v1-register-declaration/05c-next-steps-district', function (req, res) {
    const id = parseInt(req.body.id, 10)

    // store any 'signed' flag here if you need to

    // change the status
    
    const records = req.session.data.records || []

    // Find the record with this id
    const record = records.find(r => String(r.id) === String(id))

    if (record) {
      // Change the status so it moves list
      record.recordStatus = 'done'
    }
    //end changing status

    // Go to 06 confirmation for this record
    res.redirect('/declaration/v1-register-declaration/06c-confirmation-district-routing?id=' + id)
  })

  // ---------------------------
  // 06 – Confirmation + next record (GET)
  // ---------------------------

  router.get('/declaration/v1-register-declaration/06-confirmation-page', function (req, res) {
    const id = parseInt(req.query.id, 10)

    const records = getRecords(req)
    const record = records.find(r => r.id === id)

    if (!record) {
      return res.status(404).render('declaration/v1-register-declaration/record-not-found')
    }

    const currentIndex = records.findIndex(r => r.id === id)
    const totalRecords = records.length

    const nextId =
      currentIndex + 1 < totalRecords
        ? records[currentIndex + 1].id
        : null

    res.render('declaration/v1-register-declaration/06-confirmation-page', {
      record,
      currentIndex,
      totalRecords,
      nextId
    })
  })

  // No POST needed for 06 if your "next" button is a link to 04 with nextId


  // ---------------------------
  // 06a – Confirmation + next record (GET)
  // ---------------------------

  router.get('/declaration/v1-register-declaration/06a-confirmation-hold', function (req, res) {
    const id = parseInt(req.query.id, 10)

    const records = getRecords(req)
    const record = records.find(r => r.id === id)

    if (!record) {
      return res.status(404).render('declaration/v1-register-declaration/record-not-found')
    }

    const currentIndex = records.findIndex(r => r.id === id)
    const totalRecords = records.length

    const nextId =
      currentIndex + 1 < totalRecords
        ? records[currentIndex + 1].id
        : null

    res.render('declaration/v1-register-declaration/06a-confirmation-hold', {
      record,
      currentIndex,
      totalRecords,
      nextId
    })
  })

  // No POST needed for 06 if your "next" button is a link to 04 with nextId

// ---------------------------
  // 06b – Confirmation + next record (GET)
  // ---------------------------

  router.get('/declaration/v1-register-declaration/06b-confirmation-appointment', function (req, res) {
    const id = parseInt(req.query.id, 10)

    const records = getRecords(req)
    const record = records.find(r => r.id === id)

    if (!record) {
      return res.status(404).render('declaration/v1-register-declaration/record-not-found')
    }

    const currentIndex = records.findIndex(r => r.id === id)
    const totalRecords = records.length

    const nextId =
      currentIndex + 1 < totalRecords
        ? records[currentIndex + 1].id
        : null

    res.render('declaration/v1-register-declaration/06b-confirmation-appointment', {
      record,
      currentIndex,
      totalRecords,
      nextId
    })
  })
  // No POST needed for 06 if your "next" button is a link to 04 with nextId

  // ---------------------------
  // 06c – District Confirmation + next record (GET)
  // ---------------------------

  router.get('/declaration/v1-register-declaration/06c-confirmation-district-routing', function (req, res) {
    const id = parseInt(req.query.id, 10)

    const records = getRecords(req)
    const record = records.find(r => r.id === id)

    if (!record) {
      return res.status(404).render('declaration/v1-register-declaration/record-not-found')
    }

    const currentIndex = records.findIndex(r => r.id === id)
    const totalRecords = records.length

    const nextId =
      currentIndex + 1 < totalRecords
        ? records[currentIndex + 1].id
        : null

    res.render('declaration/v1-register-declaration/06c-confirmation-district-routing', {
      record,
      currentIndex,
      totalRecords,
      nextId
    })
  })

//need this
};

