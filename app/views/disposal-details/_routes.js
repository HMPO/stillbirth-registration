
module.exports = function (router) {

  // 1. Load records data (relative to this file)
//  const fileRecords = require('../../../data/submission-details')

// Task 1 - saving disposal details to session data
  // GET: Show the disposal-form page
  router.get('/disposal-details/task1/disposal-form', function (req, res) {
    res.render('disposal-details/task1/disposal-form');
  });

  // POST: Handle form submission and redirect to disposal-page
  router.post('/disposal-details/task1/disposal-form', function (req, res) {
    // The Prototype Kit automatically stores all fields in req.session.data
    res.redirect('/disposal-details/task1/disposal-page');
  });

  // GET: Show the disposal-page
  router.get('/disposal-details/task1/disposal-page', function (req, res) {
    res.render('disposal-details/task1/disposal-page');
  });


  // Task 2- saving disposal details to session data
  // GET: Show the disposal-form page
  router.get('/disposal-details/task2/disposal-form', function (req, res) {
    res.render('disposal-details/task2/disposal-form');
  });

  // POST: Handle form submission and redirect to disposal-page
  router.post('/disposal-details/task2/disposal-form', function (req, res) {
    // The Prototype Kit automatically stores all fields in req.session.data
    res.redirect('/disposal-details/task2/disposal-page');
  });

  // GET: Show the disposal-page
  router.get('/disposal-details/task2/disposal-page', function (req, res) {
    res.render('disposal-details/task2/disposal-page');
  });


  // No POST needed for 06 if your "next" button is a link to 04 with nextId


//need this
};

