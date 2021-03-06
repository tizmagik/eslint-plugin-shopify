// Make sure that any rules here that override default ESLint rules are
// also turned off in configs that include these rules.

module.exports = {
  // Ignores capitalized decorators (@Decorator)
  'babel/new-cap': ['error', {newIsCap: true, capIsNew: false}],
  // guard against awaiting async functions inside of a loop
  'babel/no-await-in-loop': 'off',
  // doesn't complain about export x from "mod"; or export * as x from "mod";
  'babel/object-curly-spacing': ['warn', 'never'],
  // doesn't fail when inside class properties
  'babel/no-invalid-this': 'error',
};
