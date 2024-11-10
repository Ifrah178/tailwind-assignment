import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center p-8">
      <h1 className="text-5xl font-extrabold italic mb-8">Stellarix Watches</h1>

      <img src="heroImage.png" alt="" className="mx-auto mb-6" />
      <p className="mb-8">
        "A close-up of a luxurious watch resting on a sleek black marble surface, illuminated by soft, ambient lighting. The watch features a polished stainless steel case, an intricately detailed dial with Roman numerals, and a finely stitched leather strap. The background is elegantly blurred, drawing attention to the watch's craftsmanship and precision. Subtle reflections highlight the watch's sapphire crystal glass, exuding sophistication and timeless elegance."
      </p>

      <div className="flex justify-center space-x-4">
        <Image src="photo1.png" alt="" className="w-1/3" />
        <Image src="photo2.png" alt="" className="w-1/3" />
        <Image src="photo3.png" alt="" className="w-1/3" />
      </div>
    </div>
  );
}
