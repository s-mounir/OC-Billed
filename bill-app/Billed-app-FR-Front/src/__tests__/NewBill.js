/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/dom"
import NewBillUI from "../views/NewBillUI.js"
import NewBill from "../containers/NewBill.js"


describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page", () => {
    test("Then mail icon in vertical layout should be highlighted", () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      //to-do write assertion
    })
    test("Then the form should appear", () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      //to-do write assertion
    })
  })
  describe("When I am on NewBill Page, and I change the file", () => {
    test("Then an error alert should appear if the format isn't jpg, jpeg or png", () => {

    })
    test("Then a bill should be created if the format is jpg, jpeg or png", () => {
      
    })
  })
  describe("When I submit the form", () => {
    test("Then the bills page should appear", () => {

    })
    test("Then I should navigate to the bills page", () => {
      
    })
  })
})

// test d'integration POST
describe("Given I am a user connected as Employee", () => {
  describe("When I navigate to New Bill page", () => {
    test("post new bill from mock API", () => {

    })
  })
  describe("When an error occurs on API", () => {
    test("post new bill from mock API and fails with 404 message error", () => {

    })
    test("post new bill from mock API and fails with 500 message error", () => {
      
    })
  })
})