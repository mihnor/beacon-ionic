AccountsTemplates.configure({
    // Behaviour
    confirmPassword: false,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'politicas',
    termsUrl: 'termos',

    // Redirects
    homeRoutePath: '/promos',
    redirectTimeout: 4000,

    // Hooks
    //onLogoutHook: myLogoutFunc,
    //onSubmitHook: mySubmitFunc,

    // Texts
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Passwod"
      },
    },
});

AccountsTemplates.configureRoute('signIn', {
    name: 'login',
    path: '/login',
    template: 'accountsSignIn',
    layoutTemplate: 'accounts',
    redirect: '/promos',
});

AccountsTemplates.configureRoute('signUp', {
    name: 'cadastro',
    path: '/cadastro',
    template: 'accountsSignUp',
    layoutTemplate: 'accounts',
    redirect: '/login',
});

AccountsTemplates.configureRoute('forgotPwd', {
    name: 'esqueciSenha',
    path: '/esqueci_senha',
    template: 'accountsForgotPwd',
    layoutTemplate: 'accounts',
    redirect: '/login',
});

AccountsTemplates.configureRoute('changePwd', {
    name: 'mudarSenha',
    path: '/mudar_senha',
    template: 'accountsChangePwd',
    layoutTemplate: 'accounts',
    redirect: '/login',
});

AccountsTemplates.configureRoute('resetPwd', {
    name: 'resetarSenha',
    path: '/resetar_senha',
    template: 'accountsResetPwd',
    layoutTemplate: 'accounts',
    redirect: '/login',
});

AccountsTemplates.configureRoute('verifyEmail', {
    name: 'verificarEmail',
    path: '/verificar_email',
    template: 'accountsVerifyEmail',
    layoutTemplate: 'accounts',
    redirect: '/login',
});

AccountsTemplates.configureRoute('enrollAccount', {
    name: 'confirmarConta',
    path: '/confirmar_conta',
    template: 'accountsEnrollAccount',
    layoutTemplate: 'accounts',
    redirect: '/login',
});


//AccountsTemplates.removeField('email');
//AccountsTemplates.removeField('password');

//AccountsTemplates.addFields([
//  {
//    _id: 'email',
//    type: 'email',
//    required: true,
//    displayName: "Endereço de email:",
//    re: /.+@(.+){2,}\.(.+){2,}/,
//    errStr: 'Email inválido',
//  },
//  {
//    _id: 'password',
//    type: 'password',
//    displayName: "Senha:",
//    required: true,
//    minLength: 6,
//    // XXX review password regex and translate 'minLength' message someway
//    //re: /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
//    //errStr: 'Pelo menos 1 digito, 1 letra minúscula e 1 maiúscula',
//  }
//]);

AccountsTemplates.configure({
    texts: {
        navSignIn: "Login",
        navSignOut: "Logout",
        optionalField: "opcional",
        pwdLink_pre: "",
        pwdLink_link: "Recuperar Senha",
        pwdLink_suff: "",
        sep: "OU",
        signInLink_pre: "Já possui uma conta?",
        signInLink_link: "Faça login!",
        signInLink_suff: "",
        signUpLink_pre: "Não possui uma conta?",
        signUpLink_link: "Registrar-se",
        signUpLink_suff: "",
        socialAdd: "Adicionar",
        socialConfigure: "Configurar",
        socialIcons: {
            "meteor-developer": "fa fa-rocket",
        },
        socialRemove: "remover",
        socialSignIn: "Faça login!",
        socialSignUp: "Cadastro",
        socialWith: "com",
        termsPreamble: "Ao clicar em aceitar você aceita as",
        termsPrivacy: "Políticas de Privacidade",
        termsAnd: "e",
        termsTerms: "Termos de Uso",

      title: {
        changePwd: "Mudar senha",
        enrollAccount: "Cadastrar conta",
        forgotPwd: "Esqueci a senha",
        resetPwd: "Resetar senha",
        signIn: "Login",
        signUp: "Cadastro",
      },

      button: {
        changePwd: "Mudar senha",
        enrollAccount: "Cadastrar conta",
        forgotPwd: "Esqueci a senha",
        resetPwd: "Resetar senha",
        signIn: "Login",
        signUp: "Registrar-se",
      },

      info: {
        emailSent: "Email enviado",
        emailVerified: "Email verificado",
        pwdChanged: "Senha alterada",
        pwdReset: "Resetar senha",
        pwdSet: "Senha resetada",
        signUpVerifyEmail: "Registrado com sucesso! Por favor cheque seu email e siga as instruções.",
      },

      errors: {
        mustBeLoggedIn: "Você precisa estar logado para acessar",
        pwdMismatch: "As senhas não conferem",
      } 

    }
});
