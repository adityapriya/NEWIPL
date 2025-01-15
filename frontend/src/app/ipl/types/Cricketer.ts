export class Cricketer {
    cricketerId: number;
    teamId: number;
    cricketerName: string;
    age: number;
    nationality: string;
    experience: number;
    role: string;
    totalRuns: number;
    totalWickets: number;
  
    constructor(cricketerId: number, teamId: number, cricketerName: string, age: number, nationality: string, experience: number, role: string, totalRuns: number, totalWickets: number) {
      this.cricketerId = cricketerId;
      this.teamId = teamId;
      this.cricketerName = cricketerName;
      this.age = age;
      this.nationality = nationality;
      this.experience = experience;
      this.role = role;
      this.totalRuns = totalRuns;
      this.totalWickets = totalWickets;
    }
  
    displayInfo(): void {
      console.log(`Cricketer ID: ${this.cricketerId}\n Team ID: ${this.teamId}\n Name: ${this.cricketerName}\n Age: ${this.age}\n Nationality: ${this.nationality}\n Experience: ${this.experience}\n Role: ${this.role}\n Total Runs: ${this.totalRuns}\n Total Wickets: ${this.totalWickets}`);
    }
  }
  