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
    this.email.setValue(email);
    this.createBtn.click();
  }

  selectTitle() {
    this.gender1.click()
  }

  enterFullName(firstName, lastName) {
    this.customerfirstName.setValue(firstName)
    this.customerlastName.setValue(lastName)
  }

  enterPassword(password) {
    this.password.setValue(password)
  }

  enterBirthDate(day, month, year) {
    this.day.selectByAttribute('value', day)
    this.month.selectByAttribute('value', month)
    this.year.selectByAttribute('value', year)
  }

  enterAdress(firstName, lastName, address) {
    this.firstName.setValue(firstName)
    this.lastName.setValue(lastName)
    this.address.setValue(address)
  }

  enterLocation(city, state, zipCode) {
    this.city.setValue(city)
    this.state.selectByAttribute('value', state)
    this.zipCode.setValue(zipCode)
  }

  enterMobilePhone(mobile) {
    this.mobilePhone.setValue(mobile)
  }

  setAlias(alias) {
    this.alias.setValue(alias)
  }

  clickRegisterButton() {
    this.registerBtn.click()
  }

  open() {
    return super.open('index.php?controller=authentication&back=my-account');
  }
}

module.exports = new SigninPage();