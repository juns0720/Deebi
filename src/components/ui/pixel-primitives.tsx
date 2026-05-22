import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

type PixelButtonVariant = "primary" | "secondary" | "quiet";
type PixelBadgeTone = "success" | "warning" | "danger" | "muted";
type PixelPanelTone = "raised" | "sunken";
type PixelSize = "small" | "medium";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export type PixelPanelProps = HTMLAttributes<HTMLDivElement> & {
  tone?: PixelPanelTone;
};

export function PixelPanel({ className, tone = "raised", ...props }: PixelPanelProps) {
  return <div className={cx("pixel-panel", `pixel-panel--${tone}`, className)} {...props} />;
}

export type PixelButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: PixelSize;
  variant?: PixelButtonVariant;
};

export function PixelButton({
  className,
  size = "medium",
  variant = "quiet",
  ...props
}: PixelButtonProps) {
  return (
    <button
      className={cx(
        "pixel-button",
        `pixel-button--${variant}`,
        size === "small" && "pixel-button--small",
        className,
      )}
      {...props}
    />
  );
}

export type PixelLinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  size?: PixelSize;
  variant?: PixelButtonVariant;
};

export function PixelLinkButton({
  className,
  size = "medium",
  variant = "quiet",
  ...props
}: PixelLinkButtonProps) {
  return (
    <a
      className={cx(
        "pixel-button",
        `pixel-button--${variant}`,
        size === "small" && "pixel-button--small",
        className,
      )}
      {...props}
    />
  );
}

export type PixelBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: PixelBadgeTone;
};

export function PixelBadge({ className, tone = "muted", ...props }: PixelBadgeProps) {
  return <span className={cx("pixel-badge", `pixel-badge--${tone}`, className)} {...props} />;
}

export type PixelTabProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  children: ReactNode;
};

export function PixelTab({ active = false, className, children, ...props }: PixelTabProps) {
  return (
    <button className={cx("pixel-tab", className)} data-active={active} type="button" {...props}>
      {children}
    </button>
  );
}
