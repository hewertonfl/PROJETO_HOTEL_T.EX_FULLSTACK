/* 

Login

methods: {
    salvarLocalStorage(dados) {
      localStorage.setItem("cliente", JSON.stringify(dados));
    },
    eCampoVazio(texto) {
      if (!texto.length) {
        return true;
      }
      return false;
    },
    removerAspas(texto) {
      if (texto.includes('"') || texto.includes("'")) {
        return texto.replace(/["']+/g, "");
      }
      return texto;
    },
    validarUsuario(email, senha) {
      if (this.eCampoVazio(email) || this.eCampoVazio(senha)) {
        return alert("Preencha todos os campos");
      }

      email = this.removerAspas(email).trim();
      senha = this.removerAspas(senha).trim();

      const dados = {
        email,
        senha,
      };

      this.salvarLocalStorage(dados);
      window.location.href = "/";
    },
  }

  */