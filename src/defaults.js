module.exports = {
  apply: {
    backupPath: 'terraform.backup',
    autoApprove: false,
    lock: true,
    lockTimeout: 0,
    input: false,
    noColor: true,
    parallelism: 10,
    refresh: true,
    state: 'terraform.tfstate',
    stateOut: null,
    plan: '',
  },
  init: {
    backend: true,
    backendConfig: {},
    forceCopy: true,
    get: true,
    getPlugins: true,
    input: false,
    lock: true,
    lockTimeout: 0,
    noColor: true,
    reconfigure: false,
    upgrade: false,
    verifyPlugins: true,
  },
  output: {
    state: 'terraform.tfstate',
    noColor: true,
    json: false,
  },
  plan: {
    destroy: false,
    detailedExitcode: false,
    input: false,
    lock: true,
    lockTimeout: 0,
    moduleDepth: -1,
    noColor: true,
    out: 'terraform',
    parallelism: 10,
    refresh: true,
    state: 'terraform.tfstate',
    plan: '',
  },
  validate: {
    checkVariables: false,
    noColor: false,
  },
};