<template>
    <div>
        <main class="container my-4 text-center p-0">
            <h2 class="titulo mt-5">Relatório de consumo</h2>
            <div class='dados-hospede fs-6 mb-3' >
                <div>
                <div>
                    <label for="" class='fw-bold'>Nome: <span class='fw-semibold'>Cliente</span></label>
                </div>
                <div>
                    <label for="" class='fw-bold'>Quarto: <span class='fw-semibold'>120</span></label>
                </div>
                </div>
            </div>
            <div class=" d-flex w-100 bg-dark text-white fs-6 fw-bold">
                <div class="col">
                    <label for="">Produto</label>
                </div>
                <div class="col">
                    <label for="">Preço</label>
                </div>
                <div class="col">
                    <label for="">Quantidade</label>
                </div>
                <div class="col">
                    <label for="">Total</label>
                </div>
            </div>
            <div colspan="4" class='bg-light border text-center'>Frigobar</div>
        <div class='linhas-tabela d-flex border'>
            <div class='col'><span>Água</span></div>
            <div class='col'><span>3,00</span></div>
            <div class='col'><input type='number' max='3' min='0'></div>
            <div class='col'><span>0,00</span></div>
        </div>
        <div class='linhas-tabela d-flex border'>
            <div class='col'><span>Água</span></div>
            <div class='col'><span>3,00</span></div>
            <div class='col'><input type='number' max='3' min='0'></div>
            <div class='col'><span>0,00</span></div>
        </div>
        <div colspan="4" class='bg-light border text-center'>Cesta</div>
        <div colspan="4" class='bg-light border text-center'>Bar</div>
        <div class='d-flex border justify-content-end bg-dark text-white fw-bold'>
            <div class='text-end flex-grow-2 mx-5'><span>TOTAL</span></div>
            <div class='flex-shrink-1 mx-5'><span>0,00</span></div>
        </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'RelatorioAdminView'
}
</script>
