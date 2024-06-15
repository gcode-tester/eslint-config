module.exports = {
  root: true,

  env: {
    es2021: true,
    es6: true,
    node: true,
    jest: true,
  },

  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
    NodeJS: true,
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },

  plugins: [
    'import',
    'n',
    'promise',
    '@typescript-eslint/eslint-plugin',
    'import-newlines',
  ],

  ignorePatterns: ['build/**', '.eslintrc.js'],

  rules: {
    'object-shorthand': ['warn', 'properties'],
    'accessor-pairs': ['error', {
      setWithoutGet: true,
      enforceForClassMembers: true,
    }],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': ['error', {
      allowImplicit: false,
      checkForEach: false
    }],
    'arrow-spacing': ['error', {
      before: true,
      after: true,
    }],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
    'constructor-super': 'error',
    'default-case-last': 'error',
    'dot-location': ['error', 'property'],
    'eol-last': 'error',
    'func-call-spacing': ['error', 'never'],
    'generator-star-spacing': ['error', {
      before: true,
      after: true,
    }],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
    }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: false,
      properties: true,
    }],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-useless-backreference': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-labels': ['error', {
      allowLoop: false,
      allowSwitch: false,
    }],
    'no-lone-blocks': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-prototype-builtins': 'error',
    'no-useless-catch': 'error',
    'no-mixed-operators': ['error', {
      groups: [
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: true
    }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 0,
    }],
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-redeclare': ['error', { builtinGlobals: false }],
    'no-regex-spaces': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-use-before-define': ['error', {
      functions: false,
      classes: false,
      variables: false,
    }],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-newline': ['error', {
      multiline: true,
      consistent: true,
    }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'one-var': ['error', { 'initialized': 'never' }],
    'operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
        '|>': 'before',
      },
    }],
    'padded-blocks': ['error', {
      blocks: 'never',
      switches: 'never',
      classes: 'never',
    }],
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'quote-props': ['error', 'as-needed'],
    'rest-spread-spacing': ['error', 'never'],
    'semi-spacing': ['error', {
      before: false,
      after: true,
    }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': ['error', {
      enforceForSwitchCase: true,
      enforceForIndexOf: true,
    }],
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    'yield-star-spacing': ['error', 'both'],
    'yoda': ['error', 'never'],

    'import/export': 'error',
    'import/first': 'error',
    'import/no-absolute-path': ['error', {
      esmodule: true,
      commonjs: true,
      amd: false,
    }],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import-newlines/enforce': ['error', {
      items: 3,
      'max-len': 100,
    }],
    'n/handle-callback-err': ['error', '^(err|error)$' ],
    'n/no-callback-literal': 'error',
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/process-exit-as-throw': 'error',
    semi: 'off',
    'arrow-body-style': 'error',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    camelcase: 'off',
    curly: 'error',
    'dot-notation': 'off',
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'id-blacklist': 'off',
    'id-match': 'off',
    'max-len': ['error', { code: 100 },
    ],
    'no-bitwise': 'error',
    'no-console': ['error', {
      allow: ['warn'],
    }],
    'no-empty': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    quotes: ['error', 'single'],
    radix: 'error',
    'spaced-comment': 'error',
    'promise/param-names': 'off',
    'newline-before-return': 'error',
    indent: 'off',
    'padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: '*',
      next: 'if',
    }, {
      blankLine: 'always',
      prev: 'if',
      next: '*',
    }],

    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/explicit-member-accessibility': ['off', { accessibility: 'explicit' } ],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: { delimiter: 'semi', requireLast: true },
      singleline: { delimiter: 'semi', requireLast: false },
    }],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      ignoredNodes: ['PropertyDefinition'],
    }],
  },
};
