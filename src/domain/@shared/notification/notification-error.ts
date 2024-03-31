import { NotificationErrorProps } from "./notification"

export default class NotificationError extends Error {
  constructor(readonly errors: NotificationErrorProps[]) {
    super(errors.map((error) => error.message).join(", "))
  }
}
