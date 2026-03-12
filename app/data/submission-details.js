
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
  childMiddleName: 'Harry',

  orNHS: '429 275 0611',
  nhsNHS: '429 275 0611',

  orDoB: '12 March 2026',
  nhsDoB: '12 March 2026',
  daysSinceBirth: '6',

  orSex: 'Male',
  nhsSex: 'Male',

  orPoB: 'Whittington Hospital, Wakefield',
  nhsPoB: 'Whittington Hospital, Wakefield',
  orPoBType: 'Hospital, birth centre, or other medical location',
  nhsPoBType: 'NHS hospital',
  PoBError: 'no',

  // mother 1 (different surname)
  orMotherFirstName: 'Anita',
  orMotherMiddleName: 'Sophie',
  nhsMotherFirstName: 'Anita',
  golMotherFirstName: 'Anita, Sophie',
  golMotherPreviousFirstNames: 'Anita, Sophie',
  mFNameError: 'no',

  orMotherLastName: 'WONG',
  nhsMotherLastName: 'WONG',
  golMotherLastNames: 'WONG',
  mLNameError: 'no',
  

  maidenName: 'WONG',
  differentMaidenName: '',
  golMotherPreviousLastNames: 'WONG',
  golmPrevLNameError: 'no',

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
  golfspPrevLNameError: 'no',

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
    childMiddleName: 'Barrington',

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
    orPoBType: 'Hospital, birth centre, or other medical location',
    nhsPoBType: 'NHS hospital',
    PoBError: 'no',

    //mother 2
    orMotherFirstName: 'Tracy',
    orMotherMiddleName: 'Jane',
    nhsMotherFirstName: 'Tracy',
    golMotherFirstName: 'Tracy, Jane',
    golMotherPreviousFirstNames: 'Tracy, Jane',
    mFNameError: 'no',

    orMotherLastName: 'SMITH',
    nhsMotherLastName: 'SMITH',
    golMotherLastNames: 'SMITH, SHORT',
    mLNameError: 'yes',
   
    maidenName: 'THOMSON',
    differentMaidenName: '',
    golMotherPreviousLastNames: 'SMITH, SHERIDAN, THOMPSON',
    golmPrevLNameError: 'yes',

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
    
    golfspFNameError: 'yes',
    golfspLNameError: 'yes',
    golfspPrevLNameError: 'no',

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
    
    //child 3
    childFirstName: 'Dougal',
    childFirstNameError: 'no',

    childLastName: 'MCGOVER',
    childMiddleName: 'James',

    orNHS: '987 654 3210',
    nhsNHS: '987 654 3210',

    orDoB: '1 March 2026',
    nhsDoB: '1 March 2026',
    daysSinceBirth: '21',

    orSex: 'Male',
    nhsSex: 'Male',

    orPoB: "St. Mary's, Wakefield",
    nhsPoB: "St. Mary's, Wakefield",
    orPoBType: 'Hospital, birth centre, or other medical location',
    nhsPoBType: 'NHS hospital',
    PoBError: 'no',

    //mother 3
    orMotherFirstName: 'Lucy',
    orMotherMiddleName: 'Rebecca',
    nhsMotherFirstName: 'Lucy',
    golMotherFirstName: 'Lucy',
    golMotherPreviousFirstNames: 'Lucy, Rebecca',
    mFNameError: 'no',

    orMotherLastName: 'MCGOVER',
    nhsMotherLastName: 'MCGOVER',
    golMotherLastNames: 'MCGOVER',
    mLNameError: 'no',

    maidenName: 'SHORT',
    differentMaidenName: '',
    golMotherPreviousLastNames: 'SHORT',
    golmPrevLNameError: 'no',

    orMotherCurrentAddress: '29 Rootfield Drive, Wakefield WT8 5UY',
    nhsMotherCurrentAddress: '29 Rootfield Drive, Wakefield WT8 5UY',
    currentAddressError: 'no',

    orMotherAddressToB: 'Same as current address',
    nhsMotherAddressToB: '29 Rootfield Drive, Wakefield WT8 5UY',
    motherAddressToBError: 'no',

    motherPoB: 'London, England',

    motherOccupation: 'Teacher',
    motherOccupationError: 'no',

    //father or second parent 3
    fspFirstName: 'Clive',
    fspLastName: 'MCGOVER',
     golfspFirstName: 'Clive  ',
  golfspLastName: 'MCGOVER',
  
  golfspFNameError: 'no',
  golfspLNameError: 'no',
  golfspPrevLNameError: 'no',

    fspPoB: 'Edinburgh, Scotland',
    fspCurrentAddress: "Same as mother's current address",
    fspAddressToB: "Same as mother's current address",
    fspOccupation: 'Driver',
    fspOccupationError: 'no',

    //statistics - mother 3
    motherDob: '20 April 2001',
    motherDobError: 'no',
    motherEmployment: 'Employed, not supervising',
    motherFirstMarriage: 'Yes',
    motherSpanishNat: 'No',

    stillbirths: '0',
    previousBirths: '0',

    //statistics - father or second female parent 3
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

  // child 4
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
  orPoBType: 'Hospital, birth centre, or other medical location',
  nhsPoBType: 'NHS hospital',
  PoBError: 'no',

  // mother 4
  orMotherFirstName: 'Meera',
  orMotherMiddleName: '',
  nhsMotherFirstName: 'Meera',
  golMotherFirstName: 'Meera',
  golMotherPreviousFirstNames: 'Meera',
  mFNameError: 'no',

  orMotherLastName: 'PATEL',
  nhsMotherLastName: 'PATEL',
  golMotherLastNames: 'PATEL',
  mLNameError: 'no',

  maidenName: 'PATEL',
  differentMaidenName: '',
  golMotherPreviousLastNames: 'PATEL, KHAN',
  golmPrevLNameError: 'no',

  orMotherCurrentAddress: '19 Highfield Court, Wakefield S10 2XY',
  nhsMotherCurrentAddress: '201 Broomdown Road, Wakefield W10 H9Y',
  currentAddressError: 'yes',

  orMotherAddressToB: 'Granville Hall, 97b Granville Road, Wakefield S10 3HL',
  nhsMotherAddressToB: '19 Highfield Court, Wakefield S10 2XY',
  motherAddressToBError: 'yes',

  motherPoB: 'Cardiff, Wales',

  motherOccupation: 'I work kitchen',
  motherOccupationError: 'no',

  // father or second parent 4
  fspFirstName: 'Sidu',
  fspLastName: 'PATEL',
   golfspFirstName: 'Sidu',
  golfspLastName: 'PATEL',
  
  golfspFNameError: 'no',
  golfspLNameError: 'no',
  golfspPrevLNameError: 'no',

  fspPoB: 'Delhi, India',
  fspCurrentAddress: 'Granville Hall, 97b Granville Road, Wakefield S10 3HL',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Security guard',
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

  orPoB: 'Ground floor flat, 14a Brookside Park, Brighton BH2 1PQ',
  nhsPoB: '14a Brookside Park, Brighton BH2 1PQ',
  orPoBType: "Homebirth",
  nhsPoBType: 'At a domestic address',
  PoBError: 'no',

  // mother 5 
  orMotherFirstName: 'Chloe',
  orMotherMiddleName: 'Jemima',
  nhsMotherFirstName: 'Chloe',
  golMotherFirstName: 'Chloe',
  golMotherPreviousFirstNames: 'Chloe, Jemima',
  mFNameError: 'no',

  orMotherLastName: 'PRICE',
  nhsMotherLastName: 'PRICE',
  golMotherLastNames: 'PRICE',
  mLNameError: 'no',

  maidenName: 'PRICE',
  differentMaidenName: 'WATERS',
  golMotherPreviousLastNames: 'WATERS, PRICE',
  golmPrevLNameError: 'no',

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
  golfspPrevLNameError: 'no',

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

  // child 6
  childFirstName: 'Amelia',
  childFirstNameError: 'no',

  childLastName: 'BAXTER',
  childMiddleName: 'Madeleine',

  orNHS: '679 068 6287',
  nhsNHS: '679 068 6287',

  orDoB: '15 March 2026',
  nhsDoB: '15 March 2026',
  daysSinceBirth: '3',

  orSex: 'Female',
  nhsSex: 'Female',

  orPoB: "St. Mary's, Wakefield",
  nhsPoB: "St. Mary's, Wakefield",
  orPoBType: 'Hospital, birth centre, or other medical location',
  nhsPoBType: 'NHS hospital',
  PoBError: 'no',

  // mother 6
  orMotherFirstName: 'Hannah',
  orMotherMiddleName: 'Amanda',
  nhsMotherFirstName: 'Hannah',
  golMotherFirstName: 'Hannah',
  golMotherPreviousFirstNames: 'Hannah, Amanda',
  mFNameError: 'no',

  orMotherLastName: 'BAXTER',
  nhsMotherLastName: 'BAXTER',
  golMotherLastNames: 'BAXTER',
  mLNameError: 'no',

  maidenName: '',
  differentMaidenName: '',
  golMotherPreviousLastNames: 'BAXTER',
  golmPrevLNameError: 'no',

  orMotherCurrentAddress: '12 Queen Street, Wakefield WS1 4AB',
  nhsMotherCurrentAddress: '12 Queen Street, Wakefield WS1 4AB',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: '12 Queen Street, Wakefield WS1 4AB',
  motherAddressToBError: 'no',

  motherPoB: 'London, England',

  motherOccupation: 'Nurse',
  motherOccupationError: 'no',

  // father or second parent 6
  fspFirstName: 'Mark',
  fspLastName: 'BAXTER',
   golfspFirstName: 'Mark',
  golfspLastName: 'BAXTER',
  
  golfspFNameError: 'no',
  golfspLNameError: 'no',
  golfspPrevLNameError: 'no',

  fspPoB: 'Watford, England',
  fspCurrentAddress: '12 Queen Street, Wakefield WS1 4AB',
  fspAddressToB: "Same as mother's current address",
  fspOccupation: 'Electrician',
  fspOccupationError: 'no',

  // statistics - mother 6
  motherDob: '20 April 2001',
  motherDobError: 'no',
  motherEmployment: 'No gainful employment',
  motherFirstMarriage: 'Yes',
  motherSpanishNat: 'No',

  stillbirths: '0',
  previousBirths: '0',

  // statistics - father or second female parent 6
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

  // child 7
  childFirstName: 'Rohan',
  childFirstNameError: 'no',

  childLastName: 'SINGH',
  childMiddleName: 'Johnathan',

  orNHS: '028 123 5895',
  nhsNHS: '028 123 5895',

  orDoB: '21 February 2026',
  nhsDoB: '21 February 2026',
  daysSinceBirth: '25',

  orSex: 'Male',
  nhsSex: 'Male',

  orPoB: "St. Mary's, Wakefield",
  nhsPoB: "St. Mary's, Wakefield",
  orPoBType: 'Hospital, birth centre, or other medical location',
  nhsPoBType: 'NHS hospital',
  PoBError: 'no',

  // mother 7
  orMotherFirstName: 'Rachel',
  orMotherMiddleName: 'Charlotte',
  nhsMotherFirstName: 'Rachel',
  golMotherFirstName: 'Rachel',
  golMotherPreviousFirstNames: 'Rachel, Charlotte',
  mFNameError: 'no',

  orMotherLastName: 'SINGH',
  nhsMotherLastName: 'SINGH',
  golMotherLastNames: 'SINGH',
  mLNameError: 'no',

  maidenName: 'MILES',
  differentMaidenName: '',
  golMotherPreviousLastNames: 'MILES, SINGH',
  golmPrevLNameError: 'no',

  orMotherCurrentAddress: '5 Riverside Close, Wakefield WO1 6DF',
  nhsMotherCurrentAddress: '5 Riverside Close, Wakefield WO1 6DF',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: '5 Riverside Close, Wakefield WO1 6DF',
  motherAddressToBError: 'no',

  motherPoB: 'Birmingham, England',

  motherOccupation: 'Software developer',
  motherOccupationError: 'no',

  // father or second parent 7
  fspFirstName: 'Anil',
  fspLastName: 'SINGH',
   golfspFirstName: 'Anil',
  golfspLastName: 'SINGH',
  
  golfspFNameError: 'no',
  golfspLNameError: 'no',
  golfspPrevLNameError: 'no',

  fspPoB: 'Warwick, England',
  fspCurrentAddress: "Same as mother's current address",
  fspAddressToB: "Same as mother's current address",
  fspOccupation: 'Bus driver',
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
  recordStatus: 'print',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'No',
  printNumber: '1',
  submissionDate: '14 March 2026',
  daysSinceSubmission: '4',
  referenceNumber: '2026/6276032933248051-WA',

  // child 8
  childFirstName: 'Layla',
  childFirstNameError: 'no',

  childLastName: 'KELLY',
  childMiddleName: 'Hana',

  orNHS: '892 569 0942',
  nhsNHS: '892 569 0942',

  orDoB: '28 February 2026',
  nhsDoB: '28 February 2026',
  daysSinceBirth: '18',

  orSex: '14 January 2026',
  nhsSex: '14 January 2026',

  orPoB: "St. Mary's, Wakefield",
  nhsPoB: "St. Mary's, Wakefield",
  orPoBType: 'Hospital, birth centre, or other medical location',
  nhsPoBType: 'NHS hospital',
  PoBError: 'no',

  // mother 8
  orMotherFirstName: 'Priya',
  orMotherMiddleName: '',
  nhsMotherFirstName: 'Priya',
  golMotherFirstName: 'Priya',
  golMotherPreviousFirstNames: 'Priya',
  mFNameError: 'no',

  orMotherLastName: 'KELLY',
  nhsMotherLastName: 'KELLY',
  golMotherLastNames: 'KELLY',
  mLNameError: 'no',

  maidenName: '',
  differentMaidenName: '',
  golMotherPreviousLastNames: 'KELLY',
  golmPrevLNameError: 'no',

  orMotherCurrentAddress: '88 Mill Lane, Wakefield WS3 4GH',
  nhsMotherCurrentAddress: '88 Mill Lane, Wakefield WS3 4GH',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: '88 Mill Lane, Wakefield WS3 4GH',
  motherAddressToBError: 'no',

  motherPoB: 'Wakefield, Englan',

  motherOccupation: 'Accountant',
  motherOccupationError: 'no',

  // father or second parent 8
  fspFirstName: 'Samir',
  fspLastName: 'KELLY',
   golfspFirstName: 'Samir',
  golfspLastName: 'KELLY',
  
  golfspFNameError: 'no',
  golfspLNameError: 'no',
  golfspPrevLNameError: 'no',

  fspPoB: 'Coventry, England',
  fspCurrentAddress: '88 Mill Lane, Wakefield WS3 4GH',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Amazon Warehouse worker',
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
  recordStatus: 'print',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Yes',
  printNumber: '1',
  submissionDate: '14 March 2026',
  daysSinceSubmission: '4',
  referenceNumber: '2026/4275847818426044-WA',

  // child 9
  childFirstName: 'Milo',
  childFirstNameError: 'no',

  childLastName: 'JAMESON',
  childMiddleName: 'Juno',

  orNHS: '718 878 3493',
  nhsNHS: '718 878 3493',

  orDoB: '10 March 2026',
  nhsDoB: '10 March 2026',
  daysSinceBirth: '8',

  orSex: 'Male',
  nhsSex: 'Male',

  orPoB: 'Whittington Hospital, Wakefield',
  nhsPoB: 'Whittington Hospital, Wakefield',
  orPoBType: 'Hospital, birth centre, or other medical location',
  nhsPoBType: 'NHS hospital',
  PoBError: 'no',

  // mother 9
  orMotherFirstName: 'Danielle',
  orMotherMiddleName: 'Melanie',
  nhsMotherFirstName: 'Danielle',
  golMotherFirstName: 'Danielle',
  golMotherPreviousFirstNames: 'Danielle, Melanie',
  mFNameError: 'no',

  orMotherLastName: 'JAMESON',
  nhsMotherLastName: 'JAMESON',
  golMotherLastNames: 'JAMESON',
  mLNameError: 'no',

  maidenName: 'SELBY',
  differentMaidenName: '',
  golMotherPreviousLastNames: 'SELBY',
  golmPrevLNameError: 'no',

  orMotherCurrentAddress: '24 Oakwood Avenue, Wakefield W20 3JK',
  nhsMotherCurrentAddress: '24 Oakwood Avenue, Wakefield W20 3JK',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: '24 Oakwood Avenue, Wakefield W20 3JK',
  motherAddressToBError: 'no',

  motherPoB: 'Glasgow, Scotland',

  motherOccupation: 'Retail assistant',
  motherOccupationError: 'no',

  // father or second parent 9
  fspFirstName: 'Lewis',
  fspLastName: 'JAMESON',
   golfspFirstName: 'Lewis',
  golfspLastName: 'JAMESON',
  
  golfspFNameError: 'no',
  golfspLNameError: 'no',
  golfspPrevLNameError: 'no',

  fspPoB: 'Glasgow, Scotland',
  fspCurrentAddress: '24 Oakwood Avenue, Wakefield W20 3JK',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'IT consultant',
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
  recordStatus: 'print',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Yes',
  printNumber: '1',
  submissionDate: '14 March 2026',
  daysSinceSubmission: '4',
  referenceNumber: '2026/7509741457818402-WA',

  // child 10
  childFirstName: 'Ethan',
  childFirstNameError: 'no',

  childLastName: 'TURNER',
  childMiddleName: 'Ben',

  orNHS: '911 178 2367',
  nhsNHS: '911 178 2367',

  orDoB: '17 February 2026',
  nhsDoB: '17 February 2026',
  daysSinceBirth: '29',

  orSex: 'Female',
  nhsSex: 'Female',

  orPoB: "St. Mary's, Wakefield",
  nhsPoB: "St. Mary's, Wakefield",
  orPoBType: 'Hospital, birth centre, or other medical location',
  nhsPoBType: 'NHS hospital',
  PoBError: 'no',

  // mother 10
  orMotherFirstName: 'Laura',
  orMotherMiddleName: 'Alexandra',
  nhsMotherFirstName: 'Laura',
  golMotherFirstName: 'Laura',
  golMotherPreviousFirstNames: 'Laura, Alexandra',
  mFNameError: 'no',

  orMotherLastName: 'TURNER',
  nhsMotherLastName: 'TURNER',
  golMotherLastNames: 'TURNER',
  mLNameError: 'no',

  maidenName: 'BENSON',
  differentMaidenName: '',
  golMotherPreviousLastNames: 'BENSON, TURNER',
  golmPrevLNameError: 'no',

  orMotherCurrentAddress: '47 Kingsway, Wakefield CF10 3AA',
  nhsMotherCurrentAddress: '47 Kingsway, Wakefield CF10 3AA',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: '47 Kingsway, Wakefield CF10 3AA',
  motherAddressToBError: 'no',

  motherPoB: 'London, England',

  motherOccupation: 'Administrator',
  motherOccupationError: 'no',

  // father or second parent 10
  fspFirstName: 'Rafael',
  fspLastName: 'TURNER',
   golfspFirstName: 'rafael',
  golfspLastName: 'TURNER',
  
  golfspFNameError: 'no',
  golfspLNameError: 'no',
  golfspPrevLNameError: 'no',

  fspPoB: 'Wakefield, England',
  fspCurrentAddress: '47 Kingsway, Wakefield CF10 3AA',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'Teacher',
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
  recordStatus: 'district',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Yes',
  printNumber: '1',
  submissionDate: '18 March 2026',
  daysSinceSubmission: '0',
  referenceNumber: '2026/7647380067736981-WA',

  // child 11
  childFirstName: 'Agnieska',
  childFirstNameError: 'no',

  childLastName: 'LEPOVAWITZ',
  childMiddleName: '',

  orNHS: '425 365 8546',
  nhsNHS: '425 365 8546',

  orDoB: '23 February 2026',
  nhsDoB: '23 February 2026',
  daysSinceBirth: '23',

  orSex: 'Female',
  nhsSex: 'Female',

  orPoB: 'Whittington Hospital, Wakefield',
  nhsPoB: 'Whittington Hospital, Warwick',
  orPoBType: 'Hospital, birth centre, or other medical location',
  nhsPoBType: 'NHS hospital',
  PoBError: 'no',

  // mother 11 (different surname)
  orMotherFirstName: 'Magda',
  orMotherMiddleName: '',
  nhsMotherFirstName: 'Magda',
  golMotherFirstName: 'Magda',
  golMotherPreviousFirstNames: 'Magda',
  mFNameError: 'no',

  orMotherLastName: 'LEPOVAWITZ',
  nhsMotherLastName: 'LEPOVAWITZ',
  golMotherLastNames: 'LEPOVAWITZ',
  mLNameError: 'no',

  maidenName: 'KRAJEWSKA',
  differentMaidenName: '',
  golMotherPreviousLastNames: 'LEPOVAWITZ',
  golmPrevLNameError: 'no',

  orMotherCurrentAddress: 'Hyde Park Road, Wakefield S11 4JP',
  nhsMotherCurrentAddress: 'Hyde Park Road, Wakefield S11 4JP',
  currentAddressError: 'no',

  orMotherAddressToB: 'Same as current address',
  nhsMotherAddressToB: 'Hyde Park Road, Wakefield S11 4JP',
  motherAddressToBError: 'no',

  motherPoB: 'Poland',

  motherOccupation: 'IT',
  motherOccupationError: 'no',

  // father or second parent 11
  fspFirstName: 'Petr',
  fspLastName: 'LEPOVAWITZ',
   golfspFirstName: 'Petr',
  golfspLastName: 'LEPOVAWITZ',
  
  golfspFNameError: 'no',
  golfspLNameError: 'no',
  golfspPrevLNameError: 'no',

  fspPoB: 'Poland',
  fspCurrentAddress: 'Hyde Park Road, Wakefield S11 4JP',
  fspAddressToB: 'Same as current address',
  fspOccupation: 'IT',
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
  fspDoB: '13 January 1999',
  fspEmployment: 'Self-employed, not supervising',
  fspMarriageDate: '3 June 2022',
  fspSpanishNat: 'No'
}

] 


module.exports = records