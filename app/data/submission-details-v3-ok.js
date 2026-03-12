
const records = [
  {
  id: 1,
  recordStatus: 'pending',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Yes',
  printNumber: '1',
  submissionDate: '16 March 2026',
  daysSinceSubmission: '2',
  referenceNumber: '2026/0350801284377829-WA',

  // child 1
  childFirstName: 'Caleb',
  childFirstNameError: 'no',

  childLastName: 'MURPHY',
  childMiddleName: '',

  orNHS: '429 275 0611',
  nhsNHS: '429 275 0611',

  orDoB: '12 March 2026',
  nhsDoB: '12 March 2026',
  daysSinceBirth: '6',

  orSex: 'Male',
  nhsSex: 'Male',

  orPoB: 'Whittington Hospital, Wakefield',
  nhsPoB: 'Whittington Hospital, Wakefield',
  PoBError: 'no',

  // mother 1 (different surname)
  orMotherFirstName: 'Anita',
  nhsMotherFirstName: 'Anita',
  golMotherFirstName: 'Anita',
  mFNameError: 'no',
  golmFNameError: 'no',

  orMotherLastName: 'WONG',
  nhsMotherLastName: 'WONG',
  golMotherLastName: 'WONG',
  mLNameError: 'no',
  golfspPrevLNameError: 'no',

  maidenName: 'WONG',
  differentMaidenName: '',

  orMotherCurrentAddress: '61 Meadow View, Wakefield NG2 3ZT',
  nhsMotherCurrentAddress: '61 Meadow View, Wakefield NG2 3ZT',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: '61 Meadow View, Wakefield NG2 3ZT',
  motherAddressToBError: 'no',

  motherPoB: 'Belfast, Northern Ireland',

  motherOccupation: 'Graphic designer',
  motherOccupationError: 'no',

  // father or second parent 1
  fspFirstName: 'Kiran',
  fspLastName: 'MURPHY',
  golfspFirstName: 'Kiran',
  golfspLastName: 'MURPHY',
  golfspFNameError: 'no',
  golfspLNameError: 'no',

  fspPoB: 'Chipping Norton, England',
  fspCurrentAddress: '61 Meadow View, Wakefield NG2 3ZT',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Plumber',
  fspOccupationError: 'no',

  // statistics - mother 1
  motherDob: '20 April 2001',
  motherDobError: 'no',
  motherEmployment: 'Employed, not supervising',
  motherFirstMarriage: 'Yes',
  motherSpanishNat: 'No',

  stillbirths: '0',
  previousBirths: '0',

  // statistics - father or second female parent 1
  fspDoB: '7 September 1999',
  fspEmployment: 'Self-employed, not supervising',
  fspMarriageDate: '3 June 2022',
  fspSpanishNat: 'No'
},
{
    id: 2,
    recordStatus: 'onhold',
    qualification1: 'Mother',
    qualification2: 'Father',
    relationshipType: 'No',
    printNumber: '1',
    submissionDate: '16 March 2026',
    daysSinceSubmission: '2',
    referenceNumber: '2026/8493453868883245-WA',
    //child 2
    childFirstName: 'Trevor',
    childFirstNameError: 'no',

    childLastName: 'HOUND',
    childMiddleName: '',

    orNHS: '987 654 3210',
    nhsNHS: '987 654 3210',

    orDoB: '28 February 2026',
    nhsDoB: '28 February 2026',
    daysSinceBirth: '22',

    orSex: 'Male',
    nhsSex: 'Male',
    sexError: 'no',

    orPoB: 'Whittington Hospital, Wakefield',
    nhsPoB: 'Whittington Hospital, Wakefield',
    PoBError: 'no',

    //mother 2
    orMotherFirstName: 'Tracy',
    
    nhsMotherFirstName: 'Tracy',
    golMotherFirstName: 'Tracy, Jane',
    mFNameError: 'no',
    golmFNameError: 'no',

    orMotherLastName: 'SMITH',
    nhsMotherLastName: 'SMITH',
    golMotherLastName: 'SMITH',
    golMotherPreviousLastName: 'SMITH',
    mLNameError: 'no',
    golfspPrevLNameError: 'no',

    maidenName: 'THOMSON',
    differentMaidenName: 'SHORT',

    orMotherCurrentAddress: '29 Rootfield Drive, Wakefield WT8 5UY',
    nhsMotherCurrentAddress: '29 Rootfield Drive, Wakefield WT8 5UY',
    currentAddressError: 'no',

    orMotherAddressToB: 'Same as current address',
    nhsMotherAddressToB: '29 Rootfield Drive, Wakefield WT8 5UY',
    motherAddressToBError: 'no',

    motherPoB: 'Fife, Scotland',

    motherOccupation: 'Hairdressser',
    motherOccupationError: 'no',

    //father or second parent 2
    fspFirstName: 'Jimmy',
    fspLastName: 'HOUND',
     golfspFirstName: 'James',
  golfspLastName: 'HOUND',
  golfspFNameError: 'no',
  golfspLNameError: 'no',

    fspPoB: 'Dublin, Ireland',
    fspCurrentAddress: '29 Rootfield Drive, Wakefield WT8 5UY',
    fspAddressToB: "Same as mother's current address",
    fspOccupation: 'Uber driver',
    fspOccupationError: 'no',

    //statistics - mother 2
    motherDob: '20 April 2001',
    motherDobError: 'no',
    motherEmployment: 'Employed, supervising',
    motherFirstMarriage: 'Yes',
    motherSpanishNat: 'No',

    stillbirths: '0',
    previousBirths: '0',

    //statistics - father or second female parent 2
    fspDoB: '7 September 1999',
    fspEmployment: 'Self-employed, not supervising',
    fspMarriageDate: '3 June 2022',
    fspSpanishNat: 'No'
  },
   {
    id: 3,
    recordStatus: 'inreview',
    qualification1: 'Mother',
    qualification2: 'Father',
    relationshipType: 'Yes',
    printNumber: '1',
    submissionDate: '17 March 2026',
    daysSinceSubmission: '1',
    referenceNumber: '2026/8493453855695001-WA',
    
    //child 1
    childFirstName: 'Dougal',
    childFirstNameError: 'no',

    childLastName: 'MCGOVER',
    childMiddleName: '',

    orNHS: '987 654 3210',
    nhsNHS: '987 654 3210',

    orDoB: '1 March 2026',
    nhsDoB: '1 March 2026',
    daysSinceBirth: '21',

    orSex: 'Male',
    nhsSex: 'Male',

    orPoB: "St. Mary's, Wakefield",
    nhsPoB: "St. Mary's, Wakefield",
    PoBError: 'no',

    //mother 1
    orMotherFirstName: 'Lucy',
    nhsMotherFirstName: 'Lucy',
    golMotherFirstName: 'Lucy',
    mFNameError: 'no',
    golmFNameError: 'no',

    orMotherLastName: 'MCGOVER',
    nhsMotherLastName: 'MCGOVER',
    golMotherLastName: 'MCGOVER',
    mLNameError: 'no',
    golfspPrevLNameError: 'no',

    maidenName: 'SMITH',
    differentMaidenName: '',

    orMotherCurrentAddress: '29 Rootfield Drive, Wakefield WT8 5UY',
    nhsMotherCurrentAddress: '29 Rootfield Drive, Wakefield WT8 5UY',
    currentAddressError: 'no',

    orMotherAddressToB: 'Same as current address',
    nhsMotherAddressToB: '29 Rootfield Drive, Wakefield WT8 5UY',
    motherAddressToBError: 'no',

    motherPoB: 'London, England',

    motherOccupation: 'Teacher',
    motherOccupationError: 'no',

    //father or second parent 1
    fspFirstName: 'Clive',
    fspLastName: 'MCGOVER',
     golfspFirstName: 'Clive  ',
  golfspLastName: 'MCGOVER',
  golfspFNameError: 'no',
  golfspLNameError: 'no',

    fspPoB: 'Edinburgh, Scotland',
    fspCurrentAddress: "Same as mother's current address",
    fspAddressToB: "Same as mother's current address",
    fspOccupation: 'Driver',
    fspOccupationError: 'no',

    //statistics - mother 1
    motherDob: '20 April 2001',
    motherDobError: 'no',
    motherEmployment: 'Employed, not supervising',
    motherFirstMarriage: 'Yes',
    motherSpanishNat: 'No',

    stillbirths: '0',
    previousBirths: '0',

    //statistics - father or second female parent 1
    fspDoB: '7 September 1999',
    fspEmployment: 'Self-employed, not supervising',
    fspMarriageDate: '3 June 2022',
    fspSpanishNat: 'No'
  },
{
  id: 4,
  recordStatus: 'pending',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Yes',
  printNumber: '2',
  submissionDate: '18 March 2026',
  daysSinceSubmission: '0',
  referenceNumber: '2026/7647380067736981-WA',

  // child 9
  childFirstName: 'Niah',
  childFirstNameError: 'no',

  childLastName: 'PATEL',
  childMiddleName: '',

  orNHS: '425 365 8546',
  nhsNHS: '425 365 8546',

  orDoB: '3 February 2026',
  nhsDoB: '3 February 2026',
  daysSinceBirth: '43',

  orSex: 'Female',
  nhsSex: 'Female',

  orPoB: 'Whittington Hospital, Wakefield',
  nhsPoB: 'Whittington Hospital, Wakefield',
  PoBError: 'no',

  // mother 9 (different surname)
  orMotherFirstName: 'Meera',
  nhsMotherFirstName: 'Meera',
  golMotherFirstName: 'Meera',
  mFNameError: 'no',
  golmFNameError: 'no',

  orMotherLastName: 'PATEL',
  nhsMotherLastName: 'PATEL',
  golMotherLastName: 'PATEL',
  mLNameError: 'no',
  golfspPrevLNameError: 'no',

  maidenName: 'PATEL',
  differentMaidenName: '',

  orMotherCurrentAddress: '19 Highfield Court, Wakefield S10 2XY',
  nhsMotherCurrentAddress: '201 Broomdown Road, Wakefield W10 H9Y',
  currentAddressError: 'yes',

  orMotherAddressToB: 'Granville Hall, 97b Granville Road, Wakefield S10 3HL',
  nhsMotherAddressToB: '19 Highfield Court, Wakefield S10 2XY',
  motherAddressToBError: 'yes',

  motherPoB: 'Cardiff, Wales',

  motherOccupation: 'I work kitchen',
  motherOccupationError: 'no',

  // father or second parent 9
  fspFirstName: 'Sidu',
  fspLastName: 'PATEL',
   golfspFirstName: 'Sidu',
  golfspLastName: 'PATEL',
  golfspFNameError: 'no',
  golfspLNameError: 'no',

  fspPoB: 'Delhi, India',
  fspCurrentAddress: 'Granville Hall, 97b Granville Road, Wakefield S10 3HL',
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
  id: 5,
  recordStatus: 'pending',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'No',
  printNumber: 'None',
  submissionDate: '18 March 2026',
  daysSinceSubmission: '0',
  referenceNumber: '2026/5335676801370276-WA',

  // child 5
  childFirstName: '',
  childFirstNameError: 'yes',

  childLastName: 'WALSH',
  childMiddleName: '',

  orNHS: '598 670 8818',
  nhsNHS: '598 670 8818',

  orDoB: '20 February 2026',
  nhsDoB: '20 February 2026',
  daysSinceBirth: '26',

  orSex: 'Male',
  nhsSex: 'Male',

  orPoB: '14 Brookside Park, Brighton BH2 1PQ',
  nhsPoB: '14 Brookside Park, Brighton BH2 1PQ',
  PoBError: 'no',

  // mother 5 (different surname)
  orMotherFirstName: 'Chloe',
  nhsMotherFirstName: 'Chloe',
  golMotherFirstName: 'Chloe',
  mFNameError: 'no',
  golmFNameError: 'no',

  orMotherLastName: 'PRICE',
  nhsMotherLastName: 'PRICE',
  golMotherLastName: 'PRICE',
  mLNameError: 'no',
  golfspPrevLNameError: 'yes',

  maidenName: 'PRICE',
  differentMaidenName: 'WATERS',

  orMotherCurrentAddress: '14 Brookside Park, Brighton BH2 1PQ',
  nhsMotherCurrentAddress: '14 Brookside Park, Brighton BH2 1PQ',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: '14 Brookside Park, Brighton BH2 1PQ',
  motherAddressToBError: 'no',

  motherPoB: 'Leeds, England',

  motherOccupation: 'Pharmacist',
  motherOccupationError: 'no',

  // father or second parent 5
  fspFirstName: 'Jake',
  fspLastName: 'WALSH',
   golfspFirstName: 'Jake',
  golfspLastName: 'WALSH',
  golfspFNameError: 'no',
  golfspLNameError: 'no',

  fspPoB: 'Swansea, Wales',
  fspCurrentAddress: "Same as mother's current address",
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Paramedic',
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
  recordStatus: 'print',
  qualification1: 'Mother',
  qualification2: 'none',
  relationshipType: 'No',
  printNumber: '1',
  submissionDate: '13 March 2026',
  daysSinceSubmission: '5',
  referenceNumber: '2026/9096411180994545-WA',

  // child 3
  childFirstName: 'Amelia',
  childFirstNameError: 'no',

  childLastName: 'BAXTER',
  childMiddleName: '',

  orNHS: '679 068 6287',
  nhsNHS: '679 068 6287',

  orDoB: '15 March 2026',
  nhsDoB: '15 March 2026',
  daysSinceBirth: '3',

  orSex: 'Female',
  nhsSex: 'Female',

  orPoB: "St. Mary's, Wakefield",
  nhsPoB: "St. Mary's, Wakefield",
  PoBError: 'no',

  // mother 3
  orMotherFirstName: 'Hannah',
  nhsMotherFirstName: 'Hannah',
  golMotherFirstName: 'Hannah',
  mFNameError: 'no',
  golmFNameError: 'no',

  orMotherLastName: 'BAXTER',
  nhsMotherLastName: 'BAXTER',
  golMotherLastName: 'BAXTER',
  mLNameError: 'no',
  golfspPrevLNameError: 'no',

  maidenName: '',
  differentMaidenName: '',

  orMotherCurrentAddress: '12 Queen Street, Wakefield WS1 4AB',
  nhsMotherCurrentAddress: '12 Queen Street, Wakefield WS1 4AB',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: '12 Queen Street, Wakefield WS1 4AB',
  motherAddressToBError: 'no',

  motherPoB: 'London, England',

  motherOccupation: 'Nurse',
  motherOccupationError: 'no',

  // father or second parent 3
  fspFirstName: 'Mark',
  fspLastName: 'BAXTER',
   golfspFirstName: 'Mark',
  golfspLastName: 'BAXTER',
  golfspFNameError: 'no',
  golfspLNameError: 'no',

  fspPoB: 'Watford, England',
  fspCurrentAddress: '12 Queen Street, Wakefield WS1 4AB',
  fspAddressToB: "Same as mother's current address",
  fspOccupation: 'Electrician',
  fspOccupationError: 'no',

  // statistics - mother 3
  motherDob: '20 April 2001',
  motherDobError: 'no',
  motherEmployment: 'No gainful employment',
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
  id: 7,
  recordStatus: 'print',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Yes',
  printNumber: '1',
  submissionDate: '14 March 2026',
  daysSinceSubmission: '4',
  referenceNumber: '2026/5176807879976211-WA',

  // child 4
  childFirstName: 'Rohan',
  childFirstNameError: 'no',

  childLastName: 'SINGH',
  childMiddleName: '',

  orNHS: '028 123 5895',
  nhsNHS: '028 123 5895',

  orDoB: '21 February 2026',
  nhsDoB: '21 February 2026',
  daysSinceBirth: '25',

  orSex: 'Male',
  nhsSex: 'Male',

  orPoB: "St. Mary's, Wakefield",
  nhsPoB: "St. Mary's, Wakefield",
  PoBError: 'no',

  // mother 4
  orMotherFirstName: 'Rachel',
  nhsMotherFirstName: 'Rachel',
  golMotherFirstName: 'Rachel',
  mFNameError: 'no',
  golmFNameError: 'no',

  orMotherLastName: 'SINGH',
  nhsMotherLastName: 'SINGH',
  golMotherLastName: 'SINGH',
  mLNameError: 'no',
  golfspPrevLNameError: 'no',

  maidenName: 'MILES',
  differentMaidenName: '',

  orMotherCurrentAddress: '5 Riverside Close, Wakefield WO1 6DF',
  nhsMotherCurrentAddress: '5 Riverside Close, Wakefield WO1 6DF',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: '5 Riverside Close, Wakefield WO1 6DF',
  motherAddressToBError: 'no',

  motherPoB: 'Birmingham, England',

  motherOccupation: 'Software developer',
  motherOccupationError: 'no',

  // father or second parent 4
  fspFirstName: 'Anil',
  fspLastName: 'SINGH',
   golfspFirstName: 'Anil',
  golfspLastName: 'SINGH',
  golfspFNameError: 'no',
  golfspLNameError: 'no',

  fspPoB: 'Warwick, England',
  fspCurrentAddress: "Same as mother's current address",
  fspAddressToB: "Same as mother's current address",
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
  id: 8,
  recordStatus: 'print',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'No',
  printNumber: '1',
  submissionDate: '14 March 2026',
  daysSinceSubmission: '4',
  referenceNumber: '2026/6276032933248051-WA',

  // child 5
  childFirstName: 'Layla',
  childFirstNameError: 'no',

  childLastName: 'KELLY',
  childMiddleName: '',

  orNHS: '892 569 0942',
  nhsNHS: '892 569 0942',

  orDoB: '28 February 2026',
  nhsDoB: '28 February 2026',
  daysSinceBirth: '18',

  orSex: '14 January 2026',
  nhsSex: '14 January 2026',

  orPoB: "St. Mary's, Wakefield",
  nhsPoB: "St. Mary's, Wakefield",
  PoBError: 'no',

  // mother 5
  orMotherFirstName: 'Priya',
  nhsMotherFirstName: 'Priya',
  golMotherFirstName: 'Priya',
  mFNameError: 'no',
  golmFNameError: 'no',

  orMotherLastName: 'KELLY',
  nhsMotherLastName: 'KELLY',
  golMotherLastName: 'KELLY',
  mLNameError: 'no',
  golfspPrevLNameError: 'no',

  maidenName: '',
  differentMaidenName: '',

  orMotherCurrentAddress: '88 Mill Lane, Wakefield WS3 4GH',
  nhsMotherCurrentAddress: '88 Mill Lane, Wakefield WS3 4GH',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: '88 Mill Lane, Wakefield WS3 4GH',
  motherAddressToBError: 'no',

  motherPoB: 'Wakefield, Englan',

  motherOccupation: 'Accountant',
  motherOccupationError: 'no',

  // father or second parent 5
  fspFirstName: 'Samir',
  fspLastName: 'KELLY',
   golfspFirstName: 'Samir',
  golfspLastName: 'KELLY',
  golfspFNameError: 'no',
  golfspLNameError: 'no',

  fspPoB: 'Coventry, England',
  fspCurrentAddress: '88 Mill Lane, Wakefield WS3 4GH',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Amazon Warehouse worker',
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
  id: 9,
  recordStatus: 'print',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Yes',
  printNumber: '1',
  submissionDate: '14 March 2026',
  daysSinceSubmission: '4',
  referenceNumber: '2026/4275847818426044-WA',

  // child 6
  childFirstName: 'Milo',
  childFirstNameError: 'no',

  childLastName: 'JAMESON',
  childMiddleName: '',

  orNHS: '718 878 3493',
  nhsNHS: '718 878 3493',

  orDoB: '10 March 2026',
  nhsDoB: '10 March 2026',
  daysSinceBirth: '8',

  orSex: 'Male',
  nhsSex: 'Male',

  orPoB: 'Whittington Hospital, Wakefield',
  nhsPoB: 'Whittington Hospital, Wakefield',
  PoBError: 'no',

  // mother 6
  orMotherFirstName: 'Danielle',
  nhsMotherFirstName: 'Danielle',
  golMotherFirstName: 'Danielle',
  mFNameError: 'no',
  golmFNameError: 'no',

  orMotherLastName: 'JAMESON',
  nhsMotherLastName: 'JAMESON',
  golMotherLastName: 'JAMESON',
  mLNameError: 'no',
  golfspPrevLNameError: 'no',

  maidenName: 'SELBY',
  differentMaidenName: '',

  orMotherCurrentAddress: '24 Oakwood Avenue, Wakefield W20 3JK',
  nhsMotherCurrentAddress: '24 Oakwood Avenue, Wakefield W20 3JK',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: '24 Oakwood Avenue, Wakefield W20 3JK',
  motherAddressToBError: 'no',

  motherPoB: 'Glasgow, Scotland',

  motherOccupation: 'Retail assistant',
  motherOccupationError: 'no',

  // father or second parent 6
  fspFirstName: 'Lewis',
  fspLastName: 'JAMESON',
   golfspFirstName: 'Lewis',
  golfspLastName: 'JAMESON',
  golfspFNameError: 'no',
  golfspLNameError: 'no',

  fspPoB: 'Glasgow, Scotland',
  fspCurrentAddress: '24 Oakwood Avenue, Wakefield W20 3JK',
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
  id: 10,
  recordStatus: 'print',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Yes',
  printNumber: '1',
  submissionDate: '14 March 2026',
  daysSinceSubmission: '4',
  referenceNumber: '2026/7509741457818402-WA',

  // child 7
  childFirstName: 'Ethan',
  childFirstNameError: 'no',

  childLastName: 'TURNER',
  childMiddleName: '',

  orNHS: '911 178 2367',
  nhsNHS: '911 178 2367',

  orDoB: '17 February 2026',
  nhsDoB: '17 February 2026',
  daysSinceBirth: '29',

  orSex: 'Female',
  nhsSex: 'Female',

  orPoB: "St. Mary's, Wakefield",
  nhsPoB: "St. Mary's, Wakefield",
  PoBError: 'no',

  // mother 7
  orMotherFirstName: 'Laura',
  nhsMotherFirstName: 'Laura',
  golMotherFirstName: 'Laura',
  mFNameError: 'no',
  golmFNameError: 'no',

  orMotherLastName: 'TURNER',
  nhsMotherLastName: 'TURNER',
  golMotherLastName: 'TURNER',
  mLNameError: 'no',
  golfspPrevLNameError: 'no',

  maidenName: 'BENSON',
  differentMaidenName: '',

  orMotherCurrentAddress: '47 Kingsway, Wakefield CF10 3AA',
  nhsMotherCurrentAddress: '47 Kingsway, Wakefield CF10 3AA',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: '47 Kingsway, Wakefield CF10 3AA',
  motherAddressToBError: 'no',

  motherPoB: 'London, England',

  motherOccupation: 'Administrator',
  motherOccupationError: 'no',

  // father or second parent 7
  fspFirstName: 'Rafael',
  fspLastName: 'TURNER',
   golfspFirstName: 'rafael',
  golfspLastName: 'TURNER',
  golfspFNameError: 'no',
  golfspLNameError: 'no',

  fspPoB: 'Wakefield, England',
  fspCurrentAddress: '47 Kingsway, Wakefield CF10 3AA',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Teacher',
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
  id: 11,
  recordStatus: 'inperson',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Yes',
  printNumber: '2',
  submissionDate: '18 March 2026',
  daysSinceSubmission: '0',
  referenceNumber: '2026/7647380067736981-WA',

  // child 11
  childFirstName: 'Niah',
  childFirstNameError: 'no',

  childLastName: 'PATEL',
  childMiddleName: '',

  orNHS: '425 365 8546',
  nhsNHS: '425 365 8546',

  orDoB: '3 February 2026',
  nhsDoB: '3 February 2026',
  daysSinceBirth: '43',

  orSex: 'Female',
  nhsSex: 'Female',

  orPoB: 'Whittington Hospital, Wakefield',
  nhsPoB: 'Whittington Hospital, Wakefield',
  PoBError: 'no',

  // mother 11 (different surname)
  orMotherFirstName: 'Meera',
  nhsMotherFirstName: 'Meera',
  golMotherFirstName: 'Meera',
  mFNameError: 'no',
  golmFNameError: 'no',

  orMotherLastName: 'PATEL',
  nhsMotherLastName: 'PATEL',
  golMotherLastName: 'PATEL',
  mLNameError: 'no',
  golfspPrevLNameError: 'no',

  maidenName: 'PATEL',
  differentMaidenName: '',

  orMotherCurrentAddress: '19 Highfield Court, Wakefield S10 2XY',
  nhsMotherCurrentAddress: '201 Broomdown Road, Wakefield W10 H9Y',
  currentAddressError: 'yes',

  orMotherAddressToB: 'Granville Hall, 97b Granville Road, Wakefield S10 3HL',
  nhsMotherAddressToB: '19 Highfield Court, Wakefield S10 2XY',
  motherAddressToBError: 'yes',

  motherPoB: 'Cardiff, Wales',

  motherOccupation: 'I work kitchen',
  motherOccupationError: 'no',

  // father or second parent 11
  fspFirstName: 'Sidu',
  fspLastName: 'PATEL',
   golfspFirstName: 'Sidu',
  golfspLastName: 'PATEL',
  golfspFNameError: 'no',
  golfspLNameError: 'no',

  fspPoB: 'Delhi, India',
  fspCurrentAddress: 'Granville Hall, 97b Granville Road, Wakefield S10 3HL',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Security guard',
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
  recordStatus: 'print',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Yes',
  printNumber: '1',
  submissionDate: '14 March 2026',
  daysSinceSubmission: '4',
  referenceNumber: '2026/0350801284377829-WA',

  // child 12
  childFirstName: 'Caleb',
  childFirstNameError: 'no',

  childLastName: 'MURPHY',
  childMiddleName: '',

  orNHS: '429 275 0611',
  nhsNHS: '429 275 0611',

  orDoB: '4 March 2026',
  nhsDoB: '4 March 2026',
  daysSinceBirth: '14',

  orSex: 'Male',
  nhsSex: 'Male',

  orPoB: 'Whittington Hospital, Wakefield',
  nhsPoB: 'Whittington Hospital, Wakefield',
  PoBError: 'no',

  // mother 12 (different surname)
  orMotherFirstName: 'Anita',
  nhsMotherFirstName: 'Anita',
  golMotherFirstName: 'Anita',
  mFNameError: 'no',
  golmFNameError: 'no',

  orMotherLastName: 'WONG',
  nhsMotherLastName: 'WONG',
  golMotherLastName: 'WONG',
  mLNameError: 'no',
  golfspPrevLNameError: 'no',

  maidenName: 'WONG',
  differentMaidenName: '',

  orMotherCurrentAddress: '61 Meadow View, Wakefield NG2 3ZT',
  nhsMotherCurrentAddress: '61 Meadow View, Wakefield NG2 3ZT',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: '61 Meadow View, Wakefield NG2 3ZT',
  motherAddressToBError: 'no',

  motherPoB: 'Belfast, Northern Ireland',

  motherOccupation: 'Graphic designer',
  motherOccupationError: 'no',

  // father or second parent 12
  fspFirstName: 'Kiran',
  fspLastName: 'MURPHY',
  golfspFirstName: 'Kiran',
  golfspLastName: 'MURPHY',
  golfspFNameError: 'no',
  golfspLNameError: 'no',

  fspPoB: 'Chipping Norton, England',
  fspCurrentAddress: '61 Meadow View, Wakefield NG2 3ZT',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Plumber',
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