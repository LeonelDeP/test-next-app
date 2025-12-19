export const metadata = {
  title: "Next.js ECS Test",
  description: "Sitio de prueba en Huawei ECS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
