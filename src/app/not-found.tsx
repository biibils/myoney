import Image from "next/image"

export default function NotFound() {
  return (
    <div className="min-h-screen items-center justify-center">
      <div className="text-center items-center justify-center">
				<Image src="/cat-404.png" alt="404" width={250} height={250} />
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-gray-600">Halaman yang mau kamu tuju, gak ada loh! Coba cek lagi alamatnya ya!</p>
      </div>
    </div>
  )
}