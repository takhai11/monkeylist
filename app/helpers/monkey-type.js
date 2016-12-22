import Ember from 'ember';

export function monkeyType([title, about]/*, hash*/) {
  let returnStr = title;
  if (about != null) {
    returnStr += '-'+ about;
  }
  return returnStr;
}

export default Ember.Helper.helper(monkeyType);
