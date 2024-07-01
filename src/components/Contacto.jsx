import { useForm } from "react-hook-form";

const ContactForm = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        const numeroTelefono = "34672265869"; 
        const mensaje = `Hola, mi nombre es ${data.nombre}. Mi correo electrónico es ${data.email}. ${data.mensaje}.`;
        const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
        
        window.location.href = urlWhatsApp;
    }

    return (
        <div className="contact-form">
            <h2>Contacto</h2>
            <form className="form-group" onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu email" {...register("email")} />
                <input type="message" placeholder="Ingresá tu mensaje" {...register("mensaje")} />
                <button className="submit-button" type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default ContactForm;
