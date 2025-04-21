const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

async function testLogin() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    console.log('🌍 Acessando o site...');
    await driver.get('https://the-internet.herokuapp.com/login');

    await driver.sleep(1000);

    console.log('✍️ Preenchendo login...');
    await driver.findElement(By.id('username')).sendKeys('tomsmith');
    await driver.findElement(By.id('password')).sendKeys('SuperSecretPassword!');

    console.log('🔎 Procurando o botão pelo XPath fixo...');
    const loginButton = await driver.findElement(
      By.xpath("//button[@type='submit']")
    );

    console.log('🕐 Esperando botão ficar clicável...');
    await driver.wait(until.elementIsVisible(loginButton), 5000);
    await driver.wait(until.elementIsEnabled(loginButton), 5000);

    console.log('👆 Clicando...');
    await loginButton.click();

    console.log('⏳ Esperando confirmação de login...');
    await driver.wait(until.elementLocated(By.css('.flash.success')), 5000);

    console.log('✅ Login realizado com sucesso!');
    await driver.sleep(3000);
  } catch (err) {
    console.error('❌ Deu ruim:', err);
  } finally {
    console.log('🖥️ Fechando o navegador...');
    await driver.quit();
  }
}

testLogin();
