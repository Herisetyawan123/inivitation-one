import './globals.css'

export const metadata = {
  title: 'Undangan Pernikahan',
  description: 'Undangan Pernikahan Online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-100">
        <div className="bg-white min-h-screen mx-auto portrait">
          {children}
        </div>
      </body>
    </html>
  )
}