import { Diary } from "./src/models/Diary";
import { DayRecord } from "./src/models/Record_sub";
import { getRecordTable } from "./src/utils/getRecordTable";

let diary = new Diary();

let r1 = new DayRecord(1, "Hello", "This is first record");
let r2 = new DayRecord(2, "Hello", "This is second record");
let r3 = new DayRecord(3, "Hello", "This is third record");

diary.addDayRecord(r1);
diary.addDayRecord(r2);
diary.addDayRecord(r3);

diary.save();
diary.load();

getRecordTable(
  3,
  "11.11",
  "Hello",
  "hfdlg hjghrjlea .hfejak. hbjgrke. arhial-hrjia-jg -hila-jrkhkuegrkagjhwa.hfuw hgirehail.ysjoehfi hiťšoôsupesuérep§eoťjžťjop§ n iô-"
);
