function gravar(){

    var entraCpfcnpj = document.getElementById("entraCpfcnpj");
    var resCpf = document.getElementById("resCpf");
  
    var Senhaa = document.getElementById('Senha');
    var senhaLogin = document.getElementById("senha-login");
    
    let listaUsuarios = []
  
    let userValid = {
      
      login: '',
      user:'',
      senha: ''
    }
  
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
  
    listaUsuarios.forEach((item) => {
  
      if (entraCpfcnpj.value == item.CpfCnpj && Senhaa.value == item.Senha){
        userValid = {
          login: item.CpfCnpj,
          user: item.Social,
          senha: item.Senha
         
        }
      }
    })
    console.log(userValid)
}