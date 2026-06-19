
// app/views/registrar-view-of-online/_routes.js

module.exports = function (router) {
  // Load records data (relative to this file)
  const records = require('../../data/records')

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
  router.get('/registrar-view-of-online/record', function (req, res) {
    const currentIndex = getCurrentIndex(req)

    if (currentIndex >= records.length) {
      // If index somehow went past the end, show the "no more records" state
      return res.redirect('/registrar-view-of-online/record-confirmation')
    }

    const record = records[currentIndex]

    res.render('registrar-view-of-online/record', {
      record,
      currentIndex,
      totalRecords: records.length
    })
  })

  // RECORD PAGE (POST) – user clicks "Accept"
  router.post('/registrar-view-of-online/record', function (req, res) {
    // For now we just go to the sign page – no need to change index yet
    res.redirect('/registrar-view-of-online/sign')
  })

  // 2) SIGN PAGE – second confirmation step
  router.get('/registrar-view-of-online/sign', function (req, res) {
    const currentIndex = getCurrentIndex(req)

    if (currentIndex >= records.length) {
      return res.redirect('/registrar-view-of-online/record-confirmation')
    }

    const record = records[currentIndex]

    res.render('registrar-view-of-online/sign', {
      record,
      currentIndex,
      totalRecords: records.length
    })
  })

  // SIGN PAGE (POST) – user confirms they want to accept
  router.post('/registrar-view-of-online/sign', function (req, res) {
    // After sign step, always go to confirmation page
    res.redirect('/registrar-view-of-online/record-confirmation')
  })

  // 3) RECORD CONFIRMATION PAGE – always the same page
  router.get('/registrar-view-of-online/record-confirmation', function (req, res) {
    const currentIndex = getCurrentIndex(req)

    // If index is somehow beyond the end, clamp to the last record
    const safeIndex = Math.min(currentIndex, records.length - 1)

    const record = records[safeIndex]

    // Is there another record after this one?
    const hasMoreRecords = safeIndex + 1 < records.length

    res.render('registrar-view-of-online/record-confirmation', {
      record,
      currentIndex: safeIndex,
      totalRecords: records.length,
      hasMoreRecords
    })
  })

  // RECORD CONFIRMATION PAGE (POST) – "Next record" button
  router.post('/registrar-view-of-online/record-confirmation', function (req, res) {
    let currentIndex = getCurrentIndex(req)

    // Only increment if there IS another record
    if (currentIndex + 1 < records.length) {
      currentIndex = currentIndex + 1
      req.session.data[indexKey] = currentIndex
    }

    // Always return to the same confirmation page,
    // which will either show "Next record" (if more)
    // or "There are no more records." (if not).
    res.redirect('/registrar-view-of-online/record')
  })

 
}
