const data = [
  {
    _id: "5b08299cb673d56cd38291dd",
    deleted: false,
    label: "Demo",
    tipoarea: {
      _id: "5aa043c3cb00d939b2c044b9",
      label: "Departamento",
      icono: "fa-depto",
      createdAt: "2018-03-07T19:55:47.227Z",
      updatedAt: "2018-03-07T19:55:47.227Z",
      __v: 0,
      deleted: false
    },
    empresa: {
      _id: "5b0828aeb673d5289c8291d8",
      deleted: false,
      label: "Demo",
      pais: "5a9e37a9078b9b34d40a66fc",
      moneda: "5a9ed732d75eb707a8287c50",
      vencimiento: "2018-12-31T06:00:00.000Z",
      __v: 0
    },
    centrodecosto: {
      _id: "5b0828e4b673d53e6f8291d9",
      deleted: false,
      label: "Administrativo",
      empresa: "5b0828aeb673d5289c8291d8",
      moneda: "5a9ed732d75eb707a8287c50",
      validthru: "2018-12-31T06:00:00.000Z",
      __v: 0
    },
    validthru: "2018-12-31T06:00:00.000Z",
    createdAt: "2018-05-25T15:19:56.379Z",
    updatedAt: "2018-05-28T23:46:31.623Z",
    __v: 0,
    plazajefe: {
      _id: "5b0c9432b673d5640882929b",
      sillas: [],
      deleted: false,
      area: "5b08299cb673d56cd38291dd",
      puesto: "5b0c9416b673d5005c82929a",
      label: "Gerente General - Demo",
      cantidad: 1,
      centrodecosto: "5b0828e4b673d53e6f8291d9",
      __v: 0
    },
    children: [
      {
        _id: "5b082abff3e75d2870abf006",
        deleted: false,
        label: "Desarrollo Estrategico de Negocio",
        tipoarea: {
          _id: "5aa043c3cb00d939b2c044b9",
          label: "Departamento",
          icono: "fa-depto",
          createdAt: "2018-03-07T19:55:47.227Z",
          updatedAt: "2018-03-07T19:55:47.227Z",
          __v: 0,
          deleted: false
        },
        areapadre: {
          _id: "5b08299cb673d56cd38291dd",
          deleted: false,
          label: "Demo",
          tipoarea: "5aa043c3cb00d939b2c044b9",
          empresa: "5b0828aeb673d5289c8291d8",
          centrodecosto: "5b0828e4b673d53e6f8291d9",
          validthru: "2018-12-31T06:00:00.000Z",
          createdAt: "2018-05-25T15:19:56.379Z",
          updatedAt: "2018-05-28T23:46:31.623Z",
          __v: 0,
          plazajefe: "5b0c9432b673d5640882929b"
        },
        empresa: {
          _id: "5b0828aeb673d5289c8291d8",
          deleted: false,
          label: "Demo",
          pais: "5a9e37a9078b9b34d40a66fc",
          moneda: "5a9ed732d75eb707a8287c50",
          vencimiento: "2018-12-31T06:00:00.000Z",
          __v: 0
        },
        centrodecosto: {
          _id: "5b0828e4b673d53e6f8291d9",
          deleted: false,
          label: "Administrativo",
          empresa: "5b0828aeb673d5289c8291d8",
          moneda: "5a9ed732d75eb707a8287c50",
          validthru: "2018-12-31T06:00:00.000Z",
          __v: 0
        },
        descripcion: "Desarrollo Estrategico de Negocio",
        validthru: "2018-12-31T00:00:00.000Z",
        createdAt: "2018-05-25T15:24:47.011Z",
        updatedAt: "2018-05-28T22:18:07.940Z",
        __v: 0,
        plazajefe: {
          _id: "5b084892f3e75de087abf0ad",
          sillas: ["5b088eb1f3e75d1052abf309"],
          deleted: false,
          area: "5b082abff3e75d2870abf006",
          puesto: "5b083a64f3e75df784abf078",
          label:
            "Desarrollo Estrategico de Negocio - Gerente Regional Desarrollo Estrategico de Negocio",
          cantidad: 2,
          centrodecosto: "5b0828e4b673d53e6f8291d9",
          valid_thru: "2018-12-31T00:00:00.000Z",
          createdAt: "2018-05-25T17:32:02.574Z",
          updatedAt: "2018-05-25T17:32:02.574Z",
          __v: 1
        },
        children: [
          {
            _id: "5b082abef3e75d1e54abf003",
            deleted: false,
            label: "Desarrollo Organizacional",
            tipoarea: {
              _id: "5aa043c3cb00d939b2c044b9",
              label: "Departamento",
              icono: "fa-depto",
              createdAt: "2018-03-07T19:55:47.227Z",
              updatedAt: "2018-03-07T19:55:47.227Z",
              __v: 0,
              deleted: false
            },
            areapadre: {
              _id: "5b082abff3e75d2870abf006",
              deleted: false,
              label: "Desarrollo Estrategico de Negocio",
              tipoarea: "5aa043c3cb00d939b2c044b9",
              areapadre: "5b08299cb673d56cd38291dd",
              empresa: "5b0828aeb673d5289c8291d8",
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              descripcion: "Desarrollo Estrategico de Negocio",
              validthru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T15:24:47.011Z",
              updatedAt: "2018-05-28T22:18:07.940Z",
              __v: 0,
              plazajefe: "5b084892f3e75de087abf0ad"
            },
            empresa: {
              _id: "5b0828aeb673d5289c8291d8",
              deleted: false,
              label: "Demo",
              pais: "5a9e37a9078b9b34d40a66fc",
              moneda: "5a9ed732d75eb707a8287c50",
              vencimiento: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            centrodecosto: {
              _id: "5b0828e4b673d53e6f8291d9",
              deleted: false,
              label: "Administrativo",
              empresa: "5b0828aeb673d5289c8291d8",
              moneda: "5a9ed732d75eb707a8287c50",
              validthru: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            descripcion: "Desarrollo Organizacional",
            validthru: "2018-12-31T00:00:00.000Z",
            createdAt: "2018-05-25T15:24:46.998Z",
            updatedAt: "2018-05-28T22:16:49.840Z",
            __v: 0,
            plazajefe: {
              _id: "5b084892f3e75dd6ddabf0db",
              sillas: ["5b088eb1f3e75dfe5aabf30e"],
              deleted: false,
              area: "5b082abef3e75d1e54abf003",
              puesto: "5b083a64f3e75d96acabf075",
              label:
                "Desarrollo Organizacional - Gerente Regional de Desarrollo Organizacional",
              cantidad: 1,
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              valid_thru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T17:32:02.805Z",
              updatedAt: "2018-05-25T17:32:02.805Z",
              __v: 1
            },
            children: [
              {
                _id: "5b082d6df3e75d6f31abf01d",
                deleted: false,
                label: "Desarrollo Organizacional Ciudad-Norte",
                tipoarea: {
                  _id: "5aa043c3cb00d939b2c044b9",
                  label: "Departamento",
                  icono: "fa-depto",
                  createdAt: "2018-03-07T19:55:47.227Z",
                  updatedAt: "2018-03-07T19:55:47.227Z",
                  __v: 0,
                  deleted: false
                },
                areapadre: {
                  _id: "5b082abef3e75d1e54abf003",
                  deleted: false,
                  label: "Desarrollo Organizacional",
                  tipoarea: "5aa043c3cb00d939b2c044b9",
                  areapadre: "5b082abff3e75d2870abf006",
                  empresa: "5b0828aeb673d5289c8291d8",
                  centrodecosto: "5b0828e4b673d53e6f8291d9",
                  descripcion: "Desarrollo Organizacional",
                  validthru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T15:24:46.998Z",
                  updatedAt: "2018-05-28T22:16:49.840Z",
                  __v: 0,
                  plazajefe: "5b084892f3e75dd6ddabf0db"
                },
                empresa: {
                  _id: "5b0828aeb673d5289c8291d8",
                  deleted: false,
                  label: "Demo",
                  pais: "5a9e37a9078b9b34d40a66fc",
                  moneda: "5a9ed732d75eb707a8287c50",
                  vencimiento: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                centrodecosto: {
                  _id: "5b0828e4b673d53e6f8291d9",
                  deleted: false,
                  label: "Administrativo",
                  empresa: "5b0828aeb673d5289c8291d8",
                  moneda: "5a9ed732d75eb707a8287c50",
                  validthru: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                descripcion: "Desarrollo Organizacional Ciudad-Norte",
                validthru: "2018-12-31T00:00:00.000Z",
                createdAt: "2018-05-25T15:36:13.486Z",
                updatedAt: "2018-05-28T22:22:07.726Z",
                __v: 0,
                plazajefe: {
                  _id: "5b084892f3e75db053abf0b3",
                  sillas: ["5b088eb1f3e75d8f20abf317"],
                  deleted: false,
                  area: "5b082d6df3e75d6f31abf01d",
                  puesto: "5b083a64f3e75d2e5dabf07c",
                  label:
                    "Desarrollo Organizacional Ciudad-Norte - Jefe de Desarrollo Organizacional",
                  cantidad: 1,
                  centrodecosto: "5b0828e4b673d53e6f8291d9",
                  valid_thru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T17:32:02.596Z",
                  updatedAt: "2018-05-25T17:32:02.596Z",
                  __v: 1
                },
                children: []
              },
              {
                _id: "5b082d6df3e75d3dc1abf022",
                deleted: false,
                label: "Desarrollo Organizacional Guatemala",
                tipoarea: {
                  _id: "5aa043c3cb00d939b2c044b9",
                  label: "Departamento",
                  icono: "fa-depto",
                  createdAt: "2018-03-07T19:55:47.227Z",
                  updatedAt: "2018-03-07T19:55:47.227Z",
                  __v: 0,
                  deleted: false
                },
                areapadre: {
                  _id: "5b082abef3e75d1e54abf003",
                  deleted: false,
                  label: "Desarrollo Organizacional",
                  tipoarea: "5aa043c3cb00d939b2c044b9",
                  areapadre: "5b082abff3e75d2870abf006",
                  empresa: "5b0828aeb673d5289c8291d8",
                  centrodecosto: "5b0828e4b673d53e6f8291d9",
                  descripcion: "Desarrollo Organizacional",
                  validthru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T15:24:46.998Z",
                  updatedAt: "2018-05-28T22:16:49.840Z",
                  __v: 0,
                  plazajefe: "5b084892f3e75dd6ddabf0db"
                },
                empresa: {
                  _id: "5b0828aeb673d5289c8291d8",
                  deleted: false,
                  label: "Demo",
                  pais: "5a9e37a9078b9b34d40a66fc",
                  moneda: "5a9ed732d75eb707a8287c50",
                  vencimiento: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                centrodecosto: {
                  _id: "5b0828e4b673d53e6f8291d9",
                  deleted: false,
                  label: "Administrativo",
                  empresa: "5b0828aeb673d5289c8291d8",
                  moneda: "5a9ed732d75eb707a8287c50",
                  validthru: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                descripcion: "Desarrollo Organizacional Guatemala",
                validthru: "2018-12-31T00:00:00.000Z",
                createdAt: "2018-05-25T15:36:13.534Z",
                updatedAt: "2018-05-28T22:23:36.106Z",
                __v: 0,
                plazajefe: {
                  _id: "5b084892f3e75d6f30abf0b5",
                  sillas: ["5b088eb1f3e75d21bcabf318"],
                  deleted: false,
                  area: "5b082d6df3e75d3dc1abf022",
                  puesto: "5b083a64f3e75d2e5dabf07c",
                  label:
                    "Desarrollo Organizacional Guatemala - Jefe de Desarrollo Organizacional",
                  cantidad: 1,
                  centrodecosto: "5b0828e4b673d53e6f8291d9",
                  valid_thru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T17:32:02.609Z",
                  updatedAt: "2018-05-25T17:32:02.609Z",
                  __v: 1
                },
                children: [
                  {
                    _id: "5b082d6df3e75d2f3aabf04b",
                    deleted: false,
                    label: "Servicios",
                    tipoarea: {
                      _id: "5aa043c3cb00d939b2c044b9",
                      label: "Departamento",
                      icono: "fa-depto",
                      createdAt: "2018-03-07T19:55:47.227Z",
                      updatedAt: "2018-03-07T19:55:47.227Z",
                      __v: 0,
                      deleted: false
                    },
                    areapadre: {
                      _id: "5b082d6df3e75d3dc1abf022",
                      deleted: false,
                      label: "Desarrollo Organizacional Guatemala",
                      tipoarea: "5aa043c3cb00d939b2c044b9",
                      areapadre: "5b082abef3e75d1e54abf003",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b0828e4b673d53e6f8291d9",
                      descripcion: "Desarrollo Organizacional Guatemala",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:36:13.534Z",
                      updatedAt: "2018-05-28T22:23:36.106Z",
                      __v: 0,
                      plazajefe: "5b084892f3e75d6f30abf0b5"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b0828e4b673d53e6f8291d9",
                      deleted: false,
                      label: "Administrativo",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Servicios",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:36:13.820Z",
                    updatedAt: "2018-05-25T16:03:18.252Z",
                    __v: 0,
                    children: []
                  }
                ]
              },
              {
                _id: "5b082d6df3e75d037cabf027",
                deleted: false,
                label: "Desarrollo Organizacional Ciudad-Sur",
                tipoarea: {
                  _id: "5aa043c3cb00d939b2c044b9",
                  label: "Departamento",
                  icono: "fa-depto",
                  createdAt: "2018-03-07T19:55:47.227Z",
                  updatedAt: "2018-03-07T19:55:47.227Z",
                  __v: 0,
                  deleted: false
                },
                areapadre: {
                  _id: "5b082abef3e75d1e54abf003",
                  deleted: false,
                  label: "Desarrollo Organizacional",
                  tipoarea: "5aa043c3cb00d939b2c044b9",
                  areapadre: "5b082abff3e75d2870abf006",
                  empresa: "5b0828aeb673d5289c8291d8",
                  centrodecosto: "5b0828e4b673d53e6f8291d9",
                  descripcion: "Desarrollo Organizacional",
                  validthru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T15:24:46.998Z",
                  updatedAt: "2018-05-28T22:16:49.840Z",
                  __v: 0,
                  plazajefe: "5b084892f3e75dd6ddabf0db"
                },
                empresa: {
                  _id: "5b0828aeb673d5289c8291d8",
                  deleted: false,
                  label: "Demo",
                  pais: "5a9e37a9078b9b34d40a66fc",
                  moneda: "5a9ed732d75eb707a8287c50",
                  vencimiento: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                centrodecosto: {
                  _id: "5b0828e4b673d53e6f8291d9",
                  deleted: false,
                  label: "Administrativo",
                  empresa: "5b0828aeb673d5289c8291d8",
                  moneda: "5a9ed732d75eb707a8287c50",
                  validthru: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                descripcion: "Desarrollo Organizacional Ciudad-Sur",
                validthru: "2018-12-31T00:00:00.000Z",
                createdAt: "2018-05-25T15:36:13.567Z",
                updatedAt: "2018-05-29T23:34:34.628Z",
                __v: 0,
                plazajefe: {
                  _id: "5b084892f3e75d4104abf0d4",
                  sillas: ["5b088eb4f3e75d4076abf35d"],
                  deleted: false,
                  area: "5b082d6df3e75d037cabf027",
                  puesto: "5b083a64f3e75da725abf05f",
                  label:
                    "Desarrollo Organizacional Ciudad-Sur - Coordinador Administrativo de Desarrollo Organizacional",
                  cantidad: 1,
                  centrodecosto: "5b0828e4b673d53e6f8291d9",
                  valid_thru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T17:32:02.768Z",
                  updatedAt: "2018-05-25T17:32:02.768Z",
                  __v: 1
                },
                children: []
              }
            ]
          },
          {
            _id: "5b082d6df3e75d7d95abf01c",
            deleted: false,
            label: "Cultura de Servicio",
            tipoarea: {
              _id: "5aa043c3cb00d939b2c044b9",
              label: "Departamento",
              icono: "fa-depto",
              createdAt: "2018-03-07T19:55:47.227Z",
              updatedAt: "2018-03-07T19:55:47.227Z",
              __v: 0,
              deleted: false
            },
            areapadre: {
              _id: "5b082abff3e75d2870abf006",
              deleted: false,
              label: "Desarrollo Estrategico de Negocio",
              tipoarea: "5aa043c3cb00d939b2c044b9",
              areapadre: "5b08299cb673d56cd38291dd",
              empresa: "5b0828aeb673d5289c8291d8",
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              descripcion: "Desarrollo Estrategico de Negocio",
              validthru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T15:24:47.011Z",
              updatedAt: "2018-05-28T22:18:07.940Z",
              __v: 0,
              plazajefe: "5b084892f3e75de087abf0ad"
            },
            empresa: {
              _id: "5b0828aeb673d5289c8291d8",
              deleted: false,
              label: "Demo",
              pais: "5a9e37a9078b9b34d40a66fc",
              moneda: "5a9ed732d75eb707a8287c50",
              vencimiento: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            centrodecosto: {
              _id: "5b0828e4b673d53e6f8291d9",
              deleted: false,
              label: "Administrativo",
              empresa: "5b0828aeb673d5289c8291d8",
              moneda: "5a9ed732d75eb707a8287c50",
              validthru: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            descripcion: "Cultura de Servicio",
            validthru: "2018-12-31T00:00:00.000Z",
            createdAt: "2018-05-25T15:36:13.472Z",
            updatedAt: "2018-05-28T22:21:39.544Z",
            __v: 0,
            plazajefe: {
              _id: "5b084892f3e75dafe0abf0b0",
              sillas: ["5b088eb1f3e75d3df0abf30a"],
              deleted: false,
              area: "5b082d6df3e75d7d95abf01c",
              puesto: "5b083a64f3e75d82ababf074",
              label:
                "Cultura de Servicio - Gerente Regional de Cultura de Servicio",
              cantidad: 2,
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              valid_thru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T17:32:02.584Z",
              updatedAt: "2018-05-25T17:32:02.584Z",
              __v: 1
            },
            children: []
          },
          {
            _id: "5b082d6df3e75d674aabf023",
            deleted: false,
            label: "Desarrollo Organizacional Xela",
            tipoarea: {
              _id: "5aa043c3cb00d939b2c044b9",
              label: "Departamento",
              icono: "fa-depto",
              createdAt: "2018-03-07T19:55:47.227Z",
              updatedAt: "2018-03-07T19:55:47.227Z",
              __v: 0,
              deleted: false
            },
            areapadre: {
              _id: "5b082abff3e75d2870abf006",
              deleted: false,
              label: "Desarrollo Estrategico de Negocio",
              tipoarea: "5aa043c3cb00d939b2c044b9",
              areapadre: "5b08299cb673d56cd38291dd",
              empresa: "5b0828aeb673d5289c8291d8",
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              descripcion: "Desarrollo Estrategico de Negocio",
              validthru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T15:24:47.011Z",
              updatedAt: "2018-05-28T22:18:07.940Z",
              __v: 0,
              plazajefe: "5b084892f3e75de087abf0ad"
            },
            empresa: {
              _id: "5b0828aeb673d5289c8291d8",
              deleted: false,
              label: "Demo",
              pais: "5a9e37a9078b9b34d40a66fc",
              moneda: "5a9ed732d75eb707a8287c50",
              vencimiento: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            centrodecosto: {
              _id: "5b0828e4b673d53e6f8291d9",
              deleted: false,
              label: "Administrativo",
              empresa: "5b0828aeb673d5289c8291d8",
              moneda: "5a9ed732d75eb707a8287c50",
              validthru: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            descripcion: "Desarrollo Organizacional Xela",
            validthru: "2018-12-31T00:00:00.000Z",
            createdAt: "2018-05-25T15:36:13.541Z",
            updatedAt: "2018-05-28T22:23:20.428Z",
            __v: 0,
            plazajefe: {
              _id: "5b084892f3e75d013cabf0b2",
              sillas: ["5b088eb1f3e75d3534abf316"],
              deleted: false,
              area: "5b082d6df3e75d674aabf023",
              puesto: "5b083a64f3e75d2e5dabf07c",
              label:
                "Desarrollo Organizacional Xela - Jefe de Desarrollo Organizacional",
              cantidad: 1,
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              valid_thru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T17:32:02.592Z",
              updatedAt: "2018-05-25T17:32:02.592Z",
              __v: 1
            },
            children: []
          },
          {
            _id: "5b082d6df3e75d08eaabf024",
            deleted: false,
            label: "Desarrollo Organizacional Peten",
            tipoarea: {
              _id: "5aa043c3cb00d939b2c044b9",
              label: "Departamento",
              icono: "fa-depto",
              createdAt: "2018-03-07T19:55:47.227Z",
              updatedAt: "2018-03-07T19:55:47.227Z",
              __v: 0,
              deleted: false
            },
            areapadre: {
              _id: "5b082abff3e75d2870abf006",
              deleted: false,
              label: "Desarrollo Estrategico de Negocio",
              tipoarea: "5aa043c3cb00d939b2c044b9",
              areapadre: "5b08299cb673d56cd38291dd",
              empresa: "5b0828aeb673d5289c8291d8",
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              descripcion: "Desarrollo Estrategico de Negocio",
              validthru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T15:24:47.011Z",
              updatedAt: "2018-05-28T22:18:07.940Z",
              __v: 0,
              plazajefe: "5b084892f3e75de087abf0ad"
            },
            empresa: {
              _id: "5b0828aeb673d5289c8291d8",
              deleted: false,
              label: "Demo",
              pais: "5a9e37a9078b9b34d40a66fc",
              moneda: "5a9ed732d75eb707a8287c50",
              vencimiento: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            centrodecosto: {
              _id: "5b0828e4b673d53e6f8291d9",
              deleted: false,
              label: "Administrativo",
              empresa: "5b0828aeb673d5289c8291d8",
              moneda: "5a9ed732d75eb707a8287c50",
              validthru: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            descripcion: "Desarrollo Organizacional Peten",
            validthru: "2018-12-31T00:00:00.000Z",
            createdAt: "2018-05-25T15:36:13.554Z",
            updatedAt: "2018-05-28T22:24:15.226Z",
            __v: 0,
            plazajefe: {
              _id: "5b084892f3e75d7bc6abf0ae",
              sillas: ["5b088eb1f3e75df175abf30b"],
              deleted: false,
              area: "5b082d6df3e75d08eaabf024",
              puesto: "5b083a64f3e75d7804abf06d",
              label:
                "Desarrollo Organizacional Peten - Gerente de Desarrollo Organizacional y SAC",
              cantidad: 1,
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              valid_thru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T17:32:02.576Z",
              updatedAt: "2018-05-25T17:32:02.576Z",
              __v: 1
            },
            children: []
          },
          {
            _id: "5b082d6df3e75d15a8abf026",
            deleted: false,
            label: "Desarrollo Organizacional Quiche",
            tipoarea: {
              _id: "5aa043c3cb00d939b2c044b9",
              label: "Departamento",
              icono: "fa-depto",
              createdAt: "2018-03-07T19:55:47.227Z",
              updatedAt: "2018-03-07T19:55:47.227Z",
              __v: 0,
              deleted: false
            },
            areapadre: {
              _id: "5b082abff3e75d2870abf006",
              deleted: false,
              label: "Desarrollo Estrategico de Negocio",
              tipoarea: "5aa043c3cb00d939b2c044b9",
              areapadre: "5b08299cb673d56cd38291dd",
              empresa: "5b0828aeb673d5289c8291d8",
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              descripcion: "Desarrollo Estrategico de Negocio",
              validthru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T15:24:47.011Z",
              updatedAt: "2018-05-28T22:18:07.940Z",
              __v: 0,
              plazajefe: "5b084892f3e75de087abf0ad"
            },
            empresa: {
              _id: "5b0828aeb673d5289c8291d8",
              deleted: false,
              label: "Demo",
              pais: "5a9e37a9078b9b34d40a66fc",
              moneda: "5a9ed732d75eb707a8287c50",
              vencimiento: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            centrodecosto: {
              _id: "5b0828e4b673d53e6f8291d9",
              deleted: false,
              label: "Administrativo",
              empresa: "5b0828aeb673d5289c8291d8",
              moneda: "5a9ed732d75eb707a8287c50",
              validthru: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            descripcion: "Desarrollo Organizacional Quiche",
            validthru: "2018-12-31T00:00:00.000Z",
            createdAt: "2018-05-25T15:36:13.567Z",
            updatedAt: "2018-05-29T14:50:13.104Z",
            __v: 0,
            plazajefe: {
              _id: "5b084892f3e75df2ceabf0e0",
              sillas: ["5b088eb1f3e75d2ae7abf305"],
              deleted: false,
              area: "5b082d6df3e75d15a8abf026",
              puesto: "5b083a64f3e75da725abf05f",
              label:
                "Desarrollo Organizacional Quiche - Coordinador de Desarrollo Organizacional",
              cantidad: 1,
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              valid_thru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T17:32:02.837Z",
              updatedAt: "2018-05-25T17:32:02.837Z",
              __v: 1
            },
            children: []
          },
          {
            _id: "5b082d6df3e75db7e9abf028",
            deleted: false,
            label: "Desarrollo Organizacional Antigua",
            tipoarea: {
              _id: "5aa043c3cb00d939b2c044b9",
              label: "Departamento",
              icono: "fa-depto",
              createdAt: "2018-03-07T19:55:47.227Z",
              updatedAt: "2018-03-07T19:55:47.227Z",
              __v: 0,
              deleted: false
            },
            areapadre: {
              _id: "5b082abff3e75d2870abf006",
              deleted: false,
              label: "Desarrollo Estrategico de Negocio",
              tipoarea: "5aa043c3cb00d939b2c044b9",
              areapadre: "5b08299cb673d56cd38291dd",
              empresa: "5b0828aeb673d5289c8291d8",
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              descripcion: "Desarrollo Estrategico de Negocio",
              validthru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T15:24:47.011Z",
              updatedAt: "2018-05-28T22:18:07.940Z",
              __v: 0,
              plazajefe: "5b084892f3e75de087abf0ad"
            },
            empresa: {
              _id: "5b0828aeb673d5289c8291d8",
              deleted: false,
              label: "Demo",
              pais: "5a9e37a9078b9b34d40a66fc",
              moneda: "5a9ed732d75eb707a8287c50",
              vencimiento: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            centrodecosto: {
              _id: "5b0828e4b673d53e6f8291d9",
              deleted: false,
              label: "Administrativo",
              empresa: "5b0828aeb673d5289c8291d8",
              moneda: "5a9ed732d75eb707a8287c50",
              validthru: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            descripcion: "Desarrollo Organizacional Antigua",
            validthru: "2018-12-31T00:00:00.000Z",
            createdAt: "2018-05-25T15:36:13.578Z",
            updatedAt: "2018-05-29T14:53:48.034Z",
            __v: 0,
            plazajefe: {
              _id: "5b084892f3e75dde7aabf0b6",
              sillas: ["5b088eb1f3e75d680fabf319"],
              deleted: false,
              area: "5b082d6df3e75db7e9abf028",
              puesto: "5b083a64f3e75d2e5dabf07c",
              label:
                "Desarrollo Organizacional Antigua - Jefe de Desarrollo Organizacional",
              cantidad: 1,
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              valid_thru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T17:32:02.618Z",
              updatedAt: "2018-05-25T17:32:02.618Z",
              __v: 1
            },
            children: []
          },
          {
            _id: "5b082d6df3e75d4208abf029",
            deleted: false,
            label: "Desarrollo Organizacional Regional",
            tipoarea: {
              _id: "5aa043c3cb00d939b2c044b9",
              label: "Departamento",
              icono: "fa-depto",
              createdAt: "2018-03-07T19:55:47.227Z",
              updatedAt: "2018-03-07T19:55:47.227Z",
              __v: 0,
              deleted: false
            },
            areapadre: {
              _id: "5b082abff3e75d2870abf006",
              deleted: false,
              label: "Desarrollo Estrategico de Negocio",
              tipoarea: "5aa043c3cb00d939b2c044b9",
              areapadre: "5b08299cb673d56cd38291dd",
              empresa: "5b0828aeb673d5289c8291d8",
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              descripcion: "Desarrollo Estrategico de Negocio",
              validthru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T15:24:47.011Z",
              updatedAt: "2018-05-28T22:18:07.940Z",
              __v: 0,
              plazajefe: "5b084892f3e75de087abf0ad"
            },
            empresa: {
              _id: "5b0828aeb673d5289c8291d8",
              deleted: false,
              label: "Demo",
              pais: "5a9e37a9078b9b34d40a66fc",
              moneda: "5a9ed732d75eb707a8287c50",
              vencimiento: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            centrodecosto: {
              _id: "5b0828e4b673d53e6f8291d9",
              deleted: false,
              label: "Administrativo",
              empresa: "5b0828aeb673d5289c8291d8",
              moneda: "5a9ed732d75eb707a8287c50",
              validthru: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            descripcion: "Desarrollo Organizacional Regional",
            validthru: "2018-12-31T00:00:00.000Z",
            createdAt: "2018-05-25T15:36:13.591Z",
            updatedAt: "2018-05-29T14:58:13.821Z",
            __v: 0,
            plazajefe: {
              _id: "5b084892f3e75d73b4abf096",
              sillas: ["5b088eb4f3e75db7e7abf35a", "5b08a0906416d85cd09343e8"],
              deleted: false,
              area: "5b082d6df3e75d4208abf029",
              puesto: "5b083a64f3e75d7663abf065",
              label:
                "Desarrollo Organizacional Regional - Coordinador Regional de Desarrollo Organizacional",
              cantidad: 1,
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              valid_thru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T17:32:02.397Z",
              updatedAt: "2018-05-25T17:32:02.397Z",
              __v: 1
            },
            children: []
          },
          {
            _id: "5b082d6df3e75d31ecabf02a",
            deleted: false,
            label: "Desarrollo Organizacional Santa Rosa",
            tipoarea: {
              _id: "5aa043c3cb00d939b2c044b9",
              label: "Departamento",
              icono: "fa-depto",
              createdAt: "2018-03-07T19:55:47.227Z",
              updatedAt: "2018-03-07T19:55:47.227Z",
              __v: 0,
              deleted: false
            },
            areapadre: {
              _id: "5b082abff3e75d2870abf006",
              deleted: false,
              label: "Desarrollo Estrategico de Negocio",
              tipoarea: "5aa043c3cb00d939b2c044b9",
              areapadre: "5b08299cb673d56cd38291dd",
              empresa: "5b0828aeb673d5289c8291d8",
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              descripcion: "Desarrollo Estrategico de Negocio",
              validthru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T15:24:47.011Z",
              updatedAt: "2018-05-28T22:18:07.940Z",
              __v: 0,
              plazajefe: "5b084892f3e75de087abf0ad"
            },
            empresa: {
              _id: "5b0828aeb673d5289c8291d8",
              deleted: false,
              label: "Demo",
              pais: "5a9e37a9078b9b34d40a66fc",
              moneda: "5a9ed732d75eb707a8287c50",
              vencimiento: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            centrodecosto: {
              _id: "5b0828e4b673d53e6f8291d9",
              deleted: false,
              label: "Administrativo",
              empresa: "5b0828aeb673d5289c8291d8",
              moneda: "5a9ed732d75eb707a8287c50",
              validthru: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            descripcion: "Desarrollo Organizacional Santa Rosa",
            validthru: "2018-12-31T00:00:00.000Z",
            createdAt: "2018-05-25T15:36:13.596Z",
            updatedAt: "2018-05-29T14:54:29.946Z",
            __v: 0,
            plazajefe: {
              _id: "5b084892f3e75dc7a6abf0d5",
              sillas: ["5b088eb4f3e75d5af5abf35f"],
              deleted: false,
              area: "5b082d6df3e75d31ecabf02a",
              puesto: "5b083a64f3e75d7f93abf062",
              label:
                "Desarrollo Organizacional Santa Rosa - Coordinador de Desarrollo Organizacional",
              cantidad: 1,
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              valid_thru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T17:32:02.779Z",
              updatedAt: "2018-05-25T17:32:02.779Z",
              __v: 1
            },
            children: []
          },
          {
            _id: "5b082d6df3e75d1ebcabf039",
            deleted: false,
            label: "Organización & Metodos",
            tipoarea: {
              _id: "5aa043c3cb00d939b2c044b9",
              label: "Departamento",
              icono: "fa-depto",
              createdAt: "2018-03-07T19:55:47.227Z",
              updatedAt: "2018-03-07T19:55:47.227Z",
              __v: 0,
              deleted: false
            },
            areapadre: {
              _id: "5b082abff3e75d2870abf006",
              deleted: false,
              label: "Desarrollo Estrategico de Negocio",
              tipoarea: "5aa043c3cb00d939b2c044b9",
              areapadre: "5b08299cb673d56cd38291dd",
              empresa: "5b0828aeb673d5289c8291d8",
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              descripcion: "Desarrollo Estrategico de Negocio",
              validthru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T15:24:47.011Z",
              updatedAt: "2018-05-28T22:18:07.940Z",
              __v: 0,
              plazajefe: "5b084892f3e75de087abf0ad"
            },
            empresa: {
              _id: "5b0828aeb673d5289c8291d8",
              deleted: false,
              label: "Demo",
              pais: "5a9e37a9078b9b34d40a66fc",
              moneda: "5a9ed732d75eb707a8287c50",
              vencimiento: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            centrodecosto: {
              _id: "5b0828e4b673d53e6f8291d9",
              deleted: false,
              label: "Administrativo",
              empresa: "5b0828aeb673d5289c8291d8",
              moneda: "5a9ed732d75eb707a8287c50",
              validthru: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            descripcion: "Organización & Metodos",
            validthru: "2018-12-31T00:00:00.000Z",
            createdAt: "2018-05-25T15:36:13.703Z",
            updatedAt: "2018-05-29T14:55:20.833Z",
            __v: 0,
            plazajefe: {
              _id: "5b084892f3e75dfb15abf0b1",
              sillas: ["5b088eb1f3e75dd9adabf30c"],
              deleted: false,
              area: "5b082d6df3e75d1ebcabf039",
              puesto: "5b083a64f3e75d0228abf076",
              label:
                "Organización & Metodos - Gerente Regional de Org y Metodos",
              cantidad: 1,
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              valid_thru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T17:32:02.584Z",
              updatedAt: "2018-05-25T17:32:02.584Z",
              __v: 1
            },
            children: []
          },
          {
            _id: "5b082d6df3e75d02f5abf04a",
            deleted: false,
            label: "Servicio al Cliente",
            tipoarea: {
              _id: "5aa043c3cb00d939b2c044b9",
              label: "Departamento",
              icono: "fa-depto",
              createdAt: "2018-03-07T19:55:47.227Z",
              updatedAt: "2018-03-07T19:55:47.227Z",
              __v: 0,
              deleted: false
            },
            areapadre: {
              _id: "5b082abff3e75d2870abf006",
              deleted: false,
              label: "Desarrollo Estrategico de Negocio",
              tipoarea: "5aa043c3cb00d939b2c044b9",
              areapadre: "5b08299cb673d56cd38291dd",
              empresa: "5b0828aeb673d5289c8291d8",
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              descripcion: "Desarrollo Estrategico de Negocio",
              validthru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T15:24:47.011Z",
              updatedAt: "2018-05-28T22:18:07.940Z",
              __v: 0,
              plazajefe: "5b084892f3e75de087abf0ad"
            },
            empresa: {
              _id: "5b0828aeb673d5289c8291d8",
              deleted: false,
              label: "Demo",
              pais: "5a9e37a9078b9b34d40a66fc",
              moneda: "5a9ed732d75eb707a8287c50",
              vencimiento: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            centrodecosto: {
              _id: "5b0828e4b673d53e6f8291d9",
              deleted: false,
              label: "Administrativo",
              empresa: "5b0828aeb673d5289c8291d8",
              moneda: "5a9ed732d75eb707a8287c50",
              validthru: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            descripcion: "Servicio al Cliente",
            validthru: "2018-12-31T00:00:00.000Z",
            createdAt: "2018-05-25T15:36:13.818Z",
            updatedAt: "2018-05-29T14:55:44.032Z",
            __v: 0,
            plazajefe: {
              _id: "5b084892f3e75d59a9abf0da",
              sillas: ["5b088eb4f3e75d0b7dabf32c"],
              deleted: false,
              area: "5b082d6df3e75d02f5abf04a",
              puesto: "5b083a64f3e75d73e0abf083",
              label:
                "Servicio al Cliente - Jefe Regional de Servicio al Cliente",
              cantidad: 2,
              centrodecosto: "5b0828e4b673d53e6f8291d9",
              valid_thru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T17:32:02.803Z",
              updatedAt: "2018-05-25T17:32:02.803Z",
              __v: 1
            },
            children: []
          }
        ]
      },
      {
        _id: "5b082abff3e75d7f78abf00a",
        deleted: false,
        label: "Operaciones",
        tipoarea: {
          _id: "5aa043c3cb00d939b2c044b9",
          label: "Departamento",
          icono: "fa-depto",
          createdAt: "2018-03-07T19:55:47.227Z",
          updatedAt: "2018-03-07T19:55:47.227Z",
          __v: 0,
          deleted: false
        },
        areapadre: {
          _id: "5b08299cb673d56cd38291dd",
          deleted: false,
          label: "Demo",
          tipoarea: "5aa043c3cb00d939b2c044b9",
          empresa: "5b0828aeb673d5289c8291d8",
          centrodecosto: "5b0828e4b673d53e6f8291d9",
          validthru: "2018-12-31T06:00:00.000Z",
          createdAt: "2018-05-25T15:19:56.379Z",
          updatedAt: "2018-05-28T23:46:31.623Z",
          __v: 0,
          plazajefe: "5b0c9432b673d5640882929b"
        },
        empresa: {
          _id: "5b0828aeb673d5289c8291d8",
          deleted: false,
          label: "Demo",
          pais: "5a9e37a9078b9b34d40a66fc",
          moneda: "5a9ed732d75eb707a8287c50",
          vencimiento: "2018-12-31T06:00:00.000Z",
          __v: 0
        },
        centrodecosto: {
          _id: "5b08290cb673d594a18291da",
          deleted: false,
          label: "Operaciones",
          empresa: "5b0828aeb673d5289c8291d8",
          moneda: "5a9ed732d75eb707a8287c50",
          validthru: "2018-12-31T06:00:00.000Z",
          __v: 0
        },
        descripcion: "Operaciones",
        validthru: "2018-12-31T00:00:00.000Z",
        createdAt: "2018-05-25T15:24:47.038Z",
        updatedAt: "2018-05-28T23:52:27.138Z",
        __v: 0,
        plazajefe: {
          _id: "5b084892f3e75d87caabf0dc",
          sillas: ["5b088eb1f3e75d7687abf30f", "5b08a0906416d81f0e9343eb"],
          deleted: false,
          area: "5b082abff3e75d7f78abf00a",
          puesto: "5b083a64f3e75df22eabf06f",
          label: "Operaciones - Gerente de Operaciones comerciales",
          cantidad: 1,
          centrodecosto: "5b08290cb673d594a18291da",
          valid_thru: "2018-12-31T00:00:00.000Z",
          createdAt: "2018-05-25T17:32:02.813Z",
          updatedAt: "2018-05-25T17:32:02.813Z",
          __v: 1
        },
        children: [
          {
            _id: "5b082d6df3e75dc045abf02e",
            deleted: false,
            label: "Planta",
            tipoarea: {
              _id: "5aa043c3cb00d939b2c044b9",
              label: "Departamento",
              icono: "fa-depto",
              createdAt: "2018-03-07T19:55:47.227Z",
              updatedAt: "2018-03-07T19:55:47.227Z",
              __v: 0,
              deleted: false
            },
            areapadre: {
              _id: "5b082abff3e75d7f78abf00a",
              deleted: false,
              label: "Operaciones",
              tipoarea: "5aa043c3cb00d939b2c044b9",
              areapadre: "5b08299cb673d56cd38291dd",
              empresa: "5b0828aeb673d5289c8291d8",
              centrodecosto: "5b08290cb673d594a18291da",
              descripcion: "Operaciones",
              validthru: "2018-12-31T00:00:00.000Z",
              createdAt: "2018-05-25T15:24:47.038Z",
              updatedAt: "2018-05-28T23:52:27.138Z",
              __v: 0,
              plazajefe: "5b084892f3e75d87caabf0dc"
            },
            empresa: {
              _id: "5b0828aeb673d5289c8291d8",
              deleted: false,
              label: "Demo",
              pais: "5a9e37a9078b9b34d40a66fc",
              moneda: "5a9ed732d75eb707a8287c50",
              vencimiento: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            centrodecosto: {
              _id: "5b08290cb673d594a18291da",
              deleted: false,
              label: "Operaciones",
              empresa: "5b0828aeb673d5289c8291d8",
              moneda: "5a9ed732d75eb707a8287c50",
              validthru: "2018-12-31T06:00:00.000Z",
              __v: 0
            },
            descripcion: "Planta",
            validthru: "2018-12-31T00:00:00.000Z",
            createdAt: "2018-05-25T15:36:13.629Z",
            updatedAt: "2018-05-29T15:21:48.257Z",
            __v: 0,
            plazajefe: {
              _id: "5b0d6ffab673d56d5682929d",
              sillas: [],
              deleted: false,
              area: "5b082d6df3e75dc045abf02e",
              puesto: "5b0d6fd9b673d55fbf82929c",
              label: "Gerente de Planta - Planta",
              cantidad: 1,
              centrodecosto: "5b08290cb673d594a18291da",
              __v: 0
            },
            children: [
              {
                _id: "5b082abff3e75d7277abf00c",
                deleted: false,
                label: "Salud",
                tipoarea: {
                  _id: "5aa043c3cb00d939b2c044b9",
                  label: "Departamento",
                  icono: "fa-depto",
                  createdAt: "2018-03-07T19:55:47.227Z",
                  updatedAt: "2018-03-07T19:55:47.227Z",
                  __v: 0,
                  deleted: false
                },
                areapadre: {
                  _id: "5b082d6df3e75dc045abf02e",
                  deleted: false,
                  label: "Planta",
                  tipoarea: "5aa043c3cb00d939b2c044b9",
                  areapadre: "5b082abff3e75d7f78abf00a",
                  empresa: "5b0828aeb673d5289c8291d8",
                  centrodecosto: "5b08290cb673d594a18291da",
                  descripcion: "Planta",
                  validthru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T15:36:13.629Z",
                  updatedAt: "2018-05-29T15:21:48.257Z",
                  __v: 0,
                  plazajefe: "5b0d6ffab673d56d5682929d"
                },
                empresa: {
                  _id: "5b0828aeb673d5289c8291d8",
                  deleted: false,
                  label: "Demo",
                  pais: "5a9e37a9078b9b34d40a66fc",
                  moneda: "5a9ed732d75eb707a8287c50",
                  vencimiento: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                centrodecosto: {
                  _id: "5b08290cb673d594a18291da",
                  deleted: false,
                  label: "Operaciones",
                  empresa: "5b0828aeb673d5289c8291d8",
                  moneda: "5a9ed732d75eb707a8287c50",
                  validthru: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                descripcion: "Salud",
                validthru: "2018-12-31T00:00:00.000Z",
                createdAt: "2018-05-25T15:24:47.049Z",
                updatedAt: "2018-05-29T15:25:33.312Z",
                __v: 0,
                plazajefe: {
                  _id: "5b0d70dbb673d539ce82929f",
                  sillas: ["5b088eb4f3e75d3acdabf340"],
                  deleted: false,
                  area: "5b082abff3e75d7277abf00c",
                  puesto: "5b0d70c2b673d571dc82929e",
                  label: "Salud - Gerente Departamento de Salud",
                  cantidad: 2,
                  centrodecosto: "5b08290cb673d594a18291da",
                  __v: 1
                },
                children: [
                  {
                    _id: "5b082d6df3e75d187babf01e",
                    deleted: false,
                    label: "Sala de Emergencia",
                    tipoarea: {
                      _id: "5aa043c3cb00d939b2c044b9",
                      label: "Departamento",
                      icono: "fa-depto",
                      createdAt: "2018-03-07T19:55:47.227Z",
                      updatedAt: "2018-03-07T19:55:47.227Z",
                      __v: 0,
                      deleted: false
                    },
                    areapadre: {
                      _id: "5b082abff3e75d7277abf00c",
                      deleted: false,
                      label: "Salud",
                      tipoarea: "5aa043c3cb00d939b2c044b9",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Salud",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:24:47.049Z",
                      updatedAt: "2018-05-29T15:25:33.312Z",
                      __v: 0,
                      plazajefe: "5b0d70dbb673d539ce82929f"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Sala de Emergencia",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:36:13.495Z",
                    updatedAt: "2018-05-29T15:59:18.019Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b084892f3e75d4c27abf0c7",
                      sillas: [
                        "5b088eb4f3e75d3d03abf32b",
                        "5b088eb4f3e75d80a2abf345"
                      ],
                      deleted: false,
                      area: "5b082d6df3e75d187babf01e",
                      puesto: "5b083a64f3e75d8f72abf079",
                      label: "Sala de Emergencia - Jefe Sala Emergencia",
                      cantidad: 2,
                      centrodecosto: "5b08290cb673d594a18291da",
                      valid_thru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T17:32:02.697Z",
                      updatedAt: "2018-05-25T17:32:02.697Z",
                      __v: 2
                    },
                    children: []
                  },
                  {
                    _id: "5b082d6df3e75d827babf036",
                    deleted: false,
                    label: "Clinica",
                    tipoarea: {
                      _id: "5aa043c3cb00d939b2c044b9",
                      label: "Departamento",
                      icono: "fa-depto",
                      createdAt: "2018-03-07T19:55:47.227Z",
                      updatedAt: "2018-03-07T19:55:47.227Z",
                      __v: 0,
                      deleted: false
                    },
                    areapadre: {
                      _id: "5b082abff3e75d7277abf00c",
                      deleted: false,
                      label: "Salud",
                      tipoarea: "5aa043c3cb00d939b2c044b9",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Salud",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:24:47.049Z",
                      updatedAt: "2018-05-29T15:25:33.312Z",
                      __v: 0,
                      plazajefe: "5b0d70dbb673d539ce82929f"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Clinica",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:36:13.683Z",
                    updatedAt: "2018-05-29T16:01:47.285Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b084892f3e75dd7d3abf09a",
                      sillas: ["5b088eb0f3e75d6ec7abf2e7"],
                      deleted: false,
                      area: "5b082d6df3e75d827babf036",
                      puesto: "5b0d7a59b673d51add8292a3",
                      label: "Clinica - Jefe de Clinica",
                      cantidad: 2,
                      centrodecosto: "5b08290cb673d594a18291da",
                      valid_thru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T17:32:02.439Z",
                      updatedAt: "2018-05-25T17:32:02.439Z",
                      __v: 1
                    },
                    children: []
                  },
                  {
                    _id: "5b082d6df3e75d8b37abf046",
                    deleted: false,
                    label: "Bodega Medicamento",
                    tipoarea: {
                      _id: "5b08296fb673d5360a8291dc",
                      deleted: false,
                      label: "Bodega",
                      createdAt: "2018-05-25T15:19:11.530Z",
                      updatedAt: "2018-05-25T15:33:54.504Z",
                      __v: 0,
                      icono: "fa-warehouse"
                    },
                    areapadre: {
                      _id: "5b082abff3e75d7277abf00c",
                      deleted: false,
                      label: "Salud",
                      tipoarea: "5aa043c3cb00d939b2c044b9",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Salud",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:24:47.049Z",
                      updatedAt: "2018-05-29T15:25:33.312Z",
                      __v: 0,
                      plazajefe: "5b0d70dbb673d539ce82929f"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Bodega Medicamento",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:36:13.790Z",
                    updatedAt: "2018-05-29T16:02:40.247Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b084892f3e75dffeaabf0ac",
                      sillas: ["5b088eb1f3e75d3c7cabf2fe"],
                      deleted: false,
                      area: "5b082d6df3e75d8b37abf046",
                      puesto: "5b083a64f3e75de030abf06b",
                      label:
                        "Bodega Medicamento - Encargado de Bodega y Ejecutivo de Ventas",
                      cantidad: 1,
                      centrodecosto: "5b08290cb673d594a18291da",
                      valid_thru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T17:32:02.570Z",
                      updatedAt: "2018-05-25T17:32:02.570Z",
                      __v: 1
                    },
                    children: []
                  }
                ]
              },
              {
                _id: "5b082d6df3e75d8af8abf01a",
                deleted: false,
                label: "Ventas",
                tipoarea: {
                  _id: "5aa043c3cb00d939b2c044b9",
                  label: "Departamento",
                  icono: "fa-depto",
                  createdAt: "2018-03-07T19:55:47.227Z",
                  updatedAt: "2018-03-07T19:55:47.227Z",
                  __v: 0,
                  deleted: false
                },
                areapadre: {
                  _id: "5b082d6df3e75dc045abf02e",
                  deleted: false,
                  label: "Planta",
                  tipoarea: "5aa043c3cb00d939b2c044b9",
                  areapadre: "5b082abff3e75d7f78abf00a",
                  empresa: "5b0828aeb673d5289c8291d8",
                  centrodecosto: "5b08290cb673d594a18291da",
                  descripcion: "Planta",
                  validthru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T15:36:13.629Z",
                  updatedAt: "2018-05-29T15:21:48.257Z",
                  __v: 0,
                  plazajefe: "5b0d6ffab673d56d5682929d"
                },
                empresa: {
                  _id: "5b0828aeb673d5289c8291d8",
                  deleted: false,
                  label: "Demo",
                  pais: "5a9e37a9078b9b34d40a66fc",
                  moneda: "5a9ed732d75eb707a8287c50",
                  vencimiento: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                centrodecosto: {
                  _id: "5b08290cb673d594a18291da",
                  deleted: false,
                  label: "Operaciones",
                  empresa: "5b0828aeb673d5289c8291d8",
                  moneda: "5a9ed732d75eb707a8287c50",
                  validthru: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                descripcion: "Ventas",
                validthru: "2018-12-31T00:00:00.000Z",
                createdAt: "2018-05-25T15:36:13.458Z",
                updatedAt: "2018-05-28T22:21:22.417Z",
                __v: 0,
                plazajefe: {
                  _id: "5b084892f3e75d3367abf0dd",
                  sillas: ["5b088eb1f3e75d6eb4abf311"],
                  deleted: false,
                  area: "5b082d6df3e75d8af8abf01a",
                  puesto: "5b083a64f3e75d2d18abf072",
                  label: "Ventas - Gerente de Ventas",
                  cantidad: 1,
                  centrodecosto: "5b08290cb673d594a18291da",
                  valid_thru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T17:32:02.818Z",
                  updatedAt: "2018-05-25T17:32:02.818Z",
                  __v: 1
                },
                children: [
                  {
                    _id: "5b082abff3e75d3466abf00f",
                    deleted: false,
                    label: "Venta Región Departamental",
                    tipoarea: {
                      _id: "5aa043c3cb00d939b2c044b9",
                      label: "Departamento",
                      icono: "fa-depto",
                      createdAt: "2018-03-07T19:55:47.227Z",
                      updatedAt: "2018-03-07T19:55:47.227Z",
                      __v: 0,
                      deleted: false
                    },
                    areapadre: {
                      _id: "5b082d6df3e75d8af8abf01a",
                      deleted: false,
                      label: "Ventas",
                      tipoarea: "5aa043c3cb00d939b2c044b9",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Ventas",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:36:13.458Z",
                      updatedAt: "2018-05-28T22:21:22.417Z",
                      __v: 0,
                      plazajefe: "5b084892f3e75d3367abf0dd"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Venta Región Departamental",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:24:47.079Z",
                    updatedAt: "2018-05-29T17:01:13.763Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b0d8745b673d595c48293a1",
                      sillas: [],
                      deleted: false,
                      area: "5b082abff3e75d3466abf00f",
                      puesto: "5b083a64f3e75dabc5abf073",
                      label:
                        "Venta Region Departamental - Gerente de Ventas Departamental",
                      cantidad: 1,
                      centrodecosto: "5b08290cb673d594a18291da",
                      __v: 0
                    },
                    children: [
                      {
                        _id: "5b082d6df3e75d5fd5abf03c",
                        deleted: false,
                        label: "Santa Cruz del Quiche",
                        tipoarea: {
                          _id: "5aa043c3cb00d939b2c044b9",
                          label: "Departamento",
                          icono: "fa-depto",
                          createdAt: "2018-03-07T19:55:47.227Z",
                          updatedAt: "2018-03-07T19:55:47.227Z",
                          __v: 0,
                          deleted: false
                        },
                        areapadre: {
                          _id: "5b082abff3e75d3466abf00f",
                          deleted: false,
                          label: "Venta Región Departamental",
                          tipoarea: "5aa043c3cb00d939b2c044b9",
                          areapadre: "5b082d6df3e75d8af8abf01a",
                          empresa: "5b0828aeb673d5289c8291d8",
                          centrodecosto: "5b08290cb673d594a18291da",
                          descripcion: "Venta Región Departamental",
                          validthru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T15:24:47.079Z",
                          updatedAt: "2018-05-29T17:01:13.763Z",
                          __v: 0,
                          plazajefe: "5b0d8745b673d595c48293a1"
                        },
                        empresa: {
                          _id: "5b0828aeb673d5289c8291d8",
                          deleted: false,
                          label: "Demo",
                          pais: "5a9e37a9078b9b34d40a66fc",
                          moneda: "5a9ed732d75eb707a8287c50",
                          vencimiento: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        centrodecosto: {
                          _id: "5b08290cb673d594a18291da",
                          deleted: false,
                          label: "Operaciones",
                          empresa: "5b0828aeb673d5289c8291d8",
                          moneda: "5a9ed732d75eb707a8287c50",
                          validthru: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        descripcion: "Santa Cruz del Quiche",
                        validthru: "2018-12-31T00:00:00.000Z",
                        createdAt: "2018-05-25T15:36:13.723Z",
                        updatedAt: "2018-05-29T17:07:09.057Z",
                        __v: 0,
                        plazajefe: {
                          _id: "5b084892f3e75d6e51abf0bc",
                          sillas: ["5b088eb4f3e75d4980abf320"],
                          deleted: false,
                          area: "5b082d6df3e75d5fd5abf03c",
                          puesto: "5b083a64f3e75db641abf082",
                          label: "Santa Cruz del Quiche - Jefe de Ventas",
                          cantidad: 1,
                          centrodecosto: "5b08290cb673d594a18291da",
                          valid_thru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T17:32:02.639Z",
                          updatedAt: "2018-05-25T17:32:02.639Z",
                          __v: 1
                        },
                        children: [
                          {
                            _id: "5b082d6df3e75d2628abf044",
                            deleted: false,
                            label: "Bodega Santa Cruz del Quiche",
                            tipoarea: {
                              _id: "5b08296fb673d5360a8291dc",
                              deleted: false,
                              label: "Bodega",
                              createdAt: "2018-05-25T15:19:11.530Z",
                              updatedAt: "2018-05-25T15:33:54.504Z",
                              __v: 0,
                              icono: "fa-warehouse"
                            },
                            areapadre: {
                              _id: "5b082d6df3e75d5fd5abf03c",
                              deleted: false,
                              label: "Santa Cruz del Quiche",
                              tipoarea: "5aa043c3cb00d939b2c044b9",
                              areapadre: "5b082abff3e75d3466abf00f",
                              empresa: "5b0828aeb673d5289c8291d8",
                              centrodecosto: "5b08290cb673d594a18291da",
                              descripcion: "Santa Cruz del Quiche",
                              validthru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T15:36:13.723Z",
                              updatedAt: "2018-05-29T17:07:09.057Z",
                              __v: 0,
                              plazajefe: "5b084892f3e75d6e51abf0bc"
                            },
                            empresa: {
                              _id: "5b0828aeb673d5289c8291d8",
                              deleted: false,
                              label: "Demo",
                              pais: "5a9e37a9078b9b34d40a66fc",
                              moneda: "5a9ed732d75eb707a8287c50",
                              vencimiento: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            centrodecosto: {
                              _id: "5b08290cb673d594a18291da",
                              deleted: false,
                              label: "Operaciones",
                              empresa: "5b0828aeb673d5289c8291d8",
                              moneda: "5a9ed732d75eb707a8287c50",
                              validthru: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            descripcion: "Bodega Santa Cruz del Quiche",
                            validthru: "2018-12-31T00:00:00.000Z",
                            createdAt: "2018-05-25T15:36:13.784Z",
                            updatedAt: "2018-05-29T17:58:20.374Z",
                            __v: 0,
                            plazajefe: {
                              _id: "5b084892f3e75d75c9abf0ea",
                              sillas: ["5b088eb1f3e75d7235abf307"],
                              deleted: false,
                              area: "5b082d6df3e75d2628abf044",
                              puesto: "5b083a64f3e75d0b0aabf055",
                              label:
                                "Bodega Santa Cruz del Quiche - Auxiliar Comercial",
                              cantidad: 1,
                              centrodecosto: "5b08290cb673d594a18291da",
                              valid_thru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T17:32:02.881Z",
                              updatedAt: "2018-05-25T17:32:02.881Z",
                              __v: 1
                            },
                            children: []
                          },
                          {
                            _id: "5b082d6df3e75d01c2abf04c",
                            deleted: false,
                            label: "Tienda Santa Cruz del Quiche",
                            tipoarea: {
                              _id: "5b08295db673d51e768291db",
                              deleted: false,
                              label: "Tienda",
                              createdAt: "2018-05-25T15:18:53.124Z",
                              updatedAt: "2018-05-25T15:34:49.116Z",
                              __v: 0,
                              icono: "fa-store"
                            },
                            areapadre: {
                              _id: "5b082d6df3e75d5fd5abf03c",
                              deleted: false,
                              label: "Santa Cruz del Quiche",
                              tipoarea: "5aa043c3cb00d939b2c044b9",
                              areapadre: "5b082abff3e75d3466abf00f",
                              empresa: "5b0828aeb673d5289c8291d8",
                              centrodecosto: "5b08290cb673d594a18291da",
                              descripcion: "Santa Cruz del Quiche",
                              validthru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T15:36:13.723Z",
                              updatedAt: "2018-05-29T17:07:09.057Z",
                              __v: 0,
                              plazajefe: "5b084892f3e75d6e51abf0bc"
                            },
                            empresa: {
                              _id: "5b0828aeb673d5289c8291d8",
                              deleted: false,
                              label: "Demo",
                              pais: "5a9e37a9078b9b34d40a66fc",
                              moneda: "5a9ed732d75eb707a8287c50",
                              vencimiento: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            centrodecosto: {
                              _id: "5b08290cb673d594a18291da",
                              deleted: false,
                              label: "Operaciones",
                              empresa: "5b0828aeb673d5289c8291d8",
                              moneda: "5a9ed732d75eb707a8287c50",
                              validthru: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            descripcion: "Tienda Santa Cruz del Quiche",
                            validthru: "2018-12-31T00:00:00.000Z",
                            createdAt: "2018-05-25T15:36:13.823Z",
                            updatedAt: "2018-05-29T17:58:32.638Z",
                            __v: 0,
                            plazajefe: {
                              _id: "5b084892f3e75d08c7abf09d",
                              sillas: [
                                "5b088eb4f3e75d647eabf33d",
                                "5b08a0906416d8ed859343f8"
                              ],
                              deleted: false,
                              area: "5b082d6df3e75d01c2abf04c",
                              puesto: "5b083a64f3e75d0150abf066",
                              label:
                                "Tienda Santa Cruz del Quiche - Ejecutivo de Ventas",
                              cantidad: 1,
                              centrodecosto: "5b08290cb673d594a18291da",
                              valid_thru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T17:32:02.457Z",
                              updatedAt: "2018-05-25T17:32:02.457Z",
                              __v: 2
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        _id: "5b082d6df3e75d1586abf03d",
                        deleted: false,
                        label: "Peten",
                        tipoarea: {
                          _id: "5aa043c3cb00d939b2c044b9",
                          label: "Departamento",
                          icono: "fa-depto",
                          createdAt: "2018-03-07T19:55:47.227Z",
                          updatedAt: "2018-03-07T19:55:47.227Z",
                          __v: 0,
                          deleted: false
                        },
                        areapadre: {
                          _id: "5b082abff3e75d3466abf00f",
                          deleted: false,
                          label: "Venta Región Departamental",
                          tipoarea: "5aa043c3cb00d939b2c044b9",
                          areapadre: "5b082d6df3e75d8af8abf01a",
                          empresa: "5b0828aeb673d5289c8291d8",
                          centrodecosto: "5b08290cb673d594a18291da",
                          descripcion: "Venta Región Departamental",
                          validthru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T15:24:47.079Z",
                          updatedAt: "2018-05-29T17:01:13.763Z",
                          __v: 0,
                          plazajefe: "5b0d8745b673d595c48293a1"
                        },
                        empresa: {
                          _id: "5b0828aeb673d5289c8291d8",
                          deleted: false,
                          label: "Demo",
                          pais: "5a9e37a9078b9b34d40a66fc",
                          moneda: "5a9ed732d75eb707a8287c50",
                          vencimiento: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        centrodecosto: {
                          _id: "5b08290cb673d594a18291da",
                          deleted: false,
                          label: "Operaciones",
                          empresa: "5b0828aeb673d5289c8291d8",
                          moneda: "5a9ed732d75eb707a8287c50",
                          validthru: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        descripcion: "Peten",
                        validthru: "2018-12-31T00:00:00.000Z",
                        createdAt: "2018-05-25T15:36:13.727Z",
                        updatedAt: "2018-05-29T17:07:24.675Z",
                        __v: 0,
                        plazajefe: {
                          _id: "5b084892f3e75d77bcabf0c2",
                          sillas: [
                            "5b088eb4f3e75d3e12abf325",
                            "5b08a0906416d87955934415"
                          ],
                          deleted: false,
                          area: "5b082d6df3e75d1586abf03d",
                          puesto: "5b083a64f3e75db641abf082",
                          label: "Peten - Jefe de Ventas",
                          cantidad: 1,
                          centrodecosto: "5b08290cb673d594a18291da",
                          valid_thru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T17:32:02.678Z",
                          updatedAt: "2018-05-25T17:32:02.678Z",
                          __v: 1
                        },
                        children: []
                      },
                      {
                        _id: "5b082d6df3e75d0c19abf03e",
                        deleted: false,
                        label: "Antigua",
                        tipoarea: {
                          _id: "5aa043c3cb00d939b2c044b9",
                          label: "Departamento",
                          icono: "fa-depto",
                          createdAt: "2018-03-07T19:55:47.227Z",
                          updatedAt: "2018-03-07T19:55:47.227Z",
                          __v: 0,
                          deleted: false
                        },
                        areapadre: {
                          _id: "5b082abff3e75d3466abf00f",
                          deleted: false,
                          label: "Venta Región Departamental",
                          tipoarea: "5aa043c3cb00d939b2c044b9",
                          areapadre: "5b082d6df3e75d8af8abf01a",
                          empresa: "5b0828aeb673d5289c8291d8",
                          centrodecosto: "5b08290cb673d594a18291da",
                          descripcion: "Venta Región Departamental",
                          validthru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T15:24:47.079Z",
                          updatedAt: "2018-05-29T17:01:13.763Z",
                          __v: 0,
                          plazajefe: "5b0d8745b673d595c48293a1"
                        },
                        empresa: {
                          _id: "5b0828aeb673d5289c8291d8",
                          deleted: false,
                          label: "Demo",
                          pais: "5a9e37a9078b9b34d40a66fc",
                          moneda: "5a9ed732d75eb707a8287c50",
                          vencimiento: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        centrodecosto: {
                          _id: "5b08290cb673d594a18291da",
                          deleted: false,
                          label: "Operaciones",
                          empresa: "5b0828aeb673d5289c8291d8",
                          moneda: "5a9ed732d75eb707a8287c50",
                          validthru: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        descripcion: "Antigua",
                        validthru: "2018-12-31T00:00:00.000Z",
                        createdAt: "2018-05-25T15:36:13.728Z",
                        updatedAt: "2018-05-29T17:07:38.297Z",
                        __v: 0,
                        plazajefe: {
                          _id: "5b084892f3e75d4d7fabf0c5",
                          sillas: [
                            "5b088eb4f3e75dc3a7abf327",
                            "5b088eb4f3e75d9bd1abf342",
                            "5b08a0906416d811dc9343e5",
                            "5b08a0906416d8738093440a"
                          ],
                          deleted: false,
                          area: "5b082d6df3e75d0c19abf03e",
                          puesto: "5b083a64f3e75db641abf082",
                          label: "Antigua - Jefe de Ventas",
                          cantidad: 2,
                          centrodecosto: "5b08290cb673d594a18291da",
                          valid_thru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T17:32:02.690Z",
                          updatedAt: "2018-05-25T17:32:02.690Z",
                          __v: 2
                        },
                        children: []
                      },
                      {
                        _id: "5b082d6df3e75dee27abf040",
                        deleted: false,
                        label: "Santa Rosa",
                        tipoarea: {
                          _id: "5aa043c3cb00d939b2c044b9",
                          label: "Departamento",
                          icono: "fa-depto",
                          createdAt: "2018-03-07T19:55:47.227Z",
                          updatedAt: "2018-03-07T19:55:47.227Z",
                          __v: 0,
                          deleted: false
                        },
                        areapadre: {
                          _id: "5b082abff3e75d3466abf00f",
                          deleted: false,
                          label: "Venta Región Departamental",
                          tipoarea: "5aa043c3cb00d939b2c044b9",
                          areapadre: "5b082d6df3e75d8af8abf01a",
                          empresa: "5b0828aeb673d5289c8291d8",
                          centrodecosto: "5b08290cb673d594a18291da",
                          descripcion: "Venta Región Departamental",
                          validthru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T15:24:47.079Z",
                          updatedAt: "2018-05-29T17:01:13.763Z",
                          __v: 0,
                          plazajefe: "5b0d8745b673d595c48293a1"
                        },
                        empresa: {
                          _id: "5b0828aeb673d5289c8291d8",
                          deleted: false,
                          label: "Demo",
                          pais: "5a9e37a9078b9b34d40a66fc",
                          moneda: "5a9ed732d75eb707a8287c50",
                          vencimiento: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        centrodecosto: {
                          _id: "5b08290cb673d594a18291da",
                          deleted: false,
                          label: "Operaciones",
                          empresa: "5b0828aeb673d5289c8291d8",
                          moneda: "5a9ed732d75eb707a8287c50",
                          validthru: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        descripcion: "Santa Rosa",
                        validthru: "2018-12-31T00:00:00.000Z",
                        createdAt: "2018-05-25T15:36:13.758Z",
                        updatedAt: "2018-05-29T17:07:50.701Z",
                        __v: 0,
                        plazajefe: {
                          _id: "5b084892f3e75d1920abf0c1",
                          sillas: ["5b088eb4f3e75d263dabf326"],
                          deleted: false,
                          area: "5b082d6df3e75dee27abf040",
                          puesto: "5b083a64f3e75db641abf082",
                          label: "Santa Rosa - Jefe de Ventas",
                          cantidad: 2,
                          centrodecosto: "5b08290cb673d594a18291da",
                          valid_thru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T17:32:02.672Z",
                          updatedAt: "2018-05-25T17:32:02.672Z",
                          __v: 1
                        },
                        children: []
                      },
                      {
                        _id: "5b082d6df3e75d3d37abf041",
                        deleted: false,
                        label: "Chichicastenango",
                        tipoarea: {
                          _id: "5aa043c3cb00d939b2c044b9",
                          label: "Departamento",
                          icono: "fa-depto",
                          createdAt: "2018-03-07T19:55:47.227Z",
                          updatedAt: "2018-03-07T19:55:47.227Z",
                          __v: 0,
                          deleted: false
                        },
                        areapadre: {
                          _id: "5b082abff3e75d3466abf00f",
                          deleted: false,
                          label: "Venta Región Departamental",
                          tipoarea: "5aa043c3cb00d939b2c044b9",
                          areapadre: "5b082d6df3e75d8af8abf01a",
                          empresa: "5b0828aeb673d5289c8291d8",
                          centrodecosto: "5b08290cb673d594a18291da",
                          descripcion: "Venta Región Departamental",
                          validthru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T15:24:47.079Z",
                          updatedAt: "2018-05-29T17:01:13.763Z",
                          __v: 0,
                          plazajefe: "5b0d8745b673d595c48293a1"
                        },
                        empresa: {
                          _id: "5b0828aeb673d5289c8291d8",
                          deleted: false,
                          label: "Demo",
                          pais: "5a9e37a9078b9b34d40a66fc",
                          moneda: "5a9ed732d75eb707a8287c50",
                          vencimiento: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        centrodecosto: {
                          _id: "5b08290cb673d594a18291da",
                          deleted: false,
                          label: "Operaciones",
                          empresa: "5b0828aeb673d5289c8291d8",
                          moneda: "5a9ed732d75eb707a8287c50",
                          validthru: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        descripcion: "Chichicastenango",
                        validthru: "2018-12-31T00:00:00.000Z",
                        createdAt: "2018-05-25T15:36:13.767Z",
                        updatedAt: "2018-05-29T17:08:06.712Z",
                        __v: 0,
                        plazajefe: {
                          _id: "5b084892f3e75d1691abf0c6",
                          sillas: ["5b088eb4f3e75d0c5fabf329"],
                          deleted: false,
                          area: "5b082d6df3e75d3d37abf041",
                          puesto: "5b083a64f3e75db641abf082",
                          label: "Chichicastenango - Jefe de Ventas",
                          cantidad: 1,
                          centrodecosto: "5b08290cb673d594a18291da",
                          valid_thru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T17:32:02.692Z",
                          updatedAt: "2018-05-25T17:32:02.692Z",
                          __v: 1
                        },
                        children: [
                          {
                            _id: "5b082d6df3e75d2204abf031",
                            deleted: false,
                            label: "Tienda Chichicastenango",
                            tipoarea: {
                              _id: "5b08295db673d51e768291db",
                              deleted: false,
                              label: "Tienda",
                              createdAt: "2018-05-25T15:18:53.124Z",
                              updatedAt: "2018-05-25T15:34:49.116Z",
                              __v: 0,
                              icono: "fa-store"
                            },
                            areapadre: {
                              _id: "5b082d6df3e75d3d37abf041",
                              deleted: false,
                              label: "Chichicastenango",
                              tipoarea: "5aa043c3cb00d939b2c044b9",
                              areapadre: "5b082abff3e75d3466abf00f",
                              empresa: "5b0828aeb673d5289c8291d8",
                              centrodecosto: "5b08290cb673d594a18291da",
                              descripcion: "Chichicastenango",
                              validthru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T15:36:13.767Z",
                              updatedAt: "2018-05-29T17:08:06.712Z",
                              __v: 0,
                              plazajefe: "5b084892f3e75d1691abf0c6"
                            },
                            empresa: {
                              _id: "5b0828aeb673d5289c8291d8",
                              deleted: false,
                              label: "Demo",
                              pais: "5a9e37a9078b9b34d40a66fc",
                              moneda: "5a9ed732d75eb707a8287c50",
                              vencimiento: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            centrodecosto: {
                              _id: "5b08290cb673d594a18291da",
                              deleted: false,
                              label: "Operaciones",
                              empresa: "5b0828aeb673d5289c8291d8",
                              moneda: "5a9ed732d75eb707a8287c50",
                              validthru: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            descripcion: "Tienda Chichicastenango",
                            validthru: "2018-12-31T00:00:00.000Z",
                            createdAt: "2018-05-25T15:36:13.653Z",
                            updatedAt: "2018-05-29T17:56:02.504Z",
                            __v: 0,
                            plazajefe: {
                              _id: "5b084892f3e75d1046abf0a5",
                              sillas: ["5b088eb1f3e75d6f3fabf2f7"],
                              deleted: false,
                              area: "5b082d6df3e75d2204abf031",
                              puesto: "5b083a64f3e75d0150abf066",
                              label:
                                "Tienda Chichicastenango - Ejecutivo de Ventas",
                              cantidad: 1,
                              centrodecosto: "5b08290cb673d594a18291da",
                              valid_thru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T17:32:02.534Z",
                              updatedAt: "2018-05-25T17:32:02.534Z",
                              __v: 1
                            },
                            children: []
                          },
                          {
                            _id: "5b082d6df3e75d4398abf04e",
                            deleted: false,
                            label: "Bodegas Chichicastenango",
                            tipoarea: {
                              _id: "5b08296fb673d5360a8291dc",
                              deleted: false,
                              label: "Bodega",
                              createdAt: "2018-05-25T15:19:11.530Z",
                              updatedAt: "2018-05-25T15:33:54.504Z",
                              __v: 0,
                              icono: "fa-warehouse"
                            },
                            areapadre: {
                              _id: "5b082d6df3e75d3d37abf041",
                              deleted: false,
                              label: "Chichicastenango",
                              tipoarea: "5aa043c3cb00d939b2c044b9",
                              areapadre: "5b082abff3e75d3466abf00f",
                              empresa: "5b0828aeb673d5289c8291d8",
                              centrodecosto: "5b08290cb673d594a18291da",
                              descripcion: "Chichicastenango",
                              validthru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T15:36:13.767Z",
                              updatedAt: "2018-05-29T17:08:06.712Z",
                              __v: 0,
                              plazajefe: "5b084892f3e75d1691abf0c6"
                            },
                            empresa: {
                              _id: "5b0828aeb673d5289c8291d8",
                              deleted: false,
                              label: "Demo",
                              pais: "5a9e37a9078b9b34d40a66fc",
                              moneda: "5a9ed732d75eb707a8287c50",
                              vencimiento: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            centrodecosto: {
                              _id: "5b08290cb673d594a18291da",
                              deleted: false,
                              label: "Operaciones",
                              empresa: "5b0828aeb673d5289c8291d8",
                              moneda: "5a9ed732d75eb707a8287c50",
                              validthru: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            descripcion: "Bodegas Chichicastenango",
                            validthru: "2018-12-31T00:00:00.000Z",
                            createdAt: "2018-05-25T15:36:13.835Z",
                            updatedAt: "2018-05-29T17:56:12.450Z",
                            __v: 0,
                            plazajefe: {
                              _id: "5b084892f3e75d89c1abf0e9",
                              sillas: ["5b088eb1f3e75d6879abf306"],
                              deleted: false,
                              area: "5b082d6df3e75d4398abf04e",
                              puesto: "5b083a64f3e75d8ba3abf054",
                              label:
                                "Bodegas Chichicastenango - Auxiliar de Operaciones",
                              cantidad: 1,
                              centrodecosto: "5b08290cb673d594a18291da",
                              valid_thru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T17:32:02.879Z",
                              updatedAt: "2018-05-25T17:32:02.879Z",
                              __v: 1
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        _id: "5b082d6df3e75d709fabf042",
                        deleted: false,
                        label: "Xela",
                        tipoarea: {
                          _id: "5aa043c3cb00d939b2c044b9",
                          label: "Departamento",
                          icono: "fa-depto",
                          createdAt: "2018-03-07T19:55:47.227Z",
                          updatedAt: "2018-03-07T19:55:47.227Z",
                          __v: 0,
                          deleted: false
                        },
                        areapadre: {
                          _id: "5b082abff3e75d3466abf00f",
                          deleted: false,
                          label: "Venta Región Departamental",
                          tipoarea: "5aa043c3cb00d939b2c044b9",
                          areapadre: "5b082d6df3e75d8af8abf01a",
                          empresa: "5b0828aeb673d5289c8291d8",
                          centrodecosto: "5b08290cb673d594a18291da",
                          descripcion: "Venta Región Departamental",
                          validthru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T15:24:47.079Z",
                          updatedAt: "2018-05-29T17:01:13.763Z",
                          __v: 0,
                          plazajefe: "5b0d8745b673d595c48293a1"
                        },
                        empresa: {
                          _id: "5b0828aeb673d5289c8291d8",
                          deleted: false,
                          label: "Demo",
                          pais: "5a9e37a9078b9b34d40a66fc",
                          moneda: "5a9ed732d75eb707a8287c50",
                          vencimiento: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        centrodecosto: {
                          _id: "5b08290cb673d594a18291da",
                          deleted: false,
                          label: "Operaciones",
                          empresa: "5b0828aeb673d5289c8291d8",
                          moneda: "5a9ed732d75eb707a8287c50",
                          validthru: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        descripcion: "Xela",
                        validthru: "2018-12-31T00:00:00.000Z",
                        createdAt: "2018-05-25T15:36:13.772Z",
                        updatedAt: "2018-05-29T17:08:21.477Z",
                        __v: 0,
                        plazajefe: {
                          _id: "5b084892f3e75df18fabf0bd",
                          sillas: ["5b088eb4f3e75d228babf31e"],
                          deleted: false,
                          area: "5b082d6df3e75d709fabf042",
                          puesto: "5b083a64f3e75db641abf082",
                          label: "Xela - Jefe de Ventas",
                          cantidad: 2,
                          centrodecosto: "5b08290cb673d594a18291da",
                          valid_thru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T17:32:02.640Z",
                          updatedAt: "2018-05-25T17:32:02.640Z",
                          __v: 1
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    _id: "5b082abff3e75d66a2abf012",
                    deleted: false,
                    label: "Ventas Región Central",
                    tipoarea: {
                      _id: "5aa043c3cb00d939b2c044b9",
                      label: "Departamento",
                      icono: "fa-depto",
                      createdAt: "2018-03-07T19:55:47.227Z",
                      updatedAt: "2018-03-07T19:55:47.227Z",
                      __v: 0,
                      deleted: false
                    },
                    areapadre: {
                      _id: "5b082d6df3e75d8af8abf01a",
                      deleted: false,
                      label: "Ventas",
                      tipoarea: "5aa043c3cb00d939b2c044b9",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Ventas",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:36:13.458Z",
                      updatedAt: "2018-05-28T22:21:22.417Z",
                      __v: 0,
                      plazajefe: "5b084892f3e75d3367abf0dd"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Ventas Región Central",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:24:47.111Z",
                    updatedAt: "2018-05-29T17:01:35.315Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b0d872db673d52c638293a0",
                      sillas: [],
                      deleted: false,
                      area: "5b082abff3e75d66a2abf012",
                      puesto: "5b083a64f3e75dabc5abf073",
                      label:
                        "Venta Region Central - Gerente de Ventas Departamental\t",
                      cantidad: 1,
                      centrodecosto: "5b08290cb673d594a18291da",
                      __v: 0
                    },
                    children: [
                      {
                        _id: "5b082d6df3e75dbbc7abf03a",
                        deleted: false,
                        label: "Roosevelt",
                        tipoarea: {
                          _id: "5aa043c3cb00d939b2c044b9",
                          label: "Departamento",
                          icono: "fa-depto",
                          createdAt: "2018-03-07T19:55:47.227Z",
                          updatedAt: "2018-03-07T19:55:47.227Z",
                          __v: 0,
                          deleted: false
                        },
                        areapadre: {
                          _id: "5b082abff3e75d66a2abf012",
                          deleted: false,
                          label: "Ventas Región Central",
                          tipoarea: "5aa043c3cb00d939b2c044b9",
                          areapadre: "5b082d6df3e75d8af8abf01a",
                          empresa: "5b0828aeb673d5289c8291d8",
                          centrodecosto: "5b08290cb673d594a18291da",
                          descripcion: "Ventas Región Central",
                          validthru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T15:24:47.111Z",
                          updatedAt: "2018-05-29T17:01:35.315Z",
                          __v: 0,
                          plazajefe: "5b0d872db673d52c638293a0"
                        },
                        empresa: {
                          _id: "5b0828aeb673d5289c8291d8",
                          deleted: false,
                          label: "Demo",
                          pais: "5a9e37a9078b9b34d40a66fc",
                          moneda: "5a9ed732d75eb707a8287c50",
                          vencimiento: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        centrodecosto: {
                          _id: "5b08290cb673d594a18291da",
                          deleted: false,
                          label: "Operaciones",
                          empresa: "5b0828aeb673d5289c8291d8",
                          moneda: "5a9ed732d75eb707a8287c50",
                          validthru: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        descripcion: "Roosevelt",
                        validthru: "2018-12-31T00:00:00.000Z",
                        createdAt: "2018-05-25T15:36:13.709Z",
                        updatedAt: "2018-05-29T18:02:26.673Z",
                        __v: 0,
                        plazajefe: {
                          _id: "5b084892f3e75dd5b9abf0c3",
                          sillas: [
                            "5b088eb4f3e75da3b4abf324",
                            "5b08a0906416d86802934406"
                          ],
                          deleted: false,
                          area: "5b082d6df3e75dbbc7abf03a",
                          puesto: "5b083a64f3e75db641abf082",
                          label: "Roosevelt - Jefe de Ventas",
                          cantidad: 1,
                          centrodecosto: "5b08290cb673d594a18291da",
                          valid_thru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T17:32:02.680Z",
                          updatedAt: "2018-05-25T17:32:02.680Z",
                          __v: 1
                        },
                        children: [
                          {
                            _id: "5b082d6df3e75d9ec6abf033",
                            deleted: false,
                            label: "Tienda Roosevelt",
                            tipoarea: {
                              _id: "5b08295db673d51e768291db",
                              deleted: false,
                              label: "Tienda",
                              createdAt: "2018-05-25T15:18:53.124Z",
                              updatedAt: "2018-05-25T15:34:49.116Z",
                              __v: 0,
                              icono: "fa-store"
                            },
                            areapadre: {
                              _id: "5b082d6df3e75dbbc7abf03a",
                              deleted: false,
                              label: "Roosevelt",
                              tipoarea: "5aa043c3cb00d939b2c044b9",
                              areapadre: "5b082abff3e75d66a2abf012",
                              empresa: "5b0828aeb673d5289c8291d8",
                              centrodecosto: "5b08290cb673d594a18291da",
                              descripcion: "Roosevelt",
                              validthru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T15:36:13.709Z",
                              updatedAt: "2018-05-29T18:02:26.673Z",
                              __v: 0,
                              plazajefe: "5b084892f3e75dd5b9abf0c3"
                            },
                            empresa: {
                              _id: "5b0828aeb673d5289c8291d8",
                              deleted: false,
                              label: "Demo",
                              pais: "5a9e37a9078b9b34d40a66fc",
                              moneda: "5a9ed732d75eb707a8287c50",
                              vencimiento: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            centrodecosto: {
                              _id: "5b08290cb673d594a18291da",
                              deleted: false,
                              label: "Operaciones",
                              empresa: "5b0828aeb673d5289c8291d8",
                              moneda: "5a9ed732d75eb707a8287c50",
                              validthru: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            descripcion: "Tienda Roosevelt",
                            validthru: "2018-12-31T00:00:00.000Z",
                            createdAt: "2018-05-25T15:36:13.653Z",
                            updatedAt: "2018-05-29T18:08:11.324Z",
                            __v: 0,
                            plazajefe: {
                              _id: "5b084892f3e75d1f27abf0a2",
                              sillas: [
                                "5b088eb0f3e75dfd12abf2f0",
                                "5b08a0906416d809959343ee"
                              ],
                              deleted: false,
                              area: "5b082d6df3e75d9ec6abf033",
                              puesto: "5b083a64f3e75d0150abf066",
                              label: "Tienda Roosevelt - Ejecutivo de Ventas",
                              cantidad: 1,
                              centrodecosto: "5b08290cb673d594a18291da",
                              valid_thru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T17:32:02.522Z",
                              updatedAt: "2018-05-25T17:32:02.522Z",
                              __v: 1
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        _id: "5b082d6df3e75d30ecabf03f",
                        deleted: false,
                        label: "Zona 10",
                        tipoarea: {
                          _id: "5aa043c3cb00d939b2c044b9",
                          label: "Departamento",
                          icono: "fa-depto",
                          createdAt: "2018-03-07T19:55:47.227Z",
                          updatedAt: "2018-03-07T19:55:47.227Z",
                          __v: 0,
                          deleted: false
                        },
                        areapadre: {
                          _id: "5b082abff3e75d66a2abf012",
                          deleted: false,
                          label: "Ventas Región Central",
                          tipoarea: "5aa043c3cb00d939b2c044b9",
                          areapadre: "5b082d6df3e75d8af8abf01a",
                          empresa: "5b0828aeb673d5289c8291d8",
                          centrodecosto: "5b08290cb673d594a18291da",
                          descripcion: "Ventas Región Central",
                          validthru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T15:24:47.111Z",
                          updatedAt: "2018-05-29T17:01:35.315Z",
                          __v: 0,
                          plazajefe: "5b0d872db673d52c638293a0"
                        },
                        empresa: {
                          _id: "5b0828aeb673d5289c8291d8",
                          deleted: false,
                          label: "Demo",
                          pais: "5a9e37a9078b9b34d40a66fc",
                          moneda: "5a9ed732d75eb707a8287c50",
                          vencimiento: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        centrodecosto: {
                          _id: "5b08290cb673d594a18291da",
                          deleted: false,
                          label: "Operaciones",
                          empresa: "5b0828aeb673d5289c8291d8",
                          moneda: "5a9ed732d75eb707a8287c50",
                          validthru: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        descripcion: "Zona 10",
                        validthru: "2018-12-31T00:00:00.000Z",
                        createdAt: "2018-05-25T15:36:13.739Z",
                        updatedAt: "2018-05-25T15:36:13.739Z",
                        __v: 0,
                        plazajefe: {
                          _id: "5b084892f3e75dc0b1abf0c4",
                          sillas: ["5b088eb4f3e75d797fabf328"],
                          deleted: false,
                          area: "5b082d6df3e75d30ecabf03f",
                          puesto: "5b083a64f3e75db641abf082",
                          label: "Zona 10 - Jefe de Ventas",
                          cantidad: 1,
                          centrodecosto: "5b08290cb673d594a18291da",
                          valid_thru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T17:32:02.684Z",
                          updatedAt: "2018-05-25T17:32:02.684Z",
                          __v: 1
                        },
                        children: [
                          {
                            _id: "5b082d6df3e75d1a04abf035",
                            deleted: false,
                            label: "Tienda Zona 10",
                            tipoarea: {
                              _id: "5b08295db673d51e768291db",
                              deleted: false,
                              label: "Tienda",
                              createdAt: "2018-05-25T15:18:53.124Z",
                              updatedAt: "2018-05-25T15:34:49.116Z",
                              __v: 0,
                              icono: "fa-store"
                            },
                            areapadre: {
                              _id: "5b082d6df3e75d30ecabf03f",
                              deleted: false,
                              label: "Zona 10",
                              tipoarea: "5aa043c3cb00d939b2c044b9",
                              areapadre: "5b082abff3e75d66a2abf012",
                              empresa: "5b0828aeb673d5289c8291d8",
                              centrodecosto: "5b08290cb673d594a18291da",
                              descripcion: "Zona 10",
                              validthru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T15:36:13.739Z",
                              updatedAt: "2018-05-25T15:36:13.739Z",
                              __v: 0,
                              plazajefe: "5b084892f3e75dc0b1abf0c4"
                            },
                            empresa: {
                              _id: "5b0828aeb673d5289c8291d8",
                              deleted: false,
                              label: "Demo",
                              pais: "5a9e37a9078b9b34d40a66fc",
                              moneda: "5a9ed732d75eb707a8287c50",
                              vencimiento: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            centrodecosto: {
                              _id: "5b08290cb673d594a18291da",
                              deleted: false,
                              label: "Operaciones",
                              empresa: "5b0828aeb673d5289c8291d8",
                              moneda: "5a9ed732d75eb707a8287c50",
                              validthru: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            descripcion: "Tienda Zona 10",
                            validthru: "2018-12-31T00:00:00.000Z",
                            createdAt: "2018-05-25T15:36:13.677Z",
                            updatedAt: "2018-05-29T18:02:43.622Z",
                            __v: 0,
                            plazajefe: {
                              _id: "5b084892f3e75d133eabf0a3",
                              sillas: [
                                "5b088eb1f3e75d0d88abf2f5",
                                "5b088eb1f3e75d5026abf2f6"
                              ],
                              deleted: false,
                              area: "5b082d6df3e75d1a04abf035",
                              puesto: "5b083a64f3e75d0150abf066",
                              label: "Tienda Zona 10 - Ejecutivo de Ventas",
                              cantidad: 2,
                              centrodecosto: "5b08290cb673d594a18291da",
                              valid_thru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T17:32:02.524Z",
                              updatedAt: "2018-05-25T17:32:02.524Z",
                              __v: 1
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        _id: "5b082d6df3e75dc929abf043",
                        deleted: false,
                        label: "Zona 11",
                        tipoarea: {
                          _id: "5aa043c3cb00d939b2c044b9",
                          label: "Departamento",
                          icono: "fa-depto",
                          createdAt: "2018-03-07T19:55:47.227Z",
                          updatedAt: "2018-03-07T19:55:47.227Z",
                          __v: 0,
                          deleted: false
                        },
                        areapadre: {
                          _id: "5b082abff3e75d66a2abf012",
                          deleted: false,
                          label: "Ventas Región Central",
                          tipoarea: "5aa043c3cb00d939b2c044b9",
                          areapadre: "5b082d6df3e75d8af8abf01a",
                          empresa: "5b0828aeb673d5289c8291d8",
                          centrodecosto: "5b08290cb673d594a18291da",
                          descripcion: "Ventas Región Central",
                          validthru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T15:24:47.111Z",
                          updatedAt: "2018-05-29T17:01:35.315Z",
                          __v: 0,
                          plazajefe: "5b0d872db673d52c638293a0"
                        },
                        empresa: {
                          _id: "5b0828aeb673d5289c8291d8",
                          deleted: false,
                          label: "Demo",
                          pais: "5a9e37a9078b9b34d40a66fc",
                          moneda: "5a9ed732d75eb707a8287c50",
                          vencimiento: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        centrodecosto: {
                          _id: "5b08290cb673d594a18291da",
                          deleted: false,
                          label: "Operaciones",
                          empresa: "5b0828aeb673d5289c8291d8",
                          moneda: "5a9ed732d75eb707a8287c50",
                          validthru: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        descripcion: "Zona 11",
                        validthru: "2018-12-31T00:00:00.000Z",
                        createdAt: "2018-05-25T15:36:13.778Z",
                        updatedAt: "2018-05-25T15:36:13.778Z",
                        __v: 0,
                        plazajefe: {
                          _id: "5b084892f3e75d0b52abf0bb",
                          sillas: [
                            "5b088eb4f3e75d15dcabf31f",
                            "5b08a0906416d867b693440d"
                          ],
                          deleted: false,
                          area: "5b082d6df3e75dc929abf043",
                          puesto: "5b083a64f3e75db641abf082",
                          label: "Zona 11 - Jefe de Ventas",
                          cantidad: 1,
                          centrodecosto: "5b08290cb673d594a18291da",
                          valid_thru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T17:32:02.631Z",
                          updatedAt: "2018-05-25T17:32:02.631Z",
                          __v: 1
                        },
                        children: [
                          {
                            _id: "5b082d6df3e75d6c46abf034",
                            deleted: false,
                            label: "Tienda Zona 11",
                            tipoarea: {
                              _id: "5b08295db673d51e768291db",
                              deleted: false,
                              label: "Tienda",
                              createdAt: "2018-05-25T15:18:53.124Z",
                              updatedAt: "2018-05-25T15:34:49.116Z",
                              __v: 0,
                              icono: "fa-store"
                            },
                            areapadre: {
                              _id: "5b082d6df3e75dc929abf043",
                              deleted: false,
                              label: "Zona 11",
                              tipoarea: "5aa043c3cb00d939b2c044b9",
                              areapadre: "5b082abff3e75d66a2abf012",
                              empresa: "5b0828aeb673d5289c8291d8",
                              centrodecosto: "5b08290cb673d594a18291da",
                              descripcion: "Zona 11",
                              validthru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T15:36:13.778Z",
                              updatedAt: "2018-05-25T15:36:13.778Z",
                              __v: 0,
                              plazajefe: "5b084892f3e75d0b52abf0bb"
                            },
                            empresa: {
                              _id: "5b0828aeb673d5289c8291d8",
                              deleted: false,
                              label: "Demo",
                              pais: "5a9e37a9078b9b34d40a66fc",
                              moneda: "5a9ed732d75eb707a8287c50",
                              vencimiento: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            centrodecosto: {
                              _id: "5b08290cb673d594a18291da",
                              deleted: false,
                              label: "Operaciones",
                              empresa: "5b0828aeb673d5289c8291d8",
                              moneda: "5a9ed732d75eb707a8287c50",
                              validthru: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            descripcion: "Tienda Zona 11",
                            validthru: "2018-12-31T00:00:00.000Z",
                            createdAt: "2018-05-25T15:36:13.670Z",
                            updatedAt: "2018-05-29T18:03:01.272Z",
                            __v: 0,
                            plazajefe: {
                              _id: "5b084892f3e75d498aabf09c",
                              sillas: [
                                "5b088eb0f3e75df377abf2e8",
                                "5b088eb0f3e75d76d0abf2e9",
                                "5b08a0906416d8d3879343e9",
                                "5b08a0906416d84c379343ff"
                              ],
                              deleted: false,
                              area: "5b082d6df3e75d6c46abf034",
                              puesto: "5b083a64f3e75d0150abf066",
                              label: "Tienda Zona 11 - Ejecutivo de Ventas",
                              cantidad: 1,
                              centrodecosto: "5b08290cb673d594a18291da",
                              valid_thru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T17:32:02.455Z",
                              updatedAt: "2018-05-25T17:32:02.455Z",
                              __v: 1
                            },
                            children: []
                          },
                          {
                            _id: "5b082d6df3e75d6c8fabf045",
                            deleted: false,
                            label: "Bodega Zona 11",
                            tipoarea: {
                              _id: "5b08296fb673d5360a8291dc",
                              deleted: false,
                              label: "Bodega",
                              createdAt: "2018-05-25T15:19:11.530Z",
                              updatedAt: "2018-05-25T15:33:54.504Z",
                              __v: 0,
                              icono: "fa-warehouse"
                            },
                            areapadre: {
                              _id: "5b082d6df3e75dc929abf043",
                              deleted: false,
                              label: "Zona 11",
                              tipoarea: "5aa043c3cb00d939b2c044b9",
                              areapadre: "5b082abff3e75d66a2abf012",
                              empresa: "5b0828aeb673d5289c8291d8",
                              centrodecosto: "5b08290cb673d594a18291da",
                              descripcion: "Zona 11",
                              validthru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T15:36:13.778Z",
                              updatedAt: "2018-05-25T15:36:13.778Z",
                              __v: 0,
                              plazajefe: "5b084892f3e75d0b52abf0bb"
                            },
                            empresa: {
                              _id: "5b0828aeb673d5289c8291d8",
                              deleted: false,
                              label: "Demo",
                              pais: "5a9e37a9078b9b34d40a66fc",
                              moneda: "5a9ed732d75eb707a8287c50",
                              vencimiento: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            centrodecosto: {
                              _id: "5b08290cb673d594a18291da",
                              deleted: false,
                              label: "Operaciones",
                              empresa: "5b0828aeb673d5289c8291d8",
                              moneda: "5a9ed732d75eb707a8287c50",
                              validthru: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            descripcion: "Bodega Zona 11",
                            validthru: "2018-12-31T00:00:00.000Z",
                            createdAt: "2018-05-25T15:36:13.786Z",
                            updatedAt: "2018-05-25T16:14:34.602Z",
                            __v: 0,
                            plazajefe: {
                              _id: "5b084892f3e75d839babf099",
                              sillas: ["5b088eb0f3e75d7708abf2e5"],
                              deleted: false,
                              area: "5b082d6df3e75d6c8fabf045",
                              puesto: "5b083a64f3e75dff5babf069",
                              label:
                                "Bodega Zona 11 - Ejecutivo de Ventas Bodega",
                              cantidad: 1,
                              centrodecosto: "5b08290cb673d594a18291da",
                              valid_thru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T17:32:02.417Z",
                              updatedAt: "2018-05-25T17:32:02.417Z",
                              __v: 1
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        _id: "5b082d6df3e75d3776abf047",
                        deleted: false,
                        label: "Gran Via",
                        tipoarea: {
                          _id: "5aa043c3cb00d939b2c044b9",
                          label: "Departamento",
                          icono: "fa-depto",
                          createdAt: "2018-03-07T19:55:47.227Z",
                          updatedAt: "2018-03-07T19:55:47.227Z",
                          __v: 0,
                          deleted: false
                        },
                        areapadre: {
                          _id: "5b082abff3e75d66a2abf012",
                          deleted: false,
                          label: "Ventas Región Central",
                          tipoarea: "5aa043c3cb00d939b2c044b9",
                          areapadre: "5b082d6df3e75d8af8abf01a",
                          empresa: "5b0828aeb673d5289c8291d8",
                          centrodecosto: "5b08290cb673d594a18291da",
                          descripcion: "Ventas Región Central",
                          validthru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T15:24:47.111Z",
                          updatedAt: "2018-05-29T17:01:35.315Z",
                          __v: 0,
                          plazajefe: "5b0d872db673d52c638293a0"
                        },
                        empresa: {
                          _id: "5b0828aeb673d5289c8291d8",
                          deleted: false,
                          label: "Demo",
                          pais: "5a9e37a9078b9b34d40a66fc",
                          moneda: "5a9ed732d75eb707a8287c50",
                          vencimiento: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        centrodecosto: {
                          _id: "5b08290cb673d594a18291da",
                          deleted: false,
                          label: "Operaciones",
                          empresa: "5b0828aeb673d5289c8291d8",
                          moneda: "5a9ed732d75eb707a8287c50",
                          validthru: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        descripcion: "Gran Via",
                        validthru: "2018-12-31T00:00:00.000Z",
                        createdAt: "2018-05-25T15:36:13.799Z",
                        updatedAt: "2018-05-29T18:03:38.851Z",
                        __v: 0,
                        plazajefe: {
                          _id: "5b084892f3e75d4be5abf0c0",
                          sillas: [
                            "5b088eb4f3e75dbe9babf323",
                            "5b08a0906416d875a393440e",
                            "5b08a0906416d8569b934412"
                          ],
                          deleted: false,
                          area: "5b082d6df3e75d3776abf047",
                          puesto: "5b083a64f3e75db641abf082",
                          label: "Gran Via - Jefe de Ventas",
                          cantidad: 1,
                          centrodecosto: "5b08290cb673d594a18291da",
                          valid_thru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T17:32:02.665Z",
                          updatedAt: "2018-05-25T17:32:02.665Z",
                          __v: 1
                        },
                        children: []
                      },
                      {
                        _id: "5b082d6df3e75d25a0abf048",
                        deleted: false,
                        label: "Trebol",
                        tipoarea: {
                          _id: "5aa043c3cb00d939b2c044b9",
                          label: "Departamento",
                          icono: "fa-depto",
                          createdAt: "2018-03-07T19:55:47.227Z",
                          updatedAt: "2018-03-07T19:55:47.227Z",
                          __v: 0,
                          deleted: false
                        },
                        areapadre: {
                          _id: "5b082abff3e75d66a2abf012",
                          deleted: false,
                          label: "Ventas Región Central",
                          tipoarea: "5aa043c3cb00d939b2c044b9",
                          areapadre: "5b082d6df3e75d8af8abf01a",
                          empresa: "5b0828aeb673d5289c8291d8",
                          centrodecosto: "5b08290cb673d594a18291da",
                          descripcion: "Ventas Región Central",
                          validthru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T15:24:47.111Z",
                          updatedAt: "2018-05-29T17:01:35.315Z",
                          __v: 0,
                          plazajefe: "5b0d872db673d52c638293a0"
                        },
                        empresa: {
                          _id: "5b0828aeb673d5289c8291d8",
                          deleted: false,
                          label: "Demo",
                          pais: "5a9e37a9078b9b34d40a66fc",
                          moneda: "5a9ed732d75eb707a8287c50",
                          vencimiento: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        centrodecosto: {
                          _id: "5b08290cb673d594a18291da",
                          deleted: false,
                          label: "Operaciones",
                          empresa: "5b0828aeb673d5289c8291d8",
                          moneda: "5a9ed732d75eb707a8287c50",
                          validthru: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        descripcion: "Trebol",
                        validthru: "2018-12-31T00:00:00.000Z",
                        createdAt: "2018-05-25T15:36:13.805Z",
                        updatedAt: "2018-05-29T18:03:56.413Z",
                        __v: 0,
                        plazajefe: {
                          _id: "5b084892f3e75d3d9eabf0be",
                          sillas: [
                            "5b088eb4f3e75d14d1abf321",
                            "5b08a0906416d8e302934405"
                          ],
                          deleted: false,
                          area: "5b082d6df3e75d25a0abf048",
                          puesto: "5b083a64f3e75db641abf082",
                          label: "Trebol - Jefe de Ventas",
                          cantidad: 1,
                          centrodecosto: "5b08290cb673d594a18291da",
                          valid_thru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T17:32:02.643Z",
                          updatedAt: "2018-05-25T17:32:02.643Z",
                          __v: 1
                        },
                        children: []
                      },
                      {
                        _id: "5b082d6df3e75d9c93abf049",
                        deleted: false,
                        label: "Zona 4",
                        tipoarea: {
                          _id: "5aa043c3cb00d939b2c044b9",
                          label: "Departamento",
                          icono: "fa-depto",
                          createdAt: "2018-03-07T19:55:47.227Z",
                          updatedAt: "2018-03-07T19:55:47.227Z",
                          __v: 0,
                          deleted: false
                        },
                        areapadre: {
                          _id: "5b082abff3e75d66a2abf012",
                          deleted: false,
                          label: "Ventas Región Central",
                          tipoarea: "5aa043c3cb00d939b2c044b9",
                          areapadre: "5b082d6df3e75d8af8abf01a",
                          empresa: "5b0828aeb673d5289c8291d8",
                          centrodecosto: "5b08290cb673d594a18291da",
                          descripcion: "Ventas Región Central",
                          validthru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T15:24:47.111Z",
                          updatedAt: "2018-05-29T17:01:35.315Z",
                          __v: 0,
                          plazajefe: "5b0d872db673d52c638293a0"
                        },
                        empresa: {
                          _id: "5b0828aeb673d5289c8291d8",
                          deleted: false,
                          label: "Demo",
                          pais: "5a9e37a9078b9b34d40a66fc",
                          moneda: "5a9ed732d75eb707a8287c50",
                          vencimiento: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        centrodecosto: {
                          _id: "5b08290cb673d594a18291da",
                          deleted: false,
                          label: "Operaciones",
                          empresa: "5b0828aeb673d5289c8291d8",
                          moneda: "5a9ed732d75eb707a8287c50",
                          validthru: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        descripcion: "Zona 4",
                        validthru: "2018-12-31T00:00:00.000Z",
                        createdAt: "2018-05-25T15:36:13.810Z",
                        updatedAt: "2018-05-25T15:36:13.810Z",
                        __v: 0,
                        plazajefe: {
                          _id: "5b084892f3e75d72d0abf0bf",
                          sillas: [
                            "5b088eb4f3e75dc710abf322",
                            "5b08a0906416d8956e9343ea",
                            "5b08a0906416d8cccf9343f2",
                            "5b08a0906416d8825f934409"
                          ],
                          deleted: false,
                          area: "5b082d6df3e75d9c93abf049",
                          puesto: "5b083a64f3e75db641abf082",
                          label: "Zona 4 - Jefe de Ventas",
                          cantidad: 1,
                          centrodecosto: "5b08290cb673d594a18291da",
                          valid_thru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T17:32:02.660Z",
                          updatedAt: "2018-05-25T17:32:02.660Z",
                          __v: 1
                        },
                        children: [
                          {
                            _id: "5b082d6df3e75def5eabf017",
                            deleted: false,
                            label: "Tienda Zona 4",
                            tipoarea: {
                              _id: "5b08295db673d51e768291db",
                              deleted: false,
                              label: "Tienda",
                              createdAt: "2018-05-25T15:18:53.124Z",
                              updatedAt: "2018-05-25T15:34:49.116Z",
                              __v: 0,
                              icono: "fa-store"
                            },
                            areapadre: {
                              _id: "5b082d6df3e75d9c93abf049",
                              deleted: false,
                              label: "Zona 4",
                              tipoarea: "5aa043c3cb00d939b2c044b9",
                              areapadre: "5b082abff3e75d66a2abf012",
                              empresa: "5b0828aeb673d5289c8291d8",
                              centrodecosto: "5b08290cb673d594a18291da",
                              descripcion: "Zona 4",
                              validthru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T15:36:13.810Z",
                              updatedAt: "2018-05-25T15:36:13.810Z",
                              __v: 0,
                              plazajefe: "5b084892f3e75d72d0abf0bf"
                            },
                            empresa: {
                              _id: "5b0828aeb673d5289c8291d8",
                              deleted: false,
                              label: "Demo",
                              pais: "5a9e37a9078b9b34d40a66fc",
                              moneda: "5a9ed732d75eb707a8287c50",
                              vencimiento: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            centrodecosto: {
                              _id: "5b08290cb673d594a18291da",
                              deleted: false,
                              label: "Operaciones",
                              empresa: "5b0828aeb673d5289c8291d8",
                              moneda: "5a9ed732d75eb707a8287c50",
                              validthru: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            descripcion: "Tienda Zona 4",
                            validthru: "2018-12-31T00:00:00.000Z",
                            createdAt: "2018-05-25T15:36:13.451Z",
                            updatedAt: "2018-05-29T18:03:22.563Z",
                            __v: 0,
                            plazajefe: {
                              _id: "5b084892f3e75dfb64abf0a9",
                              sillas: ["5b088eb4f3e75da62dabf35c"],
                              deleted: false,
                              area: "5b082d6df3e75def5eabf017",
                              puesto: "5b083a64f3e75d0150abf066",
                              label: "Tienda Zona 4 - Ejecutivo de Ventas",
                              cantidad: 1,
                              centrodecosto: "5b08290cb673d594a18291da",
                              valid_thru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T17:32:02.553Z",
                              updatedAt: "2018-05-25T17:32:02.553Z",
                              __v: 1
                            },
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b082d6df3e75d6464abf019",
                    deleted: false,
                    label: "Venta Corporativa",
                    tipoarea: {
                      _id: "5aa043c3cb00d939b2c044b9",
                      label: "Departamento",
                      icono: "fa-depto",
                      createdAt: "2018-03-07T19:55:47.227Z",
                      updatedAt: "2018-03-07T19:55:47.227Z",
                      __v: 0,
                      deleted: false
                    },
                    areapadre: {
                      _id: "5b082d6df3e75d8af8abf01a",
                      deleted: false,
                      label: "Ventas",
                      tipoarea: "5aa043c3cb00d939b2c044b9",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Ventas",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:36:13.458Z",
                      updatedAt: "2018-05-28T22:21:22.417Z",
                      __v: 0,
                      plazajefe: "5b084892f3e75d3367abf0dd"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Venta Corporativa",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:36:13.458Z",
                    updatedAt: "2018-05-28T22:21:04.157Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b084892f3e75d1347abf0ed",
                      sillas: ["5b088eb1f3e75d889babf313"],
                      deleted: false,
                      area: "5b082d6df3e75d6464abf019",
                      puesto: "5b083a64f3e75dabc5abf073",
                      label:
                        "Venta Corporativa - Gerente de Ventas Departamental",
                      cantidad: 1,
                      centrodecosto: "5b08290cb673d594a18291da",
                      valid_thru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T17:32:02.895Z",
                      updatedAt: "2018-05-25T17:32:02.895Z",
                      __v: 1
                    },
                    children: [
                      {
                        _id: "5b082d6df3e75d687fabf03b",
                        deleted: false,
                        label: "Bolivar",
                        tipoarea: {
                          _id: "5aa043c3cb00d939b2c044b9",
                          label: "Departamento",
                          icono: "fa-depto",
                          createdAt: "2018-03-07T19:55:47.227Z",
                          updatedAt: "2018-03-07T19:55:47.227Z",
                          __v: 0,
                          deleted: false
                        },
                        areapadre: {
                          _id: "5b082d6df3e75d6464abf019",
                          deleted: false,
                          label: "Venta Corporativa",
                          tipoarea: "5aa043c3cb00d939b2c044b9",
                          areapadre: "5b082d6df3e75d8af8abf01a",
                          empresa: "5b0828aeb673d5289c8291d8",
                          centrodecosto: "5b08290cb673d594a18291da",
                          descripcion: "Venta Corporativa",
                          validthru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T15:36:13.458Z",
                          updatedAt: "2018-05-28T22:21:04.157Z",
                          __v: 0,
                          plazajefe: "5b084892f3e75d1347abf0ed"
                        },
                        empresa: {
                          _id: "5b0828aeb673d5289c8291d8",
                          deleted: false,
                          label: "Demo",
                          pais: "5a9e37a9078b9b34d40a66fc",
                          moneda: "5a9ed732d75eb707a8287c50",
                          vencimiento: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        centrodecosto: {
                          _id: "5b08290cb673d594a18291da",
                          deleted: false,
                          label: "Operaciones",
                          empresa: "5b0828aeb673d5289c8291d8",
                          moneda: "5a9ed732d75eb707a8287c50",
                          validthru: "2018-12-31T06:00:00.000Z",
                          __v: 0
                        },
                        descripcion: "Bolivar",
                        validthru: "2018-12-31T00:00:00.000Z",
                        createdAt: "2018-05-25T15:36:13.716Z",
                        updatedAt: "2018-05-25T16:11:45.661Z",
                        __v: 0,
                        plazajefe: {
                          _id: "5b084892f3e75db6dbabf0a4",
                          sillas: [
                            "5b088eb0f3e75d1d16abf2f1",
                            "5b088eb1f3e75d37fbabf2f2",
                            "5b088eb1f3e75dd772abf2f3",
                            "5b088eb1f3e75d03e7abf2f4"
                          ],
                          deleted: false,
                          area: "5b082d6df3e75d687fabf03b",
                          puesto: "5b083a64f3e75d0150abf066",
                          label: "Bolivar - Ejecutivo de Ventas",
                          cantidad: 3,
                          centrodecosto: "5b08290cb673d594a18291da",
                          valid_thru: "2018-12-31T00:00:00.000Z",
                          createdAt: "2018-05-25T17:32:02.524Z",
                          updatedAt: "2018-05-25T17:32:02.524Z",
                          __v: 1
                        },
                        children: [
                          {
                            _id: "5b082d6df3e75dd7d2abf04d",
                            deleted: false,
                            label: "Tienda Bolivar",
                            tipoarea: {
                              _id: "5b08295db673d51e768291db",
                              deleted: false,
                              label: "Tienda",
                              createdAt: "2018-05-25T15:18:53.124Z",
                              updatedAt: "2018-05-25T15:34:49.116Z",
                              __v: 0,
                              icono: "fa-store"
                            },
                            areapadre: {
                              _id: "5b082d6df3e75d687fabf03b",
                              deleted: false,
                              label: "Bolivar",
                              tipoarea: "5aa043c3cb00d939b2c044b9",
                              areapadre: "5b082d6df3e75d6464abf019",
                              empresa: "5b0828aeb673d5289c8291d8",
                              centrodecosto: "5b08290cb673d594a18291da",
                              descripcion: "Bolivar",
                              validthru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T15:36:13.716Z",
                              updatedAt: "2018-05-25T16:11:45.661Z",
                              __v: 0,
                              plazajefe: "5b084892f3e75db6dbabf0a4"
                            },
                            empresa: {
                              _id: "5b0828aeb673d5289c8291d8",
                              deleted: false,
                              label: "Demo",
                              pais: "5a9e37a9078b9b34d40a66fc",
                              moneda: "5a9ed732d75eb707a8287c50",
                              vencimiento: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            centrodecosto: {
                              _id: "5b08290cb673d594a18291da",
                              deleted: false,
                              label: "Operaciones",
                              empresa: "5b0828aeb673d5289c8291d8",
                              moneda: "5a9ed732d75eb707a8287c50",
                              validthru: "2018-12-31T06:00:00.000Z",
                              __v: 0
                            },
                            descripcion: "Tienda Bolivar",
                            validthru: "2018-12-31T00:00:00.000Z",
                            createdAt: "2018-05-25T15:36:13.830Z",
                            updatedAt: "2018-05-25T16:11:55.904Z",
                            __v: 0,
                            plazajefe: {
                              _id: "5b084892f3e75d3ac9abf0d8",
                              sillas: ["5b088eb4f3e75d697eabf360"],
                              deleted: false,
                              area: "5b082d6df3e75dd7d2abf04d",
                              puesto: "5b083a64f3e75d4569abf064",
                              label:
                                "Tienda Bolivar - Coordinador de Recambio",
                              cantidad: 1,
                              centrodecosto: "5b08290cb673d594a18291da",
                              valid_thru: "2018-12-31T00:00:00.000Z",
                              createdAt: "2018-05-25T17:32:02.789Z",
                              updatedAt: "2018-05-25T17:32:02.789Z",
                              __v: 1
                            },
                            children: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b082d6df3e75d7976abf01b",
                deleted: false,
                label: "Representante Comercial",
                tipoarea: {
                  _id: "5aa043c3cb00d939b2c044b9",
                  label: "Departamento",
                  icono: "fa-depto",
                  createdAt: "2018-03-07T19:55:47.227Z",
                  updatedAt: "2018-03-07T19:55:47.227Z",
                  __v: 0,
                  deleted: false
                },
                areapadre: {
                  _id: "5b082d6df3e75dc045abf02e",
                  deleted: false,
                  label: "Planta",
                  tipoarea: "5aa043c3cb00d939b2c044b9",
                  areapadre: "5b082abff3e75d7f78abf00a",
                  empresa: "5b0828aeb673d5289c8291d8",
                  centrodecosto: "5b08290cb673d594a18291da",
                  descripcion: "Planta",
                  validthru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T15:36:13.629Z",
                  updatedAt: "2018-05-29T15:21:48.257Z",
                  __v: 0,
                  plazajefe: "5b0d6ffab673d56d5682929d"
                },
                empresa: {
                  _id: "5b0828aeb673d5289c8291d8",
                  deleted: false,
                  label: "Demo",
                  pais: "5a9e37a9078b9b34d40a66fc",
                  moneda: "5a9ed732d75eb707a8287c50",
                  vencimiento: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                centrodecosto: {
                  _id: "5b08290cb673d594a18291da",
                  deleted: false,
                  label: "Operaciones",
                  empresa: "5b0828aeb673d5289c8291d8",
                  moneda: "5a9ed732d75eb707a8287c50",
                  validthru: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                descripcion: "Representante Comercial",
                validthru: "2018-12-31T00:00:00.000Z",
                createdAt: "2018-05-25T15:36:13.458Z",
                updatedAt: "2018-05-28T22:21:32.784Z",
                __v: 0,
                plazajefe: {
                  _id: "5b084892f3e75dea65abf0ec",
                  sillas: [
                    "5b088eb1f3e75d1432abf314",
                    "5b088eb4f3e75d2d65abf33f"
                  ],
                  deleted: false,
                  area: "5b082d6df3e75d7976abf01b",
                  puesto: "5b083a64f3e75d1f10abf070",
                  label:
                    "Representante Comercial - Gerente de Representante Comerciales",
                  cantidad: 2,
                  centrodecosto: "5b08290cb673d594a18291da",
                  valid_thru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T17:32:02.895Z",
                  updatedAt: "2018-05-25T17:32:02.895Z",
                  __v: 2
                },
                children: []
              },
              {
                _id: "5b082d6df3e75dbabeabf01f",
                deleted: false,
                label: "Servicio Técnico",
                tipoarea: {
                  _id: "5aa043c3cb00d939b2c044b9",
                  label: "Departamento",
                  icono: "fa-depto",
                  createdAt: "2018-03-07T19:55:47.227Z",
                  updatedAt: "2018-03-07T19:55:47.227Z",
                  __v: 0,
                  deleted: false
                },
                areapadre: {
                  _id: "5b082d6df3e75dc045abf02e",
                  deleted: false,
                  label: "Planta",
                  tipoarea: "5aa043c3cb00d939b2c044b9",
                  areapadre: "5b082abff3e75d7f78abf00a",
                  empresa: "5b0828aeb673d5289c8291d8",
                  centrodecosto: "5b08290cb673d594a18291da",
                  descripcion: "Planta",
                  validthru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T15:36:13.629Z",
                  updatedAt: "2018-05-29T15:21:48.257Z",
                  __v: 0,
                  plazajefe: "5b0d6ffab673d56d5682929d"
                },
                empresa: {
                  _id: "5b0828aeb673d5289c8291d8",
                  deleted: false,
                  label: "Demo",
                  pais: "5a9e37a9078b9b34d40a66fc",
                  moneda: "5a9ed732d75eb707a8287c50",
                  vencimiento: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                centrodecosto: {
                  _id: "5b08290cb673d594a18291da",
                  deleted: false,
                  label: "Operaciones",
                  empresa: "5b0828aeb673d5289c8291d8",
                  moneda: "5a9ed732d75eb707a8287c50",
                  validthru: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                descripcion: "Servicio Técnico",
                validthru: "2018-12-31T00:00:00.000Z",
                createdAt: "2018-05-25T15:36:13.516Z",
                updatedAt: "2018-05-28T22:23:56.691Z",
                __v: 0,
                plazajefe: {
                  _id: "5b084892f3e75d7c4eabf0b4",
                  sillas: ["5b088eb1f3e75d1b3babf315"],
                  deleted: false,
                  area: "5b082d6df3e75dbabeabf01f",
                  puesto: "5b083a64f3e75dc6f8abf07b",
                  label:
                    "Servicio Técnico - Gerente de Desarrollo de Servicio Tecnico",
                  cantidad: 1,
                  centrodecosto: "5b08290cb673d594a18291da",
                  valid_thru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T17:32:02.600Z",
                  updatedAt: "2018-05-25T17:32:02.600Z",
                  __v: 1
                },
                children: [
                  {
                    _id: "5b082d6df3e75dd026abf018",
                    deleted: false,
                    label: "Capacitacion Tecnica",
                    tipoarea: {
                      _id: "5aa043c3cb00d939b2c044b9",
                      label: "Departamento",
                      icono: "fa-depto",
                      createdAt: "2018-03-07T19:55:47.227Z",
                      updatedAt: "2018-03-07T19:55:47.227Z",
                      __v: 0,
                      deleted: false
                    },
                    areapadre: {
                      _id: "5b082d6df3e75dbabeabf01f",
                      deleted: false,
                      label: "Servicio Técnico",
                      tipoarea: "5aa043c3cb00d939b2c044b9",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Servicio Técnico",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:36:13.516Z",
                      updatedAt: "2018-05-28T22:23:56.691Z",
                      __v: 0,
                      plazajefe: "5b084892f3e75d7c4eabf0b4"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Capacitacion Tecnica",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:36:13.458Z",
                    updatedAt: "2018-05-28T22:20:51.621Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b084892f3e75d4c5aabf0e7",
                      sillas: ["5b088eb1f3e75d9a50abf312"],
                      deleted: false,
                      area: "5b082d6df3e75dd026abf018",
                      puesto: "5b083a64f3e75d1ab9abf06c",
                      label: "Capacitacion Tecnica - Gerente de Capacitación",
                      cantidad: 1,
                      centrodecosto: "5b08290cb673d594a18291da",
                      valid_thru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T17:32:02.871Z",
                      updatedAt: "2018-05-25T17:32:02.871Z",
                      __v: 1
                    },
                    children: []
                  },
                  {
                    _id: "5b082d6df3e75d151dabf020",
                    deleted: false,
                    label: "Desarrollo de Bodega",
                    tipoarea: {
                      _id: "5b08296fb673d5360a8291dc",
                      deleted: false,
                      label: "Bodega",
                      createdAt: "2018-05-25T15:19:11.530Z",
                      updatedAt: "2018-05-25T15:33:54.504Z",
                      __v: 0,
                      icono: "fa-warehouse"
                    },
                    areapadre: {
                      _id: "5b082d6df3e75dbabeabf01f",
                      deleted: false,
                      label: "Servicio Técnico",
                      tipoarea: "5aa043c3cb00d939b2c044b9",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Servicio Técnico",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:36:13.516Z",
                      updatedAt: "2018-05-28T22:23:56.691Z",
                      __v: 0,
                      plazajefe: "5b084892f3e75d7c4eabf0b4"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Desarrollo de Bodega",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:36:13.518Z",
                    updatedAt: "2018-05-29T15:53:18.259Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b0d775fb673d5c2e78292a0",
                      sillas: [],
                      deleted: false,
                      area: "5b082d6df3e75d151dabf020",
                      puesto: "5b0d7b40b673d5eb278292a4",
                      label:
                        "Desarrollo de Bodega - Jefe Desarrollo de Bodega",
                      cantidad: 1,
                      centrodecosto: "5b08290cb673d594a18291da",
                      __v: 0
                    },
                    children: []
                  },
                  {
                    _id: "5b082d6df3e75d9498abf030",
                    deleted: false,
                    label: "Garantías",
                    tipoarea: {
                      _id: "5aa043c3cb00d939b2c044b9",
                      label: "Departamento",
                      icono: "fa-depto",
                      createdAt: "2018-03-07T19:55:47.227Z",
                      updatedAt: "2018-03-07T19:55:47.227Z",
                      __v: 0,
                      deleted: false
                    },
                    areapadre: {
                      _id: "5b082d6df3e75dbabeabf01f",
                      deleted: false,
                      label: "Servicio Técnico",
                      tipoarea: "5aa043c3cb00d939b2c044b9",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Servicio Técnico",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:36:13.516Z",
                      updatedAt: "2018-05-28T22:23:56.691Z",
                      __v: 0,
                      plazajefe: "5b084892f3e75d7c4eabf0b4"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Garantías",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:36:13.643Z",
                    updatedAt: "2018-05-29T15:53:35.931Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b084892f3e75d38fbabf0b8",
                      sillas: ["5b088eb1f3e75d58beabf31b"],
                      deleted: false,
                      area: "5b082d6df3e75d9498abf030",
                      puesto: "5b083a64f3e75dd7f8abf07f",
                      label: "Garantías - Gerente de Garantías",
                      cantidad: 1,
                      centrodecosto: "5b08290cb673d594a18291da",
                      valid_thru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T17:32:02.621Z",
                      updatedAt: "2018-05-25T17:32:02.621Z",
                      __v: 1
                    },
                    children: []
                  }
                ]
              },
              {
                _id: "5b082d6df3e75d0c75abf032",
                deleted: false,
                label: "Marketing",
                tipoarea: {
                  _id: "5aa043c3cb00d939b2c044b9",
                  label: "Departamento",
                  icono: "fa-depto",
                  createdAt: "2018-03-07T19:55:47.227Z",
                  updatedAt: "2018-03-07T19:55:47.227Z",
                  __v: 0,
                  deleted: false
                },
                areapadre: {
                  _id: "5b082d6df3e75dc045abf02e",
                  deleted: false,
                  label: "Planta",
                  tipoarea: "5aa043c3cb00d939b2c044b9",
                  areapadre: "5b082abff3e75d7f78abf00a",
                  empresa: "5b0828aeb673d5289c8291d8",
                  centrodecosto: "5b08290cb673d594a18291da",
                  descripcion: "Planta",
                  validthru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T15:36:13.629Z",
                  updatedAt: "2018-05-29T15:21:48.257Z",
                  __v: 0,
                  plazajefe: "5b0d6ffab673d56d5682929d"
                },
                empresa: {
                  _id: "5b0828aeb673d5289c8291d8",
                  deleted: false,
                  label: "Demo",
                  pais: "5a9e37a9078b9b34d40a66fc",
                  moneda: "5a9ed732d75eb707a8287c50",
                  vencimiento: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                centrodecosto: {
                  _id: "5b08290cb673d594a18291da",
                  deleted: false,
                  label: "Operaciones",
                  empresa: "5b0828aeb673d5289c8291d8",
                  moneda: "5a9ed732d75eb707a8287c50",
                  validthru: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                descripcion: "Marketing",
                validthru: "2018-12-31T00:00:00.000Z",
                createdAt: "2018-05-25T15:36:13.653Z",
                updatedAt: "2018-05-29T15:40:52.227Z",
                __v: 0,
                plazajefe: {
                  _id: "5b084892f3e75db54aabf0d6",
                  sillas: ["5b088eb4f3e75df38cabf32e"],
                  deleted: false,
                  area: "5b082d6df3e75d0c75abf032",
                  puesto: "5b083a64f3e75de755abf081",
                  label: "Marketing - Gerente de Trademarketing",
                  cantidad: 1,
                  centrodecosto: "5b08290cb673d594a18291da",
                  valid_thru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T17:32:02.783Z",
                  updatedAt: "2018-05-25T17:32:02.783Z",
                  __v: 1
                },
                children: []
              },
              {
                _id: "5b082d6df3e75d1ed6abf037",
                deleted: false,
                label: "Representante de Operaciónes",
                tipoarea: {
                  _id: "5aa043c3cb00d939b2c044b9",
                  label: "Departamento",
                  icono: "fa-depto",
                  createdAt: "2018-03-07T19:55:47.227Z",
                  updatedAt: "2018-03-07T19:55:47.227Z",
                  __v: 0,
                  deleted: false
                },
                areapadre: {
                  _id: "5b082d6df3e75dc045abf02e",
                  deleted: false,
                  label: "Planta",
                  tipoarea: "5aa043c3cb00d939b2c044b9",
                  areapadre: "5b082abff3e75d7f78abf00a",
                  empresa: "5b0828aeb673d5289c8291d8",
                  centrodecosto: "5b08290cb673d594a18291da",
                  descripcion: "Planta",
                  validthru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T15:36:13.629Z",
                  updatedAt: "2018-05-29T15:21:48.257Z",
                  __v: 0,
                  plazajefe: "5b0d6ffab673d56d5682929d"
                },
                empresa: {
                  _id: "5b0828aeb673d5289c8291d8",
                  deleted: false,
                  label: "Demo",
                  pais: "5a9e37a9078b9b34d40a66fc",
                  moneda: "5a9ed732d75eb707a8287c50",
                  vencimiento: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                centrodecosto: {
                  _id: "5b08290cb673d594a18291da",
                  deleted: false,
                  label: "Operaciones",
                  empresa: "5b0828aeb673d5289c8291d8",
                  moneda: "5a9ed732d75eb707a8287c50",
                  validthru: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                descripcion: "Representante de Operaciónes",
                validthru: "2018-12-31T00:00:00.000Z",
                createdAt: "2018-05-25T15:36:13.695Z",
                updatedAt: "2018-05-29T15:40:31.714Z",
                __v: 0,
                plazajefe: {
                  _id: "5b084892f3e75d521aabf0af",
                  sillas: [],
                  deleted: false,
                  area: "5b082d6df3e75d1ed6abf037",
                  puesto: "5b083a64f3e75df22eabf06f",
                  label:
                    "Representante de Operaciónes - Gerente de operaciones comerciales",
                  cantidad: 1,
                  centrodecosto: "5b08290cb673d594a18291da",
                  valid_thru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T17:32:02.581Z",
                  updatedAt: "2018-05-25T17:32:02.581Z",
                  __v: 0
                },
                children: []
              },
              {
                _id: "5b082d6df3e75d7f28abf050",
                deleted: false,
                label: "Bodegas",
                tipoarea: {
                  _id: "5b08296fb673d5360a8291dc",
                  deleted: false,
                  label: "Bodega",
                  createdAt: "2018-05-25T15:19:11.530Z",
                  updatedAt: "2018-05-25T15:33:54.504Z",
                  __v: 0,
                  icono: "fa-warehouse"
                },
                areapadre: {
                  _id: "5b082d6df3e75dc045abf02e",
                  deleted: false,
                  label: "Planta",
                  tipoarea: "5aa043c3cb00d939b2c044b9",
                  areapadre: "5b082abff3e75d7f78abf00a",
                  empresa: "5b0828aeb673d5289c8291d8",
                  centrodecosto: "5b08290cb673d594a18291da",
                  descripcion: "Planta",
                  validthru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T15:36:13.629Z",
                  updatedAt: "2018-05-29T15:21:48.257Z",
                  __v: 0,
                  plazajefe: "5b0d6ffab673d56d5682929d"
                },
                empresa: {
                  _id: "5b0828aeb673d5289c8291d8",
                  deleted: false,
                  label: "Demo",
                  pais: "5a9e37a9078b9b34d40a66fc",
                  moneda: "5a9ed732d75eb707a8287c50",
                  vencimiento: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                centrodecosto: {
                  _id: "5b08290cb673d594a18291da",
                  deleted: false,
                  label: "Operaciones",
                  empresa: "5b0828aeb673d5289c8291d8",
                  moneda: "5a9ed732d75eb707a8287c50",
                  validthru: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                descripcion: "Bodegas",
                validthru: "2018-12-31T00:00:00.000Z",
                createdAt: "2018-05-25T15:36:13.849Z",
                updatedAt: "2018-05-29T15:38:25.504Z",
                __v: 0,
                plazajefe: {
                  _id: "5b084892f3e75d2fb6abf0df",
                  sillas: ["5b088eb1f3e75d039cabf310"],
                  deleted: false,
                  area: "5b082d6df3e75d7f28abf050",
                  puesto: "5b083a64f3e75d045cabf071",
                  label: "Bodegas - Gerente de Bodega",
                  cantidad: 2,
                  centrodecosto: "5b08290cb673d594a18291da",
                  valid_thru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T17:32:02.828Z",
                  updatedAt: "2018-05-25T17:32:02.828Z",
                  __v: 1
                },
                children: [
                  {
                    _id: "5b082d6df3e75dfa49abf02f",
                    deleted: false,
                    label: "Pilotos",
                    tipoarea: {
                      _id: "5aa043c3cb00d939b2c044b9",
                      label: "Departamento",
                      icono: "fa-depto",
                      createdAt: "2018-03-07T19:55:47.227Z",
                      updatedAt: "2018-03-07T19:55:47.227Z",
                      __v: 0,
                      deleted: false
                    },
                    areapadre: {
                      _id: "5b082d6df3e75d7f28abf050",
                      deleted: false,
                      label: "Bodegas",
                      tipoarea: "5b08296fb673d5360a8291dc",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Bodegas",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:36:13.849Z",
                      updatedAt: "2018-05-29T15:38:25.504Z",
                      __v: 0,
                      plazajefe: "5b084892f3e75d2fb6abf0df"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Pilotos",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:36:13.638Z",
                    updatedAt: "2018-05-29T15:54:42.038Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b084892f3e75d74d9abf0b7",
                      sillas: ["5b088eb1f3e75d0a2cabf31a"],
                      deleted: false,
                      area: "5b082d6df3e75dfa49abf02f",
                      puesto: "5b083a64f3e75dd5ffabf07e",
                      label: "Pilotos - Jefe de Pilotos",
                      cantidad: 1,
                      centrodecosto: "5b08290cb673d594a18291da",
                      valid_thru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T17:32:02.621Z",
                      updatedAt: "2018-05-25T17:32:02.621Z",
                      __v: 1
                    },
                    children: []
                  },
                  {
                    _id: "5b082d6df3e75d7f8babf038",
                    deleted: false,
                    label: "Promociones",
                    tipoarea: {
                      _id: "5aa043c3cb00d939b2c044b9",
                      label: "Departamento",
                      icono: "fa-depto",
                      createdAt: "2018-03-07T19:55:47.227Z",
                      updatedAt: "2018-03-07T19:55:47.227Z",
                      __v: 0,
                      deleted: false
                    },
                    areapadre: {
                      _id: "5b082d6df3e75d7f28abf050",
                      deleted: false,
                      label: "Bodegas",
                      tipoarea: "5b08296fb673d5360a8291dc",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Bodegas",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:36:13.849Z",
                      updatedAt: "2018-05-29T15:38:25.504Z",
                      __v: 0,
                      plazajefe: "5b084892f3e75d2fb6abf0df"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Promociones",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:36:13.695Z",
                    updatedAt: "2018-05-29T15:55:03.303Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b084892f3e75d1742abf0b9",
                      sillas: [
                        "5b088eb4f3e75d0406abf31c",
                        "5b08a0906416d883ee9343ed"
                      ],
                      deleted: false,
                      area: "5b082d6df3e75d7f8babf038",
                      puesto: "5b083a64f3e75dab1babf080",
                      label: "Promociones - Jefe de Promociones",
                      cantidad: 1,
                      centrodecosto: "5b08290cb673d594a18291da",
                      valid_thru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T17:32:02.626Z",
                      updatedAt: "2018-05-25T17:32:02.626Z",
                      __v: 1
                    },
                    children: []
                  },
                  {
                    _id: "5b082d6df3e75da9e6abf04f",
                    deleted: false,
                    label: "Bodega Central",
                    tipoarea: {
                      _id: "5b08296fb673d5360a8291dc",
                      deleted: false,
                      label: "Bodega",
                      createdAt: "2018-05-25T15:19:11.530Z",
                      updatedAt: "2018-05-25T15:33:54.504Z",
                      __v: 0,
                      icono: "fa-warehouse"
                    },
                    areapadre: {
                      _id: "5b082d6df3e75d7f28abf050",
                      deleted: false,
                      label: "Bodegas",
                      tipoarea: "5b08296fb673d5360a8291dc",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Bodegas",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:36:13.849Z",
                      updatedAt: "2018-05-29T15:38:25.504Z",
                      __v: 0,
                      plazajefe: "5b084892f3e75d2fb6abf0df"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Bodega Central",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:36:13.837Z",
                    updatedAt: "2018-05-29T15:55:26.842Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b084892f3e75dc3a3abf095",
                      sillas: [
                        "5b088eb4f3e75d5e36abf359",
                        "5b0dfb08618304e71f347ffd",
                        "5b0dfb2a6183044690347ffe"
                      ],
                      deleted: false,
                      area: "5b082d6df3e75da9e6abf04f",
                      puesto: "5b083a64f3e75d5927abf063",
                      label:
                        "Bodega Central - Coordinador de Gestion Tienda-Bodega",
                      cantidad: 3,
                      centrodecosto: "5b08290cb673d594a18291da",
                      valid_thru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T17:32:02.395Z",
                      updatedAt: "2018-06-01T22:00:01.987Z",
                      __v: 2
                    },
                    children: []
                  }
                ]
              },
              {
                _id: "5b082d6df3e75d5b8aabf051",
                deleted: false,
                label: "Distribuidores",
                tipoarea: {
                  _id: "5aa043c3cb00d939b2c044b9",
                  label: "Departamento",
                  icono: "fa-depto",
                  createdAt: "2018-03-07T19:55:47.227Z",
                  updatedAt: "2018-03-07T19:55:47.227Z",
                  __v: 0,
                  deleted: false
                },
                areapadre: {
                  _id: "5b082d6df3e75dc045abf02e",
                  deleted: false,
                  label: "Planta",
                  tipoarea: "5aa043c3cb00d939b2c044b9",
                  areapadre: "5b082abff3e75d7f78abf00a",
                  empresa: "5b0828aeb673d5289c8291d8",
                  centrodecosto: "5b08290cb673d594a18291da",
                  descripcion: "Planta",
                  validthru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T15:36:13.629Z",
                  updatedAt: "2018-05-29T15:21:48.257Z",
                  __v: 0,
                  plazajefe: "5b0d6ffab673d56d5682929d"
                },
                empresa: {
                  _id: "5b0828aeb673d5289c8291d8",
                  deleted: false,
                  label: "Demo",
                  pais: "5a9e37a9078b9b34d40a66fc",
                  moneda: "5a9ed732d75eb707a8287c50",
                  vencimiento: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                centrodecosto: {
                  _id: "5b08290cb673d594a18291da",
                  deleted: false,
                  label: "Operaciones",
                  empresa: "5b0828aeb673d5289c8291d8",
                  moneda: "5a9ed732d75eb707a8287c50",
                  validthru: "2018-12-31T06:00:00.000Z",
                  __v: 0
                },
                descripcion: "Distribuidores",
                validthru: "2018-12-31T00:00:00.000Z",
                createdAt: "2018-05-25T15:36:13.853Z",
                updatedAt: "2018-05-29T15:28:06.057Z",
                __v: 0,
                plazajefe: {
                  _id: "5b084892f3e75d8258abf0d9",
                  sillas: ["5b088eb1f3e75de097abf30d"],
                  deleted: false,
                  area: "5b082d6df3e75d5b8aabf051",
                  puesto: "5b083a64f3e75d419babf06e",
                  label: "Distribuidores - Gerente de Distribuidores",
                  cantidad: 1,
                  centrodecosto: "5b08290cb673d594a18291da",
                  valid_thru: "2018-12-31T00:00:00.000Z",
                  createdAt: "2018-05-25T17:32:02.795Z",
                  updatedAt: "2018-05-25T17:32:02.795Z",
                  __v: 1
                },
                children: [
                  {
                    _id: "5b082d6df3e75d1320abf016",
                    deleted: false,
                    label: "Aperturas",
                    tipoarea: {
                      _id: "5aa043c3cb00d939b2c044b9",
                      label: "Departamento",
                      icono: "fa-depto",
                      createdAt: "2018-03-07T19:55:47.227Z",
                      updatedAt: "2018-03-07T19:55:47.227Z",
                      __v: 0,
                      deleted: false
                    },
                    areapadre: {
                      _id: "5b082d6df3e75d5b8aabf051",
                      deleted: false,
                      label: "Distribuidores",
                      tipoarea: "5aa043c3cb00d939b2c044b9",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Distribuidores",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:36:13.853Z",
                      updatedAt: "2018-05-29T15:28:06.057Z",
                      __v: 0,
                      plazajefe: "5b084892f3e75d8258abf0d9"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Aperturas",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:36:13.430Z",
                    updatedAt: "2018-05-28T22:20:31.985Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b084892f3e75d7184abf0d7",
                      sillas: [
                        "5b088eb4f3e75da3ceabf32a",
                        "5b088eb4f3e75dd808abf34e"
                      ],
                      deleted: false,
                      area: "5b082d6df3e75d1320abf016",
                      puesto: "5b083a64f3e75d992fabf07a",
                      label: "Aperturas - Jefe de Aperturas",
                      cantidad: 2,
                      centrodecosto: "5b08290cb673d594a18291da",
                      valid_thru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T17:32:02.789Z",
                      updatedAt: "2018-05-25T17:32:02.789Z",
                      __v: 2
                    },
                    children: []
                  },
                  {
                    _id: "5b082d6df3e75dd752abf02b",
                    deleted: false,
                    label: "Distribuidores Región Norte Oriente",
                    tipoarea: {
                      _id: "5aa043c3cb00d939b2c044b9",
                      label: "Departamento",
                      icono: "fa-depto",
                      createdAt: "2018-03-07T19:55:47.227Z",
                      updatedAt: "2018-03-07T19:55:47.227Z",
                      __v: 0,
                      deleted: false
                    },
                    areapadre: {
                      _id: "5b082d6df3e75d5b8aabf051",
                      deleted: false,
                      label: "Distribuidores",
                      tipoarea: "5aa043c3cb00d939b2c044b9",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Distribuidores",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:36:13.853Z",
                      updatedAt: "2018-05-29T15:28:06.057Z",
                      __v: 0,
                      plazajefe: "5b084892f3e75d8258abf0d9"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Distribuidores Región Norte Oriente",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:36:13.606Z",
                    updatedAt: "2018-05-29T15:44:04.709Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b084892f3e75d2746abf0ce",
                      sillas: [
                        "5b088eb4f3e75ddb51abf351",
                        "5b088eb4f3e75d186babf352",
                        "5b08a0906416d838769343fc"
                      ],
                      deleted: false,
                      area: "5b082d6df3e75dd752abf02b",
                      puesto: "5b083a64f3e75d4d06abf088",
                      label:
                        "Distribuidores Región Norte Oriente - Supervisor de Distribuidores",
                      cantidad: 2,
                      centrodecosto: "5b08290cb673d594a18291da",
                      valid_thru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T17:32:02.739Z",
                      updatedAt: "2018-05-25T17:32:02.739Z",
                      __v: 2
                    },
                    children: []
                  },
                  {
                    _id: "5b082d6df3e75d73fbabf02c",
                    deleted: false,
                    label: "Distribuidores Región Capital",
                    tipoarea: {
                      _id: "5aa043c3cb00d939b2c044b9",
                      label: "Departamento",
                      icono: "fa-depto",
                      createdAt: "2018-03-07T19:55:47.227Z",
                      updatedAt: "2018-03-07T19:55:47.227Z",
                      __v: 0,
                      deleted: false
                    },
                    areapadre: {
                      _id: "5b082d6df3e75d5b8aabf051",
                      deleted: false,
                      label: "Distribuidores",
                      tipoarea: "5aa043c3cb00d939b2c044b9",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Distribuidores",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:36:13.853Z",
                      updatedAt: "2018-05-29T15:28:06.057Z",
                      __v: 0,
                      plazajefe: "5b084892f3e75d8258abf0d9"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Distribuidores Región Capital",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:36:13.606Z",
                    updatedAt: "2018-05-29T15:44:28.200Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b084892f3e75dfa19abf0cd",
                      sillas: [
                        "5b088eb4f3e75d02daabf350",
                        "5b08a0906416d80f279343fe",
                        "5b08a0906416d8194e934416"
                      ],
                      deleted: false,
                      area: "5b082d6df3e75d73fbabf02c",
                      puesto: "5b083a64f3e75d4d06abf088",
                      label:
                        "Distribuidores Región Capital - Supervisor de Distribuidores",
                      cantidad: 1,
                      centrodecosto: "5b08290cb673d594a18291da",
                      valid_thru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T17:32:02.723Z",
                      updatedAt: "2018-05-25T17:32:02.723Z",
                      __v: 1
                    },
                    children: []
                  },
                  {
                    _id: "5b082d6df3e75d024babf02d",
                    deleted: false,
                    label: "Distribuidores Region Sur-Occidente",
                    tipoarea: {
                      _id: "5aa043c3cb00d939b2c044b9",
                      label: "Departamento",
                      icono: "fa-depto",
                      createdAt: "2018-03-07T19:55:47.227Z",
                      updatedAt: "2018-03-07T19:55:47.227Z",
                      __v: 0,
                      deleted: false
                    },
                    areapadre: {
                      _id: "5b082d6df3e75d5b8aabf051",
                      deleted: false,
                      label: "Distribuidores",
                      tipoarea: "5aa043c3cb00d939b2c044b9",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Distribuidores",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:36:13.853Z",
                      updatedAt: "2018-05-29T15:28:06.057Z",
                      __v: 0,
                      plazajefe: "5b084892f3e75d8258abf0d9"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b08290cb673d594a18291da",
                      deleted: false,
                      label: "Operaciones",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    descripcion: "Distribuidores Region Sur-Occidente",
                    validthru: "2018-12-31T00:00:00.000Z",
                    createdAt: "2018-05-25T15:36:13.607Z",
                    updatedAt: "2018-05-29T15:44:15.318Z",
                    __v: 0,
                    plazajefe: {
                      _id: "5b084892f3e75db026abf0cf",
                      sillas: [
                        "5b088eb4f3e75d186babf352",
                        "5b088eb4f3e75ded53abf353",
                        "5b08a0906416d81dc39343f1"
                      ],
                      deleted: false,
                      area: "5b082d6df3e75d024babf02d",
                      puesto: "5b083a64f3e75d4d06abf088",
                      label:
                        "Distribuidores Region Sur-Occidente - Supervisor de Distribuidores",
                      cantidad: 1,
                      centrodecosto: "5b08290cb673d594a18291da",
                      valid_thru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T17:32:02.749Z",
                      updatedAt: "2018-05-25T17:32:02.749Z",
                      __v: 1
                    },
                    children: []
                  },
                  {
                    _id: "5b1b09474173b4d8ddaee182",
                    areashijas: [],
                    plazas: [],
                    deleted: false,
                    label: "Productos Especiales",
                    tipoarea: {
                      _id: "5aa043c3cb00d939b2c044b9",
                      label: "Departamento",
                      icono: "fa-depto",
                      createdAt: "2018-03-07T19:55:47.227Z",
                      updatedAt: "2018-03-07T19:55:47.227Z",
                      __v: 0,
                      deleted: false
                    },
                    areapadre: {
                      _id: "5b082d6df3e75d5b8aabf051",
                      deleted: false,
                      label: "Distribuidores",
                      tipoarea: "5aa043c3cb00d939b2c044b9",
                      areapadre: "5b082d6df3e75dc045abf02e",
                      empresa: "5b0828aeb673d5289c8291d8",
                      centrodecosto: "5b08290cb673d594a18291da",
                      descripcion: "Distribuidores",
                      validthru: "2018-12-31T00:00:00.000Z",
                      createdAt: "2018-05-25T15:36:13.853Z",
                      updatedAt: "2018-05-29T15:28:06.057Z",
                      __v: 0,
                      plazajefe: "5b084892f3e75d8258abf0d9"
                    },
                    empresa: {
                      _id: "5b0828aeb673d5289c8291d8",
                      deleted: false,
                      label: "Demo",
                      pais: "5a9e37a9078b9b34d40a66fc",
                      moneda: "5a9ed732d75eb707a8287c50",
                      vencimiento: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    centrodecosto: {
                      _id: "5b0828e4b673d53e6f8291d9",
                      deleted: false,
                      label: "Administrativo",
                      empresa: "5b0828aeb673d5289c8291d8",
                      moneda: "5a9ed732d75eb707a8287c50",
                      validthru: "2018-12-31T06:00:00.000Z",
                      __v: 0
                    },
                    createdAt: "2018-06-08T22:55:03.153Z",
                    updatedAt: "2018-06-08T22:55:03.153Z",
                    __v: 0,
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export default data;
