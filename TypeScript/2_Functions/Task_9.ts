function last(value: string): string;
function last(value: number): number;
function last(value: string | number): string | number {
  if (typeof value === 'string') {
    return value.slice(-1);
  }

  return value % 10;
}
