<template>
    <main>
        <div class="container-form-image display-f justify-c">
            <router-link :to="{ path: '/' }"> 
            <div><img src="@/assets/images/hotel-login.png" alt="" /></div>
            </router-link>
            <div class="container-login">
                <form class="form-login" id="formLogin">
                    <h2>ÁREA ADMINISTRATIVA</h2>

                    <label for="username">E-mail</label>
                    <input
                        type="text"
                        placeholder="Digite seu e-mail"
                        v-model="email"
                        autofocus
                    />
                    <span id="alertUserName" style="color: brown"></span>

                    <label for="password">Senha</label>
                    <input
                        type="password"
                        v-model="senha"
                        placeholder="Digite sua senha"
                    />
                    <span id="alertPassword" style="color: brown"></span>

                    <button
                        @click.prevent="Login"
                        class="btn-entrar"
                        id="btnLogin"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const senha = ref('')
const Login = async () => {
    if (!email.value || !senha.value) {
        return alert('Preencha todos os campos!')
    }
    const res = await fetch('api/usuarios/login', {
        method: 'POST',
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({ email: email.value, senha: senha.value }),
    }).then((res) => res.json())
    console.log(res.message)

    if (res.ativo && res.session.userNivel == 2) {
        localStorage.setItem('token', JSON.stringify(res.session))
        // router.push('/admin/login')
    } else {
        // alert('Senha ou email incorretos!')
        alert(res.message)
    }
    router.go()
}

</script>

<style lang="scss" scoped>
.container-form-image {
    align-content: center;
    div img {
        width: 600px;
    }
    margin: 10px auto;
}
.container-login {
    display: block;
}
.form-login {
    width: 600px;
    height: 500px;
}
.btn-entrar {
    margin-top: 40px;
}
</style>
