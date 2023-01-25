/*
Create a class named "RaffleTickets" with no arguments.
Need to store name with ticket number, and create a array within that stores the ticket numbers.
Add a method that will add a participant, it should take in a string "name" and a number "ticket", storing the ticket in a key value pair with the name and also put it in the array
Add a method to pick a random ticket from the array, then display the winners name
*/

class RaffleTickets {
    constructor() {
        this.tickets = [];
        this.participants = {};
    }

    addParticipant(name, ticket) {
        if (this.tickets.includes(ticket)) {
            throw Error("That ticket number has already been selected.");
        }

        if (ticket <= 0) {
            throw Error("Ticket must be a positive number.")
        }
        
        if (!this.participants[name]) {
            this.participants[name] = [];
        }

        this.tickets.push(ticket);
        this.participants[name].push(ticket);

    }

    addParticipantRandNum(name, max) {
        const randNum = Math.floor(Math.random() * max)
        
        if (!this.participants[name]) {
            this.participants[name] = [];
        }

        this.tickets.push(randNum);
        this.participants[name].push(randNum);

    }

    drawParticipant() {
        const randIndex = Math.floor(Math.random() * this.tickets.length);
        const winningNum = this.tickets[randIndex];

        for (const person in this.participants) {
            if (this.participants[person].includes(winningNum)) {
                console.log(`${person} is the winner!`);
                return;
            }
        }
    }
}

const giftBox = new RaffleTickets();

giftBox.addParticipantRandNum("Trey Walker", 10000);
giftBox.addParticipantRandNum("Trey Walker", 10000);
giftBox.addParticipantRandNum("Jon Walker", 10000);
giftBox.addParticipantRandNum("Paul Walker", 10000);
giftBox.addParticipantRandNum("Paul Walker", 10000);
giftBox.addParticipantRandNum("Dava Walker", 10000);
giftBox.addParticipantRandNum("John Forrest", 10000);
giftBox.addParticipantRandNum("John Doe", 10000);
giftBox.addParticipantRandNum("Jane Doe", 10000);
giftBox.addParticipantRandNum("Some Rando", 10000);

giftBox.drawParticipant();
