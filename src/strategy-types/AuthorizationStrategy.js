import Strategy from './Strategy';
export { default as AuthorizationStrategyError } from './errors/AuthorizationStrategyError';


export default class AuthorizationStrategyy extends Strategy {
  /**
   * Set required methods that subclasses must override.
   *
   * @return {array} Array of method names.
   */
  static get requiredMethods() {
    return [
      'getUserAuthorizationStatus',
    ];
  }

  static get abstractClass() {
    return AuthorizationStrategy;
  }

  /**
  Fetch user authorization status
  @param userid
  @param sessionid
  @returns authorization status
  **/
   getUserAuthorizationStatus(key) {}

}
