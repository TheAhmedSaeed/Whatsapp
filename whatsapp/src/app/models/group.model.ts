export class Group {
  id: string;
  name: string;
  description: string;
  type: Type;
  url: string;
}

enum Type {
  Whatsapp = 'whatsapp',
  Discord = 'discord',
  Telegram = 'telegram',
}
