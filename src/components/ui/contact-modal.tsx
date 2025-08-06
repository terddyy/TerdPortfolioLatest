import { useEffect } from "react";
import { X } from "lucide-react";
import { ContactForm } from "./contact-form";
import { cn } from "@/lib/utils";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-sm",
          "animate-in fade-in-0 duration-300"
        )}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className={cn(
          "relative w-full max-w-lg rounded-lg bg-card p-6 shadow-lg",
          "animate-in fade-in-0 slide-in-from-bottom-4 duration-300",
          "sm:zoom-in-90 sm:slide-in-from-bottom-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={cn(
            "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background",
            "transition-opacity hover:opacity-100",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          )}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        {/* Modal content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Get in Touch</h2>
            <p className="text-sm text-muted-foreground">
              Send me a message and I'll get back to you as soon as possible.
            </p>
          </div>

          <ContactForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
} 