export default class LoggingRepository {
  async postLogging(): Promise<LoggingEntity> {
    const res = await fetch('/api/logging');
    const json = await res.json();

    console.log(json);
    return json;
  }
}

interface LoggingEntity {
  text: string;
}
