'use client'

import { useState, useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface ModalVideoProps {
  id: string
  videoId: string
  open: boolean
  setOpen: (open: boolean) => void
}

export default function ModalVideo({ id, videoId, open, setOpen }: ModalVideoProps) {
  const videoRef = useRef<HTMLIFrameElement>(null)

  return (
    <Transition show={open} as={Fragment}>
      <Dialog initialFocus={videoRef} onClose={() => setOpen(false)}>
        {/* Modal backdrop */}
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

        {/* Modal dialog */}
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
            <Dialog.Panel className="w-full max-w-5xl mx-auto bg-white overflow-hidden">
              <div className="relative aspect-video">
                <iframe
                  ref={videoRef}
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
                  title="Video"
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                />
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
} 