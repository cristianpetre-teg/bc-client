export function Measure<T extends { new (...args: any[]): {} }>(
  methods: (keyof T)[]
) {
  return function (ctor: T) {
    for (const method of methods) {
      const originalMethod = ctor.prototype[method];

      if (typeof originalMethod === "function") {
        ctor.prototype[method] = performance.timerify(originalMethod);
      }
    }
  };
}
