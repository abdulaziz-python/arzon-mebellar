import React from 'react'
import Modal from 'react-bootstrap/Modal';

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='MyVerticallyCenteredModal'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body closeButton>
        <h4 className='mb-3'>Обратный звонок</h4>
        <input placeholder='Ваше имя' className='modal-input mb-3' type="text" />
        <input placeholder='Ваш номер телефона' className='modal-input mb-3' type="text" />
        <button className='btn btn-success'>Заказать звонок</button>
      </Modal.Body>
      
    </Modal>
  )
}
