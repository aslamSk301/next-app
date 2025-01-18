import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
  <div className="flex justify-center items-center mt-20">
   <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
 <Link href="/insta">Go to Insta</Link>
</button>

  </div>
  );
}
