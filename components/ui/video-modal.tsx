"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogPortal, DialogOverlay } from "@/components/ui/dialog"
import { Play } from "lucide-react"

export interface VideoModalProps {
  videoUrl: string;
  showFloatingButton?: boolean;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function VideoModal({ 
  videoUrl, 
  showFloatingButton = true, 
  isOpen,
  onOpenChange 
}: VideoModalProps) {
  return (
    <>
      {showFloatingButton && (
        <button
          onClick={() => onOpenChange(true)}
          className="absolute right-12 top-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 group"
          aria-label="Play Video"
        >
          <Play className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}

      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        {isOpen && (
          <DialogPortal>
            <DialogOverlay className="bg-black/80 fixed inset-0" />
            <DialogContent className="sm:max-w-4xl h-[80vh] p-0 border-none bg-black">
              <iframe
                src={`${videoUrl.replace('vimeo.com', 'player.vimeo.com/video')}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </DialogContent>
          </DialogPortal>
        )}
      </Dialog>
    </>
  )
} 