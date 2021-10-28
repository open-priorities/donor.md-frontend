export interface IRating {
  _id: string;
  fullname: string;
  city: string;
  numberOfDonations: number;
  registrationDate: Date;
  status: string;
}

export interface IStory {
  userId: string;
  story: string;
}

export interface IDonorStory {
  src: string;
  fullname: string;
  count: number;
  story: string;
}
