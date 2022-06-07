import { readFileSync } from "fs";
import * as yaml from "js-yaml";
import { join } from "path";

const YAML_CONFIG_FILENAME =
  process.env.NODE_ENV === "production"
    ? "config.production.yaml"
    : "config.local.yaml";

export interface IConfigApp {
  isProduction: boolean;
  prefix: string;
  port: number;
}

export interface IConfig {
  app: IConfigApp;
}

export const config = () => {
  return yaml.load(
    readFileSync(join(__dirname, "../../../", YAML_CONFIG_FILENAME), "utf8"),
  ) as IConfig;
};
