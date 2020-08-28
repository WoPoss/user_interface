
/*
map.js:
This code handles the drawing of a particular semantic map. It allows the user to:
  - Interact with any meaning and thus display the meanings it has relationships with
    as well as the relationships themselves (arrows on the right)
  - Sort the meanings 3 different ways: by collocation, by group, or chronologically
  - Download the visualization in PNG or SVG format
  - Import other semantic maps' data
  - Export this semantic map's data

Code written by Loris Rimaz
*/


data =  {
  "normalForm": true,
  "headword": "CERTUS",
  "etymology": [
    {
      "period": "PIE",
      "form": "*krito-",
      "def": "'sifted'",
      "certitude": true
    },
    {
      "period": "PIt",
      "form": "*krito-",
      "def": "'distinguished'",
      "certitude": true
    }
  ],
  "dataFormat": "cent",
  "meanings": [
    {
      "definition": "defined",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "tkoga",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT. Curc. 320 iam edes aliquid. ∷ nolo hercle aliquid, certum quam ‘aliquid’ mavolo.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "hciksus",
                "cert": true
              },
              {
                "rel": "zcecuihai",
                "cert": true
              },
              {
                "rel": "gabcdkyp",
                "cert": true
              },
              {
                "rel": "zcxmvhrq",
                "cert": true
              },
              {
                "rel": "ouwhgoag",
                "cert": true
              },
              {
                "rel": "dpjnobmo",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "nothing defined",
      "construct": "NIHIL CERTI",
      "group": "None",
      "modalities": [
        {
          "id": "dpjnobmo",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT. Mil. 407 nihil habeo certi quid loquar.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "tkoga",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "a certain, not specified quantity",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "mxjorgq",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT. Pseud. 566 certum quod sciam, quo id sim facturus pacto nil etiam scio, nisi quia futurum est.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [
              {
                "rel": "xqiyhj",
                "cert": true
              }
            ],
            "unspecified": []
          }
        }
      ]
    },
    {
      "definition": "established, decided, fixed",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "ntxyze",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT . Epid. 163 senem oppugnare -umst consilium. ",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "naocqo",
                "cert": true
              },
              {
                "rel": "dbajwke",
                "cert": true
              },
              {
                "rel": "suqobc",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "it is decided",
      "construct": "CERTUM EST",
      "group": "None",
      "modalities": [
        {
          "id": "naocqo",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT. Epid. 163 senem oppugnare certumst consilium.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "ntxyze",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "~I want",
      "construct": "CERTUM EST",
      "group": "None",
      "modalities": [
        {
          "id": "zbjdfgrf",
          "modal": "Modal: deontic",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT. 63ⁱᵉˢ, ex. gr. Amph. 265 quando imago est huius in me, certum est hominem eludere.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": []
          }
        }
      ]
    },
    {
      "definition": "it is certain",
      "construct": "CERTUM EST",
      "group": "None",
      "modalities": [
        {
          "id": "syjwi",
          "modal": "Modal: epistemic",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT. Capt. 732 certumne est tibi istuc? :: non moriri certius.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "emfgvlt",
                "cert": true
              },
              {
                "rel": "xyuwukf",
                "cert": true
              },
              {
                "rel": "jlrgavyy",
                "cert": true
              },
              {
                "rel": "luojwp",
                "cert": true
              },
              {
                "rel": "acxgxlb",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "resolute, obstinate",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "wowsac",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "ENN. scaen. 143 quos ego (Apollo) ... ex incertis certos compotesque consili dimitto. ",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": []
          }
        }
      ]
    },
    {
      "definition": "that has been proved right, correct, true",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "ovzzcn",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "TER. Andr. 368 ‘opinor’ narras? ... certa res est.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "zcecuihai",
                "cert": true
              },
              {
                "rel": "zhbkkp",
                "cert": true
              },
              {
                "rel": "emcsjhcm",
                "cert": true
              },
              {
                "rel": "msgrdkm",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "I consider it certain",
      "construct": "CERTUM HABEO",
      "group": "None",
      "modalities": [
        {
          "id": "pfuvgxkc",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT. Merc. 655 si certum id, pro certo si habes.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [
              {
                "rel": "emfgvlt",
                "cert": true
              }
            ],
            "unspecified": [
              {
                "rel": "wccrjith",
                "cert": true
              }
            ]
          }
        },
        {
          "id": "emfgvlt",
          "modal": "Modal: epistemic",
          "emergence": -1,
          "disparition": "None",
          "attestation": "CIC. Att. 12, 40, 5 certum non habeo (sc. quam diu hic maneam).",
          "certainty": true,
          "relationships": {
            "origins": [
              {
                "rel": "pfuvgxkc",
                "cert": true
              }
            ],
            "destinations": [],
            "unspecified": [
              {
                "rel": "syjwi",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "I know for sure",
      "construct": "CERTUM SCIO",
      "group": "None",
      "modalities": [
        {
          "id": "xyuwukf",
          "modal": "Modal: epistemic",
          "emergence": -3,
          "disparition": "None",
          "attestation": "TER. Phorm. 148 non certum scio.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "syjwi",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "to hear/say something accurate",
      "construct": "CERTUM + verbum dicendi/sentiendi",
      "group": "None",
      "modalities": [
        {
          "id": "jlrgavyy",
          "modal": "Modal: epistemic",
          "emergence": -3,
          "disparition": "None",
          "attestation": "TER. Hec. 841 vide ut mihi haec certa et clara attuleris.",
          "certainty": false,
          "relationships": {
            "origins": [],
            "destinations": [
              {
                "rel": "zdfnrqfo",
                "cert": true
              }
            ],
            "unspecified": [
              {
                "rel": "syjwi",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "for sure, undoubtedly",
      "construct": "prepos. + CERTUM",
      "group": "None",
      "modalities": [
        {
          "id": "luojwp",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT. Merc. 655 si id fore ita sat animo acceptumst, certum id, pro certo si habes. || CIC. Att. 10, 6, 3 Pompeium pro certo habemus ... proficisci al.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "syjwi",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "evident",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "ylctv",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT. Persa 582 tu mi es inimicus certus.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "gabcdkyp",
                "cert": true
              },
              {
                "rel": "zcxmvhrq",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "someone or something that can be trusted",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "gokfxi",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT. Poen. 708 ut ipsus testis sit tibi certissimus.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "wcmiru",
                "cert": true
              },
              {
                "rel": "cfglbtmt",
                "cert": true
              },
              {
                "rel": "msgrdkm",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "to be informed",
      "construct": "CERTIOR SUM",
      "group": "None",
      "modalities": [
        {
          "id": "amgr",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT. Amph. 347 numquid nunc es certior?",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "opusq",
                "cert": true
              },
              {
                "rel": "dusypvb",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "I am certain",
      "construct": "CERTUS SUM",
      "group": "None",
      "modalities": [
        {
          "id": "necxdtcj",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT. Merc. 129 lubet scire (me), ex hoc metu ut sim certus*",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "ouwhgoag",
                "cert": false
              }
            ]
          }
        },
        {
          "id": "acxgxlb",
          "modal": "Modal: epistemic",
          "emergence": -1,
          "disparition": "None",
          "attestation": "CIC. Att. 2, 19, 5 hoc opinor: certi sumus periisse omnia.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "syjwi",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "to inform",
      "construct": "CERTIOREM FACIO",
      "group": "None",
      "modalities": [
        {
          "id": "opusq",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT. Aul. 245 abiit neque me certiorem fecit.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "amgr",
                "cert": true
              },
              {
                "rel": "qqml",
                "cert": true
              },
              {
                "rel": "dusypvb",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "to inform, (sometimes) to make certain",
      "construct": "CERTUM FACIO",
      "group": "None",
      "modalities": [
        {
          "id": "dusypvb",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT. Pseud. 1097 epistula atque imago me certum facit.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "amgr",
                "cert": true
              },
              {
                "rel": "opusq",
                "cert": true
              },
              {
                "rel": "ghpqid",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "certainly",
      "construct": "CERTO CERTIUS",
      "group": "None",
      "modalities": [
        {
          "id": "aegb",
          "modal": "Modal: epistemic",
          "emergence": -3,
          "disparition": "None",
          "attestation": "PLAUT. Capt. 644 Quin nihil, inquam, invenies magis hoc certo certius.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": []
          }
        }
      ]
    },
    {
      "definition": "trustworthy",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "wcmiru",
          "modal": "Not modal",
          "emergence": -3,
          "disparition": "None",
          "attestation": "ENN. scaen. 210 amicus certus in re incerta cernitur.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "gokfxi",
                "cert": true
              },
              {
                "rel": "msgrdkm",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "quite important, relevant",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "btqwayqw",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": "CIC. Manil. 43 homines opinione non minus et fama quam aliqua ratione certa commoveri.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": []
          }
        }
      ]
    },
    {
      "definition": "a single one, single, individual",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "hciksus",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": "CIC. de orat. 1, 138 de re certis in personis ac temporibus locata.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "tkoga",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "~suitable",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "dbajwke",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": "CIC. orat. 55 utcunque orator ... animum audientis moveri volet, ita certum vocis admovebit sonum.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "ntxyze",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "a number of, some",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "xqiyhj",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": "CIC. div. in Caec. 24 certos esse in consilio, quibus ostendi tabellas velit.",
          "certainty": true,
          "relationships": {
            "origins": [
              {
                "rel": "mxjorgq",
                "cert": true
              }
            ],
            "destinations": [],
            "unspecified": []
          }
        }
      ]
    },
    {
      "definition": "set up by nature, gods and/or citizens",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "suqobc",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": "Rhet. Her. 3, 3, 5 certo naturae termino definiemus.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "ntxyze",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "known",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "zcecuihai",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": "CIC. Verr. 4, 109 ratio certa est Aetnensium et publicis et privatis litteris consignata",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "tkoga",
                "cert": true
              },
              {
                "rel": "ovzzcn",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "I know",
      "construct": "CERTUM HABEO",
      "group": "None",
      "modalities": [
        {
          "id": "wccrjith",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": " CIC. Att. 12, 34, 1 te certum diem (certitudinem M pr. m. ) illius profectionis non habere.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "pfuvgxkc",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "to hear/say something for sure",
      "construct": "CERTUM + verbum dicendi/sentiendi",
      "group": "None",
      "modalities": [
        {
          "id": "zdfnrqfo",
          "modal": "Modal: epistemic",
          "emergence": -1,
          "disparition": "None",
          "attestation": "CIC. ac. 2, 92 interrogati ... certum respondeamus, [non] habemus (sc. quid respondeamus).",
          "certainty": false,
          "relationships": {
            "origins": [
              {
                "rel": "jlrgavyy",
                "cert": true
              }
            ],
            "destinations": [],
            "unspecified": []
          }
        }
      ]
    },
    {
      "definition": "true, real, right",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "zhbkkp",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": "LUCR. 5, 582 quandoquidem luna claram speciem certamque figuram praebet.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "ovzzcn",
                "cert": true
              },
              {
                "rel": "wwejdo",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "precise",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "gabcdkyp",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": "CAES. Gall. 5, 13, 4 certis mensuris ... videbamus.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "tkoga",
                "cert": true
              },
              {
                "rel": "ylctv",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "clear, well defined, that can be discerned",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "zcxmvhrq",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": "VITR. 1, 1, 8 nisi sonitus ad artificis aures certos et aequales fecerint.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "tkoga",
                "cert": true
              },
              {
                "rel": "ylctv",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "authentic, genuine",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "emcsjhcm",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": "CIC. Verr. 4, 175 quae dicimus rationibus populorum non interpositis ... sed certis ... relata atque confecta sunt.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "ovzzcn",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "reliable",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "cfglbtmt",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": "CIC. div. 1, 78 fiunt certae divinationum coniecturae.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "gokfxi",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "sure",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "msgrdkm",
          "modal": "Modal: epistemic",
          "emergence": -1,
          "disparition": "None",
          "attestation": "VERG. Aen. 9, 95 certusque (suppl. velut: boni eventus) incerta pericula lustret Aeneas? ",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "ovzzcn",
                "cert": true
              },
              {
                "rel": "gokfxi",
                "cert": true
              },
              {
                "rel": "wcmiru",
                "cert": true
              },
              {
                "rel": "occukqg",
                "cert": true
              },
              {
                "rel": "yuwlt",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "(an exhortation or similar follows)",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "qqml",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": "CIC. Att. 2, 24, 2 Bibulus Pompeium fecerat certiorem, ut caveret insidias.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "opusq",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "safe, secure",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "occukqg",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": "CIC. nat. deor. 2, 131 ab ventis Etesiis etiam maritimi cursus celeres et certi deriguntur.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "msgrdkm",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "right, proper",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "wwejdo",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": "Rhet. Her.. 1, 2, 3 ars est praeceptio, qua dat certam viam rationemque dicendi.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "zhbkkp",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "that is undoubtedly going to happen",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "yuwlt",
          "modal": "Not modal",
          "emergence": -1,
          "disparition": "None",
          "attestation": "CIC. Verr. 2, 141 tutores ..., quod actum erat cum Habonio, putant id esse certissimum.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "msgrdkm",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "confident with good reasons",
      "construct": "CERTUS SUI",
      "group": "None",
      "modalities": [
        {
          "id": "ghpqid",
          "modal": "Not modal",
          "emergence": 1,
          "disparition": "None",
          "attestation": "SEN. epist. 91, 16 nemo altero fragilior est, nemo in crastinum sui certior.",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "dusypvb",
                "cert": true
              }
            ]
          }
        }
      ]
    },
    {
      "definition": "carefully performed, prepared, studied, meticulous",
      "construct": "None",
      "group": "None",
      "modalities": [
        {
          "id": "ouwhgoag",
          "modal": "Not modal",
          "emergence": 4,
          "disparition": "None",
          "attestation": "VULG. Sirach. 19, 22 et non est sapientia nequitiae disciplina et non est cogitatus peccatorum prudentia / est nequitia et ipsa execratio et est insipiens qui minuitur sapientia / melior est homo qui deficit sapientia et deficiens sensu in timore quam qui ",
          "certainty": true,
          "relationships": {
            "origins": [],
            "destinations": [],
            "unspecified": [
              {
                "rel": "tkoga",
                "cert": true
              },
              {
                "rel": "necxdtcj",
                "cert": false
              }
            ]
          }
        }
      ]
    }
  ]
};

let definitions, colors, earliest, latest;

// DOM selections
const saveToPNG = document.getElementById('saveToPNG');
saveToPNG.addEventListener('click', (event) => exportToCanvas(event, svg));

const saveToSVG = document.getElementById('saveToSVG');
saveToSVG.addEventListener('click', (event) => exportToSVG(event, svg));

const importData = document.getElementById('importData');
importData.addEventListener('click', importJSONData);

const exportData = document.getElementById('exportData');
exportData.addEventListener('click', exportJSONData);

/* ------------------------------------
"importJSONData" function: prompts the
user for a JSON file, reads it, loads
it into the localStorage and reloads
the page
------------------------------------ */

function importJSONData(event) {
  event.preventDefault();
  Swal.fire({
    title: 'Please select a file',
    input: 'file',
    showCancelButton: true,
    confirmButtonText: 'Import',
    showLoaderOnConfirm: true,
    preConfirm: (file) => {
      if (typeof window.FileReader !== 'function') {
        Swal.fire({
          icon: 'error',
          title: 'API error',
          text: 'Your browser does not support the file API yet.',
        });
        return;
      }
      if (file) {
        const fr = new FileReader();
        fr.onload = recievedText;
        fr.readAsText(file);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'File error',
          text: 'Please ensure that you have selected a file.',
          preConfirm: () => {
            importJSONData(event);
          },
        });
      }

      function recievedText(e) {
        let lines = e.target.result;
        localStorage.setItem('map', lines);
        location.reload();
      }
    },
  });
}

/* ------------------------------------
"exportJSONData" function: allows the
user to export the JSON data and
download it
------------------------------------ */

function exportJSONData(event) {
  event.preventDefault();
  const dataString = JSON.stringify(data);
  const dataURI =
      'data:text/json;charset=utf-8,' + encodeURIComponent(dataString);
  const exportFileName = 'semantic_map.json';

  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataURI);
  linkElement.setAttribute('download', exportFileName);
  linkElement.click();
}

const select = document.getElementById('mode');
let selectMode = select.value;

// event handler for the select element
select.addEventListener('change', (event) => {
  const value = event.target.value;
  selectMode = value;
  const elements = meaningsGroup.selectAll('g').data();
  drawData(
      elements,
      elements.length < definitions.length ? true : false,
      value
  );
});

// line generator
const lineGenerator = d3.line();

// sizing consts
const margin = {
  top: 100,
  left: 100,
  right: 100,
  bottom: 0,
};
const width = '100%';
const height = definitions
    ? margin.top * 2.5 - 5 + definitions.length * 37 + 37
    : 0;

// Definition of SVG
const svg = d3
    .select('#map')
    .append('svg')
    .attr('id', 'map')
    .attr('width', width)
    .attr('height', height)
    .attr('style', 'font: 12px sans-serif')
    .style('background-color', 'white');

const w = Number(svg.style('width').split('px')[0]);
const h = Number(svg.style('height').split('px')[0]);

/* --------------------------------
definition of the D3 markers for
the relationship arrows
-------------------------------- */

svg
    .append('svg:defs')
    .append('svg:marker')
    .attr('id', 'arrow1')
    .attr('refX', 4.25)
    .attr('refY', 2)
    .attr('markerWidth', 30)
    .attr('markerHeight', 30)
    .attr('orient', 'auto-start-reverse')
    .append('path')
    .attr('d', 'M 0 0 4 2 0 4 0.25 2')
    .style('fill', 'black');

svg
    .append('svg:defs')
    .append('svg:marker')
    .attr('id', 'arrow2')
    .attr('refX', -1)
    .attr('refY', 2)
    .attr('markerWidth', 30)
    .attr('markerHeight', 30)
    .attr('orient', '0deg')
    .append('path')
    .attr('d', 'M 0 0 4 2 0 4 0.25 2')
    .style('fill', 'black');

/* --------------------------------
definition of the various D3 groups
-------------------------------- */

const legend = svg
    .append('g')
    .attr('class', 'legend')
    .attr('transform', `translate(${margin.left}, 0)`);

const etymology = svg
    .append('g')
    .attr('class', 'etymology')
    .attr('transform', `translate(${margin.left}, ${margin.top + 5})`);

const relationshipGroup = svg
    .append('g')
    .attr('class', 'relationship')
    .attr('transform', `translate(${margin.left}, ${margin.top * 2.5 + 15})`);

const constructsAndGroups = svg
    .append('g')
    .attr('class', 'relationship')
    .attr('transform', `translate(${margin.left}, ${margin.top * 2.5})`);

const meaningsGroup = svg
    .append('g')
    .attr('class', 'meanings')
    .attr('transform', `translate(${margin.left}, ${margin.top * 2.5})`);

const watermarkGroup = svg.append('g').attr('class', 'watermark');

const scale = svg
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top * 2})`);

/* ----------------------------------------
"basicDisplay" function:
handles the drawing of the entire page as
well as the legend.
---------------------------------------- */

function basicDisplay() {
  let col = 0;
  let row = 1;
  let colsSpace = 0;
  const colsWidth = [0];
  if (data.normalForm) {
    const modalities = [...new Set(definitions.map((def) => def.modal))];
    const lengths = modalities.map((mod) => getTextWidth(mod));
    const container = getContainerData();

    const cols = [];
    for (let i = 0; i < modalities.length; i += 3) {
      cols.push(range(i, i + 2));
    }
    cols.forEach((c) => {
      let longest = 0;
      c.forEach(
          (i) =>
              (longest =
                  lengths[i] && lengths[i] > longest ? lengths[i] + 26 : longest)
      );
      colsWidth.push(longest);
    });
    for (let i = 0; i < modalities.length; i++) {
      if (i % 3 === 0 && i != 0) {
        col++;
        colsSpace += colsWidth[col];
        row = 1;
      } else if (i % 3 != 0) {
        row++;
      }

      legend
          .append('rect')
          .style('fill', colors[modalities[i]])
          .attr('x', colsSpace)
          .attr('y', row * 25)
          .attr('width', 12)
          .attr('height', 12);

      legend
          .append('text')
          .text(modalities[i])
          .attr('x', colsSpace)
          .attr('y', row * 25)
          .attr('dx', 15)
          .attr('dy', 10);
    }
  }

  colsSpace = colsWidth.reduce((a, b) => a + b);
  const boxX = data.normalForm ? colsSpace : 0;
  const boxY = data.normalForm ? (col + 1) * 25 : 25;

  colsSpace +=
      getTextWidth(data.normalForm ? 'Likely modal (see color)' : 'Meaning') + 26;

  legend
      .append('rect')
      .attr('width', 10)
      .attr('height', 10)
      .attr('x', boxX)
      .attr('y', boxY)
      .style('fill', 'none')
      .style('stroke', () => (data.normalForm ? 'black' : 'lightgrey'))
      .style('stroke-width', 2)
      .style('stroke-dasharray', () => (data.normalForm ? 4 : 0));

  legend
      .append('text')
      .text(() => (data.normalForm ? 'Likely modal (see color)' : 'Meaning'))
      .attr('x', boxX)
      .attr('y', boxY)
      .attr('dx', 15)
      .attr('dy', 10);

  const pathX1 = data.normalForm ? colsSpace : 0;
  const pathX2 = data.normalForm ? colsSpace + 20 : 20;
  const pathY = data.normalForm ? 47 : 50;

  legend
      .append('path')
      .attr(
          'd',
          lineGenerator([
            [pathX1, pathY],
            [pathX2, pathY],
          ])
      )
      .style('fill', 'none')
      .style('stroke', 'black')
      .style('stroke-width', 2)
      .style('stroke-dasharray', 0);

  legend
      .append('text')
      .text('Semantic relation')
      .attr('x', pathX1)
      .attr('y', pathY)
      .attr('dx', 25)
      .attr('dy', 3.5);

  const pathY2 = pathY + 20;

  legend
      .append('path')
      .attr(
          'd',
          lineGenerator([
            [pathX1, pathY2],
            [pathX2, pathY2],
          ])
      )
      .style('fill', 'none')
      .style('stroke', 'black')
      .style('stroke-width', 2)
      .style('stroke-dasharray', 4);

  legend
      .append('text')
      .text('Hypothetical semantic relation')
      .attr('x', pathX1)
      .attr('y', pathY2)
      .attr('dx', 25)
      .attr('dy', 3.5);

  drawEtymology();
  drawData();
}

/* ----------------------------------------
"drawEtymology" function:
draws path and text elements according to
the etymology data.
---------------------------------------- */

function drawEtymology() {
  const ety = data.etymology;
  const newEty = [];
  let gw = getTextWidth('No etymology') + 25;

  let totalLength = 0;
  const gh = 80;

  if (typeof ety === 'object') {
    ety.forEach((e) => {
      newEty.push(Object.values(e));
    });

    for (let i = 0; i < newEty.length + 1; i++) {
      gw = newEty[i]
          ? getTextWidth(newEty[i][2]) > getTextWidth(newEty[i][1]) &&
          getTextWidth(newEty[i][2]) > getTextWidth(newEty[i][0])
              ? getTextWidth(newEty[i][2])
              : getTextWidth(newEty[i][1]) > getTextWidth(newEty[i][2]) &&
              getTextWidth(newEty[i][1]) > getTextWidth(newEty[i][0])
                  ? getTextWidth(newEty[i][1])
                  : getTextWidth(newEty[i][0])
          : getTextWidth(data.headword);
      gw += 50;

      const g = etymology
          .append('g')
          .attr('transform', `translate(${totalLength}, 0)`);

      g.append('path')
          .attr('d', () => {
            if (i == 0) {
              return lineGenerator([
                [0, 0],
                [gw, 0],
                [gw + 25, gh / 2],
                [gw, gh],
                [0, gh],
                [0, 0],
              ]);
            } else {
              return lineGenerator([
                [0, 0],
                [gw, 0],
                [gw + 25, gh / 2],
                [gw, gh],
                [0, gh],
                [25, gh / 2],
                [0, 0],
              ]);
            }
          })
          .style('fill', 'none')
          .style('stroke', 'black')
          .style('stroke-width', 3)
          .style('stroke-dasharray', () =>
              newEty[i] ? (newEty[i][3] ? 0 : 4) : 0
          );
      if (newEty[i]) {
        for (let j = 0; j < newEty[i].length - 1; j++) {
          g.append('text')
              .text(newEty[i][j])
              .attr('x', i === 0 ? 18 : 25)
              .attr('y', j * 25)
              .attr('dx', 12)
              .attr('dy', 20);
        }
      } else {
        g.append('text')
            .text(data.headword)
            .attr('x', 20)
            .attr('y', gh / 2 + 3)
            .attr('dx', i == 0 ? 0 : 20);
      }
      totalLength += gw;
    }
  } else if (typeof ety === 'boolean' && ety === false) {
    gw = getTextWidth(data.headword) + 25;

    const g = etymology
        .append('g')
        .attr('transform', `translate(${totalLength}, 0)`);

    g.append('path')
        .attr(
            'd',
            lineGenerator([
              [0, 0],
              [25, 0],
              [gw, 0],
              [gw + 25, gh / 2],
              [gw, gh],
              [25, gh],
              [0, gh],
              [0, 0],
            ])
        )
        .style('fill', 'none')
        .style('stroke', 'black')
        .style('stroke-width', 3);

    g.append('text')
        .text(data.headword)
        .attr('x', 20)
        .attr('y', gh / 2 + 3);
  } else {
    for (let i = 0; i < 2; i++) {
      gw =
          i === 0
              ? getTextWidth('Etymology unknown')
              : getTextWidth(data.headword);
      gw += i === 0 ? 25 : 45;
      const g = etymology
          .append('g')
          .attr('transform', `translate(${totalLength}, 0)`);

      g.append('path')
          .attr('d', () => {
            if (i == 0) {
              return lineGenerator([
                [0, 0],
                [gw, 0],
                [gw + 25, gh / 2],
                [gw, gh],
                [0, gh],
                [0, 0],
              ]);
            } else {
              return lineGenerator([
                [0, 0],
                [gw, 0],
                [gw + 25, gh / 2],
                [gw, gh],
                [0, gh],
                [25, gh / 2],
                [0, 0],
              ]);
            }
          })
          .style('fill', 'none')
          .style('stroke', 'black')
          .style('stroke-width', 3);

      g.append('text')
          .text(i === 0 ? 'Etymology unknown' : data.headword)
          .attr('x', i === 0 ? 20 : 40)
          .attr('y', gh / 2 + 3);

      totalLength += gw;
    }
  }
}

/* ----------------------------------------
"drawData" function:
handles the drawing of the data according
to the parameters.
handles the enter, update and exit calls.
---------------------------------------- */

function drawData(
    elements = definitions,
    allowUpdate = false,
    mode = selectMode
) {
  meaningsGroup.style('width', (w / 100) * 80);
  const container = getContainerData();

  let tip = d3
      .select('body')
      .append('div')
      .attr('class', 'tooltip-donut')
      .style('opacity', 0);

  elements = sortElements(elements, mode);

  const lines = getLines(elements, container.width, container.portion);

  drawConstructsOrGroups(
      elements,
      container.width,
      container.portion,
      lines,
      mode
  );

  meaningsGroup
      .selectAll('g')
      .data(elements, (d) => d.id)

      .join(
          (enter) =>
              enter
                  .append('g')
                  .attr('class', 'data')
                  .attr('transform', (d, i) => {
                    return `translate(${d.emergence * container.portion}, ${
                    i * 37 + lines[i] * 30
                        })`;
                  })
                  .style('opacity', 0)
                  .call(addElems, container.width, container.portion, tip)
                  .call((enter) =>
                      enter.transition().duration(250).style('opacity', 1)
                  ),
          (update) =>
              update
                  .call(
                      updateElems,
                      container.width,
                      container.portion,
                      elements,
                      allowUpdate,
                      lines
                  )
                  .transition()
                  .duration(250)
                  .attr(
                      'transform',
                      (d, i) =>
                          `translate(${d.emergence * container.portion}, ${
                          i * 37 + lines[i] * 30
                              })`
                  ),
          (exit) => exit.transition().duration(250).style('opacity', 0).remove()
      );

  drawScale(earliest, latest, container.width);
}

function drawWatermark(wmHeight) {
  const container = getContainerData();
  watermarkGroup.attr(
      'transform',
      `translate(${container.width}, ${wmHeight})`
  );
  watermarkGroup
      .append('text')
      .text('by WoPoss')
      .style('fill', '#87aac9')
      .style('font-style', 'italic')
      .attr('x', 0)
      .attr('y', 0)
      .attr('dx', 45)
      .attr('dy', -15);
}

/* ----------------------------------------
"drawConstructsOrGroups" function:
draws the path and text elements according
to the passed data corresponding to either
the group or construct datapoints.
---------------------------------------- */

function drawConstructsOrGroups(elements, cW, cP, lines, mode) {
  constructsAndGroups.selectAll('path').remove();
  constructsAndGroups.selectAll('text').remove();
  if (mode != 'chronology') {
    const dataList = [...new Set(elements.map((el) => el[mode]))];
    dataList.forEach((group) => {
      if (group != 'None') {
        const indexes = [];
        elements.forEach((el) =>
            el[mode] == group ? indexes.push(elements.indexOf(el)) : false
        );
        // Coordinates calculations
        const max = Math.max(...indexes);
        const min = Math.min(...indexes);
        const x0 = elements[min].emergence * cP;
        const x1 = elements[max].emergence * cP;
        const x2 = Math.min(x0, x1) - 15;
        const xMiddle = x2 - 10;
        const y0 = min * 37 + lines[min] * 30;
        const y1 =
            max * 37 +
            lines[max] * 30 +
            (wrap(elements[max].meaning, cW, cP, elements[max]) + 1) * 30;
        const pathHeight = y1 - y0;
        const yMiddle = y1 - pathHeight / 2;

        // Add paths and texts to 'constructsAndGroups' group
        if (min < max) {
          constructsAndGroups
              .append('path')
              .attr(
                  'd',
                  lineGenerator([
                    [x0, y0],
                    [x2, y0],
                    [x2, yMiddle],
                    [xMiddle, yMiddle],
                    [x2, yMiddle],
                    [x2, y1],
                    [x0, y1],
                  ])
              )
              .attr('fill', 'none')
              .style('stroke', 'black')
              .style('stroke-width', 1)
              .style('opacity', 0)
              .transition()
              .duration(500)
              .style('opacity', 1);
        }

        group = formatText(
            group,
            min < max
                ? xMiddle - getTextWidth(group) - 5
                : x0 - getTextWidth(group) - 5
        );

        constructsAndGroups
            .append('text')
            .text(() => group)
            .attr('x', () => {
              if (min < max) {
                return xMiddle - getTextWidth(group) - 5;
              } else {
                return x0 - getTextWidth(group) - 5;
              }
            })
            .attr('y', yMiddle + 4)
            .style('opacity', 0)
            .transition()
            .duration(500)
            .style('opacity', 1);
      }
    });
  }
}

/* ----------------------------------------
"addElems" function:
draws the path and text elements according
to the passed data.
---------------------------------------- */

function addElems(elements, cW, cP, tip) {
  elements
      .append('path')
      .attr('d', (d) => {
        let width = cW - d.emergence * cP;
        if (d.disparition != -1 && !isNaN(d.disparition)) {
          const end = cW - d.disparition * cP;
          width = width - end;
        }
        return lineGenerator([
          [0, 0],
          [0 + width, 0],
          [0 + width + 10, 15],
          [0 + width, 30],
          [0, 30],
          [0, 0],
        ]);
      })
      .style('stroke-dasharray', (d) => (!d.certainty ? 4 : 0))
      .style('fill', 'white')
      .style('stroke', (d) => colors[d.modal])
      .style('stroke-width', 3)
      .on('click', (d) => {
        tip.transition().duration(50).style('opacity', 0);
        newDisplay(d);
      })
      .on('dblclick', () => {
        d3.event.preventDefault();
        relationshipGroup.selectAll('.rel').remove();
        drawData();
      })
      .on('mouseover', (d) => {
        tip.transition().duration(50).style('opacity', 1);
        tip
            .html(() => {
              // Display year depending on date format
              const r =
                  data.dataFormat != 'cent'
                      ? data.dataFormat === 'dec'
                      ? range10(
                          earliest > 0 && latest > 0
                              ? findCent(earliest) - 100
                              : findCent(earliest),
                          findCent(latest) + 100
                      )
                      : range(
                          earliest > 0 && latest > 0
                              ? findCent(earliest) - 99
                              : findCent(earliest),
                          findCent(latest) + 100
                      )
                      : 0;
              // Text formatting depending on date format and 'r'
              if (data.dataFormat === 'cent') {
                const em = d.emergence - Math.abs(earliest);
                const dis = d.disparition - Math.abs(earliest);
                return (
                    (em < 0 ? `${romanize(em)} BC` : romanize(em)) +
                    ' to ' +
                    (isNaN(d.disparition)
                        ? 'undefined date'
                        : dis < 0
                            ? `${romanize(dis)} BC`
                            : romanize(dis)) +
                    ': ' +
                    d.attestation
                );
              } else {
                return (
                    r[d.emergence] +
                    (data.dataFormat === 'dec' ? 's to ' : ' to ') +
                    (d.disparition != -1 ? r[d.disparition] : 'undefined date') +
                    (data.dataFormat === 'dec'
                        ? d.disparition != -1
                            ? 's: '
                            : ': '
                        : ': ') +
                    d.attestation
                );
              }
            })
            .style('left', d3.event.pageX + 10 + 'px')
            .style('top', d3.event.pageY - 15 + 'px');
      })
      .on('mouseout', () => {
        tip.transition().duration(50).style('opacity', 0);
      });

  elements
      .insert('text')
      .style('fill', 'black')
      .attr('dy', '1.66em')
      .attr('dx', '1.1em')
      .attr('text-anchor', 'start')
      .text((d) => d.meaning)
      .attr('y', 0)
      .attr('x', 0)
      .call(wrap, cW, cP);
}

/* ----------------------------------------
"updateElems" function:
draws the relationship arrows on the right-
hand side of the data elements.
---------------------------------------- */

function updateElems(_, cW, cP, elementsData, displayRels, lines) {
  if (displayRels) {
    const element = elementsData.reduce((acc, curr) =>
        curr.rel === 'origin' ? (acc = curr) : acc
    );
    const elementIndex = elementsData.indexOf(element);
    const indexes = range(
        0 - elementIndex,
        elementsData.length - 1 - elementIndex
    );

    // Calculations for relationships arrows' coordinates:

    /* offset: 'lines' is an array of offsets used for elements' translations.
    Since each element is 30 tall, 'lines' * 30 places the point at the top
    of the element. 'wrap' returns the number of lines for each elements,
    which is then multiplied by 15, thus giving the middle of the element's height */
    const offset =
        lines[elementIndex] * 30 + wrap(element.meaning, cW, cP, element) * 15;
    const x0 =
        element.disparition != -1 && !isNaN(element.disparition)
            ? element.disparition * cP + 10
            : cW + 10;
    const y0 = elementIndex * 37 + offset;

    relationshipGroup.selectAll('.rel').remove();
    relationshipGroup
        .selectAll('.rel')
        .data(elementsData, (d) => d.id)
        .enter()
        .append('path')
        .attr('class', 'rel')
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .attr('stroke-width', 3)
        .attr('marker-end', (d) =>
            d.rel === 'destinations'
                ? 'url(#arrow1)'
                : d.rel === 'origins'
                ? 'url(#arrow2)'
                : false
        )
        .style('stroke-dasharray', (d) => (!d.relCert ? 4 : 0))
        .style('opacity', 0)
        .attr('d', (d, i) => {
          const modifier = indexes[i];
          const lineHeight = wrap(d.meaning, cW, cP, d);
          // Same calculation as 'offset'
          const off = lines[i] * 30 + lineHeight * 15;
          const x1 =
              cW + 10 + (Math.abs(modifier) * margin.right) / 1.5 / indexes.length;
          const x2 =
              d.disparition != -1 && !isNaN(d.disparition)
                  ? d.disparition * cP + 10
                  : cW + 10;
          const y1 = y0 - offset + modifier * 37 + off;
          const points =
              i != elementIndex
                  ? [
                    [x0, y0],
                    [x1, y0],
                    [x1, y1],
                    [x2, y1],
                  ]
                  : [[x0, y0]];
          return lineGenerator(points);
        })
        .transition()
        .duration(500)
        .style('opacity', 1);
  }
}

/* ----------------------------------------
"drawScale" function:
draws the scale displayed on top of the
data elements.
---------------------------------------- */

function drawScale(earliest, latest, cW) {
  const dates = [];

  let centuries;
  if (data.dataFormat == 'cent') {
    // recode data for centuries
    centuries = range(earliest, latest + 1);
  } else if (data.dataFormat == 'dec') {
    // recode data for decades
    const decadesForScale = range10(
        earliest > 0 && latest > 0
            ? findCent(earliest) - 100
            : findCent(earliest),
        findCent(latest) + 100
    );
    centuries = [
      ...new Set(decadesForScale.map((dec) => centuryFromYear(dec))),
    ];
  } else {
    const yearsForScale = range(
        earliest > 0 && latest > 0 ? findCent(earliest) - 99 : findCent(earliest),
        findCent(latest) + 100
    );
    centuries = [...new Set(yearsForScale.map((dec) => centuryFromYear(dec)))];
  }

  const cP =
      cW / (centuries.includes(0) ? centuries.length - 1 : centuries.length);

  centuries.forEach((cent) => {
    let number = '';
    if (cent < 0) {
      number = `${romanize(cent)} BC`;
    } else {
      number = romanize(cent);
    }
    if (!dates.includes(number) && number != '') {
      dates.push(number);
    }
  });

  scale
      .selectAll('path')
      .data(dates)
      .enter()
      .append('path')
      .attr('class', 'scale')
      .attr('d', (d, i) => {
        let x = i * cP;
        if (i === 0) {
          return lineGenerator([
            [x, 0],
            [x + cP, 0],
            [x + cP + 10, 15],
            [x + cP, 30],
            [x, 30],
            [x, 0],
          ]);
        } else {
          return lineGenerator([
            [x, 0],
            [x + cP, 0],
            [x + cP + 10, 15],
            [x + cP, 30],
            [x + 10, 30],
            [x, 30],
            [x + 10, 15],
            [x, 0],
          ]);
        }
      })
      .attr('height', 30)
      .attr('x', (_, i) => i * (cP + 0.5))
      .attr('y', 0)
      .style('fill', (_, i) => `rgb(45, ${100 + 8 * i}, ${160 + 9 * i})`);
  // .style('stroke', (_, i) => `rgb(45, ${100 + 8 * i}, ${160 + 9 * i})`)
  // .style('stroke-width', 2);

  scale
      .selectAll('text')
      .data(dates)
      .enter()
      .append('text')
      .attr('class', 'scale')
      .text((d) => d)
      .attr('x', (_, i) => i * cP)
      .attr('y', 0)
      .attr('dx', (_, i) => (i === 0 ? 6 : 12))
      .attr('dy', 22)
      .attr('font-size', 20)
      .attr('style', 'font-weight: bold')
      .style('fill', 'white');
}

/* ----------------------------------------
"newDisplay" function:
selects elements to be kept depending on
the relationship data.
call the "drawData" function with the kept
elements.
---------------------------------------- */

function newDisplay(event) {
  if (event.relationships) {
    const keptIds = [
      event.id,
      ...Object.values(event.relationships)
          .reduce((a, b) => a.concat(b))
          .map((r) => r.rel),
    ];
    const keptElements = [];
    keptIds.forEach((id) => {
      definitions.forEach((def) => {
        if (Object.values(def).includes(id)) {
          keptElements.push(def);
        }
      });
    });
    console.log(keptElements);
    drawData(
        addRelationshipInfo(event.relationships, keptElements),
        true,
        selectMode
    );
  } else {
    Swal.fire({
      icon: 'error',
      title: 'No relationship data',
      text:
          'Please make sure you have specified relationships between the meanings.',
    });
  }
}

/* ----------------------------------------
"addRelationshipInfo" function:
returns the kept elements with the
relationship data inculded into them
---------------------------------------- */

function addRelationshipInfo(relationships, elements) {
  definitions.forEach((def) => {
    delete def.rel;
    delete def.relCert;
  });
  for (const direction in relationships) {
    relationships[direction].forEach((rel) => {
      elements.forEach((el) => {
        if (!('rel' in el) && !('relCert' in el)) {
          el['rel'] = 'origin';
          el['relCert'] = true;
        }
        if (rel.rel === el.id) {
          el['rel'] = direction;
          el['relCert'] = rel.cert;
        }
      });
    });
  }
  return elements;
}

/* ----------------------------------------
"prepareDefinitions" function:
returns the data for display
---------------------------------------- */

function prepareDefinitions() {
  const meanings = data.meanings;
  const definitions = [];
  if (data.normalForm) {
    meanings.forEach((meaning) => {
      if (meaning.modalities.length > 1) {
        meaning.modalities.forEach((modalitiy) => {
          definitions.push(modalityFormatting(meaning, modalitiy));
        });
      } else {
        definitions.push(modalityFormatting(meaning, meaning.modalities[0]));
      }
    });
  } else {
    meanings.forEach((meaning) =>
        definitions.push(simpleModalityFormatting(meaning))
    );
  }

  return definitions;
}

/* ----------------------------------------
"modalityFormatting" function:
returns the formatted data
---------------------------------------- */

function modalityFormatting(meaning, modalitiy) {
  return {
    id: modalitiy.id,
    meaning: meaning.definition,
    construct: meaning.construct,
    group: meaning.group,
    modal: modalitiy.modal,
    emergence: modalitiy.emergence,
    certainty: modalitiy.certainty,
    attestation: modalitiy.attestation,
    relationships: modalitiy.relationships,
    disparition: modalitiy.disparition,
  };
}

function simpleModalityFormatting(meaning) {
  return {
    id: meaning.id,
    meaning: meaning.definition,
    construct: meaning.construct,
    group: meaning.group,
    modal: 'Not modal',
    emergence: meaning.emergence,
    certainty: true,
    attestation: meaning.attestation,
    relationships: meaning.relationships,
    disparition: meaning.disparition,
  };
}

/* ----------------------------------------
"formatText" function:
returns a string formatted to be used as a
group or construct element
---------------------------------------- */

function formatText(text, x) {
  const offset = x + getTextWidth(text);
  const to100 = 100 + offset - 27;
  let length = getTextWidth(text);
  if (length > to100) {
    while (length > to100) {
      text = text.substring(1);
      length = getTextWidth(text);
    }
    return '...' + text;
  } else {
    return text;
  }
}

/* ----------------------------------------
"sortElements" function:
returns a sorted array depending on the
sorting parameter
---------------------------------------- */

function sortElements(elements, mode) {
  elements.sort((a, b) => {
    const compareMode = (a, b) => (a < b ? -1 : b < a ? 1 : 0);
    const compareDate = (a, b) => Math.sign(a - b);

    if (mode === 'chronology') {
      return compareDate(a.emergence, b.emergence);
    } else {
      return (
          compareMode(a[mode], b[mode]) || compareDate(a.emergence, b.emergence)
      );
    }
  });
  return elements;
}

/* ----------------------------------------
"getContainerData" function:
returns an array containing the width of
the drawing area and the result of this
width divided by the scale.
---------------------------------------- */

function getContainerData() {
  let containerWidth = svg.style('width');
  containerWidth =
      Math.floor(
          Number(containerWidth.substring(0, containerWidth.length - 2)) -
          margin.right
      ) - margin.left;

  let containerPortion =
      data.dataFormat === 'cent'
          ? containerWidth /
          (range(earliest, latest).includes(0)
              ? range(earliest, latest + 1).length - 1
              : range(earliest, latest + (earliest > 0 && latest > 0 ? 1 : 0))
                  .length)
          : data.dataFormat === 'dec'
          ? containerWidth /
          (range10(findCent(earliest), findCent(latest) + 100).includes(0)
              ? range10(findCent(earliest), findCent(latest) + 100).length - 1
              : range10(
                  earliest > 0 && latest > 0
                      ? findCent(earliest) - 100
                      : findCent(earliest),
                  findCent(latest) + 100
              ).length)
          : containerWidth /
          (range(findCent(earliest), findCent(latest) + 100).includes(0)
              ? range(findCent(earliest), findCent(latest) + 100).length - 1
              : range(
                  earliest > 0 && latest > 0
                      ? findCent(earliest) - 99
                      : findCent(earliest),
                  findCent(latest) + 100
              ).length);
  return { width: containerWidth, portion: containerPortion };
}

/* ----------------------------------------
"getLines" function:
returns an array containing the numbers of
lines each text needs to be displayed
inside a path element
---------------------------------------- */

function getLines(elements, cW, cP) {
  const lines = elements.map((elem) => wrap(elem.meaning, cW, cP, elem));

  let total = 0;
  lines.forEach((l) => (total += (l + 1) * 37));
  const newHeight = margin.top * 2.5 - 5 + total + 37;

  svg.transition().duration(250).attr('height', newHeight);

  drawWatermark(newHeight);

  const linesOriginal = [...lines];
  for (let i = 0; i < lines.length; i++) {
    const l = linesOriginal[i];
    const index = i;
    if (l > 0) {
      range(index + 1, lines.length - 1).forEach((n) => (lines[n] += l));
      lines[index] -= l;
      control = l;
    }
  }
  return lines;
}

/* ----------------------------------------
"wrap" function:
modifies text and path elements if the text
is longer than the width of the path.
returns the number of lines a text needs to
be kept inside a path.
---------------------------------------- */

function wrap(text, cW, cP, r = 'add') {
  if (typeof text != 'string') {
    text.each(function () {
      let text = d3.select(this),
          words = text.text().split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.5, // ems
          x = text.attr('x'),
          y = text.attr('y'),
          dy = parseFloat(text.attr('dy')),
          tspan = text
              .text(null)
              .append('tspan')
              .attr('x', x)
              .attr('y', y)
              .attr('dy', dy + 'em'),
          emergence = text.data()[0].emergence,
          disparition = text.data()[0].disparition;

      let width = cW - emergence * cP;
      if (disparition != -1 && !isNaN(disparition)) {
        const end = cW - disparition * cP;
        width = width - end;
      }

      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(' '));
        if (tspan.text().length * 6 > width) {
          line.pop();
          tspan.text(line.join(' ') + ' ');
          line = [word];
          tspan = text
              .append('tspan')
              .attr('x', x)
              .attr('y', y)
              .attr('dy', ++lineNumber * lineHeight + dy + 'em')
              .attr('dx', '1.1em')
              .text(word);

          // Modify destination path
          let node = text.node().parentNode.firstChild;
          const yModifier = lineNumber + 1;
          d3.select(node).attr(
              'd',
              lineGenerator([
                [0, 0],
                [width, 0],
                [width + 10, 15 * yModifier],
                [width, 30 * yModifier],
                [0, 30 * yModifier],
                [0, 0],
              ])
          );
        }
      }
    });
  } else {
    let words = text.split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        emergence = r.emergence,
        disparition = r.disparition;
    let width = cW - emergence * cP;
    if (disparition != -1 && !isNaN(disparition)) {
      const end = cW - disparition * cP;
      width = width - end;
    }
    while ((word = words.pop())) {
      line.push(word);
      if (line.join(' ').length * 6 > width) {
        line.pop();
        line = [word];
        ++lineNumber;
      }
    }
    return lineNumber;
  }
}

/* ----------------------------------------
"exportToCanvas" function:
exports SVG to canvas element
---------------------------------------- */

function exportToCanvas(event, SVG) {
  event.preventDefault();

  let svgWidth = SVG.style('width');
  svgWidth = Number(svgWidth.substring(0, svgWidth.length - 2));
  let svgHeight = SVG.style('height');
  svgHeight = Number(svgHeight.substring(0, svgHeight.length - 2));

  if (SVG.attr('id') === 'map') {
    SVG.attr('width', svgWidth);
  }

  const svgNode = SVG.node();

  const canvas = document.createElement('canvas');
  canvas.width = svgWidth;
  canvas.height = svgHeight;

  if (SVG.attr('id') === 'network') {
    SVG.attr('transform', 'translate(0,0)');
  }

  var ctx = canvas.getContext('2d');
  var data = new XMLSerializer().serializeToString(svgNode);

  if (SVG.attr('id') === 'network') {
    SVG.attr('transform', `translate(${margin.left},0)`);
  }

  var DOMURL = window.URL || window.webkitURL || window;

  var img = new Image();
  var svgBlob = new Blob([data], { type: 'image/svg+xml' });
  var url = DOMURL.createObjectURL(svgBlob);

  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    DOMURL.revokeObjectURL(url);

    var imgURI = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');

    triggerDownload(imgURI, SVG);
  };

  img.src = url;
}

/* ----------------------------------------
"triggerDownload" function:
forces the browser to download the canvas
---------------------------------------- */

function triggerDownload(imgURI, SVG) {
  const evt = new MouseEvent('click', {
    view: window,
    bubbles: false,
    cancelable: true,
  });

  const a = document.createElement('a');
  a.setAttribute(
      'download',
      SVG.attr('id') === 'map' ? 'semantic_map.png' : 'relationships_graph.png'
  );
  a.setAttribute('href', imgURI);
  a.setAttribute('target', '_blank');

  a.dispatchEvent(evt);
}

/* ----------------------------------------
"exportToCanvas" function:
exports SVG element to .svg file
---------------------------------------- */

function exportToSVG(event, SVG) {
  event.preventDefault();

  let svgWidth = SVG.style('width');
  svgWidth = Number(svgWidth.substring(0, svgWidth.length - 2));
  SVG.attr('width', svgWidth);

  const svgNode = SVG.node();
  var data = new XMLSerializer().serializeToString(svgNode);

  var svgBlob = new Blob([data], { type: 'image/svg+xml;' });
  var svgUrl = URL.createObjectURL(svgBlob);

  var downloadLink = document.createElement('a');
  downloadLink.href = svgUrl;
  downloadLink.download =
      SVG.attr('id') === 'map' ? 'semantic_map.svg' : 'relationships_graph.svg';
  downloadLink.click();
}

/* ----------------------------------------
"color" function:
returns a color depending on the modality
---------------------------------------- */

function createColors() {
  const modals = [...new Set(definitions.map((def) => def.modal))];
  const basicColors = {
    'Not modal': 'lightgrey',
    'Modal: deontic': 'crimson',
    'Modal: dynamic': 'blueviolet',
    'Modal: epistemic': 'forestgreen',
    Premodal: 'black',
    Postmodal: 'gold',
  };
  const modalsColors = {};
  const colorChoice = [
    'cornflowerblue',
    'aqua',
    'purple',
    'burlywood',
    'coral',
    'aquamarine',
    'olivegreen',
    'darkmagenta',
    'darksalmon',
    'darkorange',
    'darkslateblue',
    'deepskyblue',
    'fuchsia',
    'khaki',
    'lightcyan',
  ];
  modals.forEach((modal, i) => {
    if (!(modal in modalsColors)) {
      if (modal in basicColors) {
        modalsColors[modal] = basicColors[modal];
      } else {
        modalsColors[modal] = colorChoice[i];
      }
    }
  });
  return modalsColors;
}

/* ----------------------------------------
"romanize" function:
returns a roman number from an arabic one
---------------------------------------- */

function romanize(num) {
  if (isNaN(num)) return NaN;
  let digits = String(+num).split(''),
      key = [
        '',
        'C',
        'CC',
        'CCC',
        'CD',
        'D',
        'DC',
        'DCC',
        'DCCC',
        'CM',
        '',
        'X',
        'XX',
        'XXX',
        'XL',
        'L',
        'LX',
        'LXX',
        'LXXX',
        'XC',
        '',
        'I',
        'II',
        'III',
        'IV',
        'V',
        'VI',
        'VII',
        'VIII',
        'IX',
      ],
      roman = '',
      i = 3;
  while (i--) roman = (key[+digits.pop() + i * 10] || '') + roman;
  return Array(+digits.join('') + 1).join('M') + roman;
}

/* ----------------------------------------
"range" and "range10" functions:
return an array of numbers between and
including the parameter numbers.
"range" adds 1 to each number.
"range10" adds 10 to each number.
---------------------------------------- */

function range(start, end) {
  return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
}

function range10(start, end) {
  return Array((end - start + 10) / 10)
      .fill()
      .map((_, idx) => start + idx * 10);
}

/* ----------------------------------------
"getTextWidth" function:
returns the width of a text
---------------------------------------- */

function getTextWidth(text) {
  // create a dummy element
  const dummy = document.createElement('span');
  dummy.id = 'ruler';
  dummy.innerHTML = text;
  dummy.style.visibility = 'hidden';
  dummy.style.whiteSpace = 'nowrap';
  dummy.style.fontFamily = 'Arial, Helvetica, sans-serif';
  dummy.style.fontSize = '12px';
  document.body.appendChild(dummy);

  const dummyWidth = $('#ruler').width();
  document.body.removeChild(document.getElementById('ruler'));
  return dummyWidth;
}

/* ----------------------------------------
"centuryFromYear" function:
returns the century based on a given year
---------------------------------------- */

function centuryFromYear(year) {
  const century = Math.floor((Math.abs(year) - 1) / 100) + 1;
  if (year > 0) {
    return century;
  } else {
    return -1 * century;
  }
}

/* ----------------------------------------
"findCent" function:
returns the century based on a given year
or decade
---------------------------------------- */

function findCent(dec) {
  if (dec % 10 == 0) {
    if (dec % 100 != 0) {
      while (dec % 100 != 0) {
        if (dec < 0) {
          dec -= 10;
        } else {
          dec += 10;
        }
      }
    } else {
      if (dec < 0) {
        dec -= 100;
      } else {
        dec += 100;
      }
    }
  } else {
    while (dec % 100 != 0) {
      if (dec < 0) {
        dec -= 1;
      } else {
        dec += 1;
      }
    }
  }
  return dec;
}

// If there is data present in the localStorage
if (data) {
  // Reformat data
  definitions = prepareDefinitions();

  // Assign colors to modalites
  colors = createColors();

  /* --------------------------------
  definition of the earliest as well
  as latest date in the dataset.
  -------------------------------- */
  earliest = d3.min(definitions, (d) => d.emergence);
  const emergenceMax = d3.max(definitions, (d) => d.emergence);
  definitions.forEach((d) => (d.disparition = +d.disparition));
  const disparitionMax = d3.max(definitions, (d) => d.disparition);
  latest = d3.max(definitions, (d) =>
      typeof disparitionMax == 'undefined' || emergenceMax > disparitionMax
          ? d.emergence
          : d.disparition
  );

  /* --------------------------------
  data recoding: prepares emergence
  and disparition data for display
  calculations
  -------------------------------- */
  if (data.dataFormat === 'cent') {
    definitions.forEach((def) => {
      if (def.emergence > 0) {
        def.emergence -= 1;
        def.disparition -= 1;
      }
      if (earliest < 0) {
        def.emergence += Math.abs(earliest);
        def.disparition += Math.abs(earliest);
      }
    });
  } else if (data.dataFormat === 'dec') {
    const r = range10(
        earliest > 0 && latest > 0
            ? findCent(earliest) - 100
            : findCent(earliest),
        findCent(latest) + 100
    );

    definitions.forEach((def) => {
      def.emergence = r.indexOf(def.emergence);
      def.disparition = r.indexOf(def.disparition);
    });
  } else {
    const r = range(
        earliest > 0 && latest > 0 ? findCent(earliest) - 99 : findCent(earliest),
        findCent(latest) + 100
    );
    definitions.forEach((def) => {
      def.emergence = r.indexOf(def.emergence);
      def.disparition = r.indexOf(def.disparition);
    });
  }

  definitions.forEach((def) => {
    def.meaning = def.meaning.charAt(0).toUpperCase() + def.meaning.slice(1);
    def.construct =
        def.construct.charAt(0).toUpperCase() + def.construct.slice(1);
    def.group = def.group.charAt(0).toUpperCase() + def.group.slice(1);
  });

  document
      .querySelectorAll('.invisibleWhenNoData')
      .forEach((elem) => (elem.style.visibility = 'visible'));

  basicDisplay();
}

let windowWidth = $(window).width();
$(window).on('resize', function () {
  if ($(this).width() !== windowWidth) {
    windowWidth = $(this).width();

    relationshipGroup.selectAll('path').remove();
    meaningsGroup.selectAll('g').remove();
    watermarkGroup.select('text').remove();
    scale.selectAll('path').remove();
    scale.selectAll('text').remove();

    drawData();

    d3.selectAll('#network').select('svg').remove();

    drawGraph();
  }
});