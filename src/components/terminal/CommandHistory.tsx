export class CommandHistory {
  private history: string[] = [];
  private historyIndex: number = 0;
  private MAX_HISTORY_LENGTH = 50;

  addCommand(command: string): void {
    if (this.history.length >= this.MAX_HISTORY_LENGTH){
      this.history.shift();
    }
    this.historyIndex = this.history.length + 1;
    this.history.push(command);
  }

  previous(): string | undefined {
    if (history.length > 0 && this.historyIndex > 0) {
      this.historyIndex = this.historyIndex - 1;
      return this.history[this.historyIndex];
    }
    return;
  }

  next(): string | undefined {
    if (this.historyIndex < this.history.length) {
      this.historyIndex = this.historyIndex + 1;
      return this.history[this.historyIndex];
    }
    return;
  }
}