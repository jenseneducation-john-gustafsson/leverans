import "./Footer.css";

const Footer = () => {

  var date = new Date();
  var currentYear = date.getFullYear()
  return (
    <div>
      <p className="footer">© Copyright Notflix {currentYear}</p>
    </div>
  )
}

export default Footer
