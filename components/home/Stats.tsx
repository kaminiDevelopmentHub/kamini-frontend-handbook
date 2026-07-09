const stats = [
  {
    value: "11+",
    label: "Years Experience",
  },
  {
    value: "40+",
    label: "Enterprise Features",
  },
  {
    value: "6+",
    label: "Organizations",
  },
  {
    value: "100+",
    label: "Engineering Notes",
  },
];

export default function Stats() {
  return (
    <section className="border-y bg-gray-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <h2 className="text-4xl font-bold text-blue-600">
              {item.value}
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}