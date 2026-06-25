import { existsSync, createReadStream, statSync } from "fs";
import path from "path";
import { Readable } from "stream";
import { getApkDownloadName, getApkFilePath } from "@/lib/landing-config";

export async function GET() {
  const filePath = getApkFilePath();
  const fileName = getApkDownloadName();

  if (!existsSync(filePath)) {
    return Response.json(
      {
        error: `APK non disponible. Placez le fichier ${fileName} dans le dossier public/.`,
      },
      { status: 404 },
    );
  }

  const stats = statSync(filePath);
  const nodeStream = createReadStream(filePath);
  const webStream = Readable.toWeb(nodeStream) as ReadableStream;

  return new Response(webStream, {
    status: 200,
    headers: {
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Length": String(stats.size),
    },
  });
}
