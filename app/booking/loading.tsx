export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] animate-pulse">
      <div className="max-w-6xl mx-auto px-4 pt-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-white shadow-sm" />
          <div className="h-5 w-40 bg-gray-200 rounded" />
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-5 md:p-6 flex gap-4">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gray-200 flex-shrink-0" />
          <div className="flex-1">
            <div className="h-6 w-2/3 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-32 bg-gray-100 rounded mb-2" />
            <div className="h-4 w-48 bg-gray-100 rounded" />
          </div>
        </div>
        <div className="mt-4 h-4 w-64 bg-gray-200 rounded" />
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-4 pb-32 grid lg:grid-cols-[1fr_360px] gap-4 items-start">
        <div>
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <div className="h-12 bg-gray-100 rounded-xl mb-3" />
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="h-9 w-24 bg-gray-100 rounded-full flex-shrink-0" />
              ))}
            </div>
          </div>
          {[0, 1].map((c) => (
            <div key={c} className="bg-white rounded-2xl shadow-sm mt-4 p-5">
              <div className="h-5 w-40 bg-gray-200 rounded mb-4" />
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 py-4 border-t border-gray-100 first:border-0">
                  <div className="flex-1">
                    <div className="h-4 w-2/3 bg-gray-200 rounded mb-2" />
                    <div className="h-3 w-1/3 bg-gray-100 rounded" />
                  </div>
                  <div className="h-9 w-20 bg-gray-100 rounded-full" />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="hidden lg:block sticky top-24 bg-white rounded-2xl shadow-sm p-5">
          <div className="h-5 w-32 bg-gray-200 rounded mb-4" />
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-16 bg-gray-50 rounded-xl mb-3" />
          ))}
          <div className="h-12 bg-gray-200 rounded-full mt-4" />
        </div>
      </div>
    </main>
  );
}
