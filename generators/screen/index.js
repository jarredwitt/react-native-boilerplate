module.exports = {
  description: 'Add a new screen',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What is the screen called?',
    validate: value => {
      if ((/.+/).test(value)) {
        return true;
      }

      return 'The name is required';
    },
  }, {
    type: 'confirm',
    name: 'wantStyle',
    default: true,
    message: 'Do you want styles?',
  }, {
    type: 'confirm',
    name: 'wantActionsAndReducer',
    default: true,
    message: 'Do you want an actions/constants/selectors/reducer for this container?',
  }],
  actions: data => {
    // Add the screen to the screens folder
    const actions = [{
      type: 'add',
      path: '../app/screens/{{properCase name}}/index.js',
      templateFile: './screen/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../app/screens/{{properCase name}}/tests/index.test.js',
      templateFile: './screen/index.js.hbs',
      abortOnFail: true,
    }];

    // Add styles folder and import
    if (data.wantStyle) {
      actions.push({
        type: 'add',
        path: '../app/screens/{{properCase name}}/styles/index.style.js',
        templateFile: './screen/style.js.hbs',
        abortOnFail: true,
      });
    }

    // Create actions, constants, reducer, and selector
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../app/actions/{{camelCase name}}.js',
        templateFile: './screen/actions.js.hbs',
        abortOnFail: true,
      }, {
        type: 'add',
        path: '../app/actions/tests/{{camelCase name}}.test.js',
        templateFile: './screen/actions.test.js.hbs',
        abortOnFail: true,
      });

      /* // Constants
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/constants.js',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true,
      });

      // Selectors
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/selectors.js',
        templateFile: './container/selectors.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/tests/selectors.test.js',
        templateFile: './container/selectors.test.js.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/reducer.js',
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/tests/reducer.test.js',
        templateFile: './container/reducer.test.js.hbs',
        abortOnFail: true,
      });
      actions.push({ // Add the reducer to the reducer.js file
        type: 'modify',
        path: '../../app/reducers.js',
        pattern: /(\.\.\.asyncReducers,\n {2}}\);)/gi,
        template: '{{camelCase name}}: {{camelCase name}}Reducer,\n    $1',
      });
      actions.push({
        type: 'modify',
        path: '../../app/reducers.js',
        pattern: /(export default function createReducer)/gi,
        template: 'import {{camelCase name}}Reducer from \'containers/{{properCase name}}/reducer\';\n$1',
      });*/
    }

    actions.push({
      type: 'modify',
      path: '../app/screens/index.js',
      pattern: /(\/\/ -- APPEND ITEMS HERE)/gi,
      template: '$1\nimport {{properCase name}} from \'./{{properCase name}}\';',
    }, {
      type: 'modify',
      path: '../app/screens/index.js',
      pattern: /(module.exports = {)/gi,
      template: '$1\n  {{properCase name}},',
    });

    return actions;
  },
};
