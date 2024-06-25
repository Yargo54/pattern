export interface IReusedCardContainer {
  cardTitle?: {
    cardTitleText?: string;
    cardTitleElements?: React.ReactNode;
  };
  cardBody?: {
    additionalElements?: React.ReactNode;
    cardActiveButtons?: React.ReactNode;
    mainChildren?: React.ReactNode;
  };
}
