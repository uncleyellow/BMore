export class Configs {
    private static _config: any = {};
    public static setAllConfigs(json) {
        Configs._config = json;
    }

    public static setConfig(key: string, value: any) {
        if (!Configs._config)
            Configs._config = {};

        Configs._config[key] = value;
    }

    public static getConfig(key) {
      return Configs._config[key];
    }
}
