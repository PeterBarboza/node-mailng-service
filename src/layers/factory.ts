import { Controller } from "./controller"
import { Service } from "./service"

export class Factory {
  handle(): Controller {
    const service = new Service()
    return new Controller(service)
  }
}
