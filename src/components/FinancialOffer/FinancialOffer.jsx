import React, { useState } from 'react';


 
const FinancialOffer = () => {
const [activeCompensation, setActiveCompensation] = useState(null);

const [selectedOptions, setSelectedOptions] = useState([]);//For Basic Salary (B)
const [selectedAllowanceOptions, setSelectedAllowanceOptions] = useState([]);//For Allowances (C)
const [selectedVariablepayOptions, setSelectedVariablepayOptions] = useState([]); //For Variable Pay (D)
const [selectedBenefitOptions, setSelectedBenefitOptions] = useState([]); //For Benefits (E)
const [isSecondColumnVisible, setIsSecondColumnVisible] = useState(true);  
const [errorMessage, setErrorMessage] = useState('');

//Compensation B (Current)                                                                                      // Compensation B (Previous)
const [BasicSalaryCurrent, setBasicSalaryCurrent] = useState('');                                               const [BasicSalaryPrevious, setBasicSalaryPrevious] = useState('');
const [HouseRentCurrent, setHouseRentCurrent] = useState('');                                                   const [HouseRentPrevious, setHouseRentPrevious] = useState('');
const [UtilitiesCurrent, setUtilitiesCurrent] = useState('');                                                   const [UtilitiesPrevious, setvUtilitiesPrevious] = useState('');
const [MedicalCurrent, setMedicalCurrentt] = useState('');                                                      const [MedicalPrevious, setvMedicalPervious] = useState('');
const [lfaCurrent, setlfaCurrent] = useState('');                                                               const [lfaPrevious, setlfaPervious] = useState('');
const [AdjustmentForFuelCurrent, setAdjustmentForFuelCurrent] = useState('');                                   const [AdjustmentForFuelPrevious, setAdjustmentForFuelPrevious] = useState('');
const [RetentionAmountCurrent, setRetentionAmountCurrent] = useState('');                                       const [RetentionAmountPrevious, setRetentionAmountPrevious] = useState('');

// Compensation C (Current)                                                                                     //Compensation C (Previous)
const [asrCurrent, setasrCurrent]=useState('');                                                                 const [asrPrevious, setasrPrevious]=useState('');
const [daCurrent, setdaCurrent]=useState('');                                                                   const [daPrevious, setdaPrevious]=useState('');
const [mpCurrent, setmpCurrent]=useState('');                                                                   const [mpPrevious, setmpPrevious]=useState(''); 
const [dsaCurrent, setdsaCurrent]=useState('');                                                                 const [dsaPrevious, setdsaPrevious]=useState('');
const [sCurrent, setsCurrent]=useState('');                                                                     const [sPrevious, setsPrevious]=useState('');
const [resCurrent, setresCurrent]=useState('');                                                                 const [resPrevious, setresPrevious]=useState('');
const [cellCurrent, setcellCurrent]=useState('');                                                               const [cellPrevious, setcellPrevious]=useState('');
const [iCurrent , setiCurrent]=useState('');                                                                    const [iPrevious, setiPrevious]=useState('');
const [deaCurrent, setdeaCurrent]=useState('');                                                                 const [deaPrevious, setdeaPrevious]=useState('');
const [paCurrent, setpaCurrent]=useState('');                                                                   const [paPrevious, setpaPrevious ]=useState(''); 

//Compensation D (Current)                                                                                       //Compensation D (Previous)
                                                  
const[vbCurrent, setvbCurrent] =useState('');                                                                   const[vbPrevious, setvbPrevious] =useState('');
const[smCurrent, setsmCurrent] =useState('');                                                                   const[smPrevious, setsmPrevious] =useState('');

//Compensation E (Current)                                                                                      //Compensation E (Previous)
const[carCurrent, setcarCurrent] = useState();                                                                  const[carPrevious, setcarPrevious] = useState();
const[carInsuranceCurrent, setcarInsuranceCurrent] = useState();                                                const[carInsurancePrevious, setcarInsurancePrevious] = useState();
const[carFuelCurrent, setcarFuelCurrent] = useState();                                                          const[carFuelPrevious, setcarFuelPrevious] = useState();
const[carMaintenanceCurrent, setcarMaintenanceCurrent] = useState();                                            const[carMaintenancePrevious, setcarMaintenancePrevious] = useState();
const[carRegRoadTaxCurrent, setcarRegRoadTaxCurrent] = useState();                                              const[carRegRoadTaxPrevious, setcarRegRoadTaxPrevious] = useState();
const[trackerCurrent, settrackerCurrent] = useState();                                                          const[trackerPrevious, settrackerPrevious] = useState();
const[companyProvidedTravelingCurrent, setcompanyProvidedTravelingCurrent] = useState();                        const[companyProvidedTravelingPrevious, setcompanyProvidedTravelingPrevious] = useState();
const[corporateClubMembershipCurrent, setcorporateClubMembershipCurrent] = useState();                          const[corporateClubMembershipPrevious, setcorporateClubMembershipPrevious] = useState();
const[clubSubscriptionCurrent, setclubSubscriptionCurrent] = useState();                                        const[clubSubscriptionPrevious, setclubSubscriptionPrevious] = useState();
const[apartmentRentCurrent, setapartmentRentCurrent] = useState();                                              const[apartmentRentPrevious, setapartmentRentPrevious] = useState();
const[hardFurnishingsCurrent, sethardFurnishingsCurrent] = useState();                                          const[hardFurnishingsPrevious, sethardFurnishingsPrevious] = useState();
const[creditCardsStatutoryContributionCurrent, setcreditCardsStatutoryContributionCurrent] = useState();        const[creditCardsStatutoryContributionPrevious, setcreditCardsStatutoryContributionPrevious] = useState();
const[otherPerquisitesCurrent, setotherPerquisitesCurrent] = useState();                                        const[otherPerquisitesPrevious, setotherPerquisitesPrevious] = useState();
const[securityServicesGuardsCurrent, setsecurityServicesGuardsCurrent] = useState();                            const[securityServicesGuardsPrevious, setsecurityServicesGuardsPrevious] = useState();        
const[mealSubsidyHousingLoanCurrent, setmealSubsidyHousingLoanCurrent] = useState();                            const[mealSubsidyHousingLoanPrevious, setmealSubsidyHousingLoanPrevious] = useState();
const[entertainmentAllowanceCurrent, setentertainmentAllowanceCurrent] = useState();                            const[entertainmentAllowancePrevious, setentertainmentAllowancePrevious] = useState();
const[leaveEncashmentCurrent, setleaveEncashmentCurrent] = useState();                                          const[leaveEncashmentPrevious, setleaveEncashmentPrevious] = useState();
const[homeTravelCurrent, sethomeTravelCurrent] = useState();                                                    const[homeTravelPrevious, sethomeTravelPrevious] = useState();
const[groupLifeCurrent, setgroupLifeCurrent] = useState();                                                      const[groupLifePrevious, setgroupLifePrevious] = useState();
const[hospitalizationInsuranceCurrent, sethospitalizationInsuranceCurrent] = useState();                        const[hospitalizationInsurancePrevious, sethospitalizationInsurancePrevious] = useState();
const[medicalOpdCurrent, setmedicalOpdCurrent] = useState();                                                    const[medicalOpdPrevious, setmedicalOpdPrevious] = useState();
const[pensionCurrent, setpensionCurrent] = useState();                                                          const[pensionPrevious, setpensionPrevious] = useState();
const[pfCurrent, setpfCurrent] = useState();                                                                    const[pfPrevious, setpfPrevious] = useState();
const[eobiCurrent, seteobiCurrent] = useState();                                                                const[eobiPrevious, seteobiPrevious] = useState();
const[gratuityCurrent, setgratuityCurrent] = useState();                                                        const[gratuityPrevious, setgratuityPrevious] = useState();

const [annualPackageCurrent, setAnnualPackageCurrent] = useState(0);                                            const [annualPackagePrevious, setAnnualPackagePrevious] = useState(0);
const [compaRatioCurrent, setCompaRatioCurrent] = useState(0);                                                  const [compaRatioPrevious, setCompaRatioPrevious] = useState(0);

//DropDown For Third Column
const toggleSecondColumn = () => {  
  setIsSecondColumnVisible(prevState => !prevState);  
};  
//Compensation B (Options:)
const optionOrder = 
['Enter Basic Salary','House Rent (% of basic)','Utilities (% of basic)','Medical (% of basic)','LFA (% of basic)','Adjustment for Fuel','Other Amount'
];

//Compensation C (Options:)
const optionOrder2 = 
['Allowance in lieu of second Car', 'Disturbance Allowance', 'Market Premium', 'Driver Salary (Allowance)', 'Servant', 'Tel (res)', 'Tel (cell)', 'Internet', 'Dearness Allowance', 'Project Allowance'    
];

//Compensation D (Options:)
const optionOrder3 = 
['Variable Bonus','Special Milestone'
];

//Compensation E (Options:)
const optionOrder4 = 
['Car', 'Car Insurance', 'Car Fuel', 'Car Maintenance', 'Car Reg / Road Tax', 'Tracker', 'Company Provided Traveling', 'Corporate Club Membership', 'Club Subscription',
'Apartment Rent', 'Hard Furnishings', 'Credit Cards / Statutory Contribution', 'Other Perquisites', 'Security Services / Guards', 'Meal Subsidy / Housing Loan', 'Entertainment Allowance', 'Leave Encashment',
'Home Travel', 'Group Life', 'Hospitalization Insurance (self, wife, children)', 'Medical (OPD)','Pension', 'PF', 'EOBI', 'Gratuity'  
];

// Sort selected options based on the order of optionOrder array(Compensation B)
const sortedSelectedOptions= [...selectedOptions].sort(
  (a, b) => optionOrder.indexOf(a) - optionOrder.indexOf(b)
);

// Sort selected options based on the order of optionOrder1 array(Compensation C)
const sortedSelectedAllowanceOptions= selectedAllowanceOptions.sort(
  (a, b) => optionOrder2.indexOf(a) - optionOrder2.indexOf(b)
);
 
// Sort selected options based on the order of optionOrder3 array(Compensation D)
const sortedSelectedVariablepayOptions= selectedVariablepayOptions.sort(
  (a, b) => optionOrder3.indexOf(a) - optionOrder3.indexOf(b)
);

// Sort selected options based on the order of optionOrder4 array(Compensation E)
const sortedSelectedBenefitOptions= selectedBenefitOptions.sort(
  (a, b) => optionOrder4.indexOf(a) - optionOrder4.indexOf(b)
);
 
const toggleOptions = (compensation) => {
setActiveCompensation(activeCompensation === compensation ? null : compensation);
};

// <--->Basic Salary(B)
const handleOptionChange = (option) => {
  // List of dependent options
  const dependentOptions = ['House Rent (% of basic)', 'Utilities (% of basic)', 'Medical (% of basic)', 'LFA (% of basic)'];

  if (selectedOptions.includes(option)) {
    // If "Enter Basic Salary" is being unchecked, remove it and its dependent options
    if (option === 'Enter Basic Salary') {
      setSelectedOptions(selectedOptions.filter(item => item !== option && !dependentOptions.includes(item)));
    } else {
      // Otherwise, just remove the selected option
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    }
  } else {
    // If dependent option is selected without "Enter Basic Salary", show error message
    if (dependentOptions.includes(option) && !selectedOptions.includes('Enter Basic Salary')) {
      setErrorMessage('To calculate this, click also "Enter Basic Salary".');
      return;
    }

    // Add the selected option
    setSelectedOptions([...selectedOptions, option]);
    setErrorMessage(''); // Clear error message if Basic Salary is selected
  }
};

// <--->Allowances (C)
const handleAllowanceOptionChange = (option) => {
  if (selectedAllowanceOptions.includes(option)) {
    setSelectedAllowanceOptions(selectedAllowanceOptions.filter(item => item !== option));
  } else {
    setSelectedAllowanceOptions([...selectedAllowanceOptions, option]);
  }
};

// <--->Variable Pay (D)
const handleVariablepayOptionChange = (option) => {
  if (selectedVariablepayOptions.includes(option)) {
    setSelectedVariablepayOptions(selectedVariablepayOptions.filter(item => item !== option));
  } else {
    setSelectedVariablepayOptions([...selectedVariablepayOptions, option]);
  }
};

// <--->Benefits (E)
const handleBenefitOptionChange = (option) => {
  if (selectedBenefitOptions.includes(option)) {
    setSelectedBenefitOptions(selectedBenefitOptions.filter(item => item !== option));
  } else {
    setSelectedBenefitOptions([...selectedBenefitOptions, option]);
  }
};

// Ensure these functions are defined somewhere in your code
const roundNumber = (num) => Math.round(num);
const formatNumber = (num) => {
  if (num === undefined || num === null || isNaN(num)) {
    return '0';
  }
  return num.toLocaleString();
};


// Calculate the values based on percentages
const calculateValue = (percentage, salary) => {
  return salary ? Math.round(salary * (percentage / 100)) : 0;
  };

// Calculate SUB-TOTAL (B):
const calculateSubTotalB = (salary, houseRent, utilities, medical, lfa, adjustmentForFuel, retentionAmount) => {
  return (
    calculateValue(houseRent, salary) + calculateValue(utilities, salary) + calculateValue(medical, salary) + calculateValue(lfa, salary) + (adjustmentForFuel || 0) + (retentionAmount || 0)
  );
  };
    
  // Calculate Total (A + B): FOR CURRENT COMPANY
  const totalABCurrent = () => {
  const subtotalB = calculateSubTotalB
  (
   parseFloat(BasicSalaryCurrent) || 0, HouseRentCurrent, UtilitiesCurrent, MedicalCurrent, lfaCurrent, AdjustmentForFuelCurrent, RetentionAmountCurrent
  );
    return (parseFloat(BasicSalaryCurrent) || 0) + subtotalB;
  };
  
  // Calculate Total (A + B): FOR PREVIOUS COMPANY
  const totalABPrevious = () => {
  const subtotalB = calculateSubTotalB
  (
   parseFloat(BasicSalaryPrevious) || 0, HouseRentPrevious, UtilitiesPrevious, MedicalPrevious, lfaPrevious, AdjustmentForFuelPrevious, RetentionAmountPrevious
  );
    return (parseFloat(BasicSalaryPrevious) || 0) + subtotalB;
  };
  
// Calculate SUB-TOTAL (C):
const calculateSubTotalC = (asr, da, mp, dsa, s, res, cell, i, dea, pa) => {
  return(
    (asr || 0) +  (da || 0)  + ( mp || 0) + ( dsa || 0) + ( s || 0) + (res || 0) +  (cell || 0) + ( i || 0) + ( dea || 0) + ( pa || 0)
  );
  };
  
  // Calculate Total A + B + C //: FOR CURRENT COMPANY
  // totalABCCurrent -> TOTAL ( A + B + C)
  
  const totalABCCurrent = () => {
  //1. 
  const subtotalB = calculateSubTotalB //BASIC SALARY (B): FOR CURRENT COMPANY
  (
    parseFloat(BasicSalaryCurrent), HouseRentCurrent, UtilitiesCurrent, MedicalCurrent, lfaCurrent, AdjustmentForFuelCurrent, RetentionAmountCurrent
  );
    
  //2.
  const subtotalC = calculateSubTotalC //ALLOWANCES (C): FOR CURRENT COMPANY
  (
    asrCurrent, daCurrent, mpCurrent, dsaCurrent, sCurrent, resCurrent, cellCurrent, iCurrent, deaCurrent, paCurrent
  );
    
    return parseFloat(BasicSalaryCurrent) + subtotalB + subtotalC;
  };
  
  // Calculate Total (A + B + C) : FOR PREVIOUS COMPANY
  // totalABCPrevious -> TOTAL ( A + B + C)
  
  const totalABCPrevious = () => {
  //1.
  const subtotalB = calculateSubTotalB //BASIC SALARY (B): FOR PREVIOUS COMPANY
  (
    parseFloat(BasicSalaryPrevious), HouseRentPrevious, UtilitiesPrevious, MedicalPrevious, lfaPrevious, AdjustmentForFuelPrevious, RetentionAmountPrevious
  );
  
  //2.
  const subtotalC = calculateSubTotalC //ALLOWANCES (C): FOR PREVIOUS COMPANY
  (
    asrPrevious, daPrevious, mpPrevious, dsaPrevious, sPrevious, resPrevious, cellPrevious, iPrevious, deaPrevious, paPrevious
  );
    
    return parseFloat(BasicSalaryPrevious) + subtotalB + subtotalC;
  };
  
  // SUB-TOTAL (D):
  const calculateSubTotalD = (vb, sm) => {
    return( 
    (vb || 0) + (sm || 0)
  );
  };
  
  // Calculate Total (A + B + C + D) : FOR CURRENT COMPANY
  const totalABCDCurrent = () => {
    return totalABCCurrent() + calculateSubTotalD(vbCurrent, smCurrent);
  };
  
  // Calculate Total (A + B + C + D) : FOR PREVIOUS COMPANY
  
  const totalABCDPrevious = () => {
    return totalABCPrevious() + calculateSubTotalD(vbPrevious, smPrevious);
  };
  
  // SUB-TOTAL (E):
  const calculateSubTotalE = 
  (
  car, carInsurance, carFuel, carMaintenance, carRegRoadTax, tracker,
  companyProvidedTraveling, corporateClubMembership, clubSubscription, apartmentRent,
  hardFurnishings, creditCardsStatutoryContribution, otherPerquisites, securityServicesGuards,
  mealSubsidyHousingLoan, entertainmentAllowance, leaveEncashment,
  homeTravel, groupLife, hospitalizationInsurance, medicalOpd, pension, pf, eobi, gratuity ) => {
    
  return (
    (car || 0) + (carInsurance || 0) + (carFuel || 0) + (carMaintenance || 0) + (carRegRoadTax || 0) + (tracker || 0) +
    (companyProvidedTraveling || 0) +  (corporateClubMembership || 0) +  (clubSubscription || 0) + (apartmentRent || 0) + 
    (hardFurnishings || 0) + (creditCardsStatutoryContribution || 0) + (otherPerquisites || 0) + (securityServicesGuards || 0) +
    (mealSubsidyHousingLoan || 0) + (entertainmentAllowance || 0) + (leaveEncashment || 0) + (homeTravel || 0) + (groupLife || 0) +
    (hospitalizationInsurance || 0) + (medicalOpd || 0) + (pension || 0) + (pf || 0) + (eobi || 0) + (gratuity || 0)
  );
  };
  
  // Calculate Total (A + B + C + D + E) : FOR CURRENT COMPANY
  const totalABCDECurrent = () => {
    
  //1.
  const subtotalA = parseFloat(BasicSalaryCurrent);
  
  //2.
  const subtotalB = calculateSubTotalB
  (
    BasicSalaryCurrent, HouseRentCurrent, UtilitiesCurrent, MedicalCurrent, lfaCurrent, AdjustmentForFuelCurrent, RetentionAmountCurrent
  );
  
  //3.  
  const subtotalC = calculateSubTotalC
  (
    asrCurrent, daCurrent, mpCurrent, dsaCurrent, sCurrent, resCurrent, cellCurrent, iCurrent, deaCurrent, paCurrent
  );
    
  //4.
  const subtotalD = calculateSubTotalD
  (
    vbCurrent, smCurrent
  );
    
  //5.
  const subtotalE = calculateSubTotalE
  (
    carCurrent, carInsuranceCurrent, carFuelCurrent, carMaintenanceCurrent, carRegRoadTaxCurrent, trackerCurrent,
    companyProvidedTravelingCurrent, corporateClubMembershipCurrent, clubSubscriptionCurrent, apartmentRentCurrent, 
    hardFurnishingsCurrent, creditCardsStatutoryContributionCurrent, otherPerquisitesCurrent, securityServicesGuardsCurrent, 
    mealSubsidyHousingLoanCurrent, entertainmentAllowanceCurrent, leaveEncashmentCurrent, homeTravelCurrent, groupLifeCurrent, 
    hospitalizationInsuranceCurrent, medicalOpdCurrent, pensionCurrent, pfCurrent, eobiCurrent, gratuityCurrent
  );
    return subtotalA + subtotalB + subtotalC + subtotalD + subtotalE;
  };
  
  // Calculate Total (A + B + C + D + E) : FOR PREVIOUS COMPANY
  const totalABCDEPrevious = () => {
  
  //1.
  const subtotalA = parseFloat(BasicSalaryPrevious); 
  
  //2.
  const subtotalB = calculateSubTotalB
  (
   BasicSalaryPrevious, HouseRentPrevious, UtilitiesPrevious, MedicalPrevious, lfaPrevious, AdjustmentForFuelPrevious, RetentionAmountPrevious
  );
  
  //3.
  const subtotalC = calculateSubTotalC
  (
   asrPrevious, daPrevious, mpPrevious, dsaPrevious, sPrevious, resPrevious, cellPrevious, iPrevious, deaPrevious, paPrevious
  );
  
  //4.
  const subtotalD = calculateSubTotalD
  (
    vbPrevious, smPrevious
  );
  
  //5.
  const subtotalE = calculateSubTotalE
  (
    carPrevious, carInsurancePrevious, carFuelPrevious, carMaintenancePrevious, carRegRoadTaxPrevious, trackerPrevious,
    companyProvidedTravelingPrevious, corporateClubMembershipPrevious, clubSubscriptionPrevious, apartmentRentPrevious, 
    hardFurnishingsPrevious, creditCardsStatutoryContributionPrevious, otherPerquisitesPrevious, securityServicesGuardsPrevious, 
    mealSubsidyHousingLoanPrevious, entertainmentAllowancePrevious, leaveEncashmentPrevious, homeTravelPrevious, groupLifePrevious, 
    hospitalizationInsurancePrevious, medicalOpdPrevious, pensionPrevious, pfPrevious, eobiPrevious, gratuityPrevious
  );
    return subtotalA + subtotalB + subtotalC + subtotalD + subtotalE;
  };
  
  useState(() => {  
    const newAnnualPackageCurrent = roundNumber(totalABCDECurrent() * 12);  
    const newAnnualPackagePrevious = roundNumber(totalABCDEPrevious() * 12);  
    const newCompaRatioCurrent = roundNumber((totalABCDECurrent() / 177746) * 100);  
    const newCompaRatioPrevious = roundNumber((totalABCDEPrevious() / 177746) * 100);  
  
    setAnnualPackageCurrent(newAnnualPackageCurrent);  
    setAnnualPackagePrevious(newAnnualPackagePrevious);  
    setCompaRatioCurrent(newCompaRatioCurrent);  
    setCompaRatioPrevious(newCompaRatioPrevious);  
  }, [totalABCDECurrent, totalABCDEPrevious]); 
   
const renderOptionRow = (option, index) => {
let row = null;
  
switch (option) {

case 'Enter Basic Salary':
row = (
<tr key={index} className="border-b border-gray-900">
<td className="p-4 text-center font-medium">1</td>
<td className="p-4 text-left font-medium">Basic Salary</td>
{isSecondColumnVisible && (<td className="p-10 text-center">
<div className="guidance-text text-gray-900 mb-2">Current</div>
<input type="number"
className="w-full p-10 border border-gray-900 rounded-lg"
placeholder="Enter Amount"
 value={BasicSalaryCurrent} onChange={(e) => setBasicSalaryCurrent(parseFloat(e.target.value) || '')}/>
<div className="guidance-text text-gray-900 mt-4 mb-2">Offer</div>
<input type="number"
 className="w-full p-2 border border-gray-900 rounded-lg"
 placeholder="Enter Amount" 
 value={BasicSalaryPrevious} onChange={(e) => setBasicSalaryPrevious(parseFloat(e.target.value) || '')}/>
</td>
)}
          
<td  className="p-4 text-center"><div  className="text-black">{formatNumber(BasicSalaryCurrent)}</div></td>
<td className='p-4 text-center'><div className="text-black">{formatNumber(BasicSalaryPrevious)}</div></td></tr>
);break;

case 'House Rent (% of basic)':
row = (
  <tr key={index}>
    <td className="px-4 py-2 border-b">{2}</td>
    <td className="px-4 py-2 border-b">{`House Rent (% of basic)`}</td>
    {isSecondColumnVisible && (
      <td className="px-4 py-2 border-b">
        <div className="text-center">
          <div className="guidance-text">Current</div>
          <input
            type="number"
            placeholder="Enter Percentage"
            value={HouseRentCurrent}
            onChange={(e) => setHouseRentCurrent(parseFloat(e.target.value) || '')}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <div className="guidance-text">Offer</div>
          <input
            type="number"
            placeholder="Enter Percentage"
            value={HouseRentPrevious}
            onChange={(e) => setHouseRentPrevious(parseFloat(e.target.value) || '')}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
      </td>
    )}
    <td className="px-4 py-2 border-b">
      <div className="text-center">{formatNumber(calculateValue(HouseRentCurrent, BasicSalaryCurrent))}</div>
    </td>
    <td className="px-4 py-2 border-b">
      <div className="text-center">{formatNumber(calculateValue(HouseRentPrevious, BasicSalaryPrevious))}</div>
    </td>
  </tr>
);
break;


case 'Utilities (% of basic)':
  row = (
    <tr key={index}>
      <td className="px-4 py-2 border-b">{3}</td>
      <td className="px-4 py-2 border-b">Utilities (% of basic)</td>
      {isSecondColumnVisible && (
        <td className="px-4 py-2 border-b">
          <div className="text-center">
            <div className="guidance-text">Current</div>
            <input
              type="number"
              placeholder="Enter Percentage"
              value={UtilitiesCurrent}
              onChange={(e) => setUtilitiesCurrent(parseFloat(e.target.value) || '')}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <div className="guidance-text">Offer</div>
            <input
              type="number"
              placeholder="Enter Percentage"
              value={UtilitiesPrevious}
              onChange={(e) => setUtilitiesCurrent(parseFloat(e.target.value) || '')}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </td>
      )}
      <td className="px-4 py-2 border-b">
        <div className="text-center">
          {formatNumber(calculateValue(UtilitiesCurrent, BasicSalaryCurrent))}
        </div>
      </td>
      <td className="px-4 py-2 border-b">
        <div className="text-center">
          {formatNumber(calculateValue(UtilitiesPrevious, BasicSalaryPrevious))}
        </div>
      </td>
    </tr>
  );
  break;

case 'Medical (% of basic)':
  row = (
    <tr key={index}>
      <td className="px-4 py-2 border-b">{4}</td>
      <td className="px-4 py-2 border-b">{`Medical (% of basic)`}</td>
      {isSecondColumnVisible && (
        <td className="px-4 py-2 border-b">
          <div className="text-center">
            <div className="guidance-text">Current</div>
            <input
              type="number"
              placeholder="Enter Percentage"
              value={MedicalCurrent}
              onChange={(e) => setvMedicalPervious(parseFloat(e.target.value) || '')}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <div className="guidance-text">Offer</div>
            <input
              type="number"
              placeholder="Enter Percentage"
              value={MedicalPrevious}
              onChange={(e) => setvMedicalPervious(parseFloat(e.target.value) || '')}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </td>
      )}
      <td className="px-4 py-2 border-b">
        <div className="text-center">{formatNumber(calculateValue(MedicalCurrent, BasicSalaryCurrent))}</div>
      </td>
      <td className="px-4 py-2 border-b">
        <div className="text-center">{formatNumber(calculateValue(MedicalPrevious, BasicSalaryPrevious))}</div>
      </td>
    </tr>
  );
  
break;

case 'LFA (% of basic)':
  row = (
    <tr key={index}>
      <td className="px-4 py-2 border-b">{5}</td>
      <td className="px-4 py-2 border-b">LFA (% of basic)</td>
      {isSecondColumnVisible && (
        <td className="px-4 py-2 border-b">
          <div className="guidance-text">Current</div>
          <input
            type="number"
            placeholder="Enter Percentage"
            value={lfaCurrent}
            onChange={(e) => setlfaCurrent(parseFloat(e.target.value) || '')}
            className="border border-gray-300 rounded-md p-2 w-full"
            aria-label="Current LFA Percentage"
          />
          <div className="guidance-text">Offer</div>
          <input
            type="number"
            placeholder="Enter Percentage"
            value={lfaPrevious}
            onChange={(e) => setlfaPervious(parseFloat(e.target.value) || '')}
            className="border border-gray-300 rounded-md p-2 w-full"
            aria-label="Previous LFA Percentage"
          />
        </td>
      )}
      <td className="px-4 py-2 border-b">
        <div className="text-center">{formatNumber(calculateValue(lfaCurrent, BasicSalaryCurrent))}</div>
      </td>
      <td className="centered p-2">
        <div className="text-center">{formatNumber(calculateValue(lfaPrevious, BasicSalaryPrevious))}</div>
      </td>
    </tr>
  );
  break;

  
case 'Adjustment for Fuel':
  row = (
    <tr key={index} className="border-b hover:bg-gray-100">
      <td className="p-2">6</td>
      <td className="p-2">Adjustment for Fuel</td>
      {isSecondColumnVisible && (
        <td className="centered p-2">
          <div className="guidance-text mb-1 font-semibold">Current</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={AdjustmentForFuelCurrent}
            onChange={(e) => setAdjustmentForFuelCurrent(parseFloat(e.target.value) || '')}
            className="border rounded p-2 w-full mb-2 focus:ring-2 focus:ring-black"
            aria-label="Current Adjustment for Fuel Amount"
          />
          <div className="guidance-text mb-1 font-semibold">Offer</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={AdjustmentForFuelPrevious}
            onChange={(e) => setAdjustmentForFuelPrevious(parseFloat(e.target.value) || '')}
            className="border rounded p-2 w-full focus:ring-2"
            aria-label="Previous Adjustment for Fuel Amount"
          />
        </td>
      )}
      <td className="centered p-2">
        <div className="text-center font-semibold">{formatNumber(AdjustmentForFuelCurrent)}</div>
      </td>
      <td className="centered p-2">
        <div className="text-center font-semibold">{formatNumber(AdjustmentForFuelPrevious)}</div>
      </td>
    </tr>
  );
  break;


case 'Other Amount':
  row = (
    <tr key={index} className="border-b">
      <td className="p-2">7</td>
      <td className="p-2">Other Amount (Retention Amount)</td>
      {isSecondColumnVisible && (
        <td className="centered p-2">
          <div className="guidance-text mb-1 font-semibold">Current</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={RetentionAmountCurrent}
            onChange={(e) => setRetentionAmountCurrent(parseFloat(e.target.value) || '')}
            className="border rounded p-2 w-full mb-2 focus:ring-2"
          />
          <div className="guidance-text mb-1 font-semibold">Offer</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={RetentionAmountPrevious}
            onChange={(e) => setRetentionAmountPrevious(parseFloat(e.target.value) || '')}
            className="border rounded p-2 w-full focus:ring-2 "
          />
        </td>
      )}
      <td className="centered p-2">
        <div className="text-center font-semibold">{formatNumber(RetentionAmountCurrent)}</div>
      </td>
      <td className="centered p-2">
        <div className="text-center font-semibold">{formatNumber(RetentionAmountPrevious)}</div>
      </td>
    </tr>
  );
  break;


default: break;
}

return row;
};

const renderAllowanceRow = (option, index) => {
let row = null;

switch (option) {
  case 'Allowance in lieu of second Car':
    row = (
      <tr key={index} className="border-b">
        <td className="p-2">1</td>
        <td className="p-2">Allowance in lieu of second Car</td>
        {isSecondColumnVisible && (
          <td className="centered p-2">
            <div className="guidance-text mb-1 font-semibold">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={asrCurrent}
              onChange={(e) => setasrCurrent(parseFloat(e.target.value) || '')}
              className="border rounded p-2 w-full mb-2 focus:ring-2"
            />
            <div className="guidance-text mb-1 font-semibold">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={asrPrevious}
              onChange={(e) => setasrPrevious(parseFloat(e.target.value) || '')}
              className="border rounded p-2 w-full focus:ring-2 "
            />
          </td>
        )}
        <td className="centered p-2">
          <div className="text-center font-semibold">{formatNumber(asrCurrent)}</div>
        </td>
        <td className="centered p-2">
          <div className="text-center font-semibold">{formatNumber(asrPrevious)}</div>
        </td>
      </tr>
    );
    break;





case 'Market Premium':
  row = (
    <tr key={index} className="border-b">
      <td className="p-2">3</td>
      <td className="p-2">Market Premium</td>
      {isSecondColumnVisible && (
        <td className="centered p-2">
          <div className="guidance-text mb-1 font-semibold">Current</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={mpCurrent}
            onChange={(e) => setmpCurrent(parseFloat(e.target.value) || '')}
            className="border rounded p-2 w-full mb-2 focus:ring-2"
          />
          <div className="guidance-text mb-1 font-semibold">Offer</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={mpPrevious}
            onChange={(e) => setmpPrevious(parseFloat(e.target.value) || '')}
            className="border rounded p-2 w-full focus:ring-2"
          />
        </td>
      )}
      <td className="centered p-2">
        <div className="text-center font-semibold">{formatNumber(mpCurrent)}</div>
      </td>
      <td className="centered p-2">
        <div className="text-center font-semibold">{formatNumber(mpPrevious)}</div>
      </td>
    </tr>
  );
  break;


case 'Driver Salary (Allowance)':
  row = (
    <tr key={index} className="border-b">
      <td className="p-2">4</td>
      <td className="p-2">Driver Salary (Allowance)</td>
      {isSecondColumnVisible && (
        <td className="centered p-2">
          <div className="guidance-text mb-1 font-semibold">Current</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={dsaCurrent}
            onChange={(e) => setdsaCurrent(parseFloat(e.target.value) || '')}
            className="border rounded p-2 w-full mb-2 focus:ring-2"
          />
          <div className="guidance-text mb-1 font-semibold">Offer</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={dsaPrevious}
            onChange={(e) => setdsaPrevious(parseFloat(e.target.value) || '')}
            className="border rounded p-2 w-full focus:ring-2"
          />
        </td>
      )}
      <td className="centered p-2">
        <div className="text-center font-semibold">{formatNumber(dsaCurrent)}</div>
      </td>
      <td className="centered p-2">
        <div className="text-center font-semibold">{formatNumber(dsaPrevious)}</div>
      </td>
    </tr>
  );
  break;


case 'Servant':
  row = (
    <tr key={index}>
      <td>5</td>
      <td>Servant</td>
      {isSecondColumnVisible && (
        <td className="centered">
          <div className="guidance-text">Current</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={sCurrent}
            onChange={(e) => setsCurrent(parseFloat(e.target.value) || '')}
            className="border rounded p-1"
          />
          <div className="guidance-text">Offer</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={sPrevious}
            onChange={(e) => setsPrevious(parseFloat(e.target.value) || '')}
            className="border rounded p-1"
          />
        </td>
      )}
      <td>
        <div className="centered">{formatNumber(sCurrent)}</div>
      </td>
      <td>
        <div className="centered">{formatNumber(sPrevious)}</div>
      </td>
    </tr>
  );
  break;


case 'Tel (res)':
  row = (
    <tr key={index}>
      <td>6</td>
      <td>Tel (res)</td>
      {isSecondColumnVisible && (
        <td className="centered">
          <div className="guidance-text">Current</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={resCurrent}
            onChange={(e) => setresCurrent(parseFloat(e.target.value) || '')}
            className="border rounded p-1"
          />
          <div className="guidance-text">Offer</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={resPrevious}
            onChange={(e) => setresPrevious(parseFloat(e.target.value) || '')}
            className="border rounded p-1"
          />
        </td>
      )}
      <td>
        <div className="centered">{formatNumber(resCurrent)}</div>
      </td>
      <td>
        <div className="centered">{formatNumber(resPrevious)}</div>
      </td>
    </tr>
  );
  break;

case 'Tel (cell)':
  row = (
    <tr key={index}>
      <td>7</td>
      <td>Tel (cell)</td>
      {isSecondColumnVisible && (
        <td className="centered">
          <div className="guidance-text">Current</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={cellCurrent}
            onChange={(e) => setcellCurrent(parseFloat(e.target.value) || '')}
            className="border rounded p-1"
          />
          <div className="guidance-text">Previous</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={cellPrevious}
            onChange={(e) => setcellPrevious(parseFloat(e.target.value) || '')}
            className="border rounded p-1"
          />
        </td>
      )}
      <td>
        <div className="centered">{formatNumber(cellCurrent)}</div>
      </td>
      <td>
        <div className="centered">{formatNumber(cellPrevious)}</div>
      </td>
    </tr>
  );
  break;


 
case 'Internet':
  row = (
    <tr key={index}>
      <td>8</td>
      <td>Internet</td>
      {isSecondColumnVisible && (
        <td className="centered">
          <div className="guidance-text">Current</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={iCurrent}
            onChange={(e) => setiCurrent(parseFloat(e.target.value) || '')}
            className="border rounded p-1"
          />
          <div className="guidance-text">Offer</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={iPrevious}
            onChange={(e) => setiPrevious(parseFloat(e.target.value) || '')}
            className="border rounded p-1"
          />
        </td>
      )}
      <td>
        <div className="centered">{formatNumber(iCurrent)}</div>
      </td>
      <td>
        <div className="centered">{formatNumber(iPrevious)}</div>
      </td>
    </tr>
  );
  break;


case 'Dearness Allowance':
  row = (
    <tr key={index}>
      <td>9</td>
      <td>Dearness Allowance</td>
      {isSecondColumnVisible && (
        <td className="centered">
          <div className="guidance-text">Current</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={deaCurrent}
            onChange={(e) => setdeaCurrent(parseFloat(e.target.value) || '')}
            className="border rounded p-1"
          />
          <div className="guidance-text">Offer</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={deaPrevious}
            onChange={(e) => setdeaPrevious(parseFloat(e.target.value) || '')}
            className="border rounded p-1"
          />
        </td>
      )}
      <td>
        <div className="centered">{formatNumber(deaCurrent)}</div>
      </td>
      <td>
        <div className="centered">{formatNumber(deaPrevious)}</div>
      </td>
    </tr>
  );
  break;


case 'Project Allowance':
  row = (
    <tr key={index}>
      <td>10</td>
      <td>Project Allowance</td>
      {isSecondColumnVisible && (
        <td className="centered">
          <div className="guidance-text">Current</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={paCurrent}
            onChange={(e) => setpaCurrent(parseFloat(e.target.value) || '')}
            className="border rounded p-1"
          />
          <div className="guidance-text">Offer</div>
          <input
            type="number"
            placeholder="Enter Amount"
            value={paPrevious}
            onChange={(e) => setpaPrevious(parseFloat(e.target.value) || '')}
            className="border rounded p-1"
          />
        </td>
      )}
      <td>
        <div className="centered">{formatNumber(paCurrent)}</div>
      </td>
      <td>
        <div className="centered">{formatNumber(paPrevious)}</div>
      </td>
    </tr>
  );
  break;
default:
  // Handle other cases or a default case here
}

return row;
};

const renderVariablepayRow = (option, index) => {
let row = null;
  
switch (option) {
    case 'Variable Bonus':          
    row = (
      <tr key={index}>
        <td className="px-4 py-2">1</td>
        <td className="px-4 py-2">Variable Bonus</td>
  
        {isSecondColumnVisible && (
          <td className="px-4 py-2">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-sm text-gray-500">Current</div>
              <input
                type="number"
                placeholder="Enter Amount"
                value={vbCurrent}
                onChange={(e) => setvbCurrent(parseFloat(e.target.value) || '')}
                className="border rounded px-2 py-1 w-full"
              />
              <div className="text-sm text-gray-500">Offer</div>
              <input
                type="number"
                placeholder="Enter Amount"
                value={vbPrevious}
                onChange={(e) => setvbPrevious(parseFloat(e.target.value) || '')}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
          </td>
        )}
  
        <td className="px-4 py-2 text-center">
          <div className="text-sm font-medium">{formatNumber(vbCurrent)}</div>
        </td>
  
        <td className="px-4 py-2 text-center">
          <div className="text-sm font-medium">{formatNumber(vbPrevious)}</div>
        </td>
      </tr>
    );
    break;
  
case 'Special Milestone':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">2</td>
      <td className="px-4 py-2">Special Milestone</td>

      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={smCurrent}
              onChange={(e) => setsmCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={smPrevious}
              onChange={(e) => setsmPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(smCurrent)}</div>
      </td>

      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(smPrevious)}</div>
      </td>
    </tr>
  );
  break;

default:}
  // Handle any default cases or errors here

return row;
};


