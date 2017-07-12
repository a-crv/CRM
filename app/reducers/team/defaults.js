const defaultTeamGridFields = [
  {
    name: 'User Name',
    mapping: ['user', 'userName']
  },
  {
    name: 'First name',
    mapping: ['user', 'firstName']
  },
  {
    name: 'Last Name',
    mapping: ['user', 'lastName']
  },
  {
    name: 'Email',
    mapping: ['user', 'emailAddress']
  },
  {
    name: 'Is admin',
    mapping: 'admin',
    className: 'i-center-text'
  },
  {
    name: 'Active members',
    mapping: 'numActiveMembers',
    className: 'i-center-text'
  },
  {
    name: 'Status',
    mapping: 'unknown'
  }
];

export { defaultTeamGridFields as default };
