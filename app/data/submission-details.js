
// app/data/records.js
const records = [
  {
    id: 1,
    qualification1: 'Mother',
    qualification2: 'Father',
    relationshipType: 'Not married or in civil partnership',
    printNumber: 'none',
    submissionDate: '4 February 2026',
    //child 1
    childFirstName: 'Dougal',
    childFirstNameError: 'yes',

    childLastName: 'MCGOVER',
    childMiddleName: '',

    orNHS: '987 654 3210',
    nhsNHS: 'Matches these details',

    orDoB: '29 January 2026',
    nhsDoB: 'Matches these details',

    orSex: 'Male',
    nhsSex: 'Matches these details',

    orPoB: "St. Mary's, Wakefield",
    nhsPoB: "St. Mary's, Winchester",
    PoBError: 'yes',

    //mother 1
    orMotherFirstName: 'Lucy',
    nhsMotherFirstName: 'Lucy',
    mFNameError: 'yes',

    orMotherLastName: 'MCGOVER',
    nhsMotherLastName: 'MCGOVER',
    mLNameError: 'yes',

    maidenName: '',
    differentMaidenName: '',

    orMotherCurrentAddress: '29 Rootfield Drive, Winchester WT8 5UY',
    nhsMotherCurrentAddress: 'Matches these details',
    currentAddressError: 'yes',

    orMotherAddressToB: 'Same as current address',
    nhsMotherAddressToB: 'Matches these details',
    motherAddressToBError: 'yes',

    motherPoB: 'Fife, Scotland',

    motherOccupation: 'Hairdressser',
    motherOccupationError: 'yes',

    //father or second parent 1
    fspFirstName: 'Jimmy',
    fspLastName: 'MCGOVER',

    fspPoB: 'Dublin, Ireland',
    fspCurrentAddress: '29 Rootfield Drive, Winchester WT8 5UY',
    fspAddressToB: "Same as mother's current address",
    fspOccupation: 'Uber driver',
    fspOccupationError: 'yes',

    //statistics - mother 1
    motherDob: '20 April 2001',
    motherDobError: 'No',
    motherEmployment: 'Employed, not supervising',
    motherFirstMarriage: 'yes',
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
    id: 2,
    qualification1: 'Mother',
    qualification2: 'Father',
    relationshipType: 'Married or civil partnership',
    printNumber: '1',
    submissionDate: '4 February 2026',
    //child 1
    childFirstName: 'Dougal',
    childFirstNameError: 'no',

    childLastName: 'MCGOVER',
    childMiddleName: '',

    orNHS: '987 654 3210',
    nhsNHS: 'Matches these details',

    orDoB: '29 January 2026',
    nhsDoB: 'Matches these details',

    orSex: 'Male',
    nhsSex: 'Matches these details',
    sexError: 'no',

    orPoB: 'St. Marys, Wakefield',
    nhsPoB: 'St. Marys, Winchester',
    PoBError: 'yes',

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
    currentAddressError: 'yes',

    orMotherAddressToB: 'Same as current address',
    nhsMotherAddressToB: 'Matches these details',
    motherAddressToBError: 'yes',

    motherPoB: 'Fife, Scotland',

    motherOccupation: 'Uber Hairdressser',
    motherOccupationError: 'yes',

    //father or second parent 1
    fspFirstName: 'Jimmy',
    fspLastName: 'MCGOVER',

    fspPoB: 'Dublin, Ireland',
    fspCurrentAddress: '29 Rootfield Drive, Winchester WT8 5UY',
    fspAddressToB: 'Same as current address',
    fspOccupation: 'Uber driver',
    fspOccupationError: 'yes',

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
  }
] 


module.exports = records