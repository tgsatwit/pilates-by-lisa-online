'use client'

import { useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'

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
            <div className="max-w-6xl mx-auto h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full aspect-video bg-black overflow-hidden">
                <video ref={videoRef} width={width} controls>
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  )
} 