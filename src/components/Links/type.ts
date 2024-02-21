import { LinkProps } from "next/link";

export type LinkItemProps = Omit<LinkProps, "href"> & {
	newTab?: boolean;
	href?: string;
};
