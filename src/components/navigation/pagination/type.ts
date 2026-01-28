import { type Button } from "@/components";

export type PaginationProps = React.ComponentProps<"nav">;
export type PaginationContentProps = React.ComponentProps<"ul">;
export type PaginationItemProps = React.ComponentProps<"li">;
export type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;
export type PaginationEllipsisProps = React.ComponentProps<"span">;
