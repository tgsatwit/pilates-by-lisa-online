export default function Loading() {
  return (
    <div className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-slate-700 border-t-purple-500 rounded-full animate-spin" />
        <p className="text-slate-300 animate-pulse">Loading Pilates by Lisa...</p>
      </div>
    </div>
  )
} 