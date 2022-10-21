/* DayRecord class
    /Parametre/
    ID(cislo zaznamu aby sme vedeli vyberat data podla niecoho ak ich chceme prepisat)  -–> 1
    Date (den vytvorenia - najdi si na googli laska JS get current day )
    title(nazov zaznamu "Uprsany Pondelok")
    notes(nejake poznamky nasho uzivatela napriklad "Dnes bol celkom v pohode den , mal som sa dobre , urobil som vsetko co som mal az na par veci 🙁")

    addNote() - urobi poznamku k danemu DayRecordu do noveho riadku */
import { getCurrentDay } from "../utils/getCurrentDay";

export class DayRecord {
  protected ID: number;
  protected title: string;
  protected notes: string;
  protected Date: string;

  constructor(
    ID: number,
    title: string,
    notes: string,
    Date: string = getCurrentDay()
  ) {
    this.ID = ID;
    this.title = title;
    this.notes = notes;
    this.Date = Date;
  }
  getDate(): any {
    return this.Date;
  }
  getNotes(): string {
    return this.notes;
  }
  setNotes(str: string) {
    this.notes = str;
  }
  getID(): number {
    return this.ID;
  }
  getTitle(): string {
    return this.title;
  }
  //+ note in next row
  addNote(note: string) {
    this.notes += "\n" + `${note}`;
  }
}
