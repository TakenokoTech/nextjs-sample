import LoggingRepository from '../../infrastructure/repository/LoggingRepository';
import SettingsRepository from '../../infrastructure/repository/SettingsRepository';

export default class GetSettingUsecase {
  private settingsRepository: SettingsRepository;
  private loggingRepository: LoggingRepository;

  constructor(settingsRepository: SettingsRepository, loggingRepository: LoggingRepository) {
    this.execute = this.execute.bind(this);
    this.settingsRepository = settingsRepository;
    this.loggingRepository = loggingRepository;
  }

  async execute(request: GetSettingUsecaseReq): Promise<GetSettingUsecaseRes> {
    console.log('execute', request);
    const [settings, logging] = await Promise.all([
      this.settingsRepository.getSettings(request.username), // new line
      this.loggingRepository.postLogging(),
    ]);
    return {
      settings,
      logging,
    };
  }
}

export interface GetSettingUsecaseReq {
  username: string;
}

export interface GetSettingUsecaseRes {
  settings: { username: string };
  logging: { text: string };
}
