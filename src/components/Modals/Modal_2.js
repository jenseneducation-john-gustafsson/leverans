import Modal from "../../modules/modals/components/Modal";
import ModalBody from "../../modules/modals/components/ModalBody";
import ModalHeader from "../../modules/modals/components/ModalHeader";
import ModalFooter from "../../modules/modals/components/ModalFooter";



export default function Modal_2(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>M E O W</h3>
      </ModalHeader>
      <ModalBody>
        <p>SYNOPSIS GOES HERE, TRY ME PLX =D</p>
      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Close Modal</button>
      </ModalFooter>
    </Modal>
  );
}