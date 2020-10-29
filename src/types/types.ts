export type User = {
  token: string;
  user: fetchedUser;
};

export type fetchedUser = {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  Interviews: Interview[];
};

export type Interview = {
  UserId: string;
  bodylanguageScore: string;
  createdAt: string;
  deletedAt: null;
  id: string;
  name: string;
  nervousScore: string;
  preparationScore: string;
  questions: Questions[];
  rapportScore: string;
  technicalScore: string;
  updatedAt: string;
};

export type Questions = {
  question: string;
  answer: string;
};
