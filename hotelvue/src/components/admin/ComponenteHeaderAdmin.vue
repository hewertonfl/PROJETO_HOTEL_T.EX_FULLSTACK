<template>
    <div class="header-admin">
        <div class="img-logo">
            <img
                src="@/assets/images/Logo-logo-Branca.png"
                alt="Logo Hotel"
                width="100"
            />
            <div class="navbar-div">
                <nav class="navbar">
                    <ul class="ul-navbar">
                        <li>
                            <router-link :to="{ path: '/' }">Home</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/relatorio' }"
                                >Hóspedes</router-link
                            >
                        </li>
                        <li>
                            <router-link :to="{ path: '/relatorio' }"
                                >Reservas</router-link
                            >
                        </li>
                        <li>
                            <router-link :to="{ path: '/admin' }"
                                >Funcionários</router-link
                            >
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
ul {
    margin:0;
    padding: 0;
}
* {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-bottom: 2px;
    align-items: flex-end;
    background: #063f57;
}
.header-admin {
    display: flex;
}
.img-logo {
    width: 100%;
    border: 2px solid #063f57;
    box-shadow: 2px 2px 2px #063f57;
    img {
        width: 50px;
        height: 50px;
        margin: 5px 0;
    }
}
.navbar-div {
    height: 50px;
}
</style>
