import Modal from "../../../modules/modals/components/Modal";
import ModalBody from "../../../modules/modals/components/ModalBody";
import ModalHeader from "../../../modules/modals/components/ModalHeader";
import ModalFooter from "../../../modules/modals/components/ModalFooter";



export default function Modal_bundle_01(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>Madagascar 4-Movie Collection</h3>
      </ModalHeader>
      <ModalBody>
        <p>This Bundle includes the following movies:</p>
        <p>Madagascar</p>
        <p>Madagascar 2</p>
        <p>Madagascar 3</p>
        <p>Madagascar 4</p>
        <hr></hr>
        <p>Save 67kr when you buy this bundle rather than each movie individually.</p>

      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Stäng Modal</button>
      </ModalFooter>
    </Modal>
  );
}