import Modal from "../../../modules/modals/components/Modal";
import ModalBody from "../../../modules/modals/components/ModalBody";
import ModalHeader from "../../../modules/modals/components/ModalHeader";
import ModalFooter from "../../../modules/modals/components/ModalFooter";



export default function Modal_bundle_03(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>The Purge Collection</h3>
      </ModalHeader>
      <ModalBody>
        <p>This Bundle includes the following movies:</p>
        <p>The Purge</p>
        <p>The Purge: Anarchy</p>
        <p>The Purge: Elction Year</p>
        <p>The First Purge</p>
        <hr></hr>
        <p>Save 64kr when you buy this bundle rather than each movie individually.</p>

      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Stäng Modal</button>
      </ModalFooter>
    </Modal>
  );
}