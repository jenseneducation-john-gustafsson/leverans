import Modal from "../../../modules/modals/components/Modal";
import ModalBody from "../../../modules/modals/components/ModalBody";
import ModalHeader from "../../../modules/modals/components/ModalHeader";
import ModalFooter from "../../../modules/modals/components/ModalFooter";



export default function Modal_bundle_05(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>DC 7-Film Collection</h3>
      </ModalHeader>
      <ModalBody>
        <p>This Bundle includes the following movies:</p>
        <p>Man Of Steel</p>
        <p>BvS: Dawn of Justice</p>
        <p>Suicide Squad</p>
        <p>Wonder Woman</p>
        <p>Justice League</p>
        <hr></hr>
        <p>Save 194kr when you buy this bundle rather than each movie individually.</p>

      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Stäng Modal</button>
      </ModalFooter>
    </Modal>
  );
}