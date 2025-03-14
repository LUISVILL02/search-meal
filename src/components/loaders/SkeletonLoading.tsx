export const SkeletonLoading = () => (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="text-center">
        <div className="w-full max-w-md mx-auto h-48 bg-gray-200 animate-pulse rounded-lg"></div>
        <div className="h-8 bg-gray-200 animate-pulse mt-4 mx-auto w-3/4 rounded"></div>
        <div className="h-4 bg-gray-200 animate-pulse mt-2 mx-auto w-1/2 rounded"></div>
      </div>
    </div>
  );