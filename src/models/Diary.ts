/* Diary Class
    /Parametre/
        list - (array of objects(DayRecords)) - zoznam vsetkych zapisov do dennika ✅

    /Metody/
        load - nacitanie vsetkych zaznamov z Textoveho suboru do listu
        save - ulozenie existujucich zaznamov z listu do textoveho suboru✅
                |-> tieto 2 metody budu klucove k tomu aby sme sa vedeli k nasim datam dostat aj po vypnuti programu

        addDayRecord - ulozenie si zaznamu do dennika ✅
        removeDayRecord - vymazanie zaznamu z dennika✅
        rewriteDayRecord - prepisanie daneho zaznamu v denniku (prepise poznamky z daneho zaznamu)✅
        getDayRecord - vrati dany zaznam z denniku na zaklade IDcka ktore tam vlozime ,OUTPUT bude vyzerat takto

        8---------------------------------------8
        | ID | 3                                |     
        |---------------------------------------|
        | 11.11.2022                            |
        |---------------------------------------|
        |  Najlepsi den zivota                  |
        |---------------------------------------|
        |   Tu pojde text blablabla blablabla   |
        |    poznamky z daneho dna blablablab   |
        |    poznamky z daneho dna blablablab   |
        |    poznamky z daneho dna blablablab   |
        |    poznamky z daneho dna blablablab   |
        |    poznamky z daneho dna blablablab   |
        |    poznamky z daneho dna blablablab   |
        <3--------------------------------------<3

 */

import { DayRecord } from "./Record_sub";

export class Diary {
  protected list: DayRecord[] = [];
  constructor() {}

  addDayRecord(DayRecord: DayRecord) {
    this.list.push(DayRecord);
  }
  removeDayRecord(remove: DayRecord) {
    this.list = this.list.filter((record) => record !== remove);
  }
  rewriteDayRecord(recordID: number, rewrite: string) {
    this.list.map(function (record: DayRecord) {
      if (record.getID() === recordID) {
        record.setNotes(rewrite);
      }
    });
  }
  save(list: DayRecord[] = this.list) {
    let saver: string = "";
    const fs = require("fs");
    list.map(function (record: DayRecord) {
      saver += `${record.getID()},${record.getDate()},${record.getTitle()},${record.getNotes()}/`;
    });
    fs.writeFileSync("src/data/Diary.txt", saver);
  }
  load() {
    const fs = require("fs");
    let content = fs.readFileSync("src/data/Diary.txt", "utf8");
    let splittedCByLine: string[] = content.split("/");
    let splittedByComma: string[][] = [];

    for (let i = 0; i < splittedCByLine.length - 1; i++) {
      splittedByComma.push(splittedCByLine[i].split(","));
    }

    let list = this.list;
    let load = new Map();
    splittedByComma.map(function (data: any) {
      load.set("ID", data[0]);
      load.set("Date", data[1]);
      load.set("Title", data[2]);
      load.set("Notes", data[3]);
    });
    console.log(list);
  }
}
