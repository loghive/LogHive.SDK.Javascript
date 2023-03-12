import { HTTPResponseErrorObject } from './responseerror';
import { EventOptions } from '../types/index';

/**
 * LogHive SDK
 */
export default class LogHive {
  private readonly key: string;
  private readonly projectName: string;
  private readonly logHiveEventUrl = 'https://api.loghive.app/v1/event/add';

  /**
   * construct a new LogHive client
   * @param key LogHive api token
   * @param project LogHive project name
   */
  constructor({ key, projectName }: { key: string; projectName: string }) {
    this.key = key;
    this.projectName = projectName;
  }

  /**
   * add a event new event to LogHive
   * @param options
   * @returns true when successfully or exeception on failure
   */
  public async addEvent(options: EventOptions): Promise<boolean> {
    const headers = {
      'Content-Type': 'application/json',
      'ApiKey': this.key
    };

    const method = 'POST';
    const body = JSON.stringify({
      ...options,
      projectName: this.projectName
    });

    const response = await fetch(this.logHiveEventUrl, { method, body, headers });
    if (!response.ok) {
      var errorObject = await response.json();
      throw new HTTPResponseErrorObject(
        response.status,
        response.statusText,
        errorObject
      );
    }
    return true;
  }
}
