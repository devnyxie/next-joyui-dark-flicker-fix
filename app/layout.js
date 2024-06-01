import ThemeRegistry from "./ThemeRegistry";
import ColorInit from "./colorInit";
import "./styles.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ColorInit />
        <ThemeRegistry options={{ key: "joy" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
