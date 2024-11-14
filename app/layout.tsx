import { SettingsDialog } from "@/components/SettingsDialog";
import "./globals.css";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center items-center min-h-screen">
          <SettingsDialog />
        </div>
      </body>
    </html>
  );
}
