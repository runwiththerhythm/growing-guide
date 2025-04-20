
// In some environments `global` isn't defined,
// but many modules (graceful‑fs, expect, etc.) still look for it.
// polyfill `global` for modules that expect it
if (typeof global === 'undefined') {
    // alias global to globalThis
    Object.defineProperty(globalThis, 'global', {
      value: globalThis,
      writable: true,
      configurable: true,
    });
  }