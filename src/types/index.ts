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
