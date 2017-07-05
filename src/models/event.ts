export class Event {
  eventName: string;
  eventId: string;
  eventDate: Date;
  eventLocation: string;
  eventRegisterationStatus: string // 1 - OPEN/ 0 - CLOSED
  eventMapData: string;
  eventDescription: string;
  eventBanner: string;
  eventImg: string;
  publishStatus: number; // 0 - UNPUBLISHED | 1 - PUBLISHED
  participantCount: number;
  registerationClosingDate: Date;
  registerationOpeningDate: Date;
  eventSponsers: [
    {
      sponserName: string,
      sponserImg: string
    }
  ];
  eventDistance: string;
  eventPhotos: [string];
  eventType: string; // PAID 1: OPEN 0
}