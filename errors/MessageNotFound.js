export class MessageNotFound extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.name = "MessageNotFound";
  }
}
