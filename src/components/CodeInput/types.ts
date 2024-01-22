export interface ICodeOptions {
  item: { id: number; focused: boolean; error: boolean; value: string };
  onChange: (value: string, id: number) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, id: number) => void;
}
