import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-6">
      <div className="max-w-3xl">
        <p className="mb-4 text-lg text-gray-500">
          👋 Hi, I'm
        </p>

        <h1 className="text-6xl font-extrabold tracking-tight">
          Kamini Parmar
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-blue-600">
          Frontend Lead | Frontend Architect
        </h2>

        <p className="mt-8 text-xl leading-9 text-gray-600">
          Building scalable enterprise web applications with 11+ years of
          experience across Banking, FinTech and Retail.
        </p>

        <div className="mt-10 flex gap-4">
          <Button size="lg">View Projects</Button>

          <Button variant="outline" size="lg">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}