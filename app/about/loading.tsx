export default function Loading() {
  return (
    <main className="min-h-screen bg-white animate-pulse">
      <section className="relative min-h-screen w-full">
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 md:px-12 py-24">
            <div className="h-8 w-48 bg-gray-200 rounded-full mb-6" />
            <div className="h-12 w-full bg-gray-200 rounded-lg mb-3" />
            <div className="h-12 w-2/3 bg-gray-200 rounded-lg mb-6" />
            <div className="h-4 w-full max-w-md bg-gray-100 rounded mb-8" />
            <div className="flex items-center gap-3 mb-8">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                ))}
              </div>
              <div className="h-4 w-40 bg-gray-100 rounded" />
            </div>
            <div className="h-12 w-48 bg-gray-200 rounded-full" />
          </div>
          <div className="hidden lg:block p-4">
            <div className="h-full min-h-[500px] bg-gray-200 rounded-[40px] m-4" />
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-4 w-24 bg-gray-200 rounded mx-auto mb-4" />
          <div className="h-10 w-2/3 bg-gray-200 rounded-lg mx-auto mb-6" />
          <div className="h-4 w-full bg-gray-100 rounded mb-2" />
          <div className="h-4 w-5/6 bg-gray-100 rounded mx-auto" />
        </div>
      </section>
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-32 bg-white rounded-2xl border border-gray-100" />
          ))}
        </div>
      </section>
    </main>
  );
}
