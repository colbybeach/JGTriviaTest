import React from 'react'

export default function Modal({title, content, isOpen, closeModal, secondAction, secondActionTitle}) {
  return (
    isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal modal-open">
                <div className="modal-box">
                    <h2 className="font-bold text-lg uppercase m-3">{title}</h2>
                    <div className='mt-5'>{content}</div>
                    <div className="modal-action">
                        {secondActionTitle &&
                            <button
                                className="btn btn-primary"
                                onClick={secondAction}
                            >
                                {secondActionTitle}
                            </button>
                        }
                        <button
                            className="btn btn-outline"
                            onClick={closeModal}
                        >
                        Close
                        </button>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop" onClick={closeModal}></div>
        </div>
    )
  )
}
