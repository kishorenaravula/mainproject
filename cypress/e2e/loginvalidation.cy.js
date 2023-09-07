import logintest from "../../pageobjects/logintest";

describe('firsttestsuite',()=>{

  beforeEach(()=>{
   logintest.accessStgapplication();
  })

//   afterEach(()=>{ 
   
//  })  

  it('Verify the successful login',()=>{
    
    cy.fixture("applicationsecrets").then((data)=>{
    logintest.enterUserName(data.UN);
    logintest.clickNext();
    logintest.enterPassword(data.PW);
    logintest.clickLogin();
    //cy.wait(5000);
    logintest.verifyHomescreen();
    logintest.clickonProfile();
    //logintest.verifyLogoutvisible();
    cy.clickLink("Logout");
    //cy.get("a").contains("Logout").click();
    //logintest.clickLogoutButton();    
    })      
      
  })
  
  it('Verify invalid username format validation',{ tags: ['@smoke', '@regression'] }, ()=>{

    
  cy.fixture("applicationsecrets").then((data)=>{          
    logintest.enterinvalidUserName(data.invalidUNformat);
    logintest.clickNext();
    logintest.verifyinvalidusererror();

    })
  
  })  

  it('Verify invalid credentials error',   
  //retry code at test level
  // {
  //   retries: {
  //     runMode: 2,
  //     openMode: 2,
  //   },
  // },
  ()=>{
    cy.screenshot('user-login-errors');
    cy.fixture("applicationsecrets").then((data)=>{        
      logintest.enterinvalidUserName(data.invalidUsername);
      logintest.clickNext();
      logintest.enterPassword(data.PW);
      logintest.clickLogin();
      logintest.verifybadcredentialsserror();             
      })
    
    })
})






