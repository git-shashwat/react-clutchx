export type Book = {
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
      isAvailable: boolean;
      acsTokenLink: string;
    };
    pdf: {
      isAvailable: boolean;
      acsTokenLink: string;
    };
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
    webReaderLink: string;
  };
  etag: string;
  kind: string;
  id: string;
  selfLink: string;
  volumeInfo: {
    publishedDate: string;
    industryIdentifiers: [
      {
        type: string;
        identifier: string;
      }
    ];
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount: number;
    printType: string;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
    subtitle: string;
    title: string;
    authors: [string];
    publisher: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
  };
  searchInfo: {
    textSnippet: string;
  };
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: {
      amount: number;
      currencyCode: string;
    };
    retailPrice: {
      amount: number;
      currencyCode: string;
    };
    buyLink: string;
    offers: [
      {
        finskyOfferType: number;
        listPrice: {
          amountInMicros: number;
          currencyCode: string;
        };
        retailPrice: {
          amountInMicros: number;
          currencyCode: string;
        };
      }
    ];
  };
};
