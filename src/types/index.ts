/**
 * options for publishing LogHive events
 */
export interface EventOptions {
    /**
     * group name
     */
    groupName: string;

    /**
     * event name
     */
    eventName: string;

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
    insightName?: string;

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
    systemName?: string;
}