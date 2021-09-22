export default function ModalBody(props) {
    return (
      <div className="modal-body">
        { props.children }
        <iframe id="Geeks3" width="450" height="350"
                                    src=
 "https://www.youtube.com/embed/V5he1JXiQbg"
                                    frameborder="0" allowfullscreen>
                            </iframe>
      </div>
    );
  }