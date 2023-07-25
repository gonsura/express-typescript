import HttpError from './httpError'

interface VParams {
  conditions: boolean
  errMessage: string
  statuscode: number
}

class ValidatError {
  item: unknown
  name: string
  constructor(item: unknown, name: string) {
    this.item = item
    this.name = name
  }
  undef() {
    const itemChecked = !this.item
    this.throwErrIfNotValid({
      conditions: itemChecked,
      errMessage: `${this.name} is required`,
      statuscode: 400,
    })
    return this
  }
  is(itemType: string) {
    const itemChecked = typeof this.item !== itemType
    this.throwErrIfNotValid({
      conditions: itemChecked,
      errMessage: `${this.name} must be ${itemType}`,
      statuscode: 400,
    })
    return this
  }
  private throwErrIfNotValid({ conditions, errMessage, statuscode }: VParams) {
    if (conditions) throw new HttpError(errMessage, statuscode)
  }
}

export default ValidatError
