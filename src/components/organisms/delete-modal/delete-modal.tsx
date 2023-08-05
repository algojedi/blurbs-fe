import React from 'react';

interface DeleteModalProps {
  show: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  show,
  onCancel,
  onConfirm,
}) => {
  return (
    <div
      className={`modal fade ${show ? 'show d-block' : ''}`}
      tabIndex={-1}
      role='dialog'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Delete Post</h5>
            <button
              type='button'
              className='close'
              onClick={onCancel}
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            Are you sure you want to delete this post?
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-danger'
              onClick={onConfirm}
            >
              Delete
            </button>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
