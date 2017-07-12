const defaultMemberGridFields = [
  {
    name: 'Plan',
    // mapping: 'plan',
    subName: [
      {
        name: 'Plan ID',
        mapping: ['subscription', 'plan', 'planId']
      },
      {
        name: 'Plan name',
        mapping: ['subscription', 'plan', 'planName']
      },
      {
        name: 'Plan price',
        mapping: ['subscription', 'plan', 'planPrice']
      },
      {
        name: 'Country ID',
        mapping: ['subscription', 'plan', 'country_id']
      },
      {
        name: 'Trial days',
        mapping: ['subscription', 'plan', 'trialDays']
      }
    ]
  },
  {
    name: 'Price',
    mapping: ['subscription', 'price']
  },
  {
    name: 'Promo cod',
    mapping: ['subscription', 'promoCode']
  },
  {
    name: 'Card',
    mapping: ['subscription', 'charges', 'card']
  },
  {
    name: 'Start date',
    mapping: ['subscription', 'charges', 'startDate']
  },
  {
    name: 'End date',
    mapping: ['subscription', 'charges', 'endDate']
  },
  {
    name: 'Is cancelled',
    mapping: ['subscription', 'isCancelled']
  },
  {
    name: 'Successful charge',
    mapping: 'unknown'
  }
];

export { defaultMemberGridFields as default };
