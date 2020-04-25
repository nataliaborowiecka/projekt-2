import { User } from './../users/user.type';
export enum TicketStatus {
  NEW = 'Nowe',
  IN_PROGRESS = 'W trakcie',
  CLOSED = 'Zamknięte'
}

export interface Ticket {
  id: number;
  description: string;
  status: TicketStatus;
  title: string;
  user: User; 
  comments: TicketComment[];
}

export interface TicketComment {
  date: string;
  user: User;
  description: string;
}

