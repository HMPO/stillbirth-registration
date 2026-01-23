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


//route for the Last contact status
router.post('/mvp/update-contact-status-v2a', function (req, res) {
  // Force overwrite every time
 req.session.data.contactStatus = req.body.contactStatus || "4-week"; // Default to "4 week"

  // Redirect back to the page with anchor
  res.redirect('/req-mvp-plus-minus/03-notification-detail-v2a#contact-question');
});

//route for the Special circumstances status
router.post('/mvp/update-special-status-v2a', function (req, res) {
  // Force overwrite every time
 req.session.data.specialStatus = req.body.specialStatus || "no"; // Default to "no"

  // Redirect back to the page with anchor
  res.redirect('/req-mvp-plus-minus/03-notification-detail-v2a#special-question');
});




//need this at the end:
};