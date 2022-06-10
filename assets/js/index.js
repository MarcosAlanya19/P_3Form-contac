// Referencia formEmail
const formEmail = document.querySelector("#formEmail");

async function sendEmailJs(params) {
    try {
        console.log(params);
        const data = {
            service_id: 'service_99u16vh',
            template_id: 'template_hrm9fk5',
            user_id: 'xa_WRgXbm2g2p4iDh',
            template_params: {
                send_email: params.email,
                from_name: `${params.name} ${params.lastName}`,
                to_name: `CITRICA`,
                message: params.comment,
            }
        };
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.ok) {
            alert("Mensaje enviado");
        } else {
            console.error(response);
        }
    } catch (error) {
        console.log(error);
    }
}

// e => es el evento que se ejecuta
async function sendEmail(e) {
    // prevenir el evento por defecto
    e.preventDefault();
    // objecto del formulario como referencia
    const formData = new FormData(e.target);
    // obtengo la informacion de los inputs
    const formProps = Object.fromEntries(formData);
    await sendEmailJs(formProps);
    console.log("se envio lkajdslksjdlkdsj");
}


formEmail.addEventListener("submit", sendEmail)

