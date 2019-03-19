const { reloadApp } = require('detox-expo-helpers');

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Example', () => {
  beforeEach(async () => {
    await reloadApp();
    await timeout(30000);
  });

  it('should have not connected screen', async () => {
    await expect(element(by.id('homeNotConnected'))).toBeVisible();
    await expect(element(by.id('homeNotConnectedLogo'))).toBeVisible();
    await expect(element(by.id('homeNotConnectedSignUpButton'))).toBeVisible();
  });

  it('should show login screen after tap on login button', async () => {
    await element(by.id('homeNotConnectedLoginButton')).tap();
    await expect(element(by.id('loginScreenTitle'))).toBeVisible();
  });

  it('should show signUp screen after tap on signup button', async () => {
    await element(by.id('homeNotConnectedSignUpButton')).tap();
    await expect(element(by.id('signUpScreenTitle'))).toBeVisible();
  });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
