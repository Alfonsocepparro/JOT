import "../App.css";

const ContactForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        const whatsappMessage = `https://wa.me/34672265869?text=Nombre:%20${encodeURIComponent(name)}%0ATeléfono:%20${encodeURIComponent(phone)}%0AMensaje:%20${encodeURIComponent(message)}`;

        window.open(whatsappMessage, '_blank');
    };

    return (
        <div className="contact-form">
            <h2>Contáctanos</h2>
            <form id="whatsapp-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Teléfono:</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button className="submit-button" type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;

