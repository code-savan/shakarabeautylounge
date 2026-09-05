export default function Loading() {
  return (
    <main className="min-h-screen bg-white animate-pulse">
      <section className="relative h-screen w-full bg-neutral-900 flex flex-col justify-center items-center px-4">
        <div className="h-4 w-24 bg-white/10 rounded mb-4" />
        <div className="h-12 w-3/4 max-w-lg bg-white/10 rounded-lg mb-4" />
        <div className="h-4 w-1/2 max-w-sm bg-white/10 rounded mb-8" />
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="w-10 h-10 bg-white/10 rounded-full" />
          ))}
        </div>
      </section>
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-10 w-64 bg-gray-200 rounded-lg mx-auto mb-4" />
            <div className="h-4 w-80 max-w-full bg-gray-100 rounded mx-auto" />
          </div>
          {[0, 1, 2].map((c) => (
            <div key={c} className="mb-8">
              <div className="h-6 w-40 bg-gray-200 rounded mb-4" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-24 bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <div className="h-4 w-2/3 bg-gray-200 rounded mb-2" />
                    <div className="h-4 w-1/3 bg-gray-100 rounded" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
