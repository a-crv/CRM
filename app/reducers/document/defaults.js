const defaultDocGridFields = [
  {
    name: 'Sub receipts',
    subName: [
      {
        name: 'ID',
        mapping: ['subReceipts', 'id']
      },
      {
        name: 'Shipping',
        mapping: ['subReceipts', 'shipping']
      },
      {
        name: 'Handling',
        mapping: ['subReceipts', 'handling']
      },
      {
        name: 'Tax',
        mapping: ['subReceipts', 'tax']
      },
      {
        name: 'Grand total',
        mapping: ['subReceipts', 'grandTotal']
      },
      {
        name: 'Discount',
        mapping: ['subReceipts', 'discount']
      },
      {
        name: 'Order ID',
        mapping: ['subReceipts', 'orderId']
      },
      {
        name: 'Tip',
        mapping: ['subReceipts', 'tip']
      },
      {
        name: 'Notes',
        mapping: ['subReceipts', 'notes']
      },
      {
        name: 'Is billable',
        mapping: ['subReceipts', 'isBillable']
      },
      {
        name: 'Is reimbursable',
        mapping: ['subReceipts', 'isReimbursable']
      },
      {
        name: 'Is work expense',
        mapping: ['subReceipts', 'isWorkExpense']
      }
    ]
  },
  {
    name: 'Currency',
    subName: [
      {
        name: 'ID',
        mapping: ['subReceipts', 'currency', 'id']
      },
      {
        name: 'Symbol',
        mapping: ['subReceipts', 'currency', 'symbol']
      },
      {
        name: 'Sode',
        mapping: ['subReceipts', 'currency', 'sode']
      },
      {
        name: 'Description',
        mapping: ['subReceipts', 'currency', 'description']
      },
      {
        name: 'Grand total',
        mapping: ['subReceipts', 'currency', 'id']
      }
    ]
  },
  {
    name: 'Merchant',
    subName: [
      {
        name: 'ID',
        mapping: ['merchant', 'id']
      },
      {
        name: 'Name',
        mapping: ['merchant', 'name']
      }
    ]
  }
];

export { defaultDocGridFields as default };
