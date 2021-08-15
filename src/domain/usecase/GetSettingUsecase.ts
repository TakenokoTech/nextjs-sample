import LoggingRepository from '../../infrastructure/repository/LoggingRepository';
import SettingsRepository from '../../infrastructure/repository/SettingsRepository';

export default class getSettingUsecase {
  private settingsRepository: SettingsRepository;
  private loggingRepository: LoggingRepository;

  constructor(settingsRepository: SettingsRepository, loggingRepository: LoggingRepository) {
    this.execute = this.execute.bind(this);
    this.settingsRepository = settingsRepository;
    this.loggingRepository = loggingRepository;
  }

  async execute(username: string) {
    return Promise.all([
      this.settingsRepository.getSettings(username), // new line
      this.loggingRepository.postLogging(),
    ]).then((res) => {
      console.log(res);
      const [settings, logging] = res;
      return {
        settings,
        logging,
      };
    });
  }
}
