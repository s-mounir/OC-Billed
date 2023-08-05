/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'

import { screen, waitFor,  fireEvent } from "@testing-library/dom"
import NewBillUI from "../views/NewBillUI.js"
import NewBill from "../containers/NewBill.js"
import {localStorageMock} from "../__mocks__/localStorage.js";

import { ROUTES_PATH } from "../constants/routes.js";
import router from "../app/Router.js";

describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page", () => {
    test("Then mail icon in vertical layout should be highlighted", async () => {
      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Employee'
      }))
      const root = document.createElement("div")
      root.setAttribute("id", "root")
      document.body.append(root)
      router()
      window.onNavigate(ROUTES_PATH.NewBill)
      await waitFor(() => screen.getByTestId('icon-mail'))
      const mailIcon = screen.getByTestId('icon-mail')
      //to-do write expect expression
      expect(mailIcon).toHaveClass('active-icon');
    })
    test("Then the form should appear", () => {
      const html = NewBillUI()
      document.body.innerHTML = html
      //to-do write assertion
      expect(screen.getByTestId('form-new-bill')).toBeTruthy();
    })
  })
  describe("When I am on NewBill Page, and I change the file", () => {
    test("Then an error alert should appear if the format isn't jpg, jpeg or png", () => {
      document.body.innerHTML = NewBillUI();

      const newBill = new NewBill({
        document,
        onNavigate,
        store: null,
        localStorage: window.localStorage,
      });

      const alertMock = jest.spyOn(window,'alert').mockImplementation(); 

      const handleChangeFile = jest.fn(() => newBill.handleChangeFile);
      const attachedFile = screen.getByTestId('file');
      attachedFile.addEventListener('change', handleChangeFile);
      fireEvent.change(attachedFile, {
        target: {
          files: [new File(['file.pdf'], 'file.pdf', { type: 'text/txt' })],
        },
      });

      expect(alertMock).toHaveBeenCalledTimes(1);
    })
    test("Then the file handler should be run if the format is jpg, jpeg or png", () => {
      document.body.innerHTML = NewBillUI();

      const newBill = new NewBill({
        document,
        onNavigate,
        store: null,
        localStorage: window.localStorage,
      });

      const handleChangeFile = jest.fn(() => newBill.handleChangeFile);
      const attachedFile = screen.getByTestId('file');
      attachedFile.addEventListener('change', handleChangeFile);
      fireEvent.change(attachedFile, {
        target: {
          files: [new File(['file.txt'], 'file.txt', { type: 'text/txt' })],
        },
      });

      const numberOfFile = screen.getByTestId('file').files.length;
      expect(numberOfFile).toEqual(1);
    })
  })
  describe("When I submit the form", () => {
    test("Then the bills page should appear", () => {

    })
    test("Then the new bill should be in the list", () => {
      
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