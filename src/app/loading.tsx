import React from "react";

const GloblLoading = () => {
  return (
    <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* App Image */}
      <div className="overflow-hidden rounded-lg">
        <div className="h-48 w-full rounded-lg bg-gray-300" />
      </div>

      {/* App Info */}
      <div className="mt-4">
        {/* App Title */}
        <div className="h-6 w-3/4 rounded bg-gray-300" />

        {/* Downloads + Rating */}
        <div className="mt-3 flex items-center justify-between">
          {/* Downloads */}
          <div>
            <div className="h-3 w-16 rounded bg-gray-200" />
            <div className="mt-2 h-5 w-20 rounded bg-gray-300" />
          </div>

          {/* Rating */}
          <div className="flex flex-col items-end">
            <div className="h-3 w-12 rounded bg-gray-200" />

            <div className="mt-2 flex items-center gap-1">
              <div className="h-4 w-4 rounded-full bg-gray-300" />
              <div className="h-5 w-8 rounded bg-gray-300" />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-4 h-10 w-full rounded-lg bg-gray-300" />
      </div>
    </div>
  );
};

export default GloblLoading;
