module.exports = {
  integrationFolder: 'tests',
  testFiles: '**/*Test.js',
  video: true,
  screenshotsFolder: 'tests/screenshots',
  videosFolder: 'tests/videos',
  viewportWidth: 1280,
  viewportHeight: 720,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  execTimeout: 20000,
  pageLoadTimeout: 30000,
  waitForAnimations: true,
  animationDistanceThreshold: 14,
  baseUrl: 'http://localhost:3000',
  env: {
    username: 'testUser',
    password: 'testPassword'
  }
};