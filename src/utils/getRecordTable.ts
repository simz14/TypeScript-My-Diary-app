import { loadavg } from "os";

export function getRecordTable(
  ID: number,
  Date: any,
  title: string,
  notes: string
) {
  //THIS IS FIRST ROW / SEPARATOR /LAST ROW
  let starter: string = "8---------------------------------------8";
  let separator: string = "|---------------------------------------|";
  let lastRow: string = "<3--------------------------------------<3 ";

  let space: string = " ";
  let fullLength: number = starter.length;
  //console.log(fullLength);

  //THIS FUNCTION CREATES THE TABLE PART
  function getRow(rowTopic: string) {
    let Row: string = `| ${rowTopic}`;
    let RowLength: number = Row.length;

    let result: string = ``;
    //THIS PART WORKS WITH ROWS THAT ARE SHORTER THAN FULL LENGTH
    if (RowLength < fullLength) {
      let spacesForRow: string = "";
      let spacesLength: any = fullLength - RowLength - 1;
      for (let i = 0; i < spacesLength; i++) {
        spacesForRow += space;
      }
      result = `${Row}${spacesForRow}|`;
      //THIS PART WOTKS WITH THE LONGER ONES
    } else {
      //ROWCOUNT COUNT HOW MANY ROWS ARE NEEDED FOR THU FULL LENGTH OF TOPIC (LIKE NOTES)
      let RowCount: number = Math.ceil(rowTopic.length / 37);
      //console.log(RowCount);

      let result2 = "";
      let currentRound = 0;
      //THIS LOOP IS MANAGING THE NEXT LOOP (HOW MANY TIMES IT SHOULD GO = ROWCOUNT)
      for (let i = 0; i < RowCount; i++) {
        //console.log(currentRound);
        //THIS LOOP SVAES THE LETTER FROM CURRENT ROUND (FROM 0 - 36, 37, - 74, 74 - 111)
        //FIRST IF TELLS: IF THERE IS A LETTER THAN.....IF THERE IS NOT IT SHOULD RETURN SPACE

        for (let j = currentRound; j < (i + 1) * 37; j++) {
          if (rowTopic[j]) {
            //THIS IF ASKS IF THE LETTER IS THE LAST ONE AND THEN IT ADDS |\n TO THE END
            if (j === (i + 1) * 37 - 1) {
              result2 += `${rowTopic[j]} |\n`;
            }

            //THIS IF ASKS IF THE LETTER IS THE FIRS ONE AND THEN IT ADDS | TO THE BEGINNING
            if (j === currentRound) {
              result2 += `| ${rowTopic[j]}`;
            }
            if (j !== currentRound && j !== (i + 1) * 37 - 1) {
              result2 += `${rowTopic[j]}`;
              //console.log(rowTopic[j]);
              //console.log(currentRound);
            }
          } else {
            result2 += `${space}`;
          }
        }

        currentRound += 37;
      }
      result += `${result2} |`;
    }

    console.log(result);
  }

  console.log(starter);
  getRow(`${ID}`);
  console.log(separator);
  getRow(`${Date}`);
  console.log(separator);
  getRow(`${title}`);
  console.log(separator);
  getRow(`${notes}`);
  console.log(lastRow);
}

/*     8---------------------------------------8
        | ID | 3                                |     
        |---------------------------------------|
        | 11.11.2022                            |
        |---------------------------------------|
        | Najlepsi den zivota                   |
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
