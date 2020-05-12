import { User } from './../users/users.type';
import { Client } from '../clients/clients.type';
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
  client: Client;

}
export interface TicketComment {
  date: string;
  user: User;
  description: string;
}
