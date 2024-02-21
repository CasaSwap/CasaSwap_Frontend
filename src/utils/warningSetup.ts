const GoConsole = console.warn;
console.warn = function filterWarnings(msg, ...args) {
  if (
    !msg.includes(
      "If you intentionally want it to appear in the DOM as a custom attribute"
    )
  )
    GoConsole(msg, ...args);
};
