export const metadata = {
  title: 'Liuify Planning Tool MVP',
  description: 'Planning tool for Liuify',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
