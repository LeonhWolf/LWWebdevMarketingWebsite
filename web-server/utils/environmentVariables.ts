import * as dotenv from "dotenv";
dotenv.config();
interface IMailConfig {
  MAILCONFIG_HOST: string;
  MAILCONFIG_PORT: string;
  MAILCONFIG_USER: string;
  MAILCONFIG_PASSWORD: string;
  MAILCONFIG_MAILADDRESS: string;
  MAILCONFIG_RECIPIENTADDRESS: string;
}
interface EnvironmentVariables extends IMailConfig {
  WEB_CLIENT_ORIGIN: string;
}
const environmentVariables: EnvironmentVariables = {
  MAILCONFIG_HOST: "",
  MAILCONFIG_PORT: "",
  MAILCONFIG_USER: "",
  MAILCONFIG_PASSWORD: "",
  MAILCONFIG_MAILADDRESS: "",
  MAILCONFIG_RECIPIENTADDRESS: "",
  WEB_CLIENT_ORIGIN: "",
};

const checkEnvironmentVariables = (): void => {
  (Object.keys(environmentVariables) as Array<keyof EnvironmentVariables>).map(
    (environmentVariable) => {
      const processValue = process.env[environmentVariable];
      if (processValue === undefined)
        throw new Error(
          `The environment variable "${environmentVariable}" is needed but not set.`
        );

      environmentVariables[environmentVariable] = processValue;
    }
  );
};

checkEnvironmentVariables();

export const getEnvironmentVariable = (
  key: keyof EnvironmentVariables
): string => {
  return environmentVariables[key];
};
