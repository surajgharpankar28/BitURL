import Shortnr from "@/components/Shortnr";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[100vh]">
      <section className="">
        <div className="px-4">
          <Shortnr />
        </div>
      </section>
    </main>
  );
}
