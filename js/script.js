const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Bin',
                    avatar: './img/avatar_bin.png',
                    filter: true,
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '16:15',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Lyney',
                    avatar: './img/avatar_lyney.png',
                    filter: true,
                    visible: false,
                    messages: [
                        {
                            date: '16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Paimon',
                    avatar: './img/avatar_paimon.png',
                    filter: true,
                    visible: false,
                    messages: [
                        {
                            date: '10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '16:15',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Yae',
                    avatar: './img/avatar_yae.png',
                    filter: true,
                    visible: false,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_default.jpg',
                    filter: true,
                    visible: false,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_default.jpg',
                    filter: true,
                    visible: false,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_default.jpg',
                    filter: true,
                    visible: false,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Filippo',
                    avatar: './img/avatar_default.jpg',
                    filter: true,
                    visible: false,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '15:51',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]

        }
    },
    methods: {
        /* funzione che cambia la chat visualizzata dopo averla clickata dalla lista */
        active(i) {
            // metto l'attributo visible a false per ogni contatto nell'array contacts
            for (let index = 0; index < this.contacts.length; index++) {
                this.contacts[index].visible = false;
            }

            //imposto l'attributo visible a true per il contatto che ho cliccato
            this.contacts[i].visible = true;
        },
        /* funzione che manda il messaggio e una risposta nella chat */
        invia(msg) {
            //cerco il contatto con visible a true
            for (let i = 0; i < this.contacts.length; i++) {
                let temp = this.contacts[i]; //variabile temporanea (con visibilità solo nel for) per non scrivere sempre this.contacts[i]
                if (temp.visible) {
                    //creo l'oggetto messaggio da aggiungere in coda all'array messages
                    let time = new Date();
                    const messageSent = {date: time.getHours() + ':' + time.getMinutes(), message: msg, status: 'sent'};

                    //aggiungo il messaggio
                    temp.messages.push(messageSent);

                    //aspetto un secondo e stampo la risposta
                    setTimeout(function() {
                        //creo l'oggetto messaggio di risposta da aggiungere in coda all'array messages
                        const messageReceived = {date: time.getHours() + ':' + time.getMinutes(), message: 'ok', status: 'received'};

                        //aggiungo il messaggio
                        temp.messages.push(messageReceived);
                    }, 1000);
                }
            }
        },
        /* funzione che filtra i contatti dalla lista e visualizza solo quelli che iniziano con quanto digitato */
        cerca(search) {
            for (let i = 0; i < this.contacts.length; i++) {
                let temp = this.contacts[i]; //variabile temporanea (con visibilità solo nel for) per non scrivere sempre this.contacts[i]
                if (temp.name.toLowerCase().startsWith(search.toLowerCase())) {
                    temp.filter = true;
                } else {
                    temp.filter = false;
                }
            }
        }
    }

}).mount("#app")