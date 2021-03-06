export interface BuildExecutorSchema {
  outputPath: string;
  baseHref?: string;
  configFile?: string;
  frameworkConfigFile?: string;
  fileReplacements?: { file: string; with: string }[];
}
