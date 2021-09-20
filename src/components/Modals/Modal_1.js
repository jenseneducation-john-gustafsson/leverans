import Modal from "../../modules/modals/components/Modal";
import ModalBody from "../../modules/modals/components/ModalBody";
import ModalHeader from "../../modules/modals/components/ModalHeader";
import ModalFooter from "../../modules/modals/components/ModalFooter";



export default function Modal_1(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>Inception</h3>
      </ModalHeader>
      <ModalBody>
        <p>A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.</p>
      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Close Modal</button>
      </ModalFooter>
    </Modal>
  );
}