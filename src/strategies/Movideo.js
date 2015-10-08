import AuthorizationStrategy, {
  AuthorizationStrategyError
}
from '../strategy-types/AuthorizationStrategy';

export default class Movideo extends AuthorizationStrategy {
  constructor(cache) {
    if (!cache) throw AuthorizationStrategyError.cacheNotProvided();
    super();
    this.cache = cache;
  }
  getUserAuthorizationStatus(key) {

    this.cache.exists(key).subscribe(result => {
      if(result === -1){
        return false;   // User is authorized
      }
      else{
        return true;		// User is not authorized
      }
   });
 }
}
