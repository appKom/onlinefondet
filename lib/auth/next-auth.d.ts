import 'next-auth';

declare module 'next-auth' {
  interface Session {
    accessToken?: string;
    user?: User;
  }

  interface User {
    owId?: string;
    subId: string;
    name: string;
    role?: 'admin' | 'user';
    email: string;
    phone?: string;
    grade?: number;
    committees?: string[];
    isCommittee: boolean;
  }
}
