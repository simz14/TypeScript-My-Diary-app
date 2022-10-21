/* Diary Class
    /Parametre/
        list - (array of objects(DayRecords)) - zoznam vsetkych zapisov do dennika ✅

    /Metody/
        load - nacitanie vsetkych zaznamov z Textoveho suboru do listu
        save - ulozenie existujucich zaznamov z listu do textoveho suboru
                |-> tieto 2 metody budu klucove k tomu aby sme sa vedeli k nasim datam dostat aj po vypnuti programu

        addDayRecord - ulozenie si zaznamu do dennika ✅
        removeDayRecord - vymazanie zaznamu z dennika
        rewriteDayRecord - prepisanie daneho zaznamu v denniku (prepise poznamky z daneho zaznamu)
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

import { DayRecord } from "./Record";

export class Diary {
  protected list: DayRecord[] = [];
  constructor() {}

  addDayRecord(DayRecord: DayRecord) {
    this.list.push(DayRecord);
  }
  removeDayRecord(remove: DayRecord) {
    this.list = this.list.filter((record) => record !== remove);
  }
}
