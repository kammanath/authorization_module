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
  getUserAuthorizationStatus(key,callback) {

    this.cache.exists(key).subscribe(result => {
      if(result === -1){
        callback(true);   // User is authorized
      }
      else{
        callback(false);		// User is not authorized
      }
   });
 }
}
