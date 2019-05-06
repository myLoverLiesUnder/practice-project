/* eslint-disable */
export const trackClick = (eventName, customParams) => {
    trackEvents('click', eventName, customParams)
};

const trackEvents = (eventType, eventName, customParams) => {
    let event = {
        eventType: eventType,
        pData: { compid: [eventName] }
    };
    if (typeof customParams === 'object') {
        event.cpData = JSON.parse(JSON.stringify(customParams))
    }
};
/* eslint-enable */
