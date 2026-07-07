export type TokenEntry = {
  id: string;
  token: string;
  email: string;
  name: string;
  createdAt: string;
  active: boolean;
};

export type OtpEntry = {
  tokenId: string;
  code: string;
  createdAt: string;
  expiresAt: string;
  attempts: number;
  verified: boolean;
};

export type SessionEntry = {
  tokenId: string;
  sessionId: string;
  createdAt: string;
  expiresAt: string;
};

export type PortafolioStore = {
  tokens: TokenEntry[];
  otps: OtpEntry[];
  sessions: SessionEntry[];
};
