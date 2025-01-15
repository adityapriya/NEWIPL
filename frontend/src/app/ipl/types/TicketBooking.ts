
export class TicketBooking {
bookingId:number;
email:string;
matchId:number;
numberOfTickets:number;
constructor(bookingId:number,
    email:string,
    matchId:number,
    numberOfTickets:number){
        this.bookingId = bookingId;
        this.email = email;
        this.matchId =matchId;
        this.numberOfTickets = numberOfTickets;
    }
    displayInfo():void{
        console.log(`booking ID: ${this.bookingId},email: ${this.email}, Number of tickets: ${this.numberOfTickets}`);
    }
}