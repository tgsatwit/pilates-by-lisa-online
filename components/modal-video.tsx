'use client'

import { useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { X } from 'lucide-react'

interface ModalVideoProps {
  videoUrl: string;
  previewImage: StaticImageData;
  width: number;
  height: number;
  alt?: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ModalVideo({
  videoUrl,
  previewImage,
  width,
  height,
  alt = 'Video thumbnail',
  isOpen,
  onOpenChange
}: ModalVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Convert Vimeo URL to embed URL if it's a Vimeo video
  const embedUrl = videoUrl.includes('vimeo.com') 
    ? `https://player.vimeo.com/video/${videoUrl.split('/').pop()}?autoplay=1&title=0&byline=0&portrait=0` 
    : videoUrl

  return (
    <div>
      {/* Modal */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => onOpenChange(false)}>
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />

          <Transition.Child
            className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="w-[90vw] max-w-[1600px] mx-auto">
              <Dialog.Panel className="relative w-full aspect-video bg-black overflow-hidden rounded-lg">
                <button
                  onClick={() => onOpenChange(false)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/75 transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                {videoUrl.includes('vimeo.com') ? (
                  <iframe
                    src={embedUrl}
                    width={width}
                    height={height}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <video ref={videoRef} width={width} height={height} controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  )
} 