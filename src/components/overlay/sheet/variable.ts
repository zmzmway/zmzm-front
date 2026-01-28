export const SHEET_STYLES = {
  overlay: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
  content: "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  close: "ring-offset-background focus:ring-blue-500 data-[state=open]:bg-gray-100 absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
  header: "flex flex-col gap-1.5 p-4",
  footer: "mt-auto flex flex-col gap-2 p-4",
  title: "text-foreground font-semibold",
  description: "text-gray-500 text-sm",
}
