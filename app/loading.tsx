export default function Loading() {
  return (
    <div className="min-h-screen bg-black animate-pulse">
      <div className="relative w-full h-screen min-h-[500px] bg-neutral-900 flex flex-col justify-center items-center px-4">
        <div className="h-10 md:h-16 w-3/4 max-w-xl bg-white/10 rounded-lg mb-4" />
        <div className="h-10 md:h-16 w-1/2 max-w-md bg-white/10 rounded-lg mb-8" />
        <div className="flex gap-3">
          <div className="h-11 w-40 bg-white/10 rounded-full" />
          <div className="h-11 w-40 bg-white/10 rounded-full" />
        </div>
      </div>
      <div className="bg-white px-3 md:px-12 py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="h-6 w-32 bg-gray-200 rounded-full mb-5" />
            <div className="h-10 w-full bg-gray-200 rounded-lg mb-3" />
            <div className="h-10 w-2/3 bg-gray-200 rounded-lg mb-5" />
            <div className="h-4 w-full bg-gray-100 rounded mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-gray-100 rounded-2xl" />
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] lg:aspect-[4/5] bg-gray-200 rounded-2xl" />
        </div>
      </div>
      <div className="bg-[#1a1512] px-3 md:px-12 py-16">
        <div className="h-8 w-56 bg-white/10 rounded-lg mb-8" />
        <div className="flex gap-4 overflow-hidden">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="w-[280px] h-96 bg-white/10 rounded-2xl flex-shrink-0" />
          ))}
        </div>
      </div>
      <div className="bg-[#f8f9fa] px-3 md:px-12 py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="h-32 bg-white rounded-3xl mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-48 bg-white rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
