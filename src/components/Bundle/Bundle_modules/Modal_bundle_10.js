import Modal from "../../../modules/modals/components/Modal";
import ModalBody from "../../../modules/modals/components/ModalBody";
import ModalHeader from "../../../modules/modals/components/ModalHeader";
import ModalFooter from "../../../modules/modals/components/ModalFooter";



export default function Modal_bundle_10(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>The Godfather Trilogy</h3>
      </ModalHeader>
      <ModalBody>
        <p>This Bundle includes the following movies:</p>
        <p>The Godfather</p>
        <p>The Godfather 2</p>
        <p>Mario Puzo's The Godfather, Coda: The Death of Michael Corleone</p>
        <hr></hr>
        <p>Save 38kr when you buy this bundle rather than each movie individually.</p>

      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Stäng Modal</button>
      </ModalFooter>
    </Modal>
  );
}