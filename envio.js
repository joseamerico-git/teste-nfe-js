function getToken() {
    const URL_CERTIFICADO_SANDBOX = "https://api.sandbox.plugnotas.com.br/certificado"
    const URL_ENVIO_NFE ="https://api.sandbox.plugnotas.com.br/nfe"
    const CERTIFICADO = "https://api.sandbox.plugnotas.com.br/certificado"
    const token = '2da392a6-79d2-4304-a8b7-959572c7e44d'
    let nfes = []
    
    let Body =[{
        "idIntegracao": "A001XT1",
        "presencial": "1",
        "consumidorFinal": true,
        "natureza": "OPERAÇÃO INTERNA",
        "emitente": {
            "cpfCnpj": "08187168000160"
        },
        "destinatario": {
            "cpfCnpj": "08114280956",
            "razaoSocial": "NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL",
            "email": "contato@tecnospeed.com.br",
            "endereco": {
                "tipoLogradouro": "Avenida",
                "logradouro": "AVENIDA DUQUE DE CAXIAS",
                "numero": "882",
                "bairro": "CENTRO",
                "codigoCidade": "4115200",
                "descricaoCidade": "MARINGA",
                "estado": "PR",
                "cep": "87020025"
            }
        },
        "itens": [
            {
                "codigo": "1",
                "descricao": "NOTA FISCAL EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL",
                "ncm": "06029090",
                "cest": "0123456",
                "cfop": "5101",
                "valorUnitario": {
                    "comercial": 4.6,
                    "tributavel": 4.6
                },
                "valor": 4.6,
                "tributos": {
                    "icms": {
                        "origem": "0",
                        "cst": "00",
                        "baseCalculo": {
                            "modalidadeDeterminacao": 0,
                            "valor": 0
                        },
                        "aliquota": 0,
                        "valor": 0
                    },
                    "pis": {
                        "cst": "99",
                        "baseCalculo": {
                            "valor": 0,
                            "quantidade": 0
                        },
                        "aliquota": 0,
                        "valor": 0
                    },
                    "cofins": {
                        "cst": "07",
                        "baseCalculo": {
                            "valor": 0
                        },
                        "aliquota": 0,
                        "valor": 0
                    }
                },
                "veiculo": {
                    "tipoOperacao": 1,
                    "chassi": "9BFZH54JXG8339611",
                    "codigoCor": "04",
                    "descricaoCor": "BRANCA",
                    "potenciaMotor": 60,
                    "cilindradas": 1000,
                    "pesoLiquido": 600.0,
                    "pesoBruto": 700.0,
                    "numeroSerie": "123456",
                    "tipoCombustivel": 1,
                    "numeroMotor": "UD12345",
                    "capacidadeTracao": 200.1111,
                    "distanciaEixos": "1,5  metros",
                    "anoModelo": 2016,
                    "anoFabricacao": 2016,
                    "tipoPintura": "BRANCA",
                    "tipo": 6
                }
            }
        ],
        "pagamentos": [
            {
                "aVista": true,
                "meio": "01",
                "valor": 4.6
            }
        ],
        "responsavelTecnico": {
            "cpfCnpj": "08187168000160",
            "nome": "Tecnospeed",
            "email": "contato@tecnospeed.com.br",
            "telefone": {
                "ddd": "44",
                "numero": "30379500"
            }
        }
    }

]




    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'x-api-key':token
        },
       // body: JSON.stringify(update),
        body:JSON.stringify(Body)
        };

        console.log(Body)

        fetch(URL_ENVIO_NFE, options)
        .then(data => {
            if (!data.ok) {
                console.log(data.message)
                console.log(data.status)
             //throw Error(data.status);
             }
             return data.json();
            }).then(nfe => {
            console.log(nfe);
            // {
            //
           // title: 'A blog post by Kingsley',
            //
          //  body: 'Brilliant post on fetch API',
            //
          //  userId: 1,
            //
           // id: 101
            // };
            }).catch(e => {
            console.log(e.message);
            });
}

getToken();