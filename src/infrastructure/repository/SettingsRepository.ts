export default class SettingsRepository {
  async getSettings(username: string): Promise<SettingEntity> {
    const query = new URLSearchParams({ username });
    const res = await fetch(`/api/settings?${query}`);
    const json = await res.json();

    // console.log(json);
    return json;
  }
}

interface SettingEntity {
  username: string;
}
