import Notification from "./notification"

describe("Unit Test for notifications", () => {
  it("should create errors", () => {
    const notification = new Notification()
    const error = {
      message: "Error message",
      context: "product",
    }
    notification.addError(error)
    expect(notification.messages("product")).toBe("product: Error message")

    const error2 = {
      message: "Error message 2",
      context: "product",
    }
    notification.addError(error2)
    expect(notification.messages("product")).toBe(
      "product: Error message, product: Error message 2",
    )

    const error3 = {
      message: "Error message 3",
      context: "user",
    }
    notification.addError(error3)
    expect(notification.messages("user")).toBe("user: Error message 3")

    expect(notification.messages()).toBe(
      "product: Error message, product: Error message 2, user: Error message 3",
    )

    expect(notification.hasErrors()).toBe(true)
  })
})
