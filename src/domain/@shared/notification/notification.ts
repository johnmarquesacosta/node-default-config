export interface NotificationErrorProps {
  context: string
  message: string
}
export default class Notification {
  private _errors: NotificationErrorProps[] = []

  get errors(): NotificationErrorProps[] {
    return this._errors
  }

  addError(error: NotificationErrorProps): void {
    this._errors.push(error)
  }

  messages(context?: string): string {
    return this._errors
      .filter((error) => !context || error.context === context)
      .map((error) => `${error.context}: ${error.message}`)
      .join(", ")
  }

  hasErrors(): boolean {
    return this._errors.length > 0
  }
}