const renderBenefitRow = (option, index) => {
  let row = null;
    
switch (option) {
    case 'Car':
        row = (
          <tr key={index}>
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">Car</td>
      
            {isSecondColumnVisible && (
              <td className="px-4 py-2">
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-sm text-gray-500">Current</div>
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    value={carCurrent}
                    onChange={(e) => setcarCurrent(parseFloat(e.target.value) || '')}
                    className="border rounded px-2 py-1 w-full"
                  />
                  <div className="text-sm text-gray-500">Offer</div>
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    value={carPrevious}
                    onChange={(e) => setcarPrevious(parseFloat(e.target.value) || '')}
                    className="border rounded px-2 py-1 w-full"
                  />
                </div>
              </td>
            )}
      
            <td className="px-4 py-2 text-center">
              <div className="text-sm font-medium">{formatNumber(carCurrent)}</div>
            </td>
      
            <td className="px-4 py-2 text-center">
              <div className="text-sm font-medium">{formatNumber(carPrevious)}</div>
            </td>
          </tr>
        );
        break;
      
    
case 'Car Insurance':
row = (
<tr key={index}>
<td>2</td><td>Car Insurance</td>
{isSecondColumnVisible && (<td className="centered">
<div className="guidance-text">Current</div>
<input type="number"placeholder="Enter Amount" value={carInsuranceCurrent} onChange={(e) => setcarInsuranceCurrent(parseFloat(e.target.value) || '')}/>
<div className="guidance-text">Offer</div>
<input type="number" placeholder="Enter Amount" value={carInsurancePrevious} onChange={(e) => setcarInsurancePrevious(parseFloat(e.target.value) || '')}/>
</td>
)}
            
<td><div className="centered">{formatNumber(carInsuranceCurrent)}</div></td>
<td><div className="centered">{formatNumber(carInsurancePrevious)}</div></td>
</tr>
);break;

case 'Car Fuel':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">3</td>
      <td className="px-4 py-2">Car Fuel</td>

      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={carFuelCurrent}
              onChange={(e) => setcarFuelCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={carFuelPrevious}
              onChange={(e) => setcarFuelPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(carFuelCurrent)}</div>
      </td>

      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(carFuelPrevious)}</div>
      </td>
    </tr>
  );
  break;

    
case 'Car Maintenance':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">4</td>
      <td className="px-4 py-2">Car Maintenance</td>

      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={carMaintenanceCurrent}
              onChange={(e) => setcarMaintenanceCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={carMaintenancePrevious}
              onChange={(e) => setcarMaintenancePrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(carMaintenanceCurrent)}</div>
      </td>

      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(carMaintenancePrevious)}</div>
      </td>
    </tr>
  );
  break;

