/**
 * options for publishing LogHive events
 */
export interface EventOptions {
    /**
     * group name
     */
    group: string;

    /**
     * event name
     */
    event: string;

    /**
     * description
     */
    description?: string;

    /**
     * send push notification to mobile device
     */
    notify?: boolean;

}

/**
 * options for publishing LogHive insights
 */
export interface InsightOptions {
    /**
     * insight name
     */
    insight?: string;

    /**
     * insight value
     */
    value?: number;
}

/**
 * options for publishing LogHive insights
 */
export interface OnlineOfflineOptions {
    /**
     * insight name
     */
    system?: string;
}