type IconProps = {
  className?: string;
};

export function IconHeart({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s-7.5-4.35-9.9-8.4C.3 9.15 2.1 5.25 6 5.25c2.1 0 3.45 1.2 4.05 2.1.6-.9 1.95-2.1 4.05-2.1 3.9 0 5.7 3.9 3.9 7.35C19.5 16.65 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCamera({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 8.25h2.2l1.2-1.8h9.2l1.2 1.8H20a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="3.25" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function IconLock({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="5"
        y="10"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M8 10V7.5a4 4 0 1 1 8 0V10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconSpark({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 14.5l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconInstagram({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Zm5.38-.94a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0Z" />
    </svg>
  );
}

export function IconFacebook({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 8.5V7.1c0-.72.08-1.18.3-1.47.28-.38.78-.58 1.5-.58h1.45V2h-2.35c-2.15 0-3.5 1.35-3.5 3.55V8.5H9v3.25h2.4V22h2.6v-10.25H17V8.5h-3Z" />
    </svg>
  );
}

export function IconWhatsApp({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.08.61 4.01 1.66 5.64L2 22l4.62-1.74a9.86 9.86 0 0 0 5.42 1.61h.01c5.46 0 9.91-4.45 9.91-9.91C22.95 6.45 18.5 2 12.04 2Zm0 17.82h-.01a8.1 8.1 0 0 1-4.12-1.13l-.3-.17-2.74 1.03 1-2.67-.19-.29a8.07 8.07 0 0 1-1.24-4.32c0-4.47 3.64-8.1 8.12-8.1 4.47 0 8.11 3.63 8.11 8.1 0 4.47-3.64 8.11-8.11 8.11Zm4.52-6.06c-.25-.12-1.47-.73-1.7-.81-.23-.09-.4-.12-.57.12-.17.25-.66.81-.81.98-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.91 2.44 1.04 2.61.12.17 1.79 2.73 4.33 3.83.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

export function IconX({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.3 3H20l-6.4 7.32L21 21h-5.5l-4.3-5.6L6.2 21H3.5l6.85-7.84L3 3h5.65l3.9 5.15L17.3 3Zm-1.93 16.2h1.55L7.82 4.72H6.14l9.23 14.48Z" />
    </svg>
  );
}

export function IconTikTok({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.6 5.82A4.62 4.62 0 0 1 19 4.5V8a6.9 6.9 0 0 1-2.4-.42v5.83a5.58 5.58 0 1 1-5.58-5.58c.23 0 .46.02.68.05v2.57a2.98 2.98 0 1 0 2.12 2.86V2h2.4a4.6 4.6 0 0 0 4.18 3.82v2.2a6.75 6.75 0 0 1-2.4-.2Z" />
    </svg>
  );
}

export function IconMenu({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const socialIconMap = {
  instagram: IconInstagram,
  facebook: IconFacebook,
  whatsapp: IconWhatsApp,
  x: IconX,
  tiktok: IconTikTok,
} as const;

export function SocialIcon({
  name,
  className,
}: {
  name: keyof typeof socialIconMap;
  className?: string;
}) {
  const Icon = socialIconMap[name];
  return <Icon className={className} />;
}
