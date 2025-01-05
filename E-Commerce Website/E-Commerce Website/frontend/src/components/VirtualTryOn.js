export const VirtualTryOn = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="virtual-try-on-viewer">
          <canvas id="try-on-canvas" className="w-full h-96 rounded-lg" />
        </div>
        <div className="try-on-controls">
          <h3 className="text-xl font-semibold mb-4">Try On Controls</h3>
          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Upload Your Photo
            </button>
            <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
              Take Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};