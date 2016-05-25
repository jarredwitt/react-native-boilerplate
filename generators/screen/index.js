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
    name: 'style',
    default: true,
    message: 'Do you want styles?',
  }],
  actions: data => {
    const actions = [{
      type: 'add',
      path: '../app/screens/{{properCase name}}/index.js',
      templateFile: './screen/index.js.hbs',
      abortOnFail: true,
    }];

    if (data.style) {
      actions.push({
        type: 'add',
        path: '../app/screens/{{properCase name}}/styles/index.style.js',
        templateFile: './screen/style.js.hbs',
        abortOnFail: true,
      });
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
