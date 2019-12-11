/* eslint-disable @typescript-eslint/explicit-function-return-type */
global.expect = function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected)
        throw new Error(`expected ${expected} but got ${actual}`);
    },
  };
};

global.test = async function test(title, callback) {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✗ ${title}`);
    console.error(error);
  }
};
