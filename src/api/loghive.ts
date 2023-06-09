import { HTTPResponseErrorObject } from './responseerror';
import { EventOptions, InsightOptions, OnlineOfflineOptions } from '../types/index';

/**
 * LogHive SDK
 */
export default class LogHive {
  private readonly key: string;
  private readonly project: string;
  private readonly logHiveEventUrl = 'https://api.loghive.app/v1/event/add';
  private readonly logHiveInsightUrl = 'https://api.loghive.app/v1/insight/add';

  /**
   * construct a new LogHive client
   * @param key LogHive api token
   * @param project LogHive project name
   */
  constructor({ key, project }: { key: string; project: string }) {
    this.key = key;
    this.project = project;
  }

  /**
   * add a event to LogHive
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
      project: this.project
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

  /**
   * add a insight to LogHive
   * @param options
   * @returns true when successfully or exeception on failure
   */
  public async addInsight(options: InsightOptions): Promise<boolean> {
    const headers = {
      'Content-Type': 'application/json',
      'ApiKey': this.key
    };

    const method = 'POST';
    const body = JSON.stringify({
      ...options,
      project: this.project
    });

    const response = await fetch(this.logHiveInsightUrl, { method, body, headers });
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

  /**
   * set system online
   * @param options
   * @returns true when successfully or exeception on failure
   */
  public async setSystemOnline(options: OnlineOfflineOptions): Promise<boolean> {
    const headers = {
      'Content-Type': 'application/json',
      'ApiKey': this.key
    };

    const method = 'POST';
    const body = JSON.stringify({
      insight: options.system,
      project: this.project,
      value: 1
    });

    const response = await fetch(this.logHiveInsightUrl, { method, body, headers });
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

  /**
   * set system offline
   * @param options
   * @returns true when successfully or exeception on failure
   */
  public async setSystemOffline(options: OnlineOfflineOptions): Promise<boolean> {
    const headers = {
      'Content-Type': 'application/json',
      'ApiKey': this.key
    };

    const method = 'POST';
    const body = JSON.stringify({
      insight: options.system,
      project: this.project,
      value: 0
    });

    const response = await fetch(this.logHiveInsightUrl, { method, body, headers });
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
