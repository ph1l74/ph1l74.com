import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import { GlobalLayout } from "@/shared/ui/GlobalLayout";
import { theme } from "@/shared/ui/theme";
import '@mantine/core/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filat Astakhov",
  description: "Filat Astkahov's personal site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <GlobalLayout>{children}</GlobalLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
