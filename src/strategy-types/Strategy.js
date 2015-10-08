
export default class Strategy {
  /**
   * Set required methods that subclasses must override.
   * @return {array} Array of method names.
   */
  static get requiredMethods() {
    return [];
  }

  /**
   * The abstract class, which is used to detect whether methods have been overridden or not.
   * @return {Class} Your Strategy subclass
   */
  static get abstractClass() {
    return null;
  }

  constructor(config = {}) {
    this.config = config;

    const abstractClass = this.constructor.abstractClass;

    this.constructor.requiredMethods.forEach((methodName) => {
      if (this[methodName] == undefined || this[methodName] == abstractClass.prototype[methodName]) {
        throw new Error(`Required method ${methodName} must be implemented`);
      }
    });
  }
}
