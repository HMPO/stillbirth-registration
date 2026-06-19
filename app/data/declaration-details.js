
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
  referenceNumber: '350801284',

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
    referenceNumber: '493453868',
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

    orMotherLastName: 'HOUND',
    nhsMotherLastName: 'HOUND',
    golMotherLastNames: 'SMITH',
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
    golfspPrevLNameError: 'yes',

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
    referenceNumber: '493453855',
    
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
  referenceNumber: '473800677',

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
  referenceNumber: '533567680',

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
  recordStatus: 'rejected',
  qualification1: 'Mother',
  qualification2: 'Father',
  relationshipType: 'Yes',
  printNumber: '1',
  submissionDate: '18 March 2026',
  daysSinceSubmission: '0',
  referenceNumber: '764738006',

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
  nhsPoB: 'Whittington Hospital, Wakefield',
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

  motherOccupation: 'Commnications',
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
  fspOccupation: 'Developer',
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