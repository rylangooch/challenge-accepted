//
//  ChallengeAcceptedUITests.swift
//  ChallengeAcceptedUITests
//
//  Created by Rylan Gooch on 08/09/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

import XCTest

class ChallengeAcceptedUITests: XCTestCase {
        
    override func setUp() {
        super.setUp()
        
        // Put setup code here. This method is called before the invocation of each test method in the class.
        
        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false
        // UI tests must launch the application that they test. Doing this in setup will make sure it happens for each test method.
        XCUIApplication().launch()

        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testSignUp() {
      
      let app = XCUIApplication()
      app.textFields["Username"].tap()
      app.textFields["Username"].typeText("Perr")
      app.otherElements["“Perr”"].tap()
      app.secureTextFields["Password"].tap()
      app.secureTextFields["Password"].typeText("123")
      app.otherElements[" Signup"].tap()
      XCTAssert(app.alerts["Signup Success!"].exists)
      
      
        // Use recording to get started writing UI tests.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
    }
  
  func testLogIn() {
    
    let app = XCUIApplication()
    app.textFields["Username"].tap()
    app.textFields["Username"].typeText("Perry")
    app.otherElements["“Perry”"].tap()
    app.secureTextFields["Password"].tap()
    app.secureTextFields["Password"].typeText("123")
    app.otherElements[" Login"].tap()
    
    
    
  }
  
}
