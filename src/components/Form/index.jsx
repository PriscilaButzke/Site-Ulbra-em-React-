function Form(){
    return(
        <form>
                <label>Email:</label><br/>
                <input type="text" name="email" placeholder="Digite aqui seu email"/><br/>

                <label>Telefone:</label><br/>
                <input type="text" name="telefone" placeholder="(51) 9____-____"/><br/>

                <label>Mensagem:</label><br/>
                <textarea name="mensagem" cols="30" rows="5" placeholder="Digite aqui sua mensagem..."/><br/>

                <input type="button" value="Enviar"/>
            </form>
    )
}
export default Form