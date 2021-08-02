const Page = require('./page');

class SigninPage extends Page {

  //email
  get email () {return $('#email_create')}
  get createBtn () {return $('#SubmitCreate')}

  //form
  get gender1 () {return $('#id_gender1')}
  get customerfirstName () {return $('#customer_firstname')}
  get customerlastName () {return $('#customer_lastname')}
  get password () {return $('#passwd')}

  //birthdate
  get day () {return $('#days')}
  get month () {return $('#months')}
  get year () {return $('#years')}

  //address
  get firstName () {return $('#firstname')}
  get lastName () {return $('#lastname')}
  get company () {return $('#company')}
  get address () {return $('#address1')}
  get city () {return $('#city')}
  get state () {return $('#id_state')}
  get zipCode () {return $('#postcode')}
  get country () {return $('#id_country')}
  get mobilePhone () {return $('#phone_mobile')}
  get alias () {return $('#alias')}

  get registerBtn () {return $('#submitAccount')}

  //methods
  async enterEmail (email) {
    await this.email.setValue(email);
    await this.createBtn.click();
  }

  async selectTitle() {
    await this.gender1.click()
  }

  async enterFullName(firstName, lastName) {
    await this.customerfirstName.setValue(firstName)
    await this.customerlastName.setValue(lastName)
  }

  async enterPassword(password) {
    await this.password.setValue(password)
  }

  async enterBirthDate(day, month, year) {
    await this.day.selectByAttribute('value', day)
    await this.month.selectByAttribute('value', month)
    await this.year.selectByAttribute('value', year)
  }

  async enterAdress(firstName, lastName, address) {
    await this.firstName.setValue(firstName)
    await this.lastName.setValue(lastName)
    await this.address.setValue(address)
  }

  async enterLocation(city, state, zipCode) {
    await this.city.setValue(city)
    await this.state.selectByAttribute('value', state)
    await this.zipCode.setValue(zipCode)
  }

  async enterMobilePhone(mobile) {
    await this.mobilePhone.setValue(mobile)
  }

  async setAlias(alias) {
    await this.alias.setValue(alias)
  }

  async clickRegisterButton() {
    await this.registerBtn.click()
  }

  async open() {
    return await super.open('index.php?controller=authentication&back=my-account');
  }
}

module.exports = new SigninPage();