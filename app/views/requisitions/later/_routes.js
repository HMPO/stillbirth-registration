module.exports = function(router) {
  

// Name and date


// router.get('/latest/child-details/name-date', (req, res) => {
//   res.sendFile(path.join(__dirname, 'child-details', 'name-date.html'));
// });

  // TASK LIST
  // router.get('/latest/informant/task-list-form', (req, res) => {
  //   req.session.data = req.session.data || {};
  //   res.render('task-list', { data: req.session.data });
  // });


// v2
//route for the Last contact status
router.post('/update-appointment-status', function (req, res) {
  // Force overwrite every time
 req.session.data.contactStatus = req.body.contactStatus || "no"; // Default to "no"

  // Redirect back to the page with anchor
  res.redirect('/later/03-notification-detail-v2#appointment-question');
});

//route for the Last contact status
router.post('/update-contact-status', function (req, res) {
  // Force overwrite every time
 req.session.data.contactStatus = req.body.contactStatus || "4-week"; // Default to "4 week"

  // Redirect back to the page with anchor
  res.redirect('/later/03-notification-detail-v2#contact-question');
});

//route for the Special circumstances status
router.post('/update-special-status', function (req, res) {
  // Force overwrite every time
 req.session.data.specialStatus = req.body.specialStatus || "no"; // Default to "no"

  // Redirect back to the page with anchor
  res.redirect('/later/03-notification-detail-v2#special-question');
});

//route for the GRO status
router.post('/update-gro-status', function (req, res) {
  // Force overwrite every time
 req.session.data.groStatus = req.body.groStatus || "no"; // Default to "no"

  // Redirect back to the page with anchor
  res.redirect('/later/03-notification-detail-v2#gro-question');
});

// v2a
//route for the Last contact status
router.post('/update-appointment-status-v2a', function (req, res) {
  // Force overwrite every time
 req.session.data.contactStatus = req.body.contactStatus || "no"; // Default to "no"

  // Redirect back to the page with anchor
  res.redirect('/later/03-notification-detail-v2a#appointment-question');
});

//route for the Last contact status
router.post('/update-contact-status-v2a', function (req, res) {
  // Force overwrite every time
 req.session.data.contactStatus = req.body.contactStatus || "4-week"; // Default to "4 week"

  // Redirect back to the page with anchor
  res.redirect('/later/03-notification-detail-v2a#contact-question');
});

//route for the Special circumstances status
router.post('/update-special-status-v2a', function (req, res) {
  // Force overwrite every time
 req.session.data.specialStatus = req.body.specialStatus || "no"; // Default to "no"

  // Redirect back to the page with anchor
  res.redirect('/later/03-notification-detail-v2a#special-question');
});

//route for the GRO status
router.post('/update-gro-status-v2a', function (req, res) {
  // Force overwrite every time
 req.session.data.groStatus = req.body.groStatus || "no"; // Default to "no"

  // Redirect back to the page with anchor
  res.redirect('/later/03-notification-detail-v2a#gro-question');
});


//need this at the end:
};