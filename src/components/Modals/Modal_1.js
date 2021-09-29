import Modal from "../../modules/modals/components/Modal";
import ModalBody from "../../modules/modals/components/ModalBody";
import ModalHeader from "../../modules/modals/components/ModalHeader";
import ModalFooter from "../../modules/modals/components/ModalFooter";



export default function Modal_1(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>Lord of the Rings - Return of the King</h3>
      </ModalHeader>
      <ModalBody>
        <p>Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.</p>
      </ModalBody>
      <ModalFooter>
        <p>Test - Price: 5000:-</p>
        <button onClick={ props.close } className="btn btn-primary">Close Modal</button>
      </ModalFooter>
    </Modal>
  );
}