import Modal from "../../../modules/modals/components/Modal";
import ModalBody from "../../../modules/modals/components/ModalBody";
import ModalHeader from "../../../modules/modals/components/ModalHeader";
import ModalFooter from "../../../modules/modals/components/ModalFooter";



export default function Modal_bundle_07(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>The Lord of the Rings Collection</h3>
      </ModalHeader>
      <ModalBody>
        <p>This Bundle includes the following movies:</p>
        <p>The Lord of the Rings: Extended Editions Bundle</p>
        <p>The Lord of the Rings: Return Of the King</p>
        <p>The Lord of the Rings: Two Towers</p>
        <hr></hr>
        <p>Save 98kr when you buy this bundle rather than each movie individually.</p>

      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Stäng Modal</button>
      </ModalFooter>
    </Modal>
  );
}