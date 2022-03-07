import * as envalid from 'envalid';

type EnvSpecs<T> = {
  [K in keyof T]: envalid.ValidatorSpec<T[K]>;
};

const requireEnv = <T>(specs: EnvSpecs<T>) =>
  envalid.cleanEnv(process.env, specs, {
    reporter: ({ errors }) => {
      const missingEnvs = Object.keys(errors);
      if (missingEnvs.length > 0) {
        throw new Error(`Missing env(s): ${missingEnvs.join(', ')}`);
      }
    }
  });

export const EnvUtils = {
  requireEnv
};
