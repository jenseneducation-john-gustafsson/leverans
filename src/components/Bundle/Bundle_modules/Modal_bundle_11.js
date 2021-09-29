import Modal from "../../../modules/modals/components/Modal";
import ModalBody from "../../../modules/modals/components/ModalBody";
import ModalHeader from "../../../modules/modals/components/ModalHeader";
import ModalFooter from "../../../modules/modals/components/ModalFooter";



export default function Modal_bundle_11(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>Rocky Heavyweight</h3>
      </ModalHeader>
      <ModalBody>
        <p>This Bundle includes the following movies:</p>
        <p>Rocky </p>
        <p>Rocky II </p>
        <p>Rocky III</p>
        <p>Rocky IV</p>
        <p>Rocky V</p>
        <p>Rocky Balboa</p>
        <hr></hr>
        <p>Save 245kr when you buy this bundle rather than each movie individually.</p>

      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Stäng Modal</button>
      </ModalFooter>
    </Modal>
  );
}