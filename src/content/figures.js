export const figures = {
  classrooms: 3,
  extraChildren: 19,
  staff: 7,
  decentMonthlySalaryNpr: 35000,
  decentMonthlySalaryEur: 250,
  annualSalaryTargetEur: 12000,
  renovationFundedEur: 10985,
  schoolOperationalSince: { FR: "mars 2025", EN: "March 2025" },
};

const numberLocale = { FR: "fr-FR", EN: "en-GB" };

export const number = (value, locale) =>
  value.toLocaleString(numberLocale[locale]);

export const euros = (value, locale) =>
  value.toLocaleString(numberLocale[locale], {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
