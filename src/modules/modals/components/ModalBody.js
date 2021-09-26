export default function ModalBody(props) {
    return (
      <div className="modal-body">
        { props.children }
        <iframe id="Geeks3" width="450" height="350"
                                    src=
 "https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    frameborder="0" allowfullscreen>
                            </iframe>
      </div>
    );
  }