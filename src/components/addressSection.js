export default function AdressSection(){
    return(
        <div className="container-fluid mt-3" id="address">
            <div className="row">
                <div className="col-12">
                    <p className="display-6 text-center">Onde estamos?</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.976702422771!2d-48.121021524112045!3d-15.805182423222336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bcd6a7669b38b%3A0x1fffdb438f61ca42!2sPolo%20EAD%20IESB%20-%20Campus%20Oeste%20%E2%80%93%20Liliane%20Barbosa!5e0!3m2!1spt-BR!2sbr!4v1712632531031!5m2!1spt-BR!2sbr"
                         style={{border:0, width:'100%', height:'80vh'}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}