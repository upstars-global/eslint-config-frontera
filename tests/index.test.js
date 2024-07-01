const { describe, test, expect } = require('@jest/globals');
const { ESLint } = require('eslint');
const isPlainObj = require('is-plain-obj');
const eslintConfig = require('../src/eslint');

const getLintMessage = async (code, linter) => {
  const results = await linter.lintText(code);
  const errorMessages = results[0].messages;

  return errorMessages[0];
}

describe('eslint config tests', () => {
  test('eslint config should be an object', () => {
    expect(isPlainObj(eslintConfig)).toBe(true);
  });

  test('env property should be an object', () => {
    expect(isPlainObj(eslintConfig.env)).toBe(true);
  });

  test('extends property should be an array', () => {
    expect(isPlainObj(eslintConfig.extends)).toBe(false);
  });

  test('parserOptions property should be an object', () => {
    expect(isPlainObj(eslintConfig.parserOptions)).toBe(true);
  });

  test('plugins property should be an array', () => {
    expect(isPlainObj(eslintConfig.plugins)).toBe(false);
  });

  test('rules property should be an object', () => {
    expect(isPlainObj(eslintConfig.rules)).toBe(true);
  });
});

describe('run eslint and make sure it works', () => {
  const linter = new ESLint({ overrideConfig: eslintConfig });
  const errorSeverity = 2;
  const warnSeverity = 1;

  test('no errors', async () => {
    const code = 'const str = "test quotes rule";\n';
    const results = await linter.lintText(code);
    const errorMessages = results[0].messages;

    expect(errorMessages.length).toBe(0);
  });

  describe('warning rules', () => {
    test('no-alert', async () => {
      const code = 'alert("test no-alert rule");\n';
      const error = await getLintMessage(code, linter);

      expect(error.ruleId).toStrictEqual('no-alert');
      expect(error.severity).toStrictEqual(warnSeverity);
      expect(error.message).toStrictEqual('Unexpected alert.');
    });

    test('no-console', async () => {
      const code = 'console.log("test no-console rule");\n';
      const error = await getLintMessage(code, linter);

      expect(error.ruleId).toStrictEqual('no-console');
      expect(error.severity).toStrictEqual(warnSeverity);
      expect(error.message).toStrictEqual('Unexpected console statement.');
    });

    test('no-warning-comments', async () => {
      const code = '// TODO: test no-warning-comments\n';
      const error = await getLintMessage(code, linter);

      expect(error.ruleId).toStrictEqual('no-warning-comments');
      expect(error.severity).toStrictEqual(warnSeverity);
      expect(error.message).toContain('Unexpected \'TODO\' comment');
    });

    test('quotes', async () => {
      const code = 'const str = \'test quotes rule\';\n';
      const error = await getLintMessage(code, linter);

      expect(error.ruleId).toStrictEqual('quotes');
      expect(error.severity).toStrictEqual(warnSeverity);
      expect(error.message).toContain('Strings must use doublequote.');
    });
  })

  describe('error rules', () => {
    test('id-length', async () => {
      const code = 'const a = 0;\n';
      const error = await getLintMessage(code, linter);

      expect(error.ruleId).toStrictEqual('id-length');
      expect(error.severity).toStrictEqual(errorSeverity);
      expect(error.message).toStrictEqual('Identifier name \'a\' is too short (< 2).');
    });

    test('no-debugger', async () => {
      const code = 'debugger\n';
      const error = await getLintMessage(code, linter);

      expect(error.ruleId).toStrictEqual('no-debugger');
      expect(error.severity).toStrictEqual(errorSeverity);
      expect(error.message).toStrictEqual('Unexpected \'debugger\' statement.');
    });

    test('semi', async () => {
      const code = 'const foo = 0\n';
      const error = await getLintMessage(code, linter);

      expect(error.ruleId).toStrictEqual('semi');
      expect(error.severity).toStrictEqual(errorSeverity);
      expect(error.message).toStrictEqual('Missing semicolon.');
    });
  })
});
