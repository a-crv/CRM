const defaultTeamsGridFields = [
  {
    name: 'ID',
    mapping: 'id',
    className: 'table-data__id i-center-text'
  },
  {
    name: 'Team name',
    mapping: 'name'
  },
  {
    name: 'Project label',
    mapping: 'projectLabel'
  },
  {
    name: 'Paid seats',
    mapping: 'paidSeats',
    className: 'i-center-text'
  },
  {
    name: 'Is paying',
    mapping: 'isPaying',
    className: 'i-center-text'
  },
  {
    name: 'Total members',
    mapping: 'numMembers',
    className: 'i-center-text'
  }
];

export { defaultTeamsGridFields as default };
