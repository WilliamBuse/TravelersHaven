exports.config = {
  capabilities: {
    'browserName': 'chrome'
    },
  framework: 'jasmine',
  specs: ['TravelersHaven_spec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};