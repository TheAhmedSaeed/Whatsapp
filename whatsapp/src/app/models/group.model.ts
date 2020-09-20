export class Group {
  id: string;
  name: string;
  description: string;
  type: Type;
  url: string;

  constructor(group: any) {
    this.id = group.id;
    this.name = group.name;
    this.description = group.description || null;
    this.type = group.type || null;
    this.url = group.url || null;
  }
}

export enum Type {
  Whatsapp = 'whatsapp',
  Discord = 'discord',
  Telegram = 'telegram',
}
