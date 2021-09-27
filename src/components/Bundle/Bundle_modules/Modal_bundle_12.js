import Modal from "../../../modules/modals/components/Modal";
import ModalBody from "../../../modules/modals/components/ModalBody";
import ModalHeader from "../../../modules/modals/components/ModalHeader";
import ModalFooter from "../../../modules/modals/components/ModalFooter";



export default function Modal_bundle_01(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>Best Picture 5-Film Collection</h3>
      </ModalHeader>
      <ModalBody>
        <p>This Bundle includes the following movies:</p>
        <p>Ömhetsbevis</p>
        <p>No Country for Old Men</p>
        <p>Amercian Beauty</p>
        <p>Forrest Grump</p>
        <p>A Beautiful Mind</p>
        <hr></hr>
        <p>Save 126kr when you buy this bundle rather than each movie individually.</p>

      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Stäng Modal</button>
      </ModalFooter>
    </Modal>
  );
}