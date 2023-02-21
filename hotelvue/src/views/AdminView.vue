<template>
    <main class="container">
        <h2>🔸Checklist dos itens consumidos no quarto🔸</h2>
        <section>
            <h3>Frigobar</h3>   
            <div> 
                <div>
                    <label for="agua">Água</label>
                    <input type="number" id="agua" v-model='fAgua' placeholder="Quantidade" min='0' />
                </div>
                <div>
                    <label for="cerveja">Cerveja</label>
                    <input type="number" id="cerveja" v-model='fCerveja' placeholder="Quantidade" min='0'/>
                </div>
                <div>
                    <label for="refrigerante">Refrigerante</label>
                    <input type="number" id="refrigerante" v-model='fRefrigerante' placeholder="Quantidade" min='0'/>
                </div>   
            </div>                      
        </section>    
        <section>
            <h3>Cesta</h3>   
            <div> 
                <div>
                    <label for="chocolate">Barra de Chocolate</label>
                    <input type="number" id="chocolate" v-model='cChocolate' placeholder="Quantidade" min='0'/>
                </div>
                <div>
                    <label for="batata">Batata Chips</label>
                    <input type="number" id="batata" v-model='cBatata' placeholder="Quantidade" min='0'/>
                </div>
                <div>
                    <label for="amendoim">Amendoim</label>
                    <input type="number" id="amendoim" v-model='cAmendoim' placeholder="Quantidade" min='0'/>
                </div>  
            </div>                       
        </section>    
        <section>
            <h3>Bar</h3>   
            <div>
                <div>
                    <label for="cafe">Café</label>
                    <input type="number" id="cafe" v-model='bCafe' placeholder="Quantidade" min='0'/>
                </div>     
                <div>
                    <label for="pao_queijo">Pão de Queijo</label>
                    <input type="number" id="pao_queijo" v-model='bPaoQueijo' placeholder="Quantidade" min='0'/>
                </div>  
                <div>
                    <label for="agua">Água</label>
                    <input type="number" id="agua" v-model='bAgua' placeholder="Quantidade" min='0'/>
                </div>  
                <div>
                    <label for="lanche">Lanche</label>
                    <input type="number" id="lanche" v-model='bLanche' placeholder="Quantidade" min='0'/>
                </div>  
                <div>
                    <label for="almoco">ALmoço</label>
                    <input type="number" id="almoco" v-model='bAlmoco' placeholder="Quantidade" min='0'/>
                </div>  
                <div>
                    <label for="cerveja">Cerveja</label>
                    <input type="number" id="cerveja" v-model='bCerveja' placeholder="Quantidade" min='0'/>
                </div>  
                <div>
                    <label for="refrigerante">Refrigerante</label>
                    <input type="number" id="refrigerante" v-model='bRefrigerante' placeholder="Quantidade" min='0'/>
                </div>   
            </div>                                             
        </section>  
        <button>Cadastrar</button>
    </main>    
</template>

<script>
import Produtos from '@/assets/classes/Produtos.js'

    export default{
        name: "AdminView",
        data(){
            return{
                fAgua: null,
                fCerveja: null,
                fRefrigerante: null,

                cChocolate: null,
                cBatata: null,
                cAmendoim: null,

                bCafe: null,
                bPaoQueijo: null,
                bAgua: null,
                bLanche: null,
                bAlmoco: null,
                bCerveja: null,
                bRefrigerante: null,
            }
        },
        mounted(){
            const produto = new Produtos('Agua', 20, 5);
            produto.adicionar({produto})
        }
    }
</script>

<style scoped>
.container h2{
    text-align: center;
    margin-top: 30px
}
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0
}
section h3{
    margin: 20px 0 50px;
    border-bottom: 5px solid #a35700;
}
section div > div{
    width: 300px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}
section div > div input{
    width: 100px
}
.container button{
    display: block;
    margin: 35px auto 35px;
    padding: 10px 35px;
    background: #063f57;
    color: #ffffff;
    border-color: #063f57;
    font-size: 1.1rem
}
</style>