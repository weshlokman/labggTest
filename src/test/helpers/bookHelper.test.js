var bookHelper = require('../../helpers/bookHelper')
var chai = require('chai')

describe('bookHelper', function() {

    it('check if checkemail is working', function() {
      let emailTestT = "loko@hotmail.com";
      let emailTestF = "lokohotmail.com";
      // We want tests to pass.
      let isValid =  bookHelper.checkValidEmail(emailTestT)
      let isNotValid =  bookHelper.checkValidEmail(emailTestF)

      chai.expect(isValid).to.equal(true);
      chai.expect(isNotValid).to.equal(false);

    });

    it('check if checkValidPhoneNumber is working', function() {
      let phoneTestT = 5555555555;
      let phoneTestF = "5555555555";
      // We want tests to pass.
      let typeT =  bookHelper.checkValidPhoneNumber(phoneTestT)
      let typeF =  bookHelper.checkValidPhoneNumber(phoneTestF)

      chai.expect(typeT).to.equal("number");
      chai.expect(typeF).to.not.equal("number")

    });
  
  });