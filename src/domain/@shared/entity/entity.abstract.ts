import Notification from "../notification/notification"

// abstract class.ts
export default abstract class Entity {
  protected _notification: Notification

  constructor() {
    this._notification = new Notification()
  }

  get notification(): Notification {
    return this._notification
  }
}
