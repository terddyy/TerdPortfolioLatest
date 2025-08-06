import React from "react";

export function FullScreenModal({ open, onClose, children }: { open: boolean, onClose: () => void, children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative bg-background w-full max-w-2xl mx-auto rounded-lg shadow-lg p-6 m-4 overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-4 right-4 text-2xl text-muted-foreground hover:text-primary"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
} 