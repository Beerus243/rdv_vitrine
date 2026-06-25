import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/icon/icon.png";
import { siteConfig } from "@/lib/site";

const sizeMap = {
  sm: { box: 32, image: 28, text: "text-base" },
  md: { box: 36, image: 32, text: "text-lg" },
  lg: { box: 44, image: 38, text: "text-xl" },
} as const;

type LogoProps = {
  size?: keyof typeof sizeMap;
  showName?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export default function Logo({
  size = "md",
  showName = true,
  className = "",
  href = "/",
  onClick,
}: LogoProps) {
  const { box, image, text } = sizeMap[size];

  const content = (
    <>
      <span
        className="logo-mark flex shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-[var(--border)]"
        style={{ width: box, height: box }}
      >
        <Image
          src={logo}
          alt={`Logo ${siteConfig.name}`}
          width={image}
          height={image}
          className="object-contain"
          priority={size === "md"}
        />
      </span>
      {showName && (
        <span className={`font-bold tracking-tight text-default ${text}`}>
          {siteConfig.name}
        </span>
      )}
    </>
  );

  const wrapperClass = `inline-flex items-center gap-2.5 ${className}`;

  if (href) {
    return (
      <Link href={href} className={wrapperClass} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return <div className={wrapperClass}>{content}</div>;
}

export { logo };
