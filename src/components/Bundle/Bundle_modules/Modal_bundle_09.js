import Modal from "../../../modules/modals/components/Modal";
import ModalBody from "../../../modules/modals/components/ModalBody";
import ModalHeader from "../../../modules/modals/components/ModalHeader";
import ModalFooter from "../../../modules/modals/components/ModalFooter";



export default function Modal_bundle_09(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>WWII Films 5 Movies</h3>
      </ModalHeader>
      <ModalBody>
        <p>This Bundle includes the following movies:</p>
        <p>The Thin Red Line</p>
        <p>The Longest Day</p>
        <p>Patton</p>
        <p>Tora! Tora! Tora!</p>
        <p>Mounments Men</p>
        <hr></hr>
        <p>Save 146kr when you buy this bundle rather than each movie individually.</p>

      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Stäng Modal</button>
      </ModalFooter>
    </Modal>
  );
}