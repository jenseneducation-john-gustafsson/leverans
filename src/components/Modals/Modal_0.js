import Modal from "../../modules/modals/components/Modal";
import ModalBody from "../../modules/modals/components/ModalBody";
import ModalHeader from "../../modules/modals/components/ModalHeader";
import ModalFooter from "../../modules/modals/components/ModalFooter";



export default function Modal_0(props) {
  
  return (
    <Modal>
      <ModalHeader>
        <h3>The Dark Knight</h3>
      </ModalHeader>
      <ModalBody>
        <p>When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.</p>
      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Close Modal</button>
      </ModalFooter>
    </Modal>
  );
}