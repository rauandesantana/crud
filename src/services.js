export default class API {


  constructor(url, headers) {
    this.url = "http://localhost:3344/contacts";
    this.headers = {
      "Authorization": "Basic " + window.btoa("usuario:$3nh4"),
      "Accept": "application/json",
      "Content-type": "application/json",
    };
  }







  async listarContatos() {
    const req = {
      method: "GET",
      headers: this.headers,
    }
    const lista = await fetch(this.url + "/", req)
      .then(async (response) => {
        const json = await response.json();
        return json.data;
      })
      .catch((erro) => console.log(erro));


      return lista;
  }











  async pegarContato(id) {
    if (id === undefined || id === "") return undefined;

    const req = {
      method: "GET",
      headers: this.headers,
    }
    const contato = await fetch(this.url + "/" + id, req)
      .then((response) => response.json())
      .then((response) => response.data)
      .catch((erro) => console.log(erro));

    return contato;
  }

  async addContato(contacto) {
    if (typeof contacto !== "object") return undefined;

    const req = {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        "name": contacto.name.toString(),
        "email": contacto.email.toString(),
        "age": contacto.age.toString(),
      }),
    }

    const retorno = await fetch(this.url, req)
      .then((response) => response.json())
      .then((response) => response.data)
      .then((data) => data)
      .catch((erro) => console.log(erro));

    return retorno;
  }

  async editarContato(id, contacto) {
    const checar = id === undefined || id === "" || typeof contacto !== "object";
    if (checar) return undefined;

    const req = {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify({
        "name": contacto.name.toString(),
        "email": contacto.email.toString(),
        "age": contacto.age.toString(),
      }),
    }

    const retorno = await fetch(this.url + "/" + id, req)
      .then((response) => response.json())
      .then((response) => response.data)
      .then((data) => data)
      .catch((erro) => console.log(erro));

    return retorno;
  }



}

