
const records = [
  {
    id: 1,
    recordStatus: 'inreview',
    qualification1: 'Mother',
    qualification2: 'Father',
    relationshipType: 'Married or in civil partnership',
    printNumber: '1',
    submissionDate: '4 February 2026',
    daysSinceSubmission: '4',
    referenceNumber: '2026/849345385/WA',
    
    //child 1
    childFirstName: 'Dougal',
    childFirstNameError: 'no',

    childLastName: 'MCGOVER',
    childMiddleName: '',

    orNHS: '987 654 3210',
    nhsNHS: 'Matches these details',

    orDoB: '29 January 2026',
    nhsDoB: 'Matches these details',
    daysSinceBirth: '6',

    orSex: 'Male',
    nhsSex: 'Matches these details',

    orPoB: "St. Mary's, Wakefield",
    nhsPoB: "Matches these details",
    PoBError: 'no',

    //mother 1
    orMotherFirstName: 'Lucy',
    nhsMotherFirstName: 'Lucy',
    mFNameError: 'no',

    orMotherLastName: 'MCGOVER',
    nhsMotherLastName: 'MCGOVER',
    mLNameError: 'no',

    maidenName: '',
    differentMaidenName: '',

    orMotherCurrentAddress: '29 Rootfield Drive, Winchester WT8 5UY',
    nhsMotherCurrentAddress: 'Matches these details',
    currentAddressError: 'no',

    orMotherAddressToB: 'Same as current address',
    nhsMotherAddressToB: 'Matches these details',
    motherAddressToBError: 'no',

    motherPoB: 'London',

    motherOccupation: 'Teacher',
    motherOccupationError: 'no',

    //father or second parent 1
    fspFirstName: 'Clive',
    fspLastName: 'MCGOVER',

    fspPoB: 'Hounslow',
    fspCurrentAddress: "29 Rootfield Drive, Winchester WT8 5UY",
    fspAddressToB: "Same as mother's current address",
    fspOccupation: 'Uber driver',
    fspOccupationError: 'no',

    //statistics - mother 1
    motherDob: '20 April 2001',
    motherDobError: 'no',
    motherEmployment: 'Employed, not supervising',
    motherFirstMarriage: 'yes',
    motherSpanishNat: 'no',

    stillbirths: '0',
    previousBirths: '0',

    //statistics - father or second female parent 1
    fspDoB: '7 September 1999',
    fspEmployment: 'Self-employed, not supervising',
    fspMarriageDate: '3 June 2022',
    fspSpanishNat: 'No'
  },
   {
    id: 2,
    recordStatus: 'pending',
    qualification1: 'Mother',
    qualification2: 'Father',
    relationshipType: 'Married or civil partnership',
    printNumber: '1',
    submissionDate: '4 February 2026',
    daysSinceSubmission: '2',
    referenceNumber: '2026/849345386/WA',
    //child 2
    childFirstName: 'Trevor',
    childFirstNameError: 'no',

    childLastName: 'HOUND',
    childMiddleName: '',

    orNHS: '987 654 3210',
    nhsNHS: 'Matches these details',

    orDoB: '13 January 2026',
    nhsDoB: 'Matches these details',
    daysSinceBirth: '22',

    orSex: 'Female',
    nhsSex: 'Matches these details',
    sexError: 'no',

    orPoB: 'Whittington, Wakefield',
    nhsPoB: 'Matches these details',
    PoBError: 'no',

    //mother 2
    orMotherFirstName: 'Ophelia',
    nhsMotherFirstName: 'Ophelia',
    mFNameError: 'no',

    orMotherLastName: 'HOUND',
    nhsMotherLastName: 'HOUND',
    mLNameError: 'no',

    maidenName: '',
    differentMaidenName: '',

    orMotherCurrentAddress: '29 Rootfield Drive, Winchester WT8 5UY',
    nhsMotherCurrentAddress: 'Matches these details',
    currentAddressError: 'no',

    orMotherAddressToB: 'Same as current address',
    nhsMotherAddressToB: 'Matches these details',
    motherAddressToBError: 'no',

    motherPoB: 'Fife, Scotland',

    motherOccupation: 'Hairdressser',
    motherOccupationError: 'no',

    //father or second parent 2
    fspFirstName: 'Jimmy',
    fspLastName: 'HOUND',

    fspPoB: 'Dublin, Ireland',
    fspCurrentAddress: '29 Rootfield Drive, Winchester WT8 5UY',
    fspAddressToB: 'Same as current address',
    fspOccupation: 'Driver',
    fspOccupationError: 'no',

    //statistics - mother 2
    motherDob: '20 April 2001',
    motherDobError: 'no',
    motherEmployment: 'Employed, not supervising',
    motherFirstMarriage: 'Yes',
    motherSpanishNat: 'No',

    stillbirths: '0',
    previousBirths: '0',

    //statistics - father or second female parent 2
    fspDoB: '7 September 1999',
    fspEmployment: 'Self-employed, not supervising',
    fspMarriageDate: '3 June 2022',
    fspSpanishNat: 'No'
  },{
  id: 3,
  recordStatus: 'pending',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Married or civil partnership',
  printNumber: '1',
  submissionDate: '31 January 2026',
  daysSinceSubmission: '8',
  referenceNumber: '9096411180994545',

  // child 3
  childFirstName: 'Amelia',
  childFirstNameError: 'no',

  childLastName: 'BAXTER',
  childMiddleName: '',

  orNHS: '679 068 6287',
  nhsNHS: 'Matches these details',

  orDoB: '30 January 2026',
  nhsDoB: 'Matches these details',
  daysSinceBirth: '1',

  orSex: 'Female',
  nhsSex: 'Matches these details',

  orPoB: "St. Mary's, Wakefield",
  nhsPoB: 'Matches these details',
  PoBError: 'no',

  // mother 3
  orMotherFirstName: 'Hannah',
  nhsMotherFirstName: 'Hannah',
  mFNameError: 'no',

  orMotherLastName: 'BAXTER',
  nhsMotherLastName: 'BAXTER',
  mLNameError: 'no',

  maidenName: '',
  differentMaidenName: '',

  orMotherCurrentAddress: '12 Queen Street, Leeds LS1 4AB',
  nhsMotherCurrentAddress: 'Matches these details',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: 'Matches these details',
  motherAddressToBError: 'no',

  motherPoB: 'London',

  motherOccupation: 'Nurse',
  motherOccupationError: 'no',

  // father or second parent 3
  fspFirstName: 'Mark',
  fspLastName: 'BAXTER',

  fspPoB: 'Hounslow',
  fspCurrentAddress: '12 Queen Street, Leeds LS1 4AB',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Electrician',
  fspOccupationError: 'no',

  // statistics - mother 3
  motherDob: '20 April 2001',
  motherDobError: 'no',
  motherEmployment: 'Employed, not supervising',
  motherFirstMarriage: 'Yes',
  motherSpanishNat: 'No',

  stillbirths: '0',
  previousBirths: '0',

  // statistics - father or second female parent 3
  fspDoB: '7 September 1999',
  fspEmployment: 'Self-employed, not supervising',
  fspMarriageDate: '3 June 2022',
  fspSpanishNat: 'No'
},{
  id: 4,
  recordStatus: 'pending',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Married or civil partnership',
  printNumber: '1',
  submissionDate: '4 February 2026',
  daysSinceSubmission: '4',
  referenceNumber: '5176807879976211',

  // child 4
  childFirstName: 'Rohan',
  childFirstNameError: 'no',

  childLastName: 'SINGH',
  childMiddleName: '',

  orNHS: '028 123 5895',
  nhsNHS: 'Matches these details',

  orDoB: '10 January 2026',
  nhsDoB: 'Matches these details',
  daysSinceBirth: '25',

  orSex: 'Male',
  nhsSex: 'Matches these details',

  orPoB: "St. Mary's, Wakefield",
  nhsPoB: 'Matches these details',
  PoBError: 'no',

  // mother 4
  orMotherFirstName: 'Rachel',
  nhsMotherFirstName: 'Rachel',
  mFNameError: 'no',

  orMotherLastName: 'SINGH',
  nhsMotherLastName: 'SINGH',
  mLNameError: 'no',

  maidenName: '',
  differentMaidenName: '',

  orMotherCurrentAddress: '5 Riverside Close, York YO1 6DF',
  nhsMotherCurrentAddress: 'Matches these details',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: 'Matches these details',
  motherAddressToBError: 'no',

  motherPoB: 'London',

  motherOccupation: 'Software developer',
  motherOccupationError: 'no',

  // father or second parent 4
  fspFirstName: 'David',
  fspLastName: 'SINGH',

  fspPoB: 'Hounslow',
  fspCurrentAddress: '5 Riverside Close, York YO1 6DF',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Bus driver',
  fspOccupationError: 'no',

  // statistics - mother 4
  motherDob: '20 April 2001',
  motherDobError: 'no',
  motherEmployment: 'Employed, not supervising',
  motherFirstMarriage: 'Yes',
  motherSpanishNat: 'No',

  stillbirths: '0',
  previousBirths: '0',

  // statistics - father or second female parent 4
  fspDoB: '7 September 1999',
  fspEmployment: 'Self-employed, not supervising',
  fspMarriageDate: '3 June 2022',
  fspSpanishNat: 'No'
},
{
  id: 5,
  recordStatus: 'pending',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Married or civil partnership',
  printNumber: '1',
  submissionDate: '1 February 2026',
  daysSinceSubmission: '4',
  referenceNumber: '6276032933248051',

  // child 5
  childFirstName: 'Layla',
  childFirstNameError: 'no',

  childLastName: 'KELLY',
  childMiddleName: '',

  orNHS: '892 569 0942',
  nhsNHS: 'Matches these details',

  orDoB: '14 January 2026',
  nhsDoB: 'Matches these details',
  daysSinceBirth: '18',

  orSex: 'Female',
  nhsSex: 'Matches these details',

  orPoB: "St. Mary's, Wakefield",
  nhsPoB: 'Matches these details',
  PoBError: 'no',

  // mother 5
  orMotherFirstName: 'Priya',
  nhsMotherFirstName: 'Priya',
  mFNameError: 'no',

  orMotherLastName: 'KELLY',
  nhsMotherLastName: 'KELLY',
  mLNameError: 'no',

  maidenName: '',
  differentMaidenName: '',

  orMotherCurrentAddress: '88 Mill Lane, Bristol BS3 4GH',
  nhsMotherCurrentAddress: 'Matches these details',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: 'Matches these details',
  motherAddressToBError: 'no',

  motherPoB: 'London',

  motherOccupation: 'Accountant',
  motherOccupationError: 'no',

  // father or second parent 5
  fspFirstName: 'Samir',
  fspLastName: 'KELLY',

  fspPoB: 'Hounslow',
  fspCurrentAddress: '88 Mill Lane, Bristol BS3 4GH',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Warehouse worker',
  fspOccupationError: 'no',

  // statistics - mother 5
  motherDob: '20 April 2001',
  motherDobError: 'no',
  motherEmployment: 'Employed, not supervising',
  motherFirstMarriage: 'Yes',
  motherSpanishNat: 'No',

  stillbirths: '0',
  previousBirths: '0',

  // statistics - father or second female parent 5
  fspDoB: '7 September 1999',
  fspEmployment: 'Self-employed, not supervising',
  fspMarriageDate: '3 June 2022',
  fspSpanishNat: 'No'
},
{
  id: 6,
  recordStatus: 'pending',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Married or civil partnership',
  printNumber: '1',
  submissionDate: '2 February 2026',
  daysSinceSubmission: '4',
  referenceNumber: '4275847818426044',

  // child 6
  childFirstName: 'Milo',
  childFirstNameError: 'no',

  childLastName: 'JAMESON',
  childMiddleName: '',

  orNHS: '718 878 3493',
  nhsNHS: 'Matches these details',

  orDoB: '25 January 2026',
  nhsDoB: 'Matches these details',
  daysSinceBirth: '8',

  orSex: 'Male',
  nhsSex: 'Matches these details',

  orPoB: 'Whittington, Wakefield',
  nhsPoB: 'Matches these details',
  PoBError: 'no',

  // mother 6
  orMotherFirstName: 'Danielle',
  nhsMotherFirstName: 'Danielle',
  mFNameError: 'no',

  orMotherLastName: 'JAMESON',
  nhsMotherLastName: 'JAMESON',
  mLNameError: 'no',

  maidenName: '',
  differentMaidenName: '',

  orMotherCurrentAddress: '24 Oakwood Avenue, Manchester M20 3JK',
  nhsMotherCurrentAddress: 'Matches these details',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: 'Matches these details',
  motherAddressToBError: 'no',

  motherPoB: 'London',

  motherOccupation: 'Retail assistant',
  motherOccupationError: 'no',

  // father or second parent 6
  fspFirstName: 'Lewis',
  fspLastName: 'JAMESON',

  fspPoB: 'Hounslow',
  fspCurrentAddress: '24 Oakwood Avenue, Manchester M20 3JK',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'IT consultant',
  fspOccupationError: 'no',

  // statistics - mother 6
  motherDob: '20 April 2001',
  motherDobError: 'no',
  motherEmployment: 'Employed, not supervising',
  motherFirstMarriage: 'Yes',
  motherSpanishNat: 'No',

  stillbirths: '0',
  previousBirths: '0',

  // statistics - father or second female parent 6
  fspDoB: '7 September 1999',
  fspEmployment: 'Self-employed, not supervising',
  fspMarriageDate: '3 June 2022',
  fspSpanishNat: 'No'
},
{
  id: 7,
  recordStatus: 'pending',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Married or civil partnership',
  printNumber: '1',
  submissionDate: '2 February 2026',
  daysSinceSubmission: '4',
  referenceNumber: '4599023239155979',

  // child 7
  childFirstName: 'Sienna',
  childFirstNameError: 'no',

  childLastName: 'OSBORNE',
  childMiddleName: '',

  orNHS: '989 452 8068',
  nhsNHS: 'Matches these details',

  orDoB: '10 January 2026',
  nhsDoB: 'Matches these details',
  daysSinceBirth: '23',

  orSex: 'Female',
  nhsSex: 'Matches these details',

  orPoB: 'Whittington, Wakefield',
  nhsPoB: 'Matches these details',
  PoBError: 'no',

  // mother 7
  orMotherFirstName: 'Farah',
  nhsMotherFirstName: 'Farah',
  mFNameError: 'no',

  orMotherLastName: 'OSBORNE',
  nhsMotherLastName: 'OSBORNE',
  mLNameError: 'no',

  maidenName: '',
  differentMaidenName: '',

  orMotherCurrentAddress: '3 Church Road, Newcastle NE1 5PL',
  nhsMotherCurrentAddress: 'Matches these details',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: 'Matches these details',
  motherAddressToBError: 'no',

  motherPoB: 'London',

  motherOccupation: 'Social worker',
  motherOccupationError: 'no',

  // father or second parent 7
  fspFirstName: 'Owen',
  fspLastName: 'OSBORNE',

  fspPoB: 'Hounslow',
  fspCurrentAddress: '3 Church Road, Newcastle NE1 5PL',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Chef',
  fspOccupationError: 'no',

  // statistics - mother 7
  motherDob: '20 April 2001',
  motherDobError: 'no',
  motherEmployment: 'Employed, not supervising',
  motherFirstMarriage: 'Yes',
  motherSpanishNat: 'No',

  stillbirths: '0',
  previousBirths: '0',

  // statistics - father or second female parent 7
  fspDoB: '7 September 1999',
  fspEmployment: 'Self-employed, not supervising',
  fspMarriageDate: '3 June 2022',
  fspSpanishNat: 'No'
},
{
  id: 8,
  recordStatus: 'pending',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Married or civil partnership',
  printNumber: '1',
  submissionDate: '31 January 2026',
  daysSinceSubmission: '4',
  referenceNumber: '7509741457818402',

  // child 8
  childFirstName: 'Ethan',
  childFirstNameError: 'no',

  childLastName: 'TURNER',
  childMiddleName: '',

  orNHS: '911 178 2367',
  nhsNHS: 'Matches these details',

  orDoB: '2 January 2026',
  nhsDoB: 'Matches these details',
  daysSinceBirth: '29',

  orSex: 'Female',
  nhsSex: 'Matches these details',

  orPoB: "St. Mary's, Wakefield",
  nhsPoB: 'Matches these details',
  PoBError: 'no',

  // mother 8
  orMotherFirstName: 'Laura',
  nhsMotherFirstName: 'Laura',
  mFNameError: 'no',

  orMotherLastName: 'TURNER',
  nhsMotherLastName: 'TURNER',
  mLNameError: 'no',

  maidenName: '',
  differentMaidenName: '',

  orMotherCurrentAddress: '47 Kingsway, Cardiff CF10 3AA',
  nhsMotherCurrentAddress: 'Matches these details',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: 'Matches these details',
  motherAddressToBError: 'no',

  motherPoB: 'London',

  motherOccupation: 'Administrator',
  motherOccupationError: 'no',

  // father or second parent 8
  fspFirstName: 'Rafael',
  fspLastName: 'TURNER',

  fspPoB: 'Hounslow',
  fspCurrentAddress: '47 Kingsway, Cardiff CF10 3AA',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Teacher',
  fspOccupationError: 'no',

  // statistics - mother 8
  motherDob: '20 April 2001',
  motherDobError: 'no',
  motherEmployment: 'Employed, not supervising',
  motherFirstMarriage: 'Yes',
  motherSpanishNat: 'No',

  stillbirths: '0',
  previousBirths: '0',

  // statistics - father or second female parent 8
  fspDoB: '7 September 1999',
  fspEmployment: 'Self-employed, not supervising',
  fspMarriageDate: '3 June 2022',
  fspSpanishNat: 'No'
},
{
  id: 9,
  recordStatus: 'pending',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Married or civil partnership',
  printNumber: '1',
  submissionDate: '3 February 2026',
  daysSinceSubmission: '4',
  referenceNumber: '7647380067736981',

  // child 9
  childFirstName: 'Niamh',
  childFirstNameError: 'no',

  childLastName: 'PATEL',
  childMiddleName: '',

  orNHS: '425 365 8546',
  nhsNHS: 'Matches these details',

  orDoB: '28 January 2026',
  nhsDoB: 'Matches these details',
  daysSinceBirth: '6',

  orSex: 'Female',
  nhsSex: 'Matches these details',

  orPoB: 'Whittington, Wakefield',
  nhsPoB: 'Matches these details',
  PoBError: 'no',

  // mother 9 (different surname)
  orMotherFirstName: 'Gemma',
  nhsMotherFirstName: 'Gemma',
  mFNameError: 'no',

  orMotherLastName: 'CLARK',
  nhsMotherLastName: 'CLARK',
  mLNameError: 'no',

  maidenName: '',
  differentMaidenName: '',

  orMotherCurrentAddress: '19 Highfield Court, Sheffield S10 2XY',
  nhsMotherCurrentAddress: 'Matches these details',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: 'Matches these details',
  motherAddressToBError: 'no',

  motherPoB: 'London',

  motherOccupation: 'Chef',
  motherOccupationError: 'no',

  // father or second parent 9
  fspFirstName: 'Thomas',
  fspLastName: 'PATEL',

  fspPoB: 'Hounslow',
  fspCurrentAddress: '19 Highfield Court, Sheffield S10 2XY',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Security guard',
  fspOccupationError: 'no',

  // statistics - mother 9
  motherDob: '20 April 2001',
  motherDobError: 'no',
  motherEmployment: 'Employed, not supervising',
  motherFirstMarriage: 'Yes',
  motherSpanishNat: 'No',

  stillbirths: '0',
  previousBirths: '0',

  // statistics - father or second female parent 9
  fspDoB: '7 September 1999',
  fspEmployment: 'Self-employed, not supervising',
  fspMarriageDate: '3 June 2022',
  fspSpanishNat: 'No'
},
{
  id: 10,
  recordStatus: 'pending',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Married or civil partnership',
  printNumber: '1',
  submissionDate: '31 January 2026',
  daysSinceSubmission: '4',
  referenceNumber: '0350801284377829',

  // child 10
  childFirstName: 'Caleb',
  childFirstNameError: 'no',

  childLastName: 'MURPHY',
  childMiddleName: '',

  orNHS: '429 275 0611',
  nhsNHS: 'Matches these details',

  orDoB: '17 January 2026',
  nhsDoB: 'Matches these details',
  daysSinceBirth: '14',

  orSex: 'Male',
  nhsSex: 'Matches these details',

  orPoB: 'Whittington, Wakefield',
  nhsPoB: 'Matches these details',
  PoBError: 'no',

  // mother 10 (different surname)
  orMotherFirstName: 'Anita',
  nhsMotherFirstName: 'Anita',
  mFNameError: 'no',

  orMotherLastName: 'WONG',
  nhsMotherLastName: 'WONG',
  mLNameError: 'no',

  maidenName: '',
  differentMaidenName: '',

  orMotherCurrentAddress: '61 Meadow View, Nottingham NG2 3ZT',
  nhsMotherCurrentAddress: 'Matches these details',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: 'Matches these details',
  motherAddressToBError: 'no',

  motherPoB: 'London',

  motherOccupation: 'Graphic designer',
  motherOccupationError: 'no',

  // father or second parent 10
  fspFirstName: 'Kiran',
  fspLastName: 'MURPHY',

  fspPoB: 'Hounslow',
  fspCurrentAddress: '61 Meadow View, Nottingham NG2 3ZT',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Plumber',
  fspOccupationError: 'no',

  // statistics - mother 10
  motherDob: '20 April 2001',
  motherDobError: 'no',
  motherEmployment: 'Employed, not supervising',
  motherFirstMarriage: 'Yes',
  motherSpanishNat: 'No',

  stillbirths: '0',
  previousBirths: '0',

  // statistics - father or second female parent 10
  fspDoB: '7 September 1999',
  fspEmployment: 'Self-employed, not supervising',
  fspMarriageDate: '3 June 2022',
  fspSpanishNat: 'No'
},
{
  id: 11,
  recordStatus: 'pending',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Married or civil partnership',
  printNumber: '1',
  submissionDate: '30 January 2026',
  daysSinceSubmission: '4',
  referenceNumber: '5335676801370276',

  // child 11
  childFirstName: 'Zara',
  childFirstNameError: 'no',

  childLastName: 'WALSH',
  childMiddleName: '',

  orNHS: '598 670 8818',
  nhsNHS: 'Matches these details',

  orDoB: '4 January 2026',
  nhsDoB: 'Matches these details',
  daysSinceBirth: '26',

  orSex: 'Male',
  nhsSex: 'Matches these details',

  orPoB: 'Whittington, Wakefield',
  nhsPoB: 'Matches these details',
  PoBError: 'no',

  // mother 11 (different surname)
  orMotherFirstName: 'Chloe',
  nhsMotherFirstName: 'Chloe',
  mFNameError: 'no',

  orMotherLastName: 'PRICE',
  nhsMotherLastName: 'PRICE',
  mLNameError: 'no',

  maidenName: '',
  differentMaidenName: '',

  orMotherCurrentAddress: '14 Brookside, Leicester LE2 1PQ',
  nhsMotherCurrentAddress: 'Matches these details',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: 'Matches these details',
  motherAddressToBError: 'no',

  motherPoB: 'London',

  motherOccupation: 'Pharmacist',
  motherOccupationError: 'no',

  // father or second parent 11
  fspFirstName: 'Jake',
  fspLastName: 'WALSH',

  fspPoB: 'Hounslow',
  fspCurrentAddress: '14 Brookside, Leicester LE2 1PQ',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Paramedic',
  fspOccupationError: 'no',

  // statistics - mother 11
  motherDob: '20 April 2001',
  motherDobError: 'no',
  motherEmployment: 'Employed, not supervising',
  motherFirstMarriage: 'Yes',
  motherSpanishNat: 'No',

  stillbirths: '0',
  previousBirths: '0',

  // statistics - father or second female parent 11
  fspDoB: '7 September 1999',
  fspEmployment: 'Self-employed, not supervising',
  fspMarriageDate: '3 June 2022',
  fspSpanishNat: 'No'
},
{
  id: 12,
  recordStatus: 'pending',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Married or civil partnership',
  printNumber: '1',
  submissionDate: '3 February 2026',
  daysSinceSubmission: '4',
  referenceNumber: '9771630942943272',

  // child 12
  childFirstName: 'Jonah',
  childFirstNameError: 'no',

  childLastName: 'REED',
  childMiddleName: '',

  orNHS: '033 733 7271',
  nhsNHS: 'Matches these details',

  orDoB: '2 January 2026',
  nhsDoB: 'Matches these details',
  daysSinceBirth: '32',

  orSex: 'Male',
  nhsSex: 'Matches these details',

  orPoB: 'Whittington, Wakefield',
  nhsPoB: 'Matches these details',
  PoBError: 'no',

  // mother 12 (different surname)
  orMotherFirstName: 'Meera',
  nhsMotherFirstName: 'Meera',
  mFNameError: 'no',

  orMotherLastName: 'ALLEN',
  nhsMotherLastName: 'ALLEN',
  mLNameError: 'no',

  maidenName: '',
  differentMaidenName: '',

  orMotherCurrentAddress: '32 Park Crescent, Liverpool L8 9RS',
  nhsMotherCurrentAddress: 'Matches these details',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: 'Matches these details',
  motherAddressToBError: 'no',

  motherPoB: 'London',

  motherOccupation: 'Laboratory technician',
  motherOccupationError: 'no',

  // father or second parent 12
  fspFirstName: 'Noel',
  fspLastName: 'REED',

  fspPoB: 'Hounslow',
  fspCurrentAddress: '32 Park Crescent, Liverpool L8 9RS',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Construction worker',
  fspOccupationError: 'no',

  // statistics - mother 12
  motherDob: '20 April 2001',
  motherDobError: 'no',
  motherEmployment: 'Employed, not supervising',
  motherFirstMarriage: 'Yes',
  motherSpanishNat: 'No',

  stillbirths: '0',
  previousBirths: '0',

  // statistics - father or second female parent 12
  fspDoB: '7 September 1999',
  fspEmployment: 'Self-employed, not supervising',
  fspMarriageDate: '3 June 2022',
  fspSpanishNat: 'No'
}
] 


module.exports = records