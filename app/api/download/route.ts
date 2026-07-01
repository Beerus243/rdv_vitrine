import { createReadStream, existsSync, statSync } from "fs";
import { NextResponse } from "next/server";
import { getApkDownloadName, getApkFilePath } from "@/lib/landing-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const filePath = getApkFilePath();
  const fileName = getApkDownloadName();

  if (!existsSync(filePath)) {
    return NextResponse.json(
      {
        error: `APK non disponible. Placez le fichier ${fileName} dans le dossier public/.`,
      },
      { status: 404 },
    );
  }

  const stats = statSync(filePath);
  const stream = createReadStream(filePath);

  return new NextResponse(stream as unknown as BodyInit, {
    status: 200,
    headers: {
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Length": String(stats.size),
      "Cache-Control": "public, max-age=3600",
    },
  });
}
