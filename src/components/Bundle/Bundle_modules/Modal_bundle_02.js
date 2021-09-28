import Modal from "../../../modules/modals/components/Modal";
import ModalBody from "../../../modules/modals/components/ModalBody";
import ModalHeader from "../../../modules/modals/components/ModalHeader";
import ModalFooter from "../../../modules/modals/components/ModalFooter";



export default function Modal_bundle_02(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>Conjuring Universe</h3>
      </ModalHeader>
      <ModalBody>
        <p>This Bundle includes the following movies:</p>
        <p>The Conjuring</p>
        <p>Annabelle</p>
        <p>The Conjuring 2</p>
        <p>Annabelle 2</p>
        <p>The Nun</p>
        <hr></hr>
        <p>Save 264kr when you buy this bundle rather than each movie individually.</p>

      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Stäng Modal</button>
      </ModalFooter>
    </Modal>
  );
}