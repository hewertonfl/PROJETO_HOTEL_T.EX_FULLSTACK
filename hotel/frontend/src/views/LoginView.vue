<template>
    <main>
        <div class="container-form-image display-f">
            <div class="container-login">
                <form class="form-login" id="formLogin">
                    <h2>FAÇA LOGIN</h2>

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

                    <div class="lembrar-esqueci">
                        <input type="checkbox" />
                        <span>Lembrar-me</span>
                        <a href="#" class="link-login"
                            ><span class="esqueci-senha"
                                >Esqueci minha senha</span
                            ></a
                        >
                    </div>

                    <button
                        @click.prevent="Login"
                        class="btn-entrar"
                        id="btnLogin"
                    >
                        Entrar
                    </button>

                    <h3>Entre com suas redes sociais</h3>
                    <div class="social-login display-f">
                        <div class="google-icon">
                            <a href="#" class="link-login"
                                ><i class="fab fa-google"></i> Google</a
                            >
                        </div>
                        <div class="facebook-icon">
                            <a href="#" class="link-login"
                                ><i class="fab fa-facebook"></i> Facebook</a
                            >
                        </div>
                    </div>
                    <div class="cadastro">
                        <span>Ainda não tem conta?</span>
                        <router-link :to="{path: '/cadastro'}" class="link-cadastro"
                            ><span class="cadastro-link"
                                >Cadastre-se</span
                            ></router-link
                        >
                    </div>
                </form>
            </div>
            <div class="container-img-login">
                <img
                    src="@/assets/images/hotel-login.png"
                    alt="FOTO DO HOTEL"
                    width="700"
                    height="585"
                />
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

    if (res.ativo && res.session.userNivel == 1) {
        console.log(res.message)
        localStorage.setItem('token', JSON.stringify(res.session))
        router.push('/')
        router.go()
    } else {
        // alert('Senha ou email incorretos!')
        alert(res.message)
    }
}
</script>

<style lang="scss" scoped>
.cadastro {
    margin-top: 10px;
}
.cadastro-link{
    color: white;
    margin-left: 10px;
    font-weight: bold;
    &:hover {
        color: #a35700;
    }
}
</style>