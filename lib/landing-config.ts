/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  CONFIGURATION LANDING PAGE RDV
 *  Modifiez ce fichier pour personnaliser accueil, téléchargement et formulaire.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export type DownloadMode = "internal-api" | "static" | "external";

export type LandingButton = {
  label: string;
  href: string;
  /** true = ouvre dans un nouvel onglet (liens externes) */
  external?: boolean;
};

export const landingConfig = {
  /* ─── 1. ACCUEIL (Hero + bannière) ─── */
  hero: {
    banner: {
      src: "/images/banner.jpg",
      alt: "Groupe de personnes souriantes en plein air — communauté RDV",
    },
    badge: "Bêta Android — République Démocratique du Congo",
    title: "Rencontrez des personnes qui vous ressemblent",
    subtitle:
      "RDV est une plateforme congolaise moderne qui vous aide à découvrir de nouvelles personnes partageant vos centres d'intérêt.",
    buttons: {
      /** Bouton principal — par défaut scroll vers la section téléchargement */
      primary: {
        label: "Télécharger la bêta Android",
        href: "#download",
      } satisfies LandingButton,
      /** Bouton secondaire — par défaut scroll vers le formulaire */
      secondary: {
        label: "Rejoindre la liste d'attente",
        href: "#waitlist",
      } satisfies LandingButton,
    },
  },

  /* ─── 2. TÉLÉCHARGEMENT DE L'APPLICATION ─── */
  download: {
    sectionId: "download",
    badge: "Disponible maintenant",
    title: "Téléchargez RDV",
    description:
      "Installez la version bêta Android et soyez parmi les premiers à tester la plateforme.",
    /**
     * Mode de téléchargement :
     * - "internal-api" → /api/download (recommandé, headers APK corrects)
     * - "static"       → fichier direct dans public/ (ex. /rdv.apk)
     * - "external"     → lien externe (Play Store, CDN, GitHub Releases…)
     *
     * Priorité : variable d'env NEXT_PUBLIC_DOWNLOAD_URL si définie.
     */
    mode: "internal-api" as DownloadMode,
    /** Lien si mode = "external" (ex. Play Store) */
    externalUrl: "https://play.google.com/store/apps/details?id=cd.rdv.app",
    /** Chemin si mode = "static" */
    staticPath: "/rdv.apk",
    /** Nom du fichier APK dans public/ (utilisé par /api/download) */
    apkFileName: "rdv.apk",
    button: {
      label: "Télécharger l'APK (Android)",
    },
    version: "0.1.0-beta",
    minAndroid: "8.0",
    note: "Version bêta — Android {minAndroid} et plus. Autorisez l'installation depuis des sources inconnues si nécessaire.",
  },

  /* ─── 3. FORMULAIRE LISTE D'ATTENTE ─── */
  waitlist: {
    sectionId: "waitlist",
    title: "Rejoignez les premiers utilisateurs de RDV",
    description:
      "Inscrivez-vous pour recevoir le lien de téléchargement et les actualités de la bêta.",
    /**
     * Endpoint API qui reçoit les inscriptions (POST JSON { email, phone? }).
     * Priorité : NEXT_PUBLIC_LEAD_API_URL dans .env.local
     */
    apiEndpoint: "/api/lead",
    fields: {
      email: {
        label: "Email",
        placeholder: "Votre email",
        required: true,
      },
      phone: {
        label: "WhatsApp",
        placeholder: "Votre WhatsApp (optionnel)",
        required: false,
      },
    },
    button: {
      label: "Rejoindre la liste d'attente",
      loadingLabel: "Inscription en cours…",
    },
    messages: {
      success: "Merci ! Vous êtes inscrit(e) sur la liste d'attente.",
      error: "Une erreur est survenue.",
      invalidEmail: "Adresse email invalide.",
    },
    /**
     * Où vont les inscriptions (côté serveur, voir .env.local) :
     * 1. Firestore  → FIREBASE_PROJECT_ID + FIREBASE_API_KEY (+ token)
     * 2. Mailgun    → MAILGUN_API_KEY + MAILGUN_DOMAIN + MAILGUN_NOTIFY_TO
     * 3. Fallback   → log console serveur (développement)
     */
  },
} as const;

/** URL effective du bouton de téléchargement */
export function getDownloadHref(): string {
  const envUrl = process.env.NEXT_PUBLIC_DOWNLOAD_URL?.trim();
  if (envUrl) return envUrl;

  const { mode, externalUrl, staticPath } = landingConfig.download;

  switch (mode) {
    case "external":
      return externalUrl;
    case "static":
      return staticPath;
    case "internal-api":
    default:
      return "/api/download";
  }
}

/** true si le lien de téléchargement est externe */
export function isDownloadExternal(): boolean {
  const href = getDownloadHref();
  return href.startsWith("http://") || href.startsWith("https://");
}

/** Endpoint API du formulaire (côté client) */
export function getLeadApiEndpoint(): string {
  return (
    process.env.NEXT_PUBLIC_LEAD_API_URL?.trim() ||
    landingConfig.waitlist.apiEndpoint
  );
}

/** Note de version formatée */
export function getDownloadNote(): string {
  return landingConfig.download.note
    .replace("{minAndroid}", landingConfig.download.minAndroid)
    .replace("{version}", landingConfig.download.version);
}

/** Chemin absolu du fichier APK côté serveur */
export function getApkFilePath(): string {
  return `${process.cwd()}/public/${landingConfig.download.apkFileName}`;
}

export function getApkDownloadName(): string {
  return landingConfig.download.apkFileName;
}
