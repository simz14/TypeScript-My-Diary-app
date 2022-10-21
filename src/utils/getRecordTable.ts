export function getRecordTabel(
  ID: number,
  Date: any,
  title: string,
  notes: string
) {
  //THIS IS FIRST ROW / SEPARATOR /LAST ROW
  let starter: string = "8---------------------------------------8";
  let separator: string = "|---------------------------------------|";
  let lastRow: string = "<3--------------------------------------<3 ";

  //THIS IS ID ROW
  let space: string = " ";
  let fullLength: number = starter.length;
  //console.log(fullLength);

  let IDRow: any = `| ID/${ID}`;
  let IDRowLength: number = IDRow.length;

  let spacesForId: string = "";
  let spacesLength: any = fullLength - IDRowLength - 1;
  for (let i = 0; i < spacesLength; i++) {
    spacesForId += space;
  }

  console.log(starter);

  console.log(`${IDRow}${spacesForId}|`);
  console.log(separator);

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

getRecordTabel(3, "11.11", "Hello", "vnfu diyl");
