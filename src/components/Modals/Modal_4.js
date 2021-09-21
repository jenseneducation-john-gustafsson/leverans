import Modal from "../../modules/modals/components/Modal";
import ModalBody from "../../modules/modals/components/ModalBody";
import ModalHeader from "../../modules/modals/components/ModalHeader";
import ModalFooter from "../../modules/modals/components/ModalFooter";



export default function Modal_4(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>The Shining</h3>
      </ModalHeader>
      <ModalBody>
        <p>Insert S here</p>
      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Close Modal</button>
      </ModalFooter>
    </Modal>
  );
}