//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();

router.get('/', (req, res) => {
  res.render('index');
});


// Import and attach other routes
require('./views/requisitions/later/_routes')(router);

require('./views/requisitions/req-ur-r1/_routes')(router);

require('./views/requisitions/req-ur-r2/_routes')(router);

require('./views/requisitions/req-ur-r3/_routes')(router);

require('./views/requisitions/req-mvp-plus-minus/_routes')(router);

require('./views/stillbirths/latest/_routes')(router);
require('./views/stillbirths/latest/informant/_routes')(router);
require('./views/stillbirths/latest/no-informant/_routes')(router);

require('./views/stillbirths/v1/_routes')(router);
require('./views/stillbirths/v1/informant/_routes')(router);
require('./views/stillbirths/v1/no-informant/_routes')(router);

require('./views/births/v1/_routes')(router);

require('./views/stillbirths/v2/_routes')(router);
require('./views/stillbirths/v2/informant/_routes')(router);
require('./views/stillbirths/v2/no-informant/_routes')(router);

require('./views/stillbirths/v3/_routes')(router);
require('./views/stillbirths/v3/informant/_routes')(router);
require('./views/stillbirths/v3/no-informant/_routes')(router);

require('./views/stillbirths/v4/_routes')(router);
require('./views/stillbirths/v4/informant/_routes')(router);
require('./views/stillbirths/v4/no-informant/_routes')(router);

require('./views/registrar-view-of-online/v1/_routes')(router);
require('./views/registrar-view-of-online/v2/_routes')(router);

module.exports = router;

// 




