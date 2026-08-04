export function parseCommand(input: string): {
  command: string,
  args?: string[]
} {
  const arr = input.trim().split(/\s+/);
  return {
    command: arr.shift() ?? "",
    args: arr.length > 0 ? arr : undefined
  }
} 