case 'Car Reg / Road Tax':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">5</td>
      <td className="px-4 py-2">Car Reg / Road Tax</td>

      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={carRegRoadTaxCurrent}
              onChange={(e) => setcarRegRoadTaxCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={carRegRoadTaxPrevious}
              onChange={(e) => setcarRegRoadTaxPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(carRegRoadTaxCurrent)}</div>
      </td>

      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(carRegRoadTaxPrevious)}</div>
      </td>
    </tr>
  );
  break;

    
case 'Tracker':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">6</td>
      <td className="px-4 py-2">Tracker</td>

      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={trackerCurrent}
              onChange={(e) => settrackerCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={trackerPrevious}
              onChange={(e) => settrackerPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(trackerCurrent)}</div>
      </td>

      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(trackerPrevious)}</div>
      </td>
    </tr>
  );
  break;

case 'Company Provided Traveling':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">7</td>
      <td className="px-4 py-2">Company Provided Traveling</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={companyProvidedTravelingCurrent}
              onChange={(e) => setcompanyProvidedTravelingCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={companyProvidedTravelingPrevious}
              onChange={(e) => setcompanyProvidedTravelingPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(companyProvidedTravelingCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(companyProvidedTravelingPrevious)}</div>
      </td>
    </tr>
  );
  break;

    
case 'Corporate Club Membership':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">8</td>
      <td className="px-4 py-2">Corporate Club Membership</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={corporateClubMembershipCurrent}
              onChange={(e) => setcorporateClubMembershipCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={corporateClubMembershipPrevious}
              onChange={(e) => setcorporateClubMembershipPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(corporateClubMembershipCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(corporateClubMembershipPrevious)}</div>
      </td>
    </tr>
  );
  break;

case 'Club Subscription':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">9</td>
      <td className="px-4 py-2">Club Subscription</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={clubSubscriptionCurrent}
              onChange={(e) => setclubSubscriptionCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={clubSubscriptionPrevious}
              onChange={(e) => setclubSubscriptionPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(clubSubscriptionCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(clubSubscriptionPrevious)}</div>
      </td>
    </tr>
  );
  break;

case 'Apartment Rent':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">10</td>
      <td className="px-4 py-2">Apartment Rent</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={apartmentRentCurrent}
              onChange={(e) => setapartmentRentCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={apartmentRentPrevious}
              onChange={(e) => setapartmentRentPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(apartmentRentCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(apartmentRentPrevious)}</div>
      </td>
    </tr>
  );
  break;


case 'Hard Furnishings':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">11</td>
      <td className="px-4 py-2">Hard Furnishings</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={hardFurnishingsCurrent}
              onChange={(e) => sethardFurnishingsCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={hardFurnishingsPrevious}
              onChange={(e) => sethardFurnishingsPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(hardFurnishingsCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(hardFurnishingsPrevious)}</div>
      </td>
    </tr>
  );
  break;

    
case 'Credit Cards / Statutory Contribution':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">12</td>
      <td className="px-4 py-2">Credit Cards / Statutory Contribution</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={creditCardsStatutoryContributionCurrent}
              onChange={(e) => setcreditCardsStatutoryContributionCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={creditCardsStatutoryContributionPrevious}
              onChange={(e) => setcreditCardsStatutoryContributionPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(creditCardsStatutoryContributionCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(creditCardsStatutoryContributionPrevious)}</div>
      </td>
    </tr>
  );
  break;

case 'Other Perquisites':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">13</td>
      <td className="px-4 py-2">Other Perquisites</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={otherPerquisitesCurrent}
              onChange={(e) => setotherPerquisitesCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={otherPerquisitesPrevious}
              onChange={(e) => setotherPerquisitesPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(otherPerquisitesCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(otherPerquisitesPrevious)}</div>
      </td>
    </tr>
  );
  break;

    
case 'Security Services / Guards':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">14</td>
      <td className="px-4 py-2">Security Services / Guards</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={securityServicesGuardsCurrent}
              onChange={(e) => setsecurityServicesGuardsCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={securityServicesGuardsPrevious}
              onChange={(e) => setsecurityServicesGuardsPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(securityServicesGuardsCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(securityServicesGuardsPrevious)}</div>
      </td>
    </tr>
  );
  break;


case 'Meal Subsidy / Housing Loan':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">15</td>
      <td className="px-4 py-2">Meal Subsidy / Housing Loan</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={mealSubsidyHousingLoanCurrent}
              onChange={(e) => setmealSubsidyHousingLoanCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={mealSubsidyHousingLoanPrevious}
              onChange={(e) => setmealSubsidyHousingLoanPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(mealSubsidyHousingLoanCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(mealSubsidyHousingLoanPrevious)}</div>
      </td>
    </tr>
  );
  break;

    
case 'Entertainment Allowance':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">16</td>
      <td className="px-4 py-2">Entertainment Allowance</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={entertainmentAllowanceCurrent}
              onChange={(e) => setentertainmentAllowanceCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={entertainmentAllowancePrevious}
              onChange={(e) => setentertainmentAllowancePrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(entertainmentAllowanceCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(entertainmentAllowancePrevious)}</div>
      </td>
    </tr>
  );
  break;


case 'Leave Encashment':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">17</td>
      <td className="px-4 py-2">Leave Encashment</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={leaveEncashmentCurrent}
              onChange={(e) => setleaveEncashmentCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={leaveEncashmentPrevious}
              onChange={(e) => setleaveEncashmentPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(leaveEncashmentCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(leaveEncashmentPrevious)}</div>
      </td>
    </tr>
  );
  break;

    
case 'Home Travel':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">18</td>
      <td className="px-4 py-2">Home Travel</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={homeTravelCurrent}
              onChange={(e) => sethomeTravelCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={homeTravelPrevious}
              onChange={(e) => sethomeTravelPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(homeTravelCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(homeTravelPrevious)}</div>
      </td>
    </tr>
  );
  break;


case 'Group Life':          
  row = (
    <tr key={index}>
      <td className="px-4 py-2">19</td>
      <td className="px-4 py-2">Group Life</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input 
              type="number"
              placeholder="Enter Amount"
              value={groupLifeCurrent}
              onChange={(e) => setgroupLifeCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input 
              type="number"
              placeholder="Enter Amount"
              value={groupLifePrevious}
              onChange={(e) => setgroupLifePrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(groupLifeCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(groupLifePrevious)}</div>
      </td>
    </tr>
  );
  break;

case 'Hospitalization Insurance (self, wife, children)':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">20</td>
      <td className="px-4 py-2">Hospitalization Insurance (self, wife, children)</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input 
              type="number"
              placeholder="Enter Amount"
              value={hospitalizationInsuranceCurrent}
              onChange={(e) => sethospitalizationInsuranceCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input 
              type="number"
              placeholder="Enter Amount"
              value={hospitalizationInsurancePrevious}
              onChange={(e) => sethospitalizationInsurancePrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(hospitalizationInsuranceCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(hospitalizationInsurancePrevious)}</div>
      </td>
    </tr>
  );
  break;


case 'Medical (OPD)':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">21</td>
      <td className="px-4 py-2">Medical (OPD)</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input 
              type="number"
              placeholder="Enter Amount"
              value={medicalOpdCurrent}
              onChange={(e) => setmedicalOpdCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input 
              type="number"
              placeholder="Enter Amount"
              value={medicalOpdPrevious}
              onChange={(e) => setmedicalOpdPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(medicalOpdCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(medicalOpdPrevious)}</div>
      </td>
    </tr>
  );
  break;

    
case 'Pension':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">22</td>
      <td className="px-4 py-2">Pension</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input 
              type="number"
              placeholder="Enter Amount"
              value={pensionCurrent}
              onChange={(e) => setpensionCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input 
              type="number"
              placeholder="Enter Amount"
              value={pensionPrevious}
              onChange={(e) => setpensionPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(pensionCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(pensionPrevious)}</div>
      </td>
    </tr>
  );
  break;

case 'PF':          
  row = (
    <tr key={index}>
      <td className="px-4 py-2">23</td>
      <td className="px-4 py-2">PF</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input 
              type="number"
              placeholder="Enter Amount"
              value={pfCurrent}
              onChange={(e) => setpfCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input 
              type="number"
              placeholder="Enter Amount"
              value={pfPrevious}
              onChange={(e) => setpfPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(pfCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(pfPrevious)}</div>
      </td>
    </tr>
  );
  break;

    
case 'EOBI':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">24</td>
      <td className="px-4 py-2">EOBI</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input 
              type="number"
              placeholder="Enter Amount"
              value={eobiCurrent}
              onChange={(e) => seteobiCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input 
              type="number"
              placeholder="Enter Amount"
              value={eobiPrevious}
              onChange={(e) => seteobiPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(eobiCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(eobiPrevious)}</div>
      </td>
    </tr>
  );
  break;


case 'Gratuity':
  row = (
    <tr key={index}>
      <td className="px-4 py-2">25</td>
      <td className="px-4 py-2">Gratuity</td>

      {/* Custom Column Input */}
      {isSecondColumnVisible && (
        <td className="px-4 py-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-gray-500">Current</div>
            <input 
              type="number"
              placeholder="Enter Amount"
              value={gratuityCurrent}
              onChange={(e) => setgratuityCurrent(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
            <div className="text-sm text-gray-500">Offer</div>
            <input 
              type="number"
              placeholder="Enter Amount"
              value={gratuityPrevious}
              onChange={(e) => setgratuityPrevious(parseFloat(e.target.value) || '')}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </td>
      )}

      {/* Current Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(gratuityCurrent)}</div>
      </td>

      {/* Previous Amount Display */}
      <td className="px-4 py-2 text-center">
        <div className="text-sm font-medium">{formatNumber(gratuityPrevious)}</div>
      </td>
    </tr>
  );
  break;
default:
  // Handle other cases
}

return row;
};

return (
    <div className="p-10" style={{ backgroundImage: "url('ap.img.png')" }}>
  
      {/* Heading */}
      <h1 className="text-2xl font-bold text-center mb-6 text-white">Financial Offer Calculator</h1>
      <h3 className="font-semibold text-white text-center mb-4">Here You Can Enter Your Custom Ones...</h3>
  
      {/* Custom Button */}
      <div className="flex justify-center mb-6">
        <button 
          className="bg-TealBlue text-white py-2 px-4 rounded hover:bg-customBlue  transition"
          onClick={toggleSecondColumn}
        >
          Custom
        </button>
      </div>
  
      {/* Compensation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button className="bg-TealBlue text-white py-2 px-4 rounded hover:bg-customBlue transition" onClick={() => toggleOptions('Basic Salary')}>Basic Salary</button>
        <button className="bg-TealBlue text-white py-2 px-4 rounded hover:bg-customBlue transition" onClick={() => toggleOptions('Allowance')}>Allowance</button>
        <button className="bg-TealBlue text-white py-2 px-4 rounded hover:bg-customBlue transition" onClick={() => toggleOptions('Variable Pay')}>Variable Pay</button>
        <button className="bg-TealBlue text-white py-2 px-4 rounded hover:bg-customBlue transition" onClick={() => toggleOptions('Benefits')}>Benefits</button>
      </div>
  
      {/* Basic Salary Options */}
      {activeCompensation === 'Basic Salary' && (
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <ol className="list-decimal pl-6">
            {['Enter Basic Salary', 'House Rent (% of basic)', 'Utilities (% of basic)', 'Medical (% of basic)', 'LFA (% of basic)', 'Adjustment for Fuel', 'Other Amount'].map(option => (
              <li key={option}>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={selectedOptions.includes(option)} 
                    onChange={() => handleOptionChange(option)} 
                  />
                  {option}
                </label>
              </li>
            ))}
          </ol>
        </div>
      )}
  
      {/* Allowance Options */}
      {activeCompensation === 'Allowance' && (
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <ol className="list-decimal pl-6">
            {['Allowance in lieu of second Car', 'Disturbance Allowance', 'Market Premium', 'Driver Salary (Allowance)', 'Servant', 'Tel (res)', 'Tel (cell)', 'Internet', 'Dearness Allowance', 'Project Allowance'].map(option => (
              <li key={option}>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={selectedAllowanceOptions.includes(option)} 
                    onChange={() => handleAllowanceOptionChange(option)} 
                  />
                  {option}
                </label>
              </li>
            ))}
          </ol>
        </div>
      )}
  
      {/* Variable Pay Options */}
      {activeCompensation === 'Variable Pay' && (
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <ol className="list-decimal pl-6">
            {['Variable Bonus', 'Special Milestone'].map(option => (
              <li key={option}>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={selectedVariablepayOptions.includes(option)} 
                    onChange={() => handleVariablepayOptionChange(option)} 
                  />
                  {option}
                </label>
              </li>
            ))}
          </ol>
        </div>
      )}
  
      {/* Benefits Options */}
      {activeCompensation === 'Benefits' && (
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <ol className="list-decimal pl-6">
            {['Car', 'Car Insurance', 'Car Fuel', 'Car Maintenance', 'Car Reg / Road Tax', 'Tracker', 'Company Provided Traveling', 'Corporate Club Membership', 'Club Subscription', 'Apartment Rent', 'Hard Furnishings', 'Credit Cards / Statutory Contribution', 'Other Perquisites', 'Security Services / Guards', 'Meal Subsidy / Housing Loan', 'Entertainment Allowance', 'Leave Encashment', 'Home Travel', 'Group Life', 'Hospitalization Insurance (self, wife, children)', 'Medical (OPD)', 'Pension', 'PF', 'EOBI', 'Gratuity'].map(option => (
              <li key={option}>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={selectedBenefitOptions.includes(option)} 
                    onChange={() => handleBenefitOptionChange(option)} 
                  />
                  {option}
                </label>
              </li>
            ))}
          </ol>
        </div>
      )}
  
      {/* Error Message */}
      {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}
  
      {/* Compensation Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Compensation Breakdown</th>
              {isSecondColumnVisible && <th className="px-4 py-2 text-left">Enter Custom</th>}
              <th className="px-4 py-2 text-left">Current Amount</th>
              <th className="px-4 py-2 text-left">Previous Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td colSpan={2} className="px-4 py-2 font-bold text-center text-black">Basic Salary:</td>
              {isSecondColumnVisible && <td></td>}
              <td></td>
            </tr>
  
            {/* Dynamic Rows for Selected Options */}
            {sortedSelectedOptions.map((option, index) => renderOptionRow(option, index))}
  
            {/* Subtotals and Totals */}
            <tr className="bg-gray-100 font-bold">
              <td></td>
              <td className="px-4 py-2 text-center text-TealBlue">Sub Total (B)</td>
              {isSecondColumnVisible && <td></td>}
              <td className="px-4 py-2 text-center text-black">{formatNumber(calculateSubTotalB())}</td>
              <td className="px-4 py-2 text-center text-black">{formatNumber(calculateSubTotalB())}</td>
            </tr>
  
            {/* Add more table rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};  

export default FinancialOffer;  
 
