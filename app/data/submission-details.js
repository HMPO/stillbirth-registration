
// app/data/records.js
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
    daysSinceSubmission: '4',
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
  }
] 


module.exports = records