import "./index.css"

function Jogo(){

    return(
        <>
            <header>
                <h1>
                    Jogo da Memória
                </h1>

                <h2>
                    Vez do Jogador: 
                </h2>

                <h2>1</h2>
            </header>

            <section>
                <table>
                    <tr>
                        <th id="area00"></th>
                        <th id="area01"></th>
                        <th id="area02"></th>
                        <th id="area03"></th>
                        <th id="area04"></th>
                    </tr>

                    <tr>
                        <th id="area10"></th>
                        <th id="area00"></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>

                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </table>
            </section>
        
        </>
    )

}

export default Jogo